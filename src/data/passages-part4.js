// 4篇深度标注真题 (按年份由新到旧排序 2020.9–2020.12) — p31-p34

export const passagesPart4 = [
  // p31. 南京长江大桥 (2020.12)
  {
    id: 'p31',
    level: 'CET-4',
    title: '南京长江大桥',
    year: '2020.12',
    topic: '科技成就',
    difficulty: 3,
    fullCN: '南京长江大桥是中国第一座自行设计和建造的公铁两用桥梁，于1968年建成通车。这座桥不仅是中国桥梁建设的里程碑，更是中国人民自力更生精神的象征。大桥上层为公路桥，下层为铁路桥，跨江长度超过一千五百米。它的建成结束了长江下游没有桥梁的历史，极大促进了南北交通。今天，南京长江大桥依然是中国桥梁工程的骄傲。',
    fullEN: 'The Nanjing Yangtze River Bridge, China\'s first combined road-rail bridge independently designed and constructed, was opened to traffic in 1968. This bridge is not only a milestone in China\'s bridge construction, but also a symbol of the Chinese people\'s spirit of self-reliance. The upper deck of the bridge serves as a road bridge and the lower deck as a railway bridge, with a river-spanning length of over 1,500 meters. Its completion ended the history of no bridges over the lower reaches of the Yangtze River and greatly facilitated north-south transportation. Today, the Nanjing Yangtze River Bridge remains a source of pride for China\'s bridge engineering.',
    sentences: [
      {
        id: 'p31-s0',
        cn: '南京长江大桥是中国第一座自行设计和建造的公铁两用桥梁，于1968年建成通车。',
        en: 'The Nanjing Yangtze River Bridge, China\'s first combined road-rail bridge independently designed and constructed, was opened to traffic in 1968.',
        annotations: [
          { fragment: 'combined road-rail bridge', type: 'vocab', label: '公铁两用桥梁', detail: 'combined = 组合的/联合的。road-rail bridge = 公铁两用桥。用 hyphen 连接复合词。' },
          { fragment: 'independently designed and constructed', type: 'vocab', label: '自行设计和建造', detail: 'independently = 独立地/自行地。designed and constructed = 设计和建造，过去分词短语作后置定语。' },
          { fragment: 'was opened to traffic in 1968', type: 'structure', label: '主句谓语', detail: 'was opened to traffic = 建成通车。把主句谓语放到同位语之后，避免 which 紧跟在 China 后面造成指代歧义。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + 同位语(China\'s first + 名词 + 分词后置定语) + 谓语',
          structureAnalysis: 'The Nanjing Yangtze River Bridge → (China\'s first combined road-rail bridge independently designed and constructed) → was opened to traffic → in 1968',
          whyGood: '① combined road-rail bridge 精准翻译\'公铁两用桥梁\' ② independently designed and constructed 分词后置贴合\'自行设计和建造\' ③ 用同位语承载头衔，主句只保留“1968年通车”，结构清楚、无指代歧义。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 independently → on one\'s own / by oneself / without outside help；不会 combined road-rail bridge → dual-purpose bridge for road and rail；不会 opened to traffic → put into operation / began operating',
          sentencePattern: '\'XX是中国第一座自行设计和建造的A，于B年建成通车\' → \'XX, China\'s first A independently designed and constructed, was opened to traffic in B\'',
          highScore: { en: 'The Nanjing Yangtze River Bridge, China\'s first combined road-rail bridge independently designed and constructed, was opened to traffic in 1968.', note: 'combined + independently + 同位语承载头衔，主句干净' },
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
          highScore: { en: 'This bridge is not only a milestone in China\'s bridge construction, but also a symbol of the Chinese people\'s spirit of self-reliance.', note: 'not only...but also + milestone + self-reliance 精确对应原文' },
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
          highScore: { en: 'The upper deck of the bridge serves as a road bridge and the lower deck as a railway bridge, with a river-spanning length of over 1,500 meters.', note: 'serves as + 省略 + with 结构，三个信息块一句话' },
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
          highScore: { en: 'Its completion ended the history of no bridges over the lower reaches of the Yangtze River and greatly facilitated north-south transportation.', note: 'ended the history of no bridges + facilitated 精准' },
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
          highScore: { en: 'Today, the Nanjing Yangtze River Bridge remains a source of pride for China\'s bridge engineering.', note: 'remains + a source of pride 表达精准' },
          lowScore: { en: '', note: 'something...feel proud of 太口语化。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p32. 四大名著 (2020.9)
  {
    id: 'p32',
    level: 'CET-4',
    title: '四大名著',
    year: '2020.9',
    topic: '中国文化',
    difficulty: 2,
    fullCN: '中国古典文学四大名著是指《红楼梦》、《三国演义》、《水浒传》和《西游记》。这四部小说创作于明清时期，是中国文学史上最负盛名的作品。《红楼梦》以贾宝玉和林黛玉的爱情悲剧为主线，描绘了一个封建家族的兴衰；《西游记》则讲述了唐僧师徒四人西天取经的神话故事。几百年来，四大名著不仅在中国家喻户晓，还被翻译成多种语言，在世界范围内广泛传播。',
    fullEN: 'The Four Great Classical Novels of Chinese literature refer to A Dream of Red Mansions, Romance of the Three Kingdoms, Water Margin, and Journey to the West. These four novels were written during the Ming and Qing dynasties and are the most prestigious works in the history of Chinese literature. A Dream of Red Mansions uses the love tragedy of Jia Baoyu and Lin Daiyu as its main storyline and depicts the rise and fall of a feudal family; Journey to the West tells the mythological story of the Tang monk and his three disciples traveling westward to obtain Buddhist scriptures. For hundreds of years, the Four Great Classical Novels have not only been household names in China but have also been translated into multiple languages and widely circulated around the world.',
    sentences: [
      {
        id: 'p32-s0',
        cn: '中国古典文学四大名著是指《红楼梦》、《三国演义》、《水浒传》和《西游记》。',
        en: 'The Four Great Classical Novels of Chinese literature refer to A Dream of Red Mansions, Romance of the Three Kingdoms, Water Margin, and Journey to the West.',
        annotations: [
          { fragment: 'The Four Great Classical Novels', type: 'vocab', label: '四大名著', detail: 'Four Great Classical Novels = 四大名著（标准译法）。Classical = 古典的。Novels = 长篇小说。' },
          { fragment: 'refer to', type: 'phrase', label: '指的是', detail: 'refer to = 指的是/指称。比 mean 更正式，用于解释术语。' }
        ],
        technique: {
          difficulty: 1,
          structure: '专有名词主语 + refer to + 列举(四个书名)',
          structureAnalysis: 'The Four Great Classical Novels of Chinese literature → refer to → A Dream of Red Mansions, Romance of the Three Kingdoms, Water Margin, and Journey to the West',
          whyGood: '① Four Great Classical Novels 是\'四大名著\'的国际标准译法 ② refer to 精准表达\'指的是\' ③ 英文书名规范是斜体（手写时加下划线），不用中文书名号或引号。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 refer to → mean / are composed of；注意书名是穷举列举，不要用 include 削弱“全部”的含义',
          sentencePattern: '\'A四大名著是指甲、乙、丙和丁\' → The Four Great A Novels refer to 甲, 乙, 丙, and 丁',
          highScore: { en: 'The Four Great Classical Novels of Chinese literature refer to A Dream of Red Mansions, Romance of the Three Kingdoms, Water Margin, and Journey to the West.', note: 'Four Great Classical Novels + refer to + 书名翻译准确' },
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
          highScore: { en: 'These four novels were written during the Ming and Qing dynasties and are the most prestigious works in the history of Chinese literature.', note: 'were written + prestigious + works' },
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
          highScore: { en: '"A Dream of Red Mansions" uses the love tragedy of Jia Baoyu and Lin Daiyu as its main storyline and depicts the rise and fall of a feudal family; "Journey to the West" tells the mythological story of the Tang monk and his three disciples traveling westward to obtain Buddhist scriptures.', note: 'uses...as + depicts + 分号对比 + disciples traveling westward' },
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
          highScore: { en: 'For hundreds of years, the Four Great Classical Novels have not only been household names in China but have also been translated into multiple languages and widely circulated around the world.', note: 'For + 现完 + not only...but also + household names + widely circulated' },
          lowScore: { en: '', note: 'are 应为 have been + known to every Chinese family 不如 household names。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p33. 郑和下西洋 (2020.9)
  {
    id: 'p33',
    level: 'CET-4',
    title: '郑和下西洋',
    year: '2020.9',
    topic: '中国文化',
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
          highScore: { en: 'Zheng He was a famous navigator of the Ming Dynasty.', note: 'navigator + of the Ming Dynasty 简洁准确' },
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
          highScore: { en: 'In the early 15th century, he led a massive fleet on seven expeditions to the Western Seas, visiting over 30 countries and regions in Southeast Asia, South Asia, the Middle East, and East Africa.', note: 'led...on expeditions + visiting 处理长句不散架' },
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
          highScore: { en: 'The size of Zheng He\'s fleet and the advancement of its technology were far ahead of others in the world at that time.', note: '名词化主语 + far ahead of 地道' },
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
          highScore: { en: 'These voyages not only demonstrated China\'s national strength, but also promoted economic and cultural exchanges between China and other countries.', note: 'not only...but also + demonstrated + exchanges 精准' },
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
          highScore: { en: 'Zheng He\'s voyages are a great feat in the history of ancient Chinese navigation, predating Christopher Columbus\'s discovery of the Americas by nearly a century.', note: 'feat + predating...by 表达地道紧凑' },
          lowScore: { en: '', note: 'sea history 不如 navigation + America 不等于\'美洲\' + 拆成两句。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p34. 中国文化产品 (2020.9)
  {
    id: 'p34',
    level: 'CET-6',
    title: '中国文化产品',
    year: '2020.9',
    topic: '中国文化',
    difficulty: 3,
    fullCN: '近年来，中国文化产品在国际市场上的影响力日益增强。中国电影、电视剧、网络小说和动漫作品不仅受到国内观众的喜爱，也在海外收获了大批粉丝。中国网络文学更是成为世界文化现象，大量作品被翻译成多种语言在海外传播。这一趋势反映了中国文化软实力的不断提升，也为世界了解中国打开了新的窗口。越来越多的中国文化企业开始布局海外市场，推动中国故事走向世界。',
    fullEN: 'In recent years, the influence of Chinese cultural products in the international market has been steadily growing. Chinese films, TV dramas, web novels, and animation works have not only been loved by domestic audiences but have also gained a large number of fans overseas. Chinese online literature has even become a global cultural phenomenon, with a large number of works translated into multiple languages and spread abroad. This trend reflects the continuous enhancement of China\'s cultural soft power and has opened new windows for the world to understand China. An increasing number of Chinese cultural enterprises are beginning to expand into overseas markets, bringing Chinese stories to the world.',
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
          highScore: { en: 'In recent years, the influence of Chinese cultural products in the international market has been steadily growing.', note: '现在完成进行时 + steadily 表达持续趋势' },
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
          highScore: { en: 'Chinese films, TV dramas, web novels, and animation works have not only been loved by domestic audiences but have also gained a large number of fans overseas.', note: '主语罗列 + 被动→主动切换流畅' },
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
          highScore: { en: 'Chinese online literature has even become a global cultural phenomenon, with a large number of works translated into multiple languages and spread abroad.', note: 'even + phenomenon + with 结构整合两个动作' },
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
          highScore: { en: 'This trend reflects the continuous enhancement of China\'s cultural soft power and has opened new windows for the world to understand China.', note: 'reflects + soft power + open windows 保留原文修辞' },
          lowScore: { en: '', note: 'shows 不如 reflects + becoming stronger 不如 enhancement of soft power + gives...ways 不如 opens windows。评分 8-10 分档。' }
        }
      },
      {
        id: 'p34-s4',
        cn: '越来越多的中国文化企业开始布局海外市场，推动中国故事走向世界。',
        en: 'An increasing number of Chinese cultural enterprises are beginning to expand into overseas markets, bringing Chinese stories to the world.',
        annotations: [
          { fragment: 'An increasing number of', type: 'structure', label: '越来越多的', detail: 'An increasing number of + 复数名词 = 越来越多的...。比 more and more 更正式。' },
          { fragment: 'expand into overseas markets', type: 'phrase', label: '布局海外市场', detail: 'expand into = 扩展到/布局到。overseas markets = 海外市场。' },
          { fragment: 'bringing Chinese stories to the world', type: 'structure', label: '推动...走向世界', detail: 'bring...to the world = 把...带给世界/推向世界。现在分词表伴随结果；promote...to somewhere 不是自然搭配。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'An increasing number of + 主语 + are beginning to + 谓语A + 现在分词(bringing...to...)',
          structureAnalysis: '(An increasing number of Chinese cultural enterprises) → are beginning to → expand (into overseas markets) → bringing → (Chinese stories to the world)',
          whyGood: '① An increasing number of 比 more and more 正式 ② expand into 精准表达\'布局/扩展\' ③ bringing...to... 现在分词作伴随状语，搭配自然。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 An increasing number of → More and more / A growing number of；不会 enterprises → companies / businesses / firms；不会 expand into → enter / move into / branch out into',
          sentencePattern: '\'越来越多的XX开始布局A，推动B走向世界\' → \'An increasing number of XX are beginning to expand into A, bringing B to the world\'',
          highScore: { en: 'An increasing number of Chinese cultural enterprises are beginning to expand into overseas markets, bringing Chinese stories to the world.', note: 'An increasing number of + expand into + bringing 一气呵成' },
          lowScore: { en: 'More and more Chinese cultural companies are going into foreign markets. They are helping Chinese stories reach the world.', note: 'More and more 不够正式，go into 不如 expand into，拆成两句；意思完整。评分 9-11 分档。' }
        }
      }
    ]
  }
];