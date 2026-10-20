// 学习闭环逻辑校验：SRS 阶段迁移、句子级调度开关、每日统计、导入合并。
// 运行：node scripts/verify-logic.mjs

const store = new Map()
globalThis.localStorage = {
  getItem: key => (store.has(key) ? store.get(key) : null),
  setItem: (key, value) => store.set(key, String(value)),
  removeItem: key => store.delete(key),
  clear: () => store.clear(),
}

// importData 依赖 FileReader；用最小实现把预置 JSON 喂回去
globalThis.FileReader = class {
  readAsText(file) {
    setTimeout(() => {
      try {
        this.onload({ target: { result: file.content } })
      } catch (err) {
        this.onerror?.(err)
      }
    }, 0)
  }
}

const {
  loadData, saveData, importData, ratePattern, rateSentence,
  recordSentenceDone, completePassage, getDailyReviewItems, getStageName,
} = await import('../src/utils/storage.js')

const failures = []
const pass = []
const ok = (cond, msg) => (cond ? pass.push(msg) : failures.push(msg))
const near = (actual, expected, tolerance, msg) =>
  ok(Math.abs(actual - expected) <= tolerance, `${msg}（实际差 ${actual - expected} ms）`)

const MIN = 60 * 1000
const DAY = 24 * 60 * MIN
const reset = () => {
  store.clear()
  return loadData()
}

// 1. 首次加载的默认结构
{
  reset()
  const d = loadData()
  ok(d.version === 2, '默认数据 version = 2')
  ok(d.sentenceProgress && Object.keys(d.sentenceProgress).length === 0, '默认含空 sentenceProgress')
  ok(d.stats.totalSentences === 0 && d.stats.dailyStreak === 0, '默认统计从 0 开始')
  ok(d.dailyGoal.sentences === 5, '默认每日目标保留')
}

// 2. 评分 3 → 阶段 +2、间隔 1 小时
{
  reset()
  const before = Date.now()
  const d = ratePattern('srs-hi', 3)
  const p = d.patternProgress['srs-hi']
  ok(p.stage === 2, 'ratePattern(3) 阶段 = 2')
  ok(p.correctCount === 1 && p.wrongCount === 0, 'ratePattern(3) 计入正确')
  near(p.nextReview, before + 60 * MIN, 5 * 1000, 'ratePattern(3) 下次复习 = 1 小时')
  ok(d.stats.patternAccuracy['srs-hi'] === 1, 'ratePattern(3) 正确率 = 1')
  ok(d.stats.totalItems === 1, 'ratePattern 计入条目练习数')
  ok(d.stats.totalSentences === 0, 'ratePattern 不计入句子数')
}

// 3. 评分 0 → 阶段归零、至少 20 分钟后再来、进错题本
{
  reset()
  const before = Date.now()
  const d = ratePattern('srs-low', 0)
  const p = d.patternProgress['srs-low']
  ok(p.stage === 0, 'ratePattern(0) 阶段 = 0')
  ok(p.wrongCount === 1, 'ratePattern(0) 计入错误')
  near(p.nextReview, before + 20 * MIN, 5 * 1000, 'ratePattern(0) 至少 20 分钟后复习')
  ok(d.errorBook.some(e => e.type === 'pattern' && e.id === 'srs-low'), 'ratePattern(0) 进入错题本')
}

// 4. 阶段上限 8，间隔 60 天
{
  reset()
  for (let i = 0; i < 6; i++) ratePattern('srs-cap', 3)
  const d = loadData()
  const p = d.patternProgress['srs-cap']
  const before = Date.now()
  ok(p.stage === 8, '连续评分 3 阶段封顶 8')
  near(p.nextReview, before + 60 * DAY, 5 * 1000, '阶段 8 间隔 = 60 天')
  ok(getStageName(8) === '已掌握', '阶段 8 显示「已掌握」')
}

// 5. 句子计数与条目计数互不串台
{
  reset()
  recordSentenceDone()
  const d = recordSentenceDone()
  ok(d.stats.totalSentences === 2, 'recordSentenceDone 累计句子数')
  ok(d.dailyProgress.sentencesDone === 2, 'recordSentenceDone 累计当日句子')
  ok(!d.stats.totalItems, 'recordSentenceDone 不计入条目数')
  ok(d.stats.dailyStreak === 1, '同日多次练习只保留 1 天连续')
}

