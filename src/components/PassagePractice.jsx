import { useState, useMemo, useCallback, useEffect } from 'react'
import { passages, patterns, topicPhrases } from '../data'
import { loadData, ratePattern, ratePhrase, rateSentence, completePassage, getNextPassage, recordSentenceDone } from '../utils/storage'
import { analyzeTranslation } from '../utils/feedback'
import AnswerAnalysis from './AnswerAnalysis'
import SourceBadge from './SourceBadge'
import { SOURCE_LABELS } from '../data/source-meta'
import { ChevronDown, ChevronRight, Eye, BookOpen, Check, ArrowRight, Info } from 'lucide-react'

const ratingOptions = [
  { value: 0, label: '忘了', color: 'bg-red-50 hover:bg-red-100 text-red-700 border-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:text-red-400 dark:border-red-500/20', key: '1' },
  { value: 1, label: '模糊', color: 'bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:hover:bg-orange-500/20 dark:text-orange-400 dark:border-orange-500/20', key: '2' },
  { value: 2, label: '记得', color: 'bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:hover:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/20', key: '3' },
  { value: 3, label: '很熟', color: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:hover:bg-green-500/20 dark:text-green-400 dark:border-green-500/20', key: '4' },
]

const ratingLabels = { 0: '忘了', 1: '模糊', 2: '记得', 3: '很熟' }
const ratingDotColors = { 0: 'bg-red-400', 1: 'bg-orange-400', 2: 'bg-amber-400', 3: 'bg-green-400' }

export default function PassagePractice({ appData, onDataChange, navParams }) {
  const [selectedPassageId, setSelectedPassageId] = useState(() => {
    if (navParams) return navParams
    const data = loadData()
    const firstUncompleted = passages.find(p => !data.passageProgress[p.id]?.completed)
    return firstUncompleted?.id || passages[0]?.id
  })
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userTranslation, setUserTranslation] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [skippedCurrent, setSkippedCurrent] = useState(false)
  const [firstTranslation, setFirstTranslation] = useState('')
  const [revision, setRevision] = useState('')
  const [revisionDone, setRevisionDone] = useState(false)
  const [lastCalibration, setLastCalibration] = useState(null)
  const [sentenceListOpen, setSentenceListOpen] = useState(true)
  const [fullTextMode, setFullTextMode] = useState(false)
  const [sessionResults, setSessionResults] = useState({})

  useEffect(() => {
    if (navParams) setSelectedPassageId(navParams)
  }, [navParams])

  const data = useMemo(() => loadData(), [appData])
  const currentPassage = useMemo(() => passages.find(p => p.id === selectedPassageId), [selectedPassageId])
  const sentences = currentPassage?.sentences || []
  const totalSentences = sentences.length
  const currentSentence = sentences[sentenceIndex]
  const currentResults = sessionResults[selectedPassageId] || []
  const passageCompleted = data.passageProgress[selectedPassageId]?.completed

  const nextPassage = useMemo(() => {
    return getNextPassage(passages, selectedPassageId)
  }, [selectedPassageId])

  // 评分对象是最终稿：修订完成后用修订稿，否则用初次尝试。
  const assessedTranslation = revisionDone ? revision : userTranslation
  const feedback = useMemo(
    () => analyzeTranslation(currentSentence, assessedTranslation),
    [currentSentence, assessedTranslation]
  )
  const suggestedRating = feedback?.suggestedRating ?? null

  const resetAttempt = useCallback(() => {
    setUserTranslation('')
    setShowAnswer(false)
    setSubmitted(false)
    setSkippedCurrent(false)
    setFirstTranslation('')
    setRevision('')
    setRevisionDone(false)
  }, [])

  const applyAttemptState = useCallback((existing) => {
    const attempt = existing?.firstTranslation ?? existing?.userInput ?? ''
    setUserTranslation(attempt)
    setFirstTranslation(attempt)
    setRevision(existing?.revision || '')
    setSubmitted(Boolean(existing) && !existing.skipped)
    setSkippedCurrent(Boolean(existing?.skipped))
    setRevisionDone(Boolean(existing))
    setShowAnswer(Boolean(existing))
  }, [])

  const handleSelectPassage = useCallback((passageId) => {
    setSelectedPassageId(passageId)
    setSentenceIndex(0)
    setFullTextMode(false)
    setLastCalibration(null)
    resetAttempt()
  }, [resetAttempt])

  const handleSelectSentence = useCallback((idx) => {
    const existing = currentResults.find(r => r.sentenceId === sentences[idx]?.id)
    setSentenceIndex(idx)
    applyAttemptState(existing)
    setFullTextMode(false)
  }, [currentResults, sentences, applyAttemptState])

  const handleSubmit = useCallback(() => {
    if (!userTranslation.trim()) return
    setFirstTranslation(userTranslation)
    setSubmitted(true)
    setSkippedCurrent(false)
    setShowAnswer(true)
  }, [userTranslation])

  const handleSkip = useCallback(() => {
    setFirstTranslation(userTranslation)
    setSubmitted(false)
    setSkippedCurrent(true)
    setShowAnswer(true)
  }, [userTranslation])

  const handleFinishRevision = useCallback((useOriginal = false) => {
    const text = useOriginal ? firstTranslation : (revision.trim() || firstTranslation)
    setRevision(text)
    setRevisionDone(true)
  }, [revision, firstTranslation])

  const handleRate = useCallback((rating) => {
    if (!currentSentence || !revisionDone) return

    // 没提交过译文的“直接看答案”只进历史，不推进记忆调度。
    const countsForSrs = submitted
    const isFirstRating = !currentResults.some(r => r.sentenceId === currentSentence.id)

    if (countsForSrs) {
      if (isFirstRating) recordSentenceDone()
      currentSentence.patternIds?.forEach(pid => {
        ratePattern(pid, rating, { passageId: selectedPassageId, sentenceIndex })
      })
      currentSentence.phraseIds?.forEach(phid => {
        ratePhrase(phid, rating, { passageId: selectedPassageId, sentenceIndex })
      })
    }

    const ratingGap = suggestedRating == null ? null : Math.abs(rating - suggestedRating)
    setLastCalibration(
      ratingGap != null && ratingGap >= 2 ? { self: rating, suggested: suggestedRating } : null
    )
    rateSentence(currentSentence.id, rating, {
      passageId: selectedPassageId,
      sentenceIndex,
      firstTranslation,
      revision,
      skipped: skippedCurrent,
      countsForSrs,
      suggestedRating,
      ratingGap,
    })

    const result = {
      sentenceId: currentSentence.id,
      userInput: firstTranslation,
      firstTranslation,
      revision,
      rating,
      skipped: skippedCurrent,
      countsForSrs,
      timestamp: Date.now(),
    }

    const newResults = {
      ...sessionResults,
      [selectedPassageId]: [...currentResults.filter(r => r.sentenceId !== currentSentence.id), result],
    }
    setSessionResults(newResults)

    const allRated = sentences.every(s =>
      newResults[selectedPassageId]?.find(r => r.sentenceId === s.id)
    )
    if (allRated) {
      completePassage(selectedPassageId, currentPassage.topic, newResults[selectedPassageId])
    }

    if (sentenceIndex < totalSentences - 1) {
      setSentenceIndex(prev => prev + 1)
      resetAttempt()
    }
    onDataChange()
  }, [currentSentence, revisionDone, submitted, currentResults, selectedPassageId, sentenceIndex,
      firstTranslation, revision, skippedCurrent, suggestedRating, sessionResults, sentences,
      currentPassage, totalSentences, resetAttempt, onDataChange])

  const handlePrevSentence = useCallback(() => {
    if (sentenceIndex > 0) {
      const prevIdx = sentenceIndex - 1
      setSentenceIndex(prevIdx)
      applyAttemptState(currentResults.find(r => r.sentenceId === sentences[prevIdx]?.id))
    }
  }, [sentenceIndex, currentResults, sentences, applyAttemptState])

  const handleNextSentence = useCallback(() => {
    if (sentenceIndex < totalSentences - 1) {
      const nextIdx = sentenceIndex + 1
      setSentenceIndex(nextIdx)
      applyAttemptState(currentResults.find(r => r.sentenceId === sentences[nextIdx]?.id))
    }
  }, [sentenceIndex, totalSentences, currentResults, sentences, applyAttemptState])

  // Keyboard shortcuts for rating + navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (fullTextMode) return
      // Arrow key navigation
      if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        handlePrevSentence()
        return
      }
      if (e.key === 'ArrowRight' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault()
        handleNextSentence()
        return
      }
      if (!showAnswer) return
      const rating = ratingOptions.find(r => r.key === e.key)
      if (rating) handleRate(rating.value)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [showAnswer, fullTextMode, handleRate, handlePrevSentence, handleNextSentence])

  const getSentenceRating = (sentenceId) => {
    const r = currentResults.find(r => r.sentenceId === sentenceId)
    return r ? r.rating : null
  }

  const ratedCount = sentences.filter(s => getSentenceRating(s.id) != null).length

  if (!currentPassage) {
    return (
      <div className="card p-12 text-center">
        <p className="text-ink-500 dark:text-ink-400">请选择一篇真题。</p>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {/* Passage selector bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {passages.map(p => {
          const done = data.passageProgress[p.id]?.completed
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
              <span>{p.title}</span>
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
              <span className="text-[9px] opacity-50 ml-0.5">
                {'★'.repeat(p.difficulty || 0)}
              </span>
            </button>
          )
        })}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-xl font-bold text-ink-800 dark:text-cream-100">{currentPassage.title}</h2>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="tag bg-cream-200 dark:bg-ink-700 text-ink-600 dark:text-ink-300">{currentPassage.topic}</span>
            {currentPassage.level && (
              <span className={`tag text-white ${currentPassage.level === 'CET-4' ? 'bg-blue-500 dark:bg-blue-600' : 'bg-purple-500 dark:bg-purple-600'}`}>
                {currentPassage.level}
              </span>
            )}
            <span className="tag bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400">{currentPassage.year}</span>
            <SourceBadge passage={currentPassage} />
            <span className="text-xs text-ink-400 dark:text-ink-500">{totalSentences} 句</span>
            {passageCompleted && <span className="tag bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400">已完成</span>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFullTextMode(!fullTextMode)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              fullTextMode ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400' : 'bg-cream-200 dark:bg-ink-700 text-ink-500 dark:text-ink-400 hover:bg-cream-300 dark:hover:bg-ink-600'
            }`}
          >
            <BookOpen size={14} />
            全文
          </button>
          {ratedCount > 0 && (
            <span className="text-xs text-ink-400 dark:text-ink-500">{ratedCount}/{totalSentences} 已评</span>
          )}
        </div>
      </div>

      {/* Full text mode */}
      {fullTextMode && (
        <div className="space-y-4">
          <div className="card p-5">
            <div className="text-xs text-ink-400 dark:text-ink-500 mb-2">中文原文</div>
            <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed whitespace-pre-line">{currentPassage.fullCN}</p>
          </div>
          <div className="card p-5 bg-amber-50/30 dark:bg-amber-500/5 border-amber-200 dark:border-amber-500/20">
            <div className="text-xs text-amber-600 dark:text-amber-400 font-medium mb-2">参考译文</div>
            <p className="text-sm text-ink-800 dark:text-cream-100 leading-relaxed font-serif italic whitespace-pre-line">{currentPassage.fullEN}</p>
          </div>
          <div className="text-xs text-ink-400 dark:text-ink-500">点击下方句子开始逐句练习</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sentences.map((s, idx) => {
              const rating = getSentenceRating(s.id)
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSentence(idx)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm transition-colors border ${
                    rating != null
                      ? 'border-green-200 dark:border-green-500/20 bg-green-50 dark:bg-green-500/5'
                      : 'border-cream-200 dark:border-ink-700 bg-cream-50 dark:bg-ink-800 hover:border-amber-200 dark:hover:border-amber-500/30'
                  }`}
                >
                  <span className="text-xs text-ink-400 dark:text-ink-500 w-5 flex-shrink-0">{idx + 1}</span>
                  <span className="flex-1 truncate text-ink-700 dark:text-cream-200">{s.cn.slice(0, 30)}...</span>
                  {rating != null && (
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${ratingDotColors[rating]}`} title={ratingLabels[rating]} />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Sentence list (collapsible) */}
      <div className="border border-cream-200 dark:border-ink-700 rounded-xl overflow-hidden">
        <button
          onClick={() => setSentenceListOpen(!sentenceListOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-cream-50 dark:bg-ink-800 hover:bg-cream-100 dark:hover:bg-ink-700 transition-colors text-left"
        >
          <span className="text-sm font-medium text-ink-700 dark:text-cream-200">
            句子列表 ({totalSentences})
          </span>
          {sentenceListOpen ? <ChevronDown size={16} className="text-ink-400" /> : <ChevronRight size={16} className="text-ink-400" />}
        </button>
        {sentenceListOpen && (
          <div className="divide-y divide-cream-200 dark:divide-ink-700">
            {sentences.map((s, idx) => {
              const rating = getSentenceRating(s.id)
              const isCurrent = idx === sentenceIndex && !fullTextMode
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSentence(idx)}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${
                    isCurrent
                      ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400'
                      : 'hover:bg-cream-50 dark:hover:bg-ink-700 text-ink-600 dark:text-ink-400'
                  }`}
                >
                  <span className="text-xs text-ink-400 dark:text-ink-500 w-6 flex-shrink-0">{idx + 1}</span>
                  <span className="flex-1 truncate">{s.cn.slice(0, 45)}{s.cn.length > 45 ? '...' : ''}</span>
                  {rating != null && (
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${ratingDotColors[rating]}`} title={ratingLabels[rating]} />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Current sentence (if not full text mode) */}
      {!fullTextMode && currentSentence && (
        <>
          {lastCalibration && (
            <div className="flex items-start gap-2 rounded-xl border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 px-4 py-3 text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
              <Info size={14} className="mt-0.5 flex-shrink-0" />
              <span className="flex-1">
                上一题你自评「{ratingLabels[lastCalibration.self]}」，系统按要点命中建议「{ratingLabels[lastCalibration.suggested]}」。差距较大时，先回看漏掉的要点，比直接点「很熟」更有效。
              </span>
              <button onClick={() => setLastCalibration(null)} className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">&times;</button>
            </div>
          )}

          {/* Chinese source */}
          <div className="card p-5">
            <div className="text-xs text-ink-400 dark:text-ink-500 mb-2">
              第 {sentenceIndex + 1} 句
            </div>
            <p className="text-base text-ink-800 dark:text-cream-100 leading-relaxed">{currentSentence.cn}</p>
          </div>

          {/* Translation input */}
          {!showAnswer && (
            <div className="card p-5">
              <div className="text-xs text-ink-400 dark:text-ink-500 mb-2">你的翻译</div>
              <textarea
                className="w-full min-h-[80px] p-3 rounded-lg border border-cream-300 dark:border-ink-600 bg-cream-50 dark:bg-ink-900 text-ink-800 dark:text-cream-100 placeholder-ink-300 dark:placeholder-ink-500 focus:outline-none focus:border-amber-400 dark:focus:border-amber-500 text-sm leading-relaxed font-serif resize-y"
                placeholder="先尝试写出你的翻译，再对照答案..."
                value={userTranslation}
                onChange={e => setUserTranslation(e.target.value)}
                autoFocus
              />
              <div className="flex items-center gap-2 mt-3">
                <button
                  onClick={handleSubmit}
                  disabled={!userTranslation.trim()}
                  className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  提交翻译
                </button>
                <button
                  onClick={handleSkip}
                  className="text-xs text-ink-400 dark:text-ink-500 hover:text-ink-600 dark:hover:text-ink-300 underline underline-offset-2"
                >
                  直接看答案（不计入复习）
                </button>
              </div>
            </div>
          )}

          {/* Answer analysis */}
          {showAnswer && (
            <>
              <AnswerAnalysis
                sentence={currentSentence}
                userTranslation={assessedTranslation}
                feedback={feedback}
                patterns={patterns}
                phrases={topicPhrases}
              />

              {skippedCurrent && (
                <div className="rounded-xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/10 px-4 py-3 text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                  本题是直接看答案，没有提交译文，因此只记录练习历史，不会进入记忆复习。下次先试着写一遍再看答案。
                </div>
              )}

              {/* Revision */}
              <div className="card p-5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-ink-600 dark:text-ink-300 font-medium">对照后修订</p>
                  {revisionDone && <span className="text-xs text-green-600 dark:text-green-400">修订完成</span>}
                </div>
                {!revisionDone ? (
                  <>
                    <p className="text-xs text-ink-400 dark:text-ink-500 mb-2 leading-relaxed">
                      对照参考译文，把漏译、误译或表达不顺的地方补上。写一遍再评分，记得更牢。
                    </p>
                    <textarea
                      className="w-full min-h-[70px] p-3 rounded-lg border border-cream-300 dark:border-ink-600 bg-cream-50 dark:bg-ink-900 text-ink-800 dark:text-cream-100 placeholder-ink-300 dark:placeholder-ink-500 focus:outline-none focus:border-amber-400 dark:focus:border-amber-500 text-sm leading-relaxed font-serif resize-y"
                      placeholder={submitted ? '在原译基础上修改（留空表示无需修改）' : '参考上面的译文，自己写一遍'}
                      value={revision}
                      onChange={e => setRevision(e.target.value)}
                    />
                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={() => handleFinishRevision(false)} className="btn-primary text-sm">
                        完成修订，去评分
                      </button>
                      <button
                        onClick={() => handleFinishRevision(true)}
                        className="text-xs text-ink-400 dark:text-ink-500 hover:text-ink-600 dark:hover:text-ink-300 underline underline-offset-2"
                      >
                        保留原译，直接评分
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="bg-cream-50 dark:bg-ink-900 rounded-lg p-3 border border-cream-200 dark:border-ink-700">
                    <p className="text-sm font-serif text-ink-700 dark:text-cream-200 italic leading-relaxed whitespace-pre-line">
                      {revision || '（保留原译）'}
                    </p>
                    <button
                      onClick={() => setRevisionDone(false)}
                      className="text-xs text-ink-400 dark:text-ink-500 hover:text-ink-600 dark:hover:text-ink-300 underline underline-offset-2 mt-2"
                    >
                      重新修订
                    </button>
                  </div>
                )}
              </div>

              {/* Self rating */}
              <div className="card p-5">
                <p className="text-sm text-ink-600 dark:text-ink-300 mb-1 font-medium">
                  自我评估 <span className="text-xs text-ink-400 dark:text-ink-500 font-normal">(键盘 1-4)</span>
                </p>
                {!revisionDone ? (
                  <p className="text-xs text-ink-400 dark:text-ink-500 mt-2">
                    完成上面的修订后即可评分（也可以选择「保留原译」）。
                  </p>
                ) : (
                  <>
                    {suggestedRating != null && (
                      <p className="text-xs text-ink-400 dark:text-ink-500 mb-3">
                        系统按要点命中建议「{ratingLabels[suggestedRating]}」（命中 {feedback.hits}/{feedback.total}），仅供参考，以你的判断为准
                      </p>
                    )}
                    <div className={`grid grid-cols-4 gap-2 ${suggestedRating == null ? 'mt-3' : ''}`}>
                      {ratingOptions.map(opt => {
                        const isSuggested = opt.value === suggestedRating
                        return (
                          <button
                            key={opt.value}
                            onClick={() => handleRate(opt.value)}
                            className={`relative py-3 px-2 rounded-xl text-sm font-medium transition-all border ${opt.color} ${
                              isSuggested ? 'ring-2 ring-amber-400 dark:ring-amber-500' : ''
                            }`}
                          >
                            {isSuggested && (
                              <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-bold px-1.5 py-px rounded-full bg-amber-400 dark:bg-amber-500 text-white whitespace-nowrap">
                                建议
                              </span>
                            )}
                            <div>{opt.label}</div>
                            <div className="text-[10px] opacity-60 mt-0.5">{opt.key}</div>
                          </button>
                        )
                      })}
                    </div>
                  </>
                )}
              </div>

              {/* Sentence navigation */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevSentence}
                  disabled={sentenceIndex === 0}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-ink-700 dark:text-cream-200 hover:bg-cream-50 dark:hover:bg-ink-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← 上一句
                </button>
                <span className="text-xs text-ink-400 dark:text-ink-500">
                  {sentenceIndex + 1} / {totalSentences}
                  <span className="ml-1 text-[10px] text-ink-300 dark:text-ink-500">← →</span>
                </span>
                {sentenceIndex < totalSentences - 1 ? (
                  <button
                    onClick={handleNextSentence}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all border border-cream-300 dark:border-ink-600 bg-white dark:bg-ink-800 text-ink-700 dark:text-cream-200 hover:bg-cream-50 dark:hover:bg-ink-700"
                  >
                    下一句 →
                  </button>
                ) : (
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">已完成 ✓</span>
                )}
              </div>
            </>
          )}
        </>
      )}

      {/* Completion banner with next recommendation */}
      {!fullTextMode && ratedCount === totalSentences && totalSentences > 0 && (
        <div className="card p-5 border-green-200 dark:border-green-500/20 bg-green-50/50 dark:bg-green-500/5">
          <div className="flex items-center gap-2 mb-3">
            <Check size={18} className="text-green-600 dark:text-green-400" />
            <span className="font-bold text-green-800 dark:text-green-400">本篇全部完成</span>
            <span className="text-sm text-green-600 dark:text-green-400 ml-auto">
              平均 {currentResults.length > 0
                ? (currentResults.reduce((s, r) => s + r.rating, 0) / currentResults.length).toFixed(1)
                : '-'} 分
            </span>
          </div>
          {nextPassage && (
            <div className="flex items-center gap-3 pt-3 border-t border-green-200 dark:border-green-500/20">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-green-600 dark:text-green-400 font-medium">下一篇推荐</p>
                <p className="text-sm text-ink-700 dark:text-cream-200 truncate">{nextPassage.title}</p>
                <p className="text-xs text-ink-400 dark:text-ink-500">{nextPassage.topic} · {nextPassage.year} · {nextPassage.sentences.length}句</p>
              </div>
              <button
                onClick={() => handleSelectPassage(nextPassage.id)}
                className="btn-primary text-sm flex items-center gap-1.5 flex-shrink-0"
              >
                继续
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
