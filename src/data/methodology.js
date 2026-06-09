// 翻译方法论体系 — 用户笔记系统化
// 每层方法都有结构化描述，供 AnswerAnalysis 组件引用

export const fallbackMethods = {
  title: '保底三法',
  subtitle: '遇到不会的词怎么办 — 考试生存技能',
  methods: [
    {
      id: 'm1',
      name: '上位词替代',
      principle: '用更宽泛、更概括的词代替不会的专有词',
      examples: [
        { original: '婚礼仪式', fallback: 'marrying party', note: '用 party 替代 ceremony' },
        { original: '文化遗产', fallback: 'old culture', note: '用 old 替代 cultural heritage' },
        { original: '书法家', fallback: 'writers', note: '用 writer 替代 calligrapher' },
        { original: '正直的品格', fallback: 'good character', note: '用 good 替代 upright' },
        { original: '艺术品', fallback: 'art', note: '用 art 替代 artwork' },
      ],
    },
    {
      id: 'm2',
      name: '释义法',
      principle: '用你会的词把意思解释出来',
      examples: [
        { original: '遨游太空', fallback: 'flying in space', note: '把"遨游"解释为 fly' },
        { original: '高精度定位', fallback: 'can locate accurately', note: '把"高精度"解释为 accurately' },
        { original: '用工成本', fallback: 'the number of workers', note: '把"用工"解释为 use workers' },
        { original: '方言', fallback: 'local language', note: '把"方言"解释为当地语言' },
        { original: '出淤泥而不染', fallback: 'keep clean from the dirty water', note: '逐词解释成语' },
      ],
    },
    {
      id: 'm3',
      name: '大小词区分',
      principle: '区分书面词和口语词，确保正式感',
      examples: [
        { original: '支撑(桥墩)', preferred: 'support', avoid: 'hold', note: 'support 更正式' },
        { original: '精美', preferred: 'elegant', avoid: 'beautiful', note: 'elegant 更书面' },
        { original: '稳步推进', preferred: 'has steadily advanced', avoid: 'has improved a lot', note: 'steadily 更精确' },
        { original: '重要组成部分', preferred: 'integral part', avoid: 'important part', note: 'integral 更正式精准' },
        { original: '驰名中外', preferred: 'renowned both at home and abroad', avoid: 'famous in China and other countries', note: 'renowned 比 famous 更正式' },
      ],
    },
  ],
};

export const highScoreStructures = {
  title: '高分四结构',
  subtitle: '如何让句子从 8 分档跃升至 14 分档',
  structures: [
    {
      id: 's1',
      name: '被动语态',
      principle: '中文主动表达转为英文被动表达，瞬间提升书面感',
      examples: [
        { chinese: '人们普遍认为...', target: 'It is widely believed that...', note: '不说 People think，用被动更正式' },
        { chinese: '位于...被称为...', target: '...is situated...and is known as...', note: '地理类话题标配被动' },
        { chinese: '卢沟桥被公认为是石桥建筑史上的一座丰碑', target: 'Lugou Bridge is recognized as a monument in the history of stone bridge architecture', note: '"被公认"→ be recognized as' },
      ],
    },
    {
      id: 's2',
      name: '非谓语动词',
      principle: '两句合并为一句，用分词/不定式/同位语替代连词',
      examples: [
        { chinese: '扇子常作为礼物赠与他人，表达美好祝福', target: 'Fans are often given to others as gifts, expressing good wishes and sincere feelings.', note: '用现在分词 expressing 替代 and express' },
        { chinese: '中国盛产竹子，是最早开发利用竹资源的国家', target: 'China is rich in bamboo, being the first country to develop and utilize bamboo resources.', note: '用 being 替代 and is' },
        { chinese: '洋山港是上海航运中心的重要组成部分', target: 'Yangshan Port, an integral part of Shanghai shipping center, ...', note: '同位语替代定语从句 which is' },
      ],
    },
    {
      id: 's3',
      name: '并列句 + 逻辑词',
      principle: '句子间用逻辑关系词显式连接，告别逗号断裂',
      logicWords: {
        '因果': ['because', 'as', 'since', 'as a consequence', 'therefore', 'thus', 'as a result'],
        '转折': ['but', 'however', 'on the contrary', 'while', 'whereas', 'instead'],
        '递进': ['besides', 'moreover', 'furthermore', 'in addition', 'additionally'],
        '并列': ['and', 'likewise', 'similarly', 'at the same time', 'meanwhile'],
        '引出': ['concerning', 'regarding', 'with regard to', 'when it comes to'],
        '总结': ['overall', 'in conclusion', 'to sum up', 'in short', 'in brief'],
      },
      examples: [
        { chinese: '国人爱竹。自古以来无数文人以竹为主题创作了无数作品。', target: 'Chinese people love bamboo. As a consequence, since ancient times, countless scholars have created countless works with bamboo as the theme.', note: '加 As a consequence 连接因果' },
        { chinese: '扇子自古以来就受到中国人喜爱，但是现在已经不是消暑纳凉的工具。', target: 'Fans have been loved by Chinese people since ancient times. On the contrary, now they are no longer tools to cool down the summer.', note: '加 On the contrary 强化转折' },
      ],
    },
    {
      id: 's4',
      name: '复合句(定从+状从)',
      principle: '信息分层——主干用主句，修饰用从句附着',
      examples: [
        { chinese: '竹子实用性强，用于生产和生活的很多方面', target: 'Bamboo is highly practical, which is used in many aspects of production and life.', note: '用 which 引导定语从句补充说明' },
        { chinese: '徐霞客是中国明代的著名地理学家，他花费了三十多年时间游遍大半个中国', target: 'Xu Xiake was a famous geographer in the Ming Dynasty of China, who spent more than thirty years traveling through most of China.', note: '用 who 引导定语从句' },
      ],
    },
  ],
};

