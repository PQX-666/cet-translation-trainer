import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { passages, allTopics, topicVocab, topicPhrases } from '../data'
import { loadData, completePassage, rateVocab, ratePhrase, getNextPassage } from '../utils/storage'
import { translationSteps, fallbackMethods, highScoreStructures } from '../data/methodology'
import SourceBadge from './SourceBadge'
import { SOURCE_LABELS } from '../data/source-meta'
import {
  ChevronRight, ChevronLeft, Check, BookOpen, Target, Lightbulb,
  Zap, ArrowRight, RotateCw, Award, AlertCircle, Clock, Circle
} from 'lucide-react'

const WALKTHROUGH_KEY = 'cet-walkthrough-progress'

const STEP_NAMES = ['整体把握', '句型骨架', '词汇攻坚', '结构升级', '全文翻译', '复盘总结']

const TENSE_OPTIONS = [
  { value: 'present', label: '一般现在时', hint: '事实陈述、文化介绍、地理描述、普遍真理' },
  { value: 'past', label: '一般过去时', hint: '具体历史事件、过去时间点完成的事' },
  { value: 'present_perfect', label: '现在完成时', hint: '持续至今的状态、已取得的成就、近年变化' },
  { value: 'future', label: '一般将来时', hint: '展望、预测、趋势判断' },
  { value: 'mix', label: '混合时态', hint: '不同句子使用不同时态' },
]

const STRUCTURE_OPTIONS = [
  { id: 'passive', name: '被动语态', desc: 'is/are/was/were + 过去分词', principle: '中文多用主动，英文倾向被动' },
  { id: 'nonfinite', name: '非谓语动词', desc: 'doing/done/to do 作状语或定语', principle: '中文并列短句→英文分词结构' },
  { id: 'compound', name: '并列句+逻辑词', desc: 'however/therefore/while/not only...but also', principle: '中文隐性逻辑→英文显性逻辑词' },
  { id: 'complex', name: '复合句(定从/状从)', desc: 'which/who/although/because/when', principle: '中文修饰前置→英文从句后置' },
]

