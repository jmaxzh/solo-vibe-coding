# ADR 0001：静态生成并发布到 GitHub Pages

- 状态：已采用
- 日期：2026-11-13
- 对应决策：D08–D13、D21

## 结论

官网使用独立 `website/` 工程，以 Astro 静态生成，由 GitHub Actions 检查并将 `dist/` 发布到 GitHub Pages 默认项目网址。

## 背景与选择依据

项目是公开的 Agent Skill 仓库，首版内容为产品介绍、指南与日志。用户明确选择 GitHub Pages 默认地址，并确认多语言静态站方案。当前账号具有仓库管理员权限。

Astro 提供 Markdown、组件、静态路由和官方 Pages 部署支持，适合持续添加文档。相较纯 HTML，增加构建依赖，换取共用布局与双语维护能力；相较 SSR 应用，不需要运行时服务。Cloudflare 同样可托管此类网站，但当前已有 GitHub 仓库和明确的发布选择。

## 工程与费用边界

使用标准 `ubuntu-latest` runner 与 Node.js 24。公开仓库的标准 runner 计算使用免费；构建产物和缓存属于另外的计费维度。首版不启用依赖缓存，Pages 产物只保留一天，发布目录设置体积预算。

Actions 引用锁定完整提交 SHA；npm 从官方 registry 解析依赖并使用锁文件，避免依赖维护者个人的镜像配置。PR 运行检查，主分支通过相同检查后才发布。写入权限只授予部署 job，部署通过 OIDC 完成，不在源码中保存令牌。

## 后果

所有内部资源与 SEO 网址需包含 `/solo-vibe-coding/`。公开内容更改后需要重新构建。首版没有服务端业务接口；未来若需要动态服务，另行记录架构决策。回退通过恢复已知有效源码并重新检查发布完成。

## 依据

- [GitHub Pages 免费仓库条件](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Actions 计费](https://docs.github.com/en/billing/concepts/product-billing/github-actions)
- [Astro GitHub Pages 部署](https://docs.astro.build/en/guides/deploy/github/)
- [发布工作流](../../.github/workflows/website.yml)
