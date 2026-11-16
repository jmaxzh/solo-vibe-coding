# 验证记录

日期：2026-11-16（Asia/Shanghai）。交付范围为本地预览，没有公共发布与Git提交。

以上为制作完成时的本地验收范围；后续用户授权的公开发布与核验见[publication.md](publication.md)。

## 工程与浏览器

- `npm run validate` / 最终等价的 `npm run check && npm run build && npm run verify`：33个Astro相关文件，0错误0警告；17页静态构建；17个sitemap网址；内链、锚点、双语、元数据、结构化数据与预算通过。
- `PLAYWRIGHT_PORT=4391 PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --workers=4`：54项通过，1.2分钟。
- 透明主视觉与显示样式调整后，`PLAYWRIGHT_PORT=4391 PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --workers=4 --grep 'concept sculpture|hero copy stays'`：8项通过，25.5秒。
- 最终分享图采用显式图片合成及PNG量化；实际查看PNG后重建、verify。public与dist分享图SHA-256一致：`2226c3d7ff60bbf33cc7ae96a8a47fdd97171d94b871f4bc7050b29d24001037`。
- 最终 `git diff --check` 通过。本次没有修改package清单、锁文件、报价计算逻辑、任务数据或两份已有修改的Skill文件。

## 实际画面

使用本机Chrome，以1440×1000和390×844分别捕获中英文首屏、整页、去文案、去装饰、FAQ展开、报价错误与六类内页图览；字体与可见图片完成加载后截取。人工查看了主角轮廓、倒角、拉丝、层间阴影、图文边界、章节节奏、移动布局与错误状态。全页截图中的懒加载图片已显式载入，不以空白占位作为交付。

自动文字对比与命中检查包含320–1920px多个断点；axe覆盖全部正常内容页的桌面/手机双语版本，严重和关键问题无失败。`screenshots/layout-audit.json`的24条内页检查均无横向溢出。截图归档约8.1MiB，不进入官网发布包。

## 前后产物

同一依赖与构建命令，原版从任务开始时HEAD导出后独立构建。

| 项目 | 原版 | 当前 |
| --- | --- | --- |
| 静态页 | 17 | 17 |
| 发布目录实际字节 | 869,680 | 1,096,526 |
| JavaScript | 13.6KiB | 13.6KiB |
| 运行依赖或服务新增 | — | 无 |

总量增加226,846字节，即221.5KiB（26.1%）。主要是新增响应式金属概念图。仍低于5MiB发布包与60KiB JS预算；不等于严格帕累托成立。

## 本地预览和边界

静态生产构建预览：`http://127.0.0.1:4392/solo-vibe-coding/zh-CN/`，实际返回HTTP200；英文与内页由同一服务器提供。服务器退出后可以按官网README重新启动。

没有真实用户研究、弱网性能测量、非Chrome实机验证、本次全量外链或外部安装服务验证、公共部署与线上核验。安装和制作在访客自己的编程助手中发生，本网站没有执行Agent的后端。
