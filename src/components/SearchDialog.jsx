import { useState, useMemo, useEffect, useRef } from 'react'
import { patterns, topicPhrases, topicVocab, passages } from '../data'
import { Search, X } from 'lucide-react'

const typeConfig = {
  pattern: { label: '句型', color: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400' },
  phrase: { label: '短语', color: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' },
  vocab: { label: '词汇', color: 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400' },
  passage: { label: '真题', color: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' },
}

export default function SearchDialog({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        isOpen ? onClose() : onClose()
      }
      if (!isOpen) return
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(i => Math.min(i + 1, results.length - 1)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(i => Math.max(i - 1, 0)) }
      if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        handleSelect(results[selectedIndex])
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, selectedIndex]) // eslint-disable-line react-hooks/exhaustive-deps

  const allVocabItems = useMemo(() => {
    const items = []
    Object.entries(topicVocab).forEach(([topic, words]) => {
      words.forEach((w, i) => items.push({ ...w, topic, id: `v-${topic}-${i}`, type: 'vocab' }))
    })
    return items
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    const items = []

    patterns.forEach(p => {
      if (p.cn.includes(q) || p.en.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.structure.toLowerCase().includes(q)) {
        items.push({ ...p, type: 'pattern', matchKey: 'pattern:' + p.id })
      }
    })

    topicPhrases.forEach(p => {
      if (p.cn.includes(q) || p.en.toLowerCase().includes(q) || p.topic.includes(q)) {
        items.push({ ...p, type: 'phrase', matchKey: 'phrase:' + p.id })
      }
    })

    allVocabItems.forEach(v => {
      if (v.cn.includes(q) || v.en.toLowerCase().includes(q) || v.topic.includes(q)) {
        items.push({ ...v, type: 'vocab', matchKey: 'vocab:' + v.id })
      }
    })

    passages.forEach(p => {
      if (p.title.includes(q) || p.topic.includes(q) || p.year.includes(q) || p.fullCN.includes(q)) {
        items.push({ ...p, type: 'passage', matchKey: 'passage:' + p.id })
      }
    })

    return items.slice(0, 20)
  }, [query, allVocabItems])

  const handleSelect = (item) => {
    onClose()
    if (item.type === 'passage') {
      onNavigate('practice', item.id)
    } else if (item.type === 'pattern') {
      onNavigate('memory', { tab: 'patterns', filter: item.id })
    } else if (item.type === 'phrase') {
      onNavigate('memory', { tab: 'phrases', filter: item.topic })
    } else if (item.type === 'vocab') {
      onNavigate('memory', { tab: 'vocab', filter: item.topic })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="fixed inset-0 bg-ink-900/30 dark:bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white dark:bg-ink-800 rounded-2xl shadow-2xl border border-cream-200 dark:border-ink-700 overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-cream-200 dark:border-ink-700">
          <Search size={18} className="text-ink-400 dark:text-ink-500 flex-shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => { setQuery(e.target.value); setSelectedIndex(0) }}
            placeholder="搜索句型、短语、词汇、真题..."
            className="flex-1 bg-transparent text-ink-800 dark:text-cream-100 placeholder-ink-300 dark:placeholder-ink-500 outline-none text-sm"
          />
          <span className="text-[10px] text-ink-300 dark:text-ink-600 bg-cream-100 dark:bg-ink-700 px-1.5 py-0.5 rounded font-mono">ESC</span>
        </div>

        <div ref={listRef} className="max-h-80 overflow-y-auto">
          {results.length === 0 && query.trim() && (
            <div className="px-4 py-8 text-center text-sm text-ink-400 dark:text-ink-500">
              没有找到 "{query}" 相关的内容
            </div>
          )}
          {results.length === 0 && !query.trim() && (
            <div className="px-4 py-8 text-center text-sm text-ink-400 dark:text-ink-500">
              输入关键词搜索学习内容
            </div>
          )}
          {results.map((item, idx) => {
            const cfg = typeConfig[item.type] || typeConfig.pattern
            return (
              <button
                key={item.matchKey}
                onClick={() => handleSelect(item)}
                className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                  idx === selectedIndex
                    ? 'bg-amber-50 dark:bg-amber-500/10'
                    : 'hover:bg-cream-50 dark:hover:bg-ink-700/50'
                }`}
              >
                <span className={`tag flex-shrink-0 mt-0.5 ${cfg.color}`}>{cfg.label}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-ink-700 dark:text-cream-200 truncate">
                    {item.cn || item.title}
                  </p>
                  <p className="text-xs text-ink-400 dark:text-ink-500 truncate font-serif italic">
                    {item.en || item.structure || item.fullCN?.slice(0, 40)}
                  </p>
                </div>
                {item.topic && (
                  <span className="text-[10px] text-ink-400 dark:text-ink-500 flex-shrink-0 mt-0.5">{item.topic}</span>
                )}
              </button>
            )
          })}
        </div>

        <div className="px-4 py-2 border-t border-cream-200 dark:border-ink-700 flex items-center gap-4 text-[10px] text-ink-400 dark:text-ink-500">
          <span>↑↓ 导航</span>
          <span>↵ 选择</span>
          <span>ESC 关闭</span>
          <span className="ml-auto">Ctrl+K 打开</span>
        </div>
      </div>
    </div>
  )
}
