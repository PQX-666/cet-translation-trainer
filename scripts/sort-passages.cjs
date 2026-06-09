const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
const files = ['passages-part1.js', 'passages-part2.js', 'passages-part3.js', 'passages-part4.js'];

// Safe string escaping
function esc(s) {
  if (s == null) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Extract array from JS file
function extractPassages(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const cjsContent = content
    .replace(/export const (\w+) = /g, 'module.exports.$1 = ')
    .replace(/export function (\w+)/g, 'module.exports.$1 = function');

  const mod = { exports: {} };
  const fn = new Function('module', 'exports', cjsContent);
  fn(mod, mod.exports);

  const key = Object.keys(mod.exports).find(k => k.startsWith('passagesPart'));
  return mod.exports[key] || [];
}

// Sort key
function sortKey(year) {
  if (!year) return 0;
  const parts = String(year).split('.');
  return (parseInt(parts[0]) || 0) * 100 + (parseInt(parts[1]) || 0);
}

// Collect
const all = [];
for (const file of files) {
  all.push(...extractPassages(path.join(dataDir, file)));
}
console.log(`Total: ${all.length}`);

// Sort
all.sort((a, b) => sortKey(b.year) - sortKey(a.year));

// Renumber
all.forEach((p, i) => {
  const newId = `p${i + 1}`;
  const oldId = p.id;
  p.id = newId;
  if (p.sentences) {
    p.sentences.forEach(s => {
      if (s.id) s.id = s.id.replace(oldId, newId);
    });
  }
});

// Split into 4 groups
const groups = [all.slice(0, 10), all.slice(10, 20), all.slice(20, 30), all.slice(30, 40)];
const varNames = ['passagesPart1', 'passagesPart2', 'passagesPart3', 'passagesPart4'];

function yearRange(arr) {
  const years = arr.map(p => p.year).filter(Boolean).sort();
  return years[0] + '–' + years[years.length - 1];
}

const headers = [
  `// 10篇深度标注真题 (按年份由新到旧排序 ${yearRange(groups[0])}) — p1-p10`,
  `// 10篇深度标注真题 (按年份由新到旧排序 ${yearRange(groups[1])}) — p11-p20`,
  `// 10篇深度标注真题 (按年份由新到旧排序 ${yearRange(groups[2])}) — p21-p30`,
  `// 10篇深度标注真题 (按年份由新到旧排序 ${yearRange(groups[3])}) — p31-p40`
];

for (let i = 0; i < 4; i++) {
  let out = `${headers[i]}\n\nexport const ${varNames[i]} = [\n`;

  groups[i].forEach((p, pi) => {
    out += `  // ${p.id}. ${p.title} (${p.year})\n`;
    out += `  {\n`;
    out += `    id: '${esc(p.id)}',\n`;
    out += `    title: '${esc(p.title)}',\n`;
    out += `    year: '${esc(p.year)}',\n`;
    out += `    topic: '${esc(p.topic)}',\n`;
    out += `    difficulty: ${p.difficulty || 1},\n`;
    out += `    fullCN: '${esc(p.fullCN)}',\n`;
    out += `    fullEN: '${esc(p.fullEN)}',\n`;
    out += `    sentences: [\n`;

    p.sentences.forEach((s, si) => {
      out += `      {\n`;
      out += `        id: '${esc(s.id)}',\n`;
      out += `        cn: '${esc(s.cn)}',\n`;
      out += `        en: '${esc(s.en)}',\n`;
      out += `        annotations: [\n`;

      s.annotations.forEach((a, ai) => {
        const comma = ai < s.annotations.length - 1 ? ',' : '';
        out += `          { fragment: '${esc(a.fragment)}', type: '${esc(a.type)}', label: '${esc(a.label)}', detail: '${esc(a.detail)}' }${comma}\n`;
      });

      const t = s.technique || {};
      const hs = t.highScore || {};
      const ls = t.lowScore || {};
      const kv = (t.keyVocab || []).map(v => `'${esc(v)}'`).join(', ');

      out += `        ],\n`;
      out += `        technique: {\n`;
      out += `          difficulty: ${t.difficulty || 1},\n`;
      out += `          structure: '${esc(t.structure)}',\n`;
      out += `          structureAnalysis: '${esc(t.structureAnalysis)}',\n`;
      out += `          whyGood: '${esc(t.whyGood)}',\n`;
      out += `          keyVocab: [${kv}],\n`;
      out += `          substitutionGuide: '${esc(t.substitutionGuide)}',\n`;
      out += `          sentencePattern: '${esc(t.sentencePattern)}',\n`;
      out += `          highScore: { en: '${esc(hs.en)}', note: '${esc(hs.note)}' },\n`;
      out += `          lowScore: { en: '${esc(ls.en)}', note: '${esc(ls.note)}' }\n`;
      out += `        }\n`;

      const sComma = si < p.sentences.length - 1 ? ',' : '';
      out += `      }${sComma}\n`;
    });

    out += `    ]\n`;
    out += `  }${pi < groups[i].length - 1 ? ',' : ''}\n`;
  });

  out += `];\n`;

  if (i === 0) {
    out += `\nexport function getPatternCrossReferences(patternId) {\n  return [];\n}\n`;
  }

  const filePath = path.join(dataDir, files[i]);
  fs.writeFileSync(filePath, out, 'utf-8');
  console.log(`Written ${files[i]} (${groups[i].length} passages)`);
}

console.log('\nSorted:');
all.forEach((p, i) => console.log(`  p${i+1}: ${p.title} (${p.year})`));
