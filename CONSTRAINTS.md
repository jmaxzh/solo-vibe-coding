# 官网质量标准

本文件定义 `website/` 的工程验收标准。Skill 内容继续遵循仓库及对应语言目录的指令。

## 必须通过的检查

在 `website/` 执行 `npm ci` 后：

| 命令 | 依据与阻断条件 |
| --- | --- |
| `npm run check` | Astro 与 TypeScript 严格检查；错误阻断交付。 |
| `npm run build` | 生成完整静态站；构建错误阻断发布。 |
| `npm run verify` | 检查产物中的内链、锚点、项目路径、双语对应、标题摘要、canonical、分享图片、结构化数据、sitemap、维护入口混入与体积；任一失败阻断发布。 |
| `npm run test:e2e` | Chromium 中检查用户开始路径、报价计算与错误、明细下载、导航、语言切换、复制、移动端、关闭 JavaScript 后的正文，以及 axe 严重或关键无障碍问题；失败阻断发布。 |

`npm run validate` 依次执行前三项。浏览器验证使用 Playwright；首次在本地安装匹配浏览器：`npx playwright install chromium`。CI 使用 `npx playwright install --with-deps chromium`。

## 产物与内容标准

- 正文预渲染为 HTML，使用指南、完整需求和安装命令在禁用 JavaScript 时仍可阅读。报价示例的动态计算与下载需要脚本；关闭时展示初始结果、公式与启用说明，并禁用输入。
- 英文和中文页面覆盖相同任务、边界与安装方式；每个内容页面具有对应语言页面。
- 内部网址包含 `/solo-vibe-coding/`；404 页面不进入 sitemap。
- 每个页面恰有一个主标题，具有独立标题、摘要和自身 canonical；hreflang 双向对应。
- 项目能力、依赖、许可证与仓库内容一致；示例与实际运行证据有明确区别。
- 页面不发布未验证的用户数量、评价、增长或提效数据。
- 官网用户阅读路径不链接本仓库的维护知识库、ADR、工作流或研究档案；通过仓库维护入口继续保留追溯材料。
- 单个 HTML 文件不超过 100 KiB；构建后的 JavaScript 总计不超过 60 KiB；整个发布目录不超过 5 MiB。阈值用于保持内容站轻量，实际判定源于 `website/scripts/verify-build.mjs`。

## 自动化范围

公开仓库使用标准 `ubuntu-latest` runner，PR 和主分支运行相同检查。只有受信任的主分支更新或手动主分支执行可以发布；部署 job 才获得 Pages 写入和 OIDC 权限。发布目录为 `website/dist/`。

工作流检查与仓库分支保护是不同配置。是否设置必需检查，以 GitHub 仓库实际设置为准，不由工作流文件推断。

## 人工与上线验证

发布前检查桌面、手机、键盘焦点与减少动态效果；自动化无障碍检查只覆盖可检测问题。发布后核对实际 Pages 网址、语言页面、资源与 sitemap 的 HTTP 状态。

搜索引擎收录、排名、AI 引用、真实用户性能和实际安装量需要上线数据；本地检查不替代这些结果。验证方法见 [测试与发布](docs/testing.md)，重大决策见 [决策索引](docs/decisions.md)。