export const classicPatterns = {
  title: '四大经典句型',
  subtitle: '必须形成条件反射的句型模板',
  patterns: [
    {
      id: 'c1',
      name: '强调句 It is...that...',
      template: 'It is + 被强调部分 + that + 其余',
      scenarios: ['凸显某个信息点', '表达"正是...才..."'],
      example: { chinese: '良好的心态能让我们在这个竞争的社会中更平和地生活。', target: 'It is a good attitude that can help us live a more peaceful life in this competitive society.' },
    },
    {
      id: 'c2',
      name: '定语从句 ..., which/who...',
      template: '先行词 + which/who + 从句',
      scenarios: ['补充说明前面名词', '中文"XX的YY"转英文后置修饰'],
      example: { chinese: '竹子实用性强，用于生产和生活的很多方面。', target: 'Bamboo is highly practical, which is used in many aspects of production and life.' },
    },
    {
      id: 'c3',
      name: '状语从句 When/Although/Because...',
      template: 'When/Although/Because/If + 从句, 主句',
      scenarios: ['时间背景', '让步关系', '因果关系', '条件假设'],
      example: { chinese: '无论环境多么恶劣，竹子都能顽强生存。', target: 'No matter how harsh the environment is, bamboo can survive tenaciously.' },
    },
    {
      id: 'c4',
      name: '倒装结构 Adj. + as + S + V',
      template: 'Adj./Adv. + as + S + V, 主句',
      scenarios: ['让步关系高级表达', '替代 Although，提升得分档次'],
      example: { chinese: '洋山港看似繁忙，但现场看不到手动操作。', target: 'Busy as Yangshan Port seems, no manual operation is visible on-site.' },
    },
  ],
};

export const translationSteps = {
  title: '翻译三步法',
  subtitle: '考场上拿到翻译题的 30 秒执行流程',
  steps: [
    {
      id: 'step1',
      name: '以意群为单位读句子',
      tag: '定框架',
      checklist: [
        '确定时态（过去/现在/将来/完成？）',
        '确定语态（主动还是被动？中文主动→英文被动？）',
      ],
      tip: '先扫一眼全段确定主时态，通常为一般现在时或现在完成时',
    },
    {
      id: 'step2',
      name: '确定句子主干',
      tag: '搭骨架',
      checklist: [
        '找到主谓宾（谁做了什么？）',
        '非主干部分用定语从句或状语附着',
        '能用非谓语动词合并的句子就不要拆开',
      ],
      tip: '中文喜欢并列短句→英文喜欢主从分明。找主句是第一步，其余都是附属。',
    },
    {
      id: 'step3',
      name: '加逻辑关系词',
      tag: '连经脉',
      checklist: [
        '每句话翻完后，看和下一句的关系',
        '因果→therefore/as a result/consequently',
        '转折→however/on the contrary/while',
        '递进→moreover/furthermore/in addition',
      ],
      tip: '两个句子之间如果没有逻辑词，在英文里就是 run-on sentence，直接扣分。',
    },
  ],
};
