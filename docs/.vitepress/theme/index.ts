import DefaultTheme from 'vitepress/theme'
import './custom.css'

import Twikoo from './twikoo.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TwikooComment', Twikoo)
  }
}