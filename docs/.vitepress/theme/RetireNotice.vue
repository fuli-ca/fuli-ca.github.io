<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

/* ===================== 停站提示条 · 配置 =====================
 * 想改文案 / 时长 / 显示范围，只动这个对象就行，不用碰下面的逻辑。
 * ========================================================== */
const CONFIG = {
  // 显示时长（毫秒）。15 秒写 15000，60 秒写 60000。
  duration: 30000,

  // 文案（拼接顺序：icon + text + 链接 + suffix）
  icon: '🔔',
  text: '本网站已经停止维护！请访问',
  linkText: '奥马哈扑克学校 ploschool.com',
  linkHref: 'https://ploschool.com',
  suffix: '，谢谢！',

  // 「每次访问只显示一次」的标记位 —— 存的是**起始时间戳**（毫秒），不是布尔值。
  // 存时间戳才能让这 30 秒跨翻页连续走完：用户第 5 秒翻到下一篇文章时，
  // 提示条继续显示剩下的 25 秒，而不是重新计时或干脆消失。
  // 用 sessionStorage：关掉浏览器标签页就重置，下次访问会重新提示一次。
  sessionKey: 'fuli-retire-notice-started-at',

  // 哪些页面不显示。
  // 书籍 / 专栏的首页（index.md）已经在 markdown 里写了同样的提示，避免一页出现两次。
  shouldShow(relativePath) {
    if (!relativePath) return false
    if (relativePath.startsWith('404')) return false
    if (relativePath === 'index.md') return false          // 站点首页（layout: home，其实也不会走到这里）
    if (relativePath.endsWith('/index.md')) return false   // /plo4/index.md、/plo5/index.md、/poker/index.md
    return true
  }
}
/* ========================================================== */

const { page } = useData()
const visible = ref(false)
let timer = null

// sessionStorage 不可用（隐私模式 / 禁用存储）时的兜底。
// 放在模块作用域：SPA 翻页不会重置，刷新页面才会重置 ——
// 至少保证「同一次访问内不会每翻一页就弹一次」。
let memoryStartedAt = 0

function readStartedAt() {
  try {
    const v = Number(sessionStorage.getItem(CONFIG.sessionKey)) || 0
    if (v) return v
  } catch (e) {}
  return memoryStartedAt
}

function writeStartedAt(value) {
  memoryStartedAt = value
  try {
    sessionStorage.setItem(CONFIG.sessionKey, String(value))
  } catch (e) {}
}

function start() {
  clearTimeout(timer)
  visible.value = false

  if (!CONFIG.shouldShow(page.value.relativePath)) return

  const now = Date.now()
  const startedAt = readStartedAt()

  // 本次访问已经完整展示过，之后翻任何文章页都不再出现
  if (startedAt && now - startedAt >= CONFIG.duration) return

  // 首次进入文章页时记下起点。之后翻页沿用同一个起点，
  // 所以这 30 秒是「整段连续」的 —— 翻页不会重新计时，也不会中途断掉。
  if (!startedAt) writeStartedAt(now)

  const begin = startedAt || now
  visible.value = true
  timer = setTimeout(() => {
    visible.value = false
  }, CONFIG.duration - (now - begin))
}

onMounted(start)

// VitePress 是前端路由，翻页不会重新挂载组件。
// 不监听路径变化的话，第一次消失后就再也不会出现了。
watch(() => page.value.relativePath, start)

onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <Teleport to="body">
    <Transition name="retire-fade">
      <div v-if="visible" class="retire-notice" role="status">
        {{ CONFIG.icon }} {{ CONFIG.text }}
        <a :href="CONFIG.linkHref" target="_blank" rel="noopener">{{ CONFIG.linkText }}</a>{{ CONFIG.suffix }}
      </div>
    </Transition>
  </Teleport>
</template>
