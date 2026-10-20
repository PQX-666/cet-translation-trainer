import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { patterns, topicPhrases, topicVocab, allTopics } from '../data'
import { ratePattern, ratePhrase, rateVocab, loadData, saveData } from '../utils/storage'
import { Shuffle, Filter, Undo2 } from 'lucide-react'

const ratingOptions = [
  { value: 0, label: '忘了', color: 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:text-red-400 dark:border-red-500/20', key: '1' },
  { value: 1, label: '模糊', color: 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/20', key: '2' },
  { value: 2, label: '记得', color: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/20', key: '3' },
  { value: 3, label: '很熟', color: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:hover:bg-green-500/20 dark:text-green-400 dark:border-green-500/20', key: '4' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function QuickMemory({ appData, onDataChange, navParams }) {
  const [tab, setTab] = useState(() => navParams?.tab || 'patterns')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const [topicFilter, setTopicFilter] = useState(() => navParams?.filter || 'all')
  const [lastAction, setLastAction] = useState(null)
  const undoTimeout = useRef(null)

  useEffect(() => {
    if (navParams) {
      setTab(navParams.tab || 'patterns')
      setTopicFilter(navParams.filter || 'all')
      setCurrentIdx(navParams.startFrom || 0)
      setShowAnswer(false)
      setShuffled(false)
    }
  }, [navParams])

  const tabs = [
    { id: 'patterns', label: '句型模板', count: patterns.length },
    { id: 'phrases', label: '翻译词组', count: topicPhrases.length },
    { id: 'vocab', label: '话题词汇', count: Object.values(topicVocab).flat().length },
  ]

  const allVocabItems = useMemo(() => {
    const items = []
    Object.entries(topicVocab).forEach(([topic, words]) => {
      words.forEach(w => items.push({ ...w, topic, id: `${topic}::${w.cn}` }))
    })
    return items
  }, [])

  const items = useMemo(() => {
    let list
    switch (tab) {
    case 'patterns':
      list = patterns.map(p => ({ ...p, itemType: 'pattern' }))
      break
    case 'phrases':
      list = topicPhrases.map(p => ({ ...p, itemType: 'phrase' }))
      break
    case 'vocab':
      list = allVocabItems.map(v => ({ ...v, itemType: 'vocab' }))
      break
    default:
      list = []
    }
    if (topicFilter !== 'all') {
      list = list.filter(item => item.topic === topicFilter)
    }
    if (shuffled) list = shuffle(list)
    return list
  }, [tab, shuffled, topicFilter, allVocabItems])

  const current = items[currentIdx]
  const total = items.length
  const progress = current
    ? (appData.patternProgress?.[current.id] || appData.phraseProgress?.[current.id] || appData.vocabProgress?.[current.id])
    : null

  const handleTabChange = (newTab) => {
    setTab(newTab)
    setCurrentIdx(0)
    setShowAnswer(false)
    setShuffled(false)
    setTopicFilter('all')
  }

  const handleShuffle = useCallback(() => {
    setShuffled(true)
    setCurrentIdx(0)
    setShowAnswer(false)
  }, [])

  const handleRate = useCallback((quality) => {
    if (!current) return
    const undoInfo = { item: current, idx: currentIdx, quality, tab, filter: topicFilter, snapshot: loadData() }
    if (current.itemType === 'pattern') {
      ratePattern(current.id, quality, null)
    } else if (current.itemType === 'phrase') {
      ratePhrase(current.id, quality, null)
    } else if (current.itemType === 'vocab') {
      rateVocab(current.id, quality)
    }
    setShowAnswer(false)
    setLastAction(undoInfo)
    clearTimeout(undoTimeout.current)
    undoTimeout.current = setTimeout(() => setLastAction(null), 5000)
    if (currentIdx < total - 1) {
      setCurrentIdx(prev => prev + 1)
    } else {
      setCurrentIdx(0)
      setShuffled(false)
    }
    onDataChange()
  }, [current, currentIdx, total, tab, topicFilter, onDataChange])

  const handleUndo = useCallback(() => {
    if (!lastAction) return
    // 直接用评分前的快照恢复，避免“再评一次记得”反而推进 SRS 阶段
    const { idx, snapshot } = lastAction
    saveData(snapshot)
    setCurrentIdx(idx)
    setShowAnswer(false)
    setLastAction(null)
    clearTimeout(undoTimeout.current)
    onDataChange()
  }, [lastAction, onDataChange])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (!current) return
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
  }, [current, showAnswer, handleRate])

  if (!current) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">快速记忆</h2>
        <div className="card p-12 text-center">
          <p className="text-ink-500 dark:text-ink-400 mb-4">当前筛选条件下无内容。</p>
          {topicFilter !== 'all' && (
            <button onClick={() => setTopicFilter('all')} className="btn-secondary text-sm">
              清除话题筛选
            </button>
          )}
        </div>
      </div>
    )
  }

  const isVocab = tab === 'vocab'
  const displayText = current.cn
  const answerText = current.en || ''

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">快速记忆</h2>
          <p className="text-ink-500 dark:text-ink-400 mt-1 text-sm">
            自由刷句型、词组和话题词汇 · <span className="text-xs">空格显示答案 / 1-4 评分</span>
          </p>
        </div>
        <div className="text-sm text-ink-500 dark:text-ink-400">
          {currentIdx + 1} / {total}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-cream-200/50 dark:bg-ink-700/50 rounded-xl p-1">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => handleTabChange(t.id)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              tab === t.id
                ? 'bg-white dark:bg-ink-800 text-ink-800 dark:text-cream-100 shadow-sm'
                : 'text-ink-500 dark:text-ink-400 hover:text-ink-700 dark:hover:text-cream-200'
            }`}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleShuffle}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            shuffled ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' : 'bg-cream-200 dark:bg-ink-700 text-ink-500 dark:text-ink-400 hover:bg-cream-300 dark:hover:bg-ink-600'
          }`}
        >
          <Shuffle size={14} />
          随机
        </button>

        {lastAction && (
          <button
            onClick={handleUndo}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-all"
          >
            <Undo2 size={13} />
            撤销
          </button>
        )}

        {(tab === 'phrases' || tab === 'vocab') && (
          <div className="flex items-center gap-1.5">
            <Filter size={14} className="text-ink-400 dark:text-ink-500" />
            <select
              value={topicFilter}
              onChange={e => { setTopicFilter(e.target.value); setCurrentIdx(0); setShowAnswer(false) }}
              className="bg-cream-50 dark:bg-ink-800 border border-cream-300 dark:border-ink-600 rounded-lg px-2 py-1 text-xs text-ink-600 dark:text-ink-300 focus:outline-none focus:border-amber-400 dark:focus:border-amber-500"
            >
              <option value="all">全部话题</option>
              {allTopics.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-cream-200 dark:bg-ink-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-400 dark:bg-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${total > 0 ? ((currentIdx + 1) / total) * 100 : 0}%` }}
          />
        </div>
        <span className="text-xs text-ink-400 dark:text-ink-500">{Math.round((currentIdx / total) * 100)}%</span>
      </div>

      {/* Card */}
      <div className="card p-6">
        {/* Topic tag */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {current.itemType === 'pattern' && <span className="tag bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400">句型</span>}
          {current.itemType === 'phrase' && <span className="tag bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400">短语</span>}
          {current.itemType === 'vocab' && <span className="tag bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400">词汇</span>}
          {current.topic && <span className="tag bg-cream-200 dark:bg-ink-700 text-ink-500 dark:text-ink-400">{current.topic}</span>}
          {current.structure && <span className="text-xs font-mono text-ink-400 dark:text-ink-500">{current.structure}</span>}
          {progress && progress.stage > 0 && (
            <span className="text-xs text-ink-400 dark:text-ink-500">已练 {progress.correctCount + progress.wrongCount} 次</span>
          )}
        </div>

        {/* Chinese */}
        <div className="bg-cream-50 dark:bg-ink-900 rounded-xl p-5 border border-cream-200 dark:border-ink-700 mb-4">
          <p className="text-sm text-ink-400 dark:text-ink-500 mb-1">
            {isVocab ? '中文' : '翻译以下内容'}
          </p>
          <p className="text-lg font-medium text-ink-800 dark:text-cream-100 leading-relaxed">{displayText}</p>
        </div>

        {/* Answer */}
        {showAnswer && (
          <div className="rounded-xl p-4 bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20 mb-4">
            <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">
              {isVocab ? '英文' : '参考答案'}
            </div>
            <div className="text-sm font-serif text-ink-800 dark:text-cream-300 italic leading-relaxed">{answerText}</div>
          </div>
        )}

        {/* Actions */}
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
    </div>
  )
}
