// 数据完整性校验：题源、字段、标注可定位性、2026.6 新题。
// 运行：node scripts/verify-data.mjs

import { passages, allTopics } from '../src/data/index.js'
import { sourceMeta, SOURCE_LABELS } from '../src/data/source-meta.js'

const failures = []
const warnings = []
const fail = msg => failures.push(msg)
const warn = msg => warnings.push(msg)

const validTypes = new Set(['vocab', 'phrase', 'structure', 'grammar', 'term', 'logic'])
const passageIds = new Set()
const sentenceIds = new Set()

const normalize = s => String(s || '').replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim()

// 与 AnswerAnalysis 的定位策略保持一致：两侧去引号、支持省略号跨段与斜杠择一。
function fragmentLocatable(en, fragment) {
  const cleaned = String(fragment || '').replace(/[“”‘’"]/g, '').trim()
  if (!cleaned) return false
  const haystack = String(en || '').replace(/[“”‘’"]/g, '')
  const pieces = cleaned.split(/\s*(?:\.{3,}|…)\s*/).map(s => s.trim()).filter(Boolean)
  let cursor = 0
  for (const piece of pieces) {
    const alts = piece.split(/\s*\/\s*/).map(s => s.trim()).filter(Boolean)
    let found = false
    for (const alt of alts) {
      const idx = haystack.indexOf(alt, cursor)
      if (idx !== -1) {
        cursor = idx + alt.length
        found = true
        break
      }
    }
    if (!found) return false
  }
  return pieces.length > 0
}

const knownHighScoreVariants = new Set(['p7s4', 'p8s2', 'p14s4'])

if (!Array.isArray(passages) || passages.length === 0) fail('passages 为空')

passages.forEach(p => {
  if (!p.id) fail('存在缺少 id 的篇目')
  if (passageIds.has(p.id)) fail(`篇目 id 重复：${p.id}`)
  passageIds.add(p.id)

  if (!p.title || !p.fullCN || !p.fullEN) fail(`${p.id} 缺少标题或全文`)
  if (!Number.isInteger(p.difficulty) || p.difficulty < 1 || p.difficulty > 5) {
    fail(`${p.id} difficulty 非法：${p.difficulty}`)
  }
  if (!allTopics.includes(p.topic)) fail(`${p.id} topic「${p.topic}」不在 allTopics 中`)

  if (!SOURCE_LABELS[p.sourceType]) fail(`${p.id} sourceType 非法：${p.sourceType}`)
  if (p.sourceType === 'real' && p.year === '模拟') fail(`${p.id} 标为真题但年份是「模拟」`)
  if (p.sourceType === 'mock' && p.year !== '模拟') fail(`${p.id} 标为模拟题但年份是「${p.year}」`)
  if (p.year === '模拟' && p.sourceType !== 'mock') fail(`${p.id} 年份为模拟但 sourceType 不是 mock`)

  if (!Array.isArray(p.sentences) || p.sentences.length < 3) {
    fail(`${p.id} 句子数量不足：${p.sentences?.length || 0}`)
  }

  ;(p.sentences || []).forEach(s => {
    if (!s.id) fail(`${p.id} 存在缺少 id 的句子`)
    if (sentenceIds.has(s.id)) fail(`句子 id 重复：${s.id}`)
    sentenceIds.add(s.id)

    if (!s.cn || !s.en) fail(`${s.id} 缺少中文或英文`)
    if (!Array.isArray(s.annotations) || s.annotations.length === 0) {
      warn(`${s.id} 没有标注`)
    }
    ;(s.annotations || []).forEach(a => {
      if (!a.fragment || !a.label) fail(`${s.id} 标注缺少 fragment/label`)
      if (!validTypes.has(a.type)) fail(`${s.id} 标注类型非法：${a.type}`)
      if (!fragmentLocatable(s.en || '', a.fragment)) {
        warn(`${s.id} 标注片段无法在译文中定位：${a.fragment}`)
      }
    })

    const t = s.technique
    if (!t) {
      fail(`${s.id} 缺少 technique`)
      return
    }
    ;['structure', 'structureAnalysis', 'whyGood', 'substitutionGuide', 'sentencePattern'].forEach(key => {
      if (!t[key]) fail(`${s.id} technique.${key} 为空`)
    })
    if (!Number.isInteger(t.difficulty) || t.difficulty < 1 || t.difficulty > 5) {
      fail(`${s.id} technique.difficulty 非法：${t.difficulty}`)
    }
    if (!t.highScore?.en) fail(`${s.id} 缺少 highScore.en`)
    if (!t.lowScore) fail(`${s.id} 缺少 lowScore`)

    if (t.highScore?.en && !knownHighScoreVariants.has(s.id) &&
        normalize(t.highScore.en) !== normalize(s.en)) {
      warn(`${s.id} highScore.en 与句子参考译文不完全一致`)
    }
  })
})

// 题源表必须覆盖全部篇目
passages.forEach(p => {
  if (!sourceMeta[p.id]) fail(`sourceMeta 缺少 ${p.id}`)
})
Object.keys(sourceMeta).forEach(id => {
  if (!passageIds.has(id)) warn(`sourceMeta 存在未使用的条目：${id}`)
})

// 2026.6 六套题
const expect2026 = {
  p35: 'CET-4', p36: 'CET-4', p37: 'CET-4',
  p38: 'CET-6', p39: 'CET-6', p40: 'CET-6',
}
Object.entries(expect2026).forEach(([id, level]) => {
  const p = passages.find(item => item.id === id)
  if (!p) {
    fail(`缺少 2026.6 篇目 ${id}`)
    return
  }
  if (p.year !== '2026.6') fail(`${id} 年份应为 2026.6，实际 ${p.year}`)
  if (p.level !== level) fail(`${id} 级别应为 ${level}，实际 ${p.level}`)
  if (p.sourceType !== 'real') fail(`${id} 应为真题，实际 ${p.sourceType}`)
})

const realCount = passages.filter(p => p.sourceType === 'real').length
const rewriteCount = passages.filter(p => p.sourceType === 'rewrite').length
const mockCount = passages.filter(p => p.sourceType === 'mock').length

console.log(`篇目 ${passages.length}（真题 ${realCount} / 改写 ${rewriteCount} / 模拟 ${mockCount}），句子 ${sentenceIds.size}`)

if (warnings.length > 0) {
  console.log(`\n警告 ${warnings.length} 条：`)
  warnings.forEach(w => console.log(`  ⚠ ${w}`))
}

if (failures.length > 0) {
  console.error(`\n失败 ${failures.length} 条：`)
  failures.forEach(f => console.error(`  ✗ ${f}`))
  process.exitCode = 1
} else {
  console.log('\n✓ 数据校验通过')
}
