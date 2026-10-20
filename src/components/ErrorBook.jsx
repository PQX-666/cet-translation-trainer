import { useState, useMemo } from 'react'
import { patterns, topicPhrases, topicVocab } from '../data'
import { markErrorReviewed, removeError, clearReviewedErrors } from '../utils/storage'
import { RotateCcw, Trash2 } from 'lucide-react'

export default function ErrorBook({ appData, onDataChange, onNavigate }) {
  const [filterUnreviewed, setFilterUnreviewed] = useState(false)
  const [expandedKeys, setExpandedKeys] = useState(new Set())

  const allItems = useMemo(() => {
    const map = {}
    patterns.forEach(p => { map[p.id] = { ...p, itemType: 'pattern' } })
    topicPhrases.forEach(p => { map[p.id] = { ...p, itemType: 'phrase' } })
    // vocab items
    Object.entries(topicVocab).forEach(([topic, words]) => {
      words.forEach(w => {
        const id = `${topic}::${w.cn}`
        map[id] = { ...w, topic, id, itemType: 'vocab' }
      })
    })
    return map
  }, [])

  const errors = useMemo(() => {
    let list = (appData.errorBook || []).map(e => ({
      ...e,
      key: `${e.type}:${e.id}:${e.addedAt}`,
      item: allItems[e.id],
    }))
    if (filterUnreviewed) list = list.filter(e => !e.reviewed)
    return list
  }, [appData.errorBook, allItems, filterUnreviewed])

  const toggleAnswer = (key) => {
    setExpandedKeys(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const handleRetry = (err) => {
    const item = err.item
    if (!item) return
    if (item.itemType === 'pattern') {
      const idx = patterns.findIndex(p => p.id === item.id)
      onNavigate('memory', { tab: 'patterns', startFrom: Math.max(0, idx) })
    } else if (item.itemType === 'phrase') {
      const idx = topicPhrases.findIndex(p => p.id === item.id)
      onNavigate('memory', { tab: 'phrases', startFrom: Math.max(0, idx) })
    } else if (item.itemType === 'vocab') {
      const allVocab = []
      Object.entries(topicVocab).forEach(([topic, words]) => {
        words.forEach(w => allVocab.push({ ...w, topic, id: `${topic}::${w.cn}` }))
      })
      const idx = allVocab.findIndex(v => v.id === item.id)
      onNavigate('memory', { tab: 'vocab', startFrom: Math.max(0, idx) })
    }
  }

  if (errors.length === 0) {
    return (
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">错题本</h2>
        <div className="card p-12 text-center">
          <h3 className="text-lg font-bold text-ink-700 dark:text-cream-200 mb-2">没有错题</h3>
          <p className="text-ink-500 dark:text-ink-400">自评较低的句型/短语/词汇会自动收集到这里。</p>
        </div>
      </div>
    )
  }

  const stats = [
    { label: '句型', count: errors.filter(e => e.type === 'pattern').length, color: 'text-amber-700 dark:text-amber-400' },
    { label: '短语', count: errors.filter(e => e.type === 'phrase').length, color: 'text-blue-700 dark:text-blue-400' },
    { label: '词汇', count: errors.filter(e => e.type === 'vocab').length, color: 'text-purple-700 dark:text-purple-400' },
    { label: '未复习', count: errors.filter(e => !e.reviewed).length, color: 'text-red-700 dark:text-red-400' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">错题本</h2>
          <p className="text-ink-500 dark:text-ink-400 mt-1 text-sm">{errors.length} 条记录</p>
        </div>
        <div className="flex items-center gap-2">
          {errors.some(e => e.reviewed) && (
            <button
              onClick={() => { clearReviewedErrors(); onDataChange() }}
              className="flex items-center gap-1 text-xs text-ink-400 dark:text-ink-500 hover:text-red-600 dark:hover:text-red-400 px-2 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
            >
              <Trash2 size={12} />
              清除已复习
            </button>
          )}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filterUnreviewed}
              onChange={e => setFilterUnreviewed(e.target.checked)}
              className="w-4 h-4 rounded accent-amber-500"
            />
            <span className="text-sm text-ink-500 dark:text-ink-400">仅未复习</span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={i} className="card p-3 text-center">
            <div className="text-xs text-ink-400 dark:text-ink-500">{s.label}</div>
            <div className={`text-xl font-bold ${s.color}`}>{s.count}</div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        {errors.map(err => {
          const item = err.item
          if (!item) return null
          const showAnswer = expandedKeys.has(err.key)
          const typeLabel = err.type === 'pattern' ? '句型' : err.type === 'phrase' ? '短语' : '词汇'
          const typeColors = err.type === 'pattern'
            ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400'
            : err.type === 'phrase'
              ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400'
              : 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400'

          return (
            <div key={err.key} className={`card p-4 ${err.reviewed ? 'opacity-60' : ''}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`w-2 h-2 rounded-full ${err.reviewed ? 'bg-green-400' : 'bg-red-400'}`} />
                  <span className="text-xs text-ink-400 dark:text-ink-500">
                    {new Date(err.addedAt).toLocaleDateString('zh-CN')}
                  </span>
                  <span className={`tag ${typeColors}`}>
                    {typeLabel}
                  </span>
                  {err.errorType && <span className="tag bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400">{err.errorType}</span>}
                  {item.topic && <span className="tag bg-cream-200 dark:bg-ink-700 text-ink-500 dark:text-ink-400">{item.topic}</span>}
                </div>
                <div className="flex gap-1 flex-shrink-0">
                  <button
                    onClick={() => handleRetry(err)}
                    className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 px-2 py-1 font-medium"
                    title="去快速记忆中重新练习"
                  >
                    <RotateCcw size={12} />
                    重练
                  </button>
                  <button
                    onClick={() => { markErrorReviewed(err.key); onDataChange() }}
                    className="text-xs text-ink-400 dark:text-ink-500 hover:text-green-600 dark:hover:text-green-400 px-2 py-1"
                  >
                    {err.reviewed ? '撤销' : '已复习'}
                  </button>
                  <button
                    onClick={() => { removeError(err.key); onDataChange() }}
                    className="text-xs text-ink-400 dark:text-ink-500 hover:text-red-600 dark:hover:text-red-400 px-2 py-1"
                  >
                    移除
                  </button>
                </div>
              </div>

              <div className="bg-cream-50 dark:bg-ink-900 rounded-lg p-3 mb-2">
                <p className="text-sm text-ink-700 dark:text-cream-200 leading-relaxed">{item.cn}</p>
                {item.structure && (
                  <p className="text-xs text-ink-400 dark:text-ink-500 font-mono mt-1">{item.structure}</p>
                )}
              </div>

              {showAnswer && (
                <div className="rounded-lg p-3 bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 mb-2">
                  <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-1">参考答案</div>
                  <div className="text-sm font-serif text-ink-800 dark:text-cream-300 italic">{item.en}</div>
                </div>
              )}

              <button
                onClick={() => toggleAnswer(err.key)}
                className="text-xs text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 font-medium"
              >
                {showAnswer ? '隐藏答案' : '显示答案'}
              </button>

              {err.sourceInfo && (
                <div className="mt-2 text-[11px] text-ink-400 dark:text-ink-500">
                  来源：{err.sourceInfo.passageId} 第{(err.sourceInfo.sentenceIndex || 0) + 1}句
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
