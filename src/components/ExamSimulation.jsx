import { useState, useEffect, useMemo, useCallback } from 'react'
import { passages } from '../data'
import { analyzePassage } from '../utils/feedback'
import SourceBadge from './SourceBadge'
import { Timer, Play, RotateCw, AlertTriangle, Info } from 'lucide-react'

const EXAM_SECONDS = 30 * 60
const STORAGE_KEY = 'cet-exam-attempts'
const BANDS = ['13-15', '10-12', '7-9', '4-6']
const bandRank = band => BANDS.indexOf(band)

function loadAttempts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const list = raw ? JSON.parse(raw) : []
    return Array.isArray(list) ? list : []
  } catch {
    return []
  }
}

function saveAttempts(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 10)))
  } catch {
    // localStorage 不可用时不影响本次模考
  }
}

const formatClock = seconds => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const realPassages = passages.filter(p => p.sourceType === 'real')

export default function ExamSimulation() {
  const [selectedId, setSelectedId] = useState(() => realPassages[0]?.id || passages[0]?.id)
  const [status, setStatus] = useState('idle')
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS)
  const [text, setText] = useState('')
  const [selfBand, setSelfBand] = useState(null)
  const [attempts, setAttempts] = useState(loadAttempts)

  const currentPassage = useMemo(
    () => passages.find(p => p.id === selectedId) || passages[0],
    [selectedId]
  )

  const analysis = useMemo(
    () => (status === 'done' && currentPassage ? analyzePassage(currentPassage, text) : null),
    [status, currentPassage, text]
  )

  const secondsUsed = EXAM_SECONDS - secondsLeft
  const wordCount = (text.match(/[A-Za-z']+/g) || []).length

  const resetForPassage = useCallback((id) => {
    setSelectedId(id)
    setStatus('idle')
    setSecondsLeft(EXAM_SECONDS)
    setText('')
    setSelfBand(null)
  }, [])

  const startExam = () => {
    setStatus('running')
    setSecondsLeft(EXAM_SECONDS)
    setText('')
    setSelfBand(null)
  }

  const finishExam = useCallback(() => {
    setStatus('done')
    const passage = passages.find(p => p.id === selectedId)
    const result = passage ? analyzePassage(passage, text) : null
    if (!text.trim()) return
    const attempt = {
      id: Date.now(),
      at: Date.now(),
      passageId: selectedId,
      title: passage.title,
      level: passage.level,
      sourceType: passage.sourceType,
      secondsUsed: EXAM_SECONDS - secondsLeft,
      words: (text.match(/[A-Za-z']+/g) || []).length,
      coverage: result?.coverage ?? null,
      systemBand: result?.suggestedBand?.range || null,
      selfBand: null,
      text,
    }
    setAttempts(prev => {
      const next = [attempt, ...prev].slice(0, 10)
      saveAttempts(next)
      return next
    })
  }, [selectedId, text, secondsLeft])

  useEffect(() => {
    if (status !== 'running') return
    const id = setInterval(() => setSecondsLeft(s => Math.max(0, s - 1)), 1000)
    return () => clearInterval(id)
  }, [status])

  useEffect(() => {
    if (status === 'running' && secondsLeft === 0) finishExam()
  }, [status, secondsLeft, finishExam])

  const handleSelfBand = band => {
    setSelfBand(band)
    setAttempts(prev => {
      const next = prev.map((a, i) => i === 0 ? { ...a, selfBand: band } : a)
      saveAttempts(next)
      return next
    })
  }

  const calibrateNote = useMemo(() => {
    if (!selfBand || !analysis?.suggestedBand?.range) return null
    const diff = Math.abs(bandRank(selfBand) - bandRank(analysis.suggestedBand.range))
    if (diff === 0) return { tone: 'good', text: '自评与系统估算一致，说明你对译文质量的判断比较稳定。' }
    if (diff === 1) return { tone: 'mild', text: '自评与系统估算相差一档，回看漏掉的要点和语言错误即可。' }
    return {
      tone: 'large',
      selfHigher: bandRank(selfBand) > bandRank(analysis.suggestedBand.range),
      text: '自评与系统估算相差两档以上。',
    }
  }, [selfBand, analysis])

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">限时模考</h2>
          <p className="text-ink-500 dark:text-ink-400 mt-1 text-sm">
            30 分钟 · 只看中文 · 整篇翻译后再对照参考译文
          </p>
        </div>
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-sm font-bold ${
          status === 'running'
            ? secondsLeft <= 300
              ? 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400'
              : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400'
            : 'bg-cream-200 dark:bg-ink-700 text-ink-500 dark:text-ink-400'
        }`}>
          <Timer size={15} />
          {formatClock(secondsLeft)}
        </div>
      </div>

      {/* Passage selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {realPassages.map(p => {
          const active = p.id === selectedId
          return (
            <button
              key={p.id}
              onClick={() => resetForPassage(p.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                active
                  ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 shadow-sm'
                  : 'bg-cream-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700'
              }`}
            >
              <span className="max-w-[110px] truncate">{p.title}</span>
              <span className={`text-[8px] px-1 py-0.5 rounded font-bold ${p.level === 'CET-4' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'}`}>
                {p.level === 'CET-4' ? '四' : '六'}
              </span>
            </button>
          )
        })}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="tag bg-cream-200 dark:bg-ink-700 text-ink-600 dark:text-ink-300">{currentPassage.topic}</span>
        <span className="tag bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400">{currentPassage.year}</span>
        <SourceBadge passage={currentPassage} />
        <span className="text-xs text-ink-400 dark:text-ink-500">{currentPassage.fullCN.length} 字 · {currentPassage.sentences.length} 句</span>
      </div>

      {status === 'idle' && (
        <>
          <div className="card p-6">
            <h3 className="font-bold text-ink-800 dark:text-cream-100 mb-3">考试规则</h3>
            <ul className="text-sm text-ink-600 dark:text-cream-200 space-y-2 leading-relaxed">
              <li>· 限时 30 分钟，中途不显示参考译文和句子解析。</li>
              <li>· 先通读中文全文，判断话题和主时态，再整篇翻译。</li>
              <li>· 以信息完整、语法正确为先，高级结构服务于准确表达。</li>
              <li>· 交卷后按要点覆盖给出参考分档，并请你自评一档，用于校准。</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <button onClick={startExam} className="btn-primary text-sm flex items-center gap-1.5">
                <Play size={14} /> 开始模考
              </button>
              <span className="text-xs text-ink-400 dark:text-ink-500">计时从点击开始，交卷后自动保存本次成绩</span>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-ink-800 dark:text-cream-100 text-sm mb-1">中文原文</h3>
            <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed whitespace-pre-line">{currentPassage.fullCN}</p>
          </div>

          {attempts.length > 0 && (
            <div className="card p-5">
              <h3 className="font-bold text-ink-800 dark:text-cream-100 text-sm mb-3">最近模考</h3>
              <div className="space-y-2">
                {attempts.slice(0, 5).map(a => (
                  <div key={a.id} className="flex items-center gap-2 text-xs text-ink-500 dark:text-ink-400">
                    <span className="flex-1 truncate">{a.title}</span>
                    <span>{formatClock(a.secondsUsed)}</span>
                    <span className="text-ink-400 dark:text-ink-500">{a.systemBand || '-'}</span>
                    <span className="text-[10px] text-ink-300 dark:text-ink-600">
                      {new Date(a.at).toLocaleDateString('zh-CN')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {status === 'running' && (
        <>
          <div className="card p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-ink-800 dark:text-cream-100 text-sm">中文原文</h3>
              <span className="text-xs text-ink-400 dark:text-ink-500">考试中不提供参考译文</span>
            </div>
            <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed whitespace-pre-line">{currentPassage.fullCN}</p>
          </div>

          <div className="card p-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-ink-400 dark:text-ink-500">整篇译文</span>
              <span className="text-xs text-ink-400 dark:text-ink-500">{wordCount} words</span>
            </div>
            <textarea
              className="w-full min-h-[240px] p-3 rounded-lg border border-cream-300 dark:border-ink-600 bg-cream-50 dark:bg-ink-900 text-ink-800 dark:text-cream-100 placeholder-ink-300 dark:placeholder-ink-500 focus:outline-none focus:border-amber-400 dark:focus:border-amber-500 text-sm leading-relaxed font-serif resize-y"
              placeholder="在这里完成整篇翻译..."
              value={text}
              onChange={e => setText(e.target.value)}
              autoFocus
            />
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-ink-400 dark:text-ink-500">
                {secondsLeft <= 300 ? '剩余时间不足 5 分钟' : '交卷后才会显示参考译文'}
              </span>
              <button onClick={finishExam} className="btn-primary text-sm">提前交卷</button>
            </div>
          </div>
        </>
      )}

      {status === 'done' && analysis && (
        <>
          <div className="card p-5 border-amber-200 dark:border-amber-500/20">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 className="font-bold text-ink-800 dark:text-cream-100">本次估算</h3>
                <p className="text-xs text-ink-400 dark:text-ink-500 mt-0.5">按要点覆盖 + 高置信度语言检查估算，非官方评分</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{analysis.suggestedBand?.range || '-'}</div>
                  <div className="text-[10px] text-ink-400 dark:text-ink-500">参考分档</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ink-700 dark:text-cream-200">{formatClock(secondsUsed)}</div>
                  <div className="text-[10px] text-ink-400 dark:text-ink-500">用时</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-ink-700 dark:text-cream-200">{analysis.hits}/{analysis.total}</div>
                  <div className="text-[10px] text-ink-400 dark:text-ink-500">要点命中</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-ink-500 dark:text-ink-400 mb-4">{analysis.suggestedBand?.note}</p>

            {analysis.missing.length > 0 && (
              <div className="mb-4">
                <div className="text-xs font-medium text-ink-600 dark:text-cream-200 mb-2">没译出的关键表达</div>
                <div className="flex flex-wrap gap-1.5">
                  {analysis.missing.map((i, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-0.5 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20" title={i.fragment}>
                      {i.label || i.fragment}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {[...analysis.grammar, ...analysis.coherence].length > 0 && (
              <div className="space-y-1.5 mb-4">
                {[...analysis.grammar, ...analysis.coherence].map((issue, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    {issue.level === 'error'
                      ? <AlertTriangle size={12} className="text-red-500 mt-0.5 flex-shrink-0" />
                      : <Info size={12} className="text-orange-400 mt-0.5 flex-shrink-0" />}
                    <span className={issue.level === 'error' ? 'text-red-600 dark:text-red-400' : 'text-ink-600 dark:text-ink-300'}>{issue.message}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-cream-200 dark:border-ink-700">
              <div className="text-xs font-medium text-ink-600 dark:text-cream-200 mb-2">你的自评</div>
              <div className="flex flex-wrap gap-2">
                {BANDS.map(band => (
                  <button
                    key={band}
                    onClick={() => handleSelfBand(band)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selfBand === band
                        ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 border-amber-300 dark:border-amber-500/30'
                        : 'bg-cream-50 dark:bg-ink-900 text-ink-500 dark:text-ink-400 border-cream-300 dark:border-ink-600 hover:border-amber-300'
                    }`}
                  >
                    {band}
                  </button>
                ))}
              </div>
              {calibrateNote && (
                <div className={`mt-3 text-xs rounded-lg px-3 py-2 ${
                  calibrateNote.tone === 'good'
                    ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400'
                    : calibrateNote.tone === 'mild'
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400'
                      : 'bg-orange-50 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400'
                }`}>
                  {calibrateNote.text}
                  {calibrateNote.tone === 'large' && (calibrateNote.selfHigher
                    ? ' 自评偏高时，重点检查是否有漏译或用简单句掩盖语法问题。'
                    : ' 自评偏低时，说明你对关键表达的掌握比想象中好。')}
                </div>
              )}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-ink-800 dark:text-cream-100 text-sm mb-1">参考译文</h3>
            <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed font-serif italic whitespace-pre-line">{currentPassage.fullEN}</p>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-ink-800 dark:text-cream-100 text-sm mb-1">你的译文</h3>
            {text.trim()
              ? <p className="text-sm text-ink-700 dark:text-cream-200 leading-relaxed font-serif whitespace-pre-line">{text}</p>
              : <p className="text-sm text-ink-400 dark:text-ink-500">本次没有提交译文。</p>}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={startExam} className="btn-primary text-sm flex items-center gap-1.5">
              <RotateCw size={14} /> 再考一次
            </button>
            <button
              onClick={() => resetForPassage(selectedId)}
              className="btn-secondary text-sm flex items-center gap-1.5"
            >
              返回准备页
            </button>
          </div>
        </>
      )}

      {status === 'done' && !analysis && (
        <div className="card p-6 text-center">
          <p className="text-sm text-ink-500 dark:text-ink-400 mb-4">本次没有提交译文，无法估算。</p>
          <button onClick={() => resetForPassage(selectedId)} className="btn-secondary text-sm">
            返回准备页
          </button>
        </div>
      )}
    </div>
  )
}
