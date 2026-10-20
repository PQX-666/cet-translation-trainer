// 10篇深度标注真题 (按年份由新到旧排序 2020.12–2021.12) — p21-p30

export const passagesPart3 = [
  // p21. 延安 (2021.12)
  {
    id: 'p21',
    level: 'CET-4',
    title: '延安',
    year: '2021.12',
    topic: '历史遗迹',
    difficulty: 3,
    fullCN: '延安位于陕西省北部，地处黄河中游，是中国革命的圣地。毛泽东等老一辈革命家曾在这里生活战斗了十三个春秋，领导了抗日战争和解放战争，培育了延安精神，为中国革命做出了巨大贡献。延安的革命旧址全国数量最大、分布最广、级别最高。延安是全国爱国主义、革命传统和延安精神教育基地。延安有9个革命纪念馆，珍藏着中共中央和老一辈革命家在延安时期留存下来的大量重要物品，因此享有"中国革命博物馆城"的美誉。',
    fullEN: 'Yan\'an, located in the northern part of Shaanxi Province on the middle reaches of the Yellow River, is the sacred site of the Chinese revolution. Mao Zedong and other veteran revolutionaries lived and fought here for thirteen years, leading the War of Resistance against Japanese Aggression and the Liberation War, cultivating the Yan\'an Spirit, and making great contributions to the Chinese revolution. Yan\'an has the largest number, widest distribution, and highest level of revolutionary sites in the country. Yan\'an is a national education base for patriotism, revolutionary traditions, and the Yan\'an Spirit. Yan\'an has nine revolutionary memorial halls that house a large number of important items left by the CPC Central Committee and veteran revolutionaries during the Yan\'an period, thus enjoying the reputation of being "the museum city of the Chinese revolution."',
    sentences: [
      {
        id: 'p21-s0',
        cn: '延安位于陕西省北部，地处黄河中游，是中国革命的圣地。',
        en: 'Yan\'an, located in the northern part of Shaanxi Province on the middle reaches of the Yellow River, is the sacred site of the Chinese revolution.',
        annotations: [
          { fragment: 'located in the northern part of', type: 'structure', label: '过去分词插入语', detail: 'located in = 位于（过去分词插入主谓之间）。northern part of = ...的北部。' },
          { fragment: 'on the middle reaches of the Yellow River', type: 'phrase', label: '地处黄河中游', detail: 'the middle reaches = 中游。reach = 河段（名词）。on 表示\'在...（河段）上\'。' },
          { fragment: 'the sacred site of the Chinese revolution', type: 'vocab', label: '革命圣地', detail: 'sacred site = 圣地。sacred 比 holy 更广泛地表示\'神圣的\'。the Chinese revolution = 中国革命。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + 分词插入(located...on...) + is + 表语(the sacred site of...)',
          structureAnalysis: 'Yan\'an → (located in the northern part of Shaanxi Province on the middle reaches of the Yellow River) → is → the sacred site of the Chinese revolution',
          whyGood: '① located 分词插入处理两个位置信息（省+河），紧凑高效 ② on the middle reaches 精准表达\'地处中游\' ③ sacred site 准确传达\'圣地\'的政治意义。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 middle reaches → middle part / middle section；不会 sacred site → holy place / holy land / revolutionary holy land',
          sentencePattern: '\'XX位于A省北部，地处B中游，是C的圣地\' → XX, located in the northern part of A Province on the middle reaches of B, is the sacred site of C',
          highScore: { en: 'Yan\'an, located in the northern part of Shaanxi Province on the middle reaches of the Yellow River, is the sacred site of the Chinese revolution.', note: 'located 分词 + on the middle reaches + sacred site' },
          lowScore: { en: '', note: '两句分离 + middle part 不如 middle reaches + holy place 可接受但 sacred 更政治准确。评分 8-10 分档。' }
        }
      },
      {
        id: 'p21-s1',
        cn: '毛泽东等老一辈革命家曾在这里生活战斗了十三个春秋，领导了抗日战争和解放战争，培育了延安精神，为中国革命做出了巨大贡献。',
        en: 'Mao Zedong and other veteran revolutionaries lived and fought here for thirteen years, leading the War of Resistance against Japanese Aggression and the Liberation War, cultivating the Yan\'an Spirit, and making great contributions to the Chinese revolution.',
        annotations: [
          { fragment: 'veteran revolutionaries', type: 'vocab', label: '老一辈革命家', detail: 'veteran = 老练的/资深的（形容词）。veteran revolutionaries = 老一辈/资深革命家。比 old revolutionaries 更尊重。' },
          { fragment: 'leading...cultivating...and making', type: 'structure', label: '三个并列现在分词', detail: 'leading...cultivating...and making = 领导了...培育了...做出了...。三个分词并列表伴随结果。' },
          { fragment: 'the War of Resistance against Japanese Aggression', type: 'vocab', label: '抗日战争', detail: '抗日战争的标准英译。War of Resistance = 抗战。Japanese Aggression = 日本侵略。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + lived and fought + for + 时间段 + leading + cultivating + and making...',
          structureAnalysis: 'Mao Zedong and other veteran revolutionaries → lived and fought here for thirteen years → leading (the War of Resistance...and the Liberation War) → cultivating (the Yan\'an Spirit) → and making (great contributions to the Chinese revolution)',
          whyGood: '① lived and fought 两个动词涵盖\'生活和战斗\' ② 三个并列分词处理中文的三个短句，英语一次说完，节奏流畅 ③ 抗日战争/解放战争的英译准确使用官方标准译法。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 veteran → old-generation / senior / experienced；不会 抗日战争 → Anti-Japanese War / the war against Japan',
          sentencePattern: '\'A等老一辈革命家在这里生活战斗了B年，领导了C和D，培育了E，为F做出了巨大贡献\' → A and other veteran revolutionaries lived and fought here for B years, leading C and D, cultivating E, and making great contributions to F',
          highScore: { en: 'Mao Zedong and other veteran revolutionaries lived and fought here for thirteen years, leading the War of Resistance against Japanese Aggression and the Liberation War, cultivating the Yan\'an Spirit, and making great contributions to the Chinese revolution.', note: 'veteran revolutionaries + 三个并列分词 + 历史事件标准英译' },
          lowScore: { en: '', note: 'old revolutionaries 不够尊重 + 三句分离 + created 不如 cultivated。评分 8-10 分档。' }
        }
      },
      {
        id: 'p21-s2',
        cn: '延安的革命旧址全国数量最大、分布最广、级别最高。',
        en: 'Yan\'an has the largest number, widest distribution, and highest level of revolutionary sites in the country.',
        annotations: [
          { fragment: 'the largest number, widest distribution, and highest level', type: 'structure', label: '三项并列最高级', detail: '三个最高级并列：largest number / widest distribution / highest level。对应中文\'最大最广最高\'。' },
          { fragment: 'revolutionary sites', type: 'vocab', label: '革命旧址', detail: 'revolutionary = 革命的。sites = 旧址/遗址（比 places 更强调历史/考古意义）。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has + 三个并列最高级 + of + n. + in + 范围',
          structureAnalysis: 'Yan\'an → has → (the largest number, widest distribution, and highest level) → of revolutionary sites → in the country',
          whyGood: '① 三个最高级并列，排比有力，完美对应中文 \'最大最广最高\' ② of all revolutionary sites 限定了比较范围。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 distribution → spread / coverage；不会 sites → places / spots / historical places',
          sentencePattern: '\'XX的YY在全国数量最大、分布最广、级别最高\' → XX has the largest number, widest distribution, and highest level of YY in the country',
          highScore: { en: 'Yan\'an has the largest number, widest distribution, and highest level of revolutionary sites in the country.', note: '三个并列最高级 + revolutionary sites' },
          lowScore: { en: '', note: '两句分离 + most...places 不如 largest number + spread 不如 distribution。评分 8-10 分档。' }
        }
      },
      {
        id: 'p21-s3',
        cn: '延安是全国爱国主义、革命传统和延安精神教育基地。',
        en: 'Yan\'an is a national education base for patriotism, revolutionary traditions, and the Yan\'an Spirit.',
        annotations: [
          { fragment: 'a national education base for', type: 'structure', label: '教育基地', detail: 'education base = 教育基地。national = 全国的。for + 三个并列名词 = 为...服务的/关于...的。' },
          { fragment: 'patriotism, revolutionary traditions, and the Yan\'an Spirit', type: 'vocab', label: '爱国主义、革命传统、延安精神', detail: 'patriotism = 爱国主义。revolutionary traditions = 革命传统。Yan\'an Spirit 专有名词大写。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + is + a national education base for + A, B, and C',
          structureAnalysis: 'Yan\'an → is → a national education base for → (patriotism, revolutionary traditions, and the Yan\'an Spirit)',
          whyGood: '① education base for 是\'教育基地\'的标准译法 ② 三项并列涵盖爱国主义/革命传统/延安精神 ③ Yan\'an Spirit 专有名词。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 patriotism → love for one\'s country / national pride；不会 education base → educational center / learning base',
          sentencePattern: '\'XX是全国A、B和C的教育基地\' → XX is a national education base for A, B, and C',
          highScore: { en: 'Yan\'an is a national education base for patriotism, revolutionary traditions, and the Yan\'an Spirit.', note: 'education base for + 三项并列' },
          lowScore: { en: '', note: 'educational place 不规范 + loving the country 不如 patriotism + Yan\'an spirit 应大写。评分 8-10 分档。' }
        }
      },
      {
        id: 'p21-s4',
        cn: '延安有9个革命纪念馆，珍藏着中共中央和老一辈革命家在延安时期留存下来的大量重要物品，因此享有"中国革命博物馆城"的美誉。',
        en: 'Yan\'an has nine revolutionary memorial halls that house a large number of important items left by the CPC Central Committee and veteran revolutionaries during the Yan\'an period, thus enjoying the reputation of being "the museum city of the Chinese revolution."',
        annotations: [
          { fragment: 'revolutionary memorial halls that house', type: 'structure', label: '定语从句 + house', detail: 'memorial halls = 纪念馆。that house = 珍藏/收藏（house 作动词 = 收藏/安放）。' },
          { fragment: 'left by the CPC Central Committee and veteran revolutionaries', type: 'structure', label: '过去分词后置定语', detail: 'left by = 被...留存的（分词作定语）。CPC = Communist Party of China。' },
          { fragment: 'thus enjoying the reputation of being', type: 'structure', label: 'thus + 分词结果', detail: 'thus enjoying = 因此享有（分词表结果）。enjoy the reputation of = 享有...的美誉。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + has + n. + that 从句 + left by... + thus enjoying...',
          structureAnalysis: 'Yan\'an → has (nine revolutionary memorial halls) → that house (a large number of important items left by the CPC Central Committee and veteran revolutionaries during the Yan\'an period) → thus enjoying (the reputation of being \'the museum city of the Chinese revolution\')',
          whyGood: '① house 作动词表示\'收藏\'，简洁精准 ② left by 分词后置处理\'留存下来的\' ③ thus enjoying 分词结果状语，将因果关系一句说完。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 house → keep / store / collect；不会 reputation → fame / title / name；不会 veteran revolutionaries → old revolutionaries / senior leaders',
          sentencePattern: '\'XX有A个YY，珍藏着B时期留存下来的大量C，因此享有D的美誉\' → XX has A YY that house a large number of C left by...during the B period, thus enjoying the reputation of D',
          highScore: { en: 'Yan\'an has nine revolutionary memorial halls that house a large number of important items left by the CPC Central Committee and veteran revolutionaries during the Yan\'an period, thus enjoying the reputation of being "the museum city of the Chinese revolution."', note: 'memorial halls + house + left by + thus enjoying' },
          lowScore: { en: '', note: 'museums 不如 memorial halls + keep 不如 house + 三句分离不紧凑。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p22. 井冈山 (2021.12)
  {
    id: 'p22',
    level: 'CET-4',
    title: '井冈山',
    year: '2021.12',
    topic: '历史遗迹',
    difficulty: 3,
    fullCN: '井冈山地处湖南江西两省交界处，因其辉煌的革命历史被誉为"中国革命红色摇篮"。1927年10月，毛泽东、朱德等老一辈革命家率领中国工农红军来到这里，开展了艰苦卓绝的斗争，创建了第一个农村革命根据地，点燃了中国革命的星星之火，开辟了"农村包围城市，武装夺取政权"这一具有中国特色的革命道路，中国革命从这里迈向胜利。井冈山现有100多处革命旧址，成为一个"没有围墙的革命历史博物馆"，是爱国主义和革命传统教育的重要基地。',
    fullEN: 'Jinggangshan, located at the border between Hunan and Jiangxi provinces, is hailed as the "Red Cradle of the Chinese Revolution" for its glorious revolutionary history. In October 1927, veteran revolutionaries such as Mao Zedong and Zhu De led the Chinese Workers\' and Peasants\' Red Army here, waged arduous struggles, established the first rural revolutionary base, ignited the spark of the Chinese revolution, and blazed the revolutionary path of "besieging the cities from the countryside and seizing political power by armed force" with Chinese characteristics, from which the Chinese revolution marched toward victory. Jinggangshan now has over 100 revolutionary sites, making it a "revolutionary history museum without walls" and an important base for patriotism and revolutionary tradition education.',
    sentences: [
      {
        id: 'p22-s0',
        cn: '井冈山地处湖南江西两省交界处，因其辉煌的革命历史被誉为"中国革命红色摇篮"。',
        en: 'Jinggangshan, located at the border between Hunan and Jiangxi provinces, is hailed as the "Red Cradle of the Chinese Revolution" for its glorious revolutionary history.',
        annotations: [
          { fragment: 'located at the border between...and', type: 'structure', label: '过去分词插入 + between', detail: 'located at the border between A and B = 地处A和B的交界处。between 用于两者之间。' },
          { fragment: 'is hailed as', type: 'vocab', label: '被誉为', detail: 'hail as = 赞誉/称为。比 is praised as 更正式。be hailed as a hero = 被誉为英雄。' },
          { fragment: 'the Red Cradle of the Chinese Revolution', type: 'vocab', label: '中国革命红色摇篮', detail: 'Red Cradle = 红色摇篮。cradle = 摇篮（引申为发源地）。Red 大写突出政治含义。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + 分词插入(located...) + is hailed as + for + 原因',
          structureAnalysis: 'Jinggangshan → (located at the border between Hunan and Jiangxi) → is hailed as (the \'Red Cradle of the Chinese Revolution\') → for its glorious revolutionary history',
          whyGood: '① located at the border between 精准表达\'地处两省交界\' ② is hailed as 是\'被誉为\'的标准译法 ③ for 引出原因，句末补充。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 hailed as → praised as / known as / called；不会 cradle → birthplace / origin / source；不会 border → boundary / edge',
          sentencePattern: '\'XX地处A和B交界处，因其辉煌的C被誉为D\' → XX, located at the border between A and B, is hailed as D for its glorious C',
          highScore: { en: 'Jinggangshan, located at the border between Hunan and Jiangxi provinces, is hailed as the "Red Cradle of the Chinese Revolution" for its glorious revolutionary history.', note: 'located at the border + is hailed as + for + Red Cradle' },
          lowScore: { en: '', note: '两句分离 + people call it 不如 is hailed as + of 应为 at。评分 8-10 分档。' }
        }
      },
      {
        id: 'p22-s1',
        cn: '1927年10月，毛泽东、朱德等老一辈革命家率领中国工农红军来到这里，开展了艰苦卓绝的斗争，创建了第一个农村革命根据地，点燃了中国革命的星星之火，开辟了"农村包围城市，武装夺取政权"这一具有中国特色的革命道路，中国革命从这里迈向胜利。',
        en: 'In October 1927, veteran revolutionaries such as Mao Zedong and Zhu De led the Chinese Workers\' and Peasants\' Red Army here, waged arduous struggles, established the first rural revolutionary base, ignited the spark of the Chinese revolution, and blazed the revolutionary path of "besieging the cities from the countryside and seizing political power by armed force" with Chinese characteristics, from which the Chinese revolution marched toward victory.',
        annotations: [
          { fragment: 'waged arduous struggles', type: 'phrase', label: '开展艰苦斗争', detail: 'wage = 开展/发动（用于 war/campaign/struggle）。arduous = 艰苦的/艰巨的。struggles = 斗争。' },
          { fragment: 'established the first rural revolutionary base', type: 'vocab', label: '第一个农村革命根据地', detail: 'rural revolutionary base = 农村革命根据地。rural = 农村的。base = 根据地。' },
          { fragment: 'besieging the cities from the countryside', type: 'vocab', label: '农村包围城市', detail: 'besiege = 包围/围攻。from the countryside = 从农村。官方译法保留原文政治含义。' }
        ],
        technique: {
          difficulty: 3,
          structure: '时间状语 + 主语 + led...here + waged... + established... + ignited... + blazed... + from which...',
          structureAnalysis: 'In October 1927 → veteran revolutionaries → led the Red Army here → waged arduous struggles → established the first rural revolutionary base → ignited the spark → blazed the revolutionary path → (,) from which the Chinese revolution marched toward victory',
          whyGood: '① 五个并列动词(led/waged/established/ignited/blazed)将中文的流水句压缩为一句 ② from which 定语从句连接最后的\'从这里迈向胜利\' ③ besieging...seizing 两个动名词精准翻译革命道路。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 waged → carried out / launched / fought；不会 arduous → hard / tough / extremely difficult；不会 besieging → surrounding / encircling',
          sentencePattern: '\'A年B月，C率领D来到这里，开展了E，创建了F，点燃了G，开辟了H，I从这里迈向胜利\' → In B A, C led D here, waged E, established F, ignited G, blazed H, from which I marched toward victory',
          highScore: { en: 'In October 1927, veteran revolutionaries such as Mao Zedong and Zhu De led the Chinese Workers\' and Peasants\' Red Army here, waged arduous struggles, established the first rural revolutionary base, ignited the spark of the Chinese revolution, and blazed the revolutionary path of "besieging the cities from the countryside and seizing political power by armed force" with Chinese characteristics, from which the Chinese revolution marched toward victory.', note: '五个并列动词 + from which 从句 + 革命道路官方译法' },
          lowScore: { en: '', note: '多句分离 + fought very hard 不如 waged arduous struggles + road 不如 path + 缺乏 from which 结构。评分 8-10 分档。' }
        }
      },
      {
        id: 'p22-s2',
        cn: '井冈山现有100多处革命旧址，成为一个"没有围墙的革命历史博物馆"，是爱国主义和革命传统教育的重要基地。',
        en: 'Jinggangshan now has over 100 revolutionary sites, making it a "revolutionary history museum without walls" and an important base for patriotism and revolutionary tradition education.',
        annotations: [
          { fragment: 'making it a...museum...and an important base', type: 'structure', label: '现在分词结果状语', detail: 'making it...= 使其成为...（分词结果）。连接 museum 和 base 两个补充身份。' },
          { fragment: 'a revolutionary history museum without walls', type: 'phrase', label: '没有围墙的革命历史博物馆', detail: 'museum without walls = 没有围墙的博物馆。引申为\'开放的/无处不在的博物馆\'。' },
          { fragment: 'an important base for patriotism and revolutionary tradition education', type: 'vocab', label: '爱国主义和革命传统教育基地', detail: 'base for + 名词短语。patriotism = 爱国主义。revolutionary tradition = 革命传统。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has + 数量 + n. + making it A and B',
          structureAnalysis: 'Jinggangshan → now has (over 100 revolutionary sites) → making it (a \'museum without walls\') and (an important base for patriotism and revolutionary tradition education)',
          whyGood: '① making it 分词结果连接两个身份描述 ② museum without walls 保留中文\'没有围墙\'的比喻 ③ base for...education 准确表达教育基地。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 making it → and this makes it / so it has become；不会 without walls → open-air / without boundaries / open',
          sentencePattern: '\'XX现有A多处YY，成为一个B，是C的重要基地\' → XX now has over A YY, making it a B and an important base for C',
          highScore: { en: 'Jinggangshan now has over 100 revolutionary sites, making it a "revolutionary history museum without walls" and an important base for patriotism and revolutionary tradition education.', note: 'making it + museum without walls 保留比喻 + base for' },
          lowScore: { en: '', note: '三句分离 + old revolutionary places 不如 revolutionary sites + It is like 不如 making it 紧凑。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p23. 中共一大会址 (2021.12)
  {
    id: 'p23',
    level: 'CET-4',
    title: '中共一大会址',
    year: '2021.12',
    topic: '历史遗迹',
    difficulty: 3,
    fullCN: '中国共产党第一次全国代表大会会址位于上海兴业路76号，是一栋典型的上海式住宅，建于1920年秋。1921年7月23日，中国共产党第一次全国代表大会在此召开，大会通过了中国共产党的第一个纲领和第一个决议，选举产生了中央领导机构，宣告了中国共产党的诞生。1952年9月，中共一大会址修复，建立纪念馆并对外开放。纪念馆除了介绍参加一大的代表之外，还介绍党的历史发展进程，现已成为了解党史、缅怀革命先烈的爱国主义教育基地。',
    fullEN: 'The site of the First National Congress of the Communist Party of China is located at No. 76 Xingye Road, Shanghai. It is a typical Shanghai-style residence built in the autumn of 1920. On July 23, 1921, the First National Congress of the Communist Party of China was held here, where the Congress adopted the Party\'s first program and first resolution, elected the central leadership, and proclaimed the birth of the Communist Party of China. In September 1952, the site of the First National Congress was restored, and a memorial hall was established and opened to the public. In addition to introducing the delegates who attended the First Congress, the memorial hall also presents the historical development of the Party, and has now become a patriotic education base for learning about Party history and commemorating revolutionary martyrs.',
    sentences: [
      {
        id: 'p23-s0',
        cn: '中国共产党第一次全国代表大会会址位于上海兴业路76号，是一栋典型的上海式住宅，建于1920年秋。',
        en: 'The site of the First National Congress of the Communist Party of China is located at No. 76 Xingye Road, Shanghai. It is a typical Shanghai-style residence built in the autumn of 1920.',
        annotations: [
          { fragment: 'The site of the First National Congress of the Communist Party of China', type: 'vocab', label: '中共一大会址', detail: 'First National Congress = 第一次全国代表大会。site = 会址/地点。CPC = Communist Party of China。' },
          { fragment: 'a typical Shanghai-style residence', type: 'phrase', label: '典型上海式住宅', detail: 'typical = 典型的。Shanghai-style = 上海风格的（-style 复合形容词）。residence = 住宅。' },
          { fragment: 'built in the autumn of 1920', type: 'structure', label: '过去分词后置定语', detail: 'built in = 建于（过去分词作定语修饰 residence）。autumn 前用 the。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'The site of + 专有名词 + is located at + 地址 + . It is a + adj. + n. + 过去分词定语',
          structureAnalysis: 'The site of the First National Congress of the CPC → is located at (No. 76 Xingye Road, Shanghai). → It is (a typical Shanghai-style residence) → built (in the autumn of 1920)',
          whyGood: '① 专有名词翻译准确 ② 分成两句避免过长 ③ Shanghai-style residence 精准处理\'上海式住宅\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 congress → meeting / conference；不会 residence → house / home / building',
          sentencePattern: '\'XX会址位于A地址，是一栋典型的B式住宅，建于C年\' → The site of XX is located at A. It is a typical B-style residence built in C',
          highScore: { en: 'The site of the First National Congress of the Communist Party of China is located at No. 76 Xingye Road, Shanghai. It is a typical Shanghai-style residence built in the autumn of 1920.', note: '专有名词精准 + Shanghai-style + built 分词' },
          lowScore: { en: '', note: 'place 不如 site + Meeting 不如 Congress + house 不如 residence。评分 8-11 分档。' }
        }
      },
      {
        id: 'p23-s1',
        cn: '1921年7月23日，中国共产党第一次全国代表大会在此召开，大会通过了中国共产党的第一个纲领和第一个决议，选举产生了中央领导机构，宣告了中国共产党的诞生。',
        en: 'On July 23, 1921, the First National Congress of the Communist Party of China was held here, where the Congress adopted the Party\'s first program and first resolution, elected the central leadership, and proclaimed the birth of the Communist Party of China.',
        annotations: [
          { fragment: 'was held here', type: 'structure', label: '被动 + 地点', detail: 'was held = 被召开/在此召开。被动语态。hold a meeting → a meeting was held。' },
          { fragment: 'adopted the Party\'s first program and first resolution', type: 'vocab', label: '通过纲领和决议', detail: 'adopt = 通过/采纳。program = 纲领。resolution = 决议。两个 first 强调\'第个\'。' },
          { fragment: 'proclaimed the birth of', type: 'structure', label: '宣告...的诞生', detail: 'proclaim = 宣告/宣布（正式/重大场合）。birth of = ...的诞生。比 announced 更庄重。' }
        ],
        technique: {
          difficulty: 3,
          structure: '时间状语 + 主语 + was held + where 从句(adopted...elected...proclaimed)',
          structureAnalysis: 'On July 23, 1921 → the First National Congress → was held here → where (the Congress adopted the Party\'s first program and first resolution, elected the central leadership, and proclaimed the birth of the CPC)',
          whyGood: '① where 引导非限定定语从句，三个并列谓语（adopted/elected/proclaimed）处理中文的三件大事 ② proclaim 准确传递\'宣告诞生\'的庄重感。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 adopted → passed / approved / accepted；不会 proclaimed → announced / declared / stated；不会 program → plan / guideline',
          sentencePattern: '\'A年B月C日，XX在此召开，通过了第一个D和第一个E，选举产生了F，宣告了G的诞生\' → On B C, A, XX was held here, where XX adopted the first D and first E, elected F, and proclaimed the birth of G',
          highScore: { en: 'On July 23, 1921, the First National Congress of the Communist Party of China was held here, where the Congress adopted the Party\'s first program and first resolution, elected the central leadership, and proclaimed the birth of the Communist Party of China.', note: 'where 从句 + adopted/elected/proclaimed 三个并列动词' },
          lowScore: { en: '', note: '三句分离 + passed 不如 adopted + plan 应为 program + announced 不如 proclaimed。评分 8-10 分档。' }
        }
      },
      {
        id: 'p23-s2',
        cn: '1952年9月，中共一大会址修复，建立纪念馆并对外开放。',
        en: 'In September 1952, the site of the First National Congress was restored, and a memorial hall was established and opened to the public.',
        annotations: [
          { fragment: 'was restored', type: 'structure', label: '被动 + 修复', detail: 'was restored = 被修复。restore = 修复/复原（历史建筑常用词）。比 repaired 更强调恢复原貌。' },
          { fragment: 'a memorial hall was established', type: 'structure', label: '建立纪念馆', detail: 'memorial hall = 纪念馆。was established = 被建立（被动）。establish 比 build 更正式。' },
          { fragment: 'opened to the public', type: 'phrase', label: '对外开放', detail: 'open to the public = 对公众开放。public 前用 the。be opened to = 被开放给。' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主语A + was restored + and + 主语B + was established and done',
          structureAnalysis: 'In September 1952 → the site (of the First National Congress) → was restored → and → a memorial hall → was established and opened to the public',
          whyGood: '① was restored 精准表达\'修复\'（历史建筑）② was established 正式表达\'建立\' ③ opened to the public 标准表达\'对外开放\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 restored → repaired / fixed / rebuilt；不会 memorial hall → museum / memorial building / memorial place',
          sentencePattern: '\'A年B月，XX修复，建立YY并对外开放\' → In B A, XX was restored, and YY was established and opened to the public',
          highScore: { en: 'In September 1952, the site of the First National Congress was restored, and a memorial hall was established and opened to the public.', note: 'was restored + memorial hall + was established + opened to the public' },
          lowScore: { en: '', note: 'repaired 不如 restored + museum 不如 memorial hall + opened to people 缺少 the public。评分 8-10 分档。' }
        }
      },
      {
        id: 'p23-s3',
        cn: '纪念馆除了介绍参加一大的代表之外，还介绍党的历史发展进程，现已成为了解党史、缅怀革命先烈的爱国主义教育基地。',
        en: 'In addition to introducing the delegates who attended the First Congress, the memorial hall also presents the historical development of the Party, and has now become a patriotic education base for learning about Party history and commemorating revolutionary martyrs.',
        annotations: [
          { fragment: 'In addition to introducing', type: 'structure', label: 'In addition to + 动名词', detail: 'In addition to doing = 除了...之外。比 besides 更正式。后接动名词。' },
          { fragment: 'presents the historical development of the Party', type: 'vocab', label: '介绍历史发展进程', detail: 'presents = 展示/介绍。historical development = 历史发展进程。the Party = 党（特指中共）。' },
          { fragment: 'commemorating revolutionary martyrs', type: 'vocab', label: '缅怀革命先烈', detail: 'commemorate = 纪念/缅怀。martyrs = 先烈/烈士。revolutionary martyrs = 革命先烈。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'In addition to doing A + 主语 + also does B + and has become C for doing D and E',
          structureAnalysis: 'In addition to introducing (the delegates...) → the memorial hall → also presents (the historical development of the Party) → and has now become (a patriotic education base) → for (learning about Party history and commemorating revolutionary martyrs)',
          whyGood: '① In addition to doing 处理\'除...之外\' ② presents 比 introduces 更适合\'展示历史进程\' ③ commemorating martyrs 用词庄重准确。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 In addition to → Besides / Apart from / Not only...but also；不会 commemorating → remembering / honoring / paying tribute to；不会 martyrs → heroes / revolutionary heroes',
          sentencePattern: '\'XX除了介绍A之外，还介绍B，现已成为了解C、缅怀D的E基地\' → In addition to introducing A, XX also presents B, and has now become an E base for learning about C and commemorating D',
          highScore: { en: 'In addition to introducing the delegates who attended the First Congress, the memorial hall also presents the historical development of the Party, and has now become a patriotic education base for learning about Party history and commemorating revolutionary martyrs.', note: 'In addition to + presents + commemorating martyrs' },
          lowScore: { en: '', note: 'telling about 不够正式 + museum 不如 memorial hall + remembering 不如 commemorating + heroes 不如 martyrs。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p24. 海南省 (2021.12)
  {
    id: 'p24',
    level: 'CET-6',
    title: '海南省',
    year: '2021.12',
    topic: '地理概况',
    difficulty: 2,
    fullCN: '海南是中国最南端的省份，由海南岛和众多小岛组成。海南地处热带，拥有得天独厚的自然资源和宜人的气候，被誉为"东方夏威夷"。海南是中国最大的经济特区和自由贸易港，每年吸引大量国内外游客前来观光度假。此外，海南还以丰富的海鲜和热带水果闻名，正在建设成为国际旅游消费中心。',
    fullEN: 'Hainan, China\'s southernmost province, consists of Hainan Island and numerous smaller islands. Located in the tropics, Hainan boasts unique natural resources and a pleasant climate, earning it the reputation of the "Hawaii of the East." As China\'s largest special economic zone and free trade port, Hainan attracts a large number of domestic and international tourists for sightseeing and vacations each year. In addition, Hainan is famous for its abundant seafood and tropical fruits, and is being developed into an international tourism and consumption center.',
    sentences: [
      {
        id: 'p24-s0',
        cn: '海南是中国最南端的省份，由海南岛和众多小岛组成。',
        en: 'Hainan, China\'s southernmost province, consists of Hainan Island and numerous smaller islands.',
        annotations: [
          { fragment: 'China\'s southernmost province', type: 'vocab', label: '最南端的省份', detail: 'southernmost = 最南端的。最高级用法，同 easternmost/westernmost/northernmost。' },
          { fragment: 'consists of', type: 'vocab', label: '由...组成', detail: 'consist of = 由...组成，比 is made up of 更正式，A consists of B 强调整体由部分构成。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + 同位语 + consists of + A and B',
          structureAnalysis: 'Hainan → (同位语: China\'s southernmost province) → consists of → Hainan Island and numerous smaller islands',
          whyGood: '① 同位语紧凑处理\'是中国最南端的省份\' ② consists of 精准表达\'由...组成\' ③ southernmost 准确表达最高级含义。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 southernmost → the most southern；不会 consist of → is made up of / is composed of',
          sentencePattern: '\'XX是中国最...的省份，由A和B组成\' → \'XX, China\'s ...most province, consists of A and B\'',
          highScore: { en: 'Hainan, China\'s southernmost province, consists of Hainan Island and numerous smaller islands.', note: '同位语 + consists of + numerous 用词精准' },
          lowScore: { en: '', note: '拆成两句不够紧凑 + most southern 不自然 + includes 不如 consists of。评分 9-11 分档。' }
        }
      },
      {
        id: 'p24-s1',
        cn: '海南地处热带，拥有得天独厚的自然资源和宜人的气候，被誉为"东方夏威夷"。',
        en: 'Located in the tropics, Hainan boasts unique natural resources and a pleasant climate, earning it the reputation of the "Hawaii of the East."',
        annotations: [
          { fragment: 'Located in the tropics', type: 'structure', label: '过去分词状语', detail: 'Located in = 地处...。过去分词短语作状语置于句首，简洁表达地理位置。' },
          { fragment: 'boasts', type: 'vocab', label: '拥有（引以为豪）', detail: 'boast = 拥有（值得自豪的事物），比 has 更有表现力，带有\'以...为豪\'的意味。' },
          { fragment: 'earning it the reputation of', type: 'structure', label: '现在分词结果状语', detail: 'earning... 表示前面所述导致的结果，比 and this earns... 更紧凑。' }
        ],
        technique: {
          difficulty: 2,
          structure: '分词状语 + 主语 + boasts + A and B + 分词结果状语',
          structureAnalysis: '(Located in the tropics) → Hainan → boasts → (unique natural resources and a pleasant climate) → (earning it the reputation of...)',
          whyGood: '① 过去分词开头处理\'地处\' ② boasts 表达\'拥有\'更有自豪感 ③ 现在分词收尾处理\'被誉为\'。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 boast → have / enjoy / possess；不会 tropics → tropical region / torrid zone；不会 earning → thus gaining / thereby winning',
          sentencePattern: '\'XX地处A，拥有B，被誉为C\' → \'Located in A, XX boasts B, earning it the reputation of C\'',
          highScore: { en: 'Located in the tropics, Hainan boasts unique natural resources and a pleasant climate, earning it the reputation of the "Hawaii of the East."', note: 'Located + boasts + earning 层层递进' },
          lowScore: { en: '', note: '三句太松散 + very good / nice 词汇过于简单。评分 8-10 分档。' }
        }
      },
      {
        id: 'p24-s2',
        cn: '海南是中国最大的经济特区和自由贸易港，每年吸引大量国内外游客前来观光度假。',
        en: 'As China\'s largest special economic zone and free trade port, Hainan attracts a large number of domestic and international tourists for sightseeing and vacations each year.',
        annotations: [
          { fragment: 'special economic zone', type: 'vocab', label: '经济特区', detail: 'special economic zone = 经济特区。zone 表示特定的区域范围。' },
          { fragment: 'free trade port', type: 'vocab', label: '自由贸易港', detail: 'free trade port = 自由贸易港。free trade = 自由贸易。' },
          { fragment: 'domestic and international tourists', type: 'phrase', label: '国内外游客', detail: 'domestic = 国内的。domestic and international = 国内外。比 Chinese and foreign 更正式。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'As + 身份/角色, 主语 + attracts + 对象 + for + 目的',
          structureAnalysis: '(As China\'s largest special economic zone and free trade port) → Hainan → attracts → (a large number of domestic and international tourists) → for (sightseeing and vacations) → each year',
          whyGood: '① As 介词短语开头处理\'作为...身份\' ② attracts 比 draws/pulls 更适合描述旅游吸引力 ③ for sightseeing and vacations 明确目的。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 special economic zone → special business area；不会 free trade port → free trading harbor；不会 domestic → home / internal / Chinese',
          sentencePattern: '\'XX是中国最大的A和B，每年吸引C前来D\' → \'As China\'s largest A and B, XX attracts C for D each year\'',
          highScore: { en: 'As China\'s largest special economic zone and free trade port, Hainan attracts a large number of domestic and international tourists for sightseeing and vacations each year.', note: 'As 开头紧凑 + attracts...for... 结构清晰' },
          lowScore: { en: '', note: '两句不够紧凑 + biggest 不如 largest + area/harbor 不如 zone/port。评分 9-11 分档。' }
        }
      },
      {
        id: 'p24-s3',
        cn: '此外，海南还以丰富的海鲜和热带水果闻名，正在建设成为国际旅游消费中心。',
        en: 'In addition, Hainan is famous for its abundant seafood and tropical fruits, and is being developed into an international tourism and consumption center.',
        annotations: [
          { fragment: 'In addition', type: 'phrase', label: '此外', detail: 'In addition = 此外/另外。用于补充信息，比 also 更正式地放在句首。' },
          { fragment: 'abundant', type: 'vocab', label: '丰富的', detail: 'abundant = 丰富的/充裕的，比 rich 更强调数量上的充足。' },
          { fragment: 'is being developed into', type: 'structure', label: '正在建设成为', detail: 'is being developed into = 正在被建设成为。现在进行时被动语态，表达\'正在被...\'。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'In addition + 主语 + is famous for + A and B + and is being developed into + C',
          structureAnalysis: 'In addition → Hainan → is famous for → (its abundant seafood and tropical fruits) → and → is being developed into → (an international tourism and consumption center)',
          whyGood: '① In addition 衔接顺畅 ② abundant 比 many/much 更正式 ③ is being developed into 准确表达\'正在建设成为\'的动态过程。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 abundant → rich / plentiful / a lot of；不会 is being developed into → is becoming / is being built into；不会 consumption → spending / purchasing',
          sentencePattern: '\'此外，XX还以A闻名，正在建设成为B\' → \'In addition, XX is famous for A, and is being developed into B\'',
          highScore: { en: 'In addition, Hainan is famous for its abundant seafood and tropical fruits, and is being developed into an international tourism and consumption center.', note: 'is being developed into 正在进行时被动语态精准' },
          lowScore: { en: '', note: 'known for 不如 famous for + travel and shopping 不如 tourism and consumption。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p25. 云南省 (2021.12)
  {
    id: 'p25',
    level: 'CET-6',
    title: '云南省',
    year: '2021.12',
    topic: '地理概况',
    difficulty: 2,
    fullCN: '云南位于中国西南部，素有"彩云之南"的美称。这里地形复杂多样，气候独特——从热带到寒带几乎全部拥有。云南是中国少数民族最多的省份，25个少数民族在此和睦共处，创造了丰富多彩的民族文化。丽江古城和石林等自然文化遗产每年吸引着世界各地的游客。',
    fullEN: 'Yunnan, located in the southwest of China, is known as the "South of the Colorful Clouds." Its terrain is complex and diverse, and its climate is unique — ranging from tropical to frigid zones. Yunnan is the province with the largest number of ethnic minorities in China, where 25 ethnic minority groups live together in harmony and have created rich and diverse ethnic cultures. Its natural and cultural heritage sites, such as the Old Town of Lijiang and the Stone Forest, attract tourists from all over the world each year.',
    sentences: [
      {
        id: 'p25-s0',
        cn: '云南位于中国西南部，素有"彩云之南"的美称。',
        en: 'Yunnan, located in the southwest of China, is known as the "South of the Colorful Clouds."',
        annotations: [
          { fragment: 'located in the southwest of China', type: 'structure', label: '过去分词插入语', detail: 'located in = 位于。插入主谓之间，紧凑交代地理位置。' },
          { fragment: 'is known as', type: 'vocab', label: '素有...之称', detail: 'is known as = 被称为/以...著称。比 is called 更正式。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + 分词插入(located...) + is known as + 称号',
          structureAnalysis: 'Yunnan → (located in the southwest of China) → is known as → \'South of the Colorful Clouds\'',
          whyGood: '① 过去分词 located 紧凑处理位置信息 ② is known as 比 is called 更有文采 ③ 引号处理特殊称号。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 located in → is in / lies in / sits in；不会 is known as → is called / is named',
          sentencePattern: '\'XX位于A，素有B的美称\' → \'XX, located in A, is known as B\'',
          highScore: { en: 'Yunnan, located in the southwest of China, is known as the "South of the Colorful Clouds."', note: 'located 插入 + is known as 地道表达' },
          lowScore: { en: '', note: '两句太松散 + has a beautiful name 不如 is known as。评分 9-11 分档。' }
        }
      },
      {
        id: 'p25-s1',
        cn: '这里地形复杂多样，气候独特——从热带到寒带几乎全部拥有。',
        en: 'Its terrain is complex and diverse, and its climate is unique — ranging from tropical to frigid zones.',
        annotations: [
          { fragment: 'complex and diverse', type: 'vocab', label: '复杂多样', detail: 'complex and diverse = 复杂且多样的。complex 强调复杂性，diverse 强调多样性。' },
          { fragment: 'ranging from tropical to frigid zones', type: 'structure', label: '从...到...（范围）', detail: 'ranging from A to B = 范围从A到B。现在分词补充说明气候的独特之处。' },
          { fragment: 'frigid zones', type: 'vocab', label: '寒带', detail: 'frigid = 寒冷的/寒带的。frigid zone = 寒带，比 cold zone 更科学准确。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + is + adj. + and 并列 + 破折号 + 分词补充',
          structureAnalysis: 'Its terrain → is → complex and diverse → and → its climate → is → unique → — → (ranging from tropical to frigid zones)',
          whyGood: '① complex and diverse 精准对应\'复杂多样\' ② 破折号后用现在分词补充，比定语从句更简洁 ③ ranging from...to... 是表达范围的标准句型。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 terrain → landscape / land / geographic features；不会 ranging from → covering / from...to... / including；不会 frigid → cold / freezing / polar',
          sentencePattern: '\'这里A复杂多样，B独特——从C到D几乎全部拥有\' → \'Its A is complex and diverse, and its B is unique — ranging from C to D\'',
          highScore: { en: 'Its terrain is complex and diverse, and its climate is unique — ranging from tropical to frigid zones.', note: 'ranging from...to... 配合破折号使用地道' },
          lowScore: { en: '', note: 'geography 不如 terrain + complicated 不如 complex + weather 不如 climate。评分 8-10 分档。' }
        }
      },
      {
        id: 'p25-s2',
        cn: '云南是中国少数民族最多的省份，25个少数民族在此和睦共处，创造了丰富多彩的民族文化。',
        en: 'Yunnan is the province with the largest number of ethnic minorities in China, where 25 ethnic minority groups live together in harmony and have created rich and diverse ethnic cultures.',
        annotations: [
          { fragment: 'with the largest number of', type: 'structure', label: 'with + 最高级', detail: 'with the largest number of = 拥有最多数量的...。用 with 连接属性，比定语从句更紧凑。' },
          { fragment: 'where', type: 'structure', label: '关系副词引导定语从句', detail: 'where = 在那里（指代前面的 the province），引导非限制性定语从句修饰先行词。' },
          { fragment: 'live together in harmony', type: 'phrase', label: '和睦共处', detail: 'in harmony = 和谐地。live together in harmony = 和睦共处。固定搭配。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主句(最高级) + where 定语从句(A and B)',
          structureAnalysis: 'Yunnan → is → the province (with the largest number of ethnic minorities in China) → where → (25 ethnic minority groups) → (live together in harmony) and (have created rich and diverse ethnic cultures)',
          whyGood: '① with the largest number of 紧凑连接属性 ② where 定语从句整合后面两个动作 ③ in harmony 精准表达\'和睦\' ④ 两个现在完成时保持时态一致。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 ethnic minorities → minority nationalities / minority groups；不会 in harmony → peacefully / happily together；不会 rich and diverse → colorful / varied and abundant',
          sentencePattern: '\'XX是中国A最多的省份，B个少数民族在此和睦共处，创造了C\' → \'XX is the province with the largest number of A in China, where B ethnic minority groups live together in harmony and have created C\'',
          highScore: { en: 'Yunnan is the province with the largest number of ethnic minorities in China, where 25 ethnic minority groups live together in harmony and have created rich and diverse ethnic cultures.', note: 'with + where 从句处理三个分句一气呵成' },
          lowScore: { en: '', note: '三句太碎 + the most 不够正式 + made 不如 created。评分 8-10 分档。' }
        }
      },
      {
        id: 'p25-s3',
        cn: '丽江古城和石林等自然文化遗产每年吸引着世界各地的游客。',
        en: 'Its natural and cultural heritage sites, such as the Old Town of Lijiang and the Stone Forest, attract tourists from all over the world each year.',
        annotations: [
          { fragment: 'natural and cultural heritage sites', type: 'vocab', label: '自然文化遗产', detail: 'heritage = 遗产。natural and cultural heritage = 自然文化遗产。site = 地点/场所。' },
          { fragment: 'such as', type: 'structure', label: '列举插入', detail: 'such as 插入句中列举具体例子，比 for example 更简洁地内嵌。' },
          { fragment: 'from all over the world', type: 'phrase', label: '世界各地', detail: 'from all over the world = 来自世界各地。比 from the world 或 worldwide 更完整。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语(含 such as 举例) + attracts + 宾语 + 时间状语',
          structureAnalysis: 'Its natural and cultural heritage sites → (such as the Old Town of Lijiang and the Stone Forest) → attract → tourists (from all over the world) → each year',
          whyGood: '① such as 内嵌举例不做从句 ② natural and cultural heritage sites 完整表达\'自然文化遗产\' ③ from all over the world 比 worldwide 更具体。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 heritage sites → historical places / legacy sites；不会 such as → like / for example / including；不会 all over the world → worldwide / from around the globe',
          sentencePattern: '\'A和B等C每年吸引着D的游客\' → \'C, such as A and B, attract tourists from D each year\'',
          highScore: { en: 'Its natural and cultural heritage sites, such as the Old Town of Lijiang and the Stone Forest, attract tourists from all over the world each year.', note: 'such as 列举 + heritage sites 专有名词准确' },
          lowScore: { en: '', note: '两句断开 + places 重复 + bring 不如 attract 精准。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p26. 赵州桥 (2021.12)
  {
    id: 'p26',
    level: 'CET-4',
    title: '赵州桥',
    year: '2021.12',
    topic: '历史遗迹',
    difficulty: 2,
    fullCN: '赵州桥位于河北省赵县，建于隋代，距今已有约1400年的历史。这座桥由著名工匠李春设计和建造，是世界上现存最古老、保存最完好的石拱桥。赵州桥全长50.82米，跨径37.02米，桥体全部由石头砌成。它的设计巧妙独特——桥身采用敞肩拱结构，既减轻了桥体重量，又增加了美观性。赵州桥是中国古代桥梁建筑的杰出代表，被誉为"天下第一桥"。',
    fullEN: 'The Zhaozhou Bridge, located in Zhao County, Hebei Province, was built during the Sui Dynasty and has a history of approximately 1,400 years. Designed and constructed by the renowned craftsman Li Chun, this bridge is the oldest existing and best-preserved stone arch bridge in the world. The Zhaozhou Bridge has a total length of 50.82 meters and a span of 37.02 meters, with the entire structure built from stone. Its design is ingenious and unique — the bridge employs an open-spandrel arch structure, which not only reduces the overall weight but also enhances its aesthetic appeal. The Zhaozhou Bridge is an outstanding representative of ancient Chinese bridge architecture and is acclaimed as the "Number One Bridge Under Heaven."',
    sentences: [
      {
        id: 'p26-s0',
        cn: '赵州桥位于河北省赵县，建于隋代，距今已有约1400年的历史。',
        en: 'The Zhaozhou Bridge, located in Zhao County, Hebei Province, was built during the Sui Dynasty and has a history of approximately 1,400 years.',
        annotations: [
          { fragment: 'located in', type: 'structure', label: '过去分词插入', detail: '过去分词短语插入主谓间，交代位置信息，比独立从句紧凑。' },
          { fragment: 'was built during the Sui Dynasty', type: 'vocab', label: '建于隋代', detail: 'during = 在...时期。Sui Dynasty = 隋代。dynasty 是\'朝代\'的标准英文。' },
          { fragment: 'has a history of approximately', type: 'phrase', label: '距今约有...年历史', detail: 'has a history of + 年数 = 有...年的历史。approximately = 大约，比 about 更正式。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + 过去分词插入 + 被动谓语 + and + has a history of + 时间',
          structureAnalysis: 'The Zhaozhou Bridge → (located in Zhao County, Hebei Province) → was built during the Sui Dynasty → and → has a history of approximately 1,400 years',
          whyGood: '① 过去分词 located 紧接主语处理位置 ② was built 被动语态处理\'建于\' ③ has a history of 表达\'具有...年历史\'是地道说法。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 located in → is in / lies in；不会 dynasty → period / era / age；不会 approximately → about / around / roughly',
          sentencePattern: '\'XX位于A，建于B，距今已有约C年的历史\' → \'XX, located in A, was built during B and has a history of approximately C years\'',
          highScore: { en: 'The Zhaozhou Bridge, located in Zhao County, Hebei Province, was built during the Sui Dynasty and has a history of approximately 1,400 years.', note: '三个信息块通过分词+and 连接于一句' },
          lowScore: { en: '', note: '三句太碎 + about 1400 years old 不够正式。评分 9-11 分档。' }
        }
      },
      {
        id: 'p26-s1',
        cn: '这座桥由著名工匠李春设计和建造，是世界上现存最古老、保存最完好的石拱桥。',
        en: 'Designed and constructed by the renowned craftsman Li Chun, this bridge is the oldest existing and best-preserved stone arch bridge in the world.',
        annotations: [
          { fragment: 'Designed and constructed by', type: 'structure', label: '过去分词短语前置', detail: '过去分词短语置句首代替完整的被动句，比 This bridge was designed... 更紧凑。' },
          { fragment: 'renowned craftsman', type: 'vocab', label: '著名工匠', detail: 'renowned = 著名的/有声望的。craftsman = 工匠/手艺人。' },
          { fragment: 'oldest existing and best-preserved', type: 'structure', label: '并列最高级', detail: 'oldest existing = 现存最古老的。best-preserved = 保存最完好的。两个最高级并列修饰同一个名词。' }
        ],
        technique: {
          difficulty: 3,
          structure: '过去分词短语(Designed...by...) + 主语 + is + the + 最高级A and 最高级B + 名词',
          structureAnalysis: '(Designed and constructed by the renowned craftsman Li Chun) → this bridge → is → the → (oldest existing and best-preserved) → stone arch bridge → in the world',
          whyGood: '① 过去分词前置避免重复主语 ② renowned 比 famous 更有\'享有盛誉\'的意味 ③ 两个最高级并列使描述精准丰富。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 renowned → famous / well-known / celebrated；不会 craftsman → artisan / master builder / skilled worker；不会 best-preserved → most well-preserved / best maintained',
          sentencePattern: '\'这座桥由A设计和建造，是B现存最古老、保存最完好的C\' → \'Designed and constructed by A, this bridge is the oldest existing and best-preserved C in B\'',
          highScore: { en: 'Designed and constructed by the renowned craftsman Li Chun, this bridge is the oldest existing and best-preserved stone arch bridge in the world.', note: '过去分词前置 + 两个并列最高级精准' },
          lowScore: { en: '', note: 'famous worker 不如 renowned craftsman + kept in the best condition 不如 best-preserved。评分 8-10 分档。' }
        }
      },
      {
        id: 'p26-s2',
        cn: '赵州桥全长50.82米，跨径37.02米，桥体全部由石头砌成。',
        en: 'The Zhaozhou Bridge has a total length of 50.82 meters and a span of 37.02 meters, with the entire structure built from stone.',
        annotations: [
          { fragment: 'has a total length of', type: 'phrase', label: '全长...', detail: 'has a total length of + 数字 = 全长为...。比 is...long 更正式。' },
          { fragment: 'a span of', type: 'vocab', label: '跨径...', detail: 'span = 跨度/跨径。a span of + 数字 = 跨径为...' },
          { fragment: 'with the entire structure built from stone', type: 'structure', label: 'with + 独立主格', detail: 'with + n. + 过去分词 = 独立主格结构。整个结构由石头建成。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has a total length of A and a span of B + with + 独立主格',
          structureAnalysis: 'The Zhaozhou Bridge → has → (a total length of 50.82 meters) and (a span of 37.02 meters) → with → (the entire structure built from stone)',
          whyGood: '① has a total length of 比 is...long 更正式 ② with 独立主格处理\'桥体全部由...砌成\'不拆句 ③ built from stone 比 made of stone 更有\'砌建\'的意味。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 total length → overall length / length from end to end；不会 span → distance across / width / arch length；不会 built from stone → made of stone / stone-built / constructed of stone',
          sentencePattern: '\'XX全长A，跨径B，桥体全部由C砌成\' → \'XX has a total length of A and a span of B, with the entire structure built from C\'',
          highScore: { en: 'The Zhaozhou Bridge has a total length of 50.82 meters and a span of 37.02 meters, with the entire structure built from stone.', note: 'has a total length of + with 结构，三个数据一句完成' },
          lowScore: { en: '', note: '三句分散 + is...long 不够正式 + made of stones 不如 built from stone。评分 9-11 分档。' }
        }
      },
      {
        id: 'p26-s3',
        cn: '它的设计巧妙独特——桥身采用敞肩拱结构，既减轻了桥体重量，又增加了美观性。',
        en: 'Its design is ingenious and unique — the bridge employs an open-spandrel arch structure, which not only reduces the overall weight but also enhances its aesthetic appeal.',
        annotations: [
          { fragment: 'ingenious and unique', type: 'vocab', label: '巧妙独特', detail: 'ingenious = 巧妙的/精巧的。unique = 独特的。比 clever and special 更正式。' },
          { fragment: 'open-spandrel arch structure', type: 'vocab', label: '敞肩拱结构', detail: 'open-spandrel = 敞肩的（建筑术语）。spandrel = 拱肩。open-spandrel arch = 敞肩拱。' },
          { fragment: 'not only reduces...but also enhances', type: 'structure', label: '既...又...', detail: 'not only...but also... = 既...又...。reduces...enhances 动词平行结构。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主句 + 破折号 + which 定语从句(not only...but also...)',
          structureAnalysis: 'Its design → is → ingenious and unique → — → the bridge employs (an open-spandrel arch structure) → which → not only reduces (the overall weight) but also enhances (its aesthetic appeal)',
          whyGood: '① ingenious 比 clever 更精准描述\'巧妙\' ② open-spandrel arch 是建筑专有名词 ③ not only...but also 对应\'既...又...\' ④ 破折号后 which 从句解释功能性优势。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 ingenious → clever / smart / brilliant；不会 open-spandrel → open-shoulder / hollow arch；不会 aesthetic appeal → beauty / visual attractiveness / good looks',
          sentencePattern: '\'XX设计巧妙独特——采用A，既减轻了B，又增加了C\' → \'Its design is ingenious and unique — the bridge employs A, which not only reduces B but also enhances C\'',
          highScore: { en: 'Its design is ingenious and unique — the bridge employs an open-spandrel arch structure, which not only reduces the overall weight but also enhances its aesthetic appeal.', note: 'ingenious + open-spandrel 专业 + which 从句功能清晰' },
          lowScore: { en: '', note: 'clever and special 不够正式 + open shoulders 术语不准确 + 三句分散。评分 8-10 分档。' }
        }
      },
      {
        id: 'p26-s4',
        cn: '赵州桥是中国古代桥梁建筑的杰出代表，被誉为"天下第一桥"。',
        en: 'The Zhaozhou Bridge is an outstanding representative of ancient Chinese bridge architecture and is acclaimed as the "Number One Bridge Under Heaven."',
        annotations: [
          { fragment: 'outstanding representative', type: 'vocab', label: '杰出代表', detail: 'outstanding = 杰出的。representative = 代表（事物/人）。比 excellent example 更正式。' },
          { fragment: 'is acclaimed as', type: 'vocab', label: '被誉为', detail: 'acclaimed as = 被誉为/被赞为。比 is known as 更有赞美意味。acclaim 意为\'赞扬/喝彩\'。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + is + an outstanding representative of A + and + is acclaimed as B',
          structureAnalysis: 'The Zhaozhou Bridge → is → (an outstanding representative of ancient Chinese bridge architecture) → and → is acclaimed as → (the \'Number One Bridge Under Heaven\')',
          whyGood: '① outstanding representative 精准表达\'杰出代表\' ② is acclaimed as 比 is called/is known as 更有\'备受赞誉\'的意味 ③ \'天下第一桥\'的翻译保留原文的气势。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 outstanding → excellent / remarkable / exceptional；不会 acclaimed as → known as / praised as / honored as / reputed as',
          sentencePattern: '\'XX是A的杰出代表，被誉为B\' → \'XX is an outstanding representative of A and is acclaimed as B\'',
          highScore: { en: 'The Zhaozhou Bridge is an outstanding representative of ancient Chinese bridge architecture and is acclaimed as the "Number One Bridge Under Heaven."', note: 'outstanding + acclaimed as 表达有力' },
          lowScore: { en: '', note: 'very good example 薄弱 + people call it 口语化 + the best bridge 不如保持\'天下第一桥\'原意。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p27. 城镇化 (2021.12)
  {
    id: 'p27',
    level: 'CET-4',
    title: '城镇化',
    year: '2021.12',
    topic: '社会民生',
    difficulty: 3,
    fullCN: '改革开放以来，中国经历了人类历史上规模最大的城镇化进程。数以亿计的农村人口进入城市工作和生活，城镇化率从不到20%上升到超过65%。城镇化极大地改善了人民的生活条件，但也带来了交通拥堵、环境污染等挑战。为应对这些问题，中国正推行以人为核心的新型城镇化战略，注重城乡协调发展和可持续发展。未来，中国将继续推进高质量城镇化，让更多人共享现代化成果。',
    fullEN: 'Since reform and opening-up, China has experienced the largest urbanization process in human history. Hundreds of millions of rural residents have moved into cities for work and life, with the urbanization rate rising from less than 20% to over 65%. Urbanization has greatly improved people\'s living conditions, but it has also brought challenges such as traffic congestion and environmental pollution. To address these issues, China is implementing a new people-centered urbanization strategy that emphasizes balanced development between urban and rural areas as well as sustainable development. In the future, China will continue to promote high-quality urbanization so that more people can share in the fruits of modernization.',
    sentences: [
      {
        id: 'p27-s0',
        cn: '改革开放以来，中国经历了人类历史上规模最大的城镇化进程。',
        en: 'Since reform and opening-up, China has experienced the largest urbanization process in human history.',
        annotations: [
          { fragment: 'Since reform and opening-up', type: 'phrase', label: '改革开放以来', detail: 'Since + 时间点 = 自从...以来。reform and opening-up = 改革开放，固定译法。' },
          { fragment: 'has experienced', type: 'structure', label: '现在完成时', detail: 'has experienced = 经历了。现在完成时表达从改革开放至今的影响，与 Since 搭配使用。' },
          { fragment: 'the largest...in human history', type: 'structure', label: '人类历史上最...的', detail: 'in human history = 人类历史上。the largest...in human history = 人类历史上规模最大的...' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Since + 时间 + 主语 + has experienced + the + 最高级 + 名词 + in human history',
          structureAnalysis: '(Since reform and opening-up) → China → has experienced → (the largest urbanization process) → in human history',
          whyGood: '① Since + 现在完成时是经典搭配 ② reform and opening-up 标准翻译 ③ the largest...in human history 强调历史意义。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 reform and opening-up → China\'s opening and reform / economic reform and opening；不会 urbanization → urban development / city growth / urban migration',
          sentencePattern: '\'XX以来，中国经历了人类历史上规模最大的A\' → \'Since XX, China has experienced the largest A in human history\'',
          highScore: { en: 'Since reform and opening-up, China has experienced the largest urbanization process in human history.', note: 'Since + 现在完成时 + in human history 强调规模' },
          lowScore: { en: '', note: 'After 不如 Since + gone through 不如 experienced + mankind 不如 human。评分 9-11 分档。' }
        }
      },
      {
        id: 'p27-s1',
        cn: '数以亿计的农村人口进入城市工作和生活，城镇化率从不到20%上升到超过65%。',
        en: 'Hundreds of millions of rural residents have moved into cities for work and life, with the urbanization rate rising from less than 20% to over 65%.',
        annotations: [
          { fragment: 'Hundreds of millions of', type: 'vocab', label: '数以亿计', detail: 'Hundreds of millions of = 数以亿计的。比 bilions of 更准确对应\'亿\'的数量级。' },
          { fragment: 'rural residents', type: 'vocab', label: '农村人口', detail: 'rural = 农村的。rural residents = 农村居民/人口。比 rural people 或 farmers 更准确。' },
          { fragment: 'with the urbanization rate rising from...to...', type: 'structure', label: 'with + 独立主格', detail: 'with + n. + 现在分词(rising) = 独立主格。rate rising from A to B = 比例从A上升到B。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语(hundreds of millions of) + have moved into + 地点 + for + 目的 + with + 独立主格(rate rising from...to...)',
          structureAnalysis: '(Hundreds of millions of rural residents) → have moved into → (cities) → for (work and life) → with → (the urbanization rate) → rising (from less than 20% to over 65%)',
          whyGood: '① Hundreds of millions 精准对应\'数以亿计\' ② rural residents 比 farmers/countryside people 更准确 ③ with 独立主格整合数据变化不拆句。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 Hundreds of millions → Several hundred million / A few hundred million；不会 rural residents → countryside people / villagers / farming population；不会 urbanization rate → urban population ratio / city population rate',
          sentencePattern: '\'数以亿计的A进入B工作生活，C率从不到X%上升到超过Y%\' → \'Hundreds of millions of A have moved into B for work and life, with the C rate rising from less than X% to over Y%\'',
          highScore: { en: 'Hundreds of millions of rural residents have moved into cities for work and life, with the urbanization rate rising from less than 20% to over 65%.', note: 'Hundreds of millions + with 结构整合数据' },
          lowScore: { en: '', note: 'from the countryside 不如 rural + people 不如 residents + 拆句 + under 不如 less than。评分 8-10 分档。' }
        }
      },
      {
        id: 'p27-s2',
        cn: '城镇化极大地改善了人民的生活条件，但也带来了交通拥堵、环境污染等挑战。',
        en: 'Urbanization has greatly improved people\'s living conditions, but it has also brought challenges such as traffic congestion and environmental pollution.',
        annotations: [
          { fragment: 'has greatly improved', type: 'structure', label: '现在完成时', detail: '现在完成时强调对现在的影响——改善已经发生且结果持续。' },
          { fragment: 'living conditions', type: 'vocab', label: '生活条件', detail: 'living conditions = 生活条件。condition 用复数表示\'状况/条件\'。' },
          { fragment: 'such as', type: 'structure', label: '列举插入', detail: 'such as = 例如。插入句中举出具体例子。比 for example 更简洁。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + has greatly improved + A + but + has also brought + B + such as + C and D',
          structureAnalysis: 'Urbanization → has greatly improved → (people\'s living conditions) → but → has also brought → (challenges) → such as → (traffic congestion and environmental pollution)',
          whyGood: '① has greatly improved...but has also brought 转折对比清晰 ② living conditions 标准表达 ③ such as 简洁列举。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 living conditions → quality of life / living standards；不会 traffic congestion → traffic jams / heavy traffic / road congestion；不会 environmental pollution → pollution / environmental damage',
          sentencePattern: '\'A极大地改善了B，但也带来了C、D等挑战\' → \'A has greatly improved B, but it has also brought challenges such as C and D\'',
          highScore: { en: 'Urbanization has greatly improved people\'s living conditions, but it has also brought challenges such as traffic congestion and environmental pollution.', note: '现在完成时 + but 转折 + such as 列举简洁' },
          lowScore: { en: '', note: 'made...better 不如 improved...conditions + problems 不如 challenges + dirty environment 不如 environmental pollution。评分 8-10 分档。' }
        }
      },
      {
        id: 'p27-s3',
        cn: '为应对这些问题，中国正推行以人为核心的新型城镇化战略，注重城乡协调发展和可持续发展。',
        en: 'To address these issues, China is implementing a new people-centered urbanization strategy that emphasizes balanced development between urban and rural areas as well as sustainable development.',
        annotations: [
          { fragment: 'To address these issues', type: 'structure', label: '目的状语前置', detail: 'To + 动词原形 置于句首 = 为了...。address = 应对/解决。比 solve 更正式。' },
          { fragment: 'people-centered', type: 'vocab', label: '以人为核心的', detail: 'people-centered = 以人为本的/以人为核心的。复合形容词。' },
          { fragment: 'that emphasizes...as well as...', type: 'structure', label: 'that 定语从句', detail: 'that 定语从句修饰 strategy。emphasizes A as well as B = 强调A和B。as well as 比 and 更有递进感。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'To address + 宾语 + 主语 + is implementing + 名词短语(含定语从句 that emphasizes A as well as B)',
          structureAnalysis: '(To address these issues) → China → is implementing → (a new people-centered urbanization strategy) → that emphasizes → (balanced development between urban and rural areas) as well as (sustainable development)',
          whyGood: '① To address 开头表达目的意图 ② is implementing 现在进行时表达\'正在推行\' ③ people-centered 精准表达\'以人为核心\' ④ that 从句和 as well as 连接两个发展理念。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 address → deal with / solve / tackle；不会 people-centered → human-centered / people-oriented / putting people first；不会 balanced development → coordinated development / harmonious growth',
          sentencePattern: '\'为应对A，中国正推行以人为核心的B，注重C和D\' → \'To address A, China is implementing a new people-centered B that emphasizes C as well as D\'',
          highScore: { en: 'To address these issues, China is implementing a new people-centered urbanization strategy that emphasizes balanced development between urban and rural areas as well as sustainable development.', note: 'To address + people-centered + that emphasizes + as well as 层层嵌套' },
          lowScore: { en: '', note: 'solve 不如 address + carrying out 不如 implementing + puts people first 不如 people-centered + 拆成两句。评分 8-10 分档。' }
        }
      },
      {
        id: 'p27-s4',
        cn: '未来，中国将继续推进高质量城镇化，让更多人共享现代化成果。',
        en: 'In the future, China will continue to promote high-quality urbanization so that more people can share in the fruits of modernization.',
        annotations: [
          { fragment: 'will continue to promote', type: 'structure', label: '将继续推进', detail: 'will continue to + 动词原形 = 将继续做某事。一般将来时表达对未来的承诺/计划。' },
          { fragment: 'high-quality urbanization', type: 'vocab', label: '高质量城镇化', detail: 'high-quality = 高质量的。high-quality urbanization = 高质量城镇化。' },
          { fragment: 'so that...can share in the fruits of', type: 'structure', label: '让...共享...成果', detail: 'so that = 以便/从而。share in the fruits of = 共享...的成果。fruits 比喻\'成果\'。' }
        ],
        technique: {
          difficulty: 2,
          structure: '时间状语 + 主语 + will continue to + 谓语 + so that + 从句(can share in...)',
          structureAnalysis: '(In the future) → China → will continue to promote → (high-quality urbanization) → so that → (more people) → can share in → (the fruits of modernization)',
          whyGood: '① will continue to 表达\'将继续\'的坚定承诺 ② high-quality 精准对应\'高质量\' ③ so that 表达目的 ④ fruits of modernization 比喻性翻译地道。',
          keyVocab: ['', '', ''],
          substitutionGuide: '不会 high-quality → quality / excellent / superior；不会 share in the fruits of → benefit from / enjoy the results of / share the benefits of；不会 modernization → modern development / modern life / modern society',
          sentencePattern: '\'未来，XX将继续推进A，让更多人共享B成果\' → \'In the future, XX will continue to promote A so that more people can share in the fruits of B\'',
          highScore: { en: 'In the future, China will continue to promote high-quality urbanization so that more people can share in the fruits of modernization.', note: 'will continue to + so that + share in the fruits of 地道' },
          lowScore: { en: '', note: 'keep promoting 不如 continue to promote + good 不如 high-quality + let/enjoy 不如 so that/share in the fruits。评分 9-11 分档。' }
        }
      }
    ]
  },
  // p28. 大兴国际机场 (2020.12)
  {
    id: 'p28',
    level: 'CET-6',
    title: '大兴国际机场',
    year: '2020.12',
    topic: '科技成就',
    difficulty: 3,
    fullCN: '北京大兴国际机场位于北京市南部，于2019年9月正式投入运营。该机场被英国《卫报》评为"新世界七大奇迹"之首，其航站楼是世界上最大的单体航站楼。机场的设计融入了中国传统建筑元素，从空中俯瞰宛如一只展翅的凤凰。大兴机场的建成大大缓解了首都国际机场的压力，每年可满足7200万人次的旅客吞吐量。预计到2025年，大兴机场将成为世界上最繁忙的机场之一。',
    fullEN: 'Beijing Daxing International Airport, located in the south of Beijing, was officially put into operation in September 2019. The airport was ranked first among the "Seven Wonders of the New World" by The Guardian, and its terminal is the largest single-building terminal in the world. The design of the airport incorporates elements of traditional Chinese architecture, and from an aerial view, it looks like a phoenix spreading its wings. The completion of Daxing Airport has greatly relieved the pressure on Capital International Airport, with an annual passenger throughput capacity of 72 million. It is expected that by 2025, Daxing Airport will become one of the busiest airports in the world.',
    sentences: [
      {
        id: 'p28-s0',
        cn: '北京大兴国际机场位于北京市南部，于2019年9月正式投入运营。',
        en: 'Beijing Daxing International Airport, located in the south of Beijing, was officially put into operation in September 2019.',
        annotations: [
          { fragment: 'located in the south of Beijing', type: 'structure', label: '过去分词插入语', detail: 'located in = 位于（过去分词插入主谓之间，省略 which is）。' },
          { fragment: 'was officially put into operation', type: 'phrase', label: '正式投入运营', detail: 'put into operation = 投入运营/投入使用。officially = 正式地。比 opened 更正式。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + 分词插入(located...) + was put into operation + 时间',
          structureAnalysis: 'Beijing Daxing International Airport → (located in the south of Beijing) → was officially put into operation → in September 2019',
          whyGood: '① located 分词插入处理\'位于\'，句子紧凑 ② put into operation 比 opened 更正式地表达\'投入运营\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 put into operation → opened / started operating / began service',
          sentencePattern: '\'XX位于A，于B年C月正式投入运营\' → XX, located in A, was officially put into operation in C B',
          highScore: { en: 'Beijing Daxing International Airport, located in the south of Beijing, was officially put into operation in September 2019.', note: 'located 分词插入 + put into operation' },
          lowScore: { en: '', note: 'is in 直接 + and 连接不如分词插入紧凑。评分 9-12 分档。' }
        }
      },
      {
        id: 'p28-s1',
        cn: '该机场被英国《卫报》评为"新世界七大奇迹"之首，其航站楼是世界上最大的单体航站楼。',
        en: 'The airport was ranked first among the "Seven Wonders of the New World" by The Guardian, and its terminal is the largest single-building terminal in the world.',
        annotations: [
          { fragment: 'was ranked first among', type: 'structure', label: '被动 + 排名', detail: 'was ranked first among = 被评为...之首。rank = 排名/评级。first among = 在...中排第一。' },
          { fragment: 'the largest single-building terminal', type: 'vocab', label: '最大单体航站楼', detail: 'single-building = 单体建筑（复合形容词）。terminal = 航站楼。largest single-building 最大单体。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + was ranked first among...by... + and + 主语 + is the largest...',
          structureAnalysis: 'The airport → was ranked first among (the \'Seven Wonders of the New World\') by The Guardian → and → its terminal → is (the largest single-building terminal in the world)',
          whyGood: '① was ranked first among 精准表达\'被评为之首\' ② single-building terminal 准确翻译\'单体航站楼\' ③ 两个信息通过 and 并列。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 was ranked → was rated / was named / was listed；不会 single-building → stand-alone / independent / one-piece',
          sentencePattern: '\'XX被A评为B之首，其C是世界上最大的D\' → XX was ranked first among B by A, and its C is the largest D in the world',
          highScore: { en: 'The airport was ranked first among the "Seven Wonders of the New World" by The Guardian, and its terminal is the largest single-building terminal in the world.', note: 'was ranked first among + single-building terminal' },
          lowScore: { en: '', note: 'said...is the number one 不如 was ranked first 精准 + one-building 不如 single-building。评分 8-10 分档。' }
        }
      },
      {
        id: 'p28-s2',
        cn: '机场的设计融入了中国传统建筑元素，从空中俯瞰宛如一只展翅的凤凰。',
        en: 'The design of the airport incorporates elements of traditional Chinese architecture, and from an aerial view, it looks like a phoenix spreading its wings.',
        annotations: [
          { fragment: 'incorporates elements of traditional Chinese architecture', type: 'vocab', label: '融入建筑元素', detail: 'incorporate = 融入/包含（比 include 更强调整合）。architecture = 建筑（总称）。' },
          { fragment: 'from an aerial view', type: 'phrase', label: '从空中俯瞰', detail: 'aerial view = 俯瞰/鸟瞰图。from an aerial view = 从空中看。aerial = 空中的。' },
          { fragment: 'a phoenix spreading its wings', type: 'phrase', label: '展翅的凤凰', detail: 'phoenix = 凤凰。spreading its wings = 展开翅膀（现在分词作定语修饰 phoenix）。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + incorporates A + and + from 视角 + it looks like B doing C',
          structureAnalysis: 'The design of the airport → incorporates (elements of traditional Chinese architecture) → and → from an aerial view → it looks like (a phoenix spreading its wings)',
          whyGood: '① incorporate 精准表达\'融入\'而非简单添加 ② from an aerial view 地道表达\'从空中俯瞰\' ③ phoenix spreading its wings 保留凤凰展翅的比喻美感。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 incorporate → include / contain / combine / blend；不会 aerial → bird\'s eye / from above / from the sky；不会 phoenix → legendary bird / firebird',
          sentencePattern: '\'XX的设计融入了A元素，从空中俯瞰宛如一只B的C\' → The design of XX incorporates elements of A, and from an aerial view, it looks like a C doing B',
          highScore: { en: 'The design of the airport incorporates elements of traditional Chinese architecture, and from an aerial view, it looks like a phoenix spreading its wings.', note: 'incorporates + from an aerial view + a phoenix spreading its wings' },
          lowScore: { en: '', note: 'has 不如 incorporates + Looking from the sky 不如 from an aerial view + bird 不如 phoenix。评分 8-10 分档。' }
        }
      },
      {
        id: 'p28-s3',
        cn: '大兴机场的建成大大缓解了首都国际机场的压力，每年可满足7200万人次的旅客吞吐量。',
        en: 'The completion of Daxing Airport has greatly relieved the pressure on Capital International Airport, and it has an annual passenger throughput capacity of 72 million.',
        annotations: [
          { fragment: 'has greatly relieved the pressure on', type: 'structure', label: '现完 + 缓解压力', detail: 'has greatly relieved = 大大缓解了。relieve pressure on = 缓解...的压力。pressure 后用 on。' },
          { fragment: 'has an annual passenger throughput capacity of', type: 'structure', label: '补充吞吐能力', detail: '用 and it has... 另起并列分句补充吞吐量，避免 with 结构在句末悬空、指代不清。throughput = 吞吐量。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'The completion of + 主语 + has done + and + it has + 补充说明',
          structureAnalysis: 'The completion of Daxing Airport → has greatly relieved (the pressure on Capital International Airport) → and → it → has (an annual passenger throughput capacity of 72 million)',
          whyGood: '① The completion 名词化作主语，简洁 ② relieve pressure on 标准搭配 ③ 用并列分句补充吞吐量数据，主语明确（the airport），不会产生悬空修饰。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 relieve → reduce / ease / lessen；不会 throughput → handling capacity / traffic capacity / passenger volume',
          sentencePattern: '\'A的建成大大缓解了B的压力，每年可满足C人次的吞吐量\' → The completion of A has greatly relieved the pressure on B, and it has an annual throughput capacity of C',
          highScore: { en: 'The completion of Daxing Airport has greatly relieved the pressure on Capital International Airport, and it has an annual passenger throughput capacity of 72 million.', note: '名词化 + relieve pressure on + 并列分句补充吞吐能力' },
          lowScore: { en: '', note: 'After...was built 不如 The completion 简洁 + reduced 不如 relieved 精准。评分 8-10 分档。' }
        }
      },
      {
        id: 'p28-s4',
        cn: '预计到2025年，大兴机场将成为世界上最繁忙的机场之一。',
        en: 'It is expected that by 2025, Daxing Airport will become one of the busiest airports in the world.',
        annotations: [
          { fragment: 'It is expected that', type: 'structure', label: 'It is + 过去分词 + that 从句', detail: 'It is expected that = 预计...。it 作形式主语，that 从句是真正主语。同类：It is said/believed/reported that。' },
          { fragment: 'one of the busiest airports', type: 'structure', label: 'one of + 最高级 + 复数', detail: 'one of the busiest airports = 最繁忙的机场之一。airports 用复数。' }
        ],
        technique: {
          difficulty: 1,
          structure: 'It is expected that + by + 时间 + 主语 + will become one of the most...',
          structureAnalysis: 'It is expected that → by 2025 → Daxing Airport → will become → one of the busiest airports in the world',
          whyGood: '① It is expected that 是\'预计\'的标准书面表达 ② by 2025 精确表达\'到2025年\' ③ one of the busiest 用最高级自然。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 It is expected that → People expect that / By 2025 it is predicted that / It is estimated that',
          sentencePattern: '\'预计到A年，XX将成为世界上最B的YY之一\' → It is expected that by A, XX will become one of the B YY in the world',
          highScore: { en: 'It is expected that by 2025, Daxing Airport will become one of the busiest airports in the world.', note: 'It is expected that + by + will become + one of the busiest' },
          lowScore: { en: '', note: 'People expect 不如 It is expected that + before 不如 by 精准。评分 8-11 分档。' }
        }
      }
    ]
  },
  // p29. 港珠澳大桥 (2020.12)
  {
    id: 'p29',
    level: 'CET-6',
    title: '港珠澳大桥',
    year: '2020.12',
    topic: '科技成就',
    difficulty: 3,
    fullCN: '港珠澳大桥是连接香港、珠海和澳门的跨海大桥，全长55公里，是世界上最长的跨海大桥。大桥由桥梁、人工岛和海底隧道三部分组成，于2018年10月正式通车。大桥的建设克服了诸多技术难题，体现了中国在桥梁建设领域的卓越能力。它将香港与珠三角西岸的交通时间从3小时缩短到30分钟，极大地促进了粤港澳大湾区的经济一体化。',
    fullEN: 'The Hong Kong-Zhuhai-Macao Bridge is a sea-crossing bridge connecting Hong Kong, Zhuhai, and Macao, with a total length of 55 kilometers, making it the longest sea-crossing bridge in the world. The bridge consists of three parts: bridges, artificial islands, and an undersea tunnel, and was officially opened to traffic in October 2018. The construction of the bridge overcame numerous technical challenges, demonstrating China\'s outstanding capability in the field of bridge construction. It has reduced the travel time between Hong Kong and the western bank of the Pearl River Delta from three hours to thirty minutes, greatly promoting the economic integration of the Guangdong-Hong Kong-Macao Greater Bay Area.',
    sentences: [
      {
        id: 'p29-s0',
        cn: '港珠澳大桥是连接香港、珠海和澳门的跨海大桥，全长55公里，是世界上最长的跨海大桥。',
        en: 'The Hong Kong-Zhuhai-Macao Bridge is a sea-crossing bridge connecting Hong Kong, Zhuhai, and Macao, with a total length of 55 kilometers, making it the longest sea-crossing bridge in the world.',
        annotations: [
          { fragment: 'a sea-crossing bridge connecting', type: 'structure', label: '现在分词后置定语', detail: 'connecting = 连接（分词作定语修饰 bridge）。sea-crossing = 跨海的（复合形容词）。' },
          { fragment: 'with a total length of 55 kilometers', type: 'structure', label: 'with 补充数据', detail: 'with a total length of = 全长...。with 结构补充描述主干信息。' },
          { fragment: 'making it the longest sea-crossing bridge', type: 'structure', label: '现在分词结果状语', detail: 'making it...= 使其成为...。分词短语表结果，比 which makes it 更紧凑。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + is + n. + 分词定语 + with + 数据 + making 分词结果',
          structureAnalysis: 'The HK-Zhuhai-Macao Bridge → is (a sea-crossing bridge connecting HK, Zhuhai, and Macao) → with (a total length of 55km) → making it (the longest sea-crossing bridge in the world)',
          whyGood: '① connecting 分词后置处理\'连接三地\' ② with 补充长度 ③ making 分词将两句合并，结构紧凑高效。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 sea-crossing → over-sea / across the sea；不会 making it → and this makes it / so it is',
          sentencePattern: '\'XX是连接A、B和C的跨海大桥，全长D公里，是E最长的F\' → XX is a sea-crossing bridge connecting A, B, and C, with a total length of D km, making it the longest F in E',
          highScore: { en: 'The Hong Kong-Zhuhai-Macao Bridge is a sea-crossing bridge connecting Hong Kong, Zhuhai, and Macao, with a total length of 55 kilometers, making it the longest sea-crossing bridge in the world.', note: 'connecting 分词 + with 补充 + making 结果' },
          lowScore: { en: '', note: '三句分离不够紧凑 + sea bridge 不如 sea-crossing bridge 精确。评分 8-10 分档。' }
        }
      },
      {
        id: 'p29-s1',
        cn: '大桥由桥梁、人工岛和海底隧道三部分组成，于2018年10月正式通车。',
        en: 'The bridge consists of three parts: bridges, artificial islands, and an undersea tunnel, and was officially opened to traffic in October 2018.',
        annotations: [
          { fragment: 'consists of three parts:', type: 'structure', label: 'consist of + 列举', detail: 'consist of = 由...组成。冒号后列举三个组成部分。注意 consist 不用被动。' },
          { fragment: 'artificial islands, and an undersea tunnel', type: 'vocab', label: '人工岛和海底隧道', detail: 'artificial = 人工的。undersea tunnel = 海底隧道。undersea = underwater。' },
          { fragment: 'was officially opened to traffic', type: 'phrase', label: '正式通车', detail: 'be opened to traffic = 通车/开放交通。officially = 正式地。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + consists of + 冒号列举 + and was opened to traffic + 时间',
          structureAnalysis: 'The bridge → consists of three parts: (bridges, artificial islands, and an undersea tunnel) → and → was officially opened to traffic → in October 2018',
          whyGood: '① consists of 是\'由...组成\'的标准表达 ② 冒号引出三个组成部分，清晰明了 ③ opened to traffic 是\'通车\'的规范表达。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 consist of → is made up of / includes / has；不会 undersea → underwater / under the sea / submarine',
          sentencePattern: '\'XX由A、B和C三部分组成，于D年F月正式通车\' → XX consists of three parts: A, B, and C, and was officially opened to traffic in F D',
          highScore: { en: 'The bridge consists of three parts: bridges, artificial islands, and an undersea tunnel, and was officially opened to traffic in October 2018.', note: 'consists of + 冒号列举 + opened to traffic' },
          lowScore: { en: '', note: 'is made of 不如 consists of + man-made 不如 artificial + opened 缺少 to traffic。评分 8-10 分档。' }
        }
      },
      {
        id: 'p29-s2',
        cn: '大桥的建设克服了诸多技术难题，体现了中国在桥梁建设领域的卓越能力。',
        en: 'The construction of the bridge overcame numerous technical challenges, demonstrating China\'s outstanding capability in the field of bridge construction.',
        annotations: [
          { fragment: 'overcame numerous technical challenges', type: 'vocab', label: '克服技术难题', detail: 'overcame = 克服（overcome 的过去式）。numerous = 许多的。technical challenges = 技术难题。' },
          { fragment: 'demonstrating China\'s outstanding capability', type: 'structure', label: '现在分词结果状语', detail: 'demonstrating = 体现了（分词表结果）。outstanding = 卓越的。capability = 能力。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + overcame A + demonstrating B',
          structureAnalysis: 'The construction of the bridge → overcame (numerous technical challenges) → demonstrating (China\'s outstanding capability in the field of bridge construction)',
          whyGood: '① overcame 是\'克服\'的标准动词 ② demonstrating 分词将两句合并，自然表结果 ③ outstanding capability 精准表达\'卓越能力\'。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 overcame → solved / beat / got over；不会 demonstrating → showing / reflecting / displaying',
          sentencePattern: '\'XX的A克服了B，体现了C在D领域的卓越能力\' → The A of XX overcame B, demonstrating C\'s outstanding capability in the field of D',
          highScore: { en: 'The construction of the bridge overcame numerous technical challenges, demonstrating China\'s outstanding capability in the field of bridge construction.', note: 'overcame + demonstrating 分词结果 + outstanding capability' },
          lowScore: { en: '', note: 'solved 不如 overcame + shows 不如 demonstrates + can build...well 口语化。评分 8-10 分档。' }
        }
      },
      {
        id: 'p29-s3',
        cn: '它将香港与珠三角西岸的交通时间从3小时缩短到30分钟，极大地促进了粤港澳大湾区的经济一体化。',
        en: 'It has reduced the travel time between Hong Kong and the western bank of the Pearl River Delta from three hours to thirty minutes, greatly promoting the economic integration of the Guangdong-Hong Kong-Macao Greater Bay Area.',
        annotations: [
          { fragment: 'has reduced the travel time...from...to', type: 'structure', label: 'reduce...from A to B + 现完', detail: 'has reduced...from...to...= 从...缩短到...。现完强调结果。travel time = 交通时间。' },
          { fragment: 'greatly promoting the economic integration', type: 'structure', label: '现在分词结果状语', detail: 'greatly promoting = 极大地促进了（分词结果）。economic integration = 经济一体化。' },
          { fragment: 'the Guangdong-Hong Kong-Macao Greater Bay Area', type: 'vocab', label: '粤港澳大湾区', detail: 'Greater Bay Area = 大湾区。Guangdong-Hong Kong-Macao 复合地名修饰语。' }
        ],
        technique: {
          difficulty: 3,
          structure: '主语 + has reduced A from B to C + greatly promoting D',
          structureAnalysis: 'It → has reduced (the travel time between HK and the western bank of the Pearl River Delta) → from three hours to thirty minutes → greatly promoting (the economic integration of the Greater Bay Area)',
          whyGood: '① reduce...from...to 精准表达\'从A缩短到B\' ② promoting 分词再次用于合并句子 ③ Greater Bay Area 专有名词准确。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 reduce from...to → shorten from...to / cut from...to / make the time go from...to；不会 Greater Bay Area → big bay area / Guangdong-HK-Macao big bay',
          sentencePattern: '\'XX将A与B的C从D缩短到E，极大地促进了F的G\' → XX has reduced C between A and B from D to E, greatly promoting the G of F',
          highScore: { en: 'It has reduced the travel time between Hong Kong and the western bank of the Pearl River Delta from three hours to thirty minutes, greatly promoting the economic integration of the Guangdong-Hong Kong-Macao Greater Bay Area.', note: 'reduce from...to + promoting 分词 + Greater Bay Area' },
          lowScore: { en: '', note: 'makes...shorter 不如 reduce...from...to 精准 + joining 不如 integration + big bay area 不规范。评分 8-10 分档。' }
        }
      }
    ]
  },
  // p30. 青藏铁路 (2020.12)
  {
    id: 'p30',
    level: 'CET-4',
    title: '青藏铁路',
    year: '2020.12',
    topic: '科技成就',
    difficulty: 2,
    fullCN: '青藏铁路是世界上最高、最长的高原铁路，连接青海省西宁市和西藏自治区拉萨市，全长1956公里。铁路最高点海拔5072米，全线约有960公里路段位于海拔4000米以上。由于高原缺氧和永久冻土等极端自然条件，青藏铁路的建设难度极大。工程师们攻克了三大世界性技术难题：高原缺氧、多年冻土和生态环境保护。青藏铁路的通车结束了西藏不通铁路的历史，促进了当地的经济发展和民族团结。',
    fullEN: 'The Qinghai-Tibet Railway is the highest and longest plateau railway in the world, connecting Xining in Qinghai Province with Lhasa in the Tibet Autonomous Region, with a total length of 1,956 kilometers. The highest point of the railway reaches an altitude of 5,072 meters, with about 960 kilometers of the line located above 4,000 meters above sea level. Due to extreme natural conditions such as oxygen deficiency on the plateau and permafrost, the construction of the Qinghai-Tibet Railway was extremely challenging. Engineers overcame three major global technical challenges: plateau oxygen deficiency, permafrost, and ecological environment protection. The opening of the Qinghai-Tibet Railway ended Tibet\'s history of having no railway access, promoting local economic development and ethnic unity.',
    sentences: [
      {
        id: 'p30-s0',
        cn: '青藏铁路是世界上最高、最长的高原铁路，连接青海省西宁市和西藏自治区拉萨市，全长1956公里。',
        en: 'The Qinghai-Tibet Railway is the highest and longest plateau railway in the world, connecting Xining in Qinghai Province with Lhasa in the Tibet Autonomous Region, with a total length of 1,956 kilometers.',
        annotations: [
          { fragment: 'the highest and longest plateau railway', type: 'structure', label: '并列最高级', detail: '最高级 highest 和 longest 并列修饰 plateau railway。plateau = 高原。' },
          { fragment: 'connecting Xining...with Lhasa', type: 'structure', label: '现在分词补充', detail: 'connecting A with B = 连接A和B。分词补充说明铁路的起终点。connect...with...是固定搭配。' },
          { fragment: 'with a total length of 1,956 kilometers', type: 'structure', label: 'with 补充数据', detail: 'with a total length of = 全长...。with 结构在句末补充里程信息。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + is + 并列最高级 + connecting...with + with 补充',
          structureAnalysis: 'The Qinghai-Tibet Railway → is (the highest and longest plateau railway) → connecting (Xining with Lhasa) → with (a total length of 1,956km)',
          whyGood: '① 两个最高级并列，用词精准 ② connecting...with 分词处理\'连接A和B\' ③ with 结构补充里程数据，一句话包容三个信息点。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 plateau → highland / high-altitude；不会 connect...with → link...to / join...and',
          sentencePattern: '\'XX是世界上最高最长的YY，连接A省B和C区D，全长E公里\' → XX is the highest and longest YY in the world, connecting B in A with D in C, with a total length of E km',
          highScore: { en: 'The Qinghai-Tibet Railway is the highest and longest plateau railway in the world, connecting Xining in Qinghai Province with Lhasa in the Tibet Autonomous Region, with a total length of 1,956 kilometers.', note: '并列最高级 + connecting + with 补充' },
          lowScore: { en: '', note: '三句分离 + on the plateau 不如 plateau railway 简洁。评分 8-10 分档。' }
        }
      },
      {
        id: 'p30-s1',
        cn: '铁路最高点海拔5072米，全线约有960公里路段位于海拔4000米以上。',
        en: 'The highest point of the railway reaches an altitude of 5,072 meters, with about 960 kilometers of the line located above 4,000 meters above sea level.',
        annotations: [
          { fragment: 'reaches an altitude of', type: 'phrase', label: '海拔达到', detail: 'reach an altitude of + 数字 = 海拔达到...。altitude = 海拔/高度。比 height 专业。' },
          { fragment: 'with about 960 kilometers of the line located above', type: 'structure', label: 'with + n. + done 复合结构', detail: 'with + n. + 过去分词 = 伴随情况。960 kilometers of the line = 全线约960公里路段。located above = 位于...之上。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + reaches an altitude of + with + n. + located above...',
          structureAnalysis: 'The highest point of the railway → reaches (an altitude of 5,072m) → with (about 960 kilometers of the line located above 4,000m above sea level)',
          whyGood: '① reach an altitude of 是表达海拔的标准句式 ② with + n. + done 复合结构补充路段信息，紧凑高效。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 altitude → height / elevation；不会 sections → parts / segments / stretches',
          sentencePattern: '\'XX最高点海拔A米，全线约有C公里路段位于海拔B米以上\' → The highest point of XX reaches an altitude of A meters, with about C kilometers of the line located above B meters above sea level',
          highScore: { en: 'The highest point of the railway reaches an altitude of 5,072 meters, with about 960 kilometers of the line located above 4,000 meters above sea level.', note: 'reaches an altitude of + with + located above' },
          lowScore: { en: '', note: 'highest place 不如 highest point + is...high 不如 reaches an altitude of + 缺少 above sea level。评分 8-10 分档。' }
        }
      },
      {
        id: 'p30-s2',
        cn: '由于高原缺氧和永久冻土等极端自然条件，青藏铁路的建设难度极大。',
        en: 'Due to extreme natural conditions such as oxygen deficiency on the plateau and permafrost, the construction of the Qinghai-Tibet Railway was extremely challenging.',
        annotations: [
          { fragment: 'Due to extreme natural conditions such as', type: 'structure', label: 'Due to + 名词 + such as', detail: 'Due to = 由于（比 because of 正式）。such as 引出具体例子。' },
          { fragment: 'oxygen deficiency on the plateau and permafrost', type: 'vocab', label: '高原缺氧和永久冻土', detail: 'oxygen deficiency = 缺氧。permafrost = 永久冻土（perma = permanent，frost = 冻）。' },
          { fragment: 'was extremely challenging', type: 'vocab', label: '难度极大', detail: 'extremely challenging = 极具挑战性/难度极大。比 very difficult 更正式生动。' }
        ],
        technique: {
          difficulty: 3,
          structure: 'Due to + 名词短语 + such as A and B + 主语 + was extremely challenging',
          structureAnalysis: 'Due to extreme natural conditions such as (oxygen deficiency on the plateau and permafrost) → the construction of the Qinghai-Tibet Railway → was extremely challenging',
          whyGood: '① Due to...such as 原因状语清晰 ② oxygen deficiency 和 permafrost 两个专业术语精准 ③ extremely challenging 比 very difficult 更书面。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 oxygen deficiency → lack of oxygen / thin air；不会 permafrost → frozen ground / permanently frozen soil',
          sentencePattern: '\'由于A和B等极端自然条件，XX的C难度极大\' → Due to extreme natural conditions such as A and B, the C of XX was extremely challenging',
          highScore: { en: 'Due to extreme natural conditions such as oxygen deficiency on the plateau and permafrost, the construction of the Qinghai-Tibet Railway was extremely challenging.', note: 'Due to + such as + oxygen deficiency/permafrost + extremely challenging' },
          lowScore: { en: '', note: 'not enough oxygen 不如 oxygen deficiency + frozen ground 不如 permafrost。评分 8-10 分档。' }
        }
      },
      {
        id: 'p30-s3',
        cn: '工程师们攻克了三大世界性技术难题：高原缺氧、多年冻土和生态环境保护。',
        en: 'Engineers overcame three major global technical challenges: plateau oxygen deficiency, permafrost, and ecological environment protection.',
        annotations: [
          { fragment: 'overcame three major global technical challenges', type: 'structure', label: '攻克技术难题', detail: 'overcame = 攻克/克服。three major = 三大。global = 世界性的/全球性的。' },
          { fragment: 'plateau oxygen deficiency, permafrost, and ecological environment protection', type: 'vocab', label: '三大难题名称', detail: 'ecological environment protection = 生态环境保护。三项技术难题用冒号引出列举。' }
        ],
        technique: {
          difficulty: 2,
          structure: '主语 + overcame + 数量+adj.+n. + 冒号列举',
          structureAnalysis: 'Engineers → overcame → three major global technical challenges: → (plateau oxygen deficiency, permafrost, and ecological environment protection)',
          whyGood: '① overcame...challenges 精准对应\'攻克难题\' ② 冒号引出三项并列，视觉清晰 ③ global 比 worldwide/in the world 更简洁。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 overcame → solved / conquered / dealt with；不会 ecological → environmental / eco- / green',
          sentencePattern: '\'XX攻克了N大世界性技术难题：A、B和C\' → XX overcame N major global technical challenges: A, B, and C',
          highScore: { en: 'Engineers overcame three major global technical challenges: plateau oxygen deficiency, permafrost, and ecological environment protection.', note: 'overcame + three major global challenges + 冒号列举' },
          lowScore: { en: '', note: 'solved 不如 overcame + not enough oxygen 不专业 + protecting nature 不如 ecological protection。评分 8-10 分档。' }
        }
      },
      {
        id: 'p30-s4',
        cn: '青藏铁路的通车结束了西藏不通铁路的历史，促进了当地的经济发展和民族团结。',
        en: 'The opening of the Qinghai-Tibet Railway ended Tibet\'s history of having no railway access, promoting local economic development and ethnic unity.',
        annotations: [
          { fragment: 'The opening of...ended...history of', type: 'structure', label: '名词化主语 + ended', detail: 'The opening = 通车（名词化）。ended the history of = 结束了...的历史。' },
          { fragment: 'having no railway access', type: 'phrase', label: '不通铁路', detail: 'having no railway access = 没有铁路通达。access = 通达/进入（名词）。比 having no railway 更正式。' },
          { fragment: 'promoting local economic development and ethnic unity', type: 'structure', label: '现在分词结果状语', detail: 'promoting = 促进了（分词表结果）。ethnic unity = 民族团结。' }
        ],
        technique: {
          difficulty: 2,
          structure: 'The opening of + 主语 + ended... + promoting 分词结果',
          structureAnalysis: 'The opening of the Qinghai-Tibet Railway → ended (Tibet\'s history of having no railway access) → (, ) promoting (local economic development and ethnic unity)',
          whyGood: '① The opening 名词化简洁 ② ended the history of 准确表达\'结束历史\' ③ promoting 分词合并两句话 ④ ethnic unity 术语准确。',
          keyVocab: ['', ''],
          substitutionGuide: '不会 ended the history → made...no longer a place without / made it the first time for；不会 ethnic unity → unity of different ethnic groups / national unity',
          sentencePattern: '\'XX的通车结束了A不通B的历史，促进了当地的C和D\' → The opening of XX ended A\'s history of having no B, promoting local C and D',
          highScore: { en: 'The opening of the Qinghai-Tibet Railway ended Tibet\'s history of having no railway access, promoting local economic development and ethnic unity.', note: 'The opening + ended the history + promoting + ethnic unity' },
          lowScore: { en: '', note: '多句分散 + opened 不如 The opening 名词化 + makes...united 口语化。评分 8-10 分档。' }
        }
      }
    ]
  }
];
