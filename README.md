# valizpg.github.io

个人主页（Vite + TypeScript + 原生 CSS），通过 GitHub Actions 部署到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## 修改内容

编辑 [`src/data/profile.ts`](src/data/profile.ts) 更新文案、链接与项目列表。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布。首次需在仓库启用 GitHub Pages（源：GitHub Actions），或使用：

```bash
gh api -X POST /repos/valizpg/valizpg.github.io/pages -f build_type=workflow
```
