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
      avatar: 'https://avatars.githubusercontent.com/u/22816271?v=4',
      name: 'Asxing',
      description: '路虽远，行则将至；事虽难，做则必成。',
      location: 'China',
      organization: '九折技术',
    },

    // 配置博客以包含所有文章（包括notes中的）
    blog: {
      include: ['**/*.md'], // 包含所有 markdown 文件
      exclude: ['.vuepress/', 'node_modules/', '**/README.md', 'about.md', 'friends.md'], // 排除配置文件和特殊页面
      pagination: {
        perPage: 10
      },
      postList: true,
      tags: true,
      link: '/' // 🔧 修复：博客文章显示在首页
    },

    // 配置 notes 以支持技术文档导航
    notes: {
      dir: '/notes/', // 笔记保存目录
      link: '/notes/', // 🔧 修复：避免与博客首页冲突
      notes: [
        {
          dir: 'ai/claude',
          link: '/notes/ai/claude/',
          text: 'Claude AI',
          sidebar: 'auto'
        },
        {
          dir: 'ai/llm',
          link: '/notes/ai/llm/',
          text: 'LLM大模型',
          sidebar: 'auto'
        },
        {
          dir: 'ai/ml',
          link: '/notes/ai/ml/',
          text: '机器学习',
          sidebar: 'auto'
        },
        {
          dir: 'ai/dl',
          link: '/notes/ai/dl/',
          text: '深度学习',
          sidebar: 'auto'
        },
        {
          dir: 'ai/engineering',
          link: '/notes/ai/engineering/',
          text: 'AI工程化',
          sidebar: 'auto'
        },
        {
          dir: 'backend/java',
          link: '/notes/backend/java/',
          text: 'Java',
          sidebar: 'auto'  
        },
        {
          dir: 'backend/go',
          link: '/notes/backend/go/',
          text: 'Go',
          sidebar: 'auto'
        },
        {
          dir: 'backend/python',
          link: '/notes/backend/python/',
          text: 'Python',
          sidebar: 'auto'
        },
        {
          dir: 'backend/database',
          link: '/notes/backend/database/',
          text: '数据库',
          sidebar: 'auto'
        },
        {
          dir: 'architecture/microservices',
          link: '/notes/architecture/microservices/',
          text: '微服务',
          sidebar: 'auto'
        },
        {
          dir: 'architecture/kubernetes',
          link: '/notes/architecture/kubernetes/',
          text: 'Kubernetes',
          sidebar: 'auto'
        },
        {
          dir: 'architecture/system-design',
          link: '/notes/architecture/system-design/',
          text: '系统设计',
          sidebar: 'auto'
        }
      ]
    },

    navbar: [
      { text: '首页', link: '/' },
      { 
        text: 'AI技术',
        items: [
          { text: 'Claude', link: '/notes/ai/claude/' },
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