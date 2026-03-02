<!-- .vitepress/theme/Twikoo.vue -->
<template>
  <div class="twikoo-container">
    <div id="tcomment"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

declare global {
  interface Window {
    twikoo: {
      init: (config: {
        envId: string
        el: string
        region?: string
        path?: string
      }) => Promise<void>
    }
  }
}

export default defineComponent({
  name: 'TwikooComment',
  methods: {
    initTwikoo(): void {
      window.twikoo.init({
        envId: 'https://twikoo-teal-delta.vercel.app/', // 注意修正了双https://
        el: '#tcomment',
        region: 'ap-guangzhou',
        path: window.location.pathname
      }).catch((err: Error) => {
        console.error('Twikoo初始化失败:', err)
      })
    }
  },
  mounted() {
    // 使用指定版本 1.6.41
    const version = '1.6.41'
    
    if (window.twikoo) {
      this.initTwikoo()
      return
    }
    
    const script = document.createElement('script')
    script.src = `https://cdn.jsdelivr.net/npm/twikoo@${version}/dist/twikoo.all.min.js`
    script.onload = () => this.initTwikoo()
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
.twikoo-container {
  margin: 2rem auto;
  max-width: 800px;
  padding: 0 1rem;
}
</style>