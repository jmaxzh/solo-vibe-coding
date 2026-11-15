# GitHub Pages 发布与线上核验

新版已发布到现有 GitHub Pages 站点，公开页面和主要操作核验通过。

- [中文官网](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/)
- [English](https://jmaxzh.github.io/solo-vibe-coding/)
- 发布源码提交：`d540b7cd2b17cafa7d6f242993825cd6b798aa86`
- [Website 工作流](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43723548552)：检查与构建成功，Pages 部署成功。
- 线上核验时间：`2026-11-15T14:22:34.755Z`（UTC）。

## 发布依据

沿用仓库既有 GitHub Actions 与 GitHub Pages 配置，推送 `main` 后自动发布 `website/dist/`。Pages 为 `workflow` 构建类型，现有地址与 HTTPS 配置保持有效。

CI 完成类型检查、生产构建、17 个 HTML 与内链/锚点/语言对应/元数据/结构化数据/sitemap/体积预算检查，54 项 Chromium 浏览器测试全部通过（1.6 分钟）。随后 Pages 部署 job 成功，部署源码 SHA 与上述提交一致。状态和各步骤记录见 [actions-release.json](actions-release.json)。发布前的独立只读审查及修复复核见 [independent-review.md](independent-review.md)。

官网、维护说明、截图和验证档案随发布版本提交；原有的两份 Skill 工作区修改未包含在发布提交中。构建和运行输入不依赖研究档案。

## 公开页面核验

对真实公开网址运行 HTTP 与浏览器检查，结果见 [publication-checks.json](publication-checks.json)：

| 检查 | 实际结果 |
| --- | --- |
| 16 个双语内容页 | 均返回 HTTP 200，各有一个主标题和正确 canonical；两个首页均包含新版原创工作台主体 |
| 17 个静态资源 | CSS、脚本、图片、图标、字体均返回 HTTP 200 |
| sitemap | 索引及引用的 sitemap 均返回 HTTP 200 |
| 不存在的项目路径 | HTTP 404，使用本项目 404 内容 |
| 根目录 robots.txt | HTTP 404，未提供阻断项目路径的 robots 规则 |
| 中英文 × 桌面/手机，共 4 组 | 任务选择、开始入口、所选任务跨语言延续均正常 |
| 报价工具 | 错误输入提示并停用下载；独立示例金额为 1,955.00；CSV 实际下载，包含 UTF-8 BOM 和对应总额 |
| 页面运行 | 未发现脚本异常、资源加载错误或横向溢出 |

实际打开并查看了生产页面：[中文桌面](published-zh-CN-desktop.png)、[中文手机](published-zh-CN-mobile.png)、[英文桌面](published-en-desktop.png)、[英文手机](published-en-mobile.png)。

核验脚本为 [verify-publication.mjs](verify-publication.mjs)，在仓库根目录执行 `node docs/research/website/2026-11-15-open-workbench/verify-publication.mjs`，使用已有官网依赖和本地 Chrome。它会重新访问公开站点并覆盖本目录的生产核验 JSON 与截图，应按需运行。

## 证据边界

线上桌面与手机检查使用本机 Chrome 和手机视口模拟；未验证真实移动设备、Safari/Firefox、真实 Skill 安装、搜索收录或用户理解与转化效果。公开网址的检查结果不替代这些证据。

发布后的本目录档案提交不改变官网构建输入，也不会再次触发 Pages 发布。线上版本以记录中的源码提交和部署工作流为准。
