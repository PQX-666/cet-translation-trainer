import { useState, useMemo } from 'react'
import { patterns, topicPhrases, topicVocab, allTopics, passages } from '../data'
import { loadData, getStageName } from '../utils/storage'
import { Search, ExternalLink, ChevronDown, ChevronRight, BookOpen, Zap } from 'lucide-react'

export default function KnowledgeBase({ appData, onNavigate }) {
  const [tab, setTab] = useState('patterns')
  const [search, setSearch] = useState('')
  const [topicFilter, setTopicFilter] = useState('all')
  const [expandedItems, setExpandedItems] = useState({})

  const data = useMemo(() => loadData(), [appData])

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // 绕行训练：直接抽取每句的 substitutionGuide 与低配版，
  // 专门练“关键词不会时如何用简单说法活下去”。
  const fallbackItems = useMemo(() => {
    const items = []
    passages.forEach(p => {
      (p.sentences || []).forEach((s, idx) => {
        if (!s.technique?.substitutionGuide) return
        items.push({
          ...s,
          passageId: p.id,
          passageTitle: p.title,
          level: p.level,
          year: p.year,
          sentenceIndex: idx,
          itemType: 'fallback',
        })
      })
    })
    return items
  }, [])

  const tabs = [
    { id: 'patterns', label: '句型模板', count: patterns.length, color: 'amber' },
    { id: 'phrases', label: '翻译词组', count: topicPhrases.length, color: 'blue' },
    { id: 'vocab', label: '话题词汇', count: Object.values(topicVocab).flat().length, color: 'purple' },
    { id: 'fallback', label: '绕行训练', count: fallbackItems.length, color: 'orange' },
  ]

  // Patterns with progress and linked passages
  const patternItems = useMemo(() => {
    return patterns
      .map(p => {
        const progress = data.patternProgress?.[p.id]
        const linkedPassages = passages.filter(psg =>
          psg.sentences.some(s => s.patternIds?.includes(p.id))
        )
        return { ...p, progress, linkedPassages, itemType: 'pattern' }
      })
      .filter(p => {
        if (!search) return true
        const q = search.toLowerCase()
        return p.name.toLowerCase().includes(q) || p.cn.toLowerCase().includes(q) ||
               p.en.toLowerCase().includes(q) || p.structure.toLowerCase().includes(q)
      })
  }, [data, search])

  // Phrases with progress
  const phraseItems = useMemo(() => {
    return topicPhrases
      .map(p => {
        const progress = data.phraseProgress?.[p.id]
        return { ...p, progress, itemType: 'phrase' }
      })
      .filter(p => {
        if (topicFilter !== 'all' && p.topic !== topicFilter) return false
        if (!search) return true
        const q = search.toLowerCase()
        return p.cn.toLowerCase().includes(q) || p.en.toLowerCase().includes(q) ||
               p.topic.toLowerCase().includes(q)
      })
  }, [data, search, topicFilter])

  // Vocab items with progress
  const vocabItems = useMemo(() => {
    const items = []
    Object.entries(topicVocab).forEach(([topic, words]) => {
      words.forEach(w => {
        const id = `${topic}::${w.cn}`
        const progress = data.vocabProgress?.[id]
        items.push({ ...w, topic, id, progress, itemType: 'vocab' })
      })
    })
    return items.filter(v => {
      if (topicFilter !== 'all' && v.topic !== topicFilter) return false
      if (!search) return true
      const q = search.toLowerCase()
      return v.cn.toLowerCase().includes(q) || v.en.toLowerCase().includes(q) ||
             v.topic.toLowerCase().includes(q)
    })
  }, [data, search, topicFilter])

  const fallbackFiltered = useMemo(() => {
    return fallbackItems.filter(s => {
      if (!search) return true
      const q = search.toLowerCase()
      return s.cn.toLowerCase().includes(q) ||
        s.en.toLowerCase().includes(q) ||
        s.technique.substitutionGuide.toLowerCase().includes(q) ||
        s.passageTitle.toLowerCase().includes(q)
    })
  }, [fallbackItems, search])

  const currentItems = tab === 'patterns' ? patternItems
    : tab === 'phrases' ? phraseItems
    : tab === 'vocab' ? vocabItems
    : fallbackFiltered

  const handleGoPractice = (item) => {
    if (item.itemType === 'pattern') {
      onNavigate('memory', { tab: 'patterns' })
    } else if (item.itemType === 'phrase') {
      onNavigate('memory', { tab: 'phrases', filter: item.topic || 'all' })
    } else if (item.itemType === 'vocab') {
      onNavigate('memory', { tab: 'vocab', filter: item.topic || 'all' })
    } else if (item.itemType === 'fallback') {
      onNavigate('practice', item.passageId)
    }
  }

  const colorMap = {
    amber: { badge: 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400', bar: 'bg-amber-400' },
    blue: { badge: 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400', bar: 'bg-blue-400' },
    purple: { badge: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400', bar: 'bg-purple-400' },
    orange: { badge: 'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400', bar: 'bg-orange-400' },
  }

  const activeColor = colorMap[tabs.find(t => t.id === tab)?.color || 'amber']

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">知识库</h2>
          <p className="text-ink-500 dark:text-ink-400 mt-1 text-sm">
            浏览全部句型、词组和词汇，查看掌握进度
          </p>
        </div>
        <div className="text-sm text-ink-500 dark:text-ink-400">
          {currentItems.length} 项
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-cream-200/50 dark:bg-ink-700/50 rounded-xl p-1">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => { setTab(t.id); setTopicFilter('all'); setSearch(''); setExpandedItems({}) }}
            className={`flex-1 py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
              tab === t.id
                ? 'bg-white dark:bg-ink-800 text-ink-800 dark:text-cream-100 shadow-sm'
                : 'text-ink-500 dark:text-ink-400 hover:text-ink-700 dark:hover:text-cream-200'
            }`}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[200px] relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
          <input
            type="text"
            placeholder={`搜索${tabs.find(t => t.id === tab)?.label || ''}...`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-sm text-ink-800 dark:text-cream-100 placeholder-ink-300 dark:placeholder-ink-500 focus:outline-none focus:border-amber-400 dark:focus:border-amber-500"
          />
        </div>
        {(tab === 'phrases' || tab === 'vocab') && (
          <select
            value={topicFilter}
            onChange={e => setTopicFilter(e.target.value)}
            className="bg-white dark:bg-ink-800 border border-cream-300 dark:border-ink-600 rounded-lg px-3 py-2 text-sm text-ink-600 dark:text-ink-300 focus:outline-none focus:border-amber-400 dark:focus:border-amber-500"
          >
            <option value="all">全部话题</option>
            {allTopics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        )}
      </div>

      {/* Stats summary */}
      {tab === 'fallback' ? (
        <div className="text-xs text-ink-500 dark:text-ink-400">
          共 {currentItems.length} 个句子可练 · 看到“不会翻”的表达时，先记住一个能说出口的替代表达
        </div>
      ) : (
        <div className="flex items-center gap-4 text-xs text-ink-500 dark:text-ink-400 flex-wrap">
          <span>
            已学 {currentItems.filter(i => i.progress).length} / {currentItems.length}
          </span>
          <span>
            已掌握 {currentItems.filter(i => i.progress?.stage >= 6).length}
          </span>
          <span>
            待复习 {currentItems.filter(i => i.progress?.nextReview && i.progress.nextReview <= Date.now() && i.progress.stage < 8).length}
          </span>
        </div>
      )}

      {/* Items list */}
      <div className="space-y-2">
        {currentItems.length === 0 && (
          <div className="card p-12 text-center">
            <p className="text-ink-500 dark:text-ink-400">无匹配结果，试试其他关键词。</p>
          </div>
        )}
        {currentItems.map(item => {
          const isExpanded = expandedItems[item.id]
          const progress = item.progress
          const stage = progress?.stage || 0
          const stagePct = Math.min(100, (stage / 8) * 100)

          return (
            <div key={item.id} className="card overflow-hidden">
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-cream-50 dark:hover:bg-ink-700/50 transition-colors"
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  stage >= 6 ? 'bg-green-500' : stage > 0 ? 'bg-amber-400' : 'bg-cream-300 dark:bg-ink-600'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-ink-800 dark:text-cream-100 truncate">
                      {tab === 'patterns' ? item.name : item.cn}
                    </span>
                    {tab === 'patterns' && (
                      <span className="text-xs text-ink-400 font-mono truncate">{item.structure}</span>
                    )}
                    {item.topic && (
                      <span className={`tag text-[10px] ${activeColor.badge}`}>{item.topic}</span>
                    )}
                    {item.passageTitle && (
                      <span className={`tag text-[10px] ${activeColor.badge}`}>{item.passageTitle}</span>
                    )}
                    {progress && (
                      <span className="text-[10px] text-ink-400">
                        阶段 {stage}/8 · {getStageName(stage)}
                      </span>
                    )}
                  </div>
                  {(tab === 'phrases' || tab === 'vocab') && (
                    <p className="text-xs text-ink-400 dark:text-ink-500 mt-0.5 truncate font-serif italic">{item.en}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {/* Progress mini bar */}
                  <div className="w-12 h-1 bg-cream-200 dark:bg-ink-700 rounded-full overflow-hidden hidden sm:block">
                    <div className={`h-full ${activeColor.bar} rounded-full transition-all`} style={{ width: `${stagePct}%` }} />
                  </div>
                  {isExpanded ? <ChevronDown size={16} className="text-ink-400" /> : <ChevronRight size={16} className="text-ink-400" />}
                </div>
              </button>

              {/* Expanded detail */}
              {isExpanded && (
                <div className="px-4 pb-4 space-y-3 border-t border-cream-200 dark:border-ink-700 pt-3">
                  {/* Fallback drill detail */}
                  {tab === 'fallback' && (
                    <>
                      <div className="bg-cream-50 dark:bg-ink-900 rounded-lg p-3">
                        <div className="text-[10px] text-ink-400 mb-1">中文原句</div>
                        <p className="text-xs text-ink-700 dark:text-cream-200 leading-relaxed">{item.cn}</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-500/5 rounded-lg p-3 border border-green-100 dark:border-green-500/10">
                        <div className="text-[10px] text-green-600 dark:text-green-400 mb-1">参考译文</div>
                        <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed font-serif italic">{item.en}</p>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-500/5 rounded-lg p-3 border border-orange-200 dark:border-orange-500/20">
                        <div className="text-[10px] text-orange-600 dark:text-orange-400 mb-1 font-medium">不会翻怎么办 — 绕行说法</div>
                        <p className="text-xs text-ink-700 dark:text-cream-200 leading-relaxed">{item.technique.substitutionGuide}</p>
                        {item.technique.lowScore?.note && (
                          <div className="text-[11px] text-ink-500 dark:text-ink-400 mt-2 pt-2 border-t border-orange-200/60 dark:border-orange-500/20">
                            {item.technique.lowScore.note}
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  {/* Pattern detail */}
                  {tab === 'patterns' && (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-cream-50 dark:bg-ink-900 rounded-lg p-3">
                          <div className="text-[10px] text-ink-400 mb-1">中文例句</div>
                          <p className="text-xs text-ink-700 dark:text-cream-200">{item.cn}</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-500/5 rounded-lg p-3 border border-green-100 dark:border-green-500/10">
                          <div className="text-[10px] text-green-600 dark:text-green-400 mb-1">英文翻译</div>
                          <p className="text-xs text-ink-700 dark:text-cream-200 font-serif italic">{item.en}</p>
                        </div>
                      </div>
                      {item.linkedPassages && item.linkedPassages.length > 0 && (
                        <div>
                          <div className="text-[10px] text-ink-400 mb-1.5">关联真题</div>
                          <div className="flex flex-wrap gap-1">
                            {item.linkedPassages.map(p => (
                              <button
                                key={p.id}
                                onClick={() => onNavigate('practice', p.id)}
                                className="text-[11px] px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-colors flex items-center gap-1"
                              >
                                <BookOpen size={10} /> {p.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* Phrase / Vocab detail */}
                  {(tab === 'phrases' || tab === 'vocab') && (
                    <div className="bg-green-50 dark:bg-green-500/5 rounded-lg p-3 border border-green-100 dark:border-green-500/10">
                      <div className="text-[10px] text-green-600 dark:text-green-400 mb-1">英文翻译</div>
                      <p className="text-sm text-ink-800 dark:text-cream-100 font-serif italic">{item.en}</p>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleGoPractice(item)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-500/30 transition-colors"
                    >
                      <Zap size={12} /> 去练习
                    </button>
                    {progress && (
                      <div className="text-[10px] text-ink-400">
                        已练 {progress.correctCount + progress.wrongCount} 次 ·
                        正确率 {progress.correctCount + progress.wrongCount > 0
                          ? Math.round((progress.correctCount / (progress.correctCount + progress.wrongCount)) * 100)
                          : 0}%
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
