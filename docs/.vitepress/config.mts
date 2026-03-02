import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({ 
  base: '/',
  title: "复利网",
  description: "PLO 扑克技术学习交流！",

  // 添加 Google Analytics 跟踪代码
  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-RTWWHRVC45' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RTWWHRVC45');
    `],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-srw2M5E7ML' }]
  ],
  themeConfig: {
    docFooter: {
      prev: false,
      next: false
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PLO4', link: '/PLO4/' },
      { text: 'PLO5', link: '/PLO5/' },
      { text: 'Poker', link: '/Poker/' },
      { text: '关于', link: '/about/' },
      { text: '留言板', link: '/comments/' }
    ],

    sidebar: {
      '/PLO4/': generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: '/PLO4/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true
      }),

      '/PLO5/': generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: '/PLO5/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true
      }),

      '/Poker/': generateSidebar({
        documentRootPath: 'docs',
        scanStartPath: '/Poker/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true
      })
    },
    search: {
        provider: "local",
        options: {
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              noResultsText: "无法找到相关结果",
              resetButtonTitle: "清除查询条件",
              footer: {
                selectText: "选择",
                navigateText: "切换",
              },
            },
          },
        },
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
  },
})


