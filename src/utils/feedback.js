// 译文要点命中检测 —— 基于句子的结构化标注做规则化反馈，不依赖 AI。
//
// 原理：每句的 annotations 给出了参考译文中的关键片段（vocab/phrase 为词汇要点，
// structure/logic 为句式要点）；technique.substitutionGuide 给出了该片段可接受的
// 替代表达。比对用户译文是否命中这些片段（或替代表达），即可给出覆盖率与评分建议。

const STOPWORDS = new Set([
  'the', 'a', 'an', 'of', 'to', 'in', 'on', 'at', 'by', 'for', 'with', 'and', 'or', 'but',
  'as', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'has', 'have', 'had',
  'do', 'does', 'did', 'it', 'its', 'this', 'that', 'these', 'those', 'which', 'who',
  'whom', 'whose', 'from', 'into', 'over', 'under', 'up', 'down', 'out', 'than', 'then',
  'so', 'such', 'not', 'no', 'can', 'could', 'will', 'would', 'shall', 'should', 'may',
  'might', 'must', 'more', 'most', 'also', 'very', 'both', 'each', 'all', 'any', 'some',
  'their', 'his', 'her', 'our', 'your', 'my', 'them', 'they', 'we', 'you', 'he', 'she',
]);

function stem(word) {
  let w = word;
  if (w.length > 5 && w.endsWith('ies')) return `${w.slice(0, -3)}y`;
  if (w.length > 4 && w.endsWith('ing')) {
    w = w.slice(0, -3);
    if (w.length > 3 && /([bdfglmnprt])\1$/.test(w)) w = w.slice(0, -1);
    return w;
  }
  if (w.length > 4 && w.endsWith('ed')) {
    w = w.slice(0, -2);
    if (w.length > 3 && /([bdfglmnprt])\1$/.test(w)) w = w.slice(0, -1);
    return w;
  }
  if (w.length > 4 && w.endsWith('ly')) return w.slice(0, -2);
  if (w.length > 4 && (w.endsWith('tion') || w.endsWith('sion'))) return `${w.slice(0, -4)}t`;
  if (w.length > 4 && w.endsWith('ment')) return w.slice(0, -4);
  if (w.length > 3 && w.endsWith('es')) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
  return w;
}

// 两个词干是否算同一个词：相等，或一方是另一方的词首（长度≥4）。
// 后者用来吸收 promote/promoted、intensify/intensifying 这类屈折变化。
function sameWord(a, b) {
  if (!a || !b) return false;
  if (a === b) return true;
  if (a.length >= 4 && b.length >= 4 && (a.startsWith(b) || b.startsWith(a))) return true;
  return false;
}

// 常见官方缩写展开。数据里标注可能用 CPC，而参考译文写全称（或反之）。
const ABBREV = {
  cpc: ['communist', 'party', 'china'],
  ccp: ['communist', 'party', 'china'],
  prc: ['people', 'republic', 'china'],
  npc: ['national', 'people', 'congress'],
  un: ['united', 'nations'],
  wto: ['world', 'trade', 'organization'],
  gdp: ['gross', 'domestic', 'product'],
  ai: ['artificial', 'intelligence'],
};

function contentStems(text) {
  const words = String(text || '').toLowerCase().match(/[a-z]+/g) || [];
  const out = [];
  words.forEach(w => {
    if (w.length < 2 || STOPWORDS.has(w)) return;
    if (ABBREV[w]) out.push(...ABBREV[w]);
    else out.push(stem(w));
  });
  return out;
}

