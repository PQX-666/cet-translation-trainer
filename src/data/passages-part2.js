// 10篇深度标注真题 (按年份由新到旧排序 2022.12–2023.6) — p11-p20

export const passagesPart2 = [
  // p11. 数字经济转型 (2023.12)
  {
    id: 'p11',
    level: 'CET-6',
    title: '数字经济转型',
    year: '2023.12',
    topic: '科技成就',
    difficulty: 4,
    fullCN: '数字经济已成为重塑全球经济格局的关键力量，中国数字经济规模连续多年位居世界第二。大数据、云计算、区块链等新一代信息技术的广泛应用，正在深刻改变人们的生产生活方式。传统产业的数字化转型不仅提升了生产效率，还催生了智能制造、智慧农业、数字金融等新业态。面对数字鸿沟、数据安全等挑战，中国正加快构建数据基础制度体系，推动数字经济健康有序发展。',
    fullEN: 'The digital economy has become a key force in reshaping the global economic landscape, with China\'s digital economy ranking second in the world by scale for many consecutive years. The widespread application of next-generation information technologies such as big data, cloud computing, and blockchain is profoundly transforming how people work and live. The digital transformation of traditional industries has not only improved production efficiency but also given rise to new business forms such as smart manufacturing, smart agriculture, and digital finance. In the face of challenges such as the digital divide and data security, China is accelerating the establishment of a foundational data governance system to promote the healthy and orderly development of the digital economy.',
    sentences: [
      {
        id: 'p11s1',
        cn: '数字经济已成为重塑全球经济格局的关键力量，中国数字经济规模连续多年位居世界第二。',
        en: 'The digital economy has become a key force in reshaping the global economic landscape, with China\'s digital economy ranking second in the world by scale for many consecutive years.',
        annotations: [
          { fragment: 'a key force in reshaping', type: 'phrase', label: '名词+介词', detail: '"重塑...的关键力量"译为 a key force in reshaping，force in doing 是英文政治文本常用搭配' },
          { fragment: 'with China\'s digital economy ranking second', type: 'grammar', label: 'with独立主格', detail: 'with + 名词 + 现在分词的独立主格结构，用于补充说明主句' }
        ],
        technique: {
          difficulty: 3,
          structure: '主句(现在完成时) + with独立主格',
          structureAnalysis: 'The digital economy has become a key force...，with China\'s digital economy ranking second... 独立主格补充数据',
          whyGood: 'with 独立主格将中国排名数据紧凑附在主句后，比另起一句或 and China ranks 更流畅。',
          keyVocab: ['digital economy', 'key force', 'reshaping', 'global economic landscape', 'ranking second', 'by scale'],
          substitutionGuide: '"重塑"还可译 remold / reconfiguring；"格局"可译 pattern / structure / configuration',
          sentencePattern: 'A has become a key force in doing B, with C doing D for many consecutive years.',
          highScore: { en: 'The digital economy has become a key force in reshaping the global economic landscape, with China\'s digital economy ranking second in the world by scale for many consecutive years.', note: '完成时主句+with独立主格，信息层次分明' },
          lowScore: { en: 'Digital economy has already become an important power to change the global economy pattern. China\'s digital economy is the second largest in the world for many years.', note: 'an important power 不自然，change 和 pattern 用词平淡，拆两句缺乏逻辑连接' }
        }
      },
      {
        id: 'p11s2',
        cn: '大数据、云计算、区块链等新一代信息技术的广泛应用，正在深刻改变人们的生产生活方式。',
        en: 'The widespread application of next-generation information technologies such as big data, cloud computing, and blockchain is profoundly transforming how people work and live.',
        annotations: [
          { fragment: 'next-generation information technologies such as', type: 'phrase', label: '术语+举例', detail: '"新一代信息技术"译为 next-generation information technologies，such as 引出技术列举' },
          { fragment: 'transforming how people work and live', type: 'grammar', label: 'how引导宾语从句', detail: '"改变...方式"译为 transform how people work and live，how 从句简洁表达"方式"比 the way 更灵活' }
        ],
        technique: {
          difficulty: 2,
          structure: '长名词主语(such as举例) + 现在进行时 + how宾语从句',
          structureAnalysis: 'The widespread application of... 名词化主语，is transforming how people work and live',
          whyGood: '名词化主语（application）是正式文体的标志，how 从句比 the way people work and live 更紧凑。',
          keyVocab: ['widespread application', 'next-generation', 'big data', 'cloud computing', 'blockchain', 'profoundly transforming'],
          substitutionGuide: '"深刻改变"还可译 fundamentally changing / revolutionizing；"新一代"可译 new-generation / emerging',
          sentencePattern: 'The widespread application of A such as X, Y, and Z is profoundly transforming how people do B and C.',
          highScore: { en: 'The widespread application of next-generation information technologies such as big data, cloud computing, and blockchain is profoundly transforming how people work and live.', note: '名词化主语+how从句，正式流畅' },
          lowScore: { en: 'Big data, cloud computing, blockchain and other new technologies are used widely. They are deeply changing the ways how people work and live.', note: '列举开头显突兀，the ways how 语法冗余（way 后不用 how），are used widely 多余' }
        }
      },
      {
        id: 'p11s3',
        cn: '传统产业的数字化转型不仅提升了生产效率，还催生了智能制造、智慧农业、数字金融等新业态。',
        en: 'The digital transformation of traditional industries has not only improved production efficiency but also given rise to new business forms such as smart manufacturing, smart agriculture, and digital finance.',
        annotations: [
          { fragment: 'has not only improved...but also given rise to', type: 'grammar', label: '现在完成时+递进', detail: 'not only...but also 递进，现在完成时强调已实现的效果' },
          { fragment: 'given rise to new business forms', type: 'phrase', label: '高级表达', detail: '"催生"译为 give rise to，比 create 更正式，new business forms 对应"新业态"' }
        ],
        technique: {
          difficulty: 2,
          structure: '名词主语 + 现在完成时 + not only...but also递进 + such as列举',
          structureAnalysis: 'The digital transformation has not only improved...but also given rise to...such as...',
          whyGood: 'not only...but also + 现在完成时表达成果的递进，such as 列举三个新业态实例。',
          keyVocab: ['digital transformation', 'traditional industries', 'production efficiency', 'given rise to', 'new business forms', 'smart manufacturing', 'smart agriculture', 'digital finance'],
          substitutionGuide: '"转型"还可译 transition / shift；"业态"可译 business models / industry forms',
          sentencePattern: 'The A of B has not only improved C but also given rise to D such as X, Y, and Z.',
          highScore: { en: 'The digital transformation of traditional industries has not only improved production efficiency but also given rise to new business forms such as smart manufacturing, smart agriculture, and digital finance.', note: '完成时+递进+列举，多层次信息紧凑融合' },
          lowScore: { en: 'Traditional industries\' digital change not only makes production more efficient, but also creates new business types like smart factories, smart farming and online finance.', note: 'makes production more efficient 口语化，smart factories 不准确（manufacturing≠factories），online finance 不专业' }
        }
      },
      {
        id: 'p11s4',
        cn: '面对数字鸿沟、数据安全等挑战，中国正加快构建数据基础制度体系，推动数字经济健康有序发展。',
        en: 'In the face of challenges such as the digital divide and data security, China is accelerating the establishment of a foundational data governance system to promote the healthy and orderly development of the digital economy.',
        annotations: [
          { fragment: 'In the face of challenges such as', type: 'phrase', label: '介词短语开头', detail: '"面对...挑战"译为 In the face of challenges such as，比 Facing... 更正式' },
          { fragment: 'accelerating the establishment of a foundational data governance system', type: 'phrase', label: '名词化表达', detail: '"加快构建"译为 accelerate the establishment of，名词化 establishment 比 establish 更正式' },
          { fragment: 'healthy and orderly development', type: 'phrase', label: '形容词搭配', detail: '"健康有序"译为 healthy and orderly，orderly 强调"有秩序的"，比 ordered 更准确' }
        ],
        technique: {
          difficulty: 3,
          structure: 'In the face of + such as列举 + 主句 + 不定式目的状语',
          structureAnalysis: 'In the face of challenges such as A and B，China is accelerating C to promote D',
          whyGood: 'In the face of 比 Facing 更正式，accelerate the establishment 名词化表达增加正式感，不定式表目的逻辑清晰。',
          keyVocab: ['in the face of', 'digital divide', 'data security', 'accelerating the establishment', 'foundational data governance system', 'healthy and orderly development'],
          substitutionGuide: '"数字鸿沟"还可译 digital gap；"制度体系"可译 institutional framework / regulatory system',
          sentencePattern: 'In the face of challenges such as A and B, C is accelerating the establishment of D to promote E.',
          highScore: { en: 'In the face of challenges such as the digital divide and data security, China is accelerating the establishment of a foundational data governance system to promote the healthy and orderly development of the digital economy.', note: 'In the face of 正式开头+名词化表达+不定式目的，政论文标准句式' },
          lowScore: { en: 'Facing problems like digital gap and data safety, China is quickly building a basic data system. This is to help digital economy develop healthily and orderly.', note: 'Facing 不如 In the face of 正式，quickly building 不如 accelerating the establishment 专业，拆两句削弱目的关系' }
        }
      }
    ]
  },
  // p12. 老龄化社会 (2023.12)
  {
    id: 'p12',
    level: 'CET-6',
    title: '老龄化社会',
    year: '2023.12',
    topic: '社会民生',
    difficulty: 2,
    fullCN: '中国正在快速进入老龄化社会。随着人均寿命的延长和生育率的下降，老年人口的比例持续上升。中国政府正积极采取措施应对人口老龄化带来的挑战，包括完善养老保障体系和发展养老服务业。社区养老和居家养老成为越来越多老年人的首选。此外，智慧养老技术的应用也为老年人提供了更便捷、更安全的生活服务。',
    fullEN: 'China is rapidly entering an aging society. With the increase in average life expectancy and the decline in fertility rates, the proportion of the elderly population has been rising continuously. The Chinese government is actively taking measures to address the challenges brought about by population aging, including improving the old-age security system and developing the elderly care service industry. Community-based elderly care and home-based elderly care have become the preferred choices for an increasing number of seniors. In addition, the application of smart elderly care technologies has provided more convenient and safer living services for the elderly.',
    sentences: [
      {
        id: 'p12-s0',
        cn: '中国正在快速进入老龄化社会。',
        en: 'China is rapidly entering an aging society.',
        annotations: [
          { fragment: 'is rapidly entering', type: 'structure', label: '正在快速进入', detail: '现在进行时 is entering = 正在进入。rapidly = 快速地。' },
          { fragment: 'aging society', type: 'vocab', label: '老龄化社会', detail: 'aging = 老龄化/变老。aging society = 老龄化社会。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + is rapidly entering + 名词',
          structureAnalysis: 'China → is rapidly entering → an aging society',
          whyGood: '① 现在进行时表达\'正在进入\'的动态过程 ② aging society 是\'老龄化社会\'的标准表达。',
          keyVocab: [''],
          substitutionGuide: '不会 rapidly → quickly / speedily / at a fast pace；不会 aging society → aged society / graying society',
          sentencePattern: '\'A正在快速进入老龄化社会\' → \'A is rapidly entering an aging society\'',
          highScore: { en: 'China is rapidly entering an aging society.', note: 'is rapidly entering 简洁有力，aging society 术语准确' },
          lowScore: { en: 'China is very quickly becoming a society with many old people.', note: 'very quickly 不如 rapidly；society with many old people 绕开术语但意思完整。评分 10-12 分档。' }
        }
      },
      {
        id: 'p12-s1',
        cn: '随着人均寿命的延长和生育率的下降，老年人口的比例持续上升。',
        en: 'With the increase in average life expectancy and the decline in fertility rates, the proportion of the elderly population has been rising continuously.',
        annotations: [
          { fragment: 'With the increase in...and the decline in...', type: 'structure', label: '随着...的延长和...的下降', detail: 'With + the increase/decline in = 随着...的延长/下降。名词化结构表达因果背景。' },
          { fragment: 'average life expectancy', type: 'vocab', label: '人均寿命', detail: 'life expectancy = 预期寿命。average life expectancy = 人均预期寿命。' },
          { fragment: 'fertility rates', type: 'vocab', label: '生育率', detail: 'fertility rate = 生育率，人口学术语；birth rate 是出生率，两者不能混用。' },
          { fragment: 'has been rising continuously', type: 'structure', label: '持续上升', detail: '现在完成进行时 has been rising = 一直在上升。continuously = 持续地。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'With + the increase in A and the decline in B + 主语 + has been rising continuously',
          structureAnalysis: '(With the increase in average life expectancy and the decline in fertility rates) → (the proportion of the elderly population) → has been → rising continuously',
          whyGood: '① With + 名词结构紧凑处理双重原因 ② life expectancy 是\'预期寿命/人均寿命\'的标准说法 ③ 现在完成进行时表达持续趋势。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 life expectancy → average lifespan / how long people live；不会 fertility rate → birth rate / childbirth rate；不会 proportion → percentage / ratio / share',
          sentencePattern: '\'随着A的延长和B的下降，C的比例持续上升\' → \'With the increase in A and the decline in B, the proportion of C has been rising continuously\'',
          highScore: { en: 'With the increase in average life expectancy and the decline in fertility rates, the proportion of the elderly population has been rising continuously.', note: 'With + the increase/decline + has been rising 地道' },
          lowScore: { en: 'Because people live longer and have fewer children, old people make up a larger and larger share of the population.', note: 'Because 从句替代名词化结构，share 不如 proportion 正式；信息完整。评分 9-11 分档。' }
        }
      },
      {
        id: 'p12-s2',
        cn: '中国政府正积极采取措施应对人口老龄化带来的挑战，包括完善养老保障体系和发展养老服务业。',
        en: 'The Chinese government is actively taking measures to address the challenges brought about by population aging, including improving the old-age security system and developing the elderly care service industry.',
        annotations: [
          { fragment: 'is actively taking measures to address', type: 'structure', label: '正积极采取措施应对', detail: 'take measures to address = 采取措施应对。actively = 积极地。现在进行时表达正在进行。' },
          { fragment: 'brought about by', type: 'structure', label: '带来的', detail: '过去分词 brought about by = 由...带来的。后置定语修饰 challenges。' },
          { fragment: 'old-age security system', type: 'vocab', label: '养老保障体系', detail: 'old-age = 老年的。security = 保障。old-age security system = 养老保障体系。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + is actively taking measures to address + 名词 + 后置定语 + including doing A and doing B',
          structureAnalysis: '(The Chinese government) → is actively taking measures → to address (the challenges brought about by population aging) → including (improving the old-age security system) and (developing the elderly care service industry)',
          whyGood: '① take measures to address 是\'采取措施应对\'的标准搭配 ② brought about by 过去分词处理\'带来的\' ③ including + 两个动名词列举具体措施。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 address → deal with / tackle / cope with；不会 brought about by → caused by / resulting from / triggered by；不会 old-age security → elderly security / pension security',
          sentencePattern: '\'A正积极采取措施应对B带来的挑战，包括C和D\' → \'A is actively taking measures to address the challenges brought about by B, including C and D\'',
          highScore: { en: 'The Chinese government is actively taking measures to address the challenges brought about by population aging, including improving the old-age security system and developing the elderly care service industry.', note: 'actively taking measures + brought about by + including 结构严谨' },
          lowScore: { en: 'The Chinese government is taking action to deal with the problems of an aging population, such as making the pension system better and developing elderly care services.', note: 'take action / deal with / make...better 较口语，但信息完整。评分 9-11 分档。' }
        }
      },
      {
        id: 'p12-s3',
        cn: '社区养老和居家养老成为越来越多老年人的首选。',
        en: 'Community-based elderly care and home-based elderly care have become the preferred choices for an increasing number of seniors.',
        annotations: [
          { fragment: 'Community-based / Home-based', type: 'structure', label: '社区/居家（复合形容词）', detail: 'N.-based = 基于...的/以...为基础的。community-based = 社区的。home-based = 居家的。' },
          { fragment: 'preferred choices', type: 'vocab', label: '首选', detail: 'preferred = 首选的/偏好的。preferred choices = 首选。' },
          { fragment: 'an increasing number of seniors', type: 'phrase', label: '越来越多的老年人', detail: 'senior = 老年人（比 old people 更礼貌）。increasing number of = 越来越多的。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'A and B + have become + preferred choices + for + sb.',
          structureAnalysis: '(Community-based elderly care and home-based elderly care) → have become → (the preferred choices) → for (an increasing number of seniors)',
          whyGood: '① -based 复合词精准区分社区/居家养老 ② preferred choices 表达\'首选\' ③ seniors 比 old people 更礼貌。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 community-based → community / neighborhood / local；不会 preferred → first choice / favored / most popular；不会 seniors → the elderly / old people / senior citizens',
          sentencePattern: '\'A和B成为越来越多C的首选\' → \'A and B have become the preferred choices for an increasing number of C\'',
          highScore: { en: 'Community-based elderly care and home-based elderly care have become the preferred choices for an increasing number of seniors.', note: '-based 复合词 + preferred choices + seniors 准确礼貌' },
          lowScore: { en: 'More and more old people now choose to receive care in their communities or at home.', note: '用 choose to receive care 改写，意思准确；丢失 “首选” 的名词化结构。评分 11-12 分档。' }
        }
      },
      {
        id: 'p12-s4',
        cn: '此外，智慧养老技术的应用也为老年人提供了更便捷、更安全的生活服务。',
        en: 'In addition, the application of smart elderly care technologies has provided more convenient and safer living services for the elderly.',
        annotations: [
          { fragment: 'In addition', type: 'phrase', label: '此外', detail: 'In addition = 此外/另外。比 besides 更正式地放在句首。' },
          { fragment: 'smart elderly care technologies', type: 'vocab', label: '智慧养老技术', detail: 'smart = 智能的/智慧的。elderly care = 养老服务。smart elderly care = 智慧养老。' },
          { fragment: 'has provided...for', type: 'structure', label: '为...提供了', detail: 'has provided A for B = 为B提供了A。现在完成时表达已实现的成果。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In addition + 主语 + has provided + 宾语 + for + sb.',
          structureAnalysis: '(In addition) → (the application of smart elderly care technologies) → has provided → (more convenient and safer living services) → for (the elderly)',
          whyGood: '① In addition 自然过渡补充 ② smart elderly care 精准翻译\'智慧养老\' ③ more convenient and safer 两个比较级并列。',
          keyVocab: [''],
          substitutionGuide: '不会 smart elderly care → intelligent aged care / tech-powered senior care；不会 provided → offered / delivered / supplied',
          sentencePattern: '\'此外，A的应用也为B提供了更便捷、更安全的C\' → \'In addition, the application of A has provided more convenient and safer C for B\'',
          highScore: { en: 'In addition, the application of smart elderly care technologies has provided more convenient and safer living services for the elderly.', note: 'In addition + smart elderly care + more convenient and safer 表达完整' },
          lowScore: { en: 'Also, smart technology for old people gives them easier and safer life services.', note: 'Also / gives / easier 较口语；信息完整。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p13. 全民健身 (2023.12)
  {
    id: 'p13',
    level: 'CET-4',
    title: '全民健身',
    year: '2023.12',
    topic: '社会民生',
    difficulty: 2,
    fullCN: '近年来，全民健身运动在中国蓬勃开展。政府加大了对公共体育设施的投入，各地修建了大量健身步道、篮球场和社区健身中心。越来越多的人开始将运动融入日常生活——不论是年轻人还是老年人都积极参与到跑步、游泳、广场舞等各种运动中来。全民健身不仅改善了国民的身体素质，还促进了社会的和谐发展。',
    fullEN: 'In recent years, the national fitness campaign has flourished across China. The government has increased investment in public sports facilities, and numerous fitness trails, basketball courts, and community fitness centers have been built across the country. An increasing number of people have begun to incorporate exercise into their daily lives — whether young or old, people are actively participating in various sports such as running, swimming, and square dancing. National fitness has not only improved the physical health of the people but also promoted the harmonious development of society.',
    sentences: [
      {
        id: 'p13-s0',
        cn: '近年来，全民健身运动在中国蓬勃开展。',
        en: 'In recent years, the national fitness campaign has flourished across China.',
        annotations: [
          { fragment: 'national fitness campaign', type: 'vocab', label: '全民健身运动', detail: 'national = 全民的/国家的。fitness = 健身/健康。campaign = 运动（社会运动）。' },
          { fragment: 'has flourished', type: 'structure', label: '蓬勃开展', detail: 'flourish = 蓬勃发展/兴旺。现在完成时 has flourished 表达持续繁荣。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In recent years + 主语 + has flourished + 地点',
          structureAnalysis: '(In recent years) → (the national fitness campaign) → has flourished → across China',
          whyGood: '① national fitness campaign 标准表达 ② flourish 生动表达\'蓬勃开展\' ③ across China = 在中国各地。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 national fitness → nationwide fitness / fitness for all；不会 flourished → thrived / prospered / boomed',
          sentencePattern: '\'近年来，A在中国蓬勃开展\' → \'In recent years, A has flourished across China\'',
          highScore: { en: 'In recent years, the national fitness campaign has flourished across China.', note: 'national fitness campaign + has flourished 生动有力' },
          lowScore: { en: 'In recent years, exercise for everyone has become very popular all over China.', note: 'exercise for everyone 不如 national fitness campaign；become very popular 不如 flourished。评分 9-11 分档。' }
        }
      },
      {
        id: 'p13-s1',
        cn: '政府加大了对公共体育设施的投入，各地修建了大量健身步道、篮球场和社区健身中心。',
        en: 'The government has increased investment in public sports facilities, and numerous fitness trails, basketball courts, and community fitness centers have been built across the country.',
        annotations: [
          { fragment: 'has increased investment in', type: 'structure', label: '加大了对...的投入', detail: 'increase investment in = 加大对...的投入。现在完成时表达已增加的投入。' },
          { fragment: 'fitness trails', type: 'vocab', label: '健身步道', detail: 'trail = 小径/步道。fitness trail = 健身步道。' },
          { fragment: 'have been built', type: 'structure', label: '修建了', detail: '现在完成时被动 have been built = 已被修建。强调建设成果。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has increased investment in A + and + B have been built',
          structureAnalysis: '(The government) → has increased investment in (public sports facilities) → and → (numerous fitness trails, basketball courts, and community fitness centers) → have been built',
          whyGood: '① increased investment in 是\'加大投入\'的标准表达 ② fitness trail 精准翻译\'健身步道\' ③ 被动语态强调建设成果。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 increased investment → put more money into / spent more on；不会 fitness trail → exercise path / jogging track / walking trail',
          sentencePattern: '\'A加大了对B的投入，各地修建了大量C、D和E\' → \'A has increased investment in B, and numerous C, D, and E have been built across the country\'',
          highScore: { en: 'The government has increased investment in public sports facilities, and numerous fitness trails, basketball courts, and community fitness centers have been built across the country.', note: 'has increased investment + have been built 主动被动搭配合理' },
          lowScore: { en: 'The government spent more money on public sports facilities, and many fitness paths, basketball courts and community fitness centers were built around the country.', note: 'spent more money / were built / around 较口语；信息完整。评分 9-11 分档。' }
        }
      },
      {
        id: 'p13-s2',
        cn: '越来越多的人开始将运动融入日常生活——不论是年轻人还是老年人都积极参与到跑步、游泳、广场舞等各种运动中来。',
        en: 'An increasing number of people have begun to incorporate exercise into their daily lives — whether young or old, people are actively participating in various sports such as running, swimming, and square dancing.',
        annotations: [
          { fragment: 'incorporate exercise into their daily lives', type: 'phrase', label: '将运动融入日常生活', detail: 'incorporate A into B = 将A融入B。比 put...into 或 add...to 更正式。' },
          { fragment: 'whether young or old', type: 'structure', label: '不论是年轻人还是老年人', detail: 'whether young or old = 不论老少。省略式的 whether...or... 结构，比 no matter whether... 简洁。' },
          { fragment: 'square dancing', type: 'vocab', label: '广场舞', detail: 'square dancing = 广场舞。square = 广场。dancing = 跳舞。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + have begun to incorporate A into B + 破折号 + whether X or Y + 主语 + are participating in C such as D, E, and F',
          structureAnalysis: '(An increasing number of people) → have begun to incorporate (exercise) into (their daily lives) — → whether young or old → people → are actively participating in (various sports) → such as (running, swimming, and square dancing)',
          whyGood: '① incorporate...into 精准表达\'融入\' ② whether young or old 简洁表达\'不论老少\' ③ square dancing 准确翻译\'广场舞\' ④ 破折号后补充说明。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 incorporate into → put into / mix into / blend into；不会 whether young or old → no matter young or old / both the young and old；不会 square dancing → plaza dancing / public square dancing',
          sentencePattern: '\'越来越多的人开始将A融入B——不论是C还是D都积极参与到E、F、G等各种H中来\' → \'An increasing number of people have begun to incorporate A into B — whether C or D, people are actively participating in various H such as E, F, and G\'',
          highScore: { en: 'An increasing number of people have begun to incorporate exercise into their daily lives — whether young or old, people are actively participating in various sports such as running, swimming, and square dancing.', note: 'incorporate...into + whether young or old + square dancing 表达地道' },
          lowScore: { en: 'More and more people are putting exercise into their daily life. Both young and old people take part in sports like running, swimming and square dancing.', note: '拆成两句，put...into 不如 incorporate；信息完整。评分 9-11 分档。' }
        }
      },
      {
        id: 'p13-s3',
        cn: '全民健身不仅改善了国民的身体素质，还促进了社会的和谐发展。',
        en: 'National fitness has not only improved the physical fitness of the people but also promoted the harmonious development of society.',
        annotations: [
          { fragment: 'has not only improved...but also promoted', type: 'structure', label: '不仅改善了...还促进了', detail: 'not only...but also 连接两个现在完成时动词，表达双重成果。' },
          { fragment: 'physical fitness', type: 'vocab', label: '身体素质', detail: 'physical fitness = 身体素质/体能，对应 fitness 一词；physical health 更偏“身体健康”。' },
          { fragment: 'harmonious development of society', type: 'vocab', label: '社会和谐发展', detail: 'harmonious = 和谐的。harmonious development = 和谐发展。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has not only improved + A + but also promoted + B',
          structureAnalysis: 'National fitness → has → not only improved (the physical fitness of the people) → but also promoted (the harmonious development of society)',
          whyGood: '① not only...but also 递进结构 ② physical fitness 准确对应“身体素质” ③ harmonious development 标准表达。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 physical fitness → physical health / bodily health / physique；不会 harmonious development → balanced development / coordinated progress',
          sentencePattern: '\'A不仅改善了B，还促进了C\' → \'A has not only improved B but also promoted C\'',
          highScore: { en: 'National fitness has not only improved the physical fitness of the people but also promoted the harmonious development of society.', note: 'not only...but also + physical fitness + harmonious development 表达有力' },
          lowScore: { en: 'National fitness has not only made people physically healthier but also helped society develop in a harmonious way.', note: 'made...healthier 不如 improved physical fitness，helped...develop 不如 promoted；结构正确。评分 10-12 分档。' }
        }
      }
    ]
  },
  // p14. 人类命运共同体 (2023.6)
  {
    id: 'p14',
    level: 'CET-6',
    title: '人类命运共同体',
    year: '2023.6',
    topic: '社会民生',
    difficulty: 3,
    fullCN: '构建人类命运共同体是中国为解决全球性问题提出的重大理念。当今世界正经历百年未有之大变局，地区冲突、气候变化、公共卫生危机等挑战层出不穷，没有哪个国家能够独自应对。这一理念主张各国应超越社会制度和发展阶段的差异，携手合作，共同维护世界和平与发展。中国通过参与联合国维和行动、推动气候变化《巴黎协定》落实、提供新冠疫苗援助等实际行动，践行了人类命运共同体的理念。',
    fullEN: 'Building a community with a shared future for mankind is a major vision proposed by China to address global challenges. The world today is undergoing profound changes unseen in a century, with regional conflicts, climate change, public health crises, and other challenges emerging one after another — no country can tackle them alone. This vision advocates that all countries should transcend differences in social systems and stages of development, join hands in cooperation, and work together to safeguard world peace and development. Through concrete actions such as participating in UN peacekeeping operations, advancing the implementation of the Paris Agreement on climate change, and providing COVID-19 vaccine assistance, China has put into practice the vision of a community with a shared future for mankind.',
    sentences: [
      {
        id: 'p14s1',
        cn: '构建人类命运共同体是中国为解决全球性问题提出的重大理念。',
        en: 'Building a community with a shared future for mankind is a major vision proposed by China to address global challenges.',
        annotations: [
          { fragment: 'a community with a shared future for mankind', type: 'term', label: '官方固定译法', detail: '"人类命运共同体"官方译法，注意是 with a shared future for mankind，不是 of common destiny' },
          { fragment: 'proposed by China', type: 'grammar', label: '过去分词后置定语', detail: '过去分词短语修饰 vision，比定语从句 which was proposed 简洁' }
        ],
        technique: {
          difficulty: 2,
          structure: '动名词主语 + 系动词 + 表语 + 过去分词后置定语 + 不定式目的状语',
          structureAnalysis: 'Building... 动名词作主语，is a major vision 系表，proposed by... 分词定语，to address... 目的状语',
          whyGood: '动名词主语+分词后置定语+不定式目的状语，在一个句子中表达三层信息。',
          keyVocab: ['community with a shared future', 'mankind', 'major vision', 'global challenges'],
          substitutionGuide: '"重大理念"还可译 major concept / important principle；"解决"可译 solve / resolve / tackle',
          sentencePattern: 'Doing A is a major B proposed by C to address D.',
          highScore: { en: 'Building a community with a shared future for mankind is a major vision proposed by China to address global challenges.', note: '动名词主语+分词定语+不定式目的，三层信息紧凑排列' },
          lowScore: { en: 'The community of human destiny is a big idea that China proposed to solve global problems.', note: 'human destiny 是错误的译法，big idea 不够正式' }
        }
      },
      {
        id: 'p14s2',
        cn: '当今世界正经历百年未有之大变局，地区冲突、气候变化、公共卫生危机等挑战层出不穷，没有哪个国家能够独自应对。',
        en: 'The world today is undergoing profound changes unseen in a century, with regional conflicts, climate change, public health crises, and other challenges emerging one after another — no country can tackle them alone.',
        annotations: [
          { fragment: 'profound changes unseen in a century', type: 'phrase', label: '政经用语', detail: '"百年未有之大变局"译为 profound changes unseen in a century，unseen 表"前所未有"' },
          { fragment: 'with...challenges emerging one after another', type: 'grammar', label: 'with独立主格', detail: 'with + 名词 + 现在分词，独立主格结构表背景情况' },
          { fragment: '— no country can tackle them alone', type: 'grammar', label: '破折号结论句', detail: '破折号引出结论，比用 so 更正式有力' }
        ],
        technique: {
          difficulty: 3,
          structure: '主句 + with独立主格(含列举) + 破折号结论',
          structureAnalysis: 'The world is undergoing changes，with...challenges emerging... 独立主格补充背景，破折号引出断论',
          whyGood: 'with 独立主格承载大量背景信息，破折号后的结论句干脆有力，是英文论说文的经典段落结构。',
          keyVocab: ['undergoing', 'profound changes', 'unseen in a century', 'emerging one after another', 'tackle'],
          substitutionGuide: '"层出不穷"还可译 keep cropping up / arise endlessly / come in waves',
          sentencePattern: 'A is undergoing B unseen in C, with X, Y, and Z emerging one after another — no one/nothing can do D alone.',
          highScore: { en: 'The world today is undergoing profound changes unseen in a century, with regional conflicts, climate change, public health crises, and other challenges emerging one after another — no country can tackle them alone.', note: 'with独立主格+破折号结论，文气贯通' },
          lowScore: { en: 'The world now is having big changes that haven\'t been seen for 100 years. There are many problems like regional wars, climate change and health crises. No country can solve them by itself.', note: '三短句缺乏逻辑连接，big changes 过于普通，problems 不如 challenges 准确' }
        }
      },
      {
        id: 'p14s3',
        cn: '这一理念主张各国应超越社会制度和发展阶段的差异，携手合作，共同维护世界和平与发展。',
        en: 'This vision advocates that all countries should transcend differences in social systems and stages of development, join hands in cooperation, and work together to safeguard world peace and development.',
        annotations: [
          { fragment: 'advocates that all countries should transcend', type: 'grammar', label: '宾语从句', detail: 'advocate + that 从句（用 should 虚拟语气），比 advocate for sth 更能表达主张的内容' },
          { fragment: 'transcend differences in social systems and stages of development', type: 'phrase', label: '动宾搭配', detail: 'transcend differences in... 是政论文固定表达，"超越差异"不可译 overcome differences' },
          { fragment: 'join hands in cooperation, and work together to safeguard', type: 'phrase', label: '三动词递进', detail: 'transcend → join hands → work together 三个动作递进，逻辑层层推进' }
        ],
        technique: {
          difficulty: 2,
          structure: '主谓 + that宾语从句(三动词递进)',
          structureAnalysis: 'This vision advocates that...，宾语从句中三个动词 transcend / join hands / work together 递进',
          whyGood: 'that 从句中用三个递进动词表达"超越→携手→维护"的逻辑链条，比用 and 简单连接更有说服力。',
          keyVocab: ['advocate', 'transcend differences', 'social systems', 'stages of development', 'join hands', 'safeguard'],
          substitutionGuide: '"主张"还可译 hold that / maintain that；"携手合作"可译 cooperate hand in hand / work side by side',
          sentencePattern: 'A advocates that B should transcend C, join hands in D, and work together to safeguard E.',
          highScore: { en: 'This vision advocates that all countries should transcend differences in social systems and stages of development, join hands in cooperation, and work together to safeguard world peace and development.', note: 'that从句中三动词递进，逻辑严密' },
          lowScore: { en: 'This idea says countries should not care about their differences in social systems and development levels, and they should cooperate together to protect world peace and development.', note: 'says 不正式，not care about 语气不当，protect 不如 safeguard 贴切' }
        }
      },
      {
        id: 'p14s4',
        cn: '中国通过参与联合国维和行动、推动气候变化《巴黎协定》落实、提供新冠疫苗援助等实际行动，践行了人类命运共同体的理念。',
        en: 'Through concrete actions such as participating in UN peacekeeping operations, advancing the implementation of the Paris Agreement on climate change, and providing COVID-19 vaccine assistance, China has put into practice the vision of a community with a shared future for mankind.',
        annotations: [
          { fragment: 'Through concrete actions such as', type: 'grammar', label: '介词短语前置', detail: 'Through 介词短语置于句首，统领三个并列动名词举例，句式有气势' },
          { fragment: 'participating in...advancing the implementation of...providing', type: 'grammar', label: '三项动名词并列', detail: '三个动名词短语并列作 such as 的宾语，对应三种具体行动' },
          { fragment: 'has put into practice', type: 'phrase', label: '完成时+习语', detail: '"践行"译为 put into practice，比 implement 更形象，现在完成时强调持续至今' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Through + 三项动名词列举 + 主句(现在完成时)',
          structureAnalysis: 'Through A, B, and C, China has put into practice...，介词短语前置+三项动名词举例+主句',
          whyGood: 'Through 短语前置承载三个动名词举例，主句放在末尾收束，英文论说文的标准篇章结构。',
          keyVocab: ['concrete actions', 'UN peacekeeping operations', 'advancing the implementation', 'Paris Agreement', 'put into practice'],
          substitutionGuide: '"参与"还可译 taking part in / involvement in；"践行"可译 live up to / honor',
          sentencePattern: 'Through A such as doing X, doing Y, and doing Z, B has put into practice the vision of C.',
          highScore: { en: 'Through concrete actions such as participating in UN peacekeeping operations, advancing the implementation of the Paris Agreement, and providing COVID-19 vaccine assistance, China has put into practice the vision of a community with a shared future for mankind.', note: 'Through 前置+三项动名词列举+主句收束，篇章结构完整' },
          lowScore: { en: 'China has taken many actions to practice this vision, including joining UN peacekeeping work, helping to carry out the Paris Agreement, and giving vaccines to other countries.', note: 'joining/work/giving 用词不够正式，不适合政论文体' }
        }
      }
    ]
  },
  // p15. 生态文明建设 (2023.6)
  {
    id: 'p15',
    level: 'CET-6',
    title: '生态文明建设',
    year: '2023.6',
    topic: '生态环境',
    difficulty: 3,
    fullCN: '建设生态文明是中华民族永续发展的千年大计。绿水青山就是金山银山的理念已深入人心，推动中国走上了生态优先、绿色低碳的发展道路。近年来，中国的森林覆盖率持续增长，单位GDP能耗持续下降，新能源汽车产销量连续多年居全球首位。一系列国家公园的设立和自然保护区的建设，标志着中国在生物多样性保护方面取得了显著进展。',
    fullEN: 'Building an ecological civilization is a millennium-long project crucial to the sustainable development of the Chinese nation. The concept that lucid waters and lush mountains are invaluable assets has taken root in people\'s hearts, guiding China onto a development path that prioritizes ecological protection and pursues green and low-carbon growth. In recent years, China\'s forest coverage rate has continued to increase, energy consumption per unit of GDP has kept declining, and the production and sales of new energy vehicles have ranked first globally for many consecutive years. The establishment of a series of national parks and the construction of nature reserves mark significant progress in biodiversity conservation in China.',
    sentences: [
      {
        id: 'p15s1',
        cn: '建设生态文明是中华民族永续发展的千年大计。',
        en: 'Building an ecological civilization is a millennium-long project crucial to the sustainable development of the Chinese nation.',
        annotations: [
          { fragment: 'ecological civilization', type: 'term', label: '官方术语', detail: '"生态文明"固定译法 ecological civilization，ecological 不可换为 environmental' },
          { fragment: 'millennium-long project', type: 'phrase', label: '文学译法', detail: '"千年大计"译为 millennium-long project，millennium 精准对应"千年"，比 thousand-year 更有历史厚重感' }
        ],
        technique: {
          difficulty: 2,
          structure: '动名词主语 + 系表 + 形容词短语后置定语',
          structureAnalysis: 'Building... 动名词主语，is a...project，crucial to... 形容词短语后置修饰 project',
          whyGood: '形容词短语 crucial to... 后置修饰 project，比定语从句 which is crucial to 更简洁。',
          keyVocab: ['ecological civilization', 'millennium-long', 'sustainable development', 'Chinese nation'],
          substitutionGuide: '"永续发展"就是 sustainable development；"千年"也可译 lasting for a thousand years',
          sentencePattern: 'Doing A is a B project crucial to the C of D.',
          highScore: { en: 'Building an ecological civilization is a millennium-long project crucial to the sustainable development of the Chinese nation.', note: 'crucial to 形容词短语后置，句式紧凑有力' },
          lowScore: { en: 'To build ecological civilization is a thousand-year plan, and it is very important for Chinese people to develop sustainably.', note: 'To build 不如动名词，very important 用词单薄，Chinese people 不等于 Chinese nation' }
        }
      },
      {
        id: 'p15s2',
        cn: '绿水青山就是金山银山的理念已深入人心，推动中国走上了生态优先、绿色低碳的发展道路。',
        en: 'The concept that lucid waters and lush mountains are invaluable assets has taken root in people\'s hearts, guiding China onto a development path that prioritizes ecological protection and pursues green and low-carbon growth.',
        annotations: [
          { fragment: 'lucid waters and lush mountains are invaluable assets', type: 'phrase', label: '名言译法', detail: '"绿水青山就是金山银山"的英文译法，lucid/lush 押头韵，invaluable assets 保留比喻' },
          { fragment: 'has taken root in people\'s hearts', type: 'phrase', label: '习语', detail: '"深入人心"译为 take root in people\'s hearts，英文惯用 plant/tree 隐喻表达观念传播' },
          { fragment: 'guiding China onto a development path that...', type: 'grammar', label: '分词状语+定语从句', detail: '现在分词 guiding 表结果，path 后接 that 定语从句补充说明路径特征' }
        ],
        technique: {
          difficulty: 4,
          structure: '同位语从句 + 主句 + 分词状语 + 定语从句',
          structureAnalysis: 'The concept that... 同位语从句说明概念内容，has taken root 主句，guiding... 分词结果状语，path that... 定语从句',
          whyGood: '同位语从句承载"绿水青山"的名言翻译，guiding 分词和 that 定语从句将后续信息紧密连接。',
          keyVocab: ['lucid waters', 'lush mountains', 'invaluable assets', 'taken root', 'ecological protection', 'green and low-carbon'],
          substitutionGuide: '"绿水青山"也可简洁译作 green mountains and clear waters；"金山银山"可译 mountains of gold and silver',
          sentencePattern: 'The concept that A is/are B has taken root, guiding C onto a path that does D and pursues E.',
          highScore: { en: 'The concept that lucid waters and lush mountains are invaluable assets has taken root in people\'s hearts, guiding China onto a development path that prioritizes ecological protection and pursues green and low-carbon growth.', note: '同位语从句+分词状语+定语从句，四层嵌套结构精密' },
          lowScore: { en: 'People now deeply understand that green water and green mountains are gold and silver mountains. This pushes China to a development road which is ecological first and green and low-carbon.', note: 'green water and green mountains 重复用词贫乏，road 不如 path 抽象，ecological first 不通顺' }
        }
      },
      {
        id: 'p15s3',
        cn: '近年来，中国的森林覆盖率持续增长，单位GDP能耗持续下降，新能源汽车产销量连续多年居全球首位。',
        en: 'In recent years, China\'s forest coverage rate has continued to increase, energy consumption per unit of GDP has kept declining, and the production and sales of new energy vehicles have ranked first globally for many consecutive years.',
        annotations: [
          { fragment: 'forest coverage rate has continued to increase', type: 'phrase', label: '数据描述', detail: '"森林覆盖率"译为 forest coverage rate，后接现在完成时强调持续至今的趋势' },
          { fragment: 'energy consumption per unit of GDP', type: 'term', label: '经济学术语', detail: '"单位GDP能耗"的标准译法，per unit of 比 per GDP unit 规范' },
          { fragment: 'have ranked first globally for many consecutive years', type: 'grammar', label: '完成时+持续时间', detail: '现在完成时 have ranked + for many consecutive years，表达"连续多年居首"' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 三项并列现在完成时句子',
          structureAnalysis: 'In recent years, A has done X, B has done Y, and C have done Z. 三项独立并列句，都用现在完成时',
          whyGood: '三个并列句统一使用现在完成时，形成排比气势，每项一个核心数据指标。',
          keyVocab: ['forest coverage rate', 'energy consumption', 'per unit of GDP', 'new energy vehicles', 'ranked first'],
          substitutionGuide: '"居首位"还可译 topped the list / led the world；"持续增长"可译 has been steadily increasing',
          sentencePattern: 'In recent years, A has done X, B has kept doing Y, and C have done Z for many consecutive years.',
          highScore: { en: 'In recent years, China\'s forest coverage rate has continued to increase, energy consumption per unit of GDP has kept declining, and the production and sales of new energy vehicles have ranked first globally for many consecutive years.', note: '三项现在完成时并列，数据排比有说服力' },
          lowScore: { en: 'Recent years, China\'s forest coverage increased, energy use per GDP went down, and China is number one in new energy car selling for many years.', note: 'Recent years 缺 in，时态混乱，China is number one 口语化不适合数据论证' }
        }
      },
      {
        id: 'p15s4',
        cn: '一系列国家公园的设立和自然保护区的建设，标志着中国在生物多样性保护方面取得了显著进展。',
        en: 'The establishment of a series of national parks and the construction of nature reserves mark significant progress in biodiversity conservation in China.',
        annotations: [
          { fragment: 'The establishment of...and the construction of', type: 'grammar', label: '并列名词主语', detail: '两个名词化主语（establishment / construction）并列，比动名词更正式' },
          { fragment: 'mark significant progress in biodiversity conservation', type: 'phrase', label: '动宾搭配', detail: 'mark progress in... 是描述成就的标准表达，progress 搭配 in 引出领域' }
        ],
        technique: {
          difficulty: 2,
          structure: '并列名词主语 + 谓语 + 宾语 + in + 领域',
          structureAnalysis: 'The establishment of A and the construction of B mark progress in C，简洁的主谓宾结构',
          whyGood: '名词化主语（establishment / construction）是正式文体的标志，符合六级政经类文本风格。',
          keyVocab: ['establishment', 'national parks', 'nature reserves', 'mark', 'biodiversity conservation', 'significant progress'],
          substitutionGuide: '"标志着"还可译 signal / indicate / represent；"自然保护区"可译 natural reserves / protected areas',
          sentencePattern: 'The establishment of A and the construction of B mark significant progress in C.',
          highScore: { en: 'The establishment of a series of national parks and the construction of nature reserves mark significant progress in biodiversity conservation in China.', note: '名词化主语+简洁动宾，正式文体标准句式' },
          lowScore: { en: 'China has built many national parks and nature protection areas. This shows China has made big progress in protecting different kinds of living things.', note: 'nature protection areas 非标准译法，protecting different kinds of living things 啰嗦且不专业' }
        }
      }
    ]
  },
  // p16. 中国载人航天 (2023.6)
  {
    id: 'p16',
    level: 'CET-4',
    title: '中国载人航天',
    year: '2023.6',
    topic: '科技成就',
    difficulty: 3,
    fullCN: '中国载人航天工程取得了举世瞩目的成就。自2003年首次将航天员送入太空以来，中国已成功完成多次载人飞行任务。天宫空间站是中国自主建造的永久性空间站，标志着中国载人航天进入了新的发展阶段。航天员在空间站内开展各种科学实验，为人类探索宇宙做出了重要贡献。中国载人航天的发展展现了中国人勇于探索、不断创新的精神。',
    fullEN: 'China\'s manned space program has achieved remarkable accomplishments that have attracted worldwide attention. Since sending its first astronaut into space in 2003, China has successfully completed multiple manned space missions. The Tiangong Space Station is a permanent space station independently built by China, marking a new stage in the development of China\'s manned space program. Astronauts conduct various scientific experiments aboard the space station, making important contributions to humanity\'s exploration of the universe. The development of China\'s manned space program reflects the Chinese people\'s spirit of courageous exploration and continuous innovation.',
    sentences: [
      {
        id: 'p16-s0',
        cn: '中国载人航天工程取得了举世瞩目的成就。',
        en: 'China\'s manned space program has achieved remarkable accomplishments that have attracted worldwide attention.',
        annotations: [
          { fragment: 'manned space program', type: 'vocab', label: '载人航天工程', detail: 'manned = 载人的。space program = 航天工程/太空计划。' },
          { fragment: 'remarkable accomplishments', type: 'vocab', label: '瞩目的成就', detail: 'remarkable = 显著的/引人注目的。accomplishment = 成就。比 achievement 更强调\'完成\'。' },
          { fragment: 'that have attracted worldwide attention', type: 'structure', label: '举世（定语从句）', detail: 'that定语从句修饰accomplishments，处理\'举世\'。worldwide attention = 举世关注。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + has achieved + 宾语 + that 定语从句',
          structureAnalysis: '(China\'s manned space program) → has achieved → (remarkable accomplishments) → that have attracted (worldwide attention)',
          whyGood: '① manned space program 精准表达\'载人航天工程\' ② remarkable accomplishments 比 great achievements 更丰富 ③ that 定语从句处理\'举世瞩目\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 manned space program → human spaceflight program / crewed space mission；不会 remarkable → outstanding / impressive / striking；不会 worldwide attention → global recognition / international acclaim',
          sentencePattern: '\'A取得了举世瞩目的成就\' → \'A has achieved remarkable accomplishments that have attracted worldwide attention\'',
          highScore: { en: 'China\'s manned space program has achieved remarkable accomplishments that have attracted worldwide attention.', note: 'manned space program + remarkable + that 定语从句表达精准' },
          lowScore: { en: 'China\'s human spaceflight program has made great achievements, and the whole world has noticed them.', note: 'human spaceflight / made great achievements 可用但不如原译专业；拆句后信息完整。评分 9-11 分档。' }
        }
      },
      {
        id: 'p16-s1',
        cn: '自2003年首次将航天员送入太空以来，中国已成功完成多次载人飞行任务。',
        en: 'Since sending its first astronaut into space in 2003, China has successfully completed multiple manned space missions.',
        annotations: [
          { fragment: 'Since sending...into space', type: 'structure', label: '自...以来', detail: 'Since + 动名词短语 = 自从...以来。Since sending = 自将...送入...。' },
          { fragment: 'has successfully completed', type: 'structure', label: '已成功完成', detail: '现在完成时 has completed = 已经完成。与 Since 搭配使用。' },
          { fragment: 'multiple manned space missions', type: 'vocab', label: '多次载人飞行任务', detail: 'multiple = 多次的。manned space mission = 载人航天任务/载人飞行任务。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Since + 动名词 + 主语 + has successfully completed + 宾语',
          structureAnalysis: '(Since sending its first astronaut into space in 2003) → China → has successfully completed → (multiple manned space missions)',
          whyGood: '① Since + 动名词简洁表达\'自...以来\' ② has completed 现在完成时与 Since 搭配 ③ manned space missions 精准。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 Since sending → Since it sent / From the time when it sent；不会 multiple → many / several / numerous；不会 missions → flights / operations',
          sentencePattern: '\'自Y年首次将A送入B以来，C已成功完成多次D\' → \'Since sending its first A into B in Y, C has successfully completed multiple D\'',
          highScore: { en: 'Since sending its first astronaut into space in 2003, China has successfully completed multiple manned space missions.', note: 'Since sending + has completed + multiple missions 准确' },
          lowScore: { en: 'After it first sent an astronaut into space in 2003, China has successfully finished many manned space flights.', note: 'After 从句不如 Since 分词，finished / flights 不如 completed / missions；信息完整。评分 10-12 分档。' }
        }
      },
      {
        id: 'p16-s2',
        cn: '天宫空间站是中国自主建造的永久性空间站，标志着中国载人航天进入了新的发展阶段。',
        en: 'The Tiangong Space Station is a permanent space station independently built by China, marking a new stage in the development of China\'s manned space program.',
        annotations: [
          { fragment: 'independently built by China', type: 'structure', label: '自主建造', detail: 'independently = 独立地/自主地。过去分词短语修饰 space station。' },
          { fragment: 'permanent space station', type: 'vocab', label: '永久性空间站', detail: 'permanent = 永久的/常设的。space station = 空间站。' },
          { fragment: 'marking a new stage', type: 'structure', label: '标志着...进入了新阶段', detail: '现在分词 marking 表示伴随结果。mark = 标志。a new stage = 新的阶段。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + is + a + adj. + n. + 过去分词后置定语 + 现在分词(marking...)',
          structureAnalysis: '(The Tiangong Space Station) → is → (a permanent space station) → independently built by China → marking (a new stage in the development of China\'s manned space program)',
          whyGood: '① independently built 过去分词表达\'自主建造\' ② permanent 比 long-term 更准确 ③ marking 现在分词处理\'标志着\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 permanent → lasting / constant / perpetual；不会 independently built → self-built / built on its own / domestically constructed；不会 marking → signaling / indicating / representing',
          sentencePattern: '\'A是B自主建造的C，标志着D进入了新的发展阶段\' → \'A is a C independently built by B, marking a new stage in the development of D\'',
          highScore: { en: 'The Tiangong Space Station is a permanent space station independently built by China, marking a new stage in the development of China\'s manned space program.', note: 'permanent + independently built + marking 层层嵌套' },
          lowScore: { en: 'Tiangong is a permanent space station that China built by itself. It shows Chinese manned spaceflight has entered a new stage.', note: 'built by itself 不如 independently built，shows 不如 marks，拆成两句；意思准确。评分 9-11 分档。' }
        }
      },
      {
        id: 'p16-s3',
        cn: '航天员在空间站内开展各种科学实验，为人类探索宇宙做出了重要贡献。',
        en: 'Astronauts conduct various scientific experiments aboard the space station, making important contributions to humanity\'s exploration of the universe.',
        annotations: [
          { fragment: 'conduct various scientific experiments', type: 'phrase', label: '开展各种科学实验', detail: 'conduct = 开展/进行。various = 各种各样的。scientific experiments = 科学实验。' },
          { fragment: 'aboard the space station', type: 'vocab', label: '在空间站内', detail: 'aboard = 在（船/飞机/空间站）上。比 in 或 on 更专业地表达\'在载具上\'。' },
          { fragment: 'humanity\'s exploration of the universe', type: 'vocab', label: '人类探索宇宙', detail: 'humanity = 人类（全体）。exploration of the universe = 探索宇宙。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + conduct + A + aboard + B + 现在分词(making contributions to...)',
          structureAnalysis: 'Astronauts → conduct (various scientific experiments) → aboard (the space station) → making (important contributions to humanity\'s exploration of the universe)',
          whyGood: '① conduct experiments 是\'开展实验\'的标准表达 ② aboard 比 in 更专业 ③ humanity\'s exploration of the universe 完整表达\'人类探索宇宙\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 conduct → carry out / perform / do；不会 aboard → on board / inside / in；不会 humanity → humankind / the human race / people',
          sentencePattern: '\'A在B内开展各种C，为D做出了重要贡献\' → \'A conduct various C aboard B, making important contributions to D\'',
          highScore: { en: 'Astronauts conduct various scientific experiments aboard the space station, making important contributions to humanity\'s exploration of the universe.', note: 'conduct + aboard + humanity\'s exploration 表达精准' },
          lowScore: { en: 'Astronauts do many science experiments in the space station. They have made important contributions to humans\' exploration of the universe.', note: 'do / in 不如 conduct / aboard，拆成两句；信息完整。评分 9-11 分档。' }
        }
      },
      {
        id: 'p16-s4',
        cn: '中国载人航天的发展展现了中国人勇于探索、不断创新的精神。',
        en: 'The development of China\'s manned space program reflects the Chinese people\'s spirit of courageous exploration and continuous innovation.',
        annotations: [
          { fragment: 'reflects', type: 'vocab', label: '展现/反映', detail: 'reflect = 反映/展现。比 show 更有\'折射内在品质\'的意味。' },
          { fragment: 'courageous exploration', type: 'vocab', label: '勇于探索', detail: 'courageous = 勇敢的/勇于的。exploration = 探索。courageous exploration = 勇于探索。' },
          { fragment: 'continuous innovation', type: 'vocab', label: '不断创新', detail: 'continuous = 持续的/不断的。innovation = 创新。continuous innovation = 不断创新。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'The development of A + reflects + the spirit of B and C',
          structureAnalysis: '(The development of China\'s manned space program) → reflects → (the Chinese people\'s spirit of courageous exploration and continuous innovation)',
          whyGood: '① reflects 比 shows 更有深度 ② courageous exploration 和 continuous innovation 并列表达\'勇于探索、不断创新\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 reflects → shows / demonstrates / displays；不会 courageous → brave / bold / daring；不会 continuous innovation → constant innovation / relentless innovation / ongoing innovation',
          sentencePattern: '\'A的发展展现了B勇于C、不断D的精神\' → \'The development of A reflects B\'s spirit of C and D\'',
          highScore: { en: 'The development of China\'s manned space program reflects the Chinese people\'s spirit of courageous exploration and continuous innovation.', note: 'reflects + courageous exploration + continuous innovation 表达有力' },
          lowScore: { en: 'China\'s manned space program shows that Chinese people are brave to explore and keep making new things.', note: 'shows 不如 reflects，brave to explore / making new things 较口语；意思基本完整。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p17. 中国梦 (2022.12)
  {
    id: 'p17',
    level: 'CET-6',
    title: '中国梦',
    year: '2022.12',
    topic: '社会民生',
    difficulty: 3,
    fullCN: '实现中华民族伟大复兴的中国梦，是近代以来中华民族最伟大的梦想。中国梦的本质是国家富强、民族振兴、人民幸福。这个梦想凝聚了几代中国人的夙愿，体现了中华民族的整体利益，是每一个中华儿女的共同期盼。实现中国梦必须走中国道路，弘扬中国精神，凝聚中国力量。历史已经证明并将继续证明，在中国共产党的领导下，中国梦必将实现。',
    fullEN: 'Realizing the Chinese Dream of the great rejuvenation of the Chinese nation is the greatest dream of the Chinese nation since modern times. The essence of the Chinese Dream is national prosperity, national rejuvenation, and people\'s well-being. This dream embodies the long-cherished aspirations of generations of Chinese people, reflects the overall interests of the Chinese nation, and represents the common hope of every Chinese descendant. To realize the Chinese Dream, we must follow the Chinese path, carry forward the Chinese spirit, and pool Chinese strength together. History has proven and will continue to prove that under the leadership of the Communist Party of China, the Chinese Dream will surely be realized.',
    sentences: [
      {
        id: 'p17s1',
        cn: '实现中华民族伟大复兴的中国梦，是近代以来中华民族最伟大的梦想。',
        en: 'Realizing the Chinese Dream of the great rejuvenation of the Chinese nation is the greatest dream of the Chinese nation since modern times.',
        annotations: [
          { fragment: 'the great rejuvenation of the Chinese nation', type: 'term', label: '官方译法', detail: '"中华民族伟大复兴"的固定译法，rejuvenation 意为"恢复青春/复兴"，比 revival 更强调活力再生' },
          { fragment: 'since modern times', type: 'phrase', label: '时间状语', detail: '"近代以来"译为 since modern times，中国语境中 modern times 一般指1840年鸦片战争以来' }
        ],
        technique: {
          difficulty: 2,
          structure: '动名词主语(含of短语链) + 系表 + 最高级 + since时间状语',
          structureAnalysis: 'Realizing the Chinese Dream of... 长动名词短语作主语，is the greatest dream，since modern times 时间界定',
          whyGood: '用 Realizing 动名词开头+of 介词链，将"实现...中国梦"紧凑封装为主语，英文惯用名词化结构处理中文话题式主语。',
          keyVocab: ['realizing', 'great rejuvenation', 'greatest dream', 'modern times'],
          substitutionGuide: '"复兴"还可译 renaissance / revival / resurgence；"最伟大"用 the greatest 已很准确',
          sentencePattern: 'Realizing the A of B is the greatest C since D.',
          highScore: { en: 'Realizing the Chinese Dream of the great rejuvenation of the Chinese nation is the greatest dream of the Chinese nation since modern times.', note: '动名词主语+of短语链，紧凑传达"实现...梦"的语义' },
          lowScore: { en: 'The Chinese Dream is to realize Chinese nation\'s great revival. This is the greatest dream since modern times.', note: '拆两句弱化定义语气，Chinese nation\'s great revival 语序不够自然' }
        }
      },
      {
        id: 'p17s2',
        cn: '中国梦的本质是国家富强、民族振兴、人民幸福。',
        en: 'The essence of the Chinese Dream is national prosperity, national rejuvenation, and people\'s well-being.',
        annotations: [
          { fragment: 'national prosperity, national rejuvenation, and people\'s well-being', type: 'grammar', label: '三项名词排比', detail: '三个名词短语并列作表语，对应"国家富强、民族振兴、人民幸福"' }
        ],
        technique: {
          difficulty: 1,
          structure: '主系表 + 三项名词并列',
          structureAnalysis: 'The essence of... is A, B, and C，简洁的系表结构+三项并列',
          whyGood: '最简单的系表结构承载最核心的理念内容，三项名词排比保留原文节奏。',
          keyVocab: ['essence', 'national prosperity', 'national rejuvenation', 'well-being'],
          substitutionGuide: '"本质"还可译 core / fundamental nature；"富强"可译 strength and prosperity',
          sentencePattern: 'The essence of A is B, C, and D.',
          highScore: { en: 'The essence of the Chinese Dream is national prosperity, national rejuvenation, and people\'s well-being.', note: '简洁系表+三项名词排比，形式与内容高度统一' },
          lowScore: { en: 'The Chinese Dream basically means the country is rich and strong, the nation revives, and people are happy.', note: '副词 basically 削弱正式感，用句子而非名词词组降低了格言力度' }
        }
      },
      {
        id: 'p17s3',
        cn: '这个梦想凝聚了几代中国人的夙愿，体现了中华民族的整体利益，是每一个中华儿女的共同期盼。',
        en: 'This dream embodies the long-cherished aspirations of generations of Chinese people, reflects the overall interests of the Chinese nation, and represents the common hope of every Chinese descendant.',
        annotations: [
          { fragment: 'embodies the long-cherished aspirations', type: 'phrase', label: '高级表达', detail: '"凝聚了夙愿"译为 embodies the long-cherished aspirations，long-cherished 意为"长期怀有的"，比 long-held 更有文学色彩' },
          { fragment: 'embodies...reflects...represents', type: 'grammar', label: '三动词排比', detail: '三个动词并列作谓语，层层递进：凝聚→体现→代表，英文对应 embodies→reflects→represents' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + 三并列动宾结构',
          structureAnalysis: 'This dream embodies..., reflects..., and represents...，三动词共用主语 This dream',
          whyGood: '三动词排比（embodies / reflects / represents）对应中文"凝聚/体现/是"的递进逻辑，语气逐渐增强。',
          keyVocab: ['embodies', 'long-cherished aspirations', 'generations of', 'overall interests', 'Chinese descendant'],
          substitutionGuide: '"夙愿"还可译 long-nurtured wishes / age-old dream；"中华儿女"可译 sons and daughters of the Chinese nation',
          sentencePattern: 'A embodies B, reflects C, and represents D.',
          highScore: { en: 'This dream embodies the long-cherished aspirations of generations of Chinese people, reflects the overall interests of the Chinese nation, and represents the common hope of every Chinese descendant.', note: '三动词排比递进，语言工整有力' },
          lowScore: { en: 'This dream includes the wishes of many generations of Chinese people, shows the interests of all Chinese, and is the hope of every Chinese person.', note: 'includes/shows/is 三个动词缺乏层次递进，all Chinese 不如 the Chinese nation 正式' }
        }
      },
      {
        id: 'p17s4',
        cn: '实现中国梦必须走中国道路，弘扬中国精神，凝聚中国力量。',
        en: 'To realize the Chinese Dream, we must follow the Chinese path, carry forward the Chinese spirit, and pool Chinese strength together.',
        annotations: [
          { fragment: 'follow the Chinese path', type: 'phrase', label: '动词搭配', detail: '"走中国道路"译为 follow the Chinese path，path 是政治文献中"道路"的标准译法' },
          { fragment: 'pool Chinese strength together', type: 'phrase', label: '动词选用', detail: '"凝聚力量"译为 pool strength，pool 作动词意为"汇聚/集中"，比 gather 更形象' }
        ],
        technique: {
          difficulty: 2,
          structure: '不定式目的状语 + 三并列动宾结构',
          structureAnalysis: 'To realize... 目的状语，we must A, B, and C，三个动宾短语并列（follow / carry forward / pool）',
          whyGood: '不定式表目的+must 表达必要性+三"中国"概念排比，口号式表达在英文中保留排比节奏。',
          keyVocab: ['follow the path', 'carry forward', 'pool strength'],
          substitutionGuide: '"弘扬"还可译 promote / champion / uphold；"凝聚"可译 gather / rally / harness',
          sentencePattern: 'To realize A, we must do B, do C, and do D.',
          highScore: { en: 'To realize the Chinese Dream, we must follow the Chinese path, carry forward the Chinese spirit, and pool Chinese strength together.', note: '不定式目的+三动宾排比，口号译法节奏分明' },
          lowScore: { en: 'If we want to realize the Chinese Dream, we have to walk on the Chinese road, spread the Chinese spirit, and gather Chinese power.', note: 'walk on the road 是中式英语（应为 follow the path），spread 搭配 spirit 不自然' }
        }
      },
      {
        id: 'p17s5',
        cn: '历史已经证明并将继续证明，在中国共产党的领导下，中国梦必将实现。',
        en: 'History has proven and will continue to prove that under the leadership of the Communist Party of China, the Chinese Dream will surely be realized.',
        annotations: [
          { fragment: 'has proven and will continue to prove', type: 'grammar', label: '完成时+将来时并列', detail: '现在完成时+将来时并列谓语，传达"已经证明并将继续证明"的时间跨度' },
          { fragment: 'under the leadership of', type: 'phrase', label: '介词短语', detail: '"在...领导下"标准译法 under the leadership of，注意用 under 不用 in' }
        ],
        technique: {
          difficulty: 2,
          structure: '主句(现在完成时+将来时并列) + that引导宾语从句 + under介词短语 + 主谓',
          structureAnalysis: 'History has proven and will prove that...under the leadership of...，the Chinese Dream will be realized',
          whyGood: 'has proven and will continue to prove 时态并列传达从过去到未来的确定性，will surely be realized 被动语态比主动更有庄严感。',
          keyVocab: ['has proven', 'will continue to prove', 'under the leadership of', 'will surely be realized'],
          substitutionGuide: '"必将"还可译 is bound to / is destined to；"证明"也可译 demonstrate / confirm',
          sentencePattern: 'A has proven and will continue to prove that under B, C will surely be done.',
          highScore: { en: 'History has proven and will continue to prove that under the leadership of the Communist Party of China, the Chinese Dream will surely be realized.', note: 'has proven and will continue to prove 时态并列，will surely be realized 被动收束有力' },
          lowScore: { en: 'History already proved and will keep proving that with the Communist Party of China leading us, the Chinese Dream will definitely come true.', note: 'will keep proving 不如 will continue to prove 正式，with...leading us 不符合政治文献语域' }
        }
      }
    ]
  },
  // p18. 丝绸之路 (2022.12)
  {
    id: 'p18',
    level: 'CET-4',
    title: '丝绸之路',
    year: '2022.12',
    topic: '历史遗迹',
    difficulty: 2,
    fullCN: '丝绸之路是古代连接东西方文明的重要通道，因运输中国丝绸而得名。这条路线不仅促进了商品的交换，更推动了文化、宗教和科技的交流。通过丝绸之路，中国的造纸术、火药、印刷术等伟大发明传播到西方，而佛教、伊斯兰教等宗教文化也传入了中国。如今，丝绸之路的精神在"一带一路"倡议中得到了延续和升华，古老的商路焕发出新的活力。',
    fullEN: 'The Silk Road was an important route connecting Eastern and Western civilizations in ancient times, named after the Chinese silk transported along it. This route not only facilitated the exchange of goods but also promoted cultural, religious, and technological exchanges. Through the Silk Road, great Chinese inventions such as papermaking, gunpowder, and printing spread to the West, while religious cultures such as Buddhism and Islam were introduced into China. Today, the spirit of the Silk Road has been continued and elevated in the Belt and Road Initiative, and the ancient trade route is radiating new vitality.',
    sentences: [
      {
        id: 'p18s1',
        cn: '丝绸之路是古代连接东西方文明的重要通道，因运输中国丝绸而得名。',
        en: 'The Silk Road was an important route connecting Eastern and Western civilizations in ancient times, named after the Chinese silk transported along it.',
        annotations: [
          { fragment: 'connecting Eastern and Western civilizations', type: 'grammar', label: '现在分词后置定语', detail: '现在分词 connecting 修饰 route，比定语从句 that connected 更简洁' },
          { fragment: 'named after the Chinese silk transported along it', type: 'grammar', label: '过去分词状语', detail: 'named after... 过去分词短语表原因，"因...而得名"的简洁译法' }
        ],
        technique: {
          difficulty: 2,
          structure: '主系表 + 现在分词定语 + 过去分词状语',
          structureAnalysis: 'The Silk Road was a route，connecting... 修饰 route，named after... 补充得名原因',
          whyGood: 'connecting 分词定语+named after 分词状语，两个分词短语将定义和来源自然连接。',
          keyVocab: ['the Silk Road', 'connecting', 'Eastern and Western civilizations', 'ancient times', 'named after'],
          substitutionGuide: '"通道"还可译 passage / corridor / thoroughfare；"得名"可译 got its name from',
          sentencePattern: 'A was an important B doing C, named after D.',
          highScore: { en: 'The Silk Road was an important route connecting Eastern and Western civilizations in ancient times, named after the Chinese silk transported along it.', note: '两个分词短语（connecting + named after）简洁连接双重信息' },
          lowScore: { en: 'The Silk Road was an important road in ancient times. It connected the East and the West. Its name came from the Chinese silk that was carried on this road.', note: '三短句松散，road 不如 route 准确，East and West 不如 Eastern and Western civilizations 完整' }
        }
      },
      {
        id: 'p18s2',
        cn: '这条路线不仅促进了商品的交换，更推动了文化、宗教和科技的交流。',
        en: 'This route not only facilitated the exchange of goods but also promoted cultural, religious, and technological exchanges.',
        annotations: [
          { fragment: 'not only facilitated...but also promoted', type: 'grammar', label: '递进结构', detail: 'not only...but also 递进，"促进"→"推动"语气升级，facilitated→promoted 对应升级' },
          { fragment: 'cultural, religious, and technological exchanges', type: 'grammar', label: '三项形容词+名词', detail: '三个形容词并列修饰 exchanges，对应"文化、宗教和科技"' }
        ],
        technique: {
          difficulty: 1,
          structure: 'not only...but also 递进 + 三项形容词并列',
          structureAnalysis: 'This route not only facilitated X, but also promoted A, B, and C exchanges',
          whyGood: 'facilitated（促进）/ promoted（推动）两个动词程度递增，精准对应中文"不仅促进...更推动..."。',
          keyVocab: ['facilitated', 'promoted', 'exchange of goods', 'cultural exchanges', 'religious exchanges', 'technological exchanges'],
          substitutionGuide: '"促进"还可译 boosted / advanced / spurred；"商品交换"可译 trade of commodities',
          sentencePattern: 'A not only facilitated the exchange of B, but also promoted C, D, and E exchanges.',
          highScore: { en: 'This route not only facilitated the exchange of goods but also promoted cultural, religious, and technological exchanges.', note: 'facilitated→promoted 动词递进+三项形容词并列' },
          lowScore: { en: 'This road not only helped goods exchange but also pushed forward culture, religion and technology exchanges.', note: 'helped 和 pushed forward 不够正式，exchanges 前缺形容词导致语义模糊' }
        }
      },
      {
        id: 'p18s3',
        cn: '通过丝绸之路，中国的造纸术、火药、印刷术等伟大发明传播到西方，而佛教、伊斯兰教等宗教文化也传入了中国。',
        en: 'Through the Silk Road, great Chinese inventions such as papermaking, gunpowder, and printing spread to the West, while religious cultures such as Buddhism and Islam were introduced into China.',
        annotations: [
          { fragment: 'great Chinese inventions such as', type: 'grammar', label: 'such as 列举', detail: 'such as 引出具体发明，比 including 更常用于非穷尽列举' },
          { fragment: 'spread to the West', type: 'phrase', label: '动词过去式', detail: 'spread 为不规则动词，原形-过去式-过去分词同形，注意不要写成 spreaded' },
          { fragment: 'were introduced into China', type: 'grammar', label: '被动语态', detail: '"传入了"用被动语态 were introduced into，强调外力带来的传入过程' }
        ],
        technique: {
          difficulty: 2,
          structure: 'Through状语 + 主谓(such as举例) + while对比并列句(被动语态)',
          structureAnalysis: 'Through...，A spread to B，while C were introduced into D，while 表双向对比',
          whyGood: 'while 连接两个反向传播的句子（中国→西方 vs 西方→中国），用 spread（主动）和 were introduced（被动）区分传播方式的差异。',
          keyVocab: ['papermaking', 'gunpowder', 'printing', 'spread to', 'Buddhism', 'Islam', 'were introduced'],
          substitutionGuide: '"传播到"还可译 found their way to / reached；"四大发明"通常译 the Four Great Inventions of ancient China',
          sentencePattern: 'Through A, B such as X, Y, and Z spread to C, while D such as E and F were introduced into G.',
          highScore: { en: 'Through the Silk Road, great Chinese inventions such as papermaking, gunpowder, and printing spread to the West, while religious cultures such as Buddhism and Islam were introduced into China.', note: 'while 对比+主被动区分，双向传播逻辑清晰' },
          lowScore: { en: 'Through the Silk Road, China\'s papermaking, gunpowder and printing went to the West. And Buddhism and Islam also came to China.', note: 'went to / came to 过于随意，丢失了"传播/传入"的正式语义，两个短句缺少对比感' }
        }
      },
      {
        id: 'p18s4',
        cn: '如今，丝绸之路的精神在"一带一路"倡议中得到了延续和升华，古老的商路焕发出新的活力。',
        en: 'Today, the spirit of the Silk Road has been continued and elevated in the Belt and Road Initiative, and the ancient trade route is radiating new vitality.',
        annotations: [
          { fragment: 'has been continued and elevated', type: 'grammar', label: '现在完成时被动', detail: '现在完成时被动 has been continued and elevated，强调从过去到现在的延续和提升' },
          { fragment: 'is radiating new vitality', type: 'phrase', label: '现在进行时比喻', detail: '"焕发活力"译为 radiate vitality，radiate 本义"辐射"，比喻活力四射' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主句(现在完成时被动) + and + 并列句(现在进行时)',
          structureAnalysis: 'Today, the spirit has been continued and elevated，and the route is radiating vitality',
          whyGood: 'has been continued and elevated 完成时被动体现"得到延续和升华"，is radiating 进行时体现当前正在焕发的过程。',
          keyVocab: ['has been continued and elevated', 'Belt and Road Initiative', 'ancient trade route', 'radiating', 'new vitality'],
          substitutionGuide: '"升华"还可译 sublimated / taken to a higher level；"焕发"可译 burst forth with / glow with',
          sentencePattern: 'Today, the spirit of A has been continued and elevated in B, and C is radiating new D.',
          highScore: { en: 'Today, the spirit of the Silk Road has been continued and elevated in the Belt and Road Initiative, and the ancient trade route is radiating new vitality.', note: '完成时被动+进行时比喻，时间层次分明' },
          lowScore: { en: 'Now the Silk Road spirit continues and becomes better in the Belt and Road project. The old trade road has new energy.', note: 'continues and becomes better 无力，project 不如 Initiative 正式，has new energy 平淡' }
        }
      }
    ]
  },
  // p19. 中国文学 (2022.6)
  {
    id: 'p19',
    level: 'CET-4',
    title: '中国文学',
    year: '2022.6',
    topic: '中国文化',
    difficulty: 3,
    fullCN: '中国文学源远流长，从《诗经》到唐诗宋词，从元曲到明清小说，每个时代都有其代表性的文学成就。四大名著——《红楼梦》《西游记》《水浒传》《三国演义》——代表了中国古典小说的最高水准，被翻译成多种语言，在世界范围内拥有大量读者。当代中国文学也展现出了蓬勃的生命力，多位中国作家获得国际文学奖项，莫言更是于2012年荣获诺贝尔文学奖。',
    fullEN: 'Chinese literature has a long and rich history. From The Book of Songs to Tang poetry and Song lyrics, from Yuan drama to Ming and Qing novels, every era has its representative literary achievements. The Four Great Classical Novels — Dream of the Red Chamber, Journey to the West, Water Margin, and Romance of the Three Kingdoms — represent the highest level of classical Chinese fiction and have been translated into many languages, attracting a vast readership worldwide. Contemporary Chinese literature also displays vigorous vitality, with many Chinese writers winning international literary awards, and Mo Yan being awarded the Nobel Prize in Literature in 2012.',
    sentences: [
      {
        id: 'p19s1',
        cn: '中国文学源远流长，从《诗经》到唐诗宋词，从元曲到明清小说，每个时代都有其代表性的文学成就。',
        en: 'Chinese literature has a long and rich history. From The Book of Songs to Tang poetry and Song lyrics, from Yuan drama to Ming and Qing novels, every era has its representative literary achievements.',
        annotations: [
          { fragment: 'has a long and rich history', type: 'phrase', label: '四字格译法', detail: '"源远流长"译为 has a long and rich history，用 long 和 rich 两个形容词传达深度和广度' },
          { fragment: 'From...to..., from...to...', type: 'grammar', label: '排比 from...to 结构', detail: '两组 from...to 构成平行排比，列举文学体裁的历史脉络' },
          { fragment: 'The Book of Songs', type: 'term', label: '书名译法', detail: '《诗经》标准英译名，注意 Book 首字母大写且用复数 Songs' }
        ],
        technique: {
          difficulty: 3,
          structure: '短句定性 + from...to 排比列举 + 结论句',
          structureAnalysis: '先以短句定性，再用两组 from...to 展示历史跨度，最后总结',
          whyGood: '中文四字格拆成两句话处理，from...to 排比保留原文的列举节奏。',
          keyVocab: ['long and rich history', 'The Book of Songs', 'Tang poetry', 'Song lyrics', 'Yuan drama', 'representative literary achievements'],
          substitutionGuide: '"源远流长"还可译 has a time-honored history / has a history stretching back thousands of years',
          sentencePattern: 'A has a long and rich history. From B to C, from D to E, every era has its representative F.',
          highScore: { en: 'Chinese literature has a long and rich history. From The Book of Songs to Tang poetry and Song lyrics, from Yuan drama to Ming and Qing novels, every era has its representative literary achievements.', note: '拆两句处理四字格，from...to 排比展现历史纬度' },
          lowScore: { en: 'Chinese literature has a very long history. From Shijing to Tang poems and Song poems, from Yuan plays to Ming-Qing novels, each time has its important literature achievements.', note: 'Shijing 未用标准译名，Song poems 不准确（应为 lyrics），each time 生硬' }
        }
      },
      {
        id: 'p19s2',
        cn: '四大名著——《红楼梦》《西游记》《水浒传》《三国演义》——代表了中国古典小说的最高水准，被翻译成多种语言，在世界范围内拥有大量读者。',
        en: 'The Four Great Classical Novels — Dream of the Red Chamber, Journey to the West, Water Margin, and Romance of the Three Kingdoms — represent the highest level of classical Chinese fiction and have been translated into many languages, attracting a vast readership worldwide.',
        annotations: [
          { fragment: 'The Four Great Classical Novels', type: 'term', label: '文化术语', detail: '"四大名著"的通行译法，作为专有名词首字母大写；不用 famous books' },
          { fragment: 'represent the highest level of classical Chinese fiction', type: 'phrase', label: '评价用语', detail: 'fiction 指小说类文学，比 novels 更具概括性，避免重复' },
          { fragment: 'attracting a vast readership worldwide', type: 'grammar', label: '分词状语', detail: '现在分词短语表伴随结果，替代 and attract，句式更紧凑' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语(含插入语列举) + 谓语 + and并列 + 分词状语',
          structureAnalysis: 'The four novels — A, B, C, D — represent...and have been translated...，attracting... 分词收尾',
          whyGood: '破折号插入列举四部作品名（英文书名用斜体/首字母大写），并列谓语 represent + have been translated，attracting 分词收束。',
          keyVocab: ['Four Great Classical Novels', 'classical Chinese fiction', 'vast readership', 'worldwide'],
          substitutionGuide: '"最高水准"还可译 the highest standard / the pinnacle；"拥有读者"可译 enjoys a large following',
          sentencePattern: 'The N — A, B, C, and D — represent/are the highest Y, having been done..., doing Z.',
          highScore: { en: 'The Four Great Classical Novels — Dream of the Red Chamber, Journey to the West, Water Margin, and Romance of the Three Kingdoms — represent the highest level of classical Chinese fiction and have been translated into many languages, attracting a vast readership worldwide.', note: '破折号插入列举+并列谓语+分词状语，多信息层次分明' },
          lowScore: { en: 'Four famous books are Dream of the Red Chamber, Journey to the West, Water Margin and Three Kingdoms. They are the best Chinese old novels and have been translated into many languages and have many readers in the world.', note: 'famous books 不准确，best Chinese old novels 语序混乱，用 and 简单堆砌缺乏层次' }
        }
      },
      {
        id: 'p19s3',
        cn: '当代中国文学也展现出了蓬勃的生命力，多位中国作家获得国际文学奖项，莫言更是于2012年荣获诺贝尔文学奖。',
        en: 'Contemporary Chinese literature also displays vigorous vitality, with many Chinese writers winning international literary awards, and Mo Yan being awarded the Nobel Prize in Literature in 2012.',
        annotations: [
          { fragment: 'displays vigorous vitality', type: 'phrase', label: '主谓搭配', detail: '"展现蓬勃生命力"译为 display vigorous vitality，vitality 比 life force 更常用于文学艺术' },
          { fragment: 'with many Chinese writers winning', type: 'grammar', label: 'with独立主格', detail: 'with + 名词 + 现在分词构成的独立主格结构，补充说明主句' },
          { fragment: 'being awarded the Nobel Prize in Literature', type: 'grammar', label: '被动语态', detail: 'being awarded 动名词被动式作介词 and 的宾语，与 winning 并列' }
        ],
        technique: {
          difficulty: 3,
          structure: '主句 + with独立主格 + and + 动名词被动式',
          structureAnalysis: '主句 displays...vitality，with...winning... 独立主格表伴随，and Mo Yan being awarded... 递进举例',
          whyGood: 'with 独立主格避免另起一句，三个层次的信息（总体→群体→个体）融合在一个英文长句中。',
          keyVocab: ['contemporary', 'displays', 'vigorous vitality', 'international literary awards', 'Nobel Prize in Literature'],
          substitutionGuide: '"蓬勃的"还可译 thriving / flourishing；"荣获"可译 won / received / was honored with',
          sentencePattern: 'A displays/possesses X, with B doing C, and D being done (by E).',
          highScore: { en: 'Contemporary Chinese literature also displays vigorous vitality, with many Chinese writers winning international literary awards, and Mo Yan being awarded the Nobel Prize in Literature in 2012.', note: 'with独立主格+动名词被动式，三层次信息自然融合' },
          lowScore: { en: 'Contemporary Chinese literature also shows strong life. Many Chinese writers get international literature prizes. Mo Yan even won the Nobel Prize in Literature in 2012.', note: '三句独立缺少逻辑衔接，shows strong life 是中式英语，literature prizes 不如 literary awards 地道' }
        }
      }
    ]
  },
  // p20. 中国成语文化 (2022.6)
  {
    id: 'p20',
    level: 'CET-4',
    title: '中国成语文化',
    year: '2022.6',
    topic: '中国文化',
    difficulty: 2,
    fullCN: '成语是汉语中经过长期使用和锤炼而形成的固定短语，大多由四个字组成。每个成语背后都有一个历史故事或深刻寓意，承载着丰富的文化内涵和人生智慧。例如，"画龙点睛"比喻说话或写作时在关键处加上精辟的语句，使内容更加生动有力。学习和掌握成语是理解中国文化的重要窗口，也是提高汉语表达能力的关键途径。',
    fullEN: 'Chinese idioms are set phrases that have been refined through long-term use in the Chinese language, most of which consist of four characters. Behind each idiom lies a historical story or profound moral, carrying rich cultural connotations and life wisdom. For example, "huà lóng diǎn jīng" (adding the finishing touch) is used as a metaphor for adding a brilliant remark at a crucial point in speech or writing to make the content more vivid and powerful. Learning and mastering Chinese idioms serves as an important window into understanding Chinese culture and is a key way to improve Chinese language proficiency.',
    sentences: [
      {
        id: 'p20s1',
        cn: '成语是汉语中经过长期使用和锤炼而形成的固定短语，大多由四个字组成。',
        en: 'Chinese idioms are set phrases that have been refined through long-term use in the Chinese language, most of which consist of four characters.',
        annotations: [
          { fragment: 'set phrases that have been refined through long-term use', type: 'grammar', label: '定语从句+完成时被动', detail: 'that have been refined 定语从句修饰 set phrases，现在完成时强调从过去到现在的提炼过程' },
          { fragment: 'most of which consist of four characters', type: 'grammar', label: '非限定性定语从句', detail: 'most of which 引导非限定定语从句，which 指代 set phrases' }
        ],
        technique: {
          difficulty: 2,
          structure: '主系表 + that定语从句 + most of which定语从句',
          structureAnalysis: 'Idioms are set phrases that have been refined...，most of which consist of... 补充信息',
          whyGood: '两个定语从句（限定+非限定）层次分明：that 定义核心特征，most of which 补充数量特征。',
          keyVocab: ['set phrases', 'refined', 'long-term use', 'consist of', 'four characters'],
          substitutionGuide: '"锤炼"还可译 polished / honed / tempered；"组成"可译 are made up of / are composed of',
          sentencePattern: 'A are B that have been done through C, most of which consist of D.',
          highScore: { en: 'Chinese idioms are set phrases that have been refined through long-term use in the Chinese language, most of which consist of four characters.', note: '两层定语从句（限定+非限定）层次清晰' },
          lowScore: { en: 'Chengyu is a kind of fixed phrase in Chinese. It is formed by long time use. Most chengyu have four words.', note: '三短句松散，fixed phrase formed by long time use 表达生硬，words 应为 characters' }
        }
      },
      {
        id: 'p20s2',
        cn: '每个成语背后都有一个历史故事或深刻寓意，承载着丰富的文化内涵和人生智慧。',
        en: 'Behind each idiom lies a historical story or profound moral, carrying rich cultural connotations and life wisdom.',
        annotations: [
          { fragment: 'Behind each idiom lies', type: 'grammar', label: '倒装句', detail: '介词短语 Behind each idiom 置于句首引起完全倒装，主语 a historical story or profound moral 后置，比正常语序更有文采' },
          { fragment: 'carrying rich cultural connotations', type: 'grammar', label: '分词状语', detail: '现在分词 carrying 表伴随状态，补充说明成语的文化属性' }
        ],
        technique: {
          difficulty: 2,
          structure: '介词短语倒装 + 主语 + 分词状语',
          structureAnalysis: 'Behind each idiom 地点状语前置倒装，lies a story or moral 主谓倒装，carrying... 分词补充',
          whyGood: '介词短语倒装使句子更有文学性，carrying 分词自然收尾。',
          keyVocab: ['behind each...lies', 'profound moral', 'cultural connotations', 'life wisdom'],
          substitutionGuide: '"寓意"还可译 implied meaning / allegory / message；"承载"可译 bear / embody / contain',
          sentencePattern: 'Behind each A lies a B, carrying rich C and D.',
          highScore: { en: 'Behind each idiom lies a historical story or profound moral, carrying rich cultural connotations and life wisdom.', note: '倒装句+分词状语，富有文采' },
          lowScore: { en: 'There is a historical story or deep meaning behind every idiom. It carries rich cultural meanings and life wisdom.', note: 'There be 句型平淡，拆两句破坏一气呵成的语感' }
        }
      },
      {
        id: 'p20s3',
        cn: '"画龙点睛"比喻说话或写作时在关键处加上精辟的语句，使内容更加生动有力。',
        en: '"huà lóng diǎn jīng" (adding the finishing touch) is used as a metaphor for adding a brilliant remark at a crucial point in speech or writing to make the content more vivid and powerful.',
        annotations: [
          { fragment: '"huà lóng diǎn jīng" (adding the finishing touch)', type: 'vocab', label: '成语翻译策略', detail: '先拼音再加英文释义，是学术写作中翻译成语的标准做法' },
          { fragment: 'is used as a metaphor for', type: 'phrase', label: '比喻表达', detail: '"比喻"译为 is used as a metaphor for，比 is like 更正式，符合说明文体' }
        ],
        technique: {
          difficulty: 3,
          structure: '拼音(英文释义) + 被动语态 + 不定式目的状语',
          structureAnalysis: '"X" (Y) is used as a metaphor for doing A to do B，被动语态+不定式目的',
          whyGood: '拼音+意译+英语对应习语的三层处理是成语翻译的标准范式，adding a brilliant remark at a crucial point 准确解释比喻义。',
          keyVocab: ['adding the finishing touch', 'metaphor', 'brilliant remark', 'crucial point', 'vivid and powerful'],
          substitutionGuide: '"精辟的"还可译 incisive / penetrating / insightful；"关键处"可译 key moment / critical juncture',
          sentencePattern: '"X" (Y) is used as a metaphor for doing A at B to make C more D and E.',
          highScore: { en: '"huà lóng diǎn jīng" (adding the finishing touch) is used as a metaphor for adding a brilliant remark at a crucial point in speech or writing to make the content more vivid and powerful.', note: '拼音+释义+英语习语三层处理，解释清晰' },
          lowScore: { en: '"Drawing the dragon and dotting its eyes" means to add something important to make the content better.', note: '字面直译丢失了文化含义，add something important 太模糊，make the content better 语气单薄' }
        }
      },
      {
        id: 'p20s4',
        cn: '学习和掌握成语是理解中国文化的重要窗口，也是提高汉语表达能力的关键途径。',
        en: 'Learning and mastering Chinese idioms serves as an important window into understanding Chinese culture and is a key way to improve Chinese language proficiency.',
        annotations: [
          { fragment: 'Learning and mastering', type: 'grammar', label: '动名词并列主语', detail: '两个动名词并列作主语，用单数谓语 serves，因为被视为一个整体概念' },
          { fragment: 'serves as an important window into', type: 'phrase', label: '比喻表达', detail: '"是...的重要窗口"译为 serves as a window into...，window into 是英文惯用比喻' }
        ],
        technique: {
          difficulty: 2,
          structure: '动名词并列主语 + 单数谓语 + 表语 + and + 并列表语',
          structureAnalysis: 'Learning and mastering... serves as A and is B，单主语双谓语结构',
          whyGood: 'Learning and mastering 视为一个整体用单数谓语 serves，符合英语习惯。window into 比 window to 更能体现深入的理解。',
          keyVocab: ['serves as', 'window into', 'key way', 'language proficiency'],
          substitutionGuide: '"掌握"还可译 commanding / acquiring；"途径"可译 means / channel / path',
          sentencePattern: 'Doing A and doing B serves as a C into understanding D and is a key way to improve E.',
          highScore: { en: 'Learning and mastering Chinese idioms serves as an important window into understanding Chinese culture and is a key way to improve Chinese language proficiency.', note: '动名词整体主语+单谓语+双表语并列' },
          lowScore: { en: 'To learn and master chengyu is an important window to understand Chinese culture and is also a key method to improve Chinese expression ability.', note: 'To learn 不如动名词，window to 不如 window into，expression ability 是中式英语应为 proficiency' }
        }
      }
    ]
  }
];
