// 2026.6 四六级翻译真题 — p35-p40
// 四级：尊师 / 中华餐桌礼仪 / 礼尚往来
// 六级：无人机 / 农村电子商务 / 科技赋能医疗

export const passagesPart5 = [
  // p35. 尊师 (2026.6 CET-4)
  {
    id: 'p35',
    level: 'CET-4',
    title: '尊师传统',
    year: '2026.6',
    topic: '中国文化',
    difficulty: 2,
    fullCN: '中国有句老话：“一日为师，终身为父”。在中国人的观念里，老师不仅传授知识，更教给学生做人的道理。在古代，学生初次见老师时要举行隆重的仪式，足见老师地位之高。为弘扬尊师的优良传统，中国从1985年开始将每年的9月10日定为教师节。在这一天，学生以各种方式表达对老师的敬意。尊师是中华民族的传统美德，在当今社会得到了发扬光大。',
    fullEN: 'As an old Chinese saying goes, "A teacher for a day is a father for a lifetime." In the eyes of Chinese people, teachers not only impart knowledge but also teach students the principles of life. In ancient times, students would hold grand ceremonies when meeting their teachers for the first time, which shows how highly teachers were regarded. To carry forward the fine tradition of respecting teachers, China has designated September 10 as Teachers\' Day since 1985. On this day, students express their respect for teachers in various ways. Respecting teachers is a traditional virtue of the Chinese nation and has been carried forward in today\'s society.',
    sentences: [
      {
        id: 'p35-s0',
        cn: '中国有句老话：“一日为师，终身为父”。',
        en: 'As an old Chinese saying goes, "A teacher for a day is a father for a lifetime."',
        annotations: [
          { fragment: 'As an old Chinese saying goes', type: 'structure', label: '中国有句老话', detail: '引出谚语的固定句式。也可以说 There is an old Chinese saying that...' },
          { fragment: 'A teacher for a day is a father for a lifetime', type: 'phrase', label: '一日为师，终身为父', detail: '谚语宜意译。for a day 与 for a lifetime 形成对照，保留原文的对仗感。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'As an old Chinese saying goes, "..."',
          structureAnalysis: '(As an old Chinese saying goes) → ("A teacher for a day is a father for a lifetime")',
          whyGood: '① 用固定句式自然引出谚语 ② for a day / for a lifetime 对照工整，保留谚语味道。',
          keyVocab: ['old saying 老话', 'lifetime 一生'],
          substitutionGuide: '不会 saying → proverb；不会 for a lifetime → for one\'s whole life；实在不会译谚语，可改写成 A teacher is like a father to a student for life.',
          sentencePattern: '中国有句老话：“A” → As an old Chinese saying goes, “A”',
          highScore: { en: 'As an old Chinese saying goes, "A teacher for a day is a father for a lifetime."', note: '固定句式 + 意译谚语，自然地道' },
          lowScore: { en: '', note: 'A day teacher, all life father 逐字硬译，英语读者难以理解，容易在文化表达上失分。' }
        }
      },
      {
        id: 'p35-s1',
        cn: '在中国人的观念里，老师不仅传授知识，更教给学生做人的道理。',
        en: 'In the eyes of Chinese people, teachers not only impart knowledge but also teach students the principles of life.',
        annotations: [
          { fragment: 'In the eyes of', type: 'phrase', label: '在……观念里', detail: 'in the eyes of sb = 在某人看来/在某人观念里。' },
          { fragment: 'not only...but also...', type: 'structure', label: '不仅……更……', detail: '连接两个并列谓语，注意前后形式一致。' },
          { fragment: 'impart knowledge', type: 'phrase', label: '传授知识', detail: 'impart = 传授。impart knowledge = 传授知识，比 teach knowledge 更正式。' },
          { fragment: 'the principles of life', type: 'phrase', label: '做人的道理', detail: 'principles of life = 做人/生活的道理。也可用 how to conduct oneself。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In the eyes of A, B not only does X but also does Y',
          structureAnalysis: '(In the eyes of Chinese people) → (teachers) → not only impart (knowledge) → but also teach (students) (the principles of life)',
          whyGood: '① In the eyes of 准确对应“在……观念里” ② not only...but also 显化“不仅……更……” ③ impart knowledge 搭配正式。',
          keyVocab: ['impart 传授', 'principle 道理/原则'],
          substitutionGuide: '不会 impart → pass on / spread；不会 principles of life → how to be a good person / moral principles。',
          sentencePattern: '在A的观念里，B不仅C，更D → In the eyes of A, B not only C but also D',
          highScore: { en: 'In the eyes of Chinese people, teachers not only impart knowledge but also teach students the principles of life.', note: 'not only...but also 省略 to，句式干净' },
          lowScore: { en: '', note: 'In Chinese people\'s idea 表达生硬；teach knowledge 搭配不当；how to be man 语义含混。' }
        }
      },
      {
        id: 'p35-s2',
        cn: '在古代，学生初次见老师时要举行隆重的仪式，足见老师地位之高。',
        en: 'In ancient times, students would hold grand ceremonies when meeting their teachers for the first time, which shows how highly teachers were regarded.',
        annotations: [
          { fragment: 'would hold', type: 'grammar', label: '要举行（过去惯常）', detail: 'would + 动词原形表示过去经常性/习惯性动作，比一般过去时更能体现“古时惯例”。' },
          { fragment: 'grand ceremonies', type: 'phrase', label: '隆重的仪式', detail: 'grand = 隆重的/盛大的。ceremony = 仪式。' },
          { fragment: 'which shows how highly teachers were regarded', type: 'structure', label: '足见老师地位之高', detail: 'which 引导非限制性定语从句，指代前面整件事；how highly...regarded 是宾语从句。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主句 + when doing + which shows + 宾语从句',
          structureAnalysis: '(In ancient times) → (students) → would hold (grand ceremonies) → when meeting (their teachers for the first time) → which shows (how highly teachers were regarded)',
          whyGood: '① would hold 体现古时惯例 ② when meeting 分词短语压缩时间状语 ③ which 从句把“足见”自然接上。',
          keyVocab: ['grand 隆重的', 'regard 看待'],
          substitutionGuide: '不会 grand → elaborate / solemn；不会 be regarded → be treated / be viewed；不会非限制性从句，可拆句：This shows that teachers enjoyed high status.',
          sentencePattern: '学生做A，足见B → Students would do A, which shows B',
          highScore: { en: 'In ancient times, students would hold grand ceremonies when meeting their teachers for the first time, which shows how highly teachers were regarded.', note: 'would + when doing + which 从句，三层信息衔接流畅' },
          lowScore: { en: '', note: 'In old times 不够正式；hold a big ceremony 偏口语；can see teacher very high 语法错误。' }
        }
      },
      {
        id: 'p35-s3',
        cn: '为弘扬尊师的优良传统，中国从1985年开始将每年的9月10日定为教师节。',
        en: 'To carry forward the fine tradition of respecting teachers, China has designated September 10 as Teachers\' Day since 1985.',
        annotations: [
          { fragment: 'To carry forward', type: 'structure', label: '为弘扬', detail: '不定式置于句首表目的。carry forward = 弘扬/发扬。' },
          { fragment: 'designated...as...', type: 'phrase', label: '定为', detail: 'designate A as B = 把A定为B，正式用语。' },
          { fragment: "Teachers' Day", type: 'term', label: '教师节', detail: '专有节日名称，首字母大写，所有格置于 Day 前。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'To do X, A has designated B as C since + 年份',
          structureAnalysis: '(To carry forward the fine tradition of respecting teachers) → (China) → has designated (September 10) → as (Teachers\' Day) → since 1985',
          whyGood: '① 目的状语前置，逻辑清晰 ② designate...as... 正式准确 ③ since 1985 与现在完成时搭配。',
          keyVocab: ['carry forward 弘扬', 'designate 指定'],
          substitutionGuide: '不会 carry forward → promote / pass on；不会 designate → set / establish...as；不会现在完成时，可写 In 1985, China designated...',
          sentencePattern: '为弘扬A，中国从B年开始将C定为D → To carry forward A, China has designated C as D since B',
          highScore: { en: 'To carry forward the fine tradition of respecting teachers, China has designated September 10 as Teachers\' Day since 1985.', note: 'To do 目的状语 + designate...as + since 完成时' },
          lowScore: { en: '', note: 'For spread the good tradition 介词后误用动词原形；make September 10 is Teachers\' Day 双谓语错误。' }
        }
      },
      {
        id: 'p35-s4',
        cn: '在这一天，学生以各种方式表达对老师的敬意。',
        en: 'On this day, students express their respect for teachers in various ways.',
        annotations: [
          { fragment: 'express their respect for', type: 'phrase', label: '表达对……的敬意', detail: 'express respect for sb = 向某人表达敬意。' },
          { fragment: 'in various ways', type: 'phrase', label: '以各种方式', detail: 'in various ways = 以各种方式，也可用 in a variety of ways。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'On this day, A expresses B for C in various ways',
          structureAnalysis: '(On this day) → (students) → express (their respect for teachers) → (in various ways)',
          whyGood: '① express respect for 搭配标准 ② in various ways 简洁对应“以各种方式”。',
          keyVocab: ['express 表达', 'various 各种各样的'],
          substitutionGuide: '不会 express → show；不会 in various ways → in different ways / in many forms。',
          sentencePattern: '在这一天，A以各种方式表达对B的敬意 → On this day, A express their respect for B in various ways',
          highScore: { en: 'On this day, students express their respect for teachers in various ways.', note: 'express respect for + in various ways，准确简洁' },
          lowScore: { en: '', note: 'show their respect to teacher 介词偏口语；use many ways 中式表达。' }
        }
      },
      {
        id: 'p35-s5',
        cn: '尊师是中华民族的传统美德，在当今社会得到了发扬光大。',
        en: 'Respecting teachers is a traditional virtue of the Chinese nation and has been carried forward in today\'s society.',
        annotations: [
          { fragment: 'Respecting teachers', type: 'structure', label: '尊师', detail: '动名词短语作主语，指一类行为。' },
          { fragment: 'traditional virtue', type: 'phrase', label: '传统美德', detail: 'virtue = 美德。traditional virtue = 传统美德。' },
          { fragment: 'has been carried forward', type: 'grammar', label: '得到了发扬光大', detail: '现在完成时被动语态，强调这一美德延续至今并被发扬。' }
        ],
        technique: {
          difficulty: 3,
          structure: '动名词主语 + is + 表语 + and has been + 过去分词 + 状语',
          structureAnalysis: '(Respecting teachers) → is → (a traditional virtue of the Chinese nation) → and → has been carried forward → (in today\'s society)',
          whyGood: '① 动名词主语简洁 ② traditional virtue 术语准确 ③ 现在完成时被动体现“延续至今、被发扬”。',
          keyVocab: ['virtue 美德', 'the Chinese nation 中华民族'],
          substitutionGuide: '不会 virtue → good quality / moral value；不会 be carried forward → be promoted / be kept alive。',
          sentencePattern: 'A是B的传统美德，在当今社会得到了发扬光大 → A is a traditional virtue of B and has been carried forward in today\'s society',
          highScore: { en: 'Respecting teachers is a traditional virtue of the Chinese nation and has been carried forward in today\'s society.', note: '动名词主语 + 现在完成时被动，收束全文' },
          lowScore: { en: '', note: 'Respect teacher 主语形式不当；is carried forward 时态不足，无法体现延续至今。' }
        }
      }
    ]
  },
  // p36. 中华餐桌礼仪 (2026.6 CET-4)
  {
    id: 'p36',
    level: 'CET-4',
    title: '中华餐桌礼仪',
    year: '2026.6',
    topic: '中国文化',
    difficulty: 3,
    fullCN: '餐桌礼仪（dining etiquette）是中华传统文化的重要组成部分，蕴含着热情有礼的待客之道。为了招待客人，主人会根据客人的口味和喜好准备丰富精致的菜肴。就餐座位的安排非常讲究，主人坐在正对大门的位置，在主人身边就座的是最重要的客人。进餐时，主人会不时地为客人添酒加菜。这种独特的餐桌礼仪已延续了数千年，对促进和谐的人际交往起到了重要的作用。',
    fullEN: 'Dining etiquette is an important part of traditional Chinese culture and embodies the warm and courteous way of treating guests. To entertain guests, the host prepares rich and exquisite dishes according to their tastes and preferences. The seating arrangement is very particular: the host sits directly facing the door, and the most important guest sits beside the host. During the meal, the host refills the guests\' glasses and adds more dishes from time to time. This unique dining etiquette has lasted for thousands of years and has played an important role in promoting harmonious interpersonal relationships.',
    sentences: [
      {
        id: 'p36-s0',
        cn: '餐桌礼仪（dining etiquette）是中华传统文化的重要组成部分，蕴含着热情有礼的待客之道。',
        en: 'Dining etiquette is an important part of traditional Chinese culture and embodies the warm and courteous way of treating guests.',
        annotations: [
          { fragment: 'Dining etiquette', type: 'term', label: '餐桌礼仪', detail: '试卷已给出 dining etiquette，全篇应统一使用，不要中途改成 table manners。' },
          { fragment: 'embodies', type: 'vocab', label: '蕴含/体现', detail: 'embody = 体现/蕴含。比 includes 更强调内在精神。' },
          { fragment: 'courteous', type: 'vocab', label: '有礼的', detail: 'courteous = 有礼貌的/谦恭有礼的。' },
          { fragment: 'the warm and courteous way of treating guests', type: 'phrase', label: '待客之道', detail: 'the way of treating guests = 待客之道，也可用 hospitality。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A is an important part of B and embodies C',
          structureAnalysis: '(Dining etiquette) → is → (an important part of traditional Chinese culture) → and → embodies → (the warm and courteous way of treating guests)',
          whyGood: '① 术语使用题干给定译法 ② embodies 把“蕴含”译得具体 ③ courteous 提升正式度。',
          keyVocab: ['etiquette 礼仪', 'embody 体现', 'courteous 有礼的'],
          substitutionGuide: '不会 embody → reflects / shows；不会 courteous → polite / respectful；不会待客之道 → hospitality / how guests are treated。',
          sentencePattern: 'A是B的重要组成部分，蕴含着C → A is an important part of B and embodies C',
          highScore: { en: 'Dining etiquette is an important part of traditional Chinese culture and embodies the warm and courteous way of treating guests.', note: 'embody + courteous 表达正式' },
          lowScore: { en: '', note: 'is a big part of 偏口语；includes warm hospitality 与“之道”略有偏差。' }
        }
      },
      {
        id: 'p36-s1',
        cn: '为了招待客人，主人会根据客人的口味和喜好准备丰富精致的菜肴。',
        en: 'To entertain guests, the host prepares rich and exquisite dishes according to their tastes and preferences.',
        annotations: [
          { fragment: 'To entertain guests', type: 'structure', label: '为了招待客人', detail: '不定式表目的。entertain guests = 招待客人。' },
          { fragment: 'according to their tastes and preferences', type: 'phrase', label: '根据客人的口味和喜好', detail: 'taste = 口味；preference = 喜好。according to 表示依据。' },
          { fragment: 'exquisite', type: 'vocab', label: '精致的', detail: 'exquisite = 精致的/精美的，比 nice 更高级。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'To do X, A prepares B according to C',
          structureAnalysis: '(To entertain guests) → (the host) → prepares (rich and exquisite dishes) → according to (their tastes and preferences)',
          whyGood: '① To entertain guests 目的明确 ② according to 对应“根据” ③ tastes and preferences 准确覆盖“口味和喜好”。',
          keyVocab: ['entertain 招待', 'exquisite 精致的'],
          substitutionGuide: '不会 entertain → treat / receive；不会 exquisite → fine / delicious-looking；不会 preferences → likes。',
          sentencePattern: '为了招待客人，主人根据A准备B → To entertain guests, the host prepares B according to A',
          highScore: { en: 'To entertain guests, the host prepares rich and exquisite dishes according to their tastes and preferences.', note: 'according to + tastes and preferences，信息完整' },
          lowScore: { en: '', note: 'For treat guests 介词后误用原形；make many good food 搭配与用词都偏基础。' }
        }
      },
      {
        id: 'p36-s2',
        cn: '就餐座位的安排非常讲究，主人坐在正对大门的位置，在主人身边就座的是最重要的客人。',
        en: 'The seating arrangement is very particular: the host sits directly facing the door, and the most important guest sits beside the host.',
        annotations: [
          { fragment: 'seating arrangement', type: 'phrase', label: '座位安排', detail: 'seating arrangement = 座位安排；seating 是名词化的“座位设置”。' },
          { fragment: 'is very particular', type: 'phrase', label: '非常讲究', detail: 'be particular about sth = 对……很讲究；此处用 is very particular 表达“安排大有讲究”。' },
          { fragment: 'directly facing the door', type: 'structure', label: '正对大门', detail: '现在分词短语作状语，修饰 sits；facing 表朝向。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A is very particular: B does X, and C does Y',
          structureAnalysis: '(The seating arrangement) → is → (very particular) → : → (the host) sits (directly facing the door) → and → (the most important guest) sits (beside the host)',
          whyGood: '① seating arrangement 术语准确 ② 冒号展开说明“讲究”在哪 ③ facing 分词简洁。',
          keyVocab: ['seating arrangement 座位安排', 'particular 讲究的'],
          substitutionGuide: '不会 particular → carefully planned / has many rules；不会 directly facing → right in front of；不会分词，可写 who sits facing the door。',
          sentencePattern: 'A的安排非常讲究：B坐在C，D坐在E → The arrangement of A is very particular: B sits C, and D sits E',
          highScore: { en: 'The seating arrangement is very particular: the host sits directly facing the door, and the most important guest sits beside the host.', note: '冒号展开 + facing 分词，结构清楚' },
          lowScore: { en: '', note: 'seat\'s place 所有格与用词不当；very pay attention 中式；host sit front door 缺介词。' }
        }
      },
      {
        id: 'p36-s3',
        cn: '进餐时，主人会不时地为客人添酒加菜。',
        en: 'During the meal, the host refills the guests\' glasses and adds more dishes from time to time.',
        annotations: [
          { fragment: 'During the meal', type: 'phrase', label: '进餐时', detail: 'during the meal = 用餐期间。' },
          { fragment: 'refills', type: 'vocab', label: '添酒', detail: 'refill = 重新斟满。refill the guests\' glasses = 给客人添酒。' },
          { fragment: 'from time to time', type: 'phrase', label: '不时地', detail: 'from time to time = 不时地/偶尔。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'During X, A refills B and adds C from time to time',
          structureAnalysis: '(During the meal) → (the host) → refills (the guests\' glasses) → and → adds (more dishes) → (from time to time)',
          whyGood: '① refill 精准对应“添酒” ② adds more dishes 对应“加菜” ③ from time to time 自然表达“不时”。',
          keyVocab: ['refill 重新斟满', 'from time to time 不时地'],
          substitutionGuide: '不会 refill → pour more wine into；不会 from time to time → now and then / occasionally。',
          sentencePattern: '进餐时，主人不时为客人A和B → During the meal, the host does A and B from time to time',
          highScore: { en: 'During the meal, the host refills the guests\' glasses and adds more dishes from time to time.', note: 'refill + add 两个动作对应准确' },
          lowScore: { en: '', note: 'add wine 用词不准；give food 泛化；sometimes 表示频率的语气弱于“不时”。' }
        }
      },
      {
        id: 'p36-s4',
        cn: '这种独特的餐桌礼仪已延续了数千年，对促进和谐的人际交往起到了重要的作用。',
        en: 'This unique dining etiquette has lasted for thousands of years and has played an important role in promoting harmonious interpersonal relationships.',
        annotations: [
          { fragment: 'has lasted for', type: 'grammar', label: '已延续了', detail: '现在完成时 + for + 时间段，表示从过去延续到现在。' },
          { fragment: 'played an important role in', type: 'phrase', label: '起到了重要的作用', detail: 'play an important role in doing sth = 在……中起重要作用，in 后接动名词。' },
          { fragment: 'harmonious interpersonal relationships', type: 'phrase', label: '和谐的人际交往', detail: 'harmonious = 和谐的；interpersonal relationships = 人际关系。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A has lasted for B and has played an important role in doing C',
          structureAnalysis: '(This unique dining etiquette) → has lasted (for thousands of years) → and → has played (an important role) → in promoting (harmonious interpersonal relationships)',
          whyGood: '① 两个现在完成时并列，时间跨度与作用都成立 ② play an important role in doing 是标准搭配 ③ 术语准确。',
          keyVocab: ['last 延续', 'harmonious 和谐的', 'interpersonal 人际的'],
          substitutionGuide: '不会 last → continue / exist；不会 play a role in → contribute to；不会 interpersonal → between people / social。',
          sentencePattern: 'A已延续了B，对促进C起到了重要作用 → A has lasted for B and has played an important role in promoting C',
          highScore: { en: 'This unique dining etiquette has lasted for thousands of years and has played an important role in promoting harmonious interpersonal relationships.', note: '双完成时并列 + play a role in doing，收束有力' },
          lowScore: { en: '', note: 'lasted thousand years 缺 for 与复数；took important action 搭配错误，应为 played a role。' }
        }
      }
    ]
  },
  // p37. 礼尚往来 (2026.6 CET-4)
  {
    id: 'p37',
    level: 'CET-4',
    title: '礼尚往来',
    year: '2026.6',
    topic: '中国文化',
    difficulty: 3,
    fullCN: '在中国传统文化中，亲朋好友之间互赠礼物是人际交往的一种重要礼节。赠送礼物不仅是物质的馈赠，更是情感的表达，是维系人际关系的重要纽带。一份精心挑选、符合接受者喜好的礼物，往往能加深彼此的感情。中国人遵循“礼尚往来”的传统，接受礼物时会表达谢意，并适时回赠礼物，以增进彼此的融洽关系。',
    fullEN: 'In traditional Chinese culture, exchanging gifts between relatives and friends is an important etiquette in interpersonal communication. Giving a gift is not only a material offering but also an expression of emotion, serving as an important bond that maintains interpersonal relationships. A carefully chosen gift that suits the recipient\'s taste often deepens the affection between people. Chinese people follow the tradition that courtesy demands reciprocity: they express gratitude when receiving a gift and give one in return at an appropriate time to enhance their harmonious relationship.',
    sentences: [
      {
        id: 'p37-s0',
        cn: '在中国传统文化中，亲朋好友之间互赠礼物是人际交往的一种重要礼节。',
        en: 'In traditional Chinese culture, exchanging gifts between relatives and friends is an important etiquette in interpersonal communication.',
        annotations: [
          { fragment: 'exchanging gifts', type: 'structure', label: '互赠礼物', detail: '动名词短语作主语，exchange = 交换/互赠。' },
          { fragment: 'relatives and friends', type: 'phrase', label: '亲朋好友', detail: 'relatives and friends = 亲戚朋友，也可用 family and friends。' },
          { fragment: 'etiquette in interpersonal communication', type: 'phrase', label: '人际交往的礼节', detail: 'interpersonal communication = 人际交往；etiquette = 礼节。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In A, doing B between C is an important etiquette in D',
          structureAnalysis: '(In traditional Chinese culture) → (exchanging gifts between relatives and friends) → is → (an important etiquette in interpersonal communication)',
          whyGood: '① 动名词主语对应“互赠礼物” ② between 准确表达双向 ③ etiquette 与 interpersonal communication 术语到位。',
          keyVocab: ['exchange 互赠', 'etiquette 礼节'],
          substitutionGuide: '不会 exchange → give each other；不会 etiquette → courtesy / social custom；不会 interpersonal communication → social interaction。',
          sentencePattern: 'A之间互赠礼物是B的一种重要礼节 → Exchanging gifts between A is an important etiquette in B',
          highScore: { en: 'In traditional Chinese culture, exchanging gifts between relatives and friends is an important etiquette in interpersonal communication.', note: '动名词主语 + between，关系表达准确' },
          lowScore: { en: '', note: 'people give gifts to each other 作主语冗长；is a important manner 冠词与用词均有误。' }
        }
      },
      {
        id: 'p37-s1',
        cn: '赠送礼物不仅是物质的馈赠，更是情感的表达，是维系人际关系的重要纽带。',
        en: 'Giving a gift is not only a material offering but also an expression of emotion, serving as an important bond that maintains interpersonal relationships.',
        annotations: [
          { fragment: 'not only...but also...', type: 'structure', label: '不仅是……更是……', detail: '连接两个名词短语，注意结构对称。' },
          { fragment: 'a material offering', type: 'phrase', label: '物质的馈赠', detail: 'material = 物质的；offering = 馈赠之物。' },
          { fragment: 'serving as', type: 'structure', label: '是/作为', detail: '现在分词作伴随状语，把“是……纽带”接在主句后。' },
          { fragment: 'an important bond that maintains', type: 'phrase', label: '维系……的纽带', detail: 'bond = 纽带；that maintains 定语从句修饰 bond。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A is not only B but also C, serving as D that does E',
          structureAnalysis: '(Giving a gift) → is → not only (a material offering) → but also (an expression of emotion) → serving as (an important bond) → that maintains (interpersonal relationships)',
          whyGood: '① not only...but also 结构对称 ② serving as 分词自然衔接第三层信息 ③ bond + 定语从句准确表达“纽带”。',
          keyVocab: ['material 物质的', 'bond 纽带', 'maintain 维系'],
          substitutionGuide: '不会 offering → gift；不会 bond → link / connection；不会 maintain → keep / hold together。',
          sentencePattern: 'A不仅是B，更是C，是维系D的纽带 → A is not only B but also C, serving as a bond that maintains D',
          highScore: { en: 'Giving a gift is not only a material offering but also an expression of emotion, serving as an important bond that maintains interpersonal relationships.', note: 'not only...but also + serving as 分词，三层信息不散' },
          lowScore: { en: '', note: 'give present 主语形式不当；not only...but also 前后不对称；is a rope 直译“纽带”不地道。' }
        }
      },
      {
        id: 'p37-s2',
        cn: '一份精心挑选、符合接受者喜好的礼物，往往能加深彼此的感情。',
        en: 'A carefully chosen gift that suits the recipient\'s taste often deepens the affection between people.',
        annotations: [
          { fragment: 'carefully chosen', type: 'phrase', label: '精心挑选的', detail: '过去分词短语作前置定语，相当于 which is carefully chosen。' },
          { fragment: 'suits the recipient\'s taste', type: 'phrase', label: '符合接受者喜好', detail: 'suit = 适合；recipient = 接受者；taste = 喜好/品味。' },
          { fragment: 'deepens the affection', type: 'phrase', label: '加深感情', detail: 'deepen = 加深；affection = 感情/情谊。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A + 过去分词定语 + that 定语从句 + often deepens B',
          structureAnalysis: '(A carefully chosen gift) → that suits (the recipient\'s taste) → often deepens → (the affection between people)',
          whyGood: '① carefully chosen 前置定语简洁 ② that suits 从句补充“符合喜好” ③ deepen the affection 搭配自然。',
          keyVocab: ['recipient 接受者', 'affection 感情'],
          substitutionGuide: '不会 recipient → the person who receives it；不会 suit one\'s taste → match one\'s likes；不会 deepen → strengthen / enhance。',
          sentencePattern: '一份精心挑选、符合A喜好的B，往往能加深C → A carefully chosen B that suits A\'s taste often deepens C',
          highScore: { en: 'A carefully chosen gift that suits the recipient\'s taste often deepens the affection between people.', note: '前置分词 + that 从句，定语层次清楚' },
          lowScore: { en: '', note: 'a gift choose carefully 缺被动形式；fit receiver\'s like 搭配与单复数均有问题。' }
        }
      },
      {
        id: 'p37-s3',
        cn: '中国人遵循“礼尚往来”的传统，接受礼物时会表达谢意，并适时回赠礼物，以增进彼此的融洽关系。',
        en: 'Chinese people follow the tradition that courtesy demands reciprocity: they express gratitude when receiving a gift and give one in return at an appropriate time to enhance their harmonious relationship.',
        annotations: [
          { fragment: 'follow the tradition that courtesy demands reciprocity', type: 'phrase', label: '遵循“礼尚往来”的传统', detail: 'courtesy demands reciprocity = 礼尚往来，是固定表达；that 引导同位语从句解释 tradition。' },
          { fragment: 'express gratitude', type: 'phrase', label: '表达谢意', detail: 'express gratitude = 表达感谢。' },
          { fragment: 'give one in return', type: 'phrase', label: '回赠礼物', detail: 'give one in return = 回赠一份（礼物）；one 代指 gift。' },
          { fragment: 'to enhance their harmonious relationship', type: 'structure', label: '以增进融洽关系', detail: '不定式表目的；enhance = 增进/提升。' }
        ],
        technique: {
          difficulty: 4,
          structure: 'A follow the tradition that B: they do C and do D to do E',
          structureAnalysis: '(Chinese people) → follow (the tradition that courtesy demands reciprocity) → : → (they) express (gratitude) when receiving a gift → and give (one in return) at an appropriate time → to enhance (their harmonious relationship)',
          whyGood: '① 用同位语从句解释文化概念 ② 冒号展开具体做法，避免超长句 ③ 不定式收尾点明目的。',
          keyVocab: ['reciprocity 互惠/礼尚往来', 'gratitude 感激', 'enhance 增进'],
          substitutionGuide: '不会 courtesy demands reciprocity → return a favor when receiving one / give something back in return；不会 in return → back / as a return gift；不会 enhance → improve / strengthen。',
          sentencePattern: 'A遵循“礼尚往来”的传统，接受B时表达谢意，并适时回赠，以增进C → A follow the tradition that courtesy demands reciprocity: they express gratitude when receiving B and give one in return at an appropriate time to enhance C',
          highScore: { en: 'Chinese people follow the tradition that courtesy demands reciprocity: they express gratitude when receiving a gift and give one in return at an appropriate time to enhance their harmonious relationship.', note: '同位语从句 + 冒号展开 + 目的不定式，文化概念处理得当' },
          lowScore: { en: '', note: 'gift come gift go 逐字直译；accept present say thanks 缺主语与冠词，整句结构松散。' }
        }
      }
    ]
  },
  // p38. 无人机 (2026.6 CET-6)
  {
    id: 'p38',
    level: 'CET-6',
    title: '无人机产业',
    year: '2026.6',
    topic: '科技成就',
    difficulty: 3,
    fullCN: '近年来，中国无人机产业迅猛发展，出口量位居全球首位。中国无人机凭借其出色的稳定性、高清成像能力和便捷的操作性，深受全球消费者的青睐，在民用领域得到了广泛应用。作为国家战略性新兴产业，无人机正逐步演变为智能助手，满足多样化场景的需求。在农村地区，无人机能够精准识别农作物病虫害，并高效喷洒农药。在城市，它们能够快速配送新鲜农产品。在不久的将来，无人机将在更多领域释放独特价值，为经济和社会进步注入新的动力。',
    fullEN: 'In recent years, China\'s drone industry has developed rapidly, with export volume ranking first in the world. Thanks to their excellent stability, high-definition imaging capability, and convenient operation, Chinese drones are favored by consumers around the world and have been widely used in the civilian sector. As a national strategic emerging industry, drones are gradually evolving into intelligent assistants that meet the needs of diverse scenarios. In rural areas, drones can accurately identify crop diseases and pests and efficiently spray pesticides. In cities, they can quickly deliver fresh agricultural products. In the near future, drones will unleash unique value in more fields and inject new momentum into economic and social progress.',
    sentences: [
      {
        id: 'p38-s0',
        cn: '近年来，中国无人机产业迅猛发展，出口量位居全球首位。',
        en: 'In recent years, China\'s drone industry has developed rapidly, with export volume ranking first in the world.',
        annotations: [
          { fragment: 'drone industry', type: 'term', label: '无人机产业', detail: 'drone = 无人机；drone industry = 无人机产业。也可用 UAV industry（更技术化）。' },
          { fragment: 'with export volume ranking first', type: 'structure', label: '出口量位居首位', detail: 'with + 名词 + doing 构成独立主格，补充说明伴随情况。' },
          { fragment: 'ranking first in the world', type: 'phrase', label: '位居全球首位', detail: 'rank first = 排名第一；in the world = 全球。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'In recent years, A has developed rapidly, with B ranking first in the world',
          structureAnalysis: '(In recent years) → (China\'s drone industry) → has developed (rapidly) → with (export volume) ranking (first in the world)',
          whyGood: '① 现在完成时配合“近年来” ② with 独立主格把第二句信息压进同一句 ③ rank first 对应“位居首位”。',
          keyVocab: ['drone 无人机', 'export volume 出口量'],
          substitutionGuide: '不会 drone → unmanned aerial vehicle (UAV)；不会独立主格，可拆句：Its export volume ranks first in the world.',
          sentencePattern: 'A迅猛发展，出口量位居全球首位 → A has developed rapidly, with export volume ranking first in the world',
          highScore: { en: 'In recent years, China\'s drone industry has developed rapidly, with export volume ranking first in the world.', note: 'with 独立主格衔接两个信息点，紧凑' },
          lowScore: { en: '', note: 'develop very fast 用词偏基础；export number is first 搭配不当，应用 export volume ranks first。' }
        }
      },
      {
        id: 'p38-s1',
        cn: '中国无人机凭借其出色的稳定性、高清成像能力和便捷的操作性，深受全球消费者的青睐，在民用领域得到了广泛应用。',
        en: 'Thanks to their excellent stability, high-definition imaging capability, and convenient operation, Chinese drones are favored by consumers around the world and have been widely used in the civilian sector.',
        annotations: [
          { fragment: 'Thanks to', type: 'phrase', label: '凭借', detail: 'thanks to = 由于/多亏，后接名词短语，表原因。' },
          { fragment: 'excellent stability, high-definition imaging capability, and convenient operation', type: 'phrase', label: '稳定性、成像能力和操作性', detail: '三个并列名词短语，注意前两项名词化、第三项用 convenient + 名词，保持平行。' },
          { fragment: 'are favored by', type: 'phrase', label: '深受……青睐', detail: 'be favored by = 受……喜爱/青睐，比 be liked by 正式。' },
          { fragment: 'the civilian sector', type: 'term', label: '民用领域', detail: 'civilian = 民用的；sector = 领域/行业。' }
        ],
        technique: {
          difficulty: 4,
          structure: 'Thanks to A, B, and C, D are favored by E and have been widely used in F',
          structureAnalysis: '(Thanks to their excellent stability, high-definition imaging capability, and convenient operation) → (Chinese drones) → are favored by (consumers around the world) → and → have been widely used in (the civilian sector)',
          whyGood: '① Thanks to 引出三条优势，逻辑清楚 ② 并列项保持名词性平行 ③ are favored by + have been widely used 两个被动并列。',
          keyVocab: ['stability 稳定性', 'civilian 民用的'],
          substitutionGuide: '不会 Thanks to → Owing to / Because of；不会 favored → popular with / well received by；不会 civilian → non-military / consumer。',
          sentencePattern: 'A凭借B、C和D，深受E青睐，在F得到广泛应用 → Thanks to B, C, and D, A are favored by E and have been widely used in F',
          highScore: { en: 'Thanks to their excellent stability, high-definition imaging capability, and convenient operation, Chinese drones are favored by consumers around the world and have been widely used in the civilian sector.', note: '三项并列平行 + 双被动，信息密度高但不乱' },
          lowScore: { en: '', note: 'depend on good, clear and easy to use 结构破碎；very popular 与后文 widely used 重复。' }
        }
      },
      {
        id: 'p38-s2',
        cn: '作为国家战略性新兴产业，无人机正逐步演变为智能助手，满足多样化场景的需求。',
        en: 'As a national strategic emerging industry, drones are gradually evolving into intelligent assistants that meet the needs of diverse scenarios.',
        annotations: [
          { fragment: 'As a national strategic emerging industry', type: 'structure', label: '作为国家战略性新兴产业', detail: 'As + 名词短语作状语，表示身份/属性；strategic emerging industry = 战略性新兴产业。' },
          { fragment: 'evolving into', type: 'phrase', label: '演变为', detail: 'evolve into = 逐步演变为，强调渐进过程。' },
          { fragment: 'that meet the needs of diverse scenarios', type: 'structure', label: '满足多样化场景的需求', detail: 'that 引导定语从句修饰 assistants；meet the needs of = 满足……需求。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'As A, B are gradually evolving into C that do D',
          structureAnalysis: '(As a national strategic emerging industry) → (drones) → are gradually evolving into (intelligent assistants) → that meet (the needs of diverse scenarios)',
          whyGood: '① As 短语点明产业定位 ② evolving into 体现“逐步演变” ③ 定语从句把“满足需求”接到 assistants 后。',
          keyVocab: ['strategic 战略性的', 'evolve into 演变为', 'scenario 场景'],
          substitutionGuide: '不会 strategic emerging industry → key new industry supported by the state；不会 evolve into → develop into / turn into；不会 scenarios → situations / settings。',
          sentencePattern: '作为A，B正逐步演变为C，满足D的需求 → As A, B are gradually evolving into C that meet the needs of D',
          highScore: { en: 'As a national strategic emerging industry, drones are gradually evolving into intelligent assistants that meet the needs of diverse scenarios.', note: 'As 状语 + evolve into + 定语从句，层次清楚' },
          lowScore: { en: '', note: 'As a new industry 丢失“战略性”；becoming smart helper 用词过简；satisfy many use 语义不完整。' }
        }
      },
      {
        id: 'p38-s3',
        cn: '在农村地区，无人机能够精准识别农作物病虫害，并高效喷洒农药。',
        en: 'In rural areas, drones can accurately identify crop diseases and pests and efficiently spray pesticides.',
        annotations: [
          { fragment: 'accurately identify', type: 'phrase', label: '精准识别', detail: 'accurately = 精准地；identify = 识别。' },
          { fragment: 'crop diseases and pests', type: 'phrase', label: '农作物病虫害', detail: 'crop diseases and pests = 农作物病害与虫害，英语习惯拆成两类。' },
          { fragment: 'efficiently spray pesticides', type: 'phrase', label: '高效喷洒农药', detail: 'efficiently = 高效地；spray = 喷洒；pesticides = 农药。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In A, B can accurately do C and efficiently do D',
          structureAnalysis: '(In rural areas) → (drones) → can → accurately identify (crop diseases and pests) → and → efficiently spray (pesticides)',
          whyGood: '① 两个副词分别修饰两个动词，对应“精准”“高效” ② diseases and pests 拆分表达更符合英语习惯。',
          keyVocab: ['pest 害虫', 'pesticide 农药', 'spray 喷洒'],
          substitutionGuide: '不会 pests → insects；不会 pesticides → farm chemicals；不会 spray → apply。',
          sentencePattern: '在A，B能精准识别C，并高效喷洒D → In A, B can accurately identify C and efficiently spray D',
          highScore: { en: 'In rural areas, drones can accurately identify crop diseases and pests and efficiently spray pesticides.', note: '副词 + 动词两两对应，专业术语准确' },
          lowScore: { en: '', note: 'know bugs 用词过泛；give medicine 与“喷洒农药”不符。' }
        }
      },
      {
        id: 'p38-s4',
        cn: '在城市，它们能够快速配送新鲜农产品。',
        en: 'In cities, they can quickly deliver fresh agricultural products.',
        annotations: [
          { fragment: 'quickly deliver', type: 'phrase', label: '快速配送', detail: 'deliver = 配送/递送；quickly 修饰 deliver。' },
          { fragment: 'fresh agricultural products', type: 'term', label: '新鲜农产品', detail: 'agricultural products = 农产品；fresh 前置修饰。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'In A, B can do C',
          structureAnalysis: '(In cities) → (they) → can → quickly deliver (fresh agricultural products)',
          whyGood: '① they 指代前文 drones，避免重复 ② deliver 准确对应“配送”。',
          keyVocab: ['deliver 配送', 'agricultural 农业的'],
          substitutionGuide: '不会 deliver → send / transport；不会 agricultural products → farm produce。',
          sentencePattern: '在A，它们能够快速配送B → In A, they can quickly deliver B',
          highScore: { en: 'In cities, they can quickly deliver fresh agricultural products.', note: '短句简洁，deliver 用词准确' },
          lowScore: { en: '', note: 'send things 未译出“新鲜农产品”；fast send 语序与搭配均不自然。' }
        }
      },
      {
        id: 'p38-s5',
        cn: '在不久的将来，无人机将在更多领域释放独特价值，为经济和社会进步注入新的动力。',
        en: 'In the near future, drones will unleash unique value in more fields and inject new momentum into economic and social progress.',
        annotations: [
          { fragment: 'In the near future', type: 'phrase', label: '在不久的将来', detail: 'in the near future = 在不久的将来，配一般将来时。' },
          { fragment: 'unleash unique value', type: 'phrase', label: '释放独特价值', detail: 'unleash = 释放/发挥；unique value = 独特价值。' },
          { fragment: 'inject new momentum into', type: 'phrase', label: '为……注入新动力', detail: 'inject momentum into sth = 为某事注入动力，搭配固定。' }
        ],
        technique: {
          difficulty: 4,
          structure: 'In A, B will do C in D and inject E into F',
          structureAnalysis: '(In the near future) → (drones) → will unleash (unique value) in (more fields) → and → inject (new momentum) into (economic and social progress)',
          whyGood: '① 一般将来时与时间状语一致 ② unleash value 搭配有力 ③ inject momentum into 是标准搭配，收尾有气势。',
          keyVocab: ['unleash 释放', 'momentum 动力', 'inject 注入'],
          substitutionGuide: '不会 unleash → show / realize；不会 momentum → impetus / driving force；不会 inject into → bring to / add to。',
          sentencePattern: '在不久的将来，A将在B释放C，为D注入新动力 → In the near future, A will unleash C in B and inject new momentum into D',
          highScore: { en: 'In the near future, drones will unleash unique value in more fields and inject new momentum into economic and social progress.', note: 'unleash value + inject momentum into，动词搭配高级' },
          lowScore: { en: '', note: 'show its special use 用词普通；give new power to 搭配不如 inject momentum into。' }
        }
      }
    ]
  },
  // p39. 农村电子商务 (2026.6 CET-6)
  {
    id: 'p39',
    level: 'CET-6',
    title: '农村电子商务',
    year: '2026.6',
    topic: '经济发展',
    difficulty: 3,
    fullCN: '电子商务的蓬勃发展正在深刻改变中国农村的面貌。随着互联网和物流网络迅速向农村地区延伸，越来越多的农村居民通过电子商务平台直接向城市消费者销售农产品。近年来，直播带货让城市消费者能够与卖家实时互动，成为推动农村发展的新途径。电子商务打破了城乡之间的信息壁垒，拓宽了农产品的销售渠道，帮助农村居民增加收入，改善生活。数字经济与乡村振兴的深度融合，为中国农村的发展注入了前所未有的活力。',
    fullEN: 'The booming development of e-commerce is profoundly changing the face of rural China. As the Internet and logistics networks rapidly extend to rural areas, more and more rural residents are selling agricultural products directly to urban consumers through e-commerce platforms. In recent years, livestreaming sales have enabled urban consumers to interact with sellers in real time, becoming a new pathway for rural development. E-commerce has broken down the information barriers between urban and rural areas, broadened sales channels for agricultural products, and helped rural residents increase their incomes and improve their lives. The deep integration of the digital economy and rural revitalization has injected unprecedented vitality into the development of rural China.',
    sentences: [
      {
        id: 'p39-s0',
        cn: '电子商务的蓬勃发展正在深刻改变中国农村的面貌。',
        en: 'The booming development of e-commerce is profoundly changing the face of rural China.',
        annotations: [
          { fragment: 'The booming development of', type: 'phrase', label: '蓬勃发展', detail: 'booming = 蓬勃的/繁荣的；名词化 development 作主语中心词。' },
          { fragment: 'is profoundly changing', type: 'grammar', label: '正在深刻改变', detail: '现在进行时表示正在发生的变化；profoundly = 深刻地。' },
          { fragment: 'the face of rural China', type: 'phrase', label: '中国农村的面貌', detail: 'the face of = ……的面貌，保留原文比喻。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'The booming development of A is profoundly changing B',
          structureAnalysis: '(The booming development of e-commerce) → is → profoundly changing → (the face of rural China)',
          whyGood: '① 名词化主语 the booming development of 正式 ② 现在进行时体现“正在改变” ③ the face of 保留比喻。',
          keyVocab: ['booming 蓬勃的', 'profoundly 深刻地'],
          substitutionGuide: '不会 booming → rapid / vigorous；不会 profoundly → deeply / greatly；不会 the face of → the look of / rural areas。',
          sentencePattern: 'A的蓬勃发展正在深刻改变B的面貌 → The booming development of A is profoundly changing the face of B',
          highScore: { en: 'The booming development of e-commerce is profoundly changing the face of rural China.', note: '名词化主语 + 进行时，正式且有画面感' },
          lowScore: { en: '', note: 'e-commerce develop fast 缺名词化；change village look 用词过于口语。' }
        }
      },
      {
        id: 'p39-s1',
        cn: '随着互联网和物流网络迅速向农村地区延伸，越来越多的农村居民通过电子商务平台直接向城市消费者销售农产品。',
        en: 'As the Internet and logistics networks rapidly extend to rural areas, more and more rural residents are selling agricultural products directly to urban consumers through e-commerce platforms.',
        annotations: [
          { fragment: 'As...rapidly extend to', type: 'structure', label: '随着……迅速延伸', detail: 'As 引导时间/伴随状语从句；extend to = 延伸到。' },
          { fragment: 'logistics networks', type: 'term', label: '物流网络', detail: 'logistics = 物流；logistics networks = 物流网络。' },
          { fragment: 'directly to urban consumers', type: 'phrase', label: '直接向城市消费者', detail: 'directly 修饰方向；urban consumers = 城市消费者。' },
          { fragment: 'through e-commerce platforms', type: 'phrase', label: '通过电子商务平台', detail: 'through = 通过（渠道）；platforms 用复数更自然。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'As A extend to B, more and more C are doing D through E',
          structureAnalysis: '(As the Internet and logistics networks rapidly extend to rural areas) → (more and more rural residents) → are selling (agricultural products) → directly to (urban consumers) → through (e-commerce platforms)',
          whyGood: '① As 从句承接“随着” ② 进行时体现持续趋势 ③ directly to + through 把销售路径交代清楚。',
          keyVocab: ['logistics 物流', 'extend 延伸'],
          substitutionGuide: '不会 logistics → delivery；不会 extend to → reach / spread to；不会 directly → straight。',
          sentencePattern: '随着A向B延伸，越来越多的C通过D直接向E销售F → As A extend to B, more and more C are selling F directly to E through D',
          highScore: { en: 'As the Internet and logistics networks rapidly extend to rural areas, more and more rural residents are selling agricultural products directly to urban consumers through e-commerce platforms.', note: 'As 从句 + 进行时 + 路径状语，信息完整' },
          lowScore: { en: '', note: 'With internet go to village 缺冠词与谓语；sell to city people 未体现“直接”和“平台”。' }
        }
      },
      {
        id: 'p39-s2',
        cn: '近年来，直播带货让城市消费者能够与卖家实时互动，成为推动农村发展的新途径。',
        en: 'In recent years, livestreaming sales have enabled urban consumers to interact with sellers in real time, becoming a new pathway for rural development.',
        annotations: [
          { fragment: 'livestreaming sales', type: 'term', label: '直播带货', detail: 'livestreaming sales = 直播销售/直播带货，也可用 live-streaming e-commerce。' },
          { fragment: 'have enabled...to interact', type: 'structure', label: '让……能够互动', detail: 'enable sb to do sth = 使某人能够做某事。' },
          { fragment: 'in real time', type: 'phrase', label: '实时', detail: 'in real time = 实时地。' },
          { fragment: 'becoming a new pathway', type: 'structure', label: '成为新途径', detail: '现在分词作结果/伴随状语，主语是前面整件事。' }
        ],
        technique: {
          difficulty: 4,
          structure: 'In recent years, A have enabled B to do C, becoming D',
          structureAnalysis: '(In recent years) → (livestreaming sales) → have enabled (urban consumers) to interact (with sellers) (in real time) → becoming (a new pathway for rural development)',
          whyGood: '① 现在完成时配合“近年来” ② enable sb to do 准确表达“让……能够” ③ becoming 分词把“成为新途径”自然收尾。',
          keyVocab: ['livestreaming 直播', 'interact 互动', 'pathway 途径'],
          substitutionGuide: '不会 livestreaming sales → live commerce / selling through live videos；不会 enable → allow / make it possible for；不会 pathway → channel / route。',
          sentencePattern: 'A让B能够与C实时互动，成为D的新途径 → A have enabled B to interact with C in real time, becoming a new pathway for D',
          highScore: { en: 'In recent years, livestreaming sales have enabled urban consumers to interact with sellers in real time, becoming a new pathway for rural development.', note: 'enable sb to do + becoming 分词，因果链清楚' },
          lowScore: { en: '', note: 'live sell 生造词；let people talk with seller 口语化；“成为新途径”另起一句缺衔接。' }
        }
      },
      {
        id: 'p39-s3',
        cn: '电子商务打破了城乡之间的信息壁垒，拓宽了农产品的销售渠道，帮助农村居民增加收入，改善生活。',
        en: 'E-commerce has broken down the information barriers between urban and rural areas, broadened sales channels for agricultural products, and helped rural residents increase their incomes and improve their lives.',
        annotations: [
          { fragment: 'has broken down the information barriers', type: 'phrase', label: '打破了信息壁垒', detail: 'break down barriers = 打破壁垒；information barriers = 信息壁垒。' },
          { fragment: 'broadened sales channels', type: 'phrase', label: '拓宽了销售渠道', detail: 'broaden = 拓宽；sales channels = 销售渠道。' },
          { fragment: 'helped rural residents increase their incomes and improve their lives', type: 'structure', label: '帮助农村居民增收、改善生活', detail: 'help sb (to) do A and do B，两个动词共享宾语。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A has done B, done C, and helped D do E and do F',
          structureAnalysis: '(E-commerce) → has → broken down (the information barriers between urban and rural areas) → broadened (sales channels for agricultural products) → and → helped (rural residents) increase (their incomes) and improve (their lives)',
          whyGood: '① 三个并列谓语共用一个 has，结构紧凑 ② barriers/channels/incomes 三个名词搭配准确 ③ help sb do 后两动词并列。',
          keyVocab: ['barrier 壁垒', 'broaden 拓宽', 'income 收入'],
          substitutionGuide: '不会 break down barriers → remove the gap；不会 broaden → expand / open up；不会 help sb do → enable sb to do。',
          sentencePattern: 'A打破了B，拓宽了C，帮助D增加E、改善F → A has broken down B, broadened C, and helped D increase E and improve F',
          highScore: { en: 'E-commerce has broken down the information barriers between urban and rural areas, broadened sales channels for agricultural products, and helped rural residents increase their incomes and improve their lives.', note: '三个并列谓语共享 has，节奏整齐' },
          lowScore: { en: '', note: 'break the wall 直译过头；open more ways to sell 未体现“渠道”；help farmer get more money 偏口语。' }
        }
      },
      {
        id: 'p39-s4',
        cn: '数字经济与乡村振兴的深度融合，为中国农村的发展注入了前所未有的活力。',
        en: 'The deep integration of the digital economy and rural revitalization has injected unprecedented vitality into the development of rural China.',
        annotations: [
          { fragment: 'The deep integration of', type: 'structure', label: '……的深度融合', detail: '名词化结构 the deep integration of A and B 作主语，正式简洁。' },
          { fragment: 'rural revitalization', type: 'term', label: '乡村振兴', detail: 'rural revitalization = 乡村振兴，是政策标准译法。' },
          { fragment: 'has injected unprecedented vitality into', type: 'phrase', label: '注入了前所未有的活力', detail: 'inject vitality into = 为……注入活力；unprecedented = 前所未有的。' }
        ],
        technique: {
          difficulty: 4,
          structure: 'The deep integration of A and B has injected C into D',
          structureAnalysis: '(The deep integration of the digital economy and rural revitalization) → has injected (unprecedented vitality) → into (the development of rural China)',
          whyGood: '① 名词化主语对应“深度融合” ② rural revitalization 术语标准 ③ inject vitality into 搭配有力。',
          keyVocab: ['integration 融合', 'revitalization 振兴', 'unprecedented 前所未有的'],
          substitutionGuide: '不会 revitalization → development / renewal；不会 unprecedented → never seen before；不会 inject into → bring to / add to。',
          sentencePattern: 'A与B的深度融合，为C注入了前所未有的活力 → The deep integration of A and B has injected unprecedented vitality into C',
          highScore: { en: 'The deep integration of the digital economy and rural revitalization has injected unprecedented vitality into the development of rural China.', note: '名词化主语 + inject vitality into，术语与搭配都到位' },
          lowScore: { en: '', note: 'digital economy and village develop mix together 主语不成句；give new energy 未体现“前所未有”。' }
        }
      }
    ]
  },
  // p40. 科技赋能医疗 (2026.6 CET-6)
  {
    id: 'p40',
    level: 'CET-6',
    title: '科技赋能医疗',
    year: '2026.6',
    topic: '社会民生',
    difficulty: 4,
    fullCN: '科学技术的进步推动了我国医疗行业的快速发展。近年来，远程医疗技术使得优质医疗资源得以惠及更多患者。医疗专家可通过视频通话方式向偏远地区的患者提供咨询服务，并指导当地医生制定并实施治疗方案。人工智能辅助诊断系统帮助医生识别患者的早期症状，并提高诊断的准确性。电子健康记录的广泛采用使医生能够快速获取患者的病史信息，从而避免不必要的检查。在线医疗咨询平台极大地简化了患者的就医过程。技术与医疗的深度融合更好地满足了人们对健康的需求。',
    fullEN: 'Advances in science and technology have driven the rapid development of China\'s healthcare industry. In recent years, telemedicine technology has made high-quality medical resources available to more patients. Medical experts can provide consultation services to patients in remote areas through video calls and guide local doctors in formulating and implementing treatment plans. AI-assisted diagnostic systems help doctors identify patients\' early symptoms and improve diagnostic accuracy. The widespread adoption of electronic health records enables doctors to quickly access patients\' medical history, thereby avoiding unnecessary examinations. Online medical consultation platforms have greatly simplified the process of seeing a doctor. The deep integration of technology and healthcare better meets people\'s needs for health.',
    sentences: [
      {
        id: 'p40-s0',
        cn: '科学技术的进步推动了我国医疗行业的快速发展。',
        en: 'Advances in science and technology have driven the rapid development of China\'s healthcare industry.',
        annotations: [
          { fragment: 'Advances in science and technology', type: 'term', label: '科学技术的进步', detail: 'advances in = 在……方面的进步；science and technology = 科学技术。' },
          { fragment: 'have driven', type: 'grammar', label: '推动了', detail: '现在完成时强调已经产生并延续的影响；drive = 推动/驱动。' },
          { fragment: 'healthcare industry', type: 'term', label: '医疗行业', detail: 'healthcare = 医疗保健；healthcare industry = 医疗行业。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'Advances in A have driven the rapid development of B',
          structureAnalysis: '(Advances in science and technology) → have driven → (the rapid development of China\'s healthcare industry)',
          whyGood: '① Advances in 是“进步”的标准表达 ② now perfect 体现持续影响 ③ healthcare industry 术语准确。',
          keyVocab: ['advance 进步', 'healthcare 医疗保健'],
          substitutionGuide: '不会 advances → progress；不会 driven → promoted / pushed forward；不会 healthcare → medical。',
          sentencePattern: 'A的进步推动了B的快速发展 → Advances in A have driven the rapid development of B',
          highScore: { en: 'Advances in science and technology have driven the rapid development of China\'s healthcare industry.', note: 'Advances in + drive，搭配正式' },
          lowScore: { en: '', note: 'science becomes better 表达不准确；push medical business 用词不当。' }
        }
      },
      {
        id: 'p40-s1',
        cn: '近年来，远程医疗技术使得优质医疗资源得以惠及更多患者。',
        en: 'In recent years, telemedicine technology has made high-quality medical resources available to more patients.',
        annotations: [
          { fragment: 'telemedicine technology', type: 'term', label: '远程医疗技术', detail: 'telemedicine = 远程医疗。' },
          { fragment: 'has made...available to', type: 'structure', label: '使得……惠及', detail: 'make sth available to sb = 使某物可供某人使用/惠及某人。' },
          { fragment: 'high-quality medical resources', type: 'term', label: '优质医疗资源', detail: 'high-quality = 优质的；medical resources = 医疗资源。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'In recent years, A has made B available to C',
          structureAnalysis: '(In recent years) → (telemedicine technology) → has made (high-quality medical resources) → available to (more patients)',
          whyGood: '① make sth available to sb 准确对应“惠及” ② 现在完成时与“近年来”一致 ③ 术语标准。',
          keyVocab: ['telemedicine 远程医疗', 'available 可获得的'],
          substitutionGuide: '不会 telemedicine → remote medical service；不会 made available to → brought benefits to / allowed...to use。',
          sentencePattern: 'A使得B得以惠及C → A has made B available to C',
          highScore: { en: 'In recent years, telemedicine technology has made high-quality medical resources available to more patients.', note: 'make sth available to sb 精准表达“惠及”' },
          lowScore: { en: '', note: 'long-distance medicine 非标准术语；let good doctor help more sick people 信息偏离“资源”。' }
        }
      },
      {
        id: 'p40-s2',
        cn: '医疗专家可通过视频通话方式向偏远地区的患者提供咨询服务，并指导当地医生制定并实施治疗方案。',
        en: 'Medical experts can provide consultation services to patients in remote areas through video calls and guide local doctors in formulating and implementing treatment plans.',
        annotations: [
          { fragment: 'provide consultation services to', type: 'phrase', label: '向……提供咨询服务', detail: 'provide sth to sb = 向某人提供某物；consultation = 咨询。' },
          { fragment: 'patients in remote areas', type: 'phrase', label: '偏远地区的患者', detail: 'remote areas = 偏远地区；介词短语后置修饰 patients。' },
          { fragment: 'guide...in formulating and implementing', type: 'phrase', label: '指导……制定并实施', detail: 'guide sb in doing sth = 指导某人做某事；formulate = 制定，implement = 实施。' }
        ],
        technique: {
          difficulty: 4,
          structure: 'A can provide B to C through D and guide E in doing F and G',
          structureAnalysis: '(Medical experts) → can → provide (consultation services) to (patients in remote areas) through (video calls) → and → guide (local doctors) in formulating and implementing (treatment plans)',
          whyGood: '① 两个谓语 can provide / guide 并列 ② in doing 后接两个动名词，对应“制定并实施” ③ formulate/implement 是高配动词。',
          keyVocab: ['consultation 咨询', 'formulate 制定', 'implement 实施'],
          substitutionGuide: '不会 consultation → advice；不会 formulate → make / work out；不会 implement → carry out；不会 guide sb in doing → help sb do。',
          sentencePattern: 'A通过B向C提供D，并指导E制定并实施F → A can provide D to C through B and guide E in formulating and implementing F',
          highScore: { en: 'Medical experts can provide consultation services to patients in remote areas through video calls and guide local doctors in formulating and implementing treatment plans.', note: '双谓语 + in doing 并列，专业动词到位' },
          lowScore: { en: '', note: 'use video to talk 未体现“提供咨询服务”；teach local doctor make plan 搭配与形式均不准确。' }
        }
      },
      {
        id: 'p40-s3',
        cn: '人工智能辅助诊断系统帮助医生识别患者的早期症状，并提高诊断的准确性。',
        en: 'AI-assisted diagnostic systems help doctors identify patients\' early symptoms and improve diagnostic accuracy.',
        annotations: [
          { fragment: 'AI-assisted diagnostic systems', type: 'term', label: '人工智能辅助诊断系统', detail: 'AI-assisted = 人工智能辅助的；diagnostic = 诊断的。' },
          { fragment: 'help doctors identify', type: 'structure', label: '帮助医生识别', detail: 'help sb (to) do sth；identify = 识别。' },
          { fragment: 'improve diagnostic accuracy', type: 'phrase', label: '提高诊断准确性', detail: 'diagnostic accuracy = 诊断准确性；improve 与 accuracy 搭配。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'A help B do C and do D',
          structureAnalysis: '(AI-assisted diagnostic systems) → help (doctors) → identify (patients\' early symptoms) → and → improve (diagnostic accuracy)',
          whyGood: '① AI-assisted 复合形容词简洁 ② help sb do 后接两个并列动词 ③ diagnostic accuracy 术语准确。',
          keyVocab: ['AI-assisted 人工智能辅助的', 'diagnostic 诊断的', 'accuracy 准确性'],
          substitutionGuide: '不会 AI-assisted → supported by artificial intelligence；不会 diagnostic → for diagnosis；不会 accuracy → correctness。',
          sentencePattern: 'A帮助B识别C，并提高D → A help B identify C and improve D',
          highScore: { en: 'AI-assisted diagnostic systems help doctors identify patients\' early symptoms and improve diagnostic accuracy.', note: '复合形容词 + help sb do 并列' },
          lowScore: { en: '', note: 'AI doctor system 表意偏差；help doctor find sick early 未译出“症状”；make diagnosis more right 偏口语。' }
        }
      },
      {
        id: 'p40-s4',
        cn: '电子健康记录的广泛采用使医生能够快速获取患者的病史信息，从而避免不必要的检查。',
        en: 'The widespread adoption of electronic health records enables doctors to quickly access patients\' medical history, thereby avoiding unnecessary examinations.',
        annotations: [
          { fragment: 'The widespread adoption of', type: 'structure', label: '……的广泛采用', detail: '名词化主语 the widespread adoption of = ……的广泛采用/使用。' },
          { fragment: 'electronic health records', type: 'term', label: '电子健康记录', detail: 'electronic health records (EHR) = 电子健康记录，医疗领域标准术语。' },
          { fragment: 'enables doctors to quickly access', type: 'structure', label: '使……能够获取', detail: 'enable sb to do sth = 使某人能够做某事；access = 获取/访问。' },
          { fragment: 'thereby avoiding', type: 'structure', label: '从而避免', detail: 'thereby + 现在分词表示结果；avoid 后接动名词。' }
        ],
        technique: {
          difficulty: 4,
          structure: 'The adoption of A enables B to do C, thereby avoiding D',
          structureAnalysis: '(The widespread adoption of electronic health records) → enables (doctors) to quickly access (patients\' medical history) → thereby avoiding (unnecessary examinations)',
          whyGood: '① 名词化主语正式 ② enable sb to do 准确 ③ thereby doing 把“从而避免”处理成结果状语。',
          keyVocab: ['adoption 采用', 'access 获取', 'unnecessary 不必要的'],
          substitutionGuide: '不会 adoption → use；不会 access → get / check；不会 thereby avoiding → so that...can avoid / and this avoids。',
          sentencePattern: 'A的广泛采用使B能够C，从而避免D → The widespread adoption of A enables B to C, thereby avoiding D',
          highScore: { en: 'The widespread adoption of electronic health records enables doctors to quickly access patients\' medical history, thereby avoiding unnecessary examinations.', note: '名词化主语 + thereby doing 结果状语，逻辑紧密' },
          lowScore: { en: '', note: 'wide use of e-record 用词不标准；let doctor see history fast 偏口语；“避免检查”缺结果衔接。' }
        }
      },
      {
        id: 'p40-s5',
        cn: '在线医疗咨询平台极大地简化了患者的就医过程。',
        en: 'Online medical consultation platforms have greatly simplified the process of seeing a doctor.',
        annotations: [
          { fragment: 'Online medical consultation platforms', type: 'term', label: '在线医疗咨询平台', detail: 'online = 在线的；medical consultation = 医疗咨询；platforms 用复数表一类事物。' },
          { fragment: 'have greatly simplified', type: 'grammar', label: '极大地简化了', detail: '现在完成时 + greatly 强调程度；simplify = 简化。' },
          { fragment: 'the process of seeing a doctor', type: 'phrase', label: '就医过程', detail: 'the process of seeing a doctor = 看病/就医过程。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'A have greatly simplified B',
          structureAnalysis: '(Online medical consultation platforms) → have → greatly simplified → (the process of seeing a doctor)',
          whyGood: '① 现在完成时体现已产生的改变 ② greatly 对应“极大” ③ the process of seeing a doctor 自然表达“就医过程”。',
          keyVocab: ['simplify 简化', 'consultation 咨询'],
          substitutionGuide: '不会 simplify → make...easier；不会 the process of seeing a doctor → medical treatment / going to hospital。',
          sentencePattern: 'A极大地简化了B → A have greatly simplified B',
          highScore: { en: 'Online medical consultation platforms have greatly simplified the process of seeing a doctor.', note: 'simplify 搭配 process，简洁准确' },
          lowScore: { en: '', note: 'web doctor talk place 生硬；make see doctor easy 形式与搭配均有误。' }
        }
      },
      {
        id: 'p40-s6',
        cn: '技术与医疗的深度融合更好地满足了人们对健康的需求。',
        en: 'The deep integration of technology and healthcare better meets people\'s needs for health.',
        annotations: [
          { fragment: 'The deep integration of', type: 'structure', label: '……的深度融合', detail: '名词化主语结构，回扣全文主题。' },
          { fragment: 'better meets', type: 'phrase', label: '更好地满足', detail: 'better 作副词修饰 meets；meet needs = 满足需求。' },
          { fragment: 'people\'s needs for health', type: 'phrase', label: '人们对健康的需求', detail: 'needs for sth = 对……的需求。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'The deep integration of A and B better meets C',
          structureAnalysis: '(The deep integration of technology and healthcare) → better meets → (people\'s needs for health)',
          whyGood: '① 名词化主语总结全文 ② better 对应“更好地” ③ needs for 搭配准确。',
          keyVocab: ['integration 融合', 'meet needs 满足需求'],
          substitutionGuide: '不会 integration → combination；不会 meet needs → satisfy demands；不会 better → more effectively。',
          sentencePattern: 'A与B的深度融合更好地满足了C → The deep integration of A and B better meets C',
          highScore: { en: 'The deep integration of technology and healthcare better meets people\'s needs for health.', note: '名词化主语收束全文，简洁有力' },
          lowScore: { en: '', note: 'technology and medicine mix 缺名词化；make people healthier 偏离“满足需求”。' }
        }
      }
    ]
  }
]
