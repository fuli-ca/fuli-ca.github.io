import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({ 
  base: '/',
  title: "复利网",
  description: "PLO 扑克技术学习交流！",

  // 添加 Google Analytics 跟踪代码
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    // 添加 canonical 标签，指定规范网址
    ['link', { rel: 'canonical', href: 'https://fuli.ca/' }],
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
    logo: '/fulilogo-1.png',
    outline: [1, 3],
    aside: true,
    docFooter: {
      prev: false,
      next: false
    },
    // https://vitepress.dev/reference/default-theme-config
    notFound: {
      title: '页面不存在',
      quote: '这个页面不存在，可能已经移动或删除。欢迎返回首页继续学习 PLO 扑克技术。',
      linkLabel: '返回首页',
      linkText: '🏠 复利网首页'
    },   
    nav: [
      { text: '主页', link: '/' },
      { text: 'PLO4', link: '/plo4/' },
      { text: 'PLO5', link: '/plo5/' },
      { text: 'Poker', link: '/poker/' },
      { text: '关于', link: '/about/' },
      { text: '留言板', link: '/comments/' }
    ],

    sidebar: {
      
      '/plo4/': generateSidebar({
        sortMenusByFrontmatterDate: true,
        documentRootPath: 'docs',
        scanStartPath: '/plo4/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true
      }),

      '/plo5/': generateSidebar({
        sortMenusByFrontmatterDate: true,
        documentRootPath: 'docs',
        scanStartPath: '/plo5/',
        useTitleFromFrontmatter: true,
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        useFolderLinkFromIndexFile: true,
        collapsed: true
      }),

      '/poker/': generateSidebar({
        sortMenusByFrontmatterDate: true,
        documentRootPath: 'docs',
        scanStartPath: '/poker/',
        useTitleFromFrontmatter: true,
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
      ],
    footer: {      
      copyright: `版权所有 © 2026 复利网 fuli.ca`,
    }
  },
})