// 6. 跳过的句子只记历史，不进 SRS
{
  reset()
  const d = rateSentence('sent-skip', 2, {
    passageId: 'p35', sentenceIndex: 0, skipped: true, countsForSrs: false,
  })
  ok(!d.sentenceProgress['sent-skip'], '跳过的句子不创建 SRS 记录')
  ok(d.sentenceHistory.length === 1 && d.sentenceHistory[0].skipped === true, '跳过的句子仍写入历史')
}

// 7. 真正提交译文后才进 SRS
{
  reset()
  const d = rateSentence('sent-do', 3, {
    passageId: 'p35', sentenceIndex: 1, firstTranslation: 'my draft', revision: 'my revision',
    countsForSrs: true,
  })
  const p = d.sentenceProgress['sent-do']
  ok(Boolean(p), '提交译文后创建句子 SRS')
  ok(p.stage === 2, '句子评分 3 阶段 = 2')
  ok(d.sentenceHistory[0].revision === 'my revision', '句子历史保留修订稿')
  ok(d.stats.totalItems === 1 && d.stats.totalSentences === 0, '句子评分走条目计数，不重复计句子数')
}

// 8. 到期句子进入每日复习
{
  reset()
  rateSentence('sent-due', 1, { passageId: 'p36', sentenceIndex: 0, countsForSrs: true })
  const data = loadData()
  data.sentenceProgress['sent-due'].nextReview = Date.now() - 1000
  saveData(data)

  const items = getDailyReviewItems([], [], [], [
    { id: 'sent-due', cn: '中文', en: 'English.', passageId: 'p36', sentenceIndex: 0 },
  ])
  ok(items.length === 1 && items[0].itemType === 'sentence', '到期句子出现在每日复习')
}

// 9. 旧备份缺少新字段时深合并默认值
{
  store.clear()
  localStorage.setItem('cet-translator-data', JSON.stringify({
    patternProgress: { legacy: { stage: 3 } },
  }))
  const d = loadData()
  ok(d.patternProgress.legacy.stage === 3, '旧备份已有进度保留')
  ok(d.stats.dailyStreak === 0 && d.dailyGoal.items === 15, '旧备份缺失字段补默认值')
  ok(d.version === 2, '旧备份加载后升级 schema 版本')
}

// 10. 导入备份是合并，不是覆盖
{
  reset()
  rateSentence('local-sent', 2, { countsForSrs: true })
  ratePattern('local-pattern', 2)

  const incoming = {
    patternProgress: { importedPattern: { stage: 1, nextReview: null, correctCount: 1, wrongCount: 0 } },
    phraseProgress: {},
    vocabProgress: {},
    sentenceProgress: { importedSent: { stage: 4, nextReview: null, correctCount: 2, wrongCount: 1 } },
    passageProgress: {},
    sentenceHistory: [{ sentenceId: 'importedSent', rating: 3, at: 1 }],
    stats: { totalSentences: 7 },
    errorBook: [],
  }

  const merged = await importData({ content: JSON.stringify(incoming) })
  ok(merged.patternProgress['local-pattern'] && merged.patternProgress.importedPattern, '导入保留本机句型进度并合并新条目')
  ok(merged.sentenceProgress['local-sent'] && merged.sentenceProgress.importedSent, '导入合并句子进度，不覆盖本机')
  ok(merged.sentenceHistory.some(h => h.sentenceId === 'importedSent') &&
     merged.sentenceHistory.some(h => h.sentenceId === 'local-sent'), '句子历史双向合并')
  ok(merged.stats.totalSentences === 7 && merged.dailyGoal.sentences === 5, '统计合并且保留默认目标')

  const persisted = loadData()
  ok(persisted.sentenceProgress.importedSent?.stage === 4, '导入结果已持久化')
}

// 11. 完成整篇：篇目计数 + 话题计数 + 生成队列
{
  reset()
  const d = completePassage('p35', '中国文化', [
    { sentenceId: 'a', rating: 3 }, { sentenceId: 'b', rating: 1 },
  ], 'full translation')
  ok(d.passageProgress.p35.completed === true, '完成篇目写入 passageProgress')
  ok(d.stats.passagesCompleted === 1, '完成篇目计数 +1')
  ok(d.stats.topicCount['中国文化'] === 1, '话题完成次数 +1')
  ok(d.passageProgress.p35.weakSentences.length === 1, '低分句记录为薄弱句')
  ok(Array.isArray(d.dailyQueue.reviewPatternIds), '完成后刷新每日复习队列')
}

console.log(`通过 ${pass.length} 项`)
if (failures.length > 0) {
  console.error(`失败 ${failures.length} 项：`)
  failures.forEach(f => console.error(`  ✗ ${f}`))
  process.exitCode = 1
} else {
  console.log('✓ 学习闭环逻辑校验通过')
}