const RATING_OPTIONS = [
  { value: 0, label: '忘了', desc: '完全不记得', color: 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:text-red-400 dark:border-red-500/20' },
  { value: 1, label: '模糊', desc: '有点印象但不准确', color: 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/20' },
  { value: 2, label: '记得', desc: '基本正确', color: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/20' },
  { value: 3, label: '很熟', desc: '完全掌握', color: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:hover:bg-green-500/20 dark:text-green-400 dark:border-green-500/20' },
]

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0')
  const s = (sec % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function analyzePassageTenses(sentences) {
  const patterns = {
    present_simple: /\b(is|are|am)\b(?!\s+\w+ing|\s+\w+ed)|generally|usually|often/i,
    past_simple: /\b(was|were)\b(?!\s+\w+ing)|[a-z]+ed\b|built|made|became|began|came|went|took|gave|found|left|known/i,
    present_perfect: /\bhas\s+[a-z]+ed\b|\bhave\s+[a-z]+ed\b|\bhas\s+been\b|\bhave\s+been\b/i,
    future: /\bwill\b|\bwould\b|\bis\s+expected\s+to\b|\bare\s+expected\s+to\b/i,
    passive: /\bis\s+\w+ed\b|\bare\s+\w+ed\b|\bwas\s+\w+ed\b|\bwere\s+\w+ed\b|\bhas\s+been\s+\w+ed\b|\bhave\s+been\s+\w+ed\b|\bis\s+known\s|\bare\s+located\s|\bis\s+recognized\s/i,
  }
  const details = sentences.map(s => {
    const en = s.en
    const found = []
    if (patterns.present_perfect.test(en)) found.push('现在完成时')
    if (patterns.past_simple.test(en)) found.push('一般过去时')
    if (patterns.present_simple.test(en)) found.push('一般现在时')
    if (patterns.future.test(en)) found.push('将来时')
    if (found.length === 0) found.push('一般现在时')
    const hasPassive = patterns.passive.test(en)
    return { cn: s.cn.slice(0, 30), found, hasPassive }
  })
  const tenseCounts = {}
  details.forEach(d => {
    d.found.forEach(t => { tenseCounts[t] = (tenseCounts[t] || 0) + 1 })
  })
  const primaryTense = Object.entries(tenseCounts).sort((a, b) => b[1] - a[1])[0]?.[0]
  const mappedTense = primaryTense === '一般现在时' ? 'present'
    : primaryTense === '一般过去时' ? 'past'
    : primaryTense === '现在完成时' ? 'present_perfect'
    : primaryTense === '将来时' ? 'future' : 'present'
  const passiveCount = details.filter(d => d.hasPassive).length
  const voiceProfile = passiveCount > sentences.length * 0.6 ? '被动为主'
    : passiveCount > 0 ? '主被动混合' : '主动为主'
  return { primaryTense: mappedTense, primaryTenseLabel: primaryTense || '一般现在时', details, voiceProfile, passiveCount }
}

function deriveSkeleton(sentence) {
  const t = sentence.technique
  if (!t?.structureAnalysis) return null
  const parts = t.structureAnalysis.split(' → ').map(p => p.trim())
  const cleaned = parts.map(p => p.replace(/^\(|\)$/g, ''))
  return { parts: cleaned, partsRaw: parts, raw: t.structureAnalysis }
}

const norm = text => String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

// SRS 的 key 必须与「快速记忆/复习」里的条目一致：
// 词汇是 `${topic}::${中文词}`，短语是 tpN。找不到对应条目就不排期，
// 否则会产生复习系统永远读不到、也永远不会到期的孤儿记录。
function canonicalSrsKey(itemType, annotation, topic) {
  if (itemType === 'vocab') {
    const entry = (topicVocab[topic] || []).find(w =>
      w.cn === annotation.label || norm(w.en) === norm(annotation.fragment)
    )
    return entry ? `${topic}::${entry.cn}` : null
  }
  const fragment = norm(annotation.fragment)
  if (!fragment) return null
  const entry = topicPhrases.find(p => {
    const en = norm(p.en)
    return en === fragment || en.includes(fragment) || fragment.includes(en)
  })
  return entry ? entry.id : null
}

function deriveVocabList(sentences, topic) {
  const allVocab = []
  sentences.forEach(s => {
    if (!s.annotations) return
    s.annotations.forEach((a, ai) => {
      if (a.type === 'vocab' || a.type === 'phrase') {
        const itemType = a.type
        const srsKey = canonicalSrsKey(itemType, a, topic)
        allVocab.push({
          cn: a.label,
          en: a.fragment,
          note: a.detail || '',
          fallback: '',
          sentenceId: s.id,
          key: `${s.id}-v${ai}`,
          itemType,
          srsKey,
        })
      }
    })
  })
  // Match substitution guides to vocab entries (per sentence)
  sentences.forEach(s => {
    const t = s.technique
    if (!t?.substitutionGuide) return
    const guides = t.substitutionGuide.split('；')
    const sentenceVocab = allVocab.filter(v => v.sentenceId === s.id)
    guides.forEach((g, i) => {
      if (sentenceVocab[i]) {
        const clean = g.replace(/^不会\s*[""]?/, '').replace(/[""]?\s*→\s*/, '').trim()
        sentenceVocab[i].fallback = clean.length < 60 ? clean : g.trim()
      }
    })
  })
  return allVocab
}

function deriveUpgradePair(sentence) {
  const t = sentence.technique
  const en = sentence.en
  const detected = STRUCTURE_OPTIONS.filter(opt => {
    if (opt.id === 'passive') return /\bis\s+\w+ed\b|\bare\s+\w+ed\b|\bwas\s+\w+ed\b|\bwere\s+\w+ed\b|\bhas\s+been\b|\bhave\s+been\b|\bis\s+known\b|\bare\s+located\b|\bis\s+recognized\b/i.test(en)
    if (opt.id === 'nonfinite') return /\w+ing,?\s|\w+ed,?\s|,\s*\w+ing\b|,\s*\w+ed\b|,\s*creating\b|,\s*making\b|,\s*providing\b/i.test(en) && !/\b(?:during|according|including)\b/i.test(en)
    if (opt.id === 'compound') return /however|therefore|moreover|furthermore|while|whereas|not only.*but also|both.*and|either.*or|neither.*nor|on the one hand|on the other hand/i.test(en)
    if (opt.id === 'complex') return /\bwhich\s|\bwho\s|\bwhose\b|\bwhom\b|\bthat\s(?!is\b|are\b|was\b|were\b|has\b|have\b)|\balso\b.*\bwhich\b/i.test(en)
    return false
  })
  return {
    cn: sentence.cn,
    en,
    structure: t?.structure || '',
    whyGood: t?.whyGood || '',
    highScoreNote: t?.highScore?.note || '',
    lowScoreNote: t?.lowScore?.note || '',
    highScoreEN: t?.highScore?.en || '',
    lowScoreEN: t?.lowScore?.en || '',
    detectedStructures: detected,
  }
}

function loadProgress(passageId) {
  try {
    const raw = localStorage.getItem(WALKTHROUGH_KEY)
    if (!raw) return null
    const all = JSON.parse(raw)
    return all[passageId] || null
  } catch { return null }
}

function saveProgress(passageId, updates) {
  try {
    const raw = localStorage.getItem(WALKTHROUGH_KEY)
    const all = raw ? JSON.parse(raw) : {}
    all[passageId] = { ...(all[passageId] || {}), ...updates }
    localStorage.setItem(WALKTHROUGH_KEY, JSON.stringify(all))
  } catch { /* ignore */ }
}

function clearProgress(passageId) {
  try {
    const raw = localStorage.getItem(WALKTHROUGH_KEY)
    if (!raw) return
    const all = JSON.parse(raw)
    delete all[passageId]
    localStorage.setItem(WALKTHROUGH_KEY, JSON.stringify(all))
  } catch { /* ignore */ }
}

export default function FullWalkthrough({ appData, onDataChange, onNavigate, navParams, showToast }) {
  const data = useMemo(() => loadData(), [appData])

  const [selectedPassageId, setSelectedPassageId] = useState(() => {
    if (navParams) return navParams
    const firstUncompleted = passages.find(p => !data.passageProgress[p.id]?.completed)
    return firstUncompleted?.id || passages[0]?.id
  })

  const currentPassage = useMemo(() => passages.find(p => p.id === selectedPassageId), [selectedPassageId])
  const sentences = currentPassage?.sentences || []
  const allVocab = useMemo(() => deriveVocabList(sentences, currentPassage?.topic), [sentences, currentPassage?.topic])
  const upgradePairs = useMemo(() => sentences.map(s => deriveUpgradePair(s)), [sentences])
  const tenseProfile = useMemo(() => analyzePassageTenses(sentences), [sentences])
  const transferablePatterns = useMemo(() =>
    sentences.filter(s => s.technique?.sentencePattern).map(s => ({
      cn: s.cn.slice(0, 50),
      pattern: s.technique.sentencePattern,
    })), [sentences])

  // Step state (restore from saved progress)
  const [step, setStepState] = useState(() => {
    const saved = loadProgress(selectedPassageId)
    return saved?.lastStep ?? 0
  })
  const setStep = useCallback((s) => {
    setStepState(s)
    saveProgress(selectedPassageId, { lastStep: s })
  }, [selectedPassageId])

  // Step 1 state
  const [topicAnswer, setTopicAnswer] = useState(null)
  const [tenseAnswer, setTenseAnswer] = useState(null)
  const [step1Submitted, setStep1SubmittedRaw] = useState(false)
  const setStep1Submitted = useCallback((v) => {
    setStep1SubmittedRaw(v)
    if (v) saveProgress(selectedPassageId, { step1Done: true, topicAnswer, tenseAnswer })
  }, [selectedPassageId, topicAnswer, tenseAnswer])

  // Step 2 state
  const [step2Idx, setStep2IdxRaw] = useState(0)
  const [step2Submissions, setStep2Submissions] = useState({})
  const setStep2Idx = useCallback((i) => {
    const val = typeof i === 'function' ? i(step2Idx) : i
    setStep2IdxRaw(val)
    saveProgress(selectedPassageId, { step2Idx: val })
  }, [selectedPassageId, step2Idx])

  // Step 3 state
  const [step3Idx, setStep3IdxRaw] = useState(0)
  const [step3Submissions, setStep3Submissions] = useState({})
  const setStep3Idx = useCallback((i) => {
    const val = typeof i === 'function' ? i(step3Idx) : i
    setStep3IdxRaw(val)
    saveProgress(selectedPassageId, { step3Idx: val })
  }, [selectedPassageId, step3Idx])

  // Step 4 state
  const [step4Idx, setStep4IdxRaw] = useState(0)
  const [step4Submissions, setStep4Submissions] = useState({})
  const [step4Selections, setStep4Selections] = useState({})
  const setStep4Idx = useCallback((i) => {
    const val = typeof i === 'function' ? i(step4Idx) : i
    setStep4IdxRaw(val)
    saveProgress(selectedPassageId, { step4Idx: val })
  }, [selectedPassageId, step4Idx])

  // Step 5 state
  const [fullTranslation, setFullTranslation] = useState('')
  const [step5Submitted, setStep5Submitted] = useState(false)
  const [sentenceRatings, setSentenceRatings] = useState({})
  const [passageCompleted, setPassageCompleted] = useState(false)

  // Timer
  const [timerSeconds, setTimerSeconds] = useState(0)
  const timerRef = useRef(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) return
    timerRef.current = setInterval(() => setTimerSeconds(t => t + 1), 1000)
  }, [])

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  // Timer: auto-start for steps 3-5, stop for others
  useEffect(() => {
    if (step >= 2 && step <= 4) startTimer()
    else stopTimer()
    return () => stopTimer()
  }, [step, startTimer, stopTimer])

  // Load saved progress on passage change
  useEffect(() => {
    const saved = loadProgress(selectedPassageId)
    if (saved) {
      if (saved.lastStep !== undefined) setStepState(saved.lastStep)
      if (saved.topicAnswer !== undefined) setTopicAnswer(saved.topicAnswer)
      if (saved.tenseAnswer !== undefined) setTenseAnswer(saved.tenseAnswer)
      if (saved.step1Done) setStep1SubmittedRaw(true)
      if (saved.step2Idx !== undefined) setStep2IdxRaw(saved.step2Idx)
      if (saved.step2Submissions) setStep2Submissions(saved.step2Submissions)
      if (saved.step3Idx !== undefined) setStep3IdxRaw(saved.step3Idx)
      if (saved.step3Submissions) setStep3Submissions(saved.step3Submissions)
      if (saved.step4Idx !== undefined) setStep4IdxRaw(saved.step4Idx)
      if (saved.step4Submissions) setStep4Submissions(saved.step4Submissions)
      if (saved.step4Selections) setStep4Selections(saved.step4Selections)
      if (saved.passageCompleted) setPassageCompleted(true)
    } else {
      setStepState(0); setTopicAnswer(null); setTenseAnswer(null); setStep1SubmittedRaw(false)
      setStep2IdxRaw(0); setStep2Submissions({}); setStep3IdxRaw(0); setStep3Submissions({})
      setStep4IdxRaw(0); setStep4Submissions({}); setStep4Selections({})
      setFullTranslation(''); setStep5Submitted(false); setSentenceRatings({})
      setPassageCompleted(false); setTimerSeconds(0)
    }
  }, [selectedPassageId])

  const handleSelectPassage = useCallback((pid) => {
    setSelectedPassageId(pid)
  }, [])

  const goNext = useCallback(() => { if (step < 5) setStep(step + 1) }, [step, setStep])
  const goPrev = useCallback(() => { if (step > 0) setStep(step - 1) }, [step, setStep])

  // Step 2: handle per-sentence skeleton submit
  const handleStep2Submit = (sentenceId, fields) => {
    setStep2Submissions(prev => {
      const next = { ...prev, [sentenceId]: { ...fields, submitted: true } }
      saveProgress(selectedPassageId, { step2Submissions: next })
      return next
    })
  }

  // Step 3: handle vocab submit + rating
  const handleStep3Submit = (vocabKey, input) => {
    setStep3Submissions(prev => {
      const next = { ...prev, [vocabKey]: { ...prev[vocabKey], input, submitted: true } }
      saveProgress(selectedPassageId, { step3Submissions: next })
      return next
    })
  }

  const handleStep3Rate = (vocabKey, itemType, srsKey, rating) => {
    setStep3Submissions(prev => {
      const next = { ...prev, [vocabKey]: { ...prev[vocabKey], rating } }
      saveProgress(selectedPassageId, { step3Submissions: next })
      return next
    })
    // 只给能在复习库里找到的条目排期；且无论评几分都要写入，
    // 否则“记得/很熟”的条目永远不会进入后续复习。
    if (srsKey) {
      if (itemType === 'vocab') {
        rateVocab(srsKey, rating)
      } else {
        ratePhrase(srsKey, rating, null)
      }
    }
    onDataChange()
  }

  // Step 4: handle structure identification submit
  const handleStep4Submit = (sentenceId, selected) => {
    setStep4Submissions(prev => {
      const next = { ...prev, [sentenceId]: { selected, submitted: true } }
      saveProgress(selectedPassageId, { step4Submissions: next })
      return next
    })
  }

  // Step 5: handle completion
  const handleCompletePassage = useCallback(() => {
    if (passageCompleted) return
    const results = sentences.map(s => ({
      sentenceId: s.id,
      // 带练是整篇输出，不能把同一段全文当成每一句的译文存进逐句记录
      userInput: '',
      rating: sentenceRatings[s.id] ?? 2,
      timestamp: Date.now(),
    }))
    const totalRating = results.reduce((sum, r) => sum + r.rating, 0)
    const avgRating = results.length > 0 ? Math.round(totalRating / results.length) : 2
    completePassage(selectedPassageId, currentPassage.topic, results, fullTranslation)
    setPassageCompleted(true)
    saveProgress(selectedPassageId, { passageCompleted: true, timerSeconds, avgRating })
    onDataChange()
    if (showToast) showToast('带练完成！数据已保存')
    setStep(5)
  }, [passageCompleted, sentences, fullTranslation, sentenceRatings, selectedPassageId, currentPassage, timerSeconds, onDataChange, showToast, setStep])

  // Count step3 difficult vocab
  const difficultVocabCount = Object.values(step3Submissions).filter(s => s.rating !== undefined && s.rating <= 1).length
  const vocabReviewed = Object.values(step3Submissions).filter(s => s.submitted).length
  const avgVocabRating = Object.values(step3Submissions).filter(s => s.rating !== undefined).length > 0
    ? Math.round(Object.values(step3Submissions).filter(s => s.rating !== undefined).reduce((s, v) => s + v.rating, 0) / Object.values(step3Submissions).filter(s => s.rating !== undefined).length * 100) / 100
    : null

  // All detected structures across all sentences
  const allDetectedStructures = useMemo(() => {
    const map = {}
    upgradePairs.forEach(up => {
      up.detectedStructures.forEach(ds => {
        if (!map[ds.id]) map[ds.id] = { ...ds, count: 0, examples: [] }
        map[ds.id].count++
        if (map[ds.id].examples.length < 2) map[ds.id].examples.push(up.cn.slice(0, 30))
      })
    })
    return Object.values(map).sort((a, b) => b.count - a.count)
  }, [upgradePairs])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return
      if (e.key === 'ArrowRight') {
        if (step === 1) setStep2IdxRaw(i => Math.min(sentences.length - 1, i + 1))
        if (step === 2) setStep3IdxRaw(i => Math.min(allVocab.length - 1, i + 1))
        if (step === 3) setStep4IdxRaw(i => Math.min(upgradePairs.length - 1, i + 1))
      }
      if (e.key === 'ArrowLeft') {
        if (step === 1) setStep2IdxRaw(i => Math.max(0, i - 1))
        if (step === 2) setStep3IdxRaw(i => Math.max(0, i - 1))
        if (step === 3) setStep4IdxRaw(i => Math.max(0, i - 1))
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [step, sentences.length, allVocab.length, upgradePairs.length])

  if (!currentPassage) {
    return (
      <div className="card p-12 text-center">
        <p className="text-ink-500 dark:text-ink-400">请选择一篇文章开始带练。</p>
      </div>
    )
  }

  const isPassageDone = data.passageProgress[selectedPassageId]?.completed || passageCompleted

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">全文手把手带做</h2>
          <p className="text-ink-500 dark:text-ink-400 mt-1 text-sm">
            六步完整翻译流程 · 学可迁移的方法论
          </p>
        </div>
        {(step >= 2 && step <= 4) && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream-200 dark:bg-ink-700 text-ink-600 dark:text-ink-300 text-sm font-mono">
            <Clock size={14} /> {formatTime(timerSeconds)}
          </div>
        )}
      </div>

      {/* Passage selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {passages.map(p => {
          const done = data.passageProgress[p.id]?.completed || (p.id === selectedPassageId && passageCompleted)
          const active = p.id === selectedPassageId
          return (
            <button
              key={p.id}
              onClick={() => handleSelectPassage(p.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                active
                  ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400 shadow-sm'
                  : done
                    ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/20'
                    : 'bg-cream-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700'
              }`}
            >
              {done && <Check size={12} />}
              <span className="max-w-[100px] truncate">{p.title}</span>
              {p.level && (
                <span className={`text-[8px] px-1 py-0.5 rounded font-bold ${p.level === 'CET-4' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'}`}>
                  {p.level === 'CET-4' ? '四' : '六'}
                </span>
              )}
              {p.sourceType && (
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${p.sourceType === 'real' ? 'bg-green-500' : p.sourceType === 'rewrite' ? 'bg-amber-500' : 'bg-ink-400'}`}
                  title={SOURCE_LABELS[p.sourceType]}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Step indicators */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1">
        {STEP_NAMES.map((name, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              i === step
                ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400'
                : i < step || (i === 5 && isPassageDone)
                  ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400'
                  : 'bg-cream-100 dark:bg-ink-800 text-ink-400 dark:text-ink-500'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-current flex items-center justify-center text-[9px] font-bold text-white">
              {i < step || (i === 5 && isPassageDone) ? <Check size={10} /> : i + 1}
            </span>
            {name}
          </button>
        ))}
      </div>

      {/* Step content */}
      <div className="card p-5 sm:p-6">
        {/* ====== STEP 1: 整体把握 ====== */}
        {step === 0 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-amber-500" />
              <h3 className="font-bold text-ink-800 dark:text-cream-100">Step 1: 整体把握 — 通读全文，判断话题与时态</h3>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              先通读中文全文，判断文章的话题领域和主时态。这是翻译决策的第一步。
            </p>

            {/* Full CN text */}
            <div className="bg-cream-50 dark:bg-ink-900 rounded-xl p-5 border border-cream-200 dark:border-ink-700">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${currentPassage.level === 'CET-4' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'}`}>
                  {currentPassage.level}
                </span>
                <span className="text-xs text-ink-400 dark:text-ink-500">{currentPassage.year}</span>
                <SourceBadge passage={currentPassage} className="text-[10px]" />
              </div>
              <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed whitespace-pre-line">{currentPassage.fullCN}</p>
            </div>

            {/* Topic question */}
            <div>
              <div className="text-sm font-medium text-ink-700 dark:text-cream-200 mb-3">
                ① 这篇文章属于哪个话题领域？
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {allTopics.map(t => (
                  <button
                    key={t}
                    onClick={() => setTopicAnswer(t)}
                    className={`p-2.5 rounded-xl text-xs transition-all border text-center ${
                      topicAnswer === t
                        ? 'border-amber-300 dark:border-amber-500 bg-amber-50 dark:bg-amber-500/10 font-medium text-amber-800 dark:text-amber-300'
                        : 'border-cream-200 dark:border-ink-700 hover:border-cream-300 dark:hover:border-ink-600 text-ink-600 dark:text-ink-400'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Tense question */}
            <div>
              <div className="text-sm font-medium text-ink-700 dark:text-cream-200 mb-3">
                ② 这篇文章的主时态是什么？
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {TENSE_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setTenseAnswer(opt.value)}
                    className={`p-3 rounded-xl text-xs transition-all border text-left ${
                      tenseAnswer === opt.value
                        ? 'border-amber-300 dark:border-amber-500 bg-amber-50 dark:bg-amber-500/10'
                        : 'border-cream-200 dark:border-ink-700 hover:border-cream-300 dark:hover:border-ink-600'
                    }`}
                  >
                    <div className="font-medium text-ink-700 dark:text-cream-200">{opt.label}</div>
                    <div className="text-[10px] text-ink-400 dark:text-ink-500 mt-0.5">{opt.hint}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            {!step1Submitted ? (
              <button
                onClick={() => setStep1Submitted(true)}
                disabled={!topicAnswer || !tenseAnswer}
                className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                提交判断
              </button>
            ) : (
              <div className="space-y-4 pt-2 animate-in">
                {/* Topic feedback */}
                <div className={`rounded-xl p-4 border ${topicAnswer === currentPassage.topic ? 'bg-green-50 dark:bg-green-500/5 border-green-200 dark:border-green-500/20' : 'bg-orange-50 dark:bg-orange-500/5 border-orange-200 dark:border-orange-500/20'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {topicAnswer === currentPassage.topic ? <Check size={14} className="text-green-600" /> : <AlertCircle size={14} className="text-orange-600" />}
                    <span className="text-sm font-medium text-ink-700 dark:text-cream-200">
                      话题判断 {topicAnswer === currentPassage.topic ? '正确' : '需要调整'}
                    </span>
                  </div>
                  <p className="text-xs text-ink-600 dark:text-ink-300">
                    实际话题：<b>{currentPassage.topic}</b>
                    {topicAnswer !== currentPassage.topic && <>（你判断为：{topicAnswer}）</>}
                    。话题决定了翻译的词汇范围和表达风格。
                  </p>
                </div>

                {/* Tense feedback */}
                <div className={`rounded-xl p-4 border ${tenseAnswer === tenseProfile.primaryTense ? 'bg-green-50 dark:bg-green-500/5 border-green-200 dark:border-green-500/20' : 'bg-orange-50 dark:bg-orange-500/5 border-orange-200 dark:border-orange-500/20'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {tenseAnswer === tenseProfile.primaryTense ? <Check size={14} className="text-green-600" /> : <AlertCircle size={14} className="text-orange-600" />}
                    <span className="text-sm font-medium text-ink-700 dark:text-cream-200">
                      时态判断 {tenseAnswer === tenseProfile.primaryTense ? '正确' : '不完全准确'}
                    </span>
                  </div>
                  <p className="text-xs text-ink-600 dark:text-ink-300 mb-3">
                    系统检测到的主时态：<b>{tenseProfile.primaryTenseLabel}</b>，语态倾向：<b>{tenseProfile.voiceProfile}</b>（{tenseProfile.passiveCount}/{sentences.length}句含被动语态）
                  </p>
                  <div className="space-y-1">
                    <div className="text-[10px] text-ink-400 font-medium mb-1">逐句时态检测：</div>
                    {tenseProfile.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px]">
                        <span className="text-ink-400 flex-shrink-0">句{i + 1}.</span>
                        <span className="text-ink-500 dark:text-ink-400 flex-shrink-0 w-24 truncate">{d.cn}...</span>
                        <span className="text-ink-700 dark:text-cream-200">{d.found.join('、')}</span>
                        {d.hasPassive && <span className="tag bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[9px]">被动</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transferable methodology */}
                <div className="rounded-xl p-4 border bg-amber-50 dark:bg-amber-500/5 border-amber-200 dark:border-amber-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={14} className="text-amber-500" />
                    <span className="text-sm font-medium text-amber-700 dark:text-amber-400">如何从中文判断时态（可迁移规律）</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-600 dark:text-ink-300">
                    <div>• 文化介绍/地理描述/社会现象 → <b>一般现在时</b></div>
                    <div>• 具体历史事件/人物事迹(有年份) → <b>一般过去时</b></div>
                    <div>• 发展趋势/成就总结(近年来/如今/已) → <b>现在完成时</b></div>
                    <div>• "将/会/预计" → <b>一般将来时</b></div>
                    <div>• "被称为/位于/公认为/受" → <b>被动语态</b></div>
                    <div>• 中英差异：中文多用主动，英文倾向被动</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ====== STEP 2: 句型骨架 ====== */}
        {step === 1 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Target size={18} className="text-amber-500" />
              <h3 className="font-bold text-ink-800 dark:text-cream-100">Step 2: 句型骨架 — 逐句拆分主谓宾</h3>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              翻译的核心是找到每句话的主干。中文喜欢并列短句，英文习惯主从分明。请逐句提炼主谓宾。
            </p>

            {/* Sentence selector */}
            <div className="flex items-center gap-2 flex-wrap">
              {sentences.map((s, i) => {
                const sub = step2Submissions[s.id]
                return (
                  <button
                    key={s.id}
                    onClick={() => setStep2Idx(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      i === step2Idx
                        ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400'
                        : sub?.submitted
                          ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400'
                          : 'bg-cream-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400'
                    }`}
                  >
                    {sub?.submitted && <Check size={10} className="inline mr-1" />}句{i + 1}
                  </button>
                )
              })}
            </div>

            {/* Current sentence */}
            {sentences[step2Idx] && (() => {
              const s = sentences[step2Idx]
              const sub = step2Submissions[s.id]
              const skeleton = deriveSkeleton(s)
              const [subject, setSubject] = [sub?.subject || '', (v) => setStep2Submissions(p => ({ ...p, [s.id]: { ...p[s.id], subject: v } }))]
              const [verb, setVerb] = [sub?.verb || '', (v) => setStep2Submissions(p => ({ ...p, [s.id]: { ...p[s.id], verb: v } }))]
              const [object, setObject] = [sub?.object || '', (v) => setStep2Submissions(p => ({ ...p, [s.id]: { ...p[s.id], object: v } }))]

              return (
                <>
                  <div className="bg-cream-50 dark:bg-ink-900 rounded-xl p-4 border border-cream-200 dark:border-ink-700">
                    <div className="text-[10px] text-ink-400 mb-1">中文原文</div>
                    <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed">{s.cn}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="text-xs font-medium text-ink-500 dark:text-ink-400">请写出这句话的主干（用中文）：</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[10px] text-ink-400 mb-1 block">主语 (Subject) — 谁/什么做的？</label>
                        <input
                          type="text" disabled={sub?.submitted}
                          className="w-full p-2.5 rounded-lg border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-sm text-ink-800 dark:text-cream-100 placeholder-ink-300 focus:outline-none focus:border-amber-400 disabled:opacity-50"
                          placeholder="例: 中国政府"
                          value={subject} onChange={e => setSubject(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-ink-400 mb-1 block">谓语动词 (Verb) — 做了什么？</label>
                        <input
                          type="text" disabled={sub?.submitted}
                          className="w-full p-2.5 rounded-lg border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-sm text-ink-800 dark:text-cream-100 placeholder-ink-300 focus:outline-none focus:border-amber-400 disabled:opacity-50"
                          placeholder="例: 十分重视"
                          value={verb} onChange={e => setVerb(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-ink-400 mb-1 block">宾语/补语 (Object) — 动作的对象/结果？</label>
                        <input
                          type="text" disabled={sub?.submitted}
                          className="w-full p-2.5 rounded-lg border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-sm text-ink-800 dark:text-cream-100 placeholder-ink-300 focus:outline-none focus:border-amber-400 disabled:opacity-50"
                          placeholder="例: 绿色经济的发展"
                          value={object} onChange={e => setObject(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {!sub?.submitted ? (
                    <button
                      onClick={() => handleStep2Submit(s.id, { subject, verb, object })}
                      disabled={!subject.trim() || !verb.trim()}
                      className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      确认主干
                    </button>
                  ) : (
                    <div className="space-y-3">
                      {/* User's skeleton vs reference */}
                      <div className="rounded-xl p-4 border bg-green-50 dark:bg-green-500/5 border-green-200 dark:border-green-500/20">
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-2">参考骨架分析</div>
                        {skeleton ? (
                          <div className="flex items-center gap-1.5 flex-wrap text-xs">
                            {skeleton.partsRaw.map((part, i) => (
                              <span key={i} className="flex items-center gap-1.5">
                                <span className="px-2 py-1 rounded-lg bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300 font-medium">{part}</span>
                                {i < skeleton.partsRaw.length - 1 && <span className="text-green-400">→</span>}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm font-serif italic text-ink-800 dark:text-cream-200">{s.en}</p>
                        )}
                        {s.technique?.structure && (
                          <p className="text-[11px] text-ink-500 dark:text-ink-400 mt-2">句型：{s.technique.structure}</p>
                        )}
                      </div>

                      {/* User comparison */}
                      <div className="rounded-xl p-4 border bg-amber-50 dark:bg-amber-500/5 border-amber-200 dark:border-amber-500/20">
                        <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-2">你的分析</div>
                        <div className="flex items-center gap-1.5 flex-wrap text-xs">
                          {[
                            { label: '主语', value: subject },
                            { label: '谓语', value: verb },
                            { label: '宾语', value: object },
                          ].map((item, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                              <span className="px-2 py-1 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300">{item.label}: {item.value}</span>
                              {i < 2 && <span className="text-amber-400">→</span>}
                            </span>
                          ))}
                        </div>
                        <p className="text-[11px] text-ink-500 dark:text-ink-400 mt-2">
                          对比参考骨架，观察中英文在主干排列上的差异。中文的修饰语通常前置，英文则常用后置定语或从句。
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <button onClick={() => setStep2Idx(i => Math.max(0, i - 1))} disabled={step2Idx === 0}
                      className="text-xs text-ink-400 hover:text-ink-600 disabled:opacity-30 flex items-center gap-1">
                      <ChevronLeft size={14} /> 上一句
                    </button>
                    <span className="text-xs text-ink-400">{step2Idx + 1} / {sentences.length}</span>
                    <button onClick={() => setStep2Idx(i => Math.min(sentences.length - 1, i + 1))} disabled={step2Idx >= sentences.length - 1}
                      className="text-xs text-ink-400 hover:text-ink-600 disabled:opacity-30 flex items-center gap-1">
                      下一句 <ChevronRight size={14} />
                    </button>
                  </div>
                </>
              )
            })()}
          </div>
        )}

        {/* ====== STEP 3: 词汇攻坚 ====== */}
        {step === 2 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-amber-500" />
              <h3 className="font-bold text-ink-800 dark:text-cream-100">Step 3: 词汇攻坚 — 集中突破难点词汇</h3>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              逐词逐句攻克本文的重点词汇。遇到不会的词，看看"不会翻怎么办" — 这些策略可以迁移到任何翻译题。
            </p>

            {allVocab.length === 0 ? (
              <div className="text-center py-10 text-ink-400 dark:text-ink-500">
                <p className="text-sm mb-2">本篇暂无标注词汇。</p>
                <p className="text-xs">你可以手动搜索文中的生词，或直接跳到下一步。</p>
              </div>
            ) : (
              <>
                {/* Progress bar */}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-ink-400">{step3Idx + 1} / {allVocab.length}</span>
                  <div className="flex-1 h-1.5 bg-cream-200 dark:bg-ink-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full transition-all" style={{ width: `${((step3Idx + 1) / allVocab.length) * 100}%` }} />
                  </div>
                  <span className="text-xs text-ink-400">{vocabReviewed} 已练 · {difficultVocabCount} 待复习</span>
                </div>

                {/* Current vocab */}
                {(() => {
                  const v = allVocab[step3Idx]
                  if (!v) return null
                  const sub = step3Submissions[v.key]
                  return (
                    <>
                      <div className="bg-cream-50 dark:bg-ink-900 rounded-xl p-5 border border-cream-200 dark:border-ink-700">
                        <div className="text-xs text-ink-400 dark:text-ink-500 mb-2">翻译这个词/短语：</div>
                        <p className="text-lg font-medium text-ink-800 dark:text-cream-100">{v.cn}</p>
                      </div>

                      <input
                        type="text"
                        disabled={sub?.submitted}
                        className="w-full p-3 rounded-lg border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-ink-800 dark:text-cream-100 placeholder-ink-300 text-sm focus:outline-none focus:border-amber-400 disabled:opacity-50 font-serif"
                        placeholder="输入你的翻译..."
                        value={sub?.input || ''}
                        onChange={e => setStep3Submissions(p => ({ ...p, [v.key]: { ...p[v.key], input: e.target.value } }))}
                        onKeyDown={e => {
                          if (e.key === 'Enter' && (sub?.input || '').trim() && !sub?.submitted) {
                            handleStep3Submit(v.key, sub?.input || e.target.value)
                          }
                        }}
                      />

                      {!sub?.submitted ? (
                        <button
                          onClick={() => handleStep3Submit(v.key, sub?.input || '')}
                          disabled={!(sub?.input || '').trim()}
                          className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed w-full"
                        >
                          提交翻译
                        </button>
                      ) : (
                        <>
                          {/* Answer + fallback */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-4 border border-green-200 dark:border-green-500/20">
                              <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">参考答案</div>
                              <p className="text-sm font-serif italic text-ink-800 dark:text-cream-200">{v.en}</p>
                              {v.note && <p className="text-[10px] text-ink-500 dark:text-ink-400 mt-1">{v.note}</p>}
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-500/5 rounded-xl p-4 border border-orange-200 dark:border-orange-500/20">
                              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">不会翻怎么办</div>
                              <p className="text-sm text-ink-700 dark:text-cream-200">
                                {v.fallback || '用更简单的词解释其含义'}
                              </p>
                              <p className="text-[10px] text-ink-400 dark:text-ink-500 mt-2">
                                适用方法：<b>上位词替代 / 释义法</b> — 用你会的词把意思表达出来
                              </p>
                            </div>
                          </div>

                          {/* Self-rating */}
                          {sub?.rating === undefined ? (
                            <div>
                              <div className="text-xs text-ink-500 dark:text-ink-400 mb-3 text-center font-medium">
                                对照参考答案，你觉得自己掌握了吗？
                              </div>
                              <div className="grid grid-cols-4 gap-2">
                                {RATING_OPTIONS.map(opt => (
                                  <button
                                    key={opt.value}
                                    onClick={() => handleStep3Rate(v.key, v.itemType, v.srsKey, opt.value)}
                                    className={`py-2.5 px-2 rounded-xl text-xs font-medium transition-all border ${opt.color}`}
                                  >
                                    <div>{opt.label}</div>
                                    <div className="text-[10px] opacity-60">{opt.desc}</div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className={`rounded-xl p-3 border text-center text-xs font-medium ${
                              sub.rating >= 2
                                ? 'bg-green-50 dark:bg-green-500/5 border-green-200 dark:border-green-500/20 text-green-600 dark:text-green-400'
                                : 'bg-orange-50 dark:bg-orange-500/5 border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400'
                            }`}>
                              已评分：{RATING_OPTIONS.find(o => o.value === sub.rating)?.label}
                              {sub.rating <= 1 && ' — 已自动加入错题本'}
                            </div>
                          )}
                        </>
                      )}

                      {/* Navigation */}
                      <div className="flex items-center justify-between pt-2">
                        <button onClick={() => setStep3Idx(i => Math.max(0, i - 1))} disabled={step3Idx === 0}
                          className="text-xs text-ink-400 hover:text-ink-600 disabled:opacity-30 flex items-center gap-1">
                          <ChevronLeft size={14} /> 上一个
                        </button>
                        <span className="text-xs text-ink-400">{step3Idx + 1} / {allVocab.length}</span>
                        <button onClick={() => setStep3Idx(i => Math.min(allVocab.length - 1, i + 1))} disabled={step3Idx >= allVocab.length - 1}
                          className="text-xs text-ink-400 hover:text-ink-600 disabled:opacity-30 flex items-center gap-1">
                          下一个 <ChevronRight size={14} />
                        </button>
                      </div>
                    </>
                  )
                })()}
              </>
            )}

            {/* Fallback methods reference */}
            <div className="rounded-xl p-4 border bg-amber-50 dark:bg-amber-500/5 border-amber-200 dark:border-amber-500/20">
              <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-2 flex items-center gap-1">
                <Lightbulb size={12} /> {fallbackMethods.title}：{fallbackMethods.subtitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {fallbackMethods.methods.map(m => (
                  <div key={m.id} className="text-[11px] text-ink-600 dark:text-ink-300">
                    <b>{m.name}</b>：{m.principle}
                    <div className="text-[10px] text-ink-400 mt-0.5">
                      例：{m.examples[0]?.original} → {m.examples[0]?.fallback}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ====== STEP 4: 结构升级 ====== */}
        {step === 3 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-amber-500" />
              <h3 className="font-bold text-ink-800 dark:text-cream-100">Step 4: 结构升级 — 识别高分表达</h3>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              观察参考译文，判断每句使用了哪些高分结构。识别 → 理解 → 迁移到任何翻译题。
            </p>

            {/* Sentence selector */}
            <div className="flex items-center gap-2 flex-wrap">
              {upgradePairs.map((up, i) => {
                const s = sentences[i]
                const sub = s && step4Submissions[s.id]
                return (
                  <button
                    key={s?.id || i}
                    onClick={() => setStep4Idx(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      i === step4Idx
                        ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-400'
                        : sub?.submitted
                          ? 'bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400'
                          : 'bg-cream-100 dark:bg-ink-800 text-ink-500 dark:text-ink-400'
                    }`}
                  >
                    {sub?.submitted && <Check size={10} className="inline mr-1" />}句{i + 1}
                  </button>
                )
              })}
            </div>

            {/* Current sentence analysis */}
            {upgradePairs[step4Idx] && (() => {
              const up = upgradePairs[step4Idx]
              const s = sentences[step4Idx]
              const sub = s && step4Submissions[s.id]
              const selected = step4Selections[s.id] || sub?.selected || []
              const toggle = (sid) => {
                setStep4Selections(prev => {
                  const current = prev[s.id] || sub?.selected || []
                  return { ...prev, [s.id]: current.includes(sid) ? current.filter(x => x !== sid) : [...current, sid] }
                })
              }

              return (
                <>
                  {/* CN text */}
                  <div className="bg-cream-50 dark:bg-ink-900 rounded-xl p-4 border border-cream-200 dark:border-ink-700">
                    <div className="text-[10px] text-ink-400 mb-1">中文原文</div>
                    <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed">{up.cn}</p>
                  </div>

                  {/* Reference EN */}
                  <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-4 border border-green-200 dark:border-green-500/20">
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">参考译文</div>
                    <p className="text-sm text-ink-800 dark:text-cream-200 font-serif italic leading-relaxed">{up.en}</p>
                  </div>

                  {/* Why good */}
                  {up.whyGood && (
                    <div className="bg-amber-50 dark:bg-amber-500/5 rounded-xl p-4 border border-amber-200 dark:border-amber-500/20">
                      <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-1">为什么这是高分表达</div>
                      <p className="text-xs text-ink-600 dark:text-ink-300 leading-relaxed">{up.whyGood}</p>
                      {up.structure && (
                        <span className="inline-block mt-2 tag bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[10px]">{up.structure}</span>
                      )}
                    </div>
                  )}

                  {/* Structure identification quiz */}
                  {!sub?.submitted ? (
                    <>
                      <div>
                        <div className="text-xs font-medium text-ink-500 dark:text-ink-400 mb-2">这段参考译文使用了哪些高分结构？（勾选所有你觉得有的）</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {STRUCTURE_OPTIONS.map(opt => (
                            <label
                              key={opt.id}
                              onClick={() => !sub?.submitted && toggle(opt.id)}
                              className={`flex items-start gap-2 p-3 rounded-xl border cursor-pointer transition-all text-xs ${
                                selected.includes(opt.id)
                                  ? 'border-amber-300 dark:border-amber-500 bg-amber-50 dark:bg-amber-500/10'
                                  : 'border-cream-200 dark:border-ink-700 hover:border-cream-300 dark:hover:border-ink-600'
                              }`}
                            >
                              <input type="checkbox" checked={selected.includes(opt.id)} onChange={() => {}} className="mt-0.5 accent-amber-500" />
                              <div>
                                <div className="font-medium text-ink-700 dark:text-cream-200">{opt.name}</div>
                                <div className="text-[10px] text-ink-400 dark:text-ink-500">{opt.desc}</div>
                                <div className="text-[10px] text-ink-400 dark:text-ink-500 mt-0.5">{opt.principle}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => { handleStep4Submit(s.id, selected) }}
                        disabled={selected.length === 0}
                        className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        确认判断
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Feedback: user picks vs detected */}
                      <div className="rounded-xl p-4 border bg-blue-50 dark:bg-blue-500/5 border-blue-200 dark:border-blue-500/20">
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">
                          检测结果：实际使用的高分结构
                        </div>
                        {up.detectedStructures.length > 0 ? (
                          <div className="flex flex-wrap gap-2 mb-2">
                            {up.detectedStructures.map(ds => (
                              <span key={ds.id} className={`tag text-[10px] ${
                                sub.selected?.includes(ds.id)
                                  ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400'
                                  : 'bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400'
                              }`}>
                                {sub.selected?.includes(ds.id) ? '✓ ' : '✗ 漏'} {ds.name}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-xs text-ink-500 dark:text-ink-400">本句以基础句式为主，未使用显著的高分结构。</p>
                        )}
                        {sub.selected?.filter(x => !up.detectedStructures.find(d => d.id === x)).length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {sub.selected.filter(x => !up.detectedStructures.find(d => d.id === x)).map(sid => {
                              const opt = STRUCTURE_OPTIONS.find(o => o.id === sid)
                              return <span key={sid} className="tag bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-[10px]">⚠ 多选: {opt?.name}</span>
                            })}
                          </div>
                        )}
                      </div>

                      {/* highScore.note / lowScore.note */}
                      {(up.highScoreNote || up.lowScoreNote) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {up.highScoreNote && (
                            <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-4 border border-green-200 dark:border-green-500/20">
                              <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">高分版要点</div>
                              <p className="text-xs text-ink-600 dark:text-ink-300">{up.highScoreNote}</p>
                            </div>
                          )}
                          {up.lowScoreNote && (
                            <div className="bg-orange-50 dark:bg-orange-500/5 rounded-xl p-4 border border-orange-200 dark:border-orange-500/20">
                              <div className="text-xs text-orange-600 dark:text-orange-400 font-medium mb-1">普通版避坑</div>
                              <p className="text-xs text-ink-600 dark:text-ink-300">{up.lowScoreNote}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-2">
                    <button onClick={() => setStep4Idx(i => Math.max(0, i - 1))} disabled={step4Idx === 0}
                      className="text-xs text-ink-400 hover:text-ink-600 disabled:opacity-30 flex items-center gap-1">
                      <ChevronLeft size={14} /> 上一句
                    </button>
                    <span className="text-xs text-ink-400">{step4Idx + 1} / {upgradePairs.length}</span>
                    <button onClick={() => setStep4Idx(i => Math.min(upgradePairs.length - 1, i + 1))} disabled={step4Idx >= upgradePairs.length - 1}
                      className="text-xs text-ink-400 hover:text-ink-600 disabled:opacity-30 flex items-center gap-1">
                      下一句 <ChevronRight size={14} />
                    </button>
                  </div>
                </>
              )
            })()}

            {/* Structure reference */}
            <div className="rounded-xl p-4 border bg-amber-50 dark:bg-amber-500/5 border-amber-200 dark:border-amber-500/20">
              <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-2">
                {highScoreStructures.title}：{highScoreStructures.subtitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {highScoreStructures.structures.map(s => (
                  <div key={s.id} className="text-[11px] text-ink-600 dark:text-ink-300">
                    <b>{s.name}</b>：{s.principle}
                    {s.examples[0]?.target && (
                      <div className="text-[10px] text-ink-400 font-serif italic mt-0.5">例：{s.examples[0].target}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ====== STEP 5: 全文翻译 ====== */}
        {step === 4 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <RotateCw size={18} className="text-amber-500" />
              <h3 className="font-bold text-ink-800 dark:text-cream-100">Step 5: 全文翻译 — 综合输出</h3>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              综合前四步的收获，将全文完整翻译成英文。提交后逐句对比。
            </p>

            {step >= 4 && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cream-200 dark:bg-ink-700 text-ink-600 dark:text-ink-300 text-sm font-mono">
                <Clock size={14} /> {formatTime(timerSeconds)}
              </div>
            )}

            {/* Full CN */}
            <div className="bg-cream-50 dark:bg-ink-900 rounded-xl p-4 border border-cream-200 dark:border-ink-700">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${currentPassage.level === 'CET-4' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' : 'bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400'}`}>
                  {currentPassage.level}
                </span>
                <span className="text-xs text-ink-400 dark:text-ink-500">{currentPassage.topic} · {currentPassage.year}</span>
              </div>
              <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed whitespace-pre-line">{currentPassage.fullCN}</p>
            </div>

            {!step5Submitted ? (
              <>
                <textarea
                  className="w-full min-h-[200px] p-4 rounded-lg border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-ink-800 dark:text-cream-100 placeholder-ink-300 text-sm leading-relaxed font-serif focus:outline-none focus:border-amber-400 resize-y"
                  placeholder="在此输入你的完整翻译..."
                  value={fullTranslation}
                  onChange={e => setFullTranslation(e.target.value)}
                />
                <button
                  onClick={() => setStep5Submitted(true)}
                  disabled={!fullTranslation.trim()}
                  className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed w-full"
                >
                  提交翻译，查看对比
                </button>
              </>
            ) : (
              <div className="space-y-4">
                {/* Side-by-side full comparison */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="bg-blue-50 dark:bg-blue-500/5 rounded-xl p-4 border border-blue-200 dark:border-blue-500/20">
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-2">你的翻译</div>
                    <p className="text-sm text-ink-800 dark:text-cream-200 leading-relaxed font-serif whitespace-pre-line">{fullTranslation}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-500/5 rounded-xl p-4 border border-green-200 dark:border-green-500/20">
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-2">参考译文</div>
                    <p className="text-sm text-ink-800 dark:text-cream-200 leading-relaxed font-serif italic whitespace-pre-line">{currentPassage.fullEN}</p>
                  </div>
                </div>

                {/* Per-sentence reference + rating */}
                <div className="text-sm font-medium text-ink-700 dark:text-cream-200 mt-2">逐句自评</div>
                <div className="space-y-4">
                  {sentences.map((s, i) => (
                    <div key={s.id} className="space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="bg-cream-50 dark:bg-ink-900 rounded-lg p-3">
                          <div className="text-[10px] text-ink-400 mb-1">句{i + 1} · 中文</div>
                          <p className="text-xs text-ink-700 dark:text-cream-200">{s.cn}</p>
                        </div>
                        <div className="bg-green-50 dark:bg-green-500/5 rounded-lg p-3">
                          <div className="text-[10px] text-green-600 dark:text-green-400 mb-1">参考译文</div>
                          <p className="text-xs text-ink-800 dark:text-cream-200 font-serif italic">{s.en}</p>
                        </div>
                      </div>
                      {/* Self-rating per sentence */}
                      <div>
                        <div className="text-[10px] text-ink-400 mb-1.5">对照参考译文，给这句打分：</div>
                        <div className="flex gap-1.5">
                          {RATING_OPTIONS.map(opt => (
                            <button
                              key={opt.value}
                              onClick={() => setSentenceRatings(p => ({ ...p, [s.id]: opt.value }))}
                              className={`flex-1 py-1.5 px-1 rounded-lg text-[11px] font-medium transition-all border ${
                                sentenceRatings[s.id] === opt.value ? opt.color + ' ring-1 ring-current' : 'bg-cream-100 dark:bg-ink-800 border-cream-200 dark:border-ink-700 text-ink-500 dark:text-ink-400 hover:bg-cream-200 dark:hover:bg-ink-700'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Completion button */}
                {!passageCompleted ? (
                  <button
                    onClick={handleCompletePassage}
                    disabled={sentences.some(s => sentenceRatings[s.id] === undefined)}
                    className="btn-primary text-sm flex items-center gap-1.5 w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Check size={16} /> 完成本篇带练（保存数据）
                  </button>
                ) : (
                  <div className="rounded-xl p-4 border bg-green-50 dark:bg-green-500/5 border-green-200 dark:border-green-500/20 text-center">
                    <Check size={20} className="text-green-500 mx-auto mb-1" />
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">本篇已完成，数据已保存。</p>
                    <p className="text-xs text-ink-400 dark:text-ink-500 mt-1">
                      耗时 {formatTime(timerSeconds)} · 均分 {Object.values(sentenceRatings).length > 0 ? (Object.values(sentenceRatings).reduce((a, b) => a + b, 0) / Object.values(sentenceRatings).length).toFixed(1) : '-'}/3
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ====== STEP 6: 复盘总结 ====== */}
        {step === 5 && (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-amber-500" />
              <h3 className="font-bold text-ink-800 dark:text-cream-100">Step 6: 复盘总结 — 提炼可迁移知识</h3>
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              从本篇中提炼出的方法、模板和技巧，可以直接迁移到任何 CET 翻译题目。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: '完成句子', value: sentences.length, icon: BookOpen, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-500/10' },
                { label: '词汇攻坚', value: `${vocabReviewed}/${allVocab.length}`, icon: Zap, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' },
                { label: '加入错题本', value: difficultVocabCount, icon: AlertCircle, color: 'text-red-600 dark:text-red-400', bg: 'bg-red-50 dark:bg-red-500/10' },
                { label: '词汇均分', value: avgVocabRating !== null ? `${avgVocabRating.toFixed(1)}/3` : '-', icon: Award, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-500/10' },
              ].map((s, i) => (
                <div key={i} className={`card p-3 text-center ${s.bg} border-0`}>
                  <s.icon size={14} className={`${s.color} mx-auto mb-1`} />
                  <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
                  <div className="text-[10px] text-ink-400 dark:text-ink-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Transferable sentence patterns */}
            {transferablePatterns.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-ink-700 dark:text-cream-200 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-amber-500" /> 可迁移句型模板（从本篇提炼）
                </div>
                <div className="text-[11px] text-ink-400 dark:text-ink-500 mb-2">
                  这些模板基于本篇真题句子的中英对照提炼，可以直接套用到类似表达。
                </div>
                {transferablePatterns.map((tp, i) => (
                  <div key={i} className="bg-amber-50 dark:bg-amber-500/5 rounded-xl p-3 border border-amber-200 dark:border-amber-500/20">
                    <div className="text-[11px] text-ink-500 dark:text-ink-400 mb-1">原句：{tp.cn}...</div>
                    <div className="text-xs font-mono text-ink-700 dark:text-cream-200 whitespace-pre-line leading-relaxed">{tp.pattern}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Vocabulary review - quick chips */}
            {allVocab.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-ink-700 dark:text-cream-200 flex items-center gap-1.5">
                  <Zap size={14} className="text-amber-500" /> 本篇重点词汇回顾
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {allVocab.map(v => {
                    const sub = step3Submissions[v.key]
                    const rating = sub?.rating
                    return (
                      <span key={v.key} className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] border ${
                        rating === undefined ? 'bg-cream-50 dark:bg-ink-900 border-cream-200 dark:border-ink-700 text-ink-500 dark:text-ink-400'
                          : rating >= 2 ? 'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400'
                          : 'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400'
                      }`}>
                        <span>{v.cn}</span>
                        <span className="text-[10px] opacity-60 font-serif">{v.en}</span>
                      </span>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Detected high-score structures in this passage */}
            {allDetectedStructures.length > 0 && (
              <div className="space-y-2">
                <div className="text-sm font-medium text-ink-700 dark:text-cream-200 flex items-center gap-1.5">
                  <Award size={14} className="text-amber-500" /> 本篇用到的高分结构
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {allDetectedStructures.map(ds => (
                    <div key={ds.id} className="bg-green-50 dark:bg-green-500/5 rounded-xl p-3 border border-green-200 dark:border-green-500/20">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Circle size={8} className="text-green-500 fill-green-500" />
                        <span className="text-xs font-medium text-ink-700 dark:text-cream-200">{ds.name}</span>
                        <span className="text-[10px] text-ink-400">{ds.count}处</span>
                      </div>
                      <p className="text-[10px] text-ink-500 dark:text-ink-400">{ds.principle}</p>
                      <div className="text-[10px] text-ink-400 mt-1">例：{ds.examples[0]}...</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Methodology recap tied to this passage */}
            <div className="rounded-xl p-4 border bg-cream-50 dark:bg-ink-900">
              <div className="text-sm font-medium text-ink-700 dark:text-cream-200 mb-3 flex items-center gap-1.5">
                <Lightbulb size={14} className="text-amber-500" /> 本次带练方法论总结
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <div className="font-bold text-amber-600 dark:text-amber-400 mb-1">{translationSteps.title}</div>
                  {translationSteps.steps.map(s => (
                    <div key={s.id} className="text-ink-500 dark:text-ink-400 mt-1">
                      {s.id.replace('step', '')}. {s.name}（{s.tag}）
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-orange-600 dark:text-orange-400 mb-1">{fallbackMethods.title}</div>
                  {fallbackMethods.methods.map(m => (
                    <div key={m.id} className="text-ink-500 dark:text-ink-400 mt-1">• {m.name}：{m.principle}</div>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-green-600 dark:text-green-400 mb-1">{highScoreStructures.title}</div>
                  {highScoreStructures.structures.map(s => (
                    <div key={s.id} className="text-ink-500 dark:text-ink-400 mt-1">• {s.name}：{s.principle}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next passage */}
            <button
              onClick={() => {
                const next = getNextPassage(passages, selectedPassageId)
                if (next) handleSelectPassage(next.id)
                else onNavigate('review')
              }}
              className="btn-primary text-sm flex items-center gap-1.5 w-full justify-center"
            >
              开始下一篇带练 <ArrowRight size={14} />
            </button>
          </div>
        )}

        {/* Step navigation footer */}
        <div className="flex items-center justify-between pt-4 border-t border-cream-200 dark:border-ink-700 mt-4">
          <button
            onClick={goPrev}
            disabled={step === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all border border-cream-300 dark:border-ink-600 hover:bg-cream-50 dark:hover:bg-ink-700 text-ink-600 dark:text-ink-400 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} /> 上一步
          </button>
          <span className="text-xs text-ink-400">{STEP_NAMES[step]}（{step + 1}/6）</span>
          <button
            onClick={goNext}
            disabled={step === 5}
            className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 hover:bg-amber-200 dark:hover:bg-amber-500/30 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            下一步 <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
