// 10篇深度标注真题 (按年份由新到旧排序 2014.6–2020.9) — p31-p40

export const passagesPart4 = [
  // p31. 南京长江大桥 (2020.12)
  {
    id: 'p31',
    title: '南京长江大桥',
    year: '2020.12',
    topic: '科技成就',
    difficulty: 3,
    fullCN: '南京长江大桥是中国第一座自行设计和建造的公铁两用桥梁，于1968年建成通车。这座桥不仅是中国桥梁建设的里程碑，更是中国人民自力更生精神的象征。大桥上层为公路桥，下层为铁路桥，跨江长度超过一千五百米。它的建成结束了长江下游没有桥梁的历史，极大促进了南北交通。今天，南京长江大桥依然是中国桥梁工程的骄傲。',
    fullEN: 'The Nanjing Yangtze River Bridge is the first combined road-rail bridge independently designed and constructed by China, which was opened to traffic in 1968. This bridge is not only a milestone in China\'s bridge construction, but also a symbol of the Chinese people\'s spirit of self-reliance. The upper deck of the bridge serves as a road bridge and the lower deck as a railway bridge, with a river-spanning length of over 1,500 meters. Its completion ended the history of no bridges over the lower reaches of the Yangtze River and greatly facilitated north-south transportation. Today, the Nanjing Yangtze River Bridge remains a source of pride for China\'s bridge engineering.',
    sentences: [
      {
        id: 'p31-s0',
        cn: '南京长江大桥是中国第一座自行设计和建造的公铁两用桥梁，于1968年建成通车。',
        en: 'The Nanjing Yangtze River Bridge is the first combined road-rail bridge independently designed and constructed by China, which was opened to traffic in 1968.',
        annotations: [
          { fragment: 'combined road-rail bridge', type: 'vocab', label: '公铁两用桥梁', detail: 'combined = 组合的/联合的。road-rail bridge = 公铁两用桥。用 hyphen 连接复合词。' },
          { fragment: 'independently designed and constructed', type: 'vocab', label: '自行设计和建造', detail: 'independently = 独立地/自行地。designed and constructed = 设计和建造，被动语态省略 be。' },
          { fragment: 'which was opened to traffic', type: 'structure', label: 'which 非限制性定语从句', detail: 'which 指代前面整座桥，was opened to traffic = 通车。非限制性定语从句补充额外信息。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + is + the first + 名词 + 分词后置定语 + which 定语从句',
          structureAnalysis: 'The Nanjing Yangtze River Bridge → is → the first combined road-rail bridge → (independently designed and constructed by China) → which → was opened to traffic in 1968',
          whyGood: '① combined road-rail bridge 精准翻译\'公铁两用桥梁\' ② independently designed and constructed 分词后置贴合\'自行设计和建造\' ③ which 从句处理时间信息，避免断句。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 independently → on one\'s own / by oneself / without outside help；不会 combined road-rail bridge → dual-purpose bridge for road and rail；不会 opened to traffic → put into operation / began operating',
          sentencePattern: '\'XX是中国第一座自行设计和建造的A，于B年建成通车\' → \'XX is the first A independently designed and constructed by China, which was opened to traffic in B\'',
          highScore: { en: '', note: 'combined + independently + which 层层包裹信息' },
          lowScore: { en: '', note: 'bridge for both road and railway 过于啰嗦 + China itself 不如 independently。评分 8-10 分档。' }
        }
      },
      {
        id: 'p31-s1',
        cn: '这座桥不仅是中国桥梁建设的里程碑，更是中国人民自力更生精神的象征。',
        en: 'This bridge is not only a milestone in China\'s bridge construction, but also a symbol of the Chinese people\'s spirit of self-reliance.',
        annotations: [
          { fragment: 'not only...but also...', type: 'structure', label: '不仅...更...', detail: 'not only...but also... = 不仅...而且/更...。注意 also 可省略，但这里保留以强调递进。' },
          { fragment: 'milestone', type: 'vocab', label: '里程碑', detail: 'milestone = 里程碑。比 landmark 更侧重历史进程中的标志性事件。' },
          { fragment: 'spirit of self-reliance', type: 'vocab', label: '自力更生精神', detail: 'self-reliance = 自力更生。spirit of self-reliance = 自力更生精神，政治术语固定译法。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'not only + 名词A + but also + 名词B',
          structureAnalysis: 'This bridge → is → not only → (a milestone in China\'s bridge construction) → but also → (a symbol of the Chinese people\'s spirit of self-reliance)',
          whyGood: '① not only...but also... 递进结构呼应\'不仅...更...\' ② milestone 比 achievement 更具体 ③ self-reliance 是\'自力更生\'的标准英文译法。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 milestone → landmark / landmark event / major achievement；不会 self-reliance → independence / self-dependence / standing on one\'s own feet',
          sentencePattern: '\'XX不仅是A的里程碑，更是B的象征\' → \'XX is not only a milestone in A, but also a symbol of B\'',
          highScore: { en: '', note: 'not only...but also + milestone + self-reliance 精确对应原文' },
          lowScore: { en: '', note: 'important event 不如 milestone + depending on themselves 不如 self-reliance。评分 8-10 分档。' }
        }
      },
      {
        id: 'p31-s2',
        cn: '大桥上层为公路桥，下层为铁路桥，跨江长度超过一千五百米。',
        en: 'The upper deck of the bridge serves as a road bridge and the lower deck as a railway bridge, with a river-spanning length of over 1,500 meters.',
        annotations: [
          { fragment: 'The upper deck...the lower deck', type: 'vocab', label: '上层...下层', detail: 'deck = 桥面。upper/lower deck = 上/下层桥面。' },
          { fragment: 'serves as', type: 'vocab', label: '作为/充当', detail: 'serves as = 充当/用作。比 is 更有功能性含义，强调用途。' },
          { fragment: 'with a river-spanning length of', type: 'structure', label: 'with 复合结构', detail: 'with + 名词 + of + 数量 = 具有...的...。独立主格结构补充说明。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A serves as X and B as Y + with + 名词短语',
          structureAnalysis: 'The upper deck → serves as → a road bridge → and → the lower deck → (serves省略) as → a railway bridge → with → a river-spanning length of over 1,500 meters',
          whyGood: '① upper/lower deck 精准对应\'上层/下层\' ② and the lower deck as... 省略 serves 避免重复 ③ with 结构处理\'跨江长度超过\'，不与前面断裂。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 deck → level / layer / surface；不会 serves as → is / functions as / acts as；不会 river-spanning → crossing the river / across the river',
          sentencePattern: '\'XX上层为A，下层为B，跨江长度超过C\' → \'The upper deck of XX serves as A and the lower deck as B, with a river-spanning length of over C\'',
          highScore: { en: '', note: 'serves as + 省略 + with 结构，三个信息块一句话' },
          lowScore: { en: '', note: 'upper/lower part 不如 deck + for cars/trains 不够正式 + 拆成两句。评分 8-10 分档。' }
        }
      },
      {
        id: 'p31-s3',
        cn: '它的建成结束了长江下游没有桥梁的历史，极大促进了南北交通。',
        en: 'Its completion ended the history of no bridges over the lower reaches of the Yangtze River and greatly facilitated north-south transportation.',
        annotations: [
          { fragment: 'ended the history of no bridges', type: 'structure', label: '结束了没有...的历史', detail: 'ended the history of no... = 结束了没有...的历史。直译+强调效果很好。' },
          { fragment: 'the lower reaches', type: 'vocab', label: '下游', detail: 'reaches = 河段。the lower reaches = 下游/下游河段。' },
          { fragment: 'facilitated', type: 'vocab', label: '促进', detail: 'facilitate = 促进/使便利。比 promote 更侧重\'使某事更容易\'。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + ended + 宾语A + and + greatly facilitated + 宾语B',
          structureAnalysis: 'Its completion → ended → (the history of no bridges over the lower reaches of the Yangtze River) → and → greatly facilitated → (north-south transportation)',
          whyGood: '① ended the history of no bridges 处理\'结束了没有桥梁的历史\'地道 ② lower reaches 准确表达\'下游\' ③ facilitate 精准表达\'促进/便利化\'比 promote 更贴切。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 its completion → the finishing of it / when it was finished；不会 lower reaches → downstream / lower part of the river；不会 facilitated → improved / promoted / boosted',
          sentencePattern: '\'XX的建成结束了A的历史，极大促进了B\' → \'Its completion ended the history of A and greatly facilitated B\'',
          highScore: { en: '', note: 'ended the history of no bridges + facilitated 精准' },
          lowScore: { en: '', note: '两句+表达绕圈+helped 不如 facilitated+lower part 不如 lower reaches。评分 8-10 分档。' }
        }
      },
      {
        id: 'p31-s4',
        cn: '今天，南京长江大桥依然是中国桥梁工程的骄傲。',
        en: 'Today, the Nanjing Yangtze River Bridge remains a source of pride for China\'s bridge engineering.',
        annotations: [
          { fragment: 'remains', type: 'vocab', label: '依然是', detail: 'remains = 依然是/仍然是。比 is still 更正式，强调经久不变。' },
          { fragment: 'a source of pride', type: 'phrase', label: '骄傲之源', detail: 'a source of pride = 骄傲的来源/为之骄傲的事物。比 a pride 更自然。' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主语 + remains + 表语',
          structureAnalysis: 'Today → the Nanjing Yangtze River Bridge → remains → a source of pride for China\'s bridge engineering',
          whyGood: '① remains 比 is still 更正式 ② a source of pride 比直接用 pride 更符合英文习惯 ③ for 表示\'对...而言\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 remains → is still / continues to be / stays；不会 a source of pride → something to be proud of / a proud achievement',
          sentencePattern: '\'今天，XX依然是A的骄傲\' → \'Today, XX remains a source of pride for A\'',
          highScore: { en: '', note: 'remains + a source of pride 表达精准' },
          lowScore: { en: '', note: 'something...feel proud of 太口语化。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p32. 四大名著 (2020.9)
  {
    id: 'p32',
    title: '四大名著',
    year: '2020.9',
    topic: '古典文学',
    difficulty: 2,
    fullCN: '中国古典文学四大名著是指《红楼梦》、《三国演义》、《水浒传》和《西游记》。这四部小说创作于明清时期，是中国文学史上最负盛名的作品。《红楼梦》以贾宝玉和林黛玉的爱情悲剧为主线，描绘了一个封建家族的兴衰；《西游记》则讲述了唐僧师徒四人西天取经的神话故事。几百年来，四大名著不仅在中国家喻户晓，还被翻译成多种语言，在世界范围内广泛传播。',
    fullEN: 'The Four Great Classical Novels of Chinese literature refer to "A Dream of Red Mansions," "Romance of the Three Kingdoms," "Water Margin," and "Journey to the West." These four novels were written during the Ming and Qing dynasties and are the most prestigious works in the history of Chinese literature. "A Dream of Red Mansions" uses the love tragedy of Jia Baoyu and Lin Daiyu as its main storyline and depicts the rise and fall of a feudal family; "Journey to the West" tells the mythological story of the Tang monk and his three disciples traveling westward to obtain Buddhist scriptures. For hundreds of years, the Four Great Classical Novels have not only been household names in China but have also been translated into multiple languages and widely circulated around the world.',
    sentences: [
      {
        id: 'p32-s0',
        cn: '中国古典文学四大名著是指《红楼梦》、《三国演义》、《水浒传》和《西游记》。',
        en: 'The Four Great Classical Novels of Chinese literature refer to "A Dream of Red Mansions," "Romance of the Three Kingdoms," "Water Margin," and "Journey to the West."',
        annotations: [
          { fragment: 'The Four Great Classical Novels', type: 'vocab', label: '四大名著', detail: 'Four Great Classical Novels = 四大名著（标准译法）。Classical = 古典的。Novels = 长篇小说。' },
          { fragment: 'refer to', type: 'phrase', label: '指的是', detail: 'refer to = 指的是/指称。比 mean 更正式，用于解释术语。' }
        ],
        technique: {
          difficulty: 1,
          structure: '专有名词主语 + refer to + 列举(四个书名)',
          structureAnalysis: 'The Four Great Classical Novels of Chinese literature → refer to → \'A Dream of Red Mansions,\' \'Romance of the Three Kingdoms,\' \'Water Margin,\' and \'Journey to the West\'',
          whyGood: '① Four Great Classical Novels 是\'四大名著\'的国际标准译法 ② refer to 精准表达\'指的是\' ③ 四个书名用书名号引起来，英文规范。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 refer to → mean / are / include',
          sentencePattern: '\'A四大名著是指甲、乙、丙和丁\' → The Four Great A Novels refer to 甲, 乙, 丙, and 丁',
          highScore: { en: '', note: 'Four Great Classical Novels + refer to + 书名翻译准确' },
          lowScore: { en: '', note: 'four famous books 非标准译法 + 书名翻译部分有偏差。评分 8-11 分档。' }
        }
      },
      {
        id: 'p32-s1',
        cn: '这四部小说创作于明清时期，是中国文学史上最负盛名的作品。',
        en: 'These four novels were written during the Ming and Qing dynasties and are the most prestigious works in the history of Chinese literature.',
        annotations: [
          { fragment: 'were written during the Ming and Qing dynasties', type: 'structure', label: '被动 + 时间状语', detail: 'were written = 被创作（被动）。during = 在...期间。dynasties 用复数表达两个朝代。' },
          { fragment: 'the most prestigious works', type: 'vocab', label: '最负盛名的作品', detail: 'prestigious = 有声望的/负盛名的。比 famous 多一层\'尊崇\'的含义。works = 作品。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + were written during A and are the most B in the history of C',
          structureAnalysis: 'These four novels → were written (during the Ming and Qing dynasties) → and → are (the most prestigious works in the history of Chinese literature)',
          whyGood: '① were written 被动处理\'创作于\' ② prestigious 精准表达\'负盛名\'而非一般有名 ③ 过去时+现在时，时态区分合理。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 prestigious → famous / well-known / highly respected；不会 were written → were created / came from / date back to',
          sentencePattern: '\'这N部小说创作于A时期，是B史上最负盛名的作品\' → These N novels were written during A and are the most prestigious works in the history of B',
          highScore: { en: '', note: 'were written + prestigious + works' },
          lowScore: { en: '', note: 'were made 不如 were written + famous 不如 prestigious + writings 不如 works。评分 8-10 分档。' }
        }
      },
      {
        id: 'p32-s2',
        cn: '《红楼梦》以贾宝玉和林黛玉的爱情悲剧为主线，描绘了一个封建家族的兴衰；《西游记》则讲述了唐僧师徒四人西天取经的神话故事。',
        en: '"A Dream of Red Mansions" uses the love tragedy of Jia Baoyu and Lin Daiyu as its main storyline and depicts the rise and fall of a feudal family; "Journey to the West" tells the mythological story of the Tang monk and his three disciples traveling westward to obtain Buddhist scriptures.',
        annotations: [
          { fragment: 'uses...as its main storyline', type: 'structure', label: 'use A as B', detail: 'use A as B = 以A为B。main storyline = 主线。比 main plot 更强调叙事线。' },
          { fragment: 'depicts the rise and fall of a feudal family', type: 'vocab', label: '描绘兴衰', detail: 'depicts = 描绘。rise and fall = 兴衰。feudal = 封建的。' },
          { fragment: 'the Tang monk and his three disciples traveling westward', type: 'vocab', label: '唐僧师徒四人', detail: 'Tang monk = 唐僧。disciples = 弟子/徒弟。traveling westward = 西行。' }
        ],
        technique: {
          difficulty: 3,
          structure: '分号连接两个并列句：A uses...as...and depicts...; B tells...',
          structureAnalysis: '\'A Dream of Red Mansions\' → uses (the love tragedy of...) as its main storyline → and depicts (the rise and fall of...) → ; → \'Journey to the West\' → tells (the mythological story of...)',
          whyGood: '① uses...as its main storyline 精准翻译\'以...为主线\' ② 分号分隔两部书的介绍，结构清晰 ③ disciples traveling westward 处理\'师徒四人西天取经\'简洁准确。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 storyline → plot / story / theme；不会 feudal → old-style / traditional aristocratic；不会 disciples → students / followers / apprentices',
          sentencePattern: '\'甲以A为主线，描绘了B；乙则讲述了C\' → 甲 uses A as its main storyline and depicts B; 乙 tells C',
          highScore: { en: '', note: 'uses...as + depicts + 分号对比 + disciples traveling westward' },
          lowScore: { en: '', note: 'is mainly about 不如 uses...as + going up and down 不如 rise and fall + students 不如 disciples。评分 8-10 分档。' }
        }
      },
      {
        id: 'p32-s3',
        cn: '几百年来，四大名著不仅在中国家喻户晓，还被翻译成多种语言，在世界范围内广泛传播。',
        en: 'For hundreds of years, the Four Great Classical Novels have not only been household names in China but have also been translated into multiple languages and widely circulated around the world.',
        annotations: [
          { fragment: 'For hundreds of years', type: 'structure', label: 'For + 时间段', detail: 'For hundreds of years = 几百年来。搭配现在完成时。' },
          { fragment: 'have not only been...but have also been', type: 'structure', label: 'not only...but also + 完成时被动', detail: 'have not only been A but have also been B and C。完成时 + 并列被动结构。' },
          { fragment: 'household names', type: 'vocab', label: '家喻户晓', detail: 'household names = 家喻户晓的名字/事物。household = 家庭/户。比 known by everyone 更地道。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'For + 时间段 + 主语 + have not only been A but have also been B and C',
          structureAnalysis: 'For hundreds of years → the Four Great Classical Novels → have not only been (household names in China) → but have also been (translated into multiple languages) and (widely circulated around the world)',
          whyGood: '① For + 现完表达持续状态 ② not only...but also 连接两个并列被动结构 ③ household names 地道表达\'家喻户晓\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 household names → well-known / known to every family / famous everywhere；不会 circulated → spread / distributed / shared',
          sentencePattern: '\'几百年来，XX不仅在中国家喻户晓，还被翻译成多种语言，在A范围内广泛传播\' → For hundreds of years, XX have not only been household names in China but have also been translated into multiple languages and widely circulated around A',
          highScore: { en: '', note: 'For + 现完 + not only...but also + household names + widely circulated' },
          lowScore: { en: '', note: 'are 应为 have been + known to every Chinese family 不如 household names。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p33. 郑和下西洋 (2020.9)
  {
    id: 'p33',
    title: '郑和下西洋',
    year: '2020.9',
    topic: '历史文化',
    difficulty: 3,
    fullCN: '郑和是中国明代著名的航海家。15世纪初，他率领庞大的船队七次远航西洋，访问了东南亚、南亚、中东和东非的30多个国家和地区。郑和的船队规模之大、技术之先进，在当时世界上遥遥领先。这些远航不仅展示了中国的强大国力，也促进了中外经济文化交流。郑和下西洋是中国古代航海史上的壮举，比哥伦布发现美洲早近一个世纪。',
    fullEN: 'Zheng He was a famous navigator of the Ming Dynasty. In the early 15th century, he led a massive fleet on seven expeditions to the Western Seas, visiting over 30 countries and regions in Southeast Asia, South Asia, the Middle East, and East Africa. The size of Zheng He\'s fleet and the advancement of its technology were far ahead of others in the world at that time. These voyages not only demonstrated China\'s national strength, but also promoted economic and cultural exchanges between China and other countries. Zheng He\'s voyages are a great feat in the history of ancient Chinese navigation, predating Christopher Columbus\'s discovery of the Americas by nearly a century.',
    sentences: [
      {
        id: 'p33-s0',
        cn: '郑和是中国明代著名的航海家。',
        en: 'Zheng He was a famous navigator of the Ming Dynasty.',
        annotations: [
          { fragment: 'navigator', type: 'vocab', label: '航海家', detail: 'navigator = 航海家/航海者。比 sailor 更专业，强调航海探险能力。' },
          { fragment: 'of the Ming Dynasty', type: 'phrase', label: '明代的', detail: 'of the Ming Dynasty = 明代的。of + 朝代表示所属时期。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + was + a + 形容词 + 名词 + of + 朝代',
          structureAnalysis: 'Zheng He → was → a famous navigator → of the Ming Dynasty',
          whyGood: '① navigator 比 sailor/explorer 更准确地翻译\'航海家\' ② of the Ming Dynasty 简洁表达\'明代\'。',
          keyVocab: [''],
          substitutionGuide: '不会 navigator → maritime explorer / great sailor / seafarer',
          sentencePattern: '\'XX是中国Y代著名的Z\' → \'XX was a famous Z of the Y Dynasty\'',
          highScore: { en: '', note: 'navigator + of the Ming Dynasty 简洁准确' },
          lowScore: { en: '', note: 'sailor 不如 navigator 专业。评分 10-12 分档。' }
        }
      },
      {
        id: 'p33-s1',
        cn: '15世纪初，他率领庞大的船队七次远航西洋，访问了东南亚、南亚、中东和东非的30多个国家和地区。',
        en: 'In the early 15th century, he led a massive fleet on seven expeditions to the Western Seas, visiting over 30 countries and regions in Southeast Asia, South Asia, the Middle East, and East Africa.',
        annotations: [
          { fragment: 'led a massive fleet', type: 'vocab', label: '率领庞大的船队', detail: 'fleet = 船队/舰队。massive = 庞大的。lead a fleet = 率领船队。' },
          { fragment: 'on seven expeditions', type: 'phrase', label: '七次远航', detail: 'expedition = 远征/探险航行。on expeditions = 进行远征航行。' },
          { fragment: 'visiting...', type: 'structure', label: '现在分词伴随状语', detail: '现在分词 visiting 表示伴随动作，比 and visited... 更紧凑。罗列多地点的标准写法。' }
        ],
        technique: {
          difficulty: 3,
          structure: '时间状语 + 主语 + led + A on B + 现在分词(visiting + 地名罗列)',
          structureAnalysis: '(In the early 15th century) → he → led → (a massive fleet) → on (seven expeditions to the Western Seas) → visiting → (over 30 countries and regions in Southeast Asia, South Asia, the Middle East, and East Africa)',
          whyGood: '① led...on expeditions 地道表达\'率领...远航\' ② visiting 现在分词处理\'访问了...\'使句子连贯 ③ 地名罗列用逗号清晰分隔。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 massive fleet → huge group of ships / enormous navy；不会 expedition → voyage / journey / navigation；不会 visiting → traveling to / going to / stopping at',
          sentencePattern: '\'X世纪初，他率领A七次远航B，访问了C、D、E和F的30多个国家和地区\' → \'In the early X century, he led A on seven expeditions to B, visiting over 30 countries and regions in C, D, E, and F\'',
          highScore: { en: '', note: 'led...on expeditions + visiting 处理长句不散架' },
          lowScore: { en: '', note: 'took a big team of ships 不如 led a massive fleet + 拆成两句 + areas 不如 regions。评分 8-10 分档。' }
        }
      },
      {
        id: 'p33-s2',
        cn: '郑和的船队规模之大、技术之先进，在当时世界上遥遥领先。',
        en: 'The size of Zheng He\'s fleet and the advancement of its technology were far ahead of others in the world at that time.',
        annotations: [
          { fragment: 'The size of...and the advancement of...', type: 'structure', label: '两个并列主语', detail: 'the + n. + of 结构把中文的\'...之大/之先进\'转化成英文名词短语。' },
          { fragment: 'far ahead of', type: 'phrase', label: '遥遥领先', detail: 'far ahead of = 远远领先于。far 加强 ahead of 的程度，比 much more advanced 更生动。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'The + n. of A and the + n. of B + were + far ahead of + 比较对象',
          structureAnalysis: '(The size of Zheng He\'s fleet) and (the advancement of its technology) → were → far ahead of → (others in the world at that time)',
          whyGood: '① 用 the + n. + of 把中文的主谓结构转为名词短语，符合英文偏好名词化的特点 ② far ahead of 生动传达\'遥遥领先\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 advancement → advanced nature / sophistication / progressiveness；不会 far ahead of → much more advanced than / far superior to / way beyond',
          sentencePattern: '\'XX的A之大、B之先进，在当时C遥遥领先\' → \'The A of XX and the B of its C were far ahead of others in the world at that time\'',
          highScore: { en: '', note: '名词化主语 + far ahead of 地道' },
          lowScore: { en: '', note: '拆成两句 + 没有体现\'规模之大/技术之先进\'的名词化表达。评分 8-10 分档。' }
        }
      },
      {
        id: 'p33-s3',
        cn: '这些远航不仅展示了中国的强大国力，也促进了中外经济文化交流。',
        en: 'These voyages not only demonstrated China\'s national strength, but also promoted economic and cultural exchanges between China and other countries.',
        annotations: [
          { fragment: 'demonstrated', type: 'vocab', label: '展示', detail: 'demonstrate = 展示/证明。比 show 更正式，暗示通过行动展示。' },
          { fragment: 'national strength', type: 'vocab', label: '国力', detail: 'national strength = 国力。比 national power 更综合，涵盖经济军事等。' },
          { fragment: 'economic and cultural exchanges', type: 'vocab', label: '经济文化交流', detail: 'exchanges = 交流。economic and cultural exchanges = 经济文化交流。固定搭配。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'not only + demonstrated + A, but also + promoted + B',
          structureAnalysis: 'These voyages → not only → demonstrated → (China\'s national strength) → but also → promoted → (economic and cultural exchanges between China and other countries)',
          whyGood: '① not only...but also 对应\'不仅...也\' ② demonstrated 比 showed 更有\'通过行动展现\'的意味 ③ national strength 比 national power 更全面。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 demonstrate → show / display / showcase；不会 national strength → national power / the country\'s might；不会 exchanges → communication / interaction / trade',
          sentencePattern: '\'这些A不仅展示了B，也促进了C\' → \'These A not only demonstrated B, but also promoted C\'',
          highScore: { en: '', note: 'not only...but also + demonstrated + exchanges 精准' },
          lowScore: { en: '', note: 'showed that China was strong 不如 demonstrated national strength + communication 不如 exchanges。评分 8-10 分档。' }
        }
      },
      {
        id: 'p33-s4',
        cn: '郑和下西洋是中国古代航海史上的壮举，比哥伦布发现美洲早近一个世纪。',
        en: 'Zheng He\'s voyages are a great feat in the history of ancient Chinese navigation, predating Christopher Columbus\'s discovery of the Americas by nearly a century.',
        annotations: [
          { fragment: 'a great feat', type: 'vocab', label: '壮举', detail: 'feat = 壮举/功绩。great feat = 伟大的壮举。比 great achievement 更有\'不凡之举\'的意味。' },
          { fragment: 'predating...by nearly a century', type: 'structure', label: '现在分词 + by + 时间差', detail: 'predate = 早于/先于。predating...by nearly a century = 比...早近一个世纪。分词表达时间对比。' },
          { fragment: 'the Americas', type: 'vocab', label: '美洲', detail: 'the Americas = 美洲（包括北美和南美）。America = 美国。the Americas 才指美洲大陆。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主句 + 现在分词(predating...by + 时间差)',
          structureAnalysis: 'Zheng He\'s voyages → are → a great feat (in the history of ancient Chinese navigation) → predating → (Christopher Columbus\'s discovery of the Americas) → by nearly a century',
          whyGood: '① feat 精准表达\'壮举\' ② predating...by... 用分词处理时间对比比独立从句更紧凑 ③ the Americas 准确区分\'美洲\'与\'美国\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 feat → great achievement / remarkable accomplishment；不会 predate → come before / precede / happen earlier than；不会 the Americas → the American continent / the New World',
          sentencePattern: '\'XX是A史上的壮举，比B早近C\' → \'XX is a great feat in the history of A, predating B by nearly C\'',
          highScore: { en: '', note: 'feat + predating...by 表达地道紧凑' },
          lowScore: { en: '', note: 'sea history 不如 navigation + America 不等于\'美洲\' + 拆成两句。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p34. 中国文化产品 (2020.9)
  {
    id: 'p34',
    title: '中国文化产品',
    year: '2020.9',
    topic: '文化传播',
    difficulty: 3,
    fullCN: '近年来，中国文化产品在国际市场上的影响力日益增强。中国电影、电视剧、网络小说和动漫作品不仅受到国内观众的喜爱，也在海外收获了大批粉丝。中国网络文学更是成为世界文化现象，大量作品被翻译成多种语言在海外传播。这一趋势反映了中国文化软实力的不断提升，也为世界了解中国打开了新的窗口。越来越多的中国文化企业开始布局海外市场，推动中国故事走向世界。',
    fullEN: 'In recent years, the influence of Chinese cultural products in the international market has been steadily growing. Chinese films, TV dramas, web novels, and animation works have not only been loved by domestic audiences but have also gained a large number of fans overseas. Chinese online literature has even become a global cultural phenomenon, with a large number of works translated into multiple languages and spread abroad. This trend reflects the continuous enhancement of China\'s cultural soft power and has opened new windows for the world to understand China. An increasing number of Chinese cultural enterprises are beginning to expand into overseas markets, promoting Chinese stories to the world.',
    sentences: [
      {
        id: 'p34-s0',
        cn: '近年来，中国文化产品在国际市场上的影响力日益增强。',
        en: 'In recent years, the influence of Chinese cultural products in the international market has been steadily growing.',
        annotations: [
          { fragment: 'In recent years', type: 'phrase', label: '近年来', detail: 'In recent years = 近年来。后接现在完成时，表示从过去持续到现在的趋势。' },
          { fragment: 'has been steadily growing', type: 'structure', label: '现在完成进行时', detail: 'has been growing = 一直在增长。现在完成进行时 + steadily 表达持续的渐进增长。' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主语(the influence of...) + has been + steadily growing',
          structureAnalysis: '(In recent years) → the influence (of Chinese cultural products in the international market) → has been → steadily growing',
          whyGood: '① In recent years + 现在完成进行时 = 表达近年来的持续趋势的经典搭配 ② the influence of 名词化处理\'影响力\' ③ steadily 精准表达\'日益\'的渐进性。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 steadily → continuously / increasingly / gradually；不会 growing → increasing / rising / expanding；不会 cultural products → cultural goods / cultural works',
          sentencePattern: '\'近年来，XX在国际市场上的A日益增强\' → \'In recent years, the A of XX in the international market has been steadily growing\'',
          highScore: { en: '', note: '现在完成进行时 + steadily 表达持续趋势' },
          lowScore: { en: '', note: 'more and more 不如 has been steadily growing 正式。评分 10-12 分档。' }
        }
      },
      {
        id: 'p34-s1',
        cn: '中国电影、电视剧、网络小说和动漫作品不仅受到国内观众的喜爱，也在海外收获了大批粉丝。',
        en: 'Chinese films, TV dramas, web novels, and animation works have not only been loved by domestic audiences but have also gained a large number of fans overseas.',
        annotations: [
          { fragment: 'web novels', type: 'vocab', label: '网络小说', detail: 'web novel = 网络小说。比 online novel 更常用。web literature = 网络文学。' },
          { fragment: 'not only been loved...but have also gained', type: 'structure', label: 'not only...but also + 现在完成时', detail: 'not only + 被动 + but also + 主动。时态一致为现在完成时，表达从过去到现在。' },
          { fragment: 'a large number of fans', type: 'phrase', label: '大批粉丝', detail: 'a large number of = 大量的。fans = 粉丝/爱好者。比 many fans 更正式。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语罗列 + not only + 被动(been loved) + but also + 主动(gained) + 地点',
          structureAnalysis: 'Chinese films, TV dramas, web novels, and animation works → have → not only → been loved (by domestic audiences) → but have also → gained → (a large number of fans overseas)',
          whyGood: '① 四个主语并列罗列符合英文习惯 ② not only...but also 连接被动和主动两个谓语 ③ gained fans 比 received fans 更自然。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 web novels → online novels / internet fiction；不会 animation works → cartoons / animated works / anime；不会 gained → won / attracted / acquired',
          sentencePattern: '\'A、B、C和D不仅受到国内E的喜爱，也在海外收获了大批F\' → \'A, B, C, and D have not only been loved by domestic E but have also gained a large number of F overseas\'',
          highScore: { en: '', note: '主语罗列 + 被动→主动切换流畅' },
          lowScore: { en: '', note: 'movies/shows/stories 不够正式 + liked by 不如 loved by + foreign countries 不如 overseas。评分 8-10 分档。' }
        }
      },
      {
        id: 'p34-s2',
        cn: '中国网络文学更是成为世界文化现象，大量作品被翻译成多种语言在海外传播。',
        en: 'Chinese online literature has even become a global cultural phenomenon, with a large number of works translated into multiple languages and spread abroad.',
        annotations: [
          { fragment: 'has even become', type: 'structure', label: '更是成为', detail: 'even = 甚至/更是。has even become = 甚至已经成为。even 加强递进语气。' },
          { fragment: 'a global cultural phenomenon', type: 'vocab', label: '世界文化现象', detail: 'phenomenon = 现象。global cultural phenomenon = 全球性文化现象。' },
          { fragment: 'with...translated...and spread', type: 'structure', label: 'with + 宾语 + 过去分词', detail: 'with + n. + 过去分词 = 独立主格。一个 with 结构包含两个过去分词(translated 和 spread)。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + has even become + 表语 + with + 宾语 + 过去分词(translated...and spread)',
          structureAnalysis: 'Chinese online literature → has even become → (a global cultural phenomenon) → with → (a large number of works) → translated (into multiple languages) and spread (abroad)',
          whyGood: '① even 加强递进 ② phenomenon 精准表达\'现象\' ③ with 独立主格处理\'大量作品被...\'不拆句。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 online literature → web literature / internet literature；不会 phenomenon → occurrence / trend；不会 spread abroad → circulated overseas / distributed internationally',
          sentencePattern: '\'XX更是成为世界文化现象，大量A被翻译成多种语言在海外传播\' → \'XX has even become a global cultural phenomenon, with a large number of A translated into multiple languages and spread abroad\'',
          highScore: { en: '', note: 'even + phenomenon + with 结构整合两个动作' },
          lowScore: { en: '', note: 'internet literature 不如 online literature + 拆成两句 + world 不如 global。评分 9-11 分档。' }
        }
      },
      {
        id: 'p34-s3',
        cn: '这一趋势反映了中国文化软实力的不断提升，也为世界了解中国打开了新的窗口。',
        en: 'This trend reflects the continuous enhancement of China\'s cultural soft power and has opened new windows for the world to understand China.',
        annotations: [
          { fragment: 'reflects', type: 'vocab', label: '反映', detail: 'reflect = 反映/折射。比 show 更贴切，暗示趋势是深层变化的表象。' },
          { fragment: 'cultural soft power', type: 'vocab', label: '文化软实力', detail: 'soft power = 软实力。文化软实力 = cultural soft power。国际关系术语。' },
          { fragment: 'has opened new windows for...to...', type: 'structure', label: '为...打开了...的窗口', detail: 'open windows for sb. to do sth. = 为某人做某事打开窗口。比喻性表达的精准翻译。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + reflects + A + and + has opened + B + for + C + to do D',
          structureAnalysis: 'This trend → reflects → (the continuous enhancement of China\'s cultural soft power) → and → has opened → (new windows) → for (the world) → to understand (China)',
          whyGood: '① reflect 比 show 更能传达\'趋势反映本质\'的关系 ② cultural soft power 是标准术语 ③ open new windows 保留原文比喻。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 reflect → show / indicate / reveal；不会 soft power → cultural influence / soft strength；不会 enhancement → improvement / rise / boost；不会 open windows → provide channels / create opportunities',
          sentencePattern: '\'这一趋势反映了A的不断提升，也为B了解C打开了新的窗口\' → \'This trend reflects the continuous enhancement of A and has opened new windows for B to understand C\'',
          highScore: { en: '', note: 'reflects + soft power + open windows 保留原文修辞' },
          lowScore: { en: '', note: 'shows 不如 reflects + becoming stronger 不如 enhancement of soft power + gives...ways 不如 opens windows。评分 8-10 分档。' }
        }
      },
      {
        id: 'p34-s4',
        cn: '越来越多的中国文化企业开始布局海外市场，推动中国故事走向世界。',
        en: 'An increasing number of Chinese cultural enterprises are beginning to expand into overseas markets, promoting Chinese stories to the world.',
        annotations: [
          { fragment: 'An increasing number of', type: 'structure', label: '越来越多的', detail: 'An increasing number of + 复数名词 = 越来越多的...。比 more and more 更正式。' },
          { fragment: 'expand into overseas markets', type: 'phrase', label: '布局海外市场', detail: 'expand into = 扩展到/布局到。overseas markets = 海外市场。' },
          { fragment: 'promoting Chinese stories to the world', type: 'structure', label: '推动...走向世界', detail: 'promoting...to the world = 推动...走向世界/向世界推广...。现在分词表目的或结果。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'An increasing number of + 主语 + are beginning to + 谓语A + 现在分词(promoting...to...)',
          structureAnalysis: '(An increasing number of Chinese cultural enterprises) → are beginning to → expand (into overseas markets) → promoting → (Chinese stories to the world)',
          whyGood: '① An increasing number of 比 more and more 正式 ② expand into 精准表达\'布局/扩展\' ③ promoting...现在分词作伴随状语处理\'推动...\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 An increasing number of → More and more / A growing number of；不会 enterprises → companies / businesses / firms；不会 expand into → enter / move into / branch out into',
          sentencePattern: '\'越来越多的XX开始布局A，推动B走向世界\' → \'An increasing number of XX are beginning to expand into A, promoting B to the world\'',
          highScore: { en: '', note: 'An increasing number of + expand into + promoting 一气呵成' },
          lowScore: { en: '', note: 'More and more 不够正式 + go into 不如 expand into + 拆成两句。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p35. 功夫 (2016.6)
  {
    id: 'p35',
    title: '功夫',
    year: '2016.6',
    topic: '武术文化',
    difficulty: 1,
    fullCN: '功夫(Kung Fu)是中国武术的俗称。中国武术的起源可以追溯到自卫的需要、狩猎活动以及古代中国的军事训练。它是中国传统体育运动的一种，年轻人和老年人都练。它已逐渐演变成了中国文化的独特元素。作为中国的国宝，功夫有上百种不同的风格，是世界上练得最多的武术形式。有些风格模仿了动物的动作，还有一些则受到了中国哲学思想、神话和传说的启发。',
    fullEN: 'Kung Fu is the common name for Chinese martial arts. The origin of Chinese martial arts can be traced back to the need for self-defense, hunting activities, and military training in ancient China. It is a type of traditional Chinese sport practiced by both the young and the old. It has gradually evolved into a unique element of Chinese culture. As a national treasure of China, Kung Fu has hundreds of different styles and is the most practiced form of martial arts in the world. Some styles imitate the movements of animals, while others are inspired by Chinese philosophical thoughts, myths, and legends.',
    sentences: [
      {
        id: 'p35-s0',
        cn: '功夫(Kung Fu)是中国武术的俗称。',
        en: 'Kung Fu is the common name for Chinese martial arts.',
        annotations: [
          { fragment: 'the common name for', type: 'phrase', label: '俗称', detail: 'common name = 俗称/通用名称。the common name for + 正式名称，比 popular name 更准确。' },
          { fragment: 'Chinese martial arts', type: 'vocab', label: '中国武术', detail: 'martial arts = 武术，martial 意为\'军事的/战争的\'。注意 arts 用复数。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + is + the common name for + 名词短语',
          structureAnalysis: 'Kung Fu → is → the common name for → Chinese martial arts',
          whyGood: 'common name 精准表达\'俗称\'，比 nick name 正式。is 一般现在时表示事实陈述。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 martial arts → Chinese kung fu / Chinese fighting arts / wushu',
          sentencePattern: '\'XX是YY的俗称\' → XX is the common name for YY',
          highScore: { en: '', note: 'common name + martial arts 两个词都精准' },
          lowScore: { en: '', note: 'popular name 不够正式 + wushu 对外国人不够清晰。评分 8-11 分档。' }
        }
      },
      {
        id: 'p35-s1',
        cn: '中国武术的起源可以追溯到自卫的需要、狩猎活动以及古代中国的军事训练。',
        en: 'The origin of Chinese martial arts can be traced back to the need for self-defense, hunting activities, and military training in ancient China.',
        annotations: [
          { fragment: 'can be traced back to', type: 'structure', label: '追溯到', detail: 'can be traced back to = 可以追溯到。被动语态，trace back to 表示追溯源头。' },
          { fragment: 'the need for self-defense', type: 'structure', label: 'need for + 名词', detail: 'the need for + 名词 = 对...的需求。self-defense = 自卫，复合名词。' },
          { fragment: 'hunting activities, and military training', type: 'structure', label: '三项并列', detail: '三个名词短语并列：self-defense / hunting activities / military training，用 and 连接最后一项。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'The origin of + 主语 + can be traced back to + 三项并列',
          structureAnalysis: 'The origin of Chinese martial arts → can be traced back to → (the need for self-defense, hunting activities, and military training) in ancient China',
          whyGood: '① can be traced back to 是\'追溯到\'的标准翻译 ② 三个并列举完整，结构清晰 ③ in ancient China 后置修饰 military training。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 traced back to → dates back to / originates from / started from；不会 self-defense → protecting oneself',
          sentencePattern: '\'XX的起源可以追溯到A、B和C\' → The origin of XX can be traced back to A, B, and C',
          highScore: { en: '', note: 'traced back to + 三项并列 + 时间限定' },
          lowScore: { en: '', note: 'started from 口语化 + army training 不如 military training 正式。评分 8-10 分档。' }
        }
      },
      {
        id: 'p35-s2',
        cn: '它是中国传统体育运动的一种，年轻人和老年人都练。',
        en: 'It is a type of traditional Chinese sport practiced by both the young and the old.',
        annotations: [
          { fragment: 'a type of traditional Chinese sport', type: 'phrase', label: '一种传统体育运动', detail: 'a type of = 一种。形容词顺序：traditional(主观) + Chinese(国别) + sport(类别)。' },
          { fragment: 'practiced by both the young and the old', type: 'structure', label: '过去分词后置定语', detail: 'practiced by = 被...练习的（过去分词作定语修饰 sport）。the young/old = 年轻人/老年人（the + 形容词表一类人）。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + is + a type of + 形容词+名词 + 过去分词后置定语',
          structureAnalysis: 'It → is (a type of traditional Chinese sport) → practiced by (both the young and the old)',
          whyGood: '① a type of 表达\'一种\' ② practiced by 分词后置替代定语从句 which is practiced by ③ the young and the old 简洁表达老少皆宜。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 practiced by → done by / played by；不会 the young and the old → young people and old people / people of all ages',
          sentencePattern: '\'XX是...的一种，A和B都（练）\' → XX is a type of..., practiced by both A and B',
          highScore: { en: '', note: 'a type of + practiced by 分词后置 + the young/old' },
          lowScore: { en: '', note: 'Chinese traditional 顺序不对 + do it 太口语 + 两句不紧凑。评分 8-10 分档。' }
        }
      },
      {
        id: 'p35-s3',
        cn: '它已逐渐演变成了中国文化的独特元素。',
        en: 'It has gradually evolved into a unique element of Chinese culture.',
        annotations: [
          { fragment: 'has gradually evolved into', type: 'structure', label: '现完 + 逐渐演变', detail: 'has evolved into = 已演变成（现在完成时强调结果）。gradually = 逐渐地。evolve into 比 become 更强调过程。' },
          { fragment: 'a unique element of Chinese culture', type: 'phrase', label: '独特文化元素', detail: 'unique = 独特的（强调独一无二）。element of...culture = ...文化的元素。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + has gradually evolved into + 名词短语',
          structureAnalysis: 'It → has gradually evolved into → a unique element of Chinese culture',
          whyGood: '① has gradually evolved into 表达渐进演变过程，比 has become 更生动 ② unique element 准确传达\'独特元素\'的含义。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 evolved into → become / changed into / developed into；不会 element → part / component / aspect',
          sentencePattern: '\'XX已逐渐演变为YY的独特元素\' → XX has gradually evolved into a unique element of YY',
          highScore: { en: '', note: 'gradually evolved into + unique element' },
          lowScore: { en: '', note: 'slowly become 不如 gradually evolved 精准 + special part 不如 unique element。评分 8-10 分档。' }
        }
      },
      {
        id: 'p35-s4',
        cn: '作为中国的国宝，功夫有上百种不同的风格，是世界上练得最多的武术形式。',
        en: 'As a national treasure of China, Kung Fu has hundreds of different styles and is the most practiced form of martial arts in the world.',
        annotations: [
          { fragment: 'As a national treasure of China', type: 'structure', label: 'As + 身份/地位', detail: 'As + 名词 = 作为...。置于句首引出身份背景，比 Being 更正式。' },
          { fragment: 'has hundreds of different styles', type: 'phrase', label: '上百种不同的风格', detail: 'hundreds of = 数百的/上百的。different styles = 不同的风格/流派。' },
          { fragment: 'the most practiced form of martial arts', type: 'structure', label: '最高级 + 过去分词作定语', detail: 'the most practiced = 练得最多的。过去分词 practiced 作定语修饰 form。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'As + 身份状语 + 主语 + has A and is the most B in the world',
          structureAnalysis: 'As a national treasure of China → Kung Fu → has (hundreds of different styles) → and → is (the most practiced form of martial arts in the world)',
          whyGood: '① As 引出身份，简洁有力 ② has...and is...并列两个谓语 ③ the most practiced 用过去分词作定语，简洁表达\'练得最多的\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 national treasure → national gem / national pride；不会 most practiced → most popular / most commonly done',
          sentencePattern: '\'作为A的国宝，XX有上百种B，是世界上C最多的D\' → As a national treasure of A, XX has hundreds of B and is the most C D in the world',
          highScore: { en: '', note: 'As + has...and is...并列 + most practiced' },
          lowScore: { en: '', note: '拆成两句不够紧凑 + most popular 不如 most practiced 准确。评分 8-11 分档。' }
        }
      },
      {
        id: 'p35-s5',
        cn: '有些风格模仿了动物的动作，还有一些则受到了中国哲学思想、神话和传说的启发。',
        en: 'Some styles imitate the movements of animals, while others are inspired by Chinese philosophical thoughts, myths, and legends.',
        annotations: [
          { fragment: 'Some styles...while others...', type: 'structure', label: 'Some...while others...对比', detail: 'Some...while others...= 有些...还有一些...。while 表示对比，比 but 更书面。' },
          { fragment: 'are inspired by', type: 'structure', label: '被动语态', detail: 'be inspired by = 受到...的启发。被动语态表达\'被/受...启发\'。inspired 比 influenced 更积极。' },
          { fragment: 'philosophical thoughts, myths, and legends', type: 'vocab', label: '三项文化概念', detail: 'philosophical thoughts = 哲学思想，myths = 神话，legends = 传说。三项并列涵盖来源类型。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'Some do A + while others are done by B, C, and D',
          structureAnalysis: 'Some styles → imitate (the movements of animals) → while → others → are inspired by (Chinese philosophical thoughts, myths, and legends)',
          whyGood: '① Some...while others 对比结构清晰 ② imitate 和 are inspired by 两个动词区分了\'模仿\'和\'受启发\'的不同层次 ③ 三项文化概念涵盖全面。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 imitate → copy / follow / learn from；不会 philosophical thoughts → Chinese philosophy / deep ideas；不会 myths and legends → old stories / traditional tales',
          sentencePattern: '\'有些XX做了A，还有一些则受B、C和D的启发\' → Some XX do A, while others are inspired by B, C, and D',
          highScore: { en: '', note: 'Some...while others + imitate / are inspired by + 三项文化概念' },
          lowScore: { en: '', note: 'copy 不如 imitate + thinking 不如 philosophical thoughts。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p36. 乌镇 (2016.6)
  {
    id: 'p36',
    title: '乌镇',
    year: '2016.6',
    topic: '水乡古镇',
    difficulty: 1,
    fullCN: '乌镇是浙江的一座古老的水镇，坐落在京杭大运河畔。这是一处迷人的地方，有许多古桥、中式旅店和餐馆。在过去一千年里，乌镇的水系和生活方式并未经历多少变化，是一座展现古文明的博物馆。乌镇所有房屋都是用石木建造。数百年来，当地人沿着河边建起了住宅和集市。无数宽敞美丽的庭院藏身于屋舍之间，游客们每到一处都会有惊喜的发现。',
    fullEN: 'Wuzhen is an ancient water town in Zhejiang Province, located on the banks of the Beijing-Hangzhou Grand Canal. It is a charming place with many ancient bridges, Chinese-style inns, and restaurants. Over the past thousand years, the water system and way of life in Wuzhen have not changed much, making it a museum showcasing ancient civilization. All the houses in Wuzhen are built with stone and wood. For centuries, the locals have built houses and markets along the riverbanks. Countless spacious and beautiful courtyards are hidden among the houses, and visitors will find pleasant surprises wherever they go.',
    sentences: [
      {
        id: 'p36-s0',
        cn: '乌镇是浙江的一座古老的水镇，坐落在京杭大运河畔。',
        en: 'Wuzhen is an ancient water town in Zhejiang Province, located on the banks of the Beijing-Hangzhou Grand Canal.',
        annotations: [
          { fragment: 'an ancient water town', type: 'vocab', label: '古老的水镇', detail: 'water town = 水乡/水镇，江南特色地理概念。ancient = 古老的。' },
          { fragment: 'located on the banks of', type: 'structure', label: '过去分词作状语', detail: 'located on = 坐落于（过去分词短语作伴随状语）。banks = 河岸/畔（复数）。' },
          { fragment: 'the Beijing-Hangzhou Grand Canal', type: 'vocab', label: '京杭大运河', detail: 'Grand Canal = 大运河。Beijing-Hangzhou 用连字符连接构成复合地名修饰语。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + is + 地点 + located on + 位置',
          structureAnalysis: 'Wuzhen → is (an ancient water town in Zhejiang Province) → located on (the banks of the Beijing-Hangzhou Grand Canal)',
          whyGood: '① water town 精准翻译\'水镇\' ② located on 分词状语处理中文第二个动词\'坐落\' ③ Grand Canal 专有名词大小写正确。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 water town → old town by water / riverside town；不会 located on → sitting on / which is on',
          sentencePattern: '\'XX是A的YY，坐落在B畔\' → XX is a YY in A, located on the banks of B',
          highScore: { en: '', note: 'water town + located on + Grand Canal' },
          lowScore: { en: '', note: 'and it is beside 不如 located on 紧凑。评分 8-10 分档。' }
        }
      },
      {
        id: 'p36-s1',
        cn: '这是一处迷人的地方，有许多古桥、中式旅店和餐馆。',
        en: 'It is a charming place with many ancient bridges, Chinese-style inns, and restaurants.',
        annotations: [
          { fragment: 'a charming place', type: 'vocab', label: '迷人的地方', detail: 'charming = 迷人的/有魅力的。比 beautiful 多了\'有韵味\'的意味。' },
          { fragment: 'with many ancient bridges', type: 'structure', label: 'with + 名词表示伴随特征', detail: 'with + 名词短语 = 带有/有着...。介宾结构补充说明地方特征。' },
          { fragment: 'Chinese-style inns', type: 'vocab', label: '中式旅店', detail: 'Chinese-style = 中式风格的。-style 后缀表示\'...风格的\'。inn = 旅店/客栈。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + is + a charming place + with + 三项并列名词',
          structureAnalysis: 'It → is (a charming place) → with (many ancient bridges, Chinese-style inns, and restaurants)',
          whyGood: '① charming 比 beautiful 更贴切地表达古镇韵味 ② with 结构用介词短语作定语 ③ Chinese-style 用 -style 后缀处理\'中式\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 charming → beautiful / attractive / lovely；不会 Chinese-style → traditional Chinese / in Chinese style',
          sentencePattern: '\'这是一处迷人的地方，有许多A、B和C\' → It is a charming place with many A, B, and C',
          highScore: { en: '', note: 'charming + with + 三项并列' },
          lowScore: { en: '', note: '两句分离 + hotels 不如 inns 贴切古镇。评分 8-10 分档。' }
        }
      },
      {
        id: 'p36-s2',
        cn: '在过去一千年里，乌镇的水系和生活方式并未经历多少变化，是一座展现古文明的博物馆。',
        en: 'Over the past thousand years, the water system and way of life in Wuzhen have not changed much, making it a museum showcasing ancient civilization.',
        annotations: [
          { fragment: 'Over the past thousand years', type: 'structure', label: 'Over + 时间段', detail: 'Over + 时间段 = 在过去...里。搭配现在完成时。Over the past thousand years = 在过去一千年中。' },
          { fragment: 'have not changed much', type: 'structure', label: '现完 + 否定', detail: 'have not changed much = 没有经历多少变化。现在完成时与 Over 呼应。' },
          { fragment: 'making it a museum showcasing', type: 'structure', label: '现在分词结果状语', detail: 'making...= 使得它成为...（分词短语表自然结果）。showcasing = 展示（分词作定语修饰 museum）。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'Over + 时间段 + 主语 + have not done + making 分词结果',
          structureAnalysis: 'Over the past thousand years → the water system and way of life (in Wuzhen) → have not changed much → making it → a museum (showcasing ancient civilization)',
          whyGood: '① Over the past thousand years 搭配现完 ② making 分词结果状语替代 and this makes，更紧凑 ③ showcasing 再次用分词作定语修饰 museum。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 water system → river system / water network；不会 showcasing → exhibiting / displaying / showing',
          sentencePattern: '\'在过去A年里，XX的B和C并未经历多少变化，是展现D的YY\' → Over the past A years, B and C of XX have not changed much, making it a YY showcasing D',
          highScore: { en: '', note: 'Over + 现完 + making 分词结果 + showcasing 分词定语' },
          lowScore: { en: '', note: 'In 不如 Over + a lot 不如 much + and this makes 不如 making 紧凑。评分 8-10 分档。' }
        }
      },
      {
        id: 'p36-s3',
        cn: '乌镇所有房屋都是用石木建造。',
        en: 'All the houses in Wuzhen are built with stone and wood.',
        annotations: [
          { fragment: 'are built with stone and wood', type: 'structure', label: '被动 + 材料', detail: 'are built with + 材料 = 用...建造。with 引出建筑材料。被动语态强调\'被建造\'。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'All + 名词 + be built with + 材料A and 材料B',
          structureAnalysis: 'All the houses (in Wuzhen) → are built → with (stone and wood)',
          whyGood: 'are built with 是被动语态表示\'由...建造\'的标准表达。stone and wood 简洁对应\'石木\'。',
          keyVocab: [''],
          substitutionGuide: '不会 are built with → are made of / use...to build',
          sentencePattern: '\'XX所有房屋都用A和B建造\' → All the houses in XX are built with A and B',
          highScore: { en: '', note: '被动语态 + with 引出材料' },
          lowScore: { en: '', note: '中式英语结构，应该用被动。评分 7-9 分档。' }
        }
      },
      {
        id: 'p36-s4',
        cn: '数百年来，当地人沿着河边建起了住宅和集市。',
        en: 'For centuries, the locals have built houses and markets along the riverbanks.',
        annotations: [
          { fragment: 'For centuries', type: 'structure', label: 'For + 时间段', detail: 'For centuries = 数百年来（贯穿一段时间）。搭配现在完成时 have built。' },
          { fragment: 'the locals', type: 'vocab', label: '当地人', detail: 'the locals = 当地居民。比 local people 更简洁。the + 复数名词表一类人。' },
          { fragment: 'along the riverbanks', type: 'phrase', label: '沿着河边', detail: 'along = 沿着。riverbanks = 河岸/河边。比 beside the river 更准确。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'For + 时间段 + 主语 + have done + 宾语 + 地点状语',
          structureAnalysis: 'For centuries → the locals → have built → houses and markets → along the riverbanks',
          whyGood: '① For centuries + 现完表达从过去持续至今 ② the locals 简洁 ③ along the riverbanks 精准介词搭配。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 the locals → local people / people living there；不会 along → beside / near / by',
          sentencePattern: '\'数百年来，当地人沿着河边建起了A和B\' → For centuries, the locals have built A and B along the riverbanks',
          highScore: { en: '', note: 'For centuries + 现完 + along' },
          lowScore: { en: '', note: 'built 简单过去时缺少持续感 + near 不如 along 精准。评分 8-10 分档。' }
        }
      },
      {
        id: 'p36-s5',
        cn: '无数宽敞美丽的庭院藏身于屋舍之间，游客们每到一处都会有惊喜的发现。',
        en: 'Countless spacious and beautiful courtyards are hidden among the houses, and visitors will find pleasant surprises wherever they go.',
        annotations: [
          { fragment: 'Countless spacious and beautiful courtyards', type: 'phrase', label: '多个形容词并列', detail: 'countless = 无数的。spacious = 宽敞的。多个形容词按观点→尺寸→性质的顺序排列。' },
          { fragment: 'are hidden among the houses', type: 'structure', label: '被动 + among', detail: 'are hidden = 藏身于（被动语态）。among = 在...之间（三者以上）。' },
          { fragment: 'wherever they go', type: 'structure', label: 'wherever 地点状语从句', detail: 'wherever = 无论哪里/每到一处。引导地点让步状语从句，比 everywhere 更强调\'无论何处\'。' }
        ],
        technique: {
          difficulty: 2,
          structure: '形容词+名词 + are hidden among... + and 并列句(with wherever 从句)',
          structureAnalysis: 'Countless spacious and beautiful courtyards → are hidden (among the houses) → and → visitors will find pleasant surprises → wherever they go',
          whyGood: '① 三层形容词排列有序 ② are hidden among 准确表达\'藏身于...之间\' ③ wherever 从句处理\'每到一处\'，比 everywhere 更贴切。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 countless → a lot of / many / numerous；不会 wherever they go → everywhere / at every place / no matter where they go',
          sentencePattern: '\'无数A的YY藏身于B之间，游客每到一处都有C的发现\' → Countless A YY are hidden among B, and visitors will find C wherever they go',
          highScore: { en: '', note: '三层形容词 + are hidden among + wherever 从句' },
          lowScore: { en: '', note: 'hiding 主动错误 + between 应为 among + at every place 不够简洁。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p37. 中国饮食 (2015.6)
  {
    id: 'p37',
    title: '中国饮食',
    year: '2015.6',
    topic: '饮食文化',
    difficulty: 1,
    fullCN: '在西方人心目中，和中国联系最为密切的基本食物是大米。长期以来，大米在中国人的饮食中占据很重要的地位，以至于有谚语说"巧妇难为无米之炊"。中国南方大多种植水稻，人们通常以大米为主食；而华北大部分地区因为过于寒冷或过于干燥无法种植水稻，那里的主要作物是小麦。在中国，有些人用面粉做面包，但大多数人用面粉做馒头和面条。',
    fullEN: 'In the minds of Westerners, the basic food most closely associated with China is rice. For a long time, rice has occupied such an important position in the Chinese diet that there is a saying that goes, "Even a clever housewife cannot cook a meal without rice." In southern China, rice is mostly grown, and people usually take rice as their staple food; however, in most parts of northern China, because it is too cold or too dry to grow rice, the main crop there is wheat. In China, some people use flour to make bread, but most people use flour to make steamed buns and noodles.',
    sentences: [
      {
        id: 'p37-s0',
        cn: '在西方人心目中，和中国联系最为密切的基本食物是大米。',
        en: 'In the minds of Westerners, the basic food most closely associated with China is rice.',
        annotations: [
          { fragment: 'In the minds of Westerners', type: 'structure', label: '在...心目中', detail: 'In the minds of = 在...心目中。比 In Westerners\' view 更地道。' },
          { fragment: 'the basic food most closely associated with', type: 'structure', label: '过去分词后置定语 + 最高级', detail: 'most closely associated with = 联系最密切的（过去分词短语作后置定语）。associate...with = 将...与...联系起来。' }
        ],
        technique: {
          difficulty: 2,
          structure: '地点状语 + 主语(the + n. + 分词后置) + is + 表语',
          structureAnalysis: 'In the minds of Westerners → the basic food (most closely associated with China) → is → rice',
          whyGood: '① In the minds of 地道口语表达 ② most closely associated with 分词后置修饰主语，代替定语从句 that is most closely associated。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 In the minds of → In Westerners\' opinion / To Westerners；不会 associated with → connected with / linked to',
          sentencePattern: '\'在A心目中，与B联系最密切的C是D\' → In the minds of A, the C most closely associated with B is D',
          highScore: { en: '', note: 'In the minds of + most closely associated with' },
          lowScore: { en: '', note: 'has the closest connection with 比 associated with 冗长。评分 8-10 分档。' }
        }
      },
      {
        id: 'p37-s1',
        cn: '长期以来，大米在中国人的饮食中占据很重要的地位，以至于有谚语说"巧妇难为无米之炊"。',
        en: 'For a long time, rice has occupied such an important position in the Chinese diet that there is a saying that goes, "Even a clever housewife cannot cook a meal without rice."',
        annotations: [
          { fragment: 'has occupied such an important position...that', type: 'structure', label: 'such...that 结果状语', detail: 'such...that = 如此...以至于。such + adj. + n. + that 从句。occupied = 占据。' },
          { fragment: 'Even a clever housewife cannot cook a meal without rice', type: 'vocab', label: '谚语翻译', detail: '\'巧妇难为无米之炊\'的标准译法：Even a clever housewife cannot cook a meal without rice。保留\'巧妇\'和\'无米\'两个核心。' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主语 + has occupied such...that + 谚语翻译',
          structureAnalysis: 'For a long time → rice → has occupied (such an important position in the Chinese diet) → that → there is a saying that goes, \'Even a clever housewife cannot cook a meal without rice\'',
          whyGood: '① such...that 是 CET 重点语法结构 ② 谚语翻译采用了意译而非直译，保留核心含义，符合翻译考试标准。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 occupied → taken / held；不会 谚语 → 可简化为 \'Rice is so important that people even say you can\'t cook without it\'',
          sentencePattern: '\'长期以来，XX在A中占据重要地位，以至于有谚语说B\' → For a long time, XX has occupied such an important position in A that there is a saying that goes, B',
          highScore: { en: '', note: 'such...that + 谚语意译准确' },
          lowScore: { en: '', note: 'is 应为 has been + eating 不如 diet 正式 + 谚语基本翻译但不够精致。评分 8-10 分档。' }
        }
      },
      {
        id: 'p37-s2',
        cn: '中国南方大多种植水稻，人们通常以大米为主食；而华北大部分地区因为过于寒冷或过于干燥无法种植水稻，那里的主要作物是小麦。',
        en: 'In southern China, rice is mostly grown, and people usually take rice as their staple food; however, in most parts of northern China, because it is too cold or too dry to grow rice, the main crop there is wheat.',
        annotations: [
          { fragment: 'rice is mostly grown', type: 'structure', label: '被动语态', detail: 'is grown = 被种植（被动）。mostly = 大多/主要。比 mainly 更侧重比例。' },
          { fragment: 'take rice as their staple food', type: 'phrase', label: '以...为主食', detail: 'take...as staple food = 以...为主食。staple 表示\'主要的/基本的\'。' },
          { fragment: 'too cold or too dry to grow rice', type: 'structure', label: 'too...to...结构', detail: 'too + adj. + to do = 太...以至于不能...。too cold or too dry to grow rice = 太冷或太干而不能种水稻。' }
        ],
        technique: {
          difficulty: 2,
          structure: '地点状语 + 主语 + is grown + and + 主语 + take...as...; however + 地点 + because too...to... + 主语 + is...',
          structureAnalysis: 'In southern China → rice is mostly grown → and → people take rice as their staple food → ; → however, in most parts of northern China → because it is too cold or too dry to grow rice → the main crop there is wheat',
          whyGood: '① 分号分隔南北对比，结构清晰 ② take...as staple food 准确表达\'以...为主食\' ③ too...to 结构表达\'太...而不能\'，是 CET 基础语法。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 staple food → main food / most important food；不会 too...to → so...that...cannot / not...because it\'s too...',
          sentencePattern: '\'中国南方种植A，人们以A为主食；而华北因B无法种植A，主要作物是C\' → In southern China, A is grown and people take A as their staple food; however, in northern China, because B, the main crop there is C',
          highScore: { en: '', note: '分号对比 + take as staple + too...to + 南北地理区分' },
          lowScore: { en: '', note: '分句过多 + main food 不如 staple food 正式。评分 8-10 分档。' }
        }
      },
      {
        id: 'p37-s3',
        cn: '在中国，有些人用面粉做面包，但大多数人用面粉做馒头和面条。',
        en: 'In China, some people use flour to make bread, but most people use flour to make steamed buns and noodles.',
        annotations: [
          { fragment: 'use flour to make bread', type: 'structure', label: 'use...to do', detail: 'use + 原材料 + to make + 成品 = 用...来做...。表达用途的基本句式。' },
          { fragment: 'steamed buns and noodles', type: 'vocab', label: '馒头和面条', detail: 'steamed buns = 馒头（蒸的面团）。noodles = 面条。steamed 是 steam（蒸）的过去分词作定语。' }
        ],
        technique: {
          difficulty: 1,
          structure: '地点状语 + some...but most...（对比结构）',
          structureAnalysis: 'In China → some people use flour to make bread → but → most people use flour to make steamed buns and noodles',
          whyGood: '① some...but most...简洁对比 ② use...to make 基础但准确 ③ steamed buns 用 steamed 区分烹饪方式。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 steamed buns → Chinese bread / steamed bread / mantou；不会 flour → wheat powder',
          sentencePattern: '\'在A，有些人用B做C，但大多数人用B做D\' → In A, some people use B to make C, but most people use B to make D',
          highScore: { en: '', note: 'some...but most 对比 + steamed buns 准确' },
          lowScore: { en: '', note: 'Chinese bread 模糊 + make...with 不如 use...to make 明确。评分 8-11 分档。' }
        }
      }
    ]
  },
  // p38. 快递业 (2015.6)
  {
    id: 'p38',
    title: '快递业',
    year: '2015.6',
    topic: '经济发展',
    difficulty: 1,
    fullCN: '据报道，今年中国快递服务将递送大约120亿件包裹。这将使中国有可能超越美国成为世界上最大的快递市场。大多数包裹里装着网上订购的物品。中国给数百万在线零售商以极具竞争力的价格销售商品的机会。仅在11月11日，中国消费者就从国内最大的购物平台购买了价值90亿美元的商品。中国有不少这样的特殊购物日。因此，快递业在中国扩展就不足为奇了。',
    fullEN: 'It is reported that China\'s courier services will deliver about 12 billion packages this year. This would make it possible for China to surpass the United States as the world\'s largest express delivery market. Most packages contain items ordered online. China gives millions of online retailers the opportunity to sell goods at highly competitive prices. On November 11th alone, Chinese consumers purchased goods worth $9 billion from the country\'s largest online shopping platform. China has quite a few such special shopping days. Therefore, it is no wonder that the courier industry has been expanding in China.',
    sentences: [
      {
        id: 'p38-s0',
        cn: '据报道，今年中国快递服务将递送大约120亿件包裹。',
        en: 'It is reported that China\'s courier services will deliver about 12 billion packages this year.',
        annotations: [
          { fragment: 'It is reported that', type: 'structure', label: 'It is + 过去分词 + that', detail: 'It is reported that = 据报道。it 形式主语，that 从句后置。同类：It is said/believed that。' },
          { fragment: 'courier services', type: 'vocab', label: '快递服务', detail: 'courier = 快递员/快递公司。courier service = 快递服务。比 express delivery 更英式。' },
          { fragment: '12 billion packages', type: 'vocab', label: '120亿件', detail: '12 billion = 120亿。英语以 billion(十亿)为单位。120亿 = 12 × 10亿。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'It is reported that + 主语 + will do + 数量 + 宾语',
          structureAnalysis: 'It is reported that → China\'s courier services → will deliver → about 12 billion packages → this year',
          whyGood: '① It is reported that 是\'据报道\'的标准被动结构 ② 12 billion 数字转换准确 ③ courier services 专有名词恰当。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 courier → express delivery / parcel delivery / fast mail；不会 12 billion → 12,000,000,000',
          sentencePattern: '\'据报道，今年XX将递送大约A件包裹\' → It is reported that XX will deliver about A packages this year',
          highScore: { en: '', note: 'It is reported that + 12 billion + courier services' },
          lowScore: { en: '', note: 'It is said 可接受 + express companies 不如 courier services 正式。评分 9-11 分档。' }
        }
      },
      {
        id: 'p38-s1',
        cn: '这将使中国有可能超越美国成为世界上最大的快递市场。',
        en: 'This would make it possible for China to surpass the United States as the world\'s largest express delivery market.',
        annotations: [
          { fragment: 'make it possible for...to', type: 'structure', label: 'make it possible for sb to do', detail: 'make it possible for sb to do = 使某人有可能做某事。it 作形式宾语，真正宾语是 for sb to do。' },
          { fragment: 'surpass the United States as', type: 'vocab', label: '超越...成为...', detail: 'surpass = 超越。as = 作为。surpass A as B = 超过A成为B。比 overtake 更书面。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'This would make it possible for A to surpass B as C',
          structureAnalysis: 'This → would make it possible → for China → to surpass the United States → as the world\'s largest express delivery market',
          whyGood: '① make it possible for sb to do 是\'使某人有可能...\'的经典句式 ② surpass...as 一句话完成\'超越...成为\' ③ express delivery market 术语准确。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 make it possible → allow / enable / make...able to；不会 surpass → overtake / exceed / beat / go beyond',
          sentencePattern: '\'这将使A有可能超越B成为世界上最大的C\' → This would make it possible for A to surpass B as the world\'s largest C',
          highScore: { en: '', note: 'make it possible for...to + surpass...as' },
          lowScore: { en: '', note: 'makes...have the chance 不如 makes it possible + go past 不如 surpass + biggest 不如 largest。评分 8-10 分档。' }
        }
      },
      {
        id: 'p38-s2',
        cn: '大多数包裹里装着网上订购的物品。',
        en: 'Most packages contain items ordered online.',
        annotations: [
          { fragment: 'Most packages contain', type: 'structure', label: '一般现在时 + 包含', detail: 'contain = 包含/装有。一般现在时陈述事实。比 have inside 正式。' },
          { fragment: 'items ordered online', type: 'structure', label: '过去分词后置定语', detail: 'ordered online = 网上订购的（过去分词作定语修饰 items）。比 which were ordered online 简洁。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'Most + 主语 + contain + 名词 + 过去分词后置',
          structureAnalysis: 'Most packages → contain → items (ordered online)',
          whyGood: '① contain 简洁表达\'装着\' ② ordered online 分词后置，省略从句。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 contain → have / hold / carry；不会 ordered online → bought on the internet / purchased online',
          sentencePattern: '\'大多数XX里装着A的YY\' → Most XX contain YY A',
          highScore: { en: '', note: 'contain + ordered online 分词后置' },
          lowScore: { en: '', note: 'have...inside 不如 contain + that were bought 不如 ordered online 简洁。评分 8-10 分档。' }
        }
      },
      {
        id: 'p38-s3',
        cn: '中国给数百万在线零售商以极具竞争力的价格销售商品的机会。',
        en: 'China gives millions of online retailers the opportunity to sell goods at highly competitive prices.',
        annotations: [
          { fragment: 'gives...the opportunity to', type: 'structure', label: 'give sb the opportunity to do', detail: 'give sb the opportunity to do = 给某人做某事的机会。比 give sb the chance to 更正式。' },
          { fragment: 'at highly competitive prices', type: 'phrase', label: '以极具竞争力的价格', detail: 'at + 价格 = 以...的价格。highly competitive = 极具竞争力的。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + gives + sb + the opportunity to do + at + 价格',
          structureAnalysis: 'China → gives (millions of online retailers) → the opportunity → to sell goods → at highly competitive prices',
          whyGood: '① give sb the opportunity to do 精确表达\'给...机会做...\' ② at...prices 表达\'以...价格\' ③ highly competitive 准确表达\'极具竞争力\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 retailers → sellers / shops / stores；不会 at competitive prices → with low prices / at good prices',
          sentencePattern: '\'A给B以C的价格销售D的机会\' → A gives B the opportunity to sell D at C prices',
          highScore: { en: '', note: 'gives...the opportunity to + at highly competitive prices' },
          lowScore: { en: '', note: 'sellers 不如 retailers + the chance 不如 the opportunity + things 不如 goods。评分 8-10 分档。' }
        }
      },
      {
        id: 'p38-s4',
        cn: '仅在11月11日，中国消费者就从国内最大的购物平台购买了价值90亿美元的商品。',
        en: 'On November 11th alone, Chinese consumers purchased goods worth $9 billion from the country\'s largest online shopping platform.',
        annotations: [
          { fragment: 'On November 11th alone', type: 'structure', label: '时间状语 + alone', detail: 'On + 日期 + alone = 仅在...（一天）。alone 置于时间后强调\'仅仅\'。' },
          { fragment: 'purchased goods worth $9 billion', type: 'structure', label: 'worth + 金额作定语', detail: 'worth + 金额 = 价值...的。后置定语修饰 goods。比 which were worth 简洁。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'On + 日期 + alone + 主语 + purchased + n. + worth + 金额 + from + 地点',
          structureAnalysis: 'On November 11th alone → Chinese consumers → purchased (goods worth $9 billion) → from (the country\'s largest online shopping platform)',
          whyGood: '① alone 强调\'仅一天\' ② goods worth $9 billion 用 worth 后置定语，简洁高效 ③ purchased 比 bought 正式。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 alone → just / only / merely on November 11th；不会 worth → valued at / costing',
          sentencePattern: '\'仅在A日，B就从C购买了价值D的E\' → On A alone, B purchased E worth D from C',
          highScore: { en: '', note: 'alone + purchased + worth + online shopping platform' },
          lowScore: { en: '', note: 'Just 不如 alone + bought 不如 purchased + that cost 不如 worth。评分 8-11 分档。' }
        }
      },
      {
        id: 'p38-s5',
        cn: '中国有不少这样的特殊购物日。因此，快递业在中国扩展就不足为奇了。',
        en: 'China has quite a few such special shopping days. Therefore, it is no wonder that the courier industry has been expanding in China.',
        annotations: [
          { fragment: 'quite a few', type: 'phrase', label: '不少/相当多', detail: 'quite a few = 不少/相当多的。口语常用但也可用于书面。后接可数名词复数。' },
          { fragment: 'it is no wonder that', type: 'structure', label: '不足为奇', detail: 'it is no wonder that = ...不足为奇/难怪...。no wonder = 毫不奇怪。' },
          { fragment: 'has been expanding', type: 'structure', label: '现完进行时', detail: 'has been expanding = 一直在扩展。现在完成进行时强调从过去持续至今且仍在进行。' }
        ],
        technique: {
          difficulty: 2,
          structure: '句子1: 主语 + has quite a few... 句子2: Therefore + it is no wonder that + 主语 + has been doing',
          structureAnalysis: 'China → has (quite a few such special shopping days). → Therefore → it is no wonder that → the courier industry → has been expanding in China',
          whyGood: '① quite a few 表达\'不少\' ② it is no wonder that 是\'不足为奇\'的标准表达 ③ has been expanding 现完进行强调了持续扩张的态势。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 quite a few → many / a lot of / a good number of；不会 it is no wonder → it is not surprising / no wonder / it makes sense',
          sentencePattern: '\'A有不少这样的B。因此，C在A扩展就不足为奇了\' → A has quite a few such B. Therefore, it is no wonder that C has been expanding in A',
          highScore: { en: '', note: 'quite a few + it is no wonder that + has been expanding' },
          lowScore: { en: '', note: 'many 不如 quite a few 地道 + courier business 不如 courier industry + growing 不如 expanding。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p39. 教育公平 (2014.6)
  {
    id: 'p39',
    title: '教育公平',
    year: '2014.6',
    topic: '教育发展',
    difficulty: 2,
    fullCN: '为了促进教育公平，中国已投入360亿元，用于改善农村地区教育设施和加强中西部地区农村义务教育。这些资金用于改善教学设施、购买书籍，使16万多所中小学受益。资金还用于购置音乐和绘画器材。现在农村和山区的儿童可以与沿海城市的儿童一样上音乐和绘画课。一些为接受更好教育而转往城市上学的学生如今又回到了本地农村学校就读。',
    fullEN: 'To promote educational equity, China has invested 36 billion yuan to improve educational facilities in rural areas and strengthen rural compulsory education in central and western regions. These funds are used to improve teaching facilities and purchase books, benefiting more than 160,000 primary and secondary schools. The funds are also used to purchase music and painting equipment. Now children in rural and mountainous areas can take music and painting lessons just like children in coastal cities. Some students who had transferred to urban schools for better education have now returned to local rural schools.',
    sentences: [
      {
        id: 'p39-s0',
        cn: '为了促进教育公平，中国已投入360亿元，用于改善农村地区教育设施和加强中西部地区农村义务教育。',
        en: 'To promote educational equity, China has invested 36 billion yuan to improve educational facilities in rural areas and strengthen rural compulsory education in central and western regions.',
        annotations: [
          { fragment: 'To promote educational equity', type: 'structure', label: '不定式目的状语', detail: 'To do = 为了...（目的状语置于句首）。promote = 促进。equity = 公平（比 equality 更强调公平对待）。' },
          { fragment: 'has invested 36 billion yuan', type: 'structure', label: '现完 + 金额', detail: 'has invested = 已投入。36 billion = 360亿（英语以十亿为单位，36 billion = 360×10⁸）。' },
          { fragment: 'compulsory education', type: 'vocab', label: '义务教育', detail: 'compulsory = 义务的/强制性的。compulsory education = 义务教育。同义：mandatory education。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'To do + 主语 + has done + to do A and do B',
          structureAnalysis: 'To promote educational equity → China → has invested (36 billion yuan) → to improve educational facilities in rural areas and strengthen rural compulsory education in central and western regions',
          whyGood: '① To do 目的状语前置 ② has invested 现完准确 ③ 36 billion yuan 数字单位转换正确 ④ compulsory education 术语标准。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 equity → fairness / equality；不会 compulsory → required / mandatory；不会 invested → spent / put in',
          sentencePattern: '\'为了促进A，B已投入C元，用于改善D和加强E\' → To promote A, B has invested C yuan to improve D and strengthen E',
          highScore: { en: '', note: 'To do 目的 + has invested + 并列不定式 + compulsory education' },
          lowScore: { en: '', note: 'For making 不如 To promote + spent 不如 has invested + make...better 不够正式。评分 8-10 分档。' }
        }
      },
      {
        id: 'p39-s1',
        cn: '这些资金用于改善教学设施、购买书籍，使16万多所中小学受益。',
        en: 'These funds are used to improve teaching facilities and purchase books, benefiting more than 160,000 primary and secondary schools.',
        annotations: [
          { fragment: 'These funds are used to', type: 'structure', label: '被动 + 不定式目的', detail: 'are used to do = 被用来做...。funds 资金（复数）。区分：be used to doing（习惯于做某事）。' },
          { fragment: 'benefiting more than 160,000', type: 'structure', label: '现在分词结果状语', detail: 'benefiting = 使...受益（分词短语表自然结果）。more than 160,000 = 16万多。' },
          { fragment: 'primary and secondary schools', type: 'vocab', label: '中小学', detail: 'primary school = 小学，secondary school = 中学。不可直译为 middle and small schools。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + are used to do A and do B + benefiting 分词结果',
          structureAnalysis: 'These funds → are used → to improve teaching facilities and purchase books → (,) benefiting more than 160,000 primary and secondary schools',
          whyGood: '① are used to do 清晰表达用途 ② benefiting 分词将两句合为一句 ③ primary and secondary schools 准确翻译中小学。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 benefiting → and this helps / and this benefits；不会 primary and secondary schools → elementary and middle schools / K-12 schools',
          sentencePattern: '\'这些资金用于A和B，使C多所D受益\' → These funds are used to A and B, benefiting more than C D',
          highScore: { en: '', note: 'are used to do + benefiting 分词结果 + primary and secondary schools' },
          lowScore: { en: '', note: 'This money 应为 These funds + make...better 不够正式 + 两句分离。评分 8-10 分档。' }
        }
      },
      {
        id: 'p39-s2',
        cn: '资金还用于购置音乐和绘画器材。',
        en: 'The funds are also used to purchase music and painting equipment.',
        annotations: [
          { fragment: 'are also used to purchase', type: 'structure', label: 'also + 被动 + 不定式', detail: 'also = 还/也（副词在助动词后）。purchase = 购买（比 buy 正式）。' },
          { fragment: 'music and painting equipment', type: 'vocab', label: '音乐和绘画器材', detail: 'equipment = 设备/器材（不可数名词）。painting = 绘画（区别于 drawing 素描）。' }
        ],
        technique: {
          difficulty: 1,
          structure: '主语 + are also used to purchase + 名词短语',
          structureAnalysis: 'The funds → are also used → to purchase → music and painting equipment',
          whyGood: '简洁地延续上文资金用途，purchase 比 buy 正式，equipment 不可数名词用法正确。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 purchase → buy / pay for；不会 equipment → instruments / tools / supplies',
          sentencePattern: '\'资金还用于购置A\' → The funds are also used to purchase A',
          highScore: { en: '', note: 'purchase + equipment 用词正式准确' },
          lowScore: { en: '', note: 'money 应为 funds + buy 不如 purchase 正式 + drawing 不如 painting 准确。评分 8-10 分档。' }
        }
      },
      {
        id: 'p39-s3',
        cn: '现在农村和山区的儿童可以与沿海城市的儿童一样上音乐和绘画课。',
        en: 'Now children in rural and mountainous areas can take music and painting lessons just like children in coastal cities.',
        annotations: [
          { fragment: 'children in rural and mountainous areas', type: 'vocab', label: '农村和山区儿童', detail: 'rural = 农村的。mountainous = 多山的/山区的。in + 地点作后置定语。' },
          { fragment: 'take music and painting lessons', type: 'phrase', label: '上...课', detail: 'take lessons = 上课。比 have classes 更强调课程学习。music and painting = 音乐和绘画。' },
          { fragment: 'just like children in coastal cities', type: 'structure', label: 'just like + 比较对象', detail: 'just like = 和...一样。强调完全同等。coastal cities = 沿海城市。' }
        ],
        technique: {
          difficulty: 1,
          structure: '时间状语 + 主语 + can do + just like + 比较对象',
          structureAnalysis: 'Now → children (in rural and mountainous areas) → can take (music and painting lessons) → just like → children (in coastal cities)',
          whyGood: '① rural and mountainous 两个地理形容词准确 ② take lessons 标准表达 ③ just like 强调教育机会平等。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 mountainous → mountain / hilly / in the mountains；不会 coastal → seaside / near the sea',
          sentencePattern: '\'现在A的儿童可以与B的儿童一样做C\' → Now children in A can do C just like children in B',
          highScore: { en: '', note: 'rural and mountainous + take lessons + just like' },
          lowScore: { en: '', note: 'kids 口语化 + same as 语法错误（应为 just like）。评分 8-10 分档。' }
        }
      },
      {
        id: 'p39-s4',
        cn: '一些为接受更好教育而转往城市上学的学生如今又回到了本地农村学校就读。',
        en: 'Some students who had transferred to urban schools for better education have now returned to local rural schools.',
        annotations: [
          { fragment: 'who had transferred to', type: 'structure', label: '定语从句 + 过去完成时', detail: 'who had transferred = 之前转学的（定语从句 + 过去完成时，表示\'回到\'之前的动作）。transfer = 转移/转学。' },
          { fragment: 'for better education', type: 'structure', label: 'for + 目的', detail: 'for + 名词 = 为了...。for better education = 为了更好的教育。' },
          { fragment: 'have now returned to', type: 'structure', label: '现完 + 回到', detail: 'have now returned = 如今已回到（现在完成时 + now 强调结果）。return to = 返回。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语(who had done for...) + have now done',
          structureAnalysis: 'Some students (who had transferred to urban schools for better education) → have now returned → to local rural schools',
          whyGood: '① who 定语从句用过去完成时 had transferred，表示\'回到\'之前发生的动作，时态层次分明 ② have now returned 现完 + now 强调结果。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 transferred → moved / changed to / went to；不会 urban → city / downtown',
          sentencePattern: '\'一些为A而转往B上学的学生如今又回到了C\' → Some students who had transferred to B for A have now returned to C',
          highScore: { en: '', note: 'who had transferred 过去完成时 + for better education + have now returned' },
          lowScore: { en: '', note: 'went 缺少时态层次 + come back 口语化 + countryside 应为 rural。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p40. 核能发展 (2014.6)
  {
    id: 'p40',
    title: '核能发展',
    year: '2014.6',
    topic: '科技能源',
    difficulty: 2,
    fullCN: '中国应进一步发展核能，因为核电目前只占其总发电量的2%，该比例在所有核国家中居第30位，几乎是最低的。2011年3月日本核电站事故后，中国的核能开发停了下来，中止审批新的核电站，并开展全国性的核安全检查。到2012年10月，审批才又谨慎地恢复。随着技术和安全措施的改进，发生核事故的可能性完全可以降低到最低限度。换句话说，核能是可以安全开发和利用的。',
    fullEN: 'China should further develop nuclear energy because nuclear power currently accounts for only 2% of its total electricity generation, ranking 30th among all nuclear countries, which is nearly the lowest. After the Japanese nuclear power plant accident in March 2011, China\'s nuclear energy development was halted, with the approval of new nuclear power plants suspended and a nationwide nuclear safety inspection carried out. It was not until October 2012 that approval was cautiously resumed. With improvements in technology and safety measures, the possibility of nuclear accidents can definitely be reduced to a minimum. In other words, nuclear energy can be safely developed and utilized.',
    sentences: [
      {
        id: 'p40-s0',
        cn: '中国应进一步发展核能，因为核电目前只占其总发电量的2%，该比例在所有核国家中居第30位，几乎是最低的。',
        en: 'China should further develop nuclear energy because nuclear power currently accounts for only 2% of its total electricity generation, ranking 30th among all nuclear countries, which is nearly the lowest.',
        annotations: [
          { fragment: 'should further develop', type: 'structure', label: '情态动词 + 进一步', detail: 'should = 应该。further develop = 进一步发展。further 比 more 正式。' },
          { fragment: 'accounts for only 2%', type: 'phrase', label: '占比', detail: 'account for + 百分比 = 占...比例。only 强调\'只有\'。account for 是 CET 高频短语。' },
          { fragment: 'ranking 30th among all nuclear countries', type: 'structure', label: '现在分词伴随状语', detail: 'ranking = 排名（分词短语补充说明）。30th = 第30位。among = 在...之中。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + should do + because + 主语 + accounts for + ranking 分词 + which 定语从句',
          structureAnalysis: 'China → should further develop (nuclear energy) → because → nuclear power → accounts for (only 2% of its total electricity generation) → (,) ranking 30th among all nuclear countries → which is nearly the lowest',
          whyGood: '① should further develop 建议语气 ② account for 标准占比表达 ③ ranking 分词伴随提供排名信息 ④ which 非限定从句补充说明。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 account for → takes up / makes up / is；不会 ranking → and it ranks / and it is ranked',
          sentencePattern: '\'A应进一步发展B，因为B目前只占C的D%，该比例在所有E中居第F位\' → A should further develop B because B currently accounts for only D% of its C, ranking Fth among all E',
          highScore: { en: '', note: 'should further + accounts for + ranking + which 从句' },
          lowScore: { en: '', note: 'develop more 不如 further develop + is only 2% 不如 accounts for + 多句连接不紧凑。评分 8-10 分档。' }
        }
      },
      {
        id: 'p40-s1',
        cn: '2011年3月日本核电站事故后，中国的核能开发停了下来，中止审批新的核电站，并开展全国性的核安全检查。',
        en: 'After the Japanese nuclear power plant accident in March 2011, China\'s nuclear energy development was halted, with the approval of new nuclear power plants suspended and a nationwide nuclear safety inspection carried out.',
        annotations: [
          { fragment: 'After the Japanese nuclear power plant accident', type: 'structure', label: 'After + 事件时间状语', detail: 'After + 名词短语 = 在...之后。nuclear power plant = 核电站。accident = 事故。' },
          { fragment: 'was halted', type: 'structure', label: '被动语态', detail: 'was halted = 被中止/停了下来。halt = 停止/中止（比 stop 正式）。' },
          { fragment: 'with the approval...suspended and...inspection carried out', type: 'structure', label: 'with + 名词 + 过去分词', detail: 'with + n. + done 复合结构表伴随。suspended = 中止，carried out = 开展/执行。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'After + 时间状语 + 主语 + was done + with + n. + done and n. + done',
          structureAnalysis: 'After the Japanese nuclear power plant accident in March 2011 → China\'s nuclear energy development → was halted → with (the approval suspended) and (a nationwide inspection carried out)',
          whyGood: '① After + 名词短语简洁 ② was halted 被动准确 ③ with + n. + done 复合结构，一次处理两个伴随动作（中止审批 + 开展检查）。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 halted → stopped / paused；不会 suspended → stopped / put on hold；不会 carried out → done / conducted',
          sentencePattern: '\'A年B事故后，C的D停了下来，中止E，并开展F\' → After the B accident in A, C\'s D was halted, with E suspended and F carried out',
          highScore: { en: '', note: 'After + was halted + with 复合结构（suspended + carried out）' },
          lowScore: { en: '', note: '三个 stopped/started 并列冗余 + checking 不如 inspection 正式。评分 8-10 分档。' }
        }
      },
      {
        id: 'p40-s2',
        cn: '到2012年10月，审批才又谨慎地恢复。',
        en: 'It was not until October 2012 that approval was cautiously resumed.',
        annotations: [
          { fragment: 'It was not until...that', type: 'structure', label: '强调句 it was not until...that', detail: 'It was not until A that B = 直到A才B。强调句型，突出时间点。until 后接时间点。' },
          { fragment: 'was cautiously resumed', type: 'vocab', label: '谨慎地恢复', detail: 'cautiously = 谨慎地。resumed = 恢复（比 restarted 正式）。be resumed = 被恢复。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'It was not until + 时间 + that + 主语 + was done',
          structureAnalysis: 'It was not until (October 2012) → that → approval → was cautiously resumed',
          whyGood: '① It was not until...that 是 CET 高频强调句型，精准表达\'直到...才\' ② cautiously resumed 准确对应\'谨慎地恢复\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 It was not until...that → not...until / only after October 2012 did approval resume / approval did not resume until',
          sentencePattern: '\'到A，B才谨慎地恢复\' → It was not until A that B was cautiously resumed',
          highScore: { en: '', note: 'It was not until...that + cautiously resumed' },
          lowScore: { en: '', note: 'Only in 也可但不如 not until...that 地道 + started again 不如 resumed 正式。评分 8-11 分档。' }
        }
      },
      {
        id: 'p40-s3',
        cn: '随着技术和安全措施的改进，发生核事故的可能性完全可以降低到最低限度。',
        en: 'With improvements in technology and safety measures, the possibility of nuclear accidents can definitely be reduced to a minimum.',
        annotations: [
          { fragment: 'With improvements in technology and safety measures', type: 'structure', label: 'With + 名词 + 状语', detail: 'With + n. = 随着...（表示伴随原因）。improvements in = 在...方面的改进。' },
          { fragment: 'can definitely be reduced to a minimum', type: 'structure', label: '情态被动 + 降到最低', detail: 'can be reduced to a minimum = 可以降低到最低限度。definitely = 完全/确定地（比 certainly 更绝对）。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'With + 名词短语 + 主语 + can be reduced to + 程度',
          structureAnalysis: 'With improvements (in technology and safety measures) → the possibility of nuclear accidents → can definitely be reduced → to a minimum',
          whyGood: '① With 结构处理\'随着...的改进\' ② can be reduced to a minimum 准确表达\'完全可以降低到最低限度\' ③ definitely 强调确定性。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 improvements in → advances in / progress in；不会 reduced to a minimum → made as small as possible / lowered to the lowest level',
          sentencePattern: '\'随着A和B的改进，C完全可以降低到最低限度\' → With improvements in A and B, C can definitely be reduced to a minimum',
          highScore: { en: '', note: 'With improvements + can be reduced to a minimum' },
          lowScore: { en: '', note: 'As...get better 不如 With improvements 正式 + made very low 不如 reduced to a minimum 精准。评分 8-10 分档。' }
        }
      },
      {
        id: 'p40-s4',
        cn: '换句话说，核能是可以安全开发和利用的。',
        en: 'In other words, nuclear energy can be safely developed and utilized.',
        annotations: [
          { fragment: 'In other words', type: 'phrase', label: '换句话说', detail: 'In other words = 换句话说（总结性过渡语）。同义：That is to say / To put it another way。' },
          { fragment: 'can be safely developed and utilized', type: 'structure', label: '情态被动 + 副词', detail: 'can be done = 可以被...。safely = 安全地。developed and utilized = 开发和利用（两个过去分词并列）。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'In other words + 主语 + can be safely done A and done B',
          structureAnalysis: 'In other words → nuclear energy → can be safely → developed and utilized',
          whyGood: '① In other words 过渡自然 ② can be safely developed and utilized 双分词并列，结构工整 ③ utilized 比 used 正式。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 In other words → That is to say / Simply put；不会 utilized → used / made use of / harnessed',
          sentencePattern: '\'换句话说，XX是可以安全A和B的\' → In other words, XX can be safely A and B',
          highScore: { en: '', note: 'In other words + can be safely developed and utilized' },
          lowScore: { en: '', note: 'made 不如 developed 准确。评分 8-11 分档。' }
        }
      }
    ]
  }
];
