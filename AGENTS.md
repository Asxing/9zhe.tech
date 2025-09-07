# Repository Guidelines

## Project Structure & Module Organization
- `docs/`: Markdown content root (home, posts, pages).
- `docs/.vuepress/`: Site config in `config.ts`, build cache, and output.
- `docs/.vuepress/public/`: Static assets and `CNAME` for the custom domain.
- Content categories: `docs/ai/`, `docs/backend/`, `docs/architecture/`.
- Build output: `docs/.vuepress/dist/` (deployed to `gh-pages` by CI).

## Build, Test, and Development Commands
- Install deps: `pnpm i` (preferred) or `npm i`.
- Dev server: `pnpm docs:dev` (hot-reload local preview).
- Build site: `pnpm docs:build` (generates static files to `docs/.vuepress/dist`).
- CI/CD: Push to `master` triggers GitHub Actions in `.github/workflows/ci.yml` to deploy to `gh-pages`.
- Note: Scripts include `NODE_OPTIONS='--openssl-legacy-provider'` for Node 22 compatibility.

## Coding Style & Naming Conventions
- Markdown: one article per `.md` file, kebab-case filenames (e.g., `claude-plugin-guide.md`).
- Place posts under a category folder (e.g., `docs/ai/your-post.md`).
- Required frontmatter keys: `title`, `date` (ISO), `category`, `tag`; optional: `sticky`, `permalink`.
```yaml
---
title: 标题
date: 2025-09-07T00:00:00.000Z
category: [AI]
tag: [插件开发]
permalink: /article/your-id/
---
```
- Config: TypeScript in `docs/.vuepress/config.ts`. Use 2-space indentation; keep imports sorted.

## Testing Guidelines
- No unit tests; validate by building: `pnpm docs:build`.
- Manually verify: homepage renders, post lists show categories, internal links/images resolve.
- Do not commit `docs/.vuepress/dist/`; it’s built in CI.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat: …`, `fix: …`, `refactor: …`, `chore: …` (Chinese/English OK).
- Keep subject ≤ 72 chars; add scope when helpful (e.g., `fix(config): 禁用 git 插件`).
- PRs must include: concise summary, screenshots for visual changes, linked issues, and confirmation that `pnpm docs:build` passes locally.

## Security & Configuration Tips
- Custom domain is set via `docs/.vuepress/public/CNAME` and `base: '/'` in config.
- Theme disables the `git` plugin for production stability—don’t re-enable unless tested.
- Align local Node/pnpm with CI: Node 22, pnpm 10.
