import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  title: '九折技术',
  description: '前端,后端,架构,软件开发 - 现代化技术博客',
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
      // 完全禁用git插件避免构建错误
      git: false,
      // 关闭资源替换插件，避免对生成代码产生意外文本替换
      replaceAssets: false
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
        link: '/blog/categories/ai/',
        children: [
          { text: 'Claude', link: '/blog/tags/claude/' }
        ]
      },
      { text: '后端技术', link: '/blog/categories/backend/' },
      { text: '架构设计', link: '/blog/categories/architecture/' },
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