function normalize(text) {
  return String(text || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function containsNorm(haystack, needle) {
  const h = normalize(haystack);
  const n = normalize(needle);
  return n.length > 0 && h.includes(n);
}

// minRatio：命中该片段所需命中的实词比例。
// 词汇类片段要求全部命中（1.0）；句式类片段较长且常有省略，按 0.6 计。
function fragmentHit(fragment, userStems, userText, minRatio) {
  const fs = contentStems(fragment);
  if (fs.length === 0) return containsNorm(userText, fragment);
  const matched = fs.filter(f => userStems.some(u => sameWord(u, f))).length;
  return matched / fs.length >= minRatio;
}

const LEXICAL_TYPES = new Set(['vocab', 'phrase', 'term']);
const STRUCTURAL_TYPES = new Set(['structure', 'logic', 'grammar']);
const minRatioFor = type => (LEXICAL_TYPES.has(type) ? 1 : 0.6);

// 解析 substitutionGuide，形如：
//   '不会 intensify → strengthen / step up / increase；不会 significantly → remarkably / notably'
function parseGuide(guide) {
  if (!guide) return [];
  return String(guide)
    .split(/[；;]/)
    .map(seg => {
      const parts = seg.split(/→|->/);
      if (parts.length < 2) return null;
      const key = parts[0].replace(/^不会\s*/, '').replace(/["""'']/g, '').trim();
      if (!key) return null;
      const alts = parts.slice(1).join('→')
        .split(/[/、,，]/)
        .map(s => s.replace(/["""'']/g, '').trim())
        .filter(s => s.length > 0 && /[a-zA-Z]/.test(s));
      return alts.length > 0 ? { key, alts } : null;
    })
    .filter(Boolean);
}

function guideRelated(key, fragment) {
  const ks = contentStems(key);
  const fs = contentStems(fragment);
  if (ks.length && fs.length) return ks.some(k => fs.some(f => sameWord(k, f)));
  return containsNorm(key, fragment) || containsNorm(fragment, key);
}

// 由覆盖率与长度比例给出评分建议（0 忘了 / 1 模糊 / 2 记得 / 3 很熟）
function suggestRating(coverage, userText, reference) {
  if (coverage == null) return null;
  const ratio = userText.trim().length / Math.max(1, reference.length);
  if (ratio < 0.3) return 0;
  if (coverage >= 0.7 && ratio >= 0.6) return 3;
  if (coverage >= 0.45) return 2;
  if (coverage >= 0.2) return 1;
  return 0;
}

// 高置信度的机械性错误检查。只报能确定的问题，避免误导。
export function checkGrammar(text) {
  const issues = [];
  const t = String(text || '').trim();
  if (!t) return issues;

  if (/[一-龥]/.test(t)) {
    issues.push({ level: 'error', message: '译文中混入中文，考试时会被扣分。' });
  }
  if (/[，。；：！？（）“”]/.test(t)) {
    issues.push({ level: 'error', message: '请使用英文标点（, . ; : ! ?）。' });
  }
  if (/^[a-z]/.test(t)) {
    issues.push({ level: 'warn', message: '句首字母未大写。' });
  }
  if (!/[.!?]["'”’]?$/.test(t)) {
    issues.push({ level: 'warn', message: '句末缺少英文标点。' });
  }

  const agreement = [
    [/\b(he|she|it)\s+have\b/i, 'he / she / it 后应用 has。'],
    [/\b(he|she|it)\s+(are|were)\b/i, 'he / she / it 后应用 is / was。'],
    [/\b(they|we|you)\s+(is|was)\b/i, 'they / we / you 后应用 are / were。'],
    [/\bthere\s+have\b(?!\s+been)/i, 'there be 句型应用 there are / there have been。'],
  ];
  agreement.forEach(([re, msg]) => {
    if (re.test(t)) issues.push({ level: 'error', message: msg });
  });

  // 逗号拼接：排除 “In cities, they can...” 这类介词短语作状语的正常逗号
  const commaSplice = /,\s*(he|she|it|they|we|you|the\s+[a-z]+)\s+(is|are|was|were|has|have|had|can|could|will|would|should|must|may|might|does|do|did)\b/gi;
  let splice;
  while ((splice = commaSplice.exec(t))) {
    const clause = t.slice(0, splice.index).split(/[.!?;]\s*|\n/).pop().trim();
    const words = clause.match(/[A-Za-z']+/g) || [];
    const startsWithPrep = /^(in|at|on|for|with|through|as|after|before|during|since|by|from|to|according|despite|instead of)\b/i.test(clause);
    if (words.length >= 3 && !startsWithPrep) {
      issues.push({ level: 'warn', message: '逗号连接了两个完整句子，建议用连词、从句或拆句。' });
      break;
    }
  }
  if (/\b(want|hope|plan|decide|try|need|would like)\s+(go|do|make|improve|protect|sell|provide|increase|avoid|carry|spread)\b/i.test(t)) {
    issues.push({ level: 'warn', message: 'want / hope / plan / decide / try / need 等动词后通常接 to do。' });
  }
  return issues;
}

// 连贯性检查：针对中文流水句最容易出现的“逗号一逗到底”和重复用词。
// 整篇检查时按英文句子拆分，避免把全文词数当成一句话、或跨句统计重复词。
export function checkCoherence(text) {
  const issues = [];
  const t = String(text || '').trim();
  if (!t) return issues;

  const segments = t
    .split(/(?<=[.!?])["'”’]?\s+|\n+/)
    .map(s => s.trim())
    .filter(Boolean);

  const connectives = /\b(and|but|or|so|because|although|though|while|when|which|that|who|whose|where|as|since|if|unless|with|without|thereby|thus|therefore|however|moreover|serving|making|creating|enabling|allowing|helping)\b/i;

  segments.forEach(seg => {
    const words = seg.match(/[A-Za-z']+/g) || [];
    if (words.length > 45) {
      issues.push({ level: 'warn', message: '单句超过 45 词，建议拆成两句，避免结构失控。' });
      return;
    }
    const commas = (seg.match(/,/g) || []).length;
    if (words.length > 22 && commas >= 3 && !connectives.test(seg)) {
      issues.push({ level: 'warn', message: '中文多个小句连写，英文里建议用从句、分词或连词把逻辑关系显化。' });
    }

    const freq = {};
    words.map(w => w.toLowerCase()).forEach(w => {
      if (w.length > 3 && !STOPWORDS.has(w)) freq[w] = (freq[w] || 0) + 1;
    });
    const repeated = Object.entries(freq).filter(([, n]) => n >= 4);
    if (repeated.length > 0) {
      issues.push({ level: 'warn', message: `“${repeated[0][0]}”重复出现 ${repeated[0][1]} 次，可考虑用代词或同义表达。` });
    }
  });

  return issues;
}

const BAND_ORDER = ['4-6', '7-9', '10-12', '13-15'];
const downgradeBand = band => {
  const i = BAND_ORDER.indexOf(band);
  return i > 0 ? BAND_ORDER[i - 1] : band;
};

// CET 翻译为 15 分制整体评分。这里只按要点覆盖 + 明确的语言错误估算区间，
// 用于校准自评，不替代人工/官方评分。
function suggestBand(coverage, ratio, grammarIssues, coherenceIssues) {
  if (coverage == null) return null;
  let range;
  if (coverage >= 0.8 && ratio >= 0.7) range = '13-15';
  else if (coverage >= 0.6) range = '10-12';
  else if (coverage >= 0.35) range = '7-9';
  else range = '4-6';

  const errors = grammarIssues.filter(i => i.level === 'error').length;
  const warns =
    grammarIssues.filter(i => i.level === 'warn').length +
    coherenceIssues.filter(i => i.level === 'warn').length;
  if (errors > 0) range = downgradeBand(range);
  else if (warns >= 2) range = downgradeBand(range);

  return {
    range,
    note: errors > 0
      ? '存在明确语法/标点错误，先修正再追求高级表达。'
      : warns >= 2
        ? '信息基本到位，但句子衔接或简洁度还有提升空间。'
        : '要点与语言形式基本匹配。',
  };
}

export const RATING_LABELS = { 0: '忘了', 1: '模糊', 2: '记得', 3: '很熟' };

/**
 * 比对一个句子的用户译文与参考答案的关键片段。
 * @returns {null | {
 *   items: Array<{fragment,label,type,hit,via,alternatives}>,
 *   hits: number, total: number, coverage: number|null,
 *   suggestedRating: number|null, matchedStructure: boolean
 * }}
 */
export function analyzeTranslation(sentence, userText) {
  if (!sentence || !userText || !userText.trim()) return null;
  const annotations = sentence.annotations || [];
  if (annotations.length === 0) return null;

  const guide = parseGuide(sentence.technique?.substitutionGuide);
  const userStems = contentStems(userText);

  const altsFor = fragment =>
    guide.filter(g => guideRelated(g.key, fragment)).flatMap(g => g.alts);

  const items = annotations.map(a => {
    const alternatives = altsFor(a.fragment);
    const direct = fragmentHit(a.fragment, userStems, userText, minRatioFor(a.type));
    const via = direct ? null : alternatives.find(alt => fragmentHit(alt, userStems, userText, 0.6));
    return {
      fragment: a.fragment,
      label: a.label,
      type: a.type,
      hit: direct || Boolean(via),
      via: via || null,
      alternatives,
    };
  });

  // 词汇/术语类要点是「有没有把意思译出来」的主信号，计入覆盖率。
  // 若全句没有词汇类标注，则退回用句式类要点计分，避免这一句完全没反馈。
  const lexical = items.filter(i => LEXICAL_TYPES.has(i.type));
  const candidates = lexical.length > 0 ? lexical : items.filter(i => STRUCTURAL_TYPES.has(i.type));
  // 一致性兜底：参考答案自己都不含的片段说明标注有问题，不计分（但仍展示）。
  const refStems = contentStems(sentence.en || '');
  const scored = candidates.filter(i =>
    fragmentHit(i.fragment, refStems, sentence.en || '', minRatioFor(i.type))
  );
  const denom = scored.length;
  const hits = scored.filter(i => i.hit).length;
  const coverage = denom > 0 ? hits / denom : null;

  const scoredSet = new Set(scored);
  items.forEach(i => { i.scored = scoredSet.has(i); });

  const grammar = checkGrammar(userText);
  const coherence = checkCoherence(userText);
  const ratio = userText.trim().length / Math.max(1, (sentence.en || '').length);
  const suggestedRating = suggestRating(coverage, userText, sentence.en || '');

  return {
    items,
    hits,
    total: denom,
    coverage,
    scoredIsLexical: lexical.length > 0,
    suggestedRating,
    matchedStructure: items.some(i => STRUCTURAL_TYPES.has(i.type) && i.hit),
    grammar,
    coherence,
    lengthRatio: ratio,
    suggestedBand: suggestBand(coverage, ratio, grammar, coherence),
  };
}

// 整篇模考用：把各句的词汇/术语要点去重后整体比对，
// 只判断“这些关键表达有没有出现在整篇译文里”，不做逐句对齐。
export function analyzePassage(passage, userText) {
  if (!passage || !userText || !userText.trim()) return null;
  const userStems = contentStems(userText);
  const seen = new Set();
  const items = [];

  (passage.sentences || []).forEach((sentence, sentenceIndex) => {
    (sentence.annotations || []).forEach(ann => {
      if (!LEXICAL_TYPES.has(ann.type)) return;
      const key = normalize(ann.fragment);
      if (!key || seen.has(key)) return;
      seen.add(key);
      items.push({
        fragment: ann.fragment,
        label: ann.label,
        type: ann.type,
        sentenceIndex,
        hit: fragmentHit(ann.fragment, userStems, userText, minRatioFor(ann.type)),
      });
    });
  });

  const total = items.length;
  const hits = items.filter(i => i.hit).length;
  const coverage = total > 0 ? hits / total : null;
  const grammar = checkGrammar(userText);
  const coherence = checkCoherence(userText);
  const ratio = userText.trim().length / Math.max(1, (passage.fullEN || '').length);

  return {
    items,
    hits,
    total,
    coverage,
    missing: items.filter(i => !i.hit).slice(0, 12),
    grammar,
    coherence,
    lengthRatio: ratio,
    suggestedBand: suggestBand(coverage, ratio, grammar, coherence),
  };
}
