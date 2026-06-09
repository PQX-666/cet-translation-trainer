// 10篇深度标注真题 (按年份由新到旧排序 2023.12–2025.6) — p1-p10

export const passagesPart1 = [
  // p1. 绿色经济 (2025.12)
  {
    id: 'p1',
    title: '绿色经济',
    year: '2025.12',
    topic: '生态环境',
    difficulty: 3,
    fullCN: '中国政府十分重视绿色经济的发展。通过加强森林资源保护、加大污染治理力度等一系列措施，许多地区的生态环境得到了显著改善。绿水青山促进了当地的旅游、健康等产业的发展，创造了可观的经济效益。如今，生态环境与人类社会和谐共存的观念在中国已深入人心。绿色经济的推进不仅能为中国可持续发展做出贡献，也为全球环境保护提供了宝贵经验。',
    fullEN: 'The Chinese government attaches great importance to the development of the green economy. Through a series of measures such as strengthening forest resource protection and intensifying pollution control efforts, the ecological environment in many regions has been significantly improved. Lucid waters and lush mountains have promoted the development of local tourism, health, and other industries, creating considerable economic benefits. Today, the concept of harmonious coexistence between the ecological environment and human society has taken root in China. The advancement of the green economy can not only contribute to China\'s sustainable development but also provide valuable experience for global environmental protection.',
    sentences: [
      {
        id: 'p1-s0',
        cn: '中国政府十分重视绿色经济的发展。',
        en: 'The Chinese government attaches great importance to the development of the green economy.',
        annotations: [
          { fragment: 'attaches great importance to', type: 'phrase', label: '十分重视', detail: 'attach importance to = 重视。great = 十分/极大地。比 pays attention to 更正式有力。' },
          { fragment: 'green economy', type: 'vocab', label: '绿色经济', detail: 'green economy = 绿色经济。green = 环保的/绿色的。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + attaches great importance to + 名词短语',
          structureAnalysis: '(The Chinese government) → attaches great importance to → (the development of the green economy)',
          whyGood: '① attaches great importance to 是\'重视\'的标准高级表达 ② green economy 标准术语。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 attaches great importance to → values highly / pays close attention to / prioritizes',
          sentencePattern: '\'A十分重视B的发展\' → \'A attaches great importance to the development of B\'',
          highScore: { en: '', note: 'attaches great importance to 表达正式到位' },
          lowScore: { en: '', note: 'thinks...is very important 不如 attaches great importance to 简洁正式。评分 10-12 分档。' }
        }
      },
      {
        id: 'p1-s1',
        cn: '通过加强森林资源保护、加大污染治理力度等一系列措施，许多地区的生态环境得到了显著改善。',
        en: 'Through a series of measures such as strengthening forest resource protection and intensifying pollution control efforts, the ecological environment in many regions has been significantly improved.',
        annotations: [
          { fragment: 'Through a series of measures', type: 'structure', label: '通过一系列措施', detail: 'Through + 名词短语 = 通过...。a series of = 一系列的。' },
          { fragment: 'strengthening...protection and intensifying...efforts', type: 'structure', label: '加强保护和加大力度', detail: 'strengthen = 加强。intensify = 加大（力度）。两个动名词并列表达\'加强...和加大...\'。' },
          { fragment: 'has been significantly improved', type: 'structure', label: '得到了显著改善', detail: '现在完成时被动语态 has been improved = 已得到改善。significantly = 显著地。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Through + 名词 + such as doing A and doing B + 主语 + has been significantly improved',
          structureAnalysis: '(Through a series of measures such as strengthening forest resource protection and intensifying pollution control efforts) → (the ecological environment in many regions) → has been → significantly improved',
          whyGood: '① Through...measures such as 引出措施清单 ② strengthening/intensifying 动词变化避免重复 ③ has been significantly improved 现在完成时被动表达改善结果。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 intensify → strengthen / step up / increase；不会 significantly → remarkably / notably / greatly；不会 ecological environment → natural environment / ecosystem',
          sentencePattern: '\'通过加强A保护、加大B力度等一系列措施，C得到了显著改善\' → \'Through a series of measures such as strengthening A protection and intensifying B efforts, C has been significantly improved\'',
          highScore: { en: '', note: 'Through + such as + strengthening/intensifying + has been significantly improved 层层递进' },
          lowScore: { en: '', note: 'By...actions 不如 Through...measures + making...stronger 不如 strengthening + places\' 不如 regions\' + become much better 不如 been significantly improved。评分 8-10 分档。' }
        }
      },
      {
        id: 'p1-s2',
        cn: '绿水青山促进了当地的旅游、健康等产业的发展，创造了可观的经济效益。',
        en: 'Lucid waters and lush mountains have promoted the development of local tourism, health, and other industries, creating considerable economic benefits.',
        annotations: [
          { fragment: 'Lucid waters and lush mountains', type: 'vocab', label: '绿水青山', detail: 'lucid = 清澈的。lush = 葱翠的。lucid waters and lush mountains = 绿水青山，\'两山理论\'的标准译法。' },
          { fragment: 'creating considerable economic benefits', type: 'structure', label: '创造了可观的经济效益', detail: '现在分词 creating 表示结果。considerable = 可观的/相当大的。economic benefits = 经济效益。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语(lucid waters and lush mountains) + have promoted + 宾语 + 现在分词(creating...)',
          structureAnalysis: '(Lucid waters and lush mountains) → have promoted → (the development of local tourism, health, and other industries) → creating (considerable economic benefits)',
          whyGood: '① Lucid waters and lush mountains 是\'绿水青山\'的标准翻译 ② have promoted 现在完成时表达持续促进 ③ creating 分词收尾处理经济效益。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 Lucid waters and lush mountains → clean rivers and green mountains / clear waters and green hills；不会 considerable → significant / substantial / sizeable',
          sentencePattern: '\'绿水青山促进了A等产业的发展，创造了可观的B\' → \'Lucid waters and lush mountains have promoted the development of A and other industries, creating considerable B\'',
          highScore: { en: '', note: 'Lucid waters and lush mountains + creating 分词 地道' },
          lowScore: { en: '', note: 'Green water/green mountains 重复 green + travel 不如 tourism + made...results 不如 creating...benefits。评分 8-10 分档。' }
        }
      },
      {
        id: 'p1-s3',
        cn: '如今，生态环境与人类社会和谐共存的观念在中国已深入人心。',
        en: 'Today, the concept of harmonious coexistence between the ecological environment and human society has taken root in China.',
        annotations: [
          { fragment: 'harmonious coexistence', type: 'vocab', label: '和谐共存', detail: 'harmonious = 和谐的。coexistence = 共存/共处。harmonious coexistence = 和谐共存。' },
          { fragment: 'has taken root', type: 'phrase', label: '深入人心/扎根', detail: 'take root = 扎根/深入人心。has taken root 现在完成时表达观念已确立。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + has taken root + 地点状语',
          structureAnalysis: '(The concept of harmonious coexistence between the ecological environment and human society) → has taken root → in China',
          whyGood: '① harmonious coexistence 精准表达\'和谐共存\' ② has taken root 比 has been widely accepted 更生动，保留\'扎根\'的比喻。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 harmonious coexistence → living together peacefully / harmony between；不会 taken root → been widely accepted / been deeply rooted / been established',
          sentencePattern: '\'如今，A与B和谐共存的观念在中国已深入人心\' → \'Today, the concept of harmonious coexistence between A and B has taken root in China\'',
          highScore: { en: '', note: 'harmonious coexistence + has taken root 表达精准' },
          lowScore: { en: '', note: 'environment 不如 ecological environment + live together peacefully 不如 harmonious coexistence + popular 不如 taken root。评分 8-10 分档。' }
        }
      },
      {
        id: 'p1-s4',
        cn: '绿色经济的推进不仅能为中国可持续发展做出贡献，也为全球环境保护提供了宝贵经验。',
        en: 'The advancement of the green economy can not only contribute to China\'s sustainable development but also provide valuable experience for global environmental protection.',
        annotations: [
          { fragment: 'The advancement of the green economy', type: 'structure', label: '绿色经济的推进', detail: 'the advancement of = ...的推进/进步。名词化表达作为主语，比 advancing the green economy 更正式。' },
          { fragment: 'not only...but also...', type: 'structure', label: '不仅...也...', detail: 'not only contribute to...but also provide... = 不仅为...做贡献，也提供...。' },
          { fragment: 'sustainable development', type: 'vocab', label: '可持续发展', detail: 'sustainable = 可持续的。sustainable development = 可持续发展。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + can not only contribute to A + but also provide B for C',
          structureAnalysis: '(The advancement of the green economy) → can → not only contribute to (China\'s sustainable development) → but also provide (valuable experience) → for (global environmental protection)',
          whyGood: '① 名词化主语 The advancement of 比动名词更正式 ② not only...but also 对应\'不仅...也\' ③ sustainable development 标准术语 ④ valuable experience 精准表达\'宝贵经验\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 advancement → promotion / progress / push forward；不会 sustainable development → lasting development / green growth；不会 valuable experience → precious lessons / useful reference',
          sentencePattern: '\'A的推进不仅能为B做出贡献，也为C提供了宝贵经验\' → \'The advancement of A can not only contribute to B but also provide valuable experience for C\'',
          highScore: { en: '', note: '名词化主语 + not only...but also + sustainable development + valuable experience 表达高级' },
          lowScore: { en: '', note: 'Pushing forward 不如 The advancement + help 不如 contribute to + growth 不如 development + give 不如 provide。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p2. 民营经济 (2025.12)
  {
    id: 'p2',
    title: '民营经济',
    year: '2025.12',
    topic: '经济发展',
    difficulty: 3,
    fullCN: '近年来，中国政府高度重视民营经济的发展，出台了一系列政策支持民营企业。截至2025年3月底，全国民营企业数量超过5700万家，占企业总量的92.3%。民营企业不仅数量稳步增长，质量和结构也在不断提升。民营企业的研发投入不断增加，在新一代信息技术、人工智能等领域发展迅速。民营企业核心竞争力的增强为中国经济的高质量发展提供了有力支撑。',
    fullEN: 'In recent years, the Chinese government has attached great importance to the development of the private economy and has introduced a series of policies to support private enterprises. By the end of March 2025, the number of private enterprises nationwide had exceeded 57 million, accounting for 92.3% of the total number of enterprises. Not only has the number of private enterprises grown steadily, but their quality and structure have also been continuously improving. The R&D investment of private enterprises has been increasing, and they have been developing rapidly in fields such as the new generation of information technology and artificial intelligence. The enhanced core competitiveness of private enterprises has provided strong support for the high-quality development of China\'s economy.',
    sentences: [
      {
        id: 'p2-s0',
        cn: '近年来，中国政府高度重视民营经济的发展，出台了一系列政策支持民营企业。',
        en: 'In recent years, the Chinese government has attached great importance to the development of the private economy and has introduced a series of policies to support private enterprises.',
        annotations: [
          { fragment: 'has attached great importance to', type: 'phrase', label: '高度重视', detail: 'attach importance to = 重视。great = 高度/极大。现在完成时强调近年来的持续重视。' },
          { fragment: 'has introduced a series of policies', type: 'structure', label: '出台了一系列政策', detail: 'introduce = 出台/推出。policies = 政策。has introduced 现在完成时表达已出台的举措。' },
          { fragment: 'private enterprises', type: 'vocab', label: '民营企业', detail: 'private = 私有的/民营的。enterprise = 企业。private enterprise = 民营企业。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has attached importance to + A + and + has introduced + B + to support + C',
          structureAnalysis: '(The Chinese government) → has attached great importance to (the development of the private economy) → and → has introduced (a series of policies) → to support (private enterprises)',
          whyGood: '① attached importance to + introduced policies 两个现在完成时并列 ② to support 不定式表达政策目的 ③ private economy/enterprises 术语准确。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 attach importance to → pay attention to / value / prioritize；不会 introduce → launch / roll out / implement；不会 private enterprise → private company / private business / privately-run firm',
          sentencePattern: '\'近年来，A高度重视B的发展，出台了一系列政策支持C\' → \'In recent years, A has attached great importance to the development of B and has introduced a series of policies to support C\'',
          highScore: { en: '', note: 'attached great importance + introduced policies + to support 目的清晰' },
          lowScore: { en: '', note: 'thinks...is very important 不如 attaches great importance to + rules 不如 policies + help 不如 support。评分 8-10 分档。' }
        }
      },
      {
        id: 'p2-s1',
        cn: '截至2025年3月底，全国民营企业数量超过5700万家，占企业总量的92.3%。',
        en: 'By the end of March 2025, the number of private enterprises nationwide had exceeded 57 million, accounting for 92.3% of the total number of enterprises.',
        annotations: [
          { fragment: 'By the end of March 2025', type: 'phrase', label: '截至2025年3月底', detail: 'By = 截至/到...为止。By the end of + 时间 = 截至...末。与过去完成时搭配。' },
          { fragment: 'had exceeded', type: 'structure', label: '超过（过去完成时）', detail: 'had exceeded = 已超过。过去完成时强调截至过去某个时间点已经达成的数量。' },
          { fragment: 'accounting for', type: 'structure', label: '占', detail: 'account for = 占（比例）。现在分词补充说明。accounting for 92.3% = 占92.3%。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'By + 时间点 + 主语 + had exceeded + 数字 + 现在分词(accounting for...)',
          structureAnalysis: '(By the end of March 2025) → (the number of private enterprises nationwide) → had exceeded → 57 million → accounting for (92.3% of the total)',
          whyGood: '① By + 过去完成时是表达截至时间的标准搭配 ② had exceeded 比 was more than 更正式 ③ accounting for 精确表达占比。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 By the end of → As of the end of / By late / Up to；不会 exceeded → went over / surpassed / reached more than；不会 accounting for → making up / representing / comprising',
          sentencePattern: '\'截至Y年M月底，A数量超过B，占C的X%\' → \'By the end of M Y, the number of A had exceeded B, accounting for X% of C\'',
          highScore: { en: '', note: 'By + had exceeded + accounting for 全面精准' },
          lowScore: { en: '', note: 'Until 不如 By + were more than 不如 had exceeded + which is 不如 accounting for。评分 9-11 分档。' }
        }
      },
      {
        id: 'p2-s2',
        cn: '民营企业不仅数量稳步增长，质量和结构也在不断提升。',
        en: 'Not only has the number of private enterprises grown steadily, but their quality and structure have also been continuously improving.',
        annotations: [
          { fragment: 'Not only has...grown', type: 'structure', label: 'Not only 倒装', detail: 'Not only 置句首需要部分倒装：Not only has the number...grown。这是高级句式。' },
          { fragment: 'steadily', type: 'vocab', label: '稳步', detail: 'steadily = 稳步地/稳定地。比 slowly 或 gradually 更能表达\'稳中有进\'。' },
          { fragment: 'have been continuously improving', type: 'structure', label: '一直在不断提升', detail: '现在完成进行时 have been improving 表达从过去持续到现在的提升过程。continuously = 不断地。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Not only has A grown steadily + but B have also been continuously improving',
          structureAnalysis: 'Not only → has (the number of private enterprises) → grown steadily → but → (their quality and structure) → have also been → continuously improving',
          whyGood: '① Not only 倒装句提升表达层次 ② steadily 精准表达\'稳步\' ③ 现在完成进行时表达持续提升的动态过程 ④ 两个不同主语分别搭配不同时态的动词。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 Not only has...grown → Not only the number has grown（缺倒装）→ The number has not only grown（更安全）；不会 steadily → stably / gradually / progressively',
          sentencePattern: '\'A不仅B稳步增长，C和D也在不断提升\' → \'Not only has B grown steadily, but C and D have also been continuously improving\'',
          highScore: { en: '', note: 'Not only 倒装 + 现在完成进行时 高级表达' },
          lowScore: { en: '', note: 'increased 不如 grown + are getting better 不如 have been continuously improving。评分 8-10 分档。' }
        }
      },
      {
        id: 'p2-s3',
        cn: '民营企业的研发投入不断增加，在新一代信息技术、人工智能等领域发展迅速。',
        en: 'The R&D investment of private enterprises has been increasing, and they have been developing rapidly in fields such as the new generation of information technology and artificial intelligence.',
        annotations: [
          { fragment: 'R&D investment', type: 'vocab', label: '研发投入', detail: 'R&D = Research and Development。R&D investment = 研发投入。' },
          { fragment: 'the new generation of information technology', type: 'vocab', label: '新一代信息技术', detail: 'new generation = 新一代。information technology = 信息技术。' },
          { fragment: 'have been developing rapidly', type: 'structure', label: '发展迅速', detail: '现在完成进行时 have been developing 表达持续快速发展。rapidly = 迅速地。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'A has been increasing + and + B have been developing rapidly in fields such as C and D',
          structureAnalysis: '(The R&D investment of private enterprises) → has been increasing → and → (they) → have been developing rapidly → in fields such as (the new generation of information technology and artificial intelligence)',
          whyGood: '① R&D 是\'研发\'的标准缩写 ② has been increasing 现在完成进行时表达持续增加 ③ fields such as 自然引出具体领域。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 R&D → research and development / innovation spending；不会 new generation → next-generation / latest；不会 rapidly → quickly / fast / at a rapid pace',
          sentencePattern: '\'A的B不断增加，在C、D等领域发展迅速\' → \'The B of A has been increasing, and they have been developing rapidly in fields such as C and D\'',
          highScore: { en: '', note: 'R&D + has been increasing + such as 领域列举 准确' },
          lowScore: { en: '', note: 'spending more money 不如 R&D investment has been increasing + growing very fast 不如 developing rapidly。评分 8-10 分档。' }
        }
      },
      {
        id: 'p2-s4',
        cn: '民营企业核心竞争力的增强为中国经济的高质量发展提供了有力支撑。',
        en: 'The enhanced core competitiveness of private enterprises has provided strong support for the high-quality development of China\'s economy.',
        annotations: [
          { fragment: 'enhanced core competitiveness', type: 'vocab', label: '核心竞争力增强', detail: 'enhanced = 增强的（过去分词作形容词）。core competitiveness = 核心竞争力。' },
          { fragment: 'has provided strong support for', type: 'phrase', label: '为...提供了有力支撑', detail: 'provide strong support for = 为...提供有力支撑。strong support = 有力的支撑。' },
          { fragment: 'high-quality development', type: 'vocab', label: '高质量发展', detail: 'high-quality = 高质量的。high-quality development = 高质量发展。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'The enhanced + 名词 + has provided strong support for + 名词',
          structureAnalysis: '(The enhanced core competitiveness of private enterprises) → has provided → strong support → for (the high-quality development of China\'s economy)',
          whyGood: '① enhanced core competitiveness 过去分词+名词精确表达 ② has provided strong support for 表达\'为...提供有力支撑\' ③ high-quality development 标准译法。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 core competitiveness → main competitive advantage / key competitive power；不会 strong support → firm backing / solid foundation / powerful support；不会 high-quality development → quality growth / superior development',
          sentencePattern: '\'A的增强为B的高质量发展提供了有力支撑\' → \'The enhanced A has provided strong support for the high-quality development of B\'',
          highScore: { en: '', note: 'enhanced + core competitiveness + strong support + high-quality development 词汇丰富' },
          lowScore: { en: '', note: 'stronger 不如 enhanced + competing ability 不如 competitiveness + given 不如 provided + good 不如 high-quality。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p3. 城市漫步 (2025.12)
  {
    id: 'p3',
    title: '城市漫步',
    year: '2025.12',
    topic: '社会生活',
    difficulty: 1,
    fullCN: '近年来，"城市漫步（city walk）"在中国的年轻人中悄然兴起，已成为一种旅游新潮流。与传统旅游不同，城市漫步不追求在短时间内游览尽可能多的景点，而是随意行走或按照主题路线漫步在城市的大街小巷。漫步者品尝地道小吃，欣赏特色建筑，了解当地生活方式。他们还用相机或手机记录城市的风景和人物。这种旅游方式能让城市漫步者更深入了解城市的历史与文化。',
    fullEN: 'In recent years, "city walks" have quietly emerged among young people in China and have become a new tourism trend. Unlike traditional tourism, city walks do not pursue visiting as many scenic spots as possible within a short time. Instead, they involve strolling casually or following themed routes through the streets and alleys of a city. City walkers sample authentic local snacks, admire distinctive architecture, and learn about the local way of life. They also use cameras or mobile phones to capture the city\'s scenery and people. This travel style allows city walkers to gain a deeper understanding of a city\'s history and culture.',
    sentences: [
      {
        id: 'p3-s0',
        cn: '近年来，"城市漫步（city walk）"在中国的年轻人中悄然兴起，已成为一种旅游新潮流。',
        en: 'In recent years, "city walks" have quietly emerged among young people in China and have become a new tourism trend.',
        annotations: [
          { fragment: 'have quietly emerged', type: 'structure', label: '悄然兴起', detail: 'have emerged = 已经兴起（现在完成时）。quietly = 悄然地/静静地。quietly emerged = 悄然兴起。' },
          { fragment: 'a new tourism trend', type: 'vocab', label: '旅游新潮流', detail: 'tourism = 旅游（产业/活动）。trend = 潮流/趋势。new trend = 新潮流。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语(city walks) + have quietly emerged + among + sb. + and + have become + 名词',
          structureAnalysis: '(city walks) → have quietly emerged → (among young people in China) → and → have become → (a new tourism trend)',
          whyGood: '① quietly emerged 精准对应\'悄然兴起\' ② have emerged...and have become 两个现在完成时并列表达兴起和结果。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 quietly emerged → silently appeared / quietly risen / become popular quietly；不会 trend → fashion / wave / craze',
          sentencePattern: '\'近年来，A在B中悄然兴起，已成为一种C新潮流\' → \'In recent years, A have quietly emerged among B and have become a new C trend\'',
          highScore: { en: '', note: 'quietly emerged + new tourism trend 表达地道' },
          lowScore: { en: '', note: 'become popular quietly 语序不好 + 拆句 + fashion 不如 trend。评分 9-11 分档。' }
        }
      },
      {
        id: 'p3-s1',
        cn: '与传统旅游不同，城市漫步不追求在短时间内游览尽可能多的景点，而是随意行走或按照主题路线漫步在城市的大街小巷。',
        en: 'Unlike traditional tourism, city walks do not pursue visiting as many scenic spots as possible within a short time. Instead, they involve strolling casually or following themed routes through the streets and alleys of a city.',
        annotations: [
          { fragment: 'Unlike traditional tourism', type: 'structure', label: '与...不同', detail: 'Unlike = 与...不同。介词开头引出对比。' },
          { fragment: 'do not pursue visiting as many...as possible', type: 'structure', label: '不追求在短时间内游览尽可能多的', detail: 'pursue = 追求。as many...as possible = 尽可能多的。visiting scenic spots = 游览景点。' },
          { fragment: 'strolling casually or following themed routes', type: 'structure', label: '随意行走或按照主题路线', detail: 'stroll = 漫步/散步。casually = 随意地。following themed routes = 按主题路线。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Unlike A + 主语 + do not pursue doing B + Instead + they involve doing C or D',
          structureAnalysis: '(Unlike traditional tourism) → city walks → do not pursue (visiting as many scenic spots as possible within a short time). Instead → they → involve (strolling casually or following themed routes through the streets and alleys)',
          whyGood: '① Unlike 引出对比 ② pursue visiting 比 try to visit 更高级 ③ Instead 转折 + strolling/following 两个动名词并列 ④ streets and alleys 全面表达\'大街小巷\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 Unlike → Different from / Compared with / In contrast to；不会 pursue → chase after / seek / go after；不会 stroll → walk leisurely / wander / ramble；不会 scenic spots → tourist attractions / sights / landmarks',
          sentencePattern: '\'与A不同，B不追求在短时间内C，而是D或E\' → \'Unlike A, B do not pursue C within a short time. Instead, they involve D or E\'',
          highScore: { en: '', note: 'Unlike + pursue visiting + strolling casually + streets and alleys 词汇丰富' },
          lowScore: { en: '', note: 'old-style 不如 traditional + try to see 不如 pursue visiting + carelessly 不如 casually + streets 缺少 alleys。评分 8-10 分档。' }
        }
      },
      {
        id: 'p3-s2',
        cn: '漫步者品尝地道小吃，欣赏特色建筑，了解当地生活方式。',
        en: 'City walkers sample authentic local snacks, admire distinctive architecture, and learn about the local way of life.',
        annotations: [
          { fragment: 'sample', type: 'vocab', label: '品尝', detail: 'sample = 品尝/试吃（动词）。比 taste 更有\'尝试体验\'的意味。' },
          { fragment: 'authentic local snacks', type: 'vocab', label: '地道小吃', detail: 'authentic = 地道的/正宗的。local snacks = 当地小吃。' },
          { fragment: 'distinctive architecture', type: 'vocab', label: '特色建筑', detail: 'distinctive = 有特色的/独特的。architecture = 建筑。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + 三个并列谓语(sample..., admire..., and learn about...)',
          structureAnalysis: 'City walkers → sample (authentic local snacks), admire (distinctive architecture), and learn about (the local way of life)',
          whyGood: '① sample 比 taste/eat 更贴合\'品尝体验\' ② authentic 精准表达\'地道的\' ③ 三个动词并列使动作连贯。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 sample → taste / try / eat；不会 authentic → genuine / real / traditional；不会 distinctive → characteristic / unique / special',
          sentencePattern: '\'A品尝B，欣赏C，了解D\' → \'A sample B, admire C, and learn about D\'',
          highScore: { en: '', note: 'sample + authentic + admire + way of life 用词精准' },
          lowScore: { en: '', note: 'eat 不如 sample + look at 不如 admire + special 不如 distinctive + how people live 不如 way of life。评分 9-11 分档。' }
        }
      },
      {
        id: 'p3-s3',
        cn: '他们还用相机或手机记录城市的风景和人物。',
        en: 'They also use cameras or mobile phones to capture the city\'s scenery and people.',
        annotations: [
          { fragment: 'use...to capture', type: 'structure', label: '用...记录', detail: 'use...to + 动词 = 用...来做...。capture = 捕捉/记录（比 record 更生动）。' },
          { fragment: 'scenery and people', type: 'vocab', label: '风景和人物', detail: 'scenery = 风景（不可数）。people = 人物/人群。scenery and people = 风景和人物。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + use A or B + to capture + C and D',
          structureAnalysis: 'They → use (cameras or mobile phones) → to capture → (the city\'s scenery and people)',
          whyGood: '① use...to capture 比 take photos of 更有\'捕捉/定格\'的美感 ② scenery 准确表达\'风景\'（不可数名词）。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 capture → record / photograph / take pictures of；不会 scenery → landscape / views / sights',
          sentencePattern: '\'A还用B或C记录D的E和F\' → \'A also use B or C to capture the E and F of D\'',
          highScore: { en: '', note: 'use...to capture + scenery 表达生动' },
          lowScore: { en: '', note: 'take photos of 不如 capture + views 不如 scenery。评分 11-13 分档。' }
        }
      },
      {
        id: 'p3-s4',
        cn: '这种旅游方式能让城市漫步者更深入了解城市的历史与文化。',
        en: 'This travel style allows city walkers to gain a deeper understanding of a city\'s history and culture.',
        annotations: [
          { fragment: 'allows...to gain a deeper understanding of', type: 'structure', label: '能让...更深入了解', detail: 'allow sb. to do = 让某人能够做。gain a deeper understanding of = 获得对...更深的了解。' },
          { fragment: 'travel style', type: 'vocab', label: '旅游方式', detail: 'travel style = 旅游方式/旅行方式。比 way of traveling 更简洁。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + allows + sb. + to gain a deeper understanding of + 名词',
          structureAnalysis: '(This travel style) → allows → (city walkers) → to gain (a deeper understanding of a city\'s history and culture)',
          whyGood: '① allows...to 表达\'让...能够\' ② gain a deeper understanding 比 understand more deeply 更正式 ③ travel style 简洁表达\'旅游方式\'。',
          keyVocab: [''],
          substitutionGuide: '不会 allows...to → makes it possible for...to / lets... / enables...to；不会 gain a deeper understanding → understand more deeply / learn more about / better appreciate',
          sentencePattern: '\'这种A能让B更深入了解C的D\' → \'This A allows B to gain a deeper understanding of the D of C\'',
          highScore: { en: '', note: 'allows...to gain a deeper understanding of 表达地道' },
          lowScore: { en: '', note: 'way of traveling 不如 travel style + let 不如 allow + know more about 不如 gain a deeper understanding of。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p4. 杂交水稻 (2025.6)
  {
    id: 'p4',
    title: '杂交水稻',
    year: '2025.6',
    topic: '科技成就',
    difficulty: 2,
    fullCN: '被誉为"杂交水稻之父"的袁隆平和他的科研团队克服重重困难，研发出了一种超级杂交水稻。这项技术获得了举世公认的巨大成功。通过这项技术的应用，水稻抗旱抗病能力更强，能适应不同的气候和土壤条件，产量可提高20%-30%。超级杂交水稻营养丰富，口感更佳。目前，这项技术已经在许多国家得到广泛应用，为全球粮食安全做出了重大贡献。',
    fullEN: 'Yuan Longping, known as the "Father of Hybrid Rice," and his research team overcame numerous difficulties to develop a type of super hybrid rice. This technology has achieved enormous success recognized worldwide. Through the application of this technology, rice has become more resistant to drought and disease, can adapt to different climate and soil conditions, and its yield can increase by 20% to 30%. Super hybrid rice is rich in nutrients and has a better taste. At present, this technology has been widely applied in many countries, making significant contributions to global food security.',
    sentences: [
      {
        id: 'p4-s0',
        cn: '被誉为"杂交水稻之父"的袁隆平和他的科研团队克服重重困难，研发出了一种超级杂交水稻。',
        en: 'Yuan Longping, known as the "Father of Hybrid Rice," and his research team overcame numerous difficulties to develop a type of super hybrid rice.',
        annotations: [
          { fragment: 'known as the "Father of Hybrid Rice"', type: 'structure', label: '过去分词插入语', detail: 'known as = 被誉为。过去分词短语插入主谓之间，省略 who was。比 who is known as 更紧凑。' },
          { fragment: 'overcame numerous difficulties', type: 'vocab', label: '克服重重困难', detail: 'overcame = 克服（overcome 的过去式）。numerous = 无数的/重重的。difficulties = 困难。' },
          { fragment: 'to develop', type: 'structure', label: '不定式表结果/目的', detail: 'to develop = 研发出。不定式表达\'克服困难\'的目的/结果。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语(含过去分词插入) + overcame + 宾语 + to do',
          structureAnalysis: 'Yuan Longping (known as...) and his research team → overcame (numerous difficulties) → to develop (super hybrid rice)',
          whyGood: '① known as 过去分词处理\'被誉为\' ② overcame...to develop 用不定式连接两个动作 ③ numerous 比 many 更正式。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 known as → called / named / referred to as；不会 overcame → conquered / got over / surmounted；不会 hybrid → crossbred / mixed',
          sentencePattern: '\'被誉为A的B和C克服D，研发出了E\' → \'B, known as A, and C overcame D to develop E\'',
          highScore: { en: '', note: 'known as 插入 + overcame...to develop 紧凑' },
          lowScore: { en: '', note: 'is called 不如 known as + beat 不如 overcame + made 不如 developed。评分 9-11 分档。' }
        }
      },
      {
        id: 'p4-s1',
        cn: '这项技术获得了举世公认的巨大成功。',
        en: 'This technology has achieved enormous success recognized worldwide.',
        annotations: [
          { fragment: 'has achieved enormous success', type: 'structure', label: '获得了巨大成功', detail: 'has achieved = 已经取得（现在完成时）。enormous success = 巨大成功。' },
          { fragment: 'recognized worldwide', type: 'structure', label: '过去分词后置定语', detail: 'recognized worldwide = 举世公认的。过去分词短语修饰 success，省略 which is。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has achieved + 宾语 + 过去分词后置定语',
          structureAnalysis: 'This technology → has achieved → (enormous success) → recognized worldwide',
          whyGood: '① has achieved 现在完成时表达已取得的成就 ② recognized worldwide 后置定语紧凑处理\'举世公认\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 enormous → huge / great / tremendous；不会 recognized worldwide → globally recognized / acknowledged around the world / internationally acclaimed',
          sentencePattern: '\'这项技术获得了举世公认的巨大成功\' → \'This technology has achieved enormous success recognized worldwide\'',
          highScore: { en: '', note: 'has achieved + recognized worldwide 后置定语精准' },
          lowScore: { en: '', note: 'got 不如 achieved + very big 不如 enormous + recognized by the whole world 冗余。评分 10-12 分档。' }
        }
      },
      {
        id: 'p4-s2',
        cn: '通过这项技术的应用，水稻抗旱抗病能力更强，能适应不同的气候和土壤条件，产量可提高20%-30%。',
        en: 'Through the application of this technology, rice has become more resistant to drought and disease, can adapt to different climate and soil conditions, and its yield can increase by 20% to 30%.',
        annotations: [
          { fragment: 'Through the application of', type: 'structure', label: '通过...的应用', detail: 'Through + 名词 = 通过...。application = 应用。比 by applying 更正式。' },
          { fragment: 'resistant to drought and disease', type: 'vocab', label: '抗旱抗病', detail: 'resistant to = 对...有抵抗力。drought = 干旱。disease = 疾病。resistant to drought and disease = 抗旱抗病。' },
          { fragment: 'yield can increase by 20% to 30%', type: 'vocab', label: '产量可提高20%-30%', detail: 'yield = 产量/产出。increase by + 百分比 = 增加了...%。by 表示增幅。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Through + 名词 + 主语(三个并列谓语: has become, can adapt, yield can increase)',
          structureAnalysis: '(Through the application of this technology) → rice → has become (more resistant to drought and disease), can adapt to (different climate and soil conditions), and its yield can increase by (20% to 30%)',
          whyGood: '① Through the application of 比 By applying 更正式 ② resistant to 精准表达\'抗...\' ③ increase by + 百分比表达增幅。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 application → use / implementation / adoption；不会 resistant to → able to withstand / tolerant of / immune to；不会 yield → output / production / harvest',
          sentencePattern: '\'通过这项技术的应用，A能力更强，能适应B，产量可提高C%\' → \'Through the application of this technology, A has become more resistant to..., can adapt to B, and its yield can increase by C%\'',
          highScore: { en: '', note: 'Through + resistant to + adapt to + increase by 词汇丰富' },
          lowScore: { en: '', note: 'By using 不如 Through the application + fight against 不如 resistant to + go up 不如 increase。评分 8-10 分档。' }
        }
      },
      {
        id: 'p4-s3',
        cn: '超级杂交水稻营养丰富，口感更佳。',
        en: 'Super hybrid rice is rich in nutrients and has a better taste.',
        annotations: [
          { fragment: 'is rich in nutrients', type: 'phrase', label: '营养丰富', detail: 'is rich in = 富含...。nutrients = 营养物质。比 is nutritious 更能强调营养的丰富程度。' },
          { fragment: 'has a better taste', type: 'phrase', label: '口感更佳', detail: 'has a better taste = 口感更好。taste = 口感/味道。better 表示比较级\'更佳\'。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + is rich in + A + and + has + a + 比较级 + B',
          structureAnalysis: 'Super hybrid rice → is rich in (nutrients) → and → has → a better (taste)',
          whyGood: '① is rich in 比 is nutritious 表达更丰富 ② better taste 处理\'口感更佳\'的比较含义。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 rich in nutrients → nutritious / full of nutrition / packed with nutrients；不会 better taste → tastes better / improved flavor / more delicious',
          sentencePattern: '\'XX营养丰富，口感更佳\' → \'XX is rich in nutrients and has a better taste\'',
          highScore: { en: '', note: 'is rich in + has a better taste 简洁到位' },
          lowScore: { en: '', note: 'has a lot of nutrition 不如 is rich in nutrients + tastes better 不如 has a better taste。评分 11-13 分档。' }
        }
      },
      {
        id: 'p4-s4',
        cn: '目前，这项技术已经在许多国家得到广泛应用，为全球粮食安全做出了重大贡献。',
        en: 'At present, this technology has been widely applied in many countries, making significant contributions to global food security.',
        annotations: [
          { fragment: 'has been widely applied', type: 'structure', label: '已经得到广泛应用', detail: 'has been applied = 已被应用。现在完成时被动语态。widely = 广泛地。' },
          { fragment: 'making significant contributions to', type: 'structure', label: '为...做出重大贡献', detail: '现在分词 making 表示结果。significant = 重大的。contributions to = 对...的贡献。' },
          { fragment: 'global food security', type: 'vocab', label: '全球粮食安全', detail: 'food security = 粮食安全。global = 全球的。food security 比 food safety 更侧重供应保障。' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主语 + has been applied + 现在分词(making contributions to...)',
          structureAnalysis: '(At present) → this technology → has been widely applied (in many countries) → making (significant contributions to global food security)',
          whyGood: '① has been widely applied 现在完成时被动表达\'已得到广泛应用\' ② making...现在分词表达结果 ③ food security 是\'粮食安全\'的标准译法。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 widely applied → widely used / extensively adopted；不会 food security → food supply safety / grain security；不会 significant → important / major / great',
          sentencePattern: '\'目前，A已经在B得到广泛应用，为C做出了重大贡献\' → \'At present, A has been widely applied in B, making significant contributions to C\'',
          highScore: { en: '', note: 'has been widely applied + making contributions 表达地道' },
          lowScore: { en: '', note: 'is used 不如 has been applied + given big help 不如 made significant contributions + food safety 不如 food security。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p5. 冰雪大世界 (2025.6)
  {
    id: 'p5',
    title: '冰雪大世界',
    year: '2025.6',
    topic: '旅游文化',
    difficulty: 1,
    fullCN: '近年来，中国东北地区正在大力发展冰雪资源，例如哈尔滨利用丰富的冰雪资源，打造了独具特色的冰雪大世界，让游客在欣赏冰雪之美的同时也能体验当地独特的民俗文化。如今，曾经令人畏惧的冰天雪地正吸引着四面八方的游客，成为了深受欢迎的旅游胜地，冰雪资源也为当地的经济发展做出越来越大的贡献。',
    fullEN: 'In recent years, Northeast China has been vigorously developing its ice and snow resources. For example, Harbin has utilized its abundant ice and snow resources to create the unique Ice and Snow World, allowing visitors to experience the local distinctive folk culture while enjoying the beauty of ice and snow. Today, the once-dreaded world of ice and snow is attracting visitors from all directions, becoming a popular tourist destination, and ice and snow resources are making increasingly greater contributions to the local economic development.',
    sentences: [
      {
        id: 'p5-s0',
        cn: '近年来，中国东北地区正在大力发展冰雪资源。',
        en: 'In recent years, Northeast China has been vigorously developing its ice and snow resources.',
        annotations: [
          { fragment: 'has been vigorously developing', type: 'structure', label: '正在大力发展', detail: 'has been developing = 一直在发展（现在完成进行时）。vigorously = 大力地/蓬勃地。' },
          { fragment: 'ice and snow resources', type: 'vocab', label: '冰雪资源', detail: 'ice and snow = 冰雪。resources = 资源。ice and snow resources = 冰雪资源。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In recent years + 主语 + has been vigorously developing + 宾语',
          structureAnalysis: '(In recent years) → Northeast China → has been vigorously developing → (its ice and snow resources)',
          whyGood: '① In recent years + 现在完成进行时 表达近年来的持续趋势 ② vigorously 精准表达\'大力\'的力度。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 vigorously → actively / energetically / strongly；不会 ice and snow resources → winter tourism resources / frozen assets',
          sentencePattern: '\'近年来，A正在大力发展B\' → \'In recent years, A has been vigorously developing B\'',
          highScore: { en: '', note: 'has been vigorously developing 时态和副词都精准' },
          lowScore: { en: '', note: 'northeast part 不如 Northeast China + strongly 不如 vigorously + things 不如 resources。评分 9-11 分档。' }
        }
      },
      {
        id: 'p5-s1',
        cn: '例如哈尔滨利用丰富的冰雪资源，打造了独具特色的冰雪大世界，让游客在欣赏冰雪之美的同时也能体验当地独特的民俗文化。',
        en: 'For example, Harbin has utilized its abundant ice and snow resources to create the unique Ice and Snow World, allowing visitors to experience the local distinctive folk culture while enjoying the beauty of ice and snow.',
        annotations: [
          { fragment: 'has utilized...to create', type: 'structure', label: '利用...打造了', detail: 'utilize = 利用。has utilized...to create = 利用...打造了。不定式表达目的。' },
          { fragment: 'allowing visitors to experience...while enjoying...', type: 'structure', label: '让...在...的同时也能...', detail: 'allowing...to...while doing = 让...在做...的同时也能做...。while + 现在分词表达同时。' },
          { fragment: 'distinctive folk culture', type: 'vocab', label: '独特的民俗文化', detail: 'distinctive = 独特的/有特色的。folk culture = 民俗文化。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has utilized A to create B + 现在分词(allowing C to experience D while enjoying E)',
          structureAnalysis: 'Harbin → has utilized (its abundant ice and snow resources) → to create (the unique Ice and Snow World) → allowing (visitors) to experience (the local distinctive folk culture) → while enjoying (the beauty of ice and snow)',
          whyGood: '① utilize...to create 处理\'利用...打造\' ② allowing...to...while enjoying 精准处理\'让...在...的同时也能...\' ③ distinctive 比 unique 更强调\'与众不同\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 utilized → used / made use of / tapped into；不会 allowing...to...while → letting...do...at the same time；不会 distinctive → unique / special / characteristic',
          sentencePattern: '\'例如A利用B打造了C，让D在欣赏E的同时也能体验F\' → \'For example, A has utilized B to create C, allowing D to experience F while enjoying E\'',
          highScore: { en: '', note: 'utilized...to create + allowing...to...while enjoying 嵌套合理' },
          lowScore: { en: '', note: 'used 不如 utilized + build 不如 create + 拆句 + feel the culture 不如 experience。评分 8-10 分档。' }
        }
      },
      {
        id: 'p5-s2',
        cn: '如今，曾经令人畏惧的冰天雪地正吸引着四面八方的游客，成为了深受欢迎的旅游胜地。',
        en: 'Today, the once-dreaded world of ice and snow is attracting visitors from all directions, becoming a popular tourist destination.',
        annotations: [
          { fragment: 'the once-dreaded world of ice and snow', type: 'phrase', label: '曾经令人畏惧的冰天雪地', detail: 'once-dreaded = 曾经令人畏惧的（复合形容词）。once = 曾经，dreaded = 令人畏惧的。' },
          { fragment: 'from all directions', type: 'phrase', label: '四面八方', detail: 'from all directions = 从四面八方。比 from everywhere 更形象。' },
          { fragment: 'becoming a popular tourist destination', type: 'structure', label: '成为了旅游胜地', detail: '现在分词 becoming 表示伴随结果。tourist destination = 旅游目的地/胜地。' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主语 + is attracting + 宾语 + 现在分词(becoming...)',
          structureAnalysis: 'Today → (the once-dreaded world of ice and snow) → is attracting → (visitors from all directions) → becoming (a popular tourist destination)',
          whyGood: '① once-dreaded 复合词精准表达\'曾经令人畏惧的\' ② from all directions 比 from everywhere 形象 ③ becoming 分词收尾表达结果。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 once-dreaded → once-feared / previously scary；不会 from all directions → from everywhere / far and wide / from near and far；不会 tourist destination → tourist spot / scenic spot / travel destination',
          sentencePattern: '\'如今，曾经令人畏惧的A正吸引着四面八方的B，成为了深受欢迎的C\' → \'Today, the once-dreaded A is attracting B from all directions, becoming a popular C\'',
          highScore: { en: '', note: 'once-dreaded + from all directions + becoming 表达生动' },
          lowScore: { en: '', note: 'that people were afraid of 啰嗦 + bringing 不如 attracting + place for travel 不如 tourist destination。评分 9-11 分档。' }
        }
      },
      {
        id: 'p5-s3',
        cn: '冰雪资源也为当地的经济发展做出越来越大的贡献。',
        en: 'Ice and snow resources are making increasingly greater contributions to the local economic development.',
        annotations: [
          { fragment: 'making increasingly greater contributions', type: 'structure', label: '做出越来越大的贡献', detail: 'increasingly greater = 越来越大的。contribution to = 对...的贡献。make contributions to = 为...做贡献。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + are making increasingly greater contributions to + 名词',
          structureAnalysis: '(Ice and snow resources) → are making → (increasingly greater contributions) → to (the local economic development)',
          whyGood: '① increasingly greater 表达\'越来越大的\' ② make contributions to 是\'为...做贡献\'的标准表达。',
          keyVocab: [''],
          substitutionGuide: '不会 increasingly greater → bigger and bigger / more and more significant / ever-growing；不会 make contributions → contribute / help / support',
          sentencePattern: '\'A也为B做出越来越大的贡献\' → \'A are making increasingly greater contributions to B\'',
          highScore: { en: '', note: 'increasingly greater contributions 表达精准' },
          lowScore: { en: '', note: 'helping 不如 making contributions + more and more 不如 increasingly greater + economy 不如 economic development。评分 10-12 分档。' }
        }
      }
    ]
  },
  // p6. 15分钟便民生活圈 (2025.6)
  {
    id: 'p6',
    title: '15分钟便民生活圈',
    year: '2025.6',
    topic: '社会民生',
    difficulty: 2,
    fullCN: '近年来，中国越来越多的城市致力打造"15分钟便民生活圈"。生活在便民生活圈里的居民可以在15分钟步行范围内获得公共服务。便民生活圈配备便利店、公园、健身设施、图书馆、学校、社区食堂和诊所等。建立这样的生活圈有助于为居民提供更便捷、舒适、友好和宜人的生活环境，更好地满足多样化的城市居民需求，提高居民生活质量和幸福感。',
    fullEN: 'In recent years, an increasing number of Chinese cities have been committed to building "15-minute convenient living circles." Residents living in these convenient living circles can access public services within a 15-minute walk. These living circles are equipped with convenience stores, parks, fitness facilities, libraries, schools, community canteens, and clinics. The establishment of such living circles helps provide residents with a more convenient, comfortable, friendly, and pleasant living environment, better meet the diverse needs of urban residents, and improve their quality of life and sense of well-being.',
    sentences: [
      {
        id: 'p6-s0',
        cn: '近年来，中国越来越多的城市致力打造"15分钟便民生活圈"。',
        en: 'In recent years, an increasing number of Chinese cities have been committed to building "15-minute convenient living circles."',
        annotations: [
          { fragment: 'an increasing number of', type: 'structure', label: '越来越多的', detail: 'an increasing number of + 复数名词 = 越来越多的。比 more and more 更正式。' },
          { fragment: 'have been committed to building', type: 'structure', label: '致力打造', detail: 'be committed to doing = 致力于/专心于。现在完成时强调持续的努力。to 是介词，后接 doing。' },
          { fragment: 'convenient living circles', type: 'vocab', label: '便民生活圈', detail: 'convenient = 便利的。living circle = 生活圈（社区规划术语）。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In recent years + an increasing number of + 主语 + have been committed to + doing + 宾语',
          structureAnalysis: '(In recent years) → (an increasing number of Chinese cities) → have been committed to → building (\'15-minute convenient living circles\')',
          whyGood: '① an increasing number of 比 more and more 正式 ② be committed to doing 精准表达\'致力打造\'（to 是介词） ③ convenient living circles 准确翻译\'便民生活圈\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 an increasing number of → more and more / a growing number of；不会 committed to → dedicated to / devoted to / working on',
          sentencePattern: '\'近年来，越来越多的A致力打造B\' → \'In recent years, an increasing number of A have been committed to building B\'',
          highScore: { en: '', note: 'an increasing number of + committed to building 准确' },
          lowScore: { en: '', note: 'These years 不如 In recent years + working hard to make 不如 committed to building + easy-life 自创词。评分 8-10 分档。' }
        }
      },
      {
        id: 'p6-s1',
        cn: '生活在便民生活圈里的居民可以在15分钟步行范围内获得公共服务。',
        en: 'Residents living in these convenient living circles can access public services within a 15-minute walk.',
        annotations: [
          { fragment: 'living in', type: 'structure', label: '生活在', detail: '现在分词 living in 作后置定语修饰 residents，比 who live in 更简洁。' },
          { fragment: 'access public services', type: 'vocab', label: '获得公共服务', detail: 'access = 获取/使用（动词）。access services = 获得/使用服务。比 get 或 obtain 更专业。' },
          { fragment: 'within a 15-minute walk', type: 'phrase', label: '在15分钟步行范围内', detail: 'within = 在...范围内。a 15-minute walk = 15分钟的步行距离。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语(含现在分词后置定语) + can access + 宾语 + within + 距离',
          structureAnalysis: 'Residents (living in these convenient living circles) → can access → (public services) → within (a 15-minute walk)',
          whyGood: '① living in 现在分词作定语简洁 ② access 比 get/obtain 更专业 ③ within a 15-minute walk 精准表达\'15分钟步行范围\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 access → get / obtain / reach / enjoy；不会 within a 15-minute walk → within walking distance of 15 minutes / in 15 minutes\' walk',
          sentencePattern: '\'生活在A里的B可以在C范围内获得D\' → \'B living in A can access D within C\'',
          highScore: { en: '', note: 'living in + access + within a 15-minute walk 表达地道' },
          lowScore: { en: '', note: 'who live 不如 living + get 不如 access + by walking 不如 within a walk。评分 9-11 分档。' }
        }
      },
      {
        id: 'p6-s2',
        cn: '便民生活圈配备便利店、公园、健身设施、图书馆、学校、社区食堂和诊所等。',
        en: 'These living circles are equipped with convenience stores, parks, fitness facilities, libraries, schools, community canteens, and clinics.',
        annotations: [
          { fragment: 'are equipped with', type: 'vocab', label: '配备', detail: 'be equipped with = 配备有/设有。比 have 或 there are 更侧重\'设施配置\'。' },
          { fragment: 'community canteens', type: 'vocab', label: '社区食堂', detail: 'community canteen = 社区食堂。canteen = 食堂/餐厅。比 dining hall 或 cafeteria 更贴合社区场景。' },
          { fragment: 'convenience stores...clinics', type: 'structure', label: '并列列举', detail: '七个名词并列列举，and 连接最后两项。注意各项的复数形式。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + are equipped with + 并列名词(A, B, C, D, E, F, and G)',
          structureAnalysis: 'These living circles → are equipped with → (convenience stores, parks, fitness facilities, libraries, schools, community canteens, and clinics)',
          whyGood: '① be equipped with 精准表达\'配备/设有\' ② 7个名词并列清晰罗列 ③ community canteen 准确翻译\'社区食堂\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 equipped with → have / are fitted with / provide；不会 canteen → dining hall / cafeteria / mess hall；不会 clinic → health center / medical station',
          sentencePattern: '\'A配备B、C、D、E、F、G和H等\' → \'A are equipped with B, C, D, E, F, G, and H\'',
          highScore: { en: '', note: 'be equipped with + 七项罗列完整' },
          lowScore: { en: '', note: 'have 不如 are equipped with + exercise things 不如 fitness facilities + eating places 不如 canteens + small hospitals 不如 clinics。评分 8-10 分档。' }
        }
      },
      {
        id: 'p6-s3',
        cn: '建立这样的生活圈有助于为居民提供更便捷、舒适、友好和宜人的生活环境，更好地满足多样化的城市居民需求，提高居民生活质量和幸福感。',
        en: 'The establishment of such living circles helps provide residents with a more convenient, comfortable, friendly, and pleasant living environment, better meet the diverse needs of urban residents, and improve their quality of life and sense of well-being.',
        annotations: [
          { fragment: 'The establishment of', type: 'structure', label: '建立...', detail: 'the + n. + of = 名词化主语。比 Establishing... is helpful 更正式。' },
          { fragment: 'convenient, comfortable, friendly, and pleasant', type: 'structure', label: '四个形容词并列', detail: '四个形容词并列修饰 living environment。pleasant = 宜人的。注意逗号分隔。' },
          { fragment: 'sense of well-being', type: 'vocab', label: '幸福感', detail: 'well-being = 幸福/安康。sense of well-being = 幸福感。比 happiness 更全面。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'The establishment of A + helps + do B, do C, and do D（三个并列不定式）',
          structureAnalysis: '(The establishment of such living circles) → helps → (provide...), (better meet...), and (improve...)',
          whyGood: '① 名词化主语 The establishment of 比动名词更正式 ② helps 后省略 to（美式用法） ③ sense of well-being 比 happiness 更全面地表达\'幸福感\' ④ 三个不定式并列表达三重目标。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 The establishment of → Building / Creating / Setting up；不会 pleasant → enjoyable / agreeable / nice；不会 well-being → happiness / welfare / health and happiness',
          sentencePattern: '\'建立A有助于为B提供C，更好地满足D，提高E和F\' → \'The establishment of A helps provide B with C, better meet D, and improve E and F\'',
          highScore: { en: '', note: '名词化主语 + 三个不定式并列 + well-being 表达高级' },
          lowScore: { en: '', note: 'Building 不如 establishment + give 不如 provide + nice 不如 pleasant + city people 不如 urban residents + happiness 不如 well-being。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p7. 新质生产力 (2024.6)
  {
    id: 'p7',
    title: '新质生产力',
    year: '2024.6',
    topic: '经济发展',
    difficulty: 4,
    fullCN: '新质生产力是以科技创新为核心驱动力的先进生产力形态。它强调通过颠覆性技术和前沿技术催生新产业、新模式、新动能。发展新质生产力是推动高质量发展的内在要求，也是中国式现代化的关键支撑。当前，中国正加快布局人工智能、量子信息、生物制造等未来产业，为新质生产力的发展奠定坚实基础。这不仅是应对国际竞争的需要，更是实现可持续发展和提升人民福祉的重要保障。',
    fullEN: 'New quality productive forces are an advanced form of productivity driven by scientific and technological innovation at their core. They emphasize using disruptive and cutting-edge technologies to foster new industries, new models, and new growth drivers. Developing new quality productive forces is an inherent requirement for promoting high-quality development and a key pillar of Chinese modernization. Currently, China is accelerating its deployment in future industries such as artificial intelligence, quantum information, and biomanufacturing, laying a solid foundation for the growth of new quality productive forces. This is not only a necessity for responding to international competition, but also a crucial guarantee for achieving sustainable development and improving people\'s well-being.',
    sentences: [
      {
        id: 'p7s1',
        cn: '新质生产力是以科技创新为核心驱动力的先进生产力形态。',
        en: 'New quality productive forces are an advanced form of productivity driven by scientific and technological innovation at their core.',
        annotations: [
          { fragment: 'New quality productive forces', type: 'term', label: '核心术语', detail: '"新质生产力"为2023年提出的新概念，官方译法为 new quality productive forces，注意不要逐字翻译' },
          { fragment: 'driven by scientific and technological innovation', type: 'grammar', label: '后置定语', detail: '过去分词短语作后置定语修饰 form，比定语从句更简洁' },
          { fragment: 'at their core', type: 'phrase', label: '介词短语', detail: '"以...为核心"的简洁译法，也可用 with...at the core' }
        ],
        technique: {
          difficulty: 3,
          structure: '主系表 + 过去分词后置定语',
          structureAnalysis: '主干为"...forces are a...form"，driven by... 作后置定语修饰 form',
          whyGood: '用 driven by 过去分词短语作后置定语，避免了冗长的定语从句，使定义类句子简洁有力。',
          keyVocab: ['new quality productive forces', 'scientific and technological innovation', 'advanced form', 'driven by', 'at the core'],
          substitutionGuide: '"生产力形态"也可译作 productive forces form；"核心驱动力"还可用 core engine 或 primary driver',
          sentencePattern: 'A is/are an advanced form of B driven by C at its/their core.',
          highScore: { en: 'New quality productive forces are an advanced form of productivity driven by scientific and technological innovation at their core.', note: '使用 driven by 分词短语和 at their core 介词短语，层次分明' },
          lowScore: { en: 'New quality productive forces is a kind of advanced productivity. Its core driving force is technology innovation.', note: '拆成两个简单句丢失了定义句的紧凑感，a kind of 过于口语化' }
        }
      },
      {
        id: 'p7s2',
        cn: '它强调通过颠覆性技术和前沿技术催生新产业、新模式、新动能。',
        en: 'They emphasize using disruptive and cutting-edge technologies to foster new industries, new models, and new growth drivers.',
        annotations: [
          { fragment: 'disruptive and cutting-edge technologies', type: 'vocab', label: '并列形容词', detail: 'disruptive指破坏式创新的"颠覆性"，cutting-edge指"前沿的"，两词适用不同语境' },
          { fragment: 'foster new industries, new models, and new growth drivers', type: 'grammar', label: '三项排比', detail: '"催生"用 foster，三个"新..."构成排比，growth drivers 比 momentums 更符合经济学术语' }
        ],
        technique: {
          difficulty: 3,
          structure: '主谓宾 + 不定式目的状语 + 三项名词排比',
          structureAnalysis: 'They emphasize using... 动名词作宾语，to foster... 不定式表目的，三个 new + N 排比',
          whyGood: 'emphasize using 比 emphasize to use 更地道，三并列名词保留原文节奏感。',
          keyVocab: ['disruptive', 'cutting-edge', 'foster', 'growth drivers', 'industries', 'models'],
          substitutionGuide: '"催生"还可译为 give birth to / generate / spawn；"新动能"还可译 new momentums',
          sentencePattern: 'A emphasizes using B and C to foster X, Y, and Z.',
          highScore: { en: 'They emphasize using disruptive and cutting-edge technologies to foster new industries, new models, and new growth drivers.', note: '三项排比简洁有力，foster 准确传达"培育催生"之意' },
          lowScore: { en: 'It emphasizes that we should use disruptive technologies to create new industries, new models and new momentums.', note: 'emphasize that we should 冗余，create 不足以表达培育之义' }
        }
      },
      {
        id: 'p7s3',
        cn: '发展新质生产力是推动高质量发展的内在要求，也是中国式现代化的关键支撑。',
        en: 'Developing new quality productive forces is an inherent requirement for promoting high-quality development and a key pillar of Chinese modernization.',
        annotations: [
          { fragment: 'inherent requirement', type: 'vocab', label: '学术词汇', detail: '"内在要求"译为 inherent requirement，比 internal need 更正式，符合政经文本风格' },
          { fragment: 'key pillar', type: 'vocab', label: '比喻译法', detail: '"关键支撑"译为 key pillar（支柱），英文惯用建筑隐喻表达支撑概念，比 key support 更形象' },
          { fragment: 'high-quality development', type: 'term', label: '固定术语', detail: '"高质量发展"的官方标准译法，在政府白皮书和十九大报告中统一使用' }
        ],
        technique: {
          difficulty: 2,
          structure: '动名词主语 + 系表 + and 并列',
          structureAnalysis: 'Developing...动名词作主语，is 后接两个并列表语 an inherent requirement 和 a key pillar',
          whyGood: '动名词作主语符合英文抽象表达习惯，两个表语并列体现"不仅...也是..."的逻辑。',
          keyVocab: ['inherent requirement', 'high-quality development', 'key pillar', 'Chinese modernization'],
          substitutionGuide: '"内在要求"还可译 intrinsic demand / built-in requirement；"支撑"还可译 underpinning / backbone',
          sentencePattern: 'Doing A is an inherent requirement for B and a key pillar of C.',
          highScore: { en: 'Developing new quality productive forces is an inherent requirement for promoting high-quality development and a key pillar of Chinese modernization.', note: '动名词主语+双重表语并列，结构紧凑逻辑清晰' },
          lowScore: { en: 'If we want to develop new quality productive forces, it is required by high-quality development and also supports Chinese modernization.', note: '条件句结构松散，丢失了"内在要求"和"关键支撑"的专业表述' }
        }
      },
      {
        id: 'p7s4',
        cn: '当前，中国正加快布局人工智能、量子信息、生物制造等未来产业，为新质生产力的发展奠定坚实基础。',
        en: 'Currently, China is accelerating its deployment in future industries such as artificial intelligence, quantum information, and biomanufacturing, laying a solid foundation for the growth of new quality productive forces.',
        annotations: [
          { fragment: 'accelerating its deployment in', type: 'phrase', label: '政经用语', detail: '"加快布局"译为 accelerate deployment in，比 speed up the arrangement 更正式专业' },
          { fragment: 'future industries such as', type: 'grammar', label: '列举结构', detail: 'such as 引出具体例子，比 including 更适合列举非穷尽项' },
          { fragment: 'laying a solid foundation for', type: 'phrase', label: '分词状语', detail: '现在分词短语作结果状语，比 and lay 更能体现逻辑关系' }
        ],
        technique: {
          difficulty: 3,
          structure: '时间状语 + 主谓宾 + such as列举 + 分词结果状语',
          structureAnalysis: 'Currently 时间状语，主句 China is accelerating...，such as 引出三类产业，laying 分词短语表结果',
          whyGood: '用 laying 分词状语承接结果，是英文政论文的经典句式，比用 so that 从句更简洁有力。',
          keyVocab: ['accelerating', 'deployment', 'artificial intelligence', 'quantum information', 'biomanufacturing', 'solid foundation'],
          substitutionGuide: '"布局"还可译 layout / planning / arrangement；"奠定基础"还可译 build a foundation / pave the way',
          sentencePattern: 'Currently, A is accelerating B in C such as X, Y, and Z, laying a solid foundation for D.',
          highScore: { en: 'Currently, China is accelerating its deployment in future industries such as AI, quantum information, and biomanufacturing, laying a solid foundation for...', note: 'such as列举+分词结果状语，多信息融合在一个长句中' },
          lowScore: { en: 'Now China is making plans in AI, quantum information and biomanufacturing. This can build a solid foundation for new quality productive forces.', note: '拆成两个简单句切断因果逻辑，making plans 太过口语化' }
        }
      },
      {
        id: 'p7s5',
        cn: '这不仅是应对国际竞争的需要，更是实现可持续发展和提升人民福祉的重要保障。',
        en: 'This is not only a necessity for responding to international competition, but also a crucial guarantee for achieving sustainable development and improving people\'s well-being.',
        annotations: [
          { fragment: 'not only a necessity...but also a crucial guarantee', type: 'grammar', label: '递进结构', detail: 'not only...but also 递进，necessity 对应"需要"，guarantee 对应"保障"，名词选择精准' },
          { fragment: 'people\'s well-being', type: 'term', label: '官方术语', detail: '"人民福祉"固定译法 people\'s well-being，比 people\'s welfare 更强调生活质量' }
        ],
        technique: {
          difficulty: 2,
          structure: 'not only...but also 递进 + for 介词短语 ×2',
          structureAnalysis: 'This is not only A for B, but also C for D and E，递进结构中嵌套 for 引起的介词短语',
          whyGood: '递进结构准确传达"不仅是...更是..."的语气递进，两个 for 短语分别修饰对应的名词。',
          keyVocab: ['not only...but also', 'necessity', 'crucial guarantee', 'sustainable development', 'well-being'],
          substitutionGuide: '"需要"也可译 requirement / need；"应对"可译 cope with / tackle / address',
          sentencePattern: 'This is not only a necessity for doing A, but also a crucial guarantee for achieving B and improving C.',
          highScore: { en: 'This is not only a necessity for responding to international competition, but also a crucial guarantee for achieving sustainable development and improving people\'s well-being.', note: 'not only...but also 递进+for 介词短语精准对应中文层次' },
          lowScore: { en: 'This is not only needed by international competition, but also can ensure sustainable development and make people live better.', note: 'needed by 不自然，make people live better 过于口语化且丢失了"福祉"的正式含义' }
        }
      }
    ]
  },
  // p8. 一带一路倡议 (2024.6)
  {
    id: 'p8',
    title: '一带一路倡议',
    year: '2024.6',
    topic: '经济发展',
    difficulty: 3,
    fullCN: '共建"一带一路"倡议提出十余年来，已成为世界上范围最广、规模最大的国际合作平台。它秉持共商共建共享原则，致力于实现沿线国家的政策沟通、设施联通、贸易畅通、资金融通、民心相通。这一倡议源于中国，但属于世界，为全球经济增长开辟了新空间，为国际贸易和投资搭建了新平台。截至2024年，已有150多个国家和国际组织签署了共建"一带一路"合作文件。',
    fullEN: 'Since the Belt and Road Initiative was proposed over a decade ago, it has become the world\'s broadest and largest platform for international cooperation. Adhering to the principle of extensive consultation and joint contribution for shared benefit, it is committed to achieving policy coordination, infrastructure connectivity, unimpeded trade, financial integration, and people-to-people bonds among participating countries. Originating in China, this initiative belongs to the world, having opened up new space for global economic growth and built a new platform for international trade and investment. By 2024, over 150 countries and international organizations had signed cooperation documents on the Belt and Road Initiative.',
    sentences: [
      {
        id: 'p8s1',
        cn: '共建"一带一路"倡议提出十余年来，已成为世界上范围最广、规模最大的国际合作平台。',
        en: 'Since the Belt and Road Initiative was proposed over a decade ago, it has become the world\'s broadest and largest platform for international cooperation.',
        annotations: [
          { fragment: 'the Belt and Road Initiative', type: 'term', label: '官方译名', detail: '"一带一路"官方固定译法，Belt(带)和Road(路)首字母大写，BRI为缩写' },
          { fragment: 'over a decade ago', type: 'phrase', label: '时间表达', detail: '"十余年"译为 over a decade / more than ten years，ago 指从过去某时开始' },
          { fragment: 'the world\'s broadest and largest', type: 'grammar', label: '最高级并列', detail: '两个最高级形容词并列修饰 platform，对应"范围最广、规模最大"' }
        ],
        technique: {
          difficulty: 2,
          structure: 'Since时间状语从句 + 主句(现在完成时)',
          structureAnalysis: 'Since...ago 引导时间状语，主句用现在完成时 has become，强调从过去到现在的持续',
          whyGood: 'Since 从句+现在完成时主句，精准传达"提出以来已成为"的时间逻辑。',
          keyVocab: ['Belt and Road Initiative', 'proposed', 'over a decade', 'broadest and largest', 'international cooperation'],
          substitutionGuide: '"倡议"还可译 proposal / program；"平台"可译 framework / mechanism',
          sentencePattern: 'Since A was proposed + time period ago, it has become the world\'s most B and most C N.',
          highScore: { en: 'Since the Belt and Road Initiative was proposed over a decade ago, it has become the world\'s broadest and largest platform for international cooperation.', note: '现在完成时+双最高级准确传达时间跨度和程度' },
          lowScore: { en: 'The Belt and Road Initiative was proposed ten years ago. Now it has become the widest and biggest international cooperation platform in the world.', note: '拆成两句割裂因果关系，widest 不如 broadest 正式' }
        }
      },
      {
        id: 'p8s2',
        cn: '它秉持共商共建共享原则，致力于实现沿线国家的政策沟通、设施联通、贸易畅通、资金融通、民心相通。',
        en: 'Adhering to the principle of extensive consultation and joint contribution for shared benefit, it is committed to achieving policy coordination, infrastructure connectivity, unimpeded trade, financial integration, and people-to-people bonds among participating countries.',
        annotations: [
          { fragment: 'extensive consultation and joint contribution for shared benefit', type: 'term', label: '官方译法', detail: '"共商共建共享"的正式译法，三词各有对应：共商=consultation，共建=contribution，共享=shared benefit' },
          { fragment: 'policy coordination, infrastructure connectivity, unimpeded trade, financial integration, and people-to-people bonds', type: 'term', label: '五通译法', detail: '"五通"各有固定译法，connectivity/integration/bonds 不可随意替换' }
        ],
        technique: {
          difficulty: 4,
          structure: '分词状语 + 主句 + 五项名词短语并列',
          structureAnalysis: 'Adhering to... 分词状语，主句 it is committed to achieving...，后接五项并列名词短语',
          whyGood: '用 Adhering to 分词状语开头，五个"通"统一为名词结构（coordination / connectivity / trade / integration / bonds），排比连贯。',
          keyVocab: ['adhering to', 'extensive consultation', 'joint contribution', 'shared benefit', 'policy coordination', 'infrastructure connectivity', 'unimpeded trade', 'financial integration', 'people-to-people bonds'],
          substitutionGuide: '"秉持"还可译 uphold / follow；"实现"可译 realize / deliver',
          sentencePattern: 'Adhering to the principle of A, B, and C, it is committed to achieving D, E, F, G, and H.',
          highScore: { en: 'Adhering to the principle of extensive consultation and joint contribution for shared benefit, it is committed to achieving policy coordination, infrastructure connectivity...', note: '分词状语+五项名词排比，精准对应原文层次' },
          lowScore: { en: 'It follows the principle of discussing together, building together and sharing together. It wants to make policies coordinated, facilities connected, trade smooth...', note: '三个 together 不正式，用形容词而非名词化表达，缺乏官方文件的庄重感' }
        }
      },
      {
        id: 'p8s3',
        cn: '这一倡议源于中国，但属于世界，为全球经济增长开辟了新空间，为国际贸易和投资搭建了新平台。',
        en: 'Originating in China, this initiative belongs to the world, having opened up new space for global economic growth and built a new platform for international trade and investment.',
        annotations: [
          { fragment: 'Originating in China, this initiative belongs to the world', type: 'grammar', label: '分词状语+主句', detail: 'Originating in China 分词短语表来源，belongs to the world 主句，形成"源于...属于..."的工整对仗' },
          { fragment: 'having opened up...and built', type: 'grammar', label: '完成分词状语', detail: 'having + 过去分词表先于主句完成的动作，强调成果已实现' }
        ],
        technique: {
          difficulty: 3,
          structure: '分词状语 + 主句 + 完成分词状语(含双并列)',
          structureAnalysis: 'Originating in China 表来源，主句 this initiative belongs to the world，having opened...and built... 表结果',
          whyGood: '三层次结构清晰：来源（分词）+ 属性（主句）+ 成果（完成分词），将中文流水句整合为逻辑分明的英文长句。',
          keyVocab: ['originating in', 'belongs to', 'having opened up', 'new space', 'global economic growth', 'international trade and investment'],
          substitutionGuide: '"源于"还可译 stem from / be rooted in；"开辟"可译 create / carve out',
          sentencePattern: 'Originating in A, B belongs to C, having done X and done Y.',
          highScore: { en: 'Originating in China, this initiative belongs to the world, having opened up new space for global economic growth and built a new platform for international trade and investment.', note: '分词+主句+完成分词三层结构，将流水句转化为逻辑长句' },
          lowScore: { en: 'This initiative comes from China but belongs to the world. It has opened new space for global economic growth and built a new platform for international trade and investment.', note: '拆成两句削弱"源于-属于-开辟-搭建"的递进逻辑链' }
        }
      },
      {
        id: 'p8s4',
        cn: '截至2024年，已有150多个国家和国际组织签署了共建"一带一路"合作文件。',
        en: 'By 2024, over 150 countries and international organizations had signed cooperation documents on the Belt and Road Initiative.',
        annotations: [
          { fragment: 'By 2024, over 150 countries', type: 'grammar', label: '过去完成时', detail: 'By 2024 + 过去完成时 had signed，表示到过去某一时间点已完成的动作' }
        ],
        technique: {
          difficulty: 1,
          structure: '时间状语 + 主谓宾(过去完成时)',
          structureAnalysis: 'By 2024 时间状语，过去完成时 had signed 强调截至2024年已签约',
          whyGood: 'By + 过去时间点 + 过去完成时是英文中表达"截至某时已完成"的标准句式。',
          keyVocab: ['by 2024', 'over 150', 'international organizations', 'signed', 'cooperation documents'],
          substitutionGuide: '"签署"还可译 inked / concluded；"国际组织"本身已很标准',
          sentencePattern: 'By + year, over + number + N had done sth.',
          highScore: { en: 'By 2024, over 150 countries and international organizations had signed cooperation documents on the Belt and Road Initiative.', note: 'By + 过去完成时，精确传达时间节点' },
          lowScore: { en: 'Until 2024, more than 150 countries and international organizations have signed the BRI cooperation documents.', note: 'Until 语义不对（隐含到此时停止），现在完成时错误（应为过去完成时）' }
        }
      }
    ]
  },
  // p9. 数字经济 (2024.6)
  {
    id: 'p9',
    title: '数字经济',
    year: '2024.6',
    topic: '经济发展',
    difficulty: 2,
    fullCN: '数字经济已成为推动中国经济增长的重要力量。中国数字经济规模连续多年位居世界第二，占国内生产总值的比重不断提升。大数据、云计算和人工智能等数字技术正在深刻改变传统产业的生产方式。在线购物、数字支付和远程办公已经融入中国人的日常生活。中国正加快推进数字产业化和产业数字化，致力于建设数字中国。',
    fullEN: 'The digital economy has become a major force driving China\'s economic growth. The scale of China\'s digital economy has ranked second in the world for consecutive years, with its share of GDP continuously rising. Digital technologies such as big data, cloud computing, and artificial intelligence are profoundly transforming the production methods of traditional industries. Online shopping, digital payment, and remote work have been integrated into the daily lives of Chinese people. China is accelerating the digitalization of industries and the digital transformation of traditional industries, striving to build a digital China.',
    sentences: [
      {
        id: 'p9-s0',
        cn: '数字经济已成为推动中国经济增长的重要力量。',
        en: 'The digital economy has become a major force driving China\'s economic growth.',
        annotations: [
          { fragment: 'has become a major force driving', type: 'structure', label: '已成为推动...的重要力量', detail: 'a major force driving = 推动...的重要力量。现在分词 driving 作后置定语。' },
          { fragment: 'digital economy', type: 'vocab', label: '数字经济', detail: 'digital = 数字的。digital economy = 数字经济。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has become + a major force + 现在分词(driving...)',
          structureAnalysis: '(The digital economy) → has become → (a major force) → driving (China\'s economic growth)',
          whyGood: '① a major force driving 表达\'推动的重要力量\' ② digital economy 标准术语 ③ has become 现在完成时表达已形成的局面。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 major force → important power / key driver / significant force；不会 driving → pushing / propelling / fueling',
          sentencePattern: '\'A已成为推动B的重要力量\' → \'A has become a major force driving B\'',
          highScore: { en: '', note: 'a major force driving... 表达地道' },
          lowScore: { en: '', note: 'already 不必要 + power to push 不如 force driving + Digital 前缺 the。评分 10-12 分档。' }
        }
      },
      {
        id: 'p9-s1',
        cn: '中国数字经济规模连续多年位居世界第二，占国内生产总值的比重不断提升。',
        en: 'The scale of China\'s digital economy has ranked second in the world for consecutive years, with its share of GDP continuously rising.',
        annotations: [
          { fragment: 'has ranked second in the world', type: 'structure', label: '位居世界第二', detail: 'rank second = 排名第二。has ranked 现在完成时 + for consecutive years 表达连续多年的排名。' },
          { fragment: 'for consecutive years', type: 'phrase', label: '连续多年', detail: 'consecutive = 连续的。for consecutive years = 连续多年。' },
          { fragment: 'with its share of GDP continuously rising', type: 'structure', label: '占GDP比重不断提升', detail: 'with + 独立主格。share of GDP = GDP占比。continuously rising = 不断提升。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + has ranked second + for consecutive years + with + 独立主格',
          structureAnalysis: '(The scale of China\'s digital economy) → has ranked second (in the world) → for consecutive years → with (its share of GDP) → continuously rising',
          whyGood: '① rank second 是\'排名第二\'的标准表达 ② consecutive years 精准 ③ with 独立主格处理比重上升不拆句。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 consecutive → straight / successive / in a row；不会 GDP → gross domestic product / economic output；不会 share of GDP → proportion of GDP / percentage of GDP',
          sentencePattern: '\'A规模连续多年位居世界第二，占B的比重不断提升\' → \'The scale of A has ranked second in the world for consecutive years, with its share of B continuously rising\'',
          highScore: { en: '', note: 'has ranked second + consecutive years + with 独立主格 精准' },
          lowScore: { en: '', note: 'second biggest 不如 rank second + many years 不如 consecutive years + percentage 不如 share + keeps going up 不如 continuously rising。评分 8-10 分档。' }
        }
      },
      {
        id: 'p9-s2',
        cn: '大数据、云计算和人工智能等数字技术正在深刻改变传统产业的生产方式。',
        en: 'Digital technologies such as big data, cloud computing, and artificial intelligence are profoundly transforming the production methods of traditional industries.',
        annotations: [
          { fragment: 'big data, cloud computing, and artificial intelligence', type: 'vocab', label: '大数据、云计算和人工智能', detail: 'big data = 大数据。cloud computing = 云计算。artificial intelligence = 人工智能。三个现代技术术语并列。' },
          { fragment: 'are profoundly transforming', type: 'structure', label: '正在深刻改变', detail: '现在进行时 are transforming = 正在改变。profoundly = 深刻地。' },
          { fragment: 'production methods', type: 'vocab', label: '生产方式', detail: 'production = 生产。methods = 方式/方法。production methods = 生产方式。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语(such as A, B, and C) + are profoundly transforming + 宾语',
          structureAnalysis: '(Digital technologies such as big data, cloud computing, and artificial intelligence) → are profoundly transforming → (the production methods of traditional industries)',
          whyGood: '① such as 自然引出三个技术术语 ② are profoundly transforming 现在进行时+副词表达深刻变革 ③ production methods 准确表达\'生产方式\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 profoundly → deeply / significantly / dramatically；不会 production methods → ways of production / manufacturing methods；不会 traditional industries → conventional sectors / old industries',
          sentencePattern: '\'A、B和C等数字技术正在深刻改变D的生产方式\' → \'Digital technologies such as A, B, and C are profoundly transforming the production methods of D\'',
          highScore: { en: '', note: 'such as 列举 + profoundly transforming + production methods 准确' },
          lowScore: { en: '', note: 'like 不如 such as + deeply 不如 profoundly + how...produce things 不如 production methods。评分 9-11 分档。' }
        }
      },
      {
        id: 'p9-s3',
        cn: '在线购物、数字支付和远程办公已经融入中国人的日常生活。',
        en: 'Online shopping, digital payment, and remote work have been integrated into the daily lives of Chinese people.',
        annotations: [
          { fragment: 'have been integrated into', type: 'structure', label: '已经融入', detail: 'have been integrated into = 已经被融入。现在完成时被动语态。integrate into = 融入/整合进。' },
          { fragment: 'remote work', type: 'vocab', label: '远程办公', detail: 'remote = 远程的。remote work = 远程办公。也可说 telecommuting。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语(并列三项) + have been integrated into + 名词',
          structureAnalysis: '(Online shopping, digital payment, and remote work) → have been integrated into → (the daily lives of Chinese people)',
          whyGood: '① have been integrated into 被动语态表达\'已融入\' ② remote work 准确表达\'远程办公\' ③ 三项主语并列简洁。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 integrated into → become part of / been incorporated into / blended into；不会 remote work → telecommuting / working from home / distance work',
          sentencePattern: '\'A、B和C已经融入D的日常生活\' → \'A, B, and C have been integrated into the daily lives of D\'',
          highScore: { en: '', note: 'have been integrated into + daily lives 地道' },
          lowScore: { en: '', note: 'paying 不如 payment + working from home 不如 remote work + become part of 不如 been integrated into。评分 10-12 分档。' }
        }
      },
      {
        id: 'p9-s4',
        cn: '中国正加快推进数字产业化和产业数字化，致力于建设数字中国。',
        en: 'China is accelerating the digitalization of industries and the digital transformation of traditional industries, striving to build a digital China.',
        annotations: [
          { fragment: 'is accelerating', type: 'structure', label: '正加快推进', detail: 'is accelerating = 正在加速（现在进行时）。accelerate = 加速/加快。' },
          { fragment: 'digitalization of industries and digital transformation of traditional industries', type: 'vocab', label: '数字产业化和产业数字化', detail: 'digitalization = 数字化。digital transformation = 数字化转型。两个并列的\'化\'字结构。' },
          { fragment: 'striving to build', type: 'structure', label: '致力于建设', detail: 'strive to do = 努力/致力于做。striving 现在分词表示伴随。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + is accelerating + A and B + 现在分词(striving to build...)',
          structureAnalysis: 'China → is accelerating → (the digitalization of industries) and (the digital transformation of traditional industries) → striving to build (a digital China)',
          whyGood: '① accelerate 精准表达\'加快推进\' ② digitalization vs digital transformation 区分\'数字化\'和\'数字化转型\' ③ striving to build 表达\'致力于建设\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 accelerate → speed up / quicken / fast-track；不会 digitalization → digitization / going digital；不会 striving → working hard / endeavoring / aiming',
          sentencePattern: '\'A正加快推进B和C，致力于建设D\' → \'A is accelerating B and C, striving to build D\'',
          highScore: { en: '', note: 'accelerating + digitalization/transformation 区分 + striving to 表达高级' },
          lowScore: { en: '', note: 'speeding up 不如 accelerating + two digitals 不够区分 + working hard 不如 striving。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p10. 文化自信 (2023.12)
  {
    id: 'p10',
    title: '文化自信',
    year: '2023.12',
    topic: '中国文化',
    difficulty: 3,
    fullCN: '文化自信是一个国家和民族发展中更基本、更深沉、更持久的力量。中华文明是世界上唯一没有中断的古老文明，历经五千多年而绵延不绝。坚定文化自信，必须推动中华优秀传统文化创造性转化和创新性发展。让收藏在博物馆里的文物、陈列在广阔大地上的遗产、书写在古籍里的文字都活起来，是传承和弘扬中华文化的关键所在。',
    fullEN: 'Cultural confidence is a more fundamental, profound, and enduring force in the development of a country and a nation. The Chinese civilization is the only ancient civilization in the world that has continued uninterrupted, enduring for over five thousand years. To strengthen cultural confidence, we must promote the creative transformation and innovative development of fine traditional Chinese culture. Bringing to life artifacts housed in museums, heritage sites spread across the vast land, and texts written in ancient books is the key to inheriting and promoting Chinese culture.',
    sentences: [
      {
        id: 'p10s1',
        cn: '文化自信是一个国家和民族发展中更基本、更深沉、更持久的力量。',
        en: 'Cultural confidence is a more fundamental, profound, and enduring force in the development of a country and a nation.',
        annotations: [
          { fragment: 'more fundamental, profound, and enduring', type: 'grammar', label: '三项递进形容词', detail: '三个比较级形容词并列作前置定语，对应中文"更基本、更深沉、更持久"的递进修辞' },
          { fragment: 'in the development of', type: 'phrase', label: '介词短语', detail: '"...发展中"译为 in the development of，比 in developing 更正式' }
        ],
        technique: {
          difficulty: 2,
          structure: '主系表 + 三项前置定语 + 介词短语',
          structureAnalysis: '主干为 Cultural confidence is a...force，三个比较级形容词前置修饰 force，in the development of... 后置限定',
          whyGood: '三个比较级形容词并列前置，既保留原文的递进排比修辞，又符合英文形容词前置的语序习惯。',
          keyVocab: ['cultural confidence', 'fundamental', 'profound', 'enduring', 'force'],
          substitutionGuide: '"更深沉"还可译 deeper / more deep-seated；"更持久"还可译 more lasting / more sustainable',
          sentencePattern: 'A is a more X, more Y, and more Z N in the development of B.',
          highScore: { en: 'Cultural confidence is a more fundamental, profound, and enduring force in the development of a country and a nation.', note: '三个比较级并列，精准对应中文"更...更...更..."的排比结构' },
          lowScore: { en: 'Cultural confidence is a more basic, deeper and longer force in a country and a nation.', note: 'basic 不能传达"基本"在此处的哲学含义，deeper 和 longer 用词过于浅显' }
        }
      },
      {
        id: 'p10s2',
        cn: '中华文明是世界上唯一没有中断的古老文明，历经五千多年而绵延不绝。',
        en: 'The Chinese civilization is the only ancient civilization in the world that has continued uninterrupted, enduring for over five thousand years.',
        annotations: [
          { fragment: 'the only ancient civilization...that has continued uninterrupted', type: 'grammar', label: '定语从句', detail: 'that 定语从句修饰 civilization，"没有中断的"译为 has continued uninterrupted（现在完成时强调延续至今）' },
          { fragment: 'enduring for over five thousand years', type: 'grammar', label: '分词状语', detail: '现在分词短语作伴随状语，补充说明"绵延不绝"的时长，比 and has endured 更紧凑' }
        ],
        technique: {
          difficulty: 2,
          structure: '主系表 + that定语从句 + 分词状语',
          structureAnalysis: 'Chinese civilization is the only ancient civilization...that has continued...，enduring... 分词补充',
          whyGood: 'that 定语从句+现在分词状语，将两个语义紧密的小句自然融合在一个英文长句中。',
          keyVocab: ['ancient civilization', 'continued uninterrupted', 'enduring', 'over five thousand years'],
          substitutionGuide: '"没有中断"还可译 without interruption / unbroken；"绵延不绝"可译 has lasted / has survived',
          sentencePattern: 'A is the only B that has done C, doing D for over E.',
          highScore: { en: 'The Chinese civilization is the only ancient civilization in the world that has continued uninterrupted, enduring for over five thousand years.', note: '定语从句+分词状语紧凑融合两个信息点' },
          lowScore: { en: 'Chinese culture is the only ancient culture in the world. It has not been broken. It has lasted for more than five thousand years.', note: '三短句割裂了语义连贯性，civilization 误译为 culture，broken 语义不对' }
        }
      },
      {
        id: 'p10s3',
        cn: '坚定文化自信，必须推动中华优秀传统文化创造性转化和创新性发展。',
        en: 'To strengthen cultural confidence, we must promote the creative transformation and innovative development of fine traditional Chinese culture.',
        annotations: [
          { fragment: 'To strengthen cultural confidence', type: 'grammar', label: '不定式目的状语', detail: '不定式置于句首表目的，比 in order to 更正式简洁' },
          { fragment: 'creative transformation and innovative development', type: 'phrase', label: '并列名词短语', detail: '"创造性转化和创新性发展"为固定表述，creative 对应"创造性"，innovative 对应"创新性"，不可互换' }
        ],
        technique: {
          difficulty: 2,
          structure: '不定式目的状语 + 主谓宾',
          structureAnalysis: 'To strengthen... 目的状语，we must promote... 主句',
          whyGood: '不定式放句首简洁表明目的，是政论文翻译的标准处理方式。',
          keyVocab: ['strengthen', 'promote', 'creative transformation', 'innovative development', 'fine traditional Chinese culture'],
          substitutionGuide: '"坚定"还可译 reinforce / consolidate；"推动"可译 advance / boost',
          sentencePattern: 'To do A, we must promote the B and C of D.',
          highScore: { en: 'To strengthen cultural confidence, we must promote the creative transformation and innovative development of fine traditional Chinese culture.', note: '不定式目的状语+精确的名词化表述' },
          lowScore: { en: 'If we want to make cultural confidence stronger, we need to change and develop traditional Chinese culture creatively and innovatively.', note: '用副词 creatively and innovatively 修饰动词不如名词化 transformation/development 正式' }
        }
      },
      {
        id: 'p10s4',
        cn: '让收藏在博物馆里的文物、陈列在广阔大地上的遗产、书写在古籍里的文字都活起来，是传承和弘扬中华文化的关键所在。',
        en: 'Bringing to life artifacts housed in museums, heritage sites spread across the vast land, and texts written in ancient books is the key to inheriting and promoting Chinese culture.',
        annotations: [
          { fragment: 'Bringing to life', type: 'phrase', label: '动名词主语', detail: '"让...活起来"译为 bring to life，比 make...alive 更符合英语习语表达' },
          { fragment: 'artifacts housed in museums', type: 'grammar', label: '过去分词后置定语', detail: 'housed in museums 过去分词修饰 artifacts，比 which are housed 简洁' },
          { fragment: 'heritage sites spread across the vast land', type: 'grammar', label: '过去分词后置定语', detail: 'spread across 过去分词修饰 heritage sites，三个并列主语各带不同分词修饰语' },
          { fragment: 'is the key to inheriting and promoting', type: 'phrase', label: '系表结构', detail: 'the key to 后接动名词，to 是介词不是不定式符号' }
        ],
        technique: {
          difficulty: 4,
          structure: '动名词主语(含三并列核心词+三组分词定语) + 系表',
          structureAnalysis: 'Bringing to life [X done..., Y done..., and Z done...] is the key to...，长动名词短语作主语，内含三项并列各带分词后置定语',
          whyGood: '中文"收藏在...的"、"陈列在...的"、"书写在...的"三个偏正结构，英文统一用过去分词后置定语处理，句式高度统一，符合英文多用分词修饰的习惯。',
          keyVocab: ['bring to life', 'artifacts', 'housed in', 'heritage sites', 'spread across', 'ancient books', 'inheriting and promoting'],
          substitutionGuide: '"文物"还可译 cultural relics / antiquities；"古籍"可译 ancient texts / classical books',
          sentencePattern: 'Bringing to life X done by/at/in A, Y done across B, and Z done in C is the key to doing D.',
          highScore: { en: 'Bringing to life artifacts housed in museums, heritage sites spread across the vast land, and texts written in ancient books is the key to inheriting and promoting Chinese culture.', note: '三个过去分词后置定语整齐对应中文排比结构' },
          lowScore: { en: 'Let artifacts in museums, heritage on the ground and writings in old books become alive. This is the key to inherit and spread Chinese culture.', note: '祈使句不正式，become alive 不符合英语习惯表达，heritage on the ground 生硬' }
        }
      }
    ]
  }
];

export function getPatternCrossReferences(patternId) {
  return [];
}
