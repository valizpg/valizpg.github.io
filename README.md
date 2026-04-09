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

**个人文案、链接与项目列表**请只编辑 [`src/data/profile.json`](src/data/profile.json)。根级字段含 `email`、`phone`；**中英文内容**分别在 `locales.zh` 与 `locales.en` 中维护（导航、教育、实习、学术、项目、技能等）。构建时打包进静态页面；类型定义见 [`src/data/profile.ts`](src/data/profile.ts)。语言偏好会写入浏览器 `localStorage`（`portfolio-locale`）；未设置时按浏览器语言在首次访问时选择中文或英文。

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布。首次需在仓库启用 GitHub Pages（源：GitHub Actions），或使用：

```bash
gh api -X POST /repos/valizpg/valizpg.github.io/pages -f build_type=workflow
```
