import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/hcie-knowledge/',
  title: 'Network Knowledge Base',
  description: 'From HCIP to AI Networking',

  lang: 'zh-CN',

  lastUpdated: true,

  themeConfig: {

    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '学习路线', link: '/learning-path' },

      {
        text: '知识体系',
        items: [
          { text: '网络基础', link: '/foundation/' },
          { text: '交换网络', link: '/switching/' },
          { text: '路由协议', link: '/routing/' },
          { text: 'MPLS', link: '/mpls/' },
          { text: 'Segment Routing', link: '/segment-routing/' },
          { text: '数据中心', link: '/datacenter/' },
          { text: '云原生网络', link: '/cloud-native/' },
          { text: '网络自动化', link: '/network-automation/' },
          { text: 'AI Networking', link: '/ai-network/' }
        ]
      },

      { text: '实验', link: '/labs/' },
      { text: '面试', link: '/interview/' },

      {
        text: 'GitHub',
        link: 'https://github.com/alextoxj/hcie-knowledge'
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/alextoxj/hcie-knowledge'
      }
    ]
  }
})