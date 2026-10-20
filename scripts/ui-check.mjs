// 无头 Chrome 交互校验：走一遍练习闭环、限时模考、知识库绕行和移动端导航。
// 前置：dev server 已运行（默认 http://localhost:5173/cet-translation-trainer/）
// 运行：node scripts/ui-check.mjs

import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const APP_URL = process.env.APP_URL || 'http://localhost:5173/cet-translation-trainer/'
const CHROME = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const PORT = 9333
const SHOTS = join(process.cwd(), 'ui-check-shots')

const failures = []
const pass = []
const ok = (cond, msg) => {
  if (cond) pass.push(msg)
  else failures.push(msg)
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const chrome = spawn(CHROME, [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${join(tmpdir(), `cet-ui-check-${Date.now()}`)}`,
  '--window-size=1440,900',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank',
], { stdio: 'ignore' })

let ws
let nextId = 1
const pending = new Map()
const pageErrors = []

function send(method, params = {}) {
  const id = nextId++
  ws.send(JSON.stringify({ id, method, params }))
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject })
    setTimeout(() => {
      if (pending.has(id)) {
        pending.delete(id)
        reject(new Error(`CDP 超时：${method}`))
      }
    }, 15000)
  })
}

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', {
    expression,
    returnByValue: true,
    awaitPromise: true,
  })
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || '页面脚本异常')
  }
  return result.result?.value
}

async function waitFor(expression, timeout = 8000, label = expression) {
  const started = Date.now()
  while (Date.now() - started < timeout) {
    try {
      if (await evaluate(expression)) return true
    } catch {
      // 页面还在导航，继续等
    }
    await sleep(120)
  }
  failures.push(`等待超时：${label}`)
  return false
}

const textIncludes = text => `document.body.innerText.includes(${JSON.stringify(text)})`

async function clickButton(text) {
  const clicked = await evaluate(`(() => {
    const btn = [...document.querySelectorAll('button')].find(b => b.textContent.trim().includes(${JSON.stringify(text)}))
    if (!btn) return false
    btn.click()
    return true
  })()`)
  ok(clicked, `可点击「${text}」`)
  await sleep(250)
}

async function typeInto(placeholder, value) {
  const typed = await evaluate(`(() => {
    const el = [...document.querySelectorAll('textarea,input')].find(e => e.placeholder && e.placeholder.includes(${JSON.stringify(placeholder)}))
    if (!el) return false
    const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, ${JSON.stringify(value)})
    el.dispatchEvent(new Event('input', { bubbles: true }))
    return true
  })()`)
  ok(typed, `找到输入框「${placeholder}」`)
  await sleep(200)
}

async function screenshot(name) {
  const result = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false })
  await writeFile(join(SHOTS, `${name}.png`), Buffer.from(result.data, 'base64'))
}

try {
  await mkdir(SHOTS, { recursive: true })

  // 等 Chrome 起来并找到页面 target
  let target
  for (let i = 0; i < 50 && !target; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()
      target = list.find(t => t.type === 'page')
    } catch {
      await sleep(200)
    }
  }
  if (!target) throw new Error('无法连接无头 Chrome')

  ws = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true })
    ws.addEventListener('error', reject, { once: true })
  })
  ws.addEventListener('message', event => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id)
      pending.delete(msg.id)
      if (msg.error) reject(new Error(msg.error.message))
      else resolve(msg.result)
    } else if (msg.method === 'Runtime.exceptionThrown') {
      pageErrors.push(msg.params.exceptionDetails.exception?.description || msg.params.exceptionDetails.text)
    }
  })

  await send('Page.enable')
  await send('Runtime.enable')
  await send('Page.navigate', { url: APP_URL })
  await waitFor(textIncludes('CET 翻译备考'), 15000, '首页加载')
  await evaluate('localStorage.clear()')
  await send('Page.reload', { ignoreCache: true })
  await waitFor(textIncludes('学习方法论'), 15000, '首页渲染')

  ok(await evaluate(textIncludes('真题')), '首页出现题源标识')
  ok(await evaluate(textIncludes('辰轩')), '首页显示创作者版权信息')
  ok(await evaluate(textIncludes('认知天性')), '公告交代《认知天性》理论来源')
  ok(await evaluate(textIncludes('晓燕')), '公告提到晓燕老师的拆句/替换方法')
  ok(await evaluate(textIncludes('考鸭TV')), '公告提到考鸭TV的翻译板块')
  ok(await evaluate(textIncludes('提取练习')), '公告讲到提取练习')
  ok(await evaluate(textIncludes('大部分同学卡在哪')), '公告列出常见翻译痛点')
  ok(await evaluate(textIncludes('写 → 对 → 改 → 评')), '公告讲清四步闭环')
  await screenshot('01-home')

  // 练习闭环
  await clickButton('真题练习')
  await waitFor(textIncludes('提交翻译'), 8000, '练习页加载')
  ok(await evaluate(textIncludes('尊师传统')), '2026.6 篇目出现在篇目列表')
  await clickButton('尊师传统')
  await waitFor(textIncludes('2026.6'), 4000, '切换篇目')
  ok(await evaluate(textIncludes('2026.6')), '篇目显示 2026.6 年份')
  ok(await evaluate(textIncludes('真题')), '篇目显示「真题」来源徽标')

  await typeInto('先尝试写出你的翻译', 'Teachers are important.')
  await clickButton('提交翻译')
  await waitFor(textIncludes('对照后修订'), 6000, '提交后进入修订')
  ok(await evaluate(textIncludes('完成上面的修订后即可评分')), '未完成修订时评分入口锁定')
  await screenshot('02-attempt-revision')

  await typeInto('在原译基础上修改', 'Teachers are important.')
  await clickButton('完成修订，去评分')
  await waitFor(textIncludes('很熟'), 5000, '修订后出现自评')
  await clickButton('很熟')
  await waitFor(textIncludes('提交翻译'), 5000, '评分后推进到下一句')
  ok(await evaluate(textIncludes('上一题你自评')), '自评与系统建议差距大时出现校准提示')
  await screenshot('03-calibration')

  // 限时模考
  await clickButton('限时模考')
  await waitFor(textIncludes('开始模考'), 8000, '模考页加载')
  await clickButton('开始模考')
  await waitFor(textIncludes('提前交卷'), 6000, '计时开始')
  const timerText = await evaluate(`document.body.innerText.match(/\\d{2}:\\d{2}/)?.[0] || ''`)
  ok(Boolean(timerText), `倒计时显示（${timerText}）`)
  await typeInto('在这里完成整篇翻译', 'Teachers have long been respected in China. There is an old saying that a teacher for a day is a father for a lifetime. In 1985, China set September 10 as Teachers Day.')
  await clickButton('提前交卷')
  await waitFor(textIncludes('参考分档'), 8000, '交卷后显示分档')
  ok(await evaluate(textIncludes('13-15') || textIncludes('10-12') || textIncludes('7-9') || textIncludes('4-6')), '显示参考分档区间')
  await screenshot('04-exam-result')

  // 知识库：绕行训练
  await clickButton('知识库')
  await waitFor(textIncludes('绕行训练'), 8000, '知识库加载')
  await clickButton('绕行训练')
  await waitFor(textIncludes('个句子可练'), 10000, '绕行训练列表')
  const fallbackCount = await evaluate(`[...document.querySelectorAll('button')].filter(b => b.textContent.includes('绕行训练'))[0]?.textContent || ''`)
  ok(/\((\d+)\)/.test(fallbackCount), `绕行训练有内容（${fallbackCount.trim()}）`)
  await screenshot('05-fallback')

  // 移动端「更多」菜单
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true })
  await sleep(500)
  const hasMore = await evaluate(`[...document.querySelectorAll('nav button')].some(b => b.textContent.trim() === '更多')`)
  ok(hasMore, '移动端出现「更多」入口')
  if (hasMore) {
    await evaluate(`(() => {
      const btn = [...document.querySelectorAll('nav button')].find(b => b.textContent.trim() === '更多')
      btn?.click()
    })()`)
    await waitFor(textIncludes('错题本'), 5000, '更多菜单展开')
    ok(await evaluate(textIncludes('限时模考') && textIncludes('知识库')), '更多菜单含模考/知识库/错题本')
    await screenshot('06-mobile-more')

    await evaluate(`(() => {
      const btn = [...document.querySelectorAll('nav button')].find(b => b.textContent.trim() === '首页')
      btn?.click()
    })()`)
    await waitFor(textIncludes('这不是一个会骂你的翻译网站'), 5000, '移动端公告渲染')
    ok(await evaluate(textIncludes('不装神秘') && textIncludes('不唯高级') && textIncludes('不白看答案')), '移动端公告内容完整')
    await screenshot('07-mobile-home')
  }

  ok(pageErrors.length === 0, `页面无未捕获异常${pageErrors.length ? `（${pageErrors[0]}）` : ''}`)

  await send('Browser.close').catch(() => {})
} catch (err) {
  failures.push(`脚本异常：${err.message}`)
} finally {
  try { ws?.close() } catch {}
  try { chrome.kill() } catch {}
}

console.log(`通过 ${pass.length} 项`)
if (failures.length > 0) {
  console.error(`失败 ${failures.length} 项：`)
  failures.forEach(f => console.error(`  ✗ ${f}`))
  process.exitCode = 1
} else {
  console.log(`✓ UI 交互校验通过，截图位于 ${SHOTS}`)
}
