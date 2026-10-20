import { useState, useMemo } from 'react'
import { ArrowRight, Check, Circle, ChevronDown, ChevronRight, AlertTriangle, Info } from 'lucide-react'
import { analyzeTranslation, RATING_LABELS } from '../utils/feedback'

const typeColors = {
  structure: { bg: 'bg-amber-100 dark:bg-amber-500/20', text: 'text-amber-800 dark:text-amber-400', border: 'border-amber-300 dark:border-amber-500/30', dot: 'bg-amber-500' },
  phrase: { bg: 'bg-blue-100 dark:bg-blue-500/20', text: 'text-blue-800 dark:text-blue-400', border: 'border-blue-300 dark:border-blue-500/30', dot: 'bg-blue-500' },
  vocab: { bg: 'bg-emerald-100 dark:bg-emerald-500/20', text: 'text-emerald-800 dark:text-emerald-400', border: 'border-emerald-300 dark:border-emerald-500/30', dot: 'bg-emerald-500' },
  logic: { bg: 'bg-violet-100 dark:bg-violet-500/20', text: 'text-violet-800 dark:text-violet-400', border: 'border-violet-300 dark:border-violet-500/30', dot: 'bg-violet-500' },
  grammar: { bg: 'bg-rose-100 dark:bg-rose-500/20', text: 'text-rose-800 dark:text-rose-400', border: 'border-rose-300 dark:border-rose-500/30', dot: 'bg-rose-500' },
  term: { bg: 'bg-cyan-100 dark:bg-cyan-500/20', text: 'text-cyan-800 dark:text-cyan-400', border: 'border-cyan-300 dark:border-cyan-500/30', dot: 'bg-cyan-500' },
}

const typeNames = {
  structure: '句型结构',
  phrase: '固定搭配',
  vocab: '核心词汇',
  logic: '逻辑连接',
  grammar: '语法结构',
  term: '术语表达',
}

