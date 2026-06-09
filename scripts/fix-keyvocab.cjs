const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
const files = ['passages-part1.js', 'passages-part2.js', 'passages-part3.js', 'passages-part4.js'];

function esc(s) {
  if (s == null) return '';
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

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

// Recursively fix all passages' keyVocab and highScore/lowScore
function fixPassage(p) {
  if (p.sentences) {
    p.sentences.forEach(s => {
      const t = s.technique;
      if (t) {
        // Fix keyVocab: convert objects to strings
        if (t.keyVocab && Array.isArray(t.keyVocab)) {
          t.keyVocab = t.keyVocab.map(v => {
            if (typeof v === 'object' && v !== null) {
              return v.en || v.cn || String(v);
            }
            return String(v);
          });
        }
        // Fix empty highScore.en
        if (t.highScore && !t.highScore.en) {
          t.highScore.en = s.en || '';
        }
        if (t.lowScore && !t.lowScore.en) {
          t.lowScore.en = '';
        }
      }
    });
  }
  return p;
}

// Read, fix, and re-serialize all passages (they're already sorted)
for (const file of files) {
  const passages = extractPassages(path.join(dataDir, file));
  passages.forEach(fixPassage);

  // Re-serialize
  const varName = Object.keys(
    new Function(
      fs.readFileSync(path.join(dataDir, file), 'utf-8')
        .replace(/export const (\w+) = /g, 'return { $1 }')
        .replace(/export function.*/, '')
    )()
  )[0] || 'passagesPart1';

  let out = `// Sorted passages\n\nexport const ${varName} = [\n`;

  passages.forEach((p, pi) => {
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
      out += `      }${si < p.sentences.length - 1 ? ',' : ''}\n`;
    });

    out += `    ]\n`;
    out += `  }${pi < passages.length - 1 ? ',' : ''}\n`;
  });

  out += `];\n`;

  if (varName === 'passagesPart1') {
    out += `\nexport function getPatternCrossReferences(patternId) {\n  return [];\n}\n`;
  }

  fs.writeFileSync(path.join(dataDir, file), out, 'utf-8');
  console.log(`Fixed and written: ${file}`);
}

console.log('Done fixing keyVocab and highScore/lowScore');
