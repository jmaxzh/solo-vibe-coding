# 官网初始版本验证记录

记录日期：2026-11-13。本文保留本次实施证据与未验证事项，当前操作方法见官网 README 和项目知识库。

## 基线

- 原始提交：`8d4a0aea8fbcbd4acba79709f93c3b54522ff6be`。
- 开始时工作区干净，分支为 `main`，远端主分支与该提交一致。
- GitHub CLI 确认仓库 `jmaxzh/solo-vibe-coding` 公开，当前用户有 ADMIN 权限。
- Pages 查询返回 404，尚无已配置站点；主分支保护查询返回 “Branch not protected”。
- 仓库原本只有 Skill、说明和研究档案，没有官网工程、构建配置或 CI。

## 本地执行环境

- macOS；Node.js `v26.7.0`，npm `11.19.0`。
- Astro `7.4.11`、TypeScript `6.0.3`、Playwright `1.65.0`、axe Playwright `4.14.0`；完整版本以锁文件为准。
- 本地浏览器验证使用已安装的 Google Chrome，通过 `PLAYWRIGHT_CHANNEL=chrome` 选择。CI 配置安装对应的 Playwright Chromium，两者执行环境分别记录。
- npm 锁文件在独立临时目录中从官方 registry 重新解析，再通过 `npm ci` 完整安装；安装报告 0 个已知漏洞。另一次 production 依赖审计也返回 0 个漏洞。

## 已完成检查

| 检查 | 实际结果 |
| --- | --- |
| `npm ci` | 成功，锁文件可安装，使用官方 registry |
| `npm run validate` | Astro 检查 0 错误、0 警告、0 提示；构建 11 个 HTML 页面；静态产物检查通过 |
| 内容与路径 | 10 个内容页面及 1 个 404；内链、锚点、双语对应、元数据、分享图片、结构化数据与 sitemap 检查通过 |
| 产物体积 | 浏览器脚本约 1.7 KiB；完整静态产物约 268.5 KiB |
| 验证器负例 | 在构建目录注入不存在的本地链接；验证器非零退出并指出链接；恢复原文件后正常通过 |
| Markdown 相对链接 | 对本次变更中的 Markdown 执行存在性核对，全部通过 |
| `git diff --check` | 通过 |
| 第一轮浏览器检查 | 16 项通过，覆盖双语、桌面和手机、任务切换、剪贴板、导航、无 JavaScript、404 和 axe 严重/关键问题 |
| 最终浏览器检查 | 18 项全部通过，耗时 16 秒；从最终锁文件与产物启动前台预览，覆盖剪贴板拒绝后的手动复制、任务锚点、双语无 JavaScript、桌面和手机、减少动态效果的实际 CSS、404，以及 10 个内容页面的 axe 严重/关键问题 |
| 域名根 robots.txt | `https://jmaxzh.github.io/robots.txt` 返回 404，未发现阻断项目路径的根规则 |

## 视觉核对

已在浏览器加载字体后保存实际页面截图，检查桌面和手机的首屏层级、完整导航、代码换行、安装区、FAQ 与长文阅读：

- [英文桌面首页](screenshots/desktop-home.png)
- [中文手机首页](screenshots/mobile-home-zh-CN.png)
- [中文手机快速开始](screenshots/mobile-getting-started-zh-CN.png)

## 实施中解决的问题

- 自托管字体包不提供预想的 Latin CSS 入口；检查已安装包后改为显式引用其 Latin WOFF2 文件，并附带完整字体许可。
- Astro 7 在代理环境下可自动后台启动预览；浏览器测试使用官方 `--ignore-lock` 前台模式，让测试工具管理服务器生命周期。
- 环境默认 npm 镜像不支持审计接口；仓库工程明确采用官方 registry，并重新解析、安装与审计，避免将个人镜像条件固化到交付物。
- 本地浏览器下载较慢，停止该下载并复用现有 Chrome；CI 仍使用版本匹配的 Chromium，不更改发布检查要求。

## 尚需独立证据的结果

- 独立只读评审已完成，未发现阻断问题，见 [评审记录](review.md)。实际 GitHub Actions 与公网验证已完成，见本文最终发布结果。
- 自动化无障碍检查未覆盖所有辅助技术；没有将其报告为完整合规认证。
- 尚未配置 Google Search Console / Bing Webmaster Tools 的账号验证；未宣称搜索收录、排名、AI 引用或实际安装量。
- 没有基于真实用户数据的 Core Web Vitals 或转化结果。

GitHub Actions 权限查询确认 Actions 已启用且允许使用当前工作流中的官方 Actions；主分支未配置保护规则，因此只声称发布 job 受检查结果约束，不声称合并已被必需检查阻断。

## 评审修正后的复验

中文终端和安装命令读屏标签补齐后，`npm run validate` 再次通过：0 错误、0 警告、0 提示，11 个 HTML，静态检查通过。独立代理局部复核未发现新增问题。

Pages 创建接口已成功，配置为 `build_type=workflow`，返回默认项目网址且 `https_enforced=true`。此配置成功不等同网站已经发布，仍等待实际工作流与 HTTP 证据。

## 最终发布结果

发布提交：`db191f244f1226a8443e9c9deb3f319bd61f56e9`。源码提交已推送到 `main`，首次 [Website 工作流](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43373041892) 的检查与发布 job 均成功。

- Linux CI 使用 Node.js `v24.22.2`、npm `11.19.1` 和对应的 Playwright Chromium。
- Astro / TypeScript 0 错误、0 警告、0 提示；实际产物验证通过。
- CI 的18项浏览器检查全部通过，耗时12.4秒。
- Pages 部署完成时间为 `2026-11-13T05:36:48Z`，默认网址使用 HTTPS。
- 对公开站点逐一请求23个文件，均返回200，SHA-256均与本地最终构建一致。
- 不存在的项目页面返回404，并展示项目自定义404与正确的首页链接。
- 公网 Chrome 验证首页任务切换、中文手机页面、安装读屏名称、指南导航和同主题语言切换，无脚本错误和失败资源响应。
- 三张截图已更新为实际生产网址的截图。
- 仓库 About 的 homepage 字段设为已核验的官网网址，便于从代码仓库进入官网；既有仓库描述保持原值。

完整证据：

- [CI 执行状态与步骤](ci-run.json)
- [CI 关键结果摘要](ci-summary.txt)
- [公开 HTTP 与内容哈希核验](production-check.json)
- [公网浏览器检查](production-browser.json)

本次工程与发布验收完成。搜索平台账号验证、收录、排名、AI引用、真实用户性能与实际安装量仍没有测量结果，未纳入“已验证通过”的结论。

这些发布后证据只修改研究档案，不改变官网构建输入，也不需要重新发布相同产物。
