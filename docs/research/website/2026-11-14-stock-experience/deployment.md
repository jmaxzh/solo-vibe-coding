# GitHub Pages 发布核验

免费成品素材替代版已发布，公开代码、CI 产物和实际线上文件一致。原定 LS 两款动效仍未接入；本次发布结论不扩大素材范围或产品效果的验收。

- 官网中文：https://jmaxzh.github.io/solo-vibe-coding/zh-CN/
- 官网英文：https://jmaxzh.github.io/solo-vibe-coding/
- 源码提交：[`25d820596a161216f45e3303f873e351262f1082`](https://github.com/jmaxzh/solo-vibe-coding/commit/25d820596a161216f45e3303f873e351262f1082)
- [Website 43547566389](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43547566389)：同一提交的检查与部署两个 job 均成功，发布步骤于 2026-11-14 02:42:08 UTC 完成。
- Pages deployment `7781428636`：同一源码 SHA，最新状态为 success，环境网址为正式站点。

## 工程与线上证据

CI 从锁文件安装，类型检查、17 页构建和静态验证通过；38 项浏览器检查通过，约 1.1 分钟。JS 13.1 KiB、整个发布目录 787.4 KiB，低于基线 13.9 / 790.2 KiB，无新增包依赖、服务或 3D 运行时。

2026-11-14 02:46:59 UTC，下载本次 CI 的 `github-pages` 产物并逐文件检查：

- 44 / 44 个发布文件 HTTP 200，正文 SHA256 与 CI 产物一致。
- 同样 44 / 44 个文件与本地最终构建逐字节一致。
- 覆盖双语 HTML、脚本、样式、图片、字体、许可、下载文件和 sitemap。
- 域名根 `robots.txt` 为 404，没有阻断项目路径的根规则；这不代表已被搜索引擎收录。

完整记录见 `github-run.json`、`github-deployment.json`、`github-checks.txt`、`production-files.json`。

## 独立发布审查

`/root/review_stock_website` 另外读取 GitHub run / deployment API，确认同 SHA 的检查与发布成功；用独立 Chrome 检查线上双语桌面、手机页面、四场景图片、Compare、命令复制、任务与语言连续性及禁 JS，无新增阻断项。另抽查 10 个页面、素材、许可与脚本，与 CI 产物逐字节一致，见 `independent-production-browser.json`、`independent-production-hashes.json`。原始即时采样曾在增强脚本完成前读到 `selected:null`；随后等待并以 `toHaveAttribute` 确认 `design`，网址保持 `getting-started/?task=design#task-design`。原始采样保留，复核未发现任务丢失。

工程发布审查通过；素材审美满意度、原定 LS 动效及真实用户理解、首次成功与转化效果，仍保持 `report.md` 和 `independent-review.md` 所列边界。后续只记录发布证据的研究档案提交不改变本次官网构建输入，不重新触发 Pages。
