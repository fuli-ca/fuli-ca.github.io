import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// 本站域名（备用/已停维护版本一端）。
const SITE = 'https://fuli.ca'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  base: '/',

  // SEO
  title: '复利网',
  titleTemplate: ':title | 复利网',
  description:
    '本网站已停止维护，内容请访问 www.ploschool.com。原复利网提供 PLO4、PLO5 策略教程、GTO 分析与扑克书籍资料。',

  // URL优化
  cleanUrls: true,


  // Sitemap 已移除：整站 noindex，不再向搜索引擎推送 URL


  // 跨域首选声明：本站内容与 ploschool.com 重复，
  // 新站 ploschool.com 是首选版本，本站为备用/已停维护版本。
  //
  // 注意：这里的 canonical 仍然指向自己（fuli.ca），不要改成跨域指向 ploschool.com。
  // 原因是本站已整站 noindex —— noindex 是「强制指令」，搜索引擎会把本页从索引移除；
  // 而跨域 canonical 只是「提示」，Google 并不保证遵循。
  // 两者叠加没有额外收益，反而会掩盖 issue、让 GSC 报告更难读。
  // 「旧站不再被索引」这件事由 noindex 独立完成，这也是 Google 对
  // 联合发布（syndication）场景的现行推荐做法。
  //
  // 以下两个集合仅为文档用途保留，代码不依赖它们做分支判断：
  // 整站（179 页）一律 noindex，不做任何页面级豁免。
  // 其中 161 页与 ploschool.com 内容重复；另外 18 页为本站独有
  // （主要是 /poker/ 下的文章），经与站主确认，同样不索引。

  // Canonical + 整站退出搜索引擎索引
  transformHead({ pageData }) {

    let url = pageData.relativePath
      .replace(/\.md$/, '')
      .replace(/index$/, '')

    const canonical =
      url === ''
        ? `${SITE}/`
        : `${SITE}/${url}`


    return [
      [
        'link',
        {
          rel: 'canonical',
          href: canonical
        }
      ],


      // 站点已停止维护，整站退出搜索引擎索引。
      // noindex 只影响搜索收录，不影响用户直接访问；
      // 保留 follow，让页面上指向 ploschool.com 的链接继续传递权重。
      // 这是「旧站让位」的主力机制：强制、确定性生效。
      [
        'meta',
        {
          name: 'robots',
          content: 'noindex, follow'
        }
      ]
    ]
  },


  head: [
    ['meta', {
      name: 'baidu-site-verification',
      content: 'codeva-Il5YRfUhLN'
    }],
    // favicon
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],

    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      }
    ],


    // Google Analytics
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-L6RQKQKSGL'
      }
    ],


    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];

      function gtag(){
        dataLayer.push(arguments);
      }

      gtag('js', new Date());

      gtag('config', 'G-L6RQKQKSGL');
      `
    ],

  ],



  themeConfig: {


    logo: '/fulilogo-1.png',


    outline: [1, 3],


    aside: true,


    docFooter: {
      prev: false,
      next: false
    },



    // 404
    notFound: {

      title: '页面不存在',

      quote:
        '这个页面不存在，可能已经移动或删除。欢迎返回首页继续学习 PLO 扑克技术。',

      linkLabel:
        '🏠 返回复利网首页'

    },



    nav: [

      {
        text: '主页',
        link: '/'
      },

      {
        text: 'PLO4',
        link: '/plo4/'
      },

      {
        text: 'PLO5',
        link: '/plo5/'
      },

      {
        text: 'Poker',
        link: '/poker/'
      },

      {
        text: '关于',
        link: '/about/'
      },

      {
        text: '留言板',
        link: '/comments/'
      }

    ],



    sidebar: {


      '/plo4/':
        generateSidebar({

          sortMenusByFrontmatterDate: true,

          documentRootPath: 'docs',

          scanStartPath: '/plo4/',

          useTitleFromFrontmatter: true,

          useTitleFromFileHeading: true,

          useFolderTitleFromIndexFile: true,

          useFolderLinkFromIndexFile: true,

          collapsed: true

        }),



      '/plo5/':
        generateSidebar({

          sortMenusByFrontmatterDate: true,

          documentRootPath: 'docs',

          scanStartPath: '/plo5/',

          useTitleFromFrontmatter: true,

          useTitleFromFileHeading: true,

          useFolderTitleFromIndexFile: true,

          useFolderLinkFromIndexFile: true,

          collapsed: true

        }),



      '/poker/':
        generateSidebar({

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

      provider: 'local',

      options: {

        translations: {


          button: {

            buttonText: '搜索文档',

            buttonAriaLabel: '搜索文档'

          },


          modal: {

            noResultsText:
              '无法找到相关结果',

            resetButtonTitle:
              '清除查询条件',


            footer: {

              selectText:
                '选择',

              navigateText:
                '切换'

            }

          }

        }

      }

    },




    footer: {

      copyright:
        '版权所有 © 2026 复利网 fuli.ca'

    }


  }

})