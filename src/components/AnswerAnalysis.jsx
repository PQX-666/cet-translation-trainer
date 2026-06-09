import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const typeColors = {
  structure: { bg: 'bg-amber-100 dark:bg-amber-500/20', text: 'text-amber-800 dark:text-amber-400', border: 'border-amber-300 dark:border-amber-500/30', dot: 'bg-amber-500' },
  phrase: { bg: 'bg-blue-100 dark:bg-blue-500/20', text: 'text-blue-800 dark:text-blue-400', border: 'border-blue-300 dark:border-blue-500/30', dot: 'bg-blue-500' },
  vocab: { bg: 'bg-emerald-100 dark:bg-emerald-500/20', text: 'text-emerald-800 dark:text-emerald-400', border: 'border-emerald-300 dark:border-emerald-500/30', dot: 'bg-emerald-500' },
  logic: { bg: 'bg-violet-100 dark:bg-violet-500/20', text: 'text-violet-800 dark:text-violet-400', border: 'border-violet-300 dark:border-violet-500/30', dot: 'bg-violet-500' },
}

const typeNames = {
  structure: '句型结构',
  phrase: '固定搭配',
  vocab: '核心词汇',
  logic: '逻辑连接',
}

function renderAnnotatedSentence(en, annotations, activeAnnotation, setActiveAnnotation) {
  if (!annotations || annotations.length === 0) {
    return <span>{en}</span>
  }
  const sorted = [...annotations].sort((a, b) => en.indexOf(a.fragment) - en.indexOf(b.fragment))
  const parts = []
  let lastIndex = 0
  const used = new Set()

  sorted.forEach((ann, i) => {
    const start = en.indexOf(ann.fragment, lastIndex)
    if (start === -1) return
    if ([...used].some(u => start < u.end && start + ann.fragment.length > u.start)) return
    const end = start + ann.fragment.length
    used.add({ start, end })
    if (start > lastIndex) {
      parts.push(<span key={`t-${i}`}>{en.slice(lastIndex, start)}</span>)
    }
    const isActive = activeAnnotation === i
    const colors = typeColors[ann.type] || typeColors.phrase
    parts.push(
      <span
        key={`a-${i}`}
        className={`relative inline cursor-pointer border-b-2 ${colors.border} ${colors.bg} ${colors.text} px-0.5 rounded-sm font-medium transition-all ${isActive ? 'ring-2 ring-amber-300 dark:ring-amber-500' : 'hover:opacity-80'}`}
        onClick={() => setActiveAnnotation(isActive ? null : i)}
      >
        {en.slice(start, end)}
        {isActive && (
          <span className="absolute left-0 -top-1.5 -translate-y-full bg-ink-800 dark:bg-ink-100 text-white dark:text-ink-900 text-[11px] rounded-lg px-2.5 py-1.5 whitespace-nowrap z-10 shadow-lg max-w-xs">
            <span className="font-bold">{ann.label}</span>
            {ann.detail && <span className="block text-ink-200 dark:text-ink-600 mt-0.5 font-normal whitespace-normal">{ann.detail}</span>}
          </span>
        )}
      </span>
    )
    lastIndex = end
  })
  if (lastIndex < en.length) {
    parts.push(<span key="rest">{en.slice(lastIndex)}</span>)
  }
  return <span>{parts.length > 0 ? parts : en}</span>
}

export default function AnswerAnalysis({ sentence, userTranslation }) {
  const [activeAnnotation, setActiveAnnotation] = useState(null)
  const t = sentence?.technique
  if (!sentence) return null

  const annotations = sentence.annotations || []
  const hasAnnotations = annotations.length > 0

  return (
    <div className="space-y-4">
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
          <div className="px-4 py-3 bg-amber-50 dark:bg-amber-500/10 flex items-center justify-between">
            <div>
              <span className="text-sm font-bold text-ink-800 dark:text-cream-100">翻译解析</span>
              {t.difficulty != null && (
                <span className="text-xs text-amber-600 dark:text-amber-400 ml-2">
                  难度 {'★'.repeat(Math.min(t.difficulty, 5))}{'☆'.repeat(Math.max(0, 5 - Math.min(t.difficulty, 5)))}
                </span>
              )}
            </div>
          </div>
          <div className="p-4 bg-white dark:bg-ink-800 space-y-4 text-sm">
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
            {t.keyVocab && t.keyVocab.length > 0 && (
              <div>
                <div className="text-xs text-ink-400 dark:text-ink-500 font-medium mb-1.5">核心词汇</div>
                <div className="grid gap-1.5">
                  {t.keyVocab.map((v, i) => (
                    <div key={i} className="flex items-start gap-2 bg-cream-50 dark:bg-ink-900 rounded px-2.5 py-1.5 flex-wrap">
                      <span className="font-mono text-xs text-ink-800 dark:text-cream-100 font-bold flex-shrink-0">{v.word}</span>
                      <span className="text-xs text-ink-500 dark:text-ink-400">{v.cn}</span>
                      {v.note && <span className="text-[11px] text-ink-400 dark:text-ink-500">{v.note}</span>}
                    </div>
                  ))}
                </div>
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
                    <div className="text-xs font-serif italic text-ink-700 dark:text-cream-200">{t.lowScore.text}</div>
                    {t.lowScore.note && <div className="text-[11px] text-ink-500 dark:text-ink-400 mt-0.5">{t.lowScore.note}</div>}
                  </div>
                )}
              </div>
            )}
            {t.highScore && (
              <div className="bg-green-50 dark:bg-green-500/5 rounded-lg p-3 border border-green-200 dark:border-green-500/20">
                <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">高配版（14分，力争达到）</div>
                <div className="text-xs font-serif italic text-ink-800 dark:text-cream-200">{t.highScore.text}</div>
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
