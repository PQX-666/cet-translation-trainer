import { useState, useCallback, useEffect, useMemo } from 'react'
import Sidebar from './components/Sidebar'
import HomePage from './components/HomePage'
import PassagePractice from './components/PassagePractice'
import QuickMemory from './components/QuickMemory'
import ReviewSystem from './components/ReviewSystem'
import ErrorBook from './components/ErrorBook'
import KnowledgeBase from './components/KnowledgeBase'
import SearchDialog from './components/SearchDialog'
import FullWalkthrough from './components/FullWalkthrough'
import ExamSimulation from './components/ExamSimulation'
import { loadData, exportData, importData } from './utils/storage'

const pages = [
  { id: 'home', label: '首页' },
  { id: 'practice', label: '真题练习' },
  { id: 'exam', label: '限时模考' },
  { id: 'memory', label: '快速记忆' },
  { id: 'walkthrough', label: '全文带练' },
  { id: 'knowledge', label: '知识库' },
  { id: 'review', label: '智能复习' },
  { id: 'errors', label: '错题本' },
]

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [appData, setAppData] = useState(loadData)
  const [pageAnimKey, setPageAnimKey] = useState(0)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('cet-dark-mode')
    return saved === 'true'
  })
  const [searchOpen, setSearchOpen] = useState(false)
  const [navParams, setNavParams] = useState(null)
  const [toast, setToast] = useState(null)
  const [moreOpen, setMoreOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('cet-dark-mode', darkMode)
  }, [darkMode])

  const refreshData = useCallback(() => {
    setAppData(loadData())
  }, [])

  useEffect(() => {
    refreshData()
  }, [currentPage, refreshData])

  const [shortcutHelpOpen, setShortcutHelpOpen] = useState(false)

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
      if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey && e.target === document.body) {
        e.preventDefault()
        setShortcutHelpOpen(true)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type, key: Date.now() })
    setTimeout(() => setToast(null), 2200)
  }, [])

  const handleNavigate = useCallback((pageId, params) => {
    setCurrentPage(pageId)
    setNavParams(params || null)
    setPageAnimKey(k => k + 1)
    setMoreOpen(false)
  }, [])

  const handleImport = useCallback(() => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = async (e) => {
      const file = e.target.files[0]
      if (!file) return
      try {
        await importData(file)
        refreshData()
        showToast('数据导入成功')
      } catch (err) {
        showToast(err.message, 'error')
      }
    }
    input.click()
  }, [refreshData, showToast])

  const handleExport = useCallback(() => {
    exportData()
    showToast('数据已导出')
  }, [showToast])

  const renderPage = () => {
    const props = { appData, onDataChange: refreshData, onNavigate: handleNavigate, navParams, showToast }
    switch (currentPage) {
      case 'home': return <HomePage {...props} />
      case 'practice': return <PassagePractice {...props} />
      case 'exam': return <ExamSimulation {...props} />
      case 'memory': return <QuickMemory {...props} />
      case 'knowledge': return <KnowledgeBase {...props} />
      case 'review': return <ReviewSystem {...props} />
      case 'walkthrough': return <FullWalkthrough {...props} />
      case 'errors': return <ErrorBook {...props} />
      default: return <HomePage {...props} />
    }
  }

  // Mobile badge counts
  const now = Date.now()
  const dueReviewCount =
    Object.values(appData.patternProgress || {}).filter(p => p.nextReview && p.nextReview <= now && p.stage < 8).length +
    Object.values(appData.phraseProgress || {}).filter(p => p.nextReview && p.nextReview <= now && p.stage < 8).length +
    Object.values(appData.vocabProgress || {}).filter(p => p.nextReview && p.nextReview <= now && p.stage < 8).length +
    Object.values(appData.sentenceProgress || {}).filter(p => p.nextReview && p.nextReview <= now && p.stage < 8).length
  const errorCount = (appData.errorBook || []).filter(e => !e.reviewed).length

  const getMobileBadge = (id) => {
    if (id === 'review' && dueReviewCount > 0) return dueReviewCount
    if (id === 'errors' && errorCount > 0) return errorCount
    return null
  }

  return (
    <div className="flex h-screen overflow-hidden bg-cream-100 dark:bg-ink-900 transition-colors">
      <div className="hidden md:block">
        <Sidebar
          pages={pages}
          current={currentPage}
          onNavigate={handleNavigate}
          appData={appData}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(d => !d)}
          onExport={handleExport}
          onImport={handleImport}
          onSearch={() => setSearchOpen(true)}
          onDataChange={refreshData}
          showToast={showToast}
        />
      </div>

      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8 page-enter" key={pageAnimKey}>
          {renderPage()}
        </div>
      </main>

      {moreOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-30 bg-ink-900/20 dark:bg-black/40" onClick={() => setMoreOpen(false)} />
          <div className="md:hidden fixed bottom-[4.25rem] left-0 right-0 z-40 px-3">
            <div className="max-w-md mx-auto bg-white dark:bg-ink-800 rounded-2xl shadow-xl border border-cream-200 dark:border-ink-700 p-2 grid grid-cols-3 gap-2">
              {pages.filter(p => ['exam', 'knowledge', 'errors'].includes(p.id)).map(page => {
                const isActive = currentPage === page.id
                const badge = getMobileBadge(page.id)
                return (
                  <button
                    key={page.id}
                    onClick={() => handleNavigate(page.id)}
                    className={`relative py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400'
                        : 'bg-cream-50 dark:bg-ink-900 text-ink-600 dark:text-cream-200'
                    }`}
                  >
                    {page.label}
                    {badge && (
                      <span className="ml-1.5 inline-flex min-w-[16px] h-4 px-1 rounded-full text-[9px] font-bold bg-red-500 text-white items-center justify-center leading-none">
                        {badge > 99 ? '99+' : badge}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </>
      )}

      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-ink-800/95 backdrop-blur-lg border-t border-cream-200 dark:border-ink-700">
        <div className="flex items-center justify-around h-14 px-1">
          {pages.filter(p => ['home', 'practice', 'walkthrough', 'memory', 'review'].includes(p.id)).map(page => {
            const isActive = currentPage === page.id
            const badge = getMobileBadge(page.id)
            return (
              <button
                key={page.id}
                onClick={() => handleNavigate(page.id)}
                className={`relative flex flex-col items-center justify-center gap-0.5 min-w-0 px-2 py-1 rounded-lg transition-colors ${
                  isActive
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-ink-400 dark:text-ink-500'
                }`}
              >
                <span className="text-[11px] font-medium truncate">{page.label}</span>
                {isActive && <span className="w-1 h-1 rounded-full bg-amber-500" />}
                {badge && (
                  <span className="absolute -top-0.5 right-0 min-w-[16px] h-4 px-1 rounded-full text-[9px] font-bold bg-red-500 text-white flex items-center justify-center leading-none">
                    {badge > 99 ? '99+' : badge}
                  </span>
                )}
              </button>
            )
          })}
          <button
            onClick={() => setMoreOpen(v => !v)}
            className={`relative flex flex-col items-center justify-center gap-0.5 min-w-0 px-2 py-1 rounded-lg transition-colors ${
              ['exam', 'knowledge', 'errors'].includes(currentPage)
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-ink-400 dark:text-ink-500'
            }`}
          >
            <span className="text-[11px] font-medium truncate">更多</span>
            {['exam', 'knowledge', 'errors'].includes(currentPage) && <span className="w-1 h-1 rounded-full bg-amber-500" />}
          </button>
        </div>
      </nav>

      <SearchDialog
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Shortcut help panel */}
      {shortcutHelpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-ink-900/30 dark:bg-black/60" onClick={() => setShortcutHelpOpen(false)} />
          <div className="relative bg-white dark:bg-ink-800 rounded-2xl shadow-xl border border-cream-200 dark:border-ink-700 p-6 mx-4 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-ink-800 dark:text-cream-100">键盘快捷键</h3>
              <button onClick={() => setShortcutHelpOpen(false)} className="text-ink-400 hover:text-ink-600 dark:hover:text-cream-200 text-lg">&times;</button>
            </div>
            <div className="space-y-2 text-sm">
              {[
                ['Ctrl+K', '打开全局搜索'],
                ['?', '显示此快捷键面板'],
                ['Space', '闪卡模式：显示答案'],
                ['1', '评分"忘了"'],
                ['2', '评分"模糊"'],
                ['3', '评分"记得"'],
                ['4', '评分"很熟"'],
                ['Esc', '关闭搜索/弹窗'],
              ].map(([key, desc]) => (
                <div key={key} className="flex items-center justify-between py-1.5 px-3 rounded-lg bg-cream-50 dark:bg-ink-900">
                  <span className="text-ink-500 dark:text-ink-400">{desc}</span>
                  <kbd className="px-2 py-0.5 rounded-md bg-cream-200 dark:bg-ink-700 font-mono text-xs text-ink-600 dark:text-ink-300">{key}</kbd>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-ink-400 dark:text-ink-500 mt-3 text-center">
              评分快捷键在显示答案后可用。按 <kbd className="px-1 py-0.5 rounded bg-cream-200 dark:bg-ink-700 font-mono">?</kbd> 随时查看
            </p>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div
          key={toast.key}
          className={`toast-in fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl text-sm font-medium shadow-lg ${
            toast.type === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-green-600 text-white'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  )
}
