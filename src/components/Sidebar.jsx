import { useState } from 'react'
import { Home, BookOpen, Zap, RotateCw, AlertCircle, Moon, Sun, Search, Download, Upload, Trash2, X } from 'lucide-react'
import { resetAllData } from '../utils/storage'

const iconMap = {
  home: Home,
  practice: BookOpen,
  memory: Zap,
  review: RotateCw,
  errors: AlertCircle,
}

export default function Sidebar({ pages, current, onNavigate, appData, darkMode, onToggleDark, onExport, onImport, onSearch, onDataChange, showToast }) {
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleReset = () => {
    resetAllData()
    setShowResetConfirm(false)
    onDataChange()
    if (showToast) showToast('数据已重置')
  }
  const now = Date.now()

  const dueReviewCount =
    Object.values(appData.patternProgress || {}).filter(p => p.nextReview && p.nextReview <= now && p.stage < 8).length +
    Object.values(appData.phraseProgress || {}).filter(p => p.nextReview && p.nextReview <= now && p.stage < 8).length +
    Object.values(appData.vocabProgress || {}).filter(p => p.nextReview && p.nextReview <= now && p.stage < 8).length

  const errorCount = (appData.errorBook || []).filter(e => !e.reviewed).length

  const getBadge = (id) => {
    if (id === 'review' && dueReviewCount > 0) return dueReviewCount
    if (id === 'errors' && errorCount > 0) return errorCount
    return null
  }

  const streak = appData.stats?.dailyStreak || 0
  const totalSentences = appData.stats?.totalSentences || 0
  const patternCount = Object.keys(appData.patternProgress || {}).length
  const phraseCount = Object.keys(appData.phraseProgress || {}).length
  const vocabCount = Object.keys(appData.vocabProgress || {}).length

  return (
    <aside className="w-52 bg-cream-50 dark:bg-ink-800 border-r border-cream-300/50 dark:border-ink-700 flex flex-col flex-shrink-0 h-full">
      <div className="px-4 py-5 border-b border-cream-200/50 dark:border-ink-700">
        <h1 className="text-base font-bold text-ink-800 dark:text-cream-100 leading-tight">CET 翻译备考</h1>
        <p className="text-[11px] text-ink-400 dark:text-ink-500 mt-0.5">真题驱动 · 间隔复习</p>
      </div>

      <nav className="flex-1 py-3 space-y-0.5 px-2.5">
        {pages.map(page => {
          const Icon = iconMap[page.id] || BookOpen
          return (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                current === page.id
                  ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 shadow-sm'
                  : 'text-ink-600 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700'
              }`}
            >
              <Icon size={16} />
              <span className="flex-1 text-left">{page.label}</span>
              {getBadge(page.id) && (
                <span className={`inline-flex items-center justify-center min-w-[18px] h-4 px-1 rounded-full text-[10px] font-bold ${
                  current === page.id
                    ? 'bg-amber-200 dark:bg-amber-500/30 text-amber-800 dark:text-amber-400'
                    : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400'
                }`}>
                  {getBadge(page.id)}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Tools */}
      <div className="px-2.5 py-2 border-t border-cream-200/50 dark:border-ink-700 space-y-0.5">
        <button
          onClick={onSearch}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-500 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700 transition-colors"
        >
          <Search size={15} />
          <span className="flex-1 text-left text-xs">搜索</span>
          <span className="text-[10px] text-ink-300 dark:text-ink-600 font-mono">Ctrl+K</span>
        </button>
        <button
          onClick={onToggleDark}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-500 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700 transition-colors"
        >
          {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          <span className="flex-1 text-left text-xs">{darkMode ? '浅色模式' : '深色模式'}</span>
        </button>
        <button
          onClick={onExport}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-500 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700 transition-colors"
        >
          <Download size={15} />
          <span className="flex-1 text-left text-xs">导出数据</span>
        </button>
        <button
          onClick={onImport}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-500 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700 transition-colors"
        >
          <Upload size={15} />
          <span className="flex-1 text-left text-xs">导入数据</span>
        </button>
        <button
          onClick={() => setShowResetConfirm(true)}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-400 dark:text-ink-500 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <Trash2 size={15} />
          <span className="flex-1 text-left text-xs">重置数据</span>
        </button>
      </div>

      {/* Stats */}
      <div className="px-4 py-3 border-t border-cream-200/50 dark:border-ink-700 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${streak > 0 ? 'bg-green-400' : 'bg-ink-200 dark:bg-ink-600'}`} />
          <span className="text-[11px] text-ink-500 dark:text-ink-400">
            连续 <strong className="text-ink-700 dark:text-cream-200">{streak}</strong> 天
          </span>
        </div>
        <div className="text-[11px] text-ink-400 dark:text-ink-500">
          句型 {patternCount}/30 · 短语 {phraseCount}/76 · 词汇 {vocabCount}
        </div>
        <div className="text-[11px] text-ink-400 dark:text-ink-500">
          共练习 <strong className="text-ink-600 dark:text-cream-300">{totalSentences}</strong> 句
        </div>
      </div>

      {/* Reset confirmation modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-ink-900/30 dark:bg-black/60" onClick={() => setShowResetConfirm(false)} />
          <div className="relative bg-white dark:bg-ink-800 rounded-2xl shadow-xl border border-cream-200 dark:border-ink-700 p-6 mx-4 max-w-sm w-full">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-ink-800 dark:text-cream-100">确认重置</h3>
              <button onClick={() => setShowResetConfirm(false)} className="text-ink-400 hover:text-ink-600 dark:hover:text-cream-200">
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400 mb-4">
              这将清除所有学习进度、错题记录和统计数据。此操作不可撤销。
            </p>
            <div className="flex gap-2">
              <button onClick={() => setShowResetConfirm(false)} className="flex-1 btn-secondary text-sm">取消</button>
              <button onClick={handleReset} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium px-5 py-2.5 rounded-xl transition-all text-sm">确认重置</button>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
