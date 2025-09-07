import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  title: '面试造飞机-九折技术',
  description: 'ai,后端,架构,软件开发',
  lang: 'zh-CN',
  base: '/',
  
  bundler: viteBundler(),
  
  plugins: [
    // git插件由Plume主题自动包含，在主题配置中处理
  ],
  
  theme: plumeTheme({
    profile: {
      avatar: 'https://avatars.githubusercontent.com/u/22816271?v=4',
      name: 'Asxing',
      description: '路虽远，行则将至；事虽难，做则必成。'
      // 首页不展示位置与组织
    },

    plugins: {
      // 通过环境变量按需开启，便于逐步排查
      // 在 CI 或本地设置：VP_ENABLE_GIT=true / VP_ENABLE_REPLACE_ASSETS=true
      git: process.env.VP_ENABLE_GIT === 'true',
      replaceAssets: process.env.VP_ENABLE_REPLACE_ASSETS === 'true'
    },

    // 简化博客配置
    blog: {
      postList: true,
      tags: true,
      link: '/'
    },

    // 移除notes配置，现在使用技术领域分类的博客结构

    navbar: [
      { text: '首页', link: '/' },
      {
        text: 'AI技术',
        link: '/ai/',
        children: [
          { text: 'Claude', link: '/ai/claude/' }
        ]
      },
      {
        text: '后端技术',
        link: '/backend/',
        children: [
          { text: 'Java', link: '/backend/java/' }
        ]
      },
      {
        text: '架构设计',
        link: '/architecture/',
        children: [
          { text: '微服务', link: '/architecture/microservices/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: '友链', link: '/friends/' }
    ],

    // 首页不展示社交链接

    footer: {
      message: 'Released under the <a href="https://github.com/Asxing/9zhe.tech/blob/master/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/Asxing">Asxing</a>'
    }
  })
})
