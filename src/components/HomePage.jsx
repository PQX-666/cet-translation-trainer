import { useState, useMemo } from 'react'
import { passages } from '../data'
import { loadData, getAccuracyStats, getTodayPassage } from '../utils/storage'
import { fallbackMethods, highScoreStructures, translationSteps } from '../data/methodology'
import { BookOpen, Lightbulb, Target, TrendingUp, ArrowRight, Zap, CheckCircle, AlertCircle, ChevronDown, ChevronRight, Play, RotateCw } from 'lucide-react'

function AccordionSection({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="card overflow-hidden mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-cream-50 dark:hover:bg-ink-700/50 transition-colors text-left"
      >
        <div>
          <h4 className="font-bold text-ink-800 dark:text-cream-100">{title}</h4>
          <p className="text-xs text-ink-400 dark:text-ink-500">{subtitle}</p>
        </div>
        {open ? <ChevronDown size={18} className="text-ink-400 flex-shrink-0" /> : <ChevronRight size={18} className="text-ink-400 flex-shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  )
}

export default function HomePage({ appData, onNavigate }) {
  const stats = useMemo(() => getAccuracyStats(), [appData])
  const todayPassage = useMemo(() => getTodayPassage(passages), [appData])
  const data = useMemo(() => loadData(), [appData])
  const completedCount = passages.filter(p => data.passageProgress[p.id]?.completed).length
  const totalLearned = stats.patternTotal + stats.phraseTotal + stats.vocabTotal
  const totalMastered = stats.masteredPatterns + stats.masteredPhrases + stats.masteredVocabs
  const isNewUser = totalLearned === 0 && completedCount === 0

  const dueReview =
    Object.values(data.patternProgress || {}).filter(p => p.nextReview && p.nextReview <= Date.now() && p.stage < 8).length +
    Object.values(data.phraseProgress || {}).filter(p => p.nextReview && p.nextReview <= Date.now() && p.stage < 8).length +
    Object.values(data.vocabProgress || {}).filter(p => p.nextReview && p.nextReview <= Date.now() && p.stage < 8).length

  const topicBreakdown = useMemo(() => {
    const map = {}
    passages.forEach(p => {
      map[p.topic] = map[p.topic] || { total: 0, done: 0 }
      map[p.topic].total++
      if (data.passageProgress[p.id]?.completed) map[p.topic].done++
    })
    return Object.entries(map).sort((a, b) => b[1].total - a[1].total)
  }, [data])

  // First-time user onboarding
  if (isNewUser) {
    return (
      <div className="space-y-8">
        <div className="text-center py-8">
          <div className="text-5xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-ink-800 dark:text-cream-100 mb-2">
            开始你的 CET 翻译备考之旅
          </h1>
          <p className="text-ink-500 dark:text-ink-400 max-w-sm mx-auto leading-relaxed text-sm">
            真题驱动 · 逐句精讲 · 间隔复习
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { step: '1', title: '真题练习', desc: '逐句翻译真题，看参考答案和高分解析', icon: BookOpen, action: () => onNavigate('practice') },
            { step: '2', title: '快速记忆', desc: '刷句型模板、翻译词组和话题词汇', icon: Zap, action: () => onNavigate('memory') },
            { step: '3', title: '智能复习', desc: '系统按艾宾浩斯曲线自动安排复习', icon: RotateCw, action: () => onNavigate('review') },
          ].map((s, i) => (
            <button key={i} onClick={s.action} className="card p-5 text-left hover:border-amber-300 dark:hover:border-amber-500/30 transition-all group">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center text-sm font-bold">{s.step}</span>
                <s.icon size={18} className="text-amber-500" />
              </div>
              <h3 className="font-bold text-ink-800 dark:text-cream-100 mb-1">{s.title}</h3>
              <p className="text-xs text-ink-500 dark:text-ink-400 leading-relaxed">{s.desc}</p>
              <div className="flex items-center gap-1 mt-3 text-xs text-amber-600 dark:text-amber-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                开始 <ArrowRight size={12} />
              </div>
            </button>
          ))}
        </div>

        <div className="card p-5">
          <h3 className="font-bold text-ink-800 dark:text-cream-100 mb-3 text-sm">学习方法论预览</h3>
          <p className="text-xs text-ink-500 dark:text-ink-400 mb-4">
            在做题之前，先了解翻译的核心方法论，事半功倍。
          </p>
          <div className="space-y-2">
            {[
              { title: translationSteps.title, desc: translationSteps.subtitle },
              { title: fallbackMethods.title, desc: fallbackMethods.subtitle },
              { title: highScoreStructures.title, desc: highScoreStructures.subtitle },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 bg-cream-50 dark:bg-ink-900 rounded-xl">
                <Play size={14} className="text-amber-500 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-ink-700 dark:text-cream-200">{m.title}</div>
                  <div className="text-xs text-ink-400 dark:text-ink-500">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Returning user dashboard
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="text-center py-4">
        <h1 className="text-2xl font-bold text-ink-800 dark:text-cream-100 mb-1">
          四六级翻译备考
        </h1>
        <p className="text-ink-500 dark:text-ink-400 text-sm">真题驱动 · 间隔复习 · 句法精讲</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { label: '连续天数', value: `${stats.dailyStreak}天`, icon: TrendingUp, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-500/10' },
          { label: '已学项目', value: totalLearned, icon: Zap, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/10' },
          { label: '已掌握', value: totalMastered, icon: CheckCircle, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' },
          { label: '待复习', value: dueReview, icon: AlertCircle, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-500/10' },
        ].map((s, i) => (
          <div key={i} className={`card p-3 sm:p-4 text-center ${s.bg} border-0`}>
            <s.icon size={16} className={`${s.color} mx-auto mb-1`} />
            <div className={`text-lg sm:text-xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-[11px] text-ink-400 dark:text-ink-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Daily recommendation + Topic progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {todayPassage && (
          <div className="card p-4 border-amber-200 dark:border-amber-500/20 bg-gradient-to-br from-amber-50 to-cream-50 dark:from-amber-500/5 dark:to-ink-800">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb size={16} className="text-amber-500" />
              <h3 className="font-bold text-sm text-ink-800 dark:text-cream-100">今日推荐</h3>
            </div>
            <p className="text-sm text-ink-600 dark:text-ink-300 mb-1">{todayPassage.title}</p>
            <div className="flex items-center gap-2 mb-3">
              <span className="tag bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[11px]">{todayPassage.topic}</span>
              <span className="text-xs text-ink-400">{todayPassage.year} · {todayPassage.sentences.length}句</span>
              <span className="text-[10px] text-ink-300">{'★'.repeat(todayPassage.difficulty)}</span>
            </div>
            <button onClick={() => onNavigate('practice', todayPassage.id)} className="btn-primary text-sm flex items-center gap-1.5">
              <BookOpen size={14} /> 开始练习 <ArrowRight size={14} />
            </button>
          </div>
        )}

        <div className="card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target size={16} className="text-blue-500" />
            <h3 className="font-bold text-sm text-ink-800 dark:text-cream-100">真题进度</h3>
          </div>
          <p className="text-xs text-ink-400 dark:text-ink-500 mb-3">{completedCount}/{passages.length} 篇已完成</p>
          <div className="space-y-1.5">
            {topicBreakdown.map(([topic, info]) => (
              <div key={topic} className="flex items-center gap-2">
                <span className="text-[11px] text-ink-500 dark:text-ink-400 w-16 flex-shrink-0">{topic}</span>
                <div className="flex-1 h-1.5 bg-cream-200 dark:bg-ink-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 dark:bg-blue-500 rounded-full transition-all"
                    style={{ width: `${info.total > 0 ? (info.done / info.total) * 100 : 0}%` }} />
                </div>
                <span className="text-[11px] text-ink-400 w-8 text-right">{info.done}/{info.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning methods — accordion */}
      <div>
        <h3 className="font-bold text-ink-800 dark:text-cream-100 mb-3 flex items-center gap-2 text-sm">
          <BookOpen size={16} className="text-amber-500" />
          学习方法论
        </h3>

        <AccordionSection title={translationSteps.title} subtitle={translationSteps.subtitle}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {translationSteps.steps.map(step => (
              <div key={step.id} className="bg-cream-50 dark:bg-ink-900 rounded-xl p-3 border border-cream-200 dark:border-ink-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center text-xs font-bold">{step.id.replace('step', '')}</span>
                  <span className="font-bold text-xs text-ink-700 dark:text-cream-200">{step.name}</span>
                  <span className="tag bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[10px]">{step.tag}</span>
                </div>
                <ul className="space-y-0.5 mb-2">
                  {step.checklist.map((item, i) => (
                    <li key={i} className="text-[11px] text-ink-600 dark:text-ink-300 flex items-start gap-1">
                      <span className="text-amber-400 mt-0.5">•</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-amber-600 dark:text-amber-400 italic">TIP: {step.tip}</p>
              </div>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection title={fallbackMethods.title} subtitle={fallbackMethods.subtitle}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {fallbackMethods.methods.map(m => (
              <div key={m.id} className="bg-orange-50 dark:bg-orange-500/5 rounded-xl p-3 border border-orange-200 dark:border-orange-500/20">
                <h5 className="font-bold text-xs text-ink-700 dark:text-cream-200 mb-1">{m.name}</h5>
                <p className="text-[11px] text-ink-500 dark:text-ink-400 mb-2">{m.principle}</p>
                {m.examples.slice(0, 2).map((ex, i) => (
                  <div key={i} className="text-[11px]">
                    <span className="text-ink-400 dark:text-ink-500 line-through mr-1">{ex.original}</span>
                    <span className="text-ink-700 dark:text-cream-200 font-medium">{ex.fallback}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </AccordionSection>

        <AccordionSection title={highScoreStructures.title} subtitle={highScoreStructures.subtitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {highScoreStructures.structures.map(s => (
              <div key={s.id} className="bg-green-50 dark:bg-green-500/5 rounded-xl p-3 border border-green-200 dark:border-green-500/20">
                <h5 className="font-bold text-xs text-ink-700 dark:text-cream-200 mb-1">{s.name}</h5>
                <p className="text-[11px] text-ink-500 dark:text-ink-400 mb-2">{s.principle}</p>
                {s.examples[0]?.target && (
                  <div className="text-[11px] text-ink-600 dark:text-ink-300 font-serif italic">{s.examples[0].target}</div>
                )}
              </div>
            ))}
          </div>
        </AccordionSection>
      </div>

      {/* Shortcut hints */}
      <div className="card p-3 flex items-center gap-4 flex-wrap text-[11px] text-ink-400 dark:text-ink-500">
        <span className="font-medium text-ink-500 dark:text-ink-400">快捷键:</span>
        <span><kbd className="px-1.5 py-0.5 rounded bg-cream-200 dark:bg-ink-700 font-mono text-[10px]">Ctrl+K</kbd> 搜索</span>
        <span><kbd className="px-1.5 py-0.5 rounded bg-cream-200 dark:bg-ink-700 font-mono text-[10px]">Space</kbd> 显示答案</span>
        <span><kbd className="px-1.5 py-0.5 rounded bg-cream-200 dark:bg-ink-700 font-mono text-[10px]">1-4</kbd> 评分</span>
        <span><kbd className="px-1.5 py-0.5 rounded bg-cream-200 dark:bg-ink-700 font-mono text-[10px]">?</kbd> 全部快捷键</span>
      </div>
    </div>
  )
}
