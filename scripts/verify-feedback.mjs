// 规则化反馈校验：要点覆盖、替代表达、语法/连贯性规则、整篇分档。
// 运行：node scripts/verify-feedback.mjs

import { passages } from '../src/data/passages.js'
import {
  analyzeTranslation, analyzePassage, checkGrammar, checkCoherence,
} from '../src/utils/feedback.js'

const failures = []
const pass = []
const ok = (cond, msg) => (cond ? pass.push(msg) : failures.push(msg))
const findSentence = id => {
  for (const p of passages) {
    const s = (p.sentences || []).find(item => item.id === id)
    if (s) return { sentence: s, passage: p }
  }
  return {}
}

// 1. 所有参考译文自比对：满分覆盖、建议「很熟」
{
  let checked = 0
  passages.forEach(p => {
    (p.sentences || []).forEach(s => {
      const r = analyzeTranslation(s, s.en)
      if (!r) {
        failures.push(`${s.id} 参考译文无法产出反馈`)
        return
      }
      checked += 1
      if (r.coverage !== 1 || r.suggestedRating !== 3) {
        failures.push(`${s.id} 参考译文覆盖率 ${r.coverage}，建议 ${r.suggestedRating}`)
      }
    })
  })
  ok(checked === 184, `全部 ${checked} 句参考译文可自比对`)
  ok(!failures.some(f => f.includes('参考译文')), '参考译文覆盖率均为 1.0，建议评分均为「很熟」')
}

// 2. 缺译时覆盖率下降、建议评分降低
{
  const { sentence } = findSentence('p36-s0')
  const short = analyzeTranslation(sentence, 'Dining etiquette is important.')
  ok(short.coverage !== null && short.coverage < 0.5, '只译出术语时覆盖率低于 0.5')
  ok(short.suggestedRating <= 1, '大幅缺译时建议评分 ≤ 1')
  ok(short.items.some(i => i.scored && !i.hit), '缺译要点被标记为未命中')
}

// 3. 替代表达也能命中（substitutionGuide）
{
  const { sentence } = findSentence('p36-s0')
  const alt = 'Dining etiquette is an important part of traditional Chinese culture and reflects the warm and polite way of treating guests.'
  const r = analyzeTranslation(sentence, alt)
  const viaItems = r.items.filter(i => i.hit && i.via)
  ok(r.coverage === 1, '用 reflect / polite 替代 embody / courteous 后仍全覆盖')
  ok(viaItems.length >= 2, '至少两个要点通过替代表达命中')
}

// 4. 语法规则命中与不误报
{
  const hasError = t => checkGrammar(t).some(i => i.level === 'error')
  const hasWarn = t => checkGrammar(t).some(i => i.level === 'warn')

  ok(hasError('He have a book.'), '主谓一致错误被抓出')
  ok(hasError('这是一个 test.'), '译文混入中文被抓出')
  ok(hasError('This is a test。'), '中文标点被抓出')
  ok(hasWarn('this is fine.'), '句首小写被抓出')
  ok(hasWarn('This is fine'), '句末缺标点被抓出')
  ok(hasWarn('I like it, it is good.'), '逗号连接完整句被抓出')
  ok(hasWarn('I want go home.'), 'want + 动词原形被抓出')

  const clean = checkGrammar('The project has improved the lives of local residents.')
  ok(clean.length === 0, '规范译文不误报语法问题')

  const ref = findSentence('p35-s0').sentence
  ok(checkGrammar(ref.en).length === 0, '真题参考译文不误报语法问题')
}

// 5. 连贯性规则
{
  const longText = 'China has a long history rich culture beautiful scenery delicious food friendly people modern cities ancient towns busy markets quiet villages green mountains clear rivers wide roads tall buildings fast trains cheap goods safe streets warm hospitality colorful festivals old customs new ideas young artists skilled workers happy families proud parents curious children eager students diligent teachers many tourists from all over the world visit every year the country is charming.'
  const longIssues = checkCoherence(longText)
  ok(longIssues.some(i => i.message.includes('45')), '超长句触发拆句提示')

  const runOn = checkCoherence('China has a long history, rich culture, beautiful scenery, delicious food, friendly people, modern cities, quiet villages, wide roads, tall buildings, fast trains, clear rivers.')
  ok(runOn.some(i => i.message.includes('从句')), '多个逗号小句连写触发逻辑显化提示')

  const repeat = checkCoherence('Great great great great culture.')
  ok(repeat.some(i => i.message.includes('重复')), '高频重复用词被提示')

  const clean = checkCoherence('Although the task was difficult, the team completed it on time.')
  ok(clean.length === 0, '有连词且长度合理的译文不误报连贯性问题')
}

// 6. 整篇模考：全部篇目参考译文达到满覆盖与最高档
{
  let checked = 0
  const bad = []
  passages.forEach(p => {
    const r = analyzePassage(p, p.fullEN)
    if (!r) {
      bad.push(`${p.id} 无法分析`)
      return
    }
    checked += 1
    if (r.coverage < 0.9) bad.push(`${p.id} 覆盖率 ${r.coverage}`)
    if (r.suggestedBand?.range !== '13-15') bad.push(`${p.id} 分档 ${r.suggestedBand?.range}`)
  })
  ok(checked === passages.length, `全部 ${checked} 篇参考译文可做整篇分析`)
  ok(bad.length === 0, `整篇满覆盖且分档 13-15${bad.length ? `（异常：${bad.slice(0, 3).join('；')}）` : ''}`)
}

// 7. 分档会因明确语言错误下调
{
  const p = passages.find(item => item.id === 'p36')
  const broken = p.fullEN.replace(/^./, c => c.toLowerCase()).replace(/\.$/, '')
  const r = analyzePassage(p, broken)
  ok(r.grammar.some(i => i.level === 'warn'), '整篇检测到句首小写/句末缺标点')
  ok(r.suggestedBand.range === '10-12', '两处以上警告将分档从 13-15 下调到 10-12')

  const empty = analyzePassage(p, '   ')
  ok(empty === null, '空译文不产生误导性分档')
}

console.log(`通过 ${pass.length} 项`)
if (failures.length > 0) {
  console.error(`失败 ${failures.length} 项：`)
  failures.forEach(f => console.error(`  ✗ ${f}`))
  process.exitCode = 1
} else {
  console.log('✓ 反馈规则校验通过')
}