// 标注片段常含省略号、斜杠、引号（如 "strengthening...protection"、
// "may / might"、`"绿水青山"`），直接用 indexOf 会整段失配。
// 匹配时两侧都去掉引号，再把命中位置映射回原文，保证高亮仍覆盖引号。
function stripQuotes(en) {
  const map = []
  let text = ''
  for (let i = 0; i < en.length; i++) {
    if (/[“”‘’"]/.test(en[i])) continue
    text += en[i]
    map.push(i)
  }
  map.push(en.length)
  return { text, map }
}

function locateFragment(en, fragment, fromIndex = 0) {
  const cleaned = String(fragment || '').replace(/[“”‘’"]/g, '').trim()
  if (!cleaned) return null

  const { text: haystack, map } = stripQuotes(String(en || ''))
  // 把原串下标换算成去引号后的下标，避免匹配跨过引号后位置错位
  const startAt = map.findIndex(original => original >= fromIndex)
  let cursor = startAt === -1 ? haystack.length : startAt

  const pieces = cleaned.split(/\s*(?:\.{3,}|…)\s*/).map(s => s.trim()).filter(Boolean)
  let start = null
  let end = null
  for (const piece of pieces) {
    const alternatives = piece.split(/\s*\/\s*/).map(s => s.trim()).filter(Boolean)
    let found = null
    let token = null
    for (const alt of alternatives) {
      const idx = haystack.indexOf(alt, cursor)
      if (idx !== -1) { found = idx; token = alt; break }
    }
    if (found === null) return null
    if (start === null) start = found
    end = found + token.length
    cursor = end
  }
  return { start: map[start], end: map[end] }
}

function renderAnnotatedSentence(en, annotations, activeAnnotation, setActiveAnnotation) {
  if (!annotations || annotations.length === 0) {
    return <span>{en}</span>
  }

  const located = annotations
    .map((ann, originalIndex) => ({ ann, originalIndex, range: locateFragment(en, ann.fragment) }))
    .filter(item => item.range)
    .sort((a, b) => a.range.start - b.range.start)

  const parts = []
  let lastIndex = 0

  located.forEach(({ ann, originalIndex, range }) => {
    if (range.start < lastIndex) return
    if (range.start > lastIndex) {
      parts.push(<span key={`t-${originalIndex}`}>{en.slice(lastIndex, range.start)}</span>)
    }
    const isActive = activeAnnotation === originalIndex
    const colors = typeColors[ann.type] || typeColors.phrase
    parts.push(
      <span
        key={`a-${originalIndex}`}
        className={`relative inline cursor-pointer border-b-2 ${colors.border} ${colors.bg} ${colors.text} px-0.5 rounded-sm font-medium transition-all ${isActive ? 'ring-2 ring-amber-300 dark:ring-amber-500' : 'hover:opacity-80'}`}
        onClick={() => setActiveAnnotation(isActive ? null : originalIndex)}
      >
        {en.slice(range.start, range.end)}
        {isActive && (
          <span className="absolute left-0 -top-1.5 -translate-y-full bg-ink-800 dark:bg-ink-100 text-white dark:text-ink-900 text-[11px] rounded-lg px-2.5 py-1.5 whitespace-nowrap z-10 shadow-lg max-w-xs">
            <span className="font-bold">{ann.label}</span>
            {ann.detail && <span className="block text-ink-200 dark:text-ink-600 mt-0.5 font-normal whitespace-normal">{ann.detail}</span>}
          </span>
        )}
      </span>
    )
    lastIndex = range.end
  })
  if (lastIndex < en.length) {
    parts.push(<span key="rest">{en.slice(lastIndex)}</span>)
  }
  return <span>{parts.length > 0 ? parts : en}</span>
}

const ratingChipStyles = {
  0: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/20',
  1: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20',
  2: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20',
  3: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20',
}

function FeedbackPanel({ feedback }) {
  const { items, hits, total, suggestedRating, grammar = [], coherence = [], suggestedBand } = feedback
  if (!items || items.length === 0) return null

  const scored = items.filter(i => i.scored)
  const hitItems = scored.filter(i => i.hit)
  const missItems = scored.filter(i => !i.hit)
  const bonusStructures = items.filter(i => !i.scored && i.hit)
  const languageIssues = [...grammar, ...coherence]

  return (
    <div className="card p-4 border-amber-200 dark:border-amber-500/20 bg-amber-50/40 dark:bg-amber-500/5">
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className="text-sm font-bold text-ink-800 dark:text-cream-100">要点命中</span>
        {total > 0 && (
          <span className="text-xs text-ink-500 dark:text-ink-400">命中 {hits}/{total} 个关键表达</span>
        )}
        {suggestedBand && (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-lg border bg-white/60 dark:bg-ink-800/60 text-ink-600 dark:text-ink-300 border-cream-300 dark:border-ink-600">
            参考分档 {suggestedBand.range}
          </span>
        )}
        {suggestedRating != null && (
          <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-lg border ${ratingChipStyles[suggestedRating]}`}>
            系统建议：{RATING_LABELS[suggestedRating]}
          </span>
        )}
      </div>

      {languageIssues.length > 0 && (
        <div className="space-y-1.5 mb-3 pb-3 border-b border-amber-200/60 dark:border-amber-500/20">
          {languageIssues.map((issue, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs">
              {issue.level === 'error' ? (
                <AlertTriangle size={12} className="text-red-500 mt-0.5 flex-shrink-0" />
              ) : (
                <Info size={12} className="text-orange-400 mt-0.5 flex-shrink-0" />
              )}
              <span className={issue.level === 'error' ? 'text-red-600 dark:text-red-400' : 'text-ink-600 dark:text-ink-300'}>
                {issue.message}
              </span>
            </div>
          ))}
        </div>
      )}

      {missItems.length > 0 && (
        <div className="space-y-1.5 mb-3">
          {missItems.map((i, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs">
              <Circle size={11} className="text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" />
              <div className="flex-1 min-w-0">
                <span className="font-medium text-ink-700 dark:text-cream-200">{i.label}</span>
                <span className="text-ink-400 dark:text-ink-500 mx-1">→</span>
                <span className="font-mono text-ink-600 dark:text-ink-300">{i.fragment}</span>
                {i.alternatives.length > 0 && (
                  <div className="text-[11px] text-ink-500 dark:text-ink-400 mt-0.5">
                    也可以说：{i.alternatives.join(' / ')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {hitItems.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap">
          {hitItems.map((i, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-500/20"
              title={i.via ? `用替代表达「${i.via}」命中` : i.fragment}
            >
              <Check size={10} />
              {i.label || i.fragment}
            </span>
          ))}
        </div>
      )}

      {bonusStructures.length > 0 && (
        <div className="mt-3 pt-2 border-t border-amber-200/60 dark:border-amber-500/20 text-[11px] text-ink-500 dark:text-ink-400">
          句式用上了：{bonusStructures.map(i => i.fragment).join('、')}
        </div>
      )}

      <p className="text-[10px] text-ink-400 dark:text-ink-500 mt-3">
        按参考译文的关键片段做规则比对，只反映「关键表达是否译出」；语法与连贯性只覆盖高置信度规则。分档为参考估算，不代表最终得分。用简单说法替代也算命中。
      </p>
    </div>
  )
}

export default function AnswerAnalysis({ sentence, userTranslation, feedback }) {
  const [activeAnnotation, setActiveAnnotation] = useState(null)
  const [analysisOpen, setAnalysisOpen] = useState(false)
  const t = sentence?.technique
  const autoFeedback = useMemo(
    () => (feedback !== undefined ? feedback : analyzeTranslation(sentence, userTranslation)),
    [feedback, sentence, userTranslation]
  )
  if (!sentence) return null

  const annotations = sentence.annotations || []
  const hasAnnotations = annotations.length > 0

  return (
    <div className="space-y-4">
      {/* Rule-based coverage feedback — shown first so it is read before the wall of analysis */}
      {userTranslation && autoFeedback && <FeedbackPanel feedback={autoFeedback} />}

      {/* Side-by-side comparison when user submitted translation */}
      {userTranslation && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="card p-4 border-blue-200 dark:border-blue-500/20 bg-blue-50/30 dark:bg-blue-500/5">
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">你的翻译</div>
            <p className="text-sm text-ink-700 dark:text-cream-200 leading-relaxed font-serif">{userTranslation}</p>
          </div>
          <div className="card p-4 border-green-200 dark:border-green-500/20 bg-green-50/30 dark:bg-green-500/5">
            <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-2 flex items-center gap-1">
              <ArrowRight size={12} /> 参考答案
            </div>
            <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed font-serif italic">{sentence.en}</p>
          </div>
        </div>
      )}

      {/* If no user translation, show reference answer card normally */}
      {!userTranslation && (
        <div className="card p-5 border-amber-200 dark:border-amber-500/20 bg-amber-50/30 dark:bg-amber-500/5">
          <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-2">参考答案（点击高亮部分查看标注）</div>
          <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed font-serif italic">
            {renderAnnotatedSentence(sentence.en, annotations, activeAnnotation, setActiveAnnotation)}
          </p>
          {hasAnnotations && (
            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-amber-200/50 dark:border-amber-500/20 flex-wrap">
              <span className="text-[10px] text-ink-400 dark:text-ink-500">标注图例：</span>
              {Object.entries(typeNames).map(([type, name]) => (
                <span key={type} className="inline-flex items-center gap-1 text-[10px] text-ink-500 dark:text-ink-400">
                  <span className={`w-2 h-2 rounded-full ${typeColors[type].dot}`} /> {name}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Annotation detail cards */}
      {annotations.length > 0 && (
        <div className="space-y-2">
          {annotations.map((ann, i) => {
            const colors = typeColors[ann.type] || typeColors.phrase
            return (
              <div key={i} className={`border-l-2 ${colors.border} pl-3 py-1`}>
                <div className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                  <span className="text-xs font-bold text-ink-700 dark:text-cream-200">{ann.label}</span>
                  <span className="text-[10px] text-ink-400 dark:text-ink-500">{typeNames[ann.type]}</span>
                </div>
                <div className="text-xs text-ink-600 dark:text-ink-300 mt-0.5">{ann.detail}</div>
              </div>
            )
          })}
        </div>
      )}

      {/* Technique analysis */}
      {t && (
        <div className="border border-amber-200 dark:border-amber-500/20 rounded-lg overflow-hidden">
          <button
            onClick={() => setAnalysisOpen(o => !o)}
            className="w-full px-4 py-3 bg-amber-50 dark:bg-amber-500/10 flex items-center justify-between text-left hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-colors"
          >
            <div>
              <span className="text-sm font-bold text-ink-800 dark:text-cream-100">翻译解析</span>
              {t.difficulty != null && (
                <span className="text-xs text-amber-600 dark:text-amber-400 ml-2">
                  难度 {'★'.repeat(Math.min(t.difficulty, 5))}{'☆'.repeat(Math.max(0, 5 - Math.min(t.difficulty, 5)))}
                </span>
              )}
              <span className="text-[11px] text-ink-400 dark:text-ink-500 ml-2">
                结构拆解 · 保底策略 · 高低配版本
              </span>
            </div>
            {analysisOpen ? <ChevronDown size={16} className="text-ink-400 flex-shrink-0" /> : <ChevronRight size={16} className="text-ink-400 flex-shrink-0" />}
          </button>
          <div className={`p-4 bg-white dark:bg-ink-800 space-y-4 text-sm ${analysisOpen ? '' : 'hidden'}`}>
            {t.structure && (
              <div>
                <div className="text-xs text-ink-400 dark:text-ink-500 font-medium mb-1.5">句子结构</div>
                <div className="bg-cream-50 dark:bg-ink-900 rounded-lg p-3 font-mono text-xs text-ink-700 dark:text-cream-200">{t.structure}</div>
                {t.structureAnalysis && (
                  <div className="text-xs text-ink-600 dark:text-ink-300 mt-1.5 leading-relaxed whitespace-pre-line">{t.structureAnalysis}</div>
                )}
              </div>
            )}
            {t.whyGood && (
              <div>
                <div className="text-xs text-ink-400 dark:text-ink-500 font-medium mb-1.5">为什么这样写</div>
                <div className="text-xs text-ink-700 dark:text-cream-200 leading-relaxed">{t.whyGood}</div>
              </div>
            )}
            {(t.substitutionGuide || t.lowScore) && (
              <div className="bg-orange-50 dark:bg-orange-500/5 rounded-lg p-3 border border-orange-200 dark:border-orange-500/20">
                <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1.5">不会翻怎么办 — 保底策略</div>
                {t.substitutionGuide && (
                  <div className="text-xs text-ink-700 dark:text-cream-200 leading-relaxed">{t.substitutionGuide}</div>
                )}
                {t.lowScore && (
                  <div className="mt-2 pt-2 border-t border-orange-200 dark:border-orange-500/20">
                    <div className="text-[11px] text-orange-500 dark:text-orange-400 mb-0.5">低配版（8-10分，考试可接受）</div>
                    {t.lowScore.en && (
                      <div className="text-xs font-serif italic text-ink-700 dark:text-cream-200">{t.lowScore.en}</div>
                    )}
                    {t.lowScore.note && <div className="text-[11px] text-ink-500 dark:text-ink-400 mt-0.5">{t.lowScore.note}</div>}
                  </div>
                )}
              </div>
            )}
            {t.highScore && (
              <div className="bg-green-50 dark:bg-green-500/5 rounded-lg p-3 border border-green-200 dark:border-green-500/20">
                <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">高配版（14分，力争达到）</div>
                {t.highScore.en && (
                  <div className="text-xs font-serif italic text-ink-800 dark:text-cream-200">{t.highScore.en}</div>
                )}
                {t.highScore.note && <div className="text-[11px] text-ink-600 dark:text-ink-300 mt-0.5">{t.highScore.note}</div>}
              </div>
            )}
            {t.sentencePattern && (
              <div className="bg-amber-50 dark:bg-amber-500/5 rounded-lg p-3 border border-amber-200 dark:border-amber-500/20">
                <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-1.5">遇到类似句子怎么翻</div>
                <div className="text-xs text-ink-700 dark:text-cream-200 leading-relaxed whitespace-pre-line">{t.sentencePattern}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
