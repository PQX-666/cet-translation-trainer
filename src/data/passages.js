import { passagesPart1 } from './passages-part1.js'
import { passagesPart2 } from './passages-part2.js'
import { passagesPart3 } from './passages-part3.js'
import { passagesPart4 } from './passages-part4.js'
import { passagesPart5 } from './passages-part5.js'
import { sourceMeta } from './source-meta.js'

export const passages = [...passagesPart5, ...passagesPart1, ...passagesPart2, ...passagesPart3, ...passagesPart4]
  .map(p => ({ ...p, sourceType: 'mock', ...(sourceMeta[p.id] || {}) }))

export { getPatternCrossReferences } from './passages-part1.js'
