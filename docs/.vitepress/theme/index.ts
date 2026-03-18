import DefaultTheme from 'vitepress/theme'
import './custom.css'

import Twikoo from './twikoo.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('TwikooComment', Twikoo)
  }
}