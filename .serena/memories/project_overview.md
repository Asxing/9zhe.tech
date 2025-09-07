# 九折技术博客项目概览

## 项目目的
这是一个基于 VuePress 2.0 和 Plume 主题的现代化技术博客网站，主要专注于AI技术、后端开发和架构设计内容。

## 技术栈
- **静态站点生成器**: VuePress 2.0.0-rc.24
- **主题**: vuepress-theme-plume ^1.0.0-rc.162  
- **包管理器**: pnpm 10.6.1
- **构建工具**: Vite 7.0.6 (通过 @vuepress/bundler-vite)
- **编程语言**: TypeScript 5.9.2
- **Vue版本**: Vue 3.5.21
- **部署**: GitHub Pages (通过 GitHub Actions)

## 项目结构
```
├── docs/                 # 文档源文件
│   ├── .vuepress/       # VuePress 配置
│   │   ├── config.ts    # 主配置文件
│   │   ├── notes/       # 笔记内容
│   │   ├── .temp/       # 临时文件
│   │   └── .cache/      # 缓存文件
│   ├── README.md        # 首页
│   ├── about.md         # 关于页面
│   └── friends.md       # 友链页面
├── .github/workflows/   # CI/CD 配置
└── package.json         # 项目配置
```

## 关键特性
- 支持多语言内容分类（AI技术、后端技术、架构设计）
- 集成了多种VuePress插件（搜索、评论、SEO等）
- 使用了OpenSSL legacy provider解决Node.js兼容性问题
- 自动部署到GitHub Pages