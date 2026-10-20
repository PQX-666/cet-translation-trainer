import { useState, useMemo, useEffect, useRef } from 'react'
import { patterns, topicPhrases, topicVocab, passages } from '../data'
import { getDailyReviewItems, ratePattern, ratePhrase, rateVocab, rateSentence, getStageName, loadData, saveData } from '../utils/storage'
import { Undo2, Zap, BookOpen } from 'lucide-react'

const ratingOptions = [
  { value: 0, label: '忘了', color: 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:text-red-400 dark:border-red-500/20', key: '1' },
  { value: 1, label: '模糊', color: 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/20', key: '2' },
  { value: 2, label: '记得', color: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/20', key: '3' },
  { value: 3, label: '很熟', color: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:hover:bg-green-500/20 dark:text-green-400 dark:border-green-500/20', key: '4' },
]

function getAllVocabItems() {
  const items = []
  Object.entries(topicVocab).forEach(([topic, words]) => {
    words.forEach(w => items.push({ ...w, topic, id: `${topic}::${w.cn}` }))
  })
  return items
}

function getAllSentenceItems() {
  const items = []
  passages.forEach(p => {
    (p.sentences || []).forEach((s, idx) => {
      items.push({ ...s, passageId: p.id, passageTitle: p.title, sentenceIndex: idx, year: p.year, level: p.level })
    })
  })
  return items
}

function getFallbackItems(sentenceItems = []) {
  const data = loadData()
  const now = Date.now()
  const vocabItems = getAllVocabItems()

  const patternItems = Object.entries(data.patternProgress)
    .filter(([_, p]) => p.stage > 0 && p.stage < 6)
    .sort((a, b) => (a[1].nextReview || now) - (b[1].nextReview || now))
    .slice(0, 6)
    .map(([id, p]) => {
      const pattern = patterns.find(pt => pt.id === id)
      return pattern ? { ...pattern, progress: p, itemType: 'pattern' } : null
    })
    .filter(Boolean)

  const phraseItems = Object.entries(data.phraseProgress)
    .filter(([_, p]) => p.stage > 0 && p.stage < 6)
    .sort((a, b) => (a[1].nextReview || now) - (b[1].nextReview || now))
    .slice(0, 6)
    .map(([id, p]) => {
      const phrase = topicPhrases.find(ph => ph.id === id)
      return phrase ? { ...phrase, progress: p, itemType: 'phrase' } : null
    })
    .filter(Boolean)

  const vocabList = Object.entries(data.vocabProgress || {})
    .filter(([_, p]) => p.stage > 0 && p.stage < 6)
    .sort((a, b) => (a[1].nextReview || now) - (b[1].nextReview || now))
    .slice(0, 6)
    .map(([id, p]) => {
      const vocab = vocabItems.find(v => v.id === id)
      return vocab ? { ...vocab, progress: p, itemType: 'vocab' } : null
    })
    .filter(Boolean)

  const sentenceList = Object.entries(data.sentenceProgress || {})
    .filter(([_, p]) => p.stage > 0 && p.stage < 6)
    .sort((a, b) => (a[1].nextReview || now) - (b[1].nextReview || now))
    .slice(0, 6)
    .map(([id, p]) => {
      const sentence = sentenceItems.find(s => s.id === id)
      return sentence ? { ...sentence, progress: p, itemType: 'sentence' } : null
    })
    .filter(Boolean)

  return [...patternItems, ...phraseItems, ...vocabList, ...sentenceList].sort((a, b) => (a.progress.stage || 0) - (b.progress.stage || 0))
}

export default function ReviewSystem({ appData, onDataChange, onNavigate }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [finished, setFinished] = useState(false)
  const [lastAction, setLastAction] = useState(null)
  const [autoMode, setAutoMode] = useState(false)
  const [recallInput, setRecallInput] = useState('')
  const [reviewedKeys, setReviewedKeys] = useState(() => new Set())
  const autoTimer = useRef(null)
  const undoTimeout = useRef(null)

  const allVocabItems = useMemo(() => getAllVocabItems(), [])
  const allSentenceItems = useMemo(() => getAllSentenceItems(), [])
  const dueItems = useMemo(
    () => getDailyReviewItems(patterns, topicPhrases, allVocabItems, allSentenceItems),
    [appData, allVocabItems, allSentenceItems]
  )
  const fallbackItems = useMemo(
    () => dueItems.length === 0 ? getFallbackItems(allSentenceItems) : [],
    [appData, dueItems.length, allSentenceItems]
  )
  const itemKey = item => `${item.itemType}:${item.id}`
  // 评分后该条目的 nextReview 会变成未来时间，dueItems 立即缩短；
  // 若此时再 currentIdx+1，就会跳过下一条。这里按“本次会话已评”过滤。
  const reviewItems = (dueItems.length > 0 ? dueItems : fallbackItems)
    .filter(item => !reviewedKeys.has(itemKey(item)))

  // Find next batch of items becoming due
  const nextDueInfo = useMemo(() => {
    const now = Date.now()
    let closest = Infinity
    let count = 0
    const allProgress = [
      ...Object.values(appData.patternProgress || {}),
      ...Object.values(appData.phraseProgress || {}),
      ...Object.values(appData.vocabProgress || {}),
    ]
    allProgress.forEach(p => {
      if (p.nextReview && p.nextReview > now && p.stage < 8) {
        if (p.nextReview < closest) closest = p.nextReview
        if (p.nextReview - now < 3600000) count++ // within 1 hour
      }
    })
    if (closest === Infinity) return null
    const minutes = Math.round((closest - now) / 60000)
    return { minutes, count }
  }, [appData])

  const isDue = dueItems.length > 0
  const totalLearned =
    Object.keys(appData.patternProgress || {}).length +
    Object.keys(appData.phraseProgress || {}).length +
    Object.keys(appData.vocabProgress || {}).length

  const handleRate = (quality) => {
    if (!reviewItems[currentIdx]) return
    const item = reviewItems[currentIdx]
    const key = itemKey(item)
    // 评分前的完整快照，用于真正撤销（而不是再评一次）
    const undoInfo = { item, key, idx: currentIdx, snapshot: loadData() }

    if (item.itemType === 'pattern') {
      ratePattern(item.id, quality, null)
    } else if (item.itemType === 'phrase') {
      ratePhrase(item.id, quality, null)
    } else if (item.itemType === 'vocab') {
      rateVocab(item.id, quality)
    } else if (item.itemType === 'sentence') {
      const attempt = recallInput.trim()
      rateSentence(item.id, quality, {
        passageId: item.passageId,
        sentenceIndex: item.sentenceIndex,
        firstTranslation: attempt,
        revision: '',
        skipped: !attempt,
        countsForSrs: Boolean(attempt),
      })
    }

    const nextReviewed = new Set(reviewedKeys)
    nextReviewed.add(key)
    setReviewedKeys(nextReviewed)
    setShowAnswer(false)
    setRecallInput('')
    setLastAction(undoInfo)
    clearTimeout(undoTimeout.current)
    undoTimeout.current = setTimeout(() => setLastAction(null), 5000)

    const remaining = reviewItems.filter(it => !nextReviewed.has(itemKey(it)))
    if (remaining.length === 0) setFinished(true)
    onDataChange()
  }

  const handleUndo = () => {
    if (!lastAction) return
    const { key, idx, snapshot } = lastAction
    saveData(snapshot)
    setReviewedKeys(prev => {
      const next = new Set(prev)
      next.delete(key)
      return next
    })
    setCurrentIdx(idx)
    setShowAnswer(false)
    setFinished(false)
    setLastAction(null)
    clearTimeout(undoTimeout.current)
    onDataChange()
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (finished || reviewItems.length === 0) return
      if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault()
        if (!showAnswer) setShowAnswer(true)
      }
      if (showAnswer) {
        const rating = ratingOptions.find(r => r.key === e.key)
        if (rating) handleRate(rating.value)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [finished, reviewItems, showAnswer, handleRate])

  // Auto-mode: show answer after 4 seconds
  useEffect(() => {
    if (!autoMode || showAnswer || finished) return
    autoTimer.current = setTimeout(() => {
      setShowAnswer(true)
    }, 4000)
    return () => clearTimeout(autoTimer.current)
  }, [autoMode, showAnswer, finished, currentIdx])

  if (finished || reviewItems.length === 0) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">智能复习</h2>

        {totalLearned === 0 ? (
          <div className="card p-12 text-center">
            <h3 className="text-lg font-bold text-ink-700 dark:text-cream-200 mb-2">还没有学习记录</h3>
            <p className="text-ink-500 dark:text-ink-400 mb-4">
              去「真题练习」翻译真题，或去「快速记忆」刷句型词组，<br />
              系统会自动安排间隔复习。
            </p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={() => onNavigate('practice')} className="btn-primary text-sm flex items-center gap-1.5">
                <BookOpen size={14} /> 真题练习
              </button>
              <button onClick={() => onNavigate('memory')} className="btn-secondary text-sm flex items-center gap-1.5">
                <Zap size={14} /> 快速记忆
              </button>
            </div>
          </div>
        ) : (
          <div className="card p-12 text-center">
            <h3 className="text-lg font-bold text-ink-700 dark:text-cream-200 mb-2">
              {finished ? '本轮复习完成！' : '暂无到期内容'}
            </h3>
            <p className="text-ink-500 dark:text-ink-400 mb-4">
              {finished
                ? '继续保持，系统会在合适的时间安排下一轮复习。'
                : '所有已学项目都在按计划复习中。'}
            </p>
            {nextDueInfo && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-4">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {nextDueInfo.minutes <= 0 ? '即将有项目到期'
                    : nextDueInfo.minutes < 60 ? `${nextDueInfo.minutes} 分钟后`
                    : nextDueInfo.minutes < 1440 ? `约 ${Math.round(nextDueInfo.minutes / 60)} 小时后`
                    : `约 ${Math.round(nextDueInfo.minutes / 1440)} 天后`}
                </span>
                <span className="text-xs text-blue-500 dark:text-blue-400">
                  有 {nextDueInfo.count} 个项目
                </span>
              </div>
            )}
            <div className="flex items-center justify-center gap-3 mb-4">
              <button onClick={() => onNavigate('memory')} className="btn-secondary text-sm flex items-center gap-1.5">
                <Zap size={14} /> 学习新内容
              </button>
            </div>
            <div className="text-xs text-ink-400 dark:text-ink-500">
              已学习 {totalLearned} 个项目
            </div>
          </div>
        )}

        <div className="card p-4">
          <h3 className="font-bold text-ink-800 dark:text-cream-200 text-sm mb-2">复习节奏（艾宾浩斯）</h3>
          <div className="flex gap-1">
            {['新学', '20分', '1时', '1天', '2天', '6天', '14天', '30天', '掌握'].map((name, i) => (
              <div key={i} className="flex-1 text-center">
                <div className="h-1.5 rounded-full mb-1 bg-cream-200 dark:bg-ink-700" />
                <div className="text-[9px] text-ink-400 dark:text-ink-500">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const item = reviewItems[currentIdx]
  const progress = item.progress || {}
  const typeLabel = item.itemType === 'pattern' ? '句型'
    : item.itemType === 'phrase' ? '短语'
    : item.itemType === 'sentence' ? '整句'
    : '词汇'
  const typeTagColor = item.itemType === 'pattern'
    ? 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400'
    : item.itemType === 'phrase'
      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
      : item.itemType === 'sentence'
        ? 'bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400'
        : 'bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">智能复习</h2>
          <p className="text-ink-500 dark:text-ink-400 mt-1 text-sm">
            {isDue ? '艾宾浩斯到期复习 · 空格显示答案 / 1-4评分' : '自主巩固复习 · 空格显示答案 / 1-4评分'}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!isDue && (
            <span className="tag bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs">自主模式</span>
          )}
          <button
            onClick={() => { setAutoMode(a => !a); setShowAnswer(false) }}
            className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
              autoMode
                ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400'
                : 'bg-cream-200 dark:bg-ink-700 text-ink-400 dark:text-ink-500 hover:bg-cream-300 dark:hover:bg-ink-600'
            }`}
            title="自动模式：4秒后自动显示答案"
          >
            {autoMode ? '自动中' : '自动'}
          </button>
          <span className="text-sm text-ink-500 dark:text-ink-400">
            {currentIdx + 1} / {reviewItems.length}
          </span>
        </div>
      </div>

      {/* Progress + Undo */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-cream-200 dark:bg-ink-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-400 dark:bg-amber-500 rounded-full transition-all"
            style={{ width: `${((currentIdx + 1) / reviewItems.length) * 100}%` }}
          />
        </div>
        {lastAction && (
          <button
            onClick={handleUndo}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-all flex-shrink-0"
          >
            <Undo2 size={13} />
            撤销
          </button>
        )}
      </div>

      {/* Review card */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="tag bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400">
            {getStageName(progress.stage || 0)}
          </span>
          <span className={`tag ${typeTagColor}`}>{typeLabel}</span>
          {item.topic && <span className="tag bg-cream-200 dark:bg-ink-700 text-ink-500 dark:text-ink-400">{item.topic}</span>}
          {item.structure && <span className="text-xs font-mono text-ink-400 dark:text-ink-500">{item.structure}</span>}
        </div>

        {/* Source context */}
        {progress.sources && progress.sources.length > 0 && (
          <div className="text-[11px] text-ink-400 dark:text-ink-500 mb-3">
            来源：
            {progress.sources.slice(0, 3).map((s, i) => (
              <span key={i} className="mr-2">
                {s.passageId} 第{(s.sentenceIndex || 0) + 1}句
                {i < Math.min(progress.sources.length, 3) - 1 ? '、' : ''}
              </span>
            ))}
            {progress.sources.length > 3 && <span>等{progress.sources.length}处</span>}
          </div>
        )}

        <div className="bg-cream-50 dark:bg-ink-900 rounded-xl p-4 border border-cream-200 dark:border-ink-700 mb-4">
          <p className="text-sm text-ink-400 dark:text-ink-500 mb-1">回忆以下内容</p>
          <p className="text-base font-medium text-ink-800 dark:text-cream-100 leading-relaxed">{item.cn}</p>
        </div>

        {item.itemType === 'sentence' && !showAnswer && (
          <textarea
            className="w-full min-h-[70px] p-3 mb-4 rounded-lg border border-cream-300 dark:border-ink-600 bg-cream-50 dark:bg-ink-900 text-ink-800 dark:text-cream-100 placeholder-ink-300 dark:placeholder-ink-500 focus:outline-none focus:border-amber-400 dark:focus:border-amber-500 text-sm leading-relaxed font-serif resize-y"
            placeholder="先默写英文再对照答案；留空也能看答案，但不会推进记忆进度"
            value={recallInput}
            onChange={e => setRecallInput(e.target.value)}
          />
        )}

        {item.itemType === 'sentence' && showAnswer && recallInput.trim() && (
          <div className="mb-4 rounded-xl p-3 border border-cream-200 dark:border-ink-700 bg-white/60 dark:bg-ink-800/60">
            <div className="text-xs text-ink-400 dark:text-ink-500 mb-1">你的译文</div>
            <p className="text-sm font-serif text-ink-700 dark:text-cream-200 leading-relaxed">{recallInput}</p>
          </div>
        )}

        {showAnswer && (
          <div className="rounded-xl p-4 bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20 mb-4">
            <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">参考答案</div>
            <div className="text-sm font-serif text-ink-800 dark:text-cream-300 italic leading-relaxed">{item.en}</div>
          </div>
        )}

        {!showAnswer ? (
          <button onClick={() => setShowAnswer(true)} className="btn-secondary w-full text-sm">
            显示答案（空格键）
          </button>
        ) : (
          <div>
            <p className="text-sm text-ink-500 dark:text-ink-400 mb-3 text-center">
              你回忆得怎么样？
              <span className="text-xs text-ink-300 dark:text-ink-500 ml-1">(键盘 1-4)</span>
            </p>
            <div className="grid grid-cols-4 gap-2">
              {ratingOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleRate(opt.value)}
                  className={`py-3 px-2 rounded-xl text-sm font-medium transition-all border ${opt.color}`}
                >
                  <div>{opt.label}</div>
                  <div className="text-[10px] opacity-60 mt-0.5">{opt.key}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stage indicator */}
      <div className="card p-4">
        <div className="text-xs text-ink-400 dark:text-ink-500 mb-2">{item.name || item.cn} · 记忆进度</div>
        <div className="flex gap-1">
          {['新学', '20分', '1时', '1天', '2天', '6天', '14天', '30天', '掌握'].map((name, i) => (
            <div key={i} className="flex-1 text-center">
              <div className={`h-2 rounded-full mb-1 ${i <= (progress.stage || 0) ? 'bg-amber-400 dark:bg-amber-500' : 'bg-cream-200 dark:bg-ink-700'}`} />
              <div className={`text-[9px] ${i <= (progress.stage || 0) ? 'text-amber-700 dark:text-amber-400 font-medium' : 'text-ink-300 dark:text-ink-600'}`}>
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
