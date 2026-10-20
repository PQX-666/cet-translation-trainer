import { useState } from 'react'
import {
  Megaphone, ChevronDown, X, ArrowRight, PenLine, Eye, Wrench, Star,
  ShieldCheck, Timer, Library, HardDriveDownload, Scissors, Video, Brain,
  Sparkles, AlertCircle, Target, RotateCw, CalendarDays, GraduationCap, Repeat,
} from 'lucide-react'

const STORAGE_KEY = 'cet-announcement-collapsed-v1'

const theory = [
  {
    icon: Scissors,
    title: '晓燕老师：拆句 + 词义替换',
    text: '把中文长句拆成几个主谓齐全的简单英文句；遇到不会的文化词、专有名词，用上位词、近义词或一句大白话绕过去。公开评价里，这套方法常被说成“基础弱也能上手”；也有人提醒她个人风格强，挑对自己有用的吸收就好。',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-500/5 border-amber-100 dark:border-amber-500/10',
  },
  {
    icon: Video,
    title: '考鸭TV：把题型拆成步骤',
    text: '它的口碑主要在听力，翻译板块更像“应试技巧拆解”。公开评价对翻译课的深度褒贬不一，有人说句型结构重复、单词积累不够。所以我只借它“按步骤拆题”的思路，没有把它当成唯一答案。',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-500/5 border-blue-100 dark:border-blue-500/10',
  },
  {
    icon: Brain,
    title: '《认知天性》：别光看，要提取',
    text: '书里几个结论直接影响了这个网站：自己先写（提取练习）、隔几天再见（间隔）、别一次只练一个话题（穿插）、先难受再反馈（合意困难）、错了马上纠正（反馈）。所以这里不负责让你“看懂”，只负责让你“写出来”。',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-500/5 border-purple-100 dark:border-purple-500/10',
  },
  {
    icon: Sparkles,
    title: '作者 + AI：人判断，AI 搬砖',
    text: '题库、要点标注、语法规则整理有 AI 参与，但评分不是 AI 拍脑袋：系统只统计参考译文里的关键表达你命中了几个，再加几条高置信度的语法和连贯性提醒。AI 省的是整理时间，不是替你思考。',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-500/5 border-green-100 dark:border-green-500/10',
  },
]

const pains = [
  '视频收藏了一堆，动笔次数为零',
  '逐字直译，中文语序直接搬，写出来像机翻',
  '长句写到一半，忘了主语是谁',
  '文化词、专有名词一卡，整句直接放弃',
  '写完没人批改，对错全靠感觉',
  '看完答案觉得“我会了”，下次照样错',
  '平时只练单句，考前没完整写过 30 分钟',
]

const solutions = [
  { pain: '不敢写、写得少', fix: '先写再对照，提交才算一次练习' },
  { pain: '不知道漏了什么', fix: '关键表达命中统计 + 语法/连贯提醒' },
  { pain: '改完就忘', fix: '句子级间隔复习，按记忆节奏再来' },
  { pain: '不会的词卡死', fix: '绕行训练：用简单英语把意思说圆' },
  { pain: '没练过整篇', fix: '全文带练 + 30 分钟限时模考' },
  { pain: '错的反复错', fix: '错题本自动收留，考前集中清算' },
]

const steps = [
  {
    icon: PenLine,
    name: '写',
    text: '不看答案，硬写。写崩了也算一次提取，比读十遍参考译文有用。',
  },
  {
    icon: Eye,
    name: '对',
    text: '提交后对照参考译文，重点看哪些信息没译出来，而不是只盯高级词。',
  },
  {
    icon: Wrench,
    name: '改',
    text: '补漏、修病句、换掉中式表达。这是最涨分的一步，别跳过。',
  },
  {
    icon: Star,
    name: '评',
    text: '诚实点「忘了 / 模糊 / 记得 / 很熟」；和系统建议差距大时，它会提醒你校准。',
  },
]

const routines = [
  {
    icon: CalendarDays,
    title: '每天 15–20 分钟',
    text: '3–5 句，完整走一遍写、对、改、评。别贪多，贵在天天见。',
  },
  {
    icon: Repeat,
    title: '每周 1 篇 + 1 次模考',
    text: '全文带练练篇章结构，限时模考练 30 分钟的时间分配。',
  },
  {
    icon: GraduationCap,
    title: '基础弱：先绕行',
    text: '先快速记忆高频词，再用绕行训练学会“不会也能说圆”，最后回到逐句。',
  },
  {
    icon: Target,
    title: '考前两周',
    text: '模考 + 错题本 + 到期复习。别再开新坑，把会的变成写得出的。',
  },
]

