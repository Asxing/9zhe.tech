# 常用开发命令

## 基本开发命令
```bash
# 启动开发服务器
pnpm dev
# 或者
pnpm docs:dev

# 构建生产版本
pnpm build
# 或者
pnpm docs:build

# 部署到GitHub Pages
pnpm deploy
```

## 依赖管理
```bash
# 安装依赖
pnpm install

# 添加依赖
pnpm add <package-name>

# 添加开发依赖
pnpm add -D <package-name>

# 更新依赖
pnpm update

# 清理node_modules和锁文件
rm -rf node_modules pnpm-lock.yaml && pnpm install
```

## 调试和排查
```bash
# 检查依赖树
pnpm list --depth=0

# 查看Vue依赖
pnpm list vue

# 检查pnpm配置
pnpm config list

# 清理缓存
pnpm store prune
```

## Git操作
```bash
# 基本Git操作
git status
git add .
git commit -m "message"
git push origin master
```

## 系统命令 (macOS)
```bash
# 文件操作
ls -la
find . -name "pattern"
grep -r "pattern" .

# 进程管理
ps aux | grep node
kill -9 <pid>
```

## 特殊注意事项
- 所有npm scripts都使用了`NODE_OPTIONS='--openssl-legacy-provider'`来解决Node.js兼容性问题
- 使用pnpm作为包管理器，不要使用npm或yarn
- CI/CD使用GitHub Actions，推送到master分支会自动部署