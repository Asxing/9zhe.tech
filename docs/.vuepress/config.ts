import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  title: '九折技术',
  description: '前端,后端,架构,软件开发 - 现代化技术博客',
  lang: 'zh-CN',
  base: '/',
  
  bundler: viteBundler(),
  
  theme: plumeTheme({
    profile: {
      avatar: 'https://avatars.githubusercontent.com/u/17307293?v=4',
      name: 'Asxing',
      description: '长期有耐心，一切才刚刚开始！',
      location: 'China',
      organization: '九折技术',
    },

    navbar: [
      { text: '首页', link: '/' },
      { 
        text: 'AI技术',
        items: [
          { text: 'LLM大模型', link: '/notes/ai/llm/' },
          { text: '机器学习', link: '/notes/ai/ml/' },
          { text: '深度学习', link: '/notes/ai/dl/' },
          { text: 'AI工程化', link: '/notes/ai/engineering/' }
        ]
      },
      {
        text: '后端技术',
        items: [
          { text: 'Java', link: '/notes/backend/java/' },
          { text: 'Go', link: '/notes/backend/go/' },
          { text: 'Python', link: '/notes/backend/python/' },
          { text: '数据库', link: '/notes/backend/database/' }
        ]
      },
      {
        text: '架构设计',
        items: [
          { text: '微服务', link: '/notes/architecture/microservices/' },
          { text: 'Kubernetes', link: '/notes/architecture/kubernetes/' },
          { text: '系统设计', link: '/notes/architecture/system-design/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: '友链', link: '/friends/' }
    ],

    social: [
      { icon: 'github', link: 'https://github.com/Asxing' }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/Asxing/9zhe.tech/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/Asxing">Asxing</a>'
    }
  })
})