const promises = [
  {
    icon: ShieldCheck,
    title: '不装神秘',
    text: '没有暗处打分的 AI 老师，规则命中多少就是多少。',
  },
  {
    icon: Star,
    title: '不唯高级',
    text: '15 分是整体评分：先完整、再正确、最后才漂亮。',
  },
  {
    icon: Eye,
    title: '不白看答案',
    text: '点「直接看答案」只记历史，不进复习队列，骗不了系统。',
  },
]

export default function AnnouncementBanner({ onNavigate }) {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })

  const toggle = () => {
    const next = !collapsed
    setCollapsed(next)
    try {
      localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
    } catch {
      // 隐私模式下写不了 localStorage，公告仍然可以正常展开
    }
  }

  if (collapsed) {
    return (
      <button
        onClick={toggle}
        className="w-full card px-4 py-2.5 flex items-center gap-2 text-left hover:border-amber-300 dark:hover:border-amber-500/30 transition-colors"
      >
        <Megaphone size={15} className="text-amber-500 flex-shrink-0" />
        <span className="text-xs text-ink-600 dark:text-ink-300 font-medium">使用公告</span>
        <span className="text-xs text-ink-400 dark:text-ink-500 truncate">这套练习是怎么设计出来的？点开看看</span>
        <ChevronDown size={14} className="text-ink-400 ml-auto flex-shrink-0" />
      </button>
    )
  }

  return (
    <section className="card overflow-hidden border-amber-200 dark:border-amber-500/20">
      <div className="px-5 pt-5 pb-4 bg-gradient-to-br from-amber-50 to-cream-50 dark:from-amber-500/10 dark:to-ink-800">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center flex-shrink-0">
            <Megaphone size={18} className="text-amber-600 dark:text-amber-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="tag bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 text-[10px]">公告</span>
              <span className="text-[11px] text-ink-400 dark:text-ink-500">写给第一次来的你 · 约 3 分钟</span>
            </div>
            <h2 className="text-lg font-bold text-ink-800 dark:text-cream-100 mt-1">
              这不是一个会骂你的翻译网站
            </h2>
            <p className="text-xs text-ink-600 dark:text-ink-300 leading-relaxed mt-1.5">
              但它也不是拍脑袋做出来的。它来自一个被翻译题反复折磨的学生：看了晓燕老师、考鸭TV
              的翻译课，翻了《认知天性》，把自己的踩坑记录和 AI 的整理能力拼在一起，做成了你现在看到的练习闭环。
            </p>
          </div>
          <button
            onClick={toggle}
            className="text-ink-400 hover:text-ink-600 dark:hover:text-cream-200 flex-shrink-0"
            aria-label="收起公告"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className="px-5 py-5 space-y-6">
        {/* 理论来源 */}
        <section>
          <div className="text-xs font-bold text-ink-700 dark:text-cream-200 mb-2 flex items-center gap-1.5">
            <Brain size={13} className="text-purple-500" />
            为什么这套方法值得试
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {theory.map(t => (
              <div key={t.title} className={`rounded-xl p-3 border ${t.bg}`}>
                <div className={`flex items-center gap-1.5 text-xs font-bold ${t.color}`}>
                  <t.icon size={13} />
                  {t.title}
                </div>
                <p className="text-[11px] text-ink-600 dark:text-ink-300 leading-relaxed mt-1.5">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-ink-400 dark:text-ink-500 leading-relaxed mt-2">
            说明：以上是对公开课程和公开评价的归纳，不是对任何老师的官方背书；方法适合自己才最重要。
          </p>
        </section>

        {/* 痛点 */}
        <section>
          <div className="text-xs font-bold text-ink-700 dark:text-cream-200 mb-2 flex items-center gap-1.5">
            <AlertCircle size={13} className="text-red-500" />
            大部分同学卡在哪
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
            {pains.map(p => (
              <div key={p} className="flex items-start gap-1.5 text-[11px] text-ink-600 dark:text-ink-300 leading-relaxed">
                <span className="w-1 h-1 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 系统怎么接 */}
        <section>
          <div className="text-xs font-bold text-ink-700 dark:text-cream-200 mb-2 flex items-center gap-1.5">
            <Target size={13} className="text-amber-500" />
            这个系统怎么接住这些痛点
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {solutions.map(s => (
              <div key={s.pain} className="flex items-center gap-2 rounded-lg bg-cream-50 dark:bg-ink-900 px-2.5 py-2">
                <span className="text-[11px] text-ink-500 dark:text-ink-400 flex-shrink-0">{s.pain}</span>
                <ArrowRight size={11} className="text-amber-400 flex-shrink-0" />
                <span className="text-[11px] font-medium text-ink-700 dark:text-cream-200">{s.fix}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 四步 */}
        <section>
          <div className="text-xs font-bold text-ink-700 dark:text-cream-200 mb-2 flex items-center gap-1.5">
            <RotateCw size={13} className="text-blue-500" />
            每一句都走四步：写 → 对 → 改 → 评
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {steps.map((s, i) => (
              <div key={s.name} className="flex items-start gap-2 bg-cream-50 dark:bg-ink-900 rounded-lg p-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <div className="text-[11px] font-bold text-ink-700 dark:text-cream-200 flex items-center gap-1">
                    <s.icon size={11} /> {s.name}
                  </div>
                  <div className="text-[10px] text-ink-500 dark:text-ink-400 leading-relaxed mt-0.5">{s.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 具体用法 */}
        <section>
          <div className="text-xs font-bold text-ink-700 dark:text-cream-200 mb-2 flex items-center gap-1.5">
            <CalendarDays size={13} className="text-green-500" />
            具体怎么用（照做就行）
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {routines.map(r => (
              <div key={r.title} className="rounded-xl border border-cream-200 dark:border-ink-700 p-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-ink-700 dark:text-cream-200">
                  <r.icon size={12} className="text-green-500" />
                  {r.title}
                </div>
                <p className="text-[11px] text-ink-500 dark:text-ink-400 leading-relaxed mt-1">{r.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 三不 */}
        <section>
          <div className="text-xs font-bold text-ink-700 dark:text-cream-200 mb-2">三条底线，先小人后君子</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {promises.map(p => (
              <div key={p.title} className="rounded-xl bg-cream-50 dark:bg-ink-900 border border-cream-200 dark:border-ink-700 p-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-ink-700 dark:text-cream-200">
                  <p.icon size={12} className="text-amber-500" />
                  {p.title}
                </div>
                <p className="text-[10px] text-ink-500 dark:text-ink-400 leading-relaxed mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 工具提示 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
          <div className="flex items-start gap-1.5 text-[11px] text-ink-500 dark:text-ink-400 leading-relaxed">
            <Megaphone size={11} className="text-amber-500 mt-0.5 flex-shrink-0" />
            <span>每道题都标了来源：真题 / 真题改写 / 模拟题，不混着卖。</span>
          </div>
          <div className="flex items-start gap-1.5 text-[11px] text-ink-500 dark:text-ink-400 leading-relaxed">
            <Timer size={11} className="text-amber-500 mt-0.5 flex-shrink-0" />
            <span>想找考前手感，去「限时模考」完整写 30 分钟。</span>
          </div>
          <div className="flex items-start gap-1.5 text-[11px] text-ink-500 dark:text-ink-400 leading-relaxed">
            <Library size={11} className="text-amber-500 mt-0.5 flex-shrink-0" />
            <span>关键词不会？去知识库的「绕行训练」，先学会用简单英语把意思说圆。</span>
          </div>
          <div className="flex items-start gap-1.5 text-[11px] text-ink-500 dark:text-ink-400 leading-relaxed">
            <HardDriveDownload size={11} className="text-amber-500 mt-0.5 flex-shrink-0" />
            <span>不用注册。数据只存在你这台电脑的浏览器里，记得偶尔导出备份。</span>
          </div>
        </div>

        <div className="rounded-xl bg-cream-50 dark:bg-ink-900 border border-cream-200 dark:border-ink-700 px-3.5 py-3">
          <p className="text-xs text-ink-700 dark:text-cream-200 leading-relaxed">
            最后一句：基础差不是问题，不敢写才是。先写一句，哪怕只有
            <span className="font-serif italic mx-1">“Teachers are important.”</span>
            —— 系统不会笑你，只会默默记下：这句还得复习。
          </p>
          <div className="flex items-center gap-3 mt-2.5">
            <button
              onClick={() => onNavigate('practice')}
              className="btn-primary text-xs flex items-center gap-1.5"
            >
              好，我先写一句 <ArrowRight size={12} />
            </button>
            <button
              onClick={toggle}
              className="text-[11px] text-ink-400 dark:text-ink-500 hover:text-ink-600 dark:hover:text-cream-300 underline underline-offset-2"
            >
              收起来，我要开始学了
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
