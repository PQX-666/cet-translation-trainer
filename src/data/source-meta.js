// 题源校正表 —— 覆盖各篇目自带的 level / year，避免把模拟题当成真题。
//
// sourceType:
//   real    真题原文（中文材料与当年考卷一致）
//   rewrite 真题同题材改写（保留考点，文字经过改写或合并）
//   mock    自编模拟题（不对应任何年份的考卷）
//
// note 供「题源」提示使用，只在 UI 的悬浮说明里展示。

export const sourceMeta = {
  // —— 2026.6 四级（三套题）——
  p35: { level: 'CET-4', year: '2026.6', sourceType: 'real', note: '2026年6月四级翻译·尊师传统' },
  p36: { level: 'CET-4', year: '2026.6', sourceType: 'real', note: '2026年6月四级翻译·中华餐桌礼仪' },
  p37: { level: 'CET-4', year: '2026.6', sourceType: 'real', note: '2026年6月四级翻译·礼尚往来' },

  // —— 2026.6 六级（三套题）——
  p38: { level: 'CET-6', year: '2026.6', sourceType: 'real', note: '2026年6月六级翻译·无人机产业' },
  p39: { level: 'CET-6', year: '2026.6', sourceType: 'real', note: '2026年6月六级翻译·农村电子商务' },
  p40: { level: 'CET-6', year: '2026.6', sourceType: 'real', note: '2026年6月六级翻译·科技赋能医疗' },

  // —— 2025.12 四级（三套题）——
  p1: { level: 'CET-4', year: '2025.12', sourceType: 'real', note: '2025年12月四级翻译·绿色经济' },
  p2: { level: 'CET-4', year: '2025.12', sourceType: 'real', note: '2025年12月四级翻译·民营经济' },
  p3: { level: 'CET-4', year: '2025.12', sourceType: 'real', note: '2025年12月四级翻译·城市漫步' },

  // —— 2025.6 四级（三套题）——
  p4: { level: 'CET-4', year: '2025.6', sourceType: 'real', note: '2025年6月四级翻译·杂交水稻' },
  p5: { level: 'CET-4', year: '2025.6', sourceType: 'real', note: '2025年6月四级翻译·冰雪大世界' },
  p6: { level: 'CET-4', year: '2025.6', sourceType: 'real', note: '2025年6月四级翻译·15分钟便民生活圈' },

  // —— 自编模拟（题材常见，但不是某一年的真题）——
  p7: { year: '模拟', sourceType: 'mock', note: '自编题：新质生产力' },
  p8: { year: '模拟', sourceType: 'mock', note: '自编题：一带一路倡议' },
  p9: { year: '模拟', sourceType: 'mock', note: '自编题：数字经济' },
  p10: { year: '模拟', sourceType: 'mock', note: '自编题：文化自信' },
  p11: { year: '模拟', sourceType: 'mock', note: '自编题：数字经济转型' },
  p12: { year: '模拟', sourceType: 'mock', note: '自编题：老龄化社会' },
  p13: { year: '模拟', sourceType: 'mock', note: '自编题：全民健身' },
  p14: { year: '模拟', sourceType: 'mock', note: '自编题：人类命运共同体' },
  p15: { year: '模拟', sourceType: 'mock', note: '自编题：生态文明建设' },
  p16: { year: '模拟', sourceType: 'mock', note: '自编题：中国载人航天' },
  p17: { year: '模拟', sourceType: 'mock', note: '自编题：中国梦' },
  p18: { year: '模拟', sourceType: 'mock', note: '自编题：丝绸之路' },
  p19: { year: '模拟', sourceType: 'mock', note: '自编题：中国文学' },
  p20: { year: '模拟', sourceType: 'mock', note: '自编题：中国成语文化' },

  // —— 2021.12 六级（三套题）——
  p21: { level: 'CET-6', year: '2021.12', sourceType: 'real', note: '2021年12月六级翻译·延安' },
  p22: { level: 'CET-6', year: '2021.12', sourceType: 'real', note: '2021年12月六级翻译·井冈山' },
  p23: { level: 'CET-6', year: '2021.12', sourceType: 'real', note: '2021年12月六级翻译·中共一大会址' },

  // —— 真题改写 ——
  p24: { level: 'CET-6', year: '2021.6', sourceType: 'rewrite', note: '2021年6月六级翻译·海南（改写）' },
  p25: { level: 'CET-6', year: '2021.6', sourceType: 'rewrite', note: '2021年6月六级翻译·云南（改写）' },
  p26: { level: 'CET-6', year: '2022.6', sourceType: 'rewrite', note: '2022年6月六级翻译·赵州桥（改写）' },
  p27: { year: '模拟', sourceType: 'mock', note: '自编题：城镇化' },

  p28: { level: 'CET-6', year: '2020.12', sourceType: 'rewrite', note: '大兴国际机场（改写）' },
  p29: { level: 'CET-6', year: '2020.12', sourceType: 'real', note: '2020年12月六级翻译·港珠澳大桥' },
  p30: { level: 'CET-6', year: '2019.12', sourceType: 'rewrite', note: '青藏铁路（改写；原文为六级）' },
  p31: { level: 'CET-6', year: '2022.6', sourceType: 'rewrite', note: '2022年6月六级翻译·南京长江大桥（改写）' },
  p32: { level: 'CET-6', year: '2020.9', sourceType: 'rewrite', note: '2020年9月六级翻译·四大名著（合并改写）' },
  p33: { level: 'CET-6', year: '2023.3', sourceType: 'rewrite', note: '2023年3月六级翻译·郑和下西洋（改写）' },
  p34: { level: 'CET-6', year: '2023.6', sourceType: 'rewrite', note: '2023年6月六级翻译·中国文化产品（改写）' },
};

export const SOURCE_LABELS = {
  real: '真题',
  rewrite: '真题改写',
  mock: '模拟题',
};

export const SOURCE_STYLES = {
  real: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
  rewrite: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400',
  mock: 'bg-ink-100 text-ink-500 dark:bg-ink-700 dark:text-ink-400',
};
