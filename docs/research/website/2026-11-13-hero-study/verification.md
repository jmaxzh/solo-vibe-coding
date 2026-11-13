# 首屏改版发布验证

## 发布状态

用户明确要求“提交推送部署”。已将首屏改版提交为 `ede424ac099219d07561589dfd111332199f3131` 并推送 `main`，现有 GitHub Pages 工作流完成检查与发布。

- [中文首页](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/)
- [英文首页](https://jmaxzh.github.io/solo-vibe-coding/)
- [本次 Website 运行](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43416696347)

本次提交只包含官网首屏、对应规格、测试和研究档案；工作区另一任务的形式化验证 Skill 改动及调研未加入提交，共用研究索引仅提交本轮入口。

## 云端检查

运行由本次发布提交的 `push` 触发，`Website checks` 和 `Publish GitHub Pages` 均为 `success`。Node.js为24.22.2；类型检查0错误/警告，17个HTML、17个sitemap URL、内链、语言对应、元数据与结构化数据通过，26项Chromium浏览器检查通过。

JS为10.2KiB，完整发布目录506.1KiB，原有预算保持。原始运行数据见 [ci-run.json](ci-run.json)，必要日志见 [ci-summary.txt](ci-summary.txt)。

## 公网与产物核对

下载同一运行的 `github-pages` 产物，逐个核对35个公开文件：均返回HTTP200，SHA-256全部与CI产物一致。域名根目录 `robots.txt` 为404，没有该文件的抓取限制。记录见 [production-check.json](production-check.json)。

使用Chrome访问公开站点，在两种语言、1440/390px宽度、开启/关闭JavaScript共8种条件下验证：新首屏正文、跳到正文、两轮案例切换、方向键回切、图片加载、无横向溢出。两语言桌面环境另实际从截图进入完整案例，再进入安装指南；页面无脚本错误或失败资源响应。原始记录见 [production-browser.json](production-browser.json)，生产画面位于 `screenshots/production-*.png`。

独立发布复核结论归入 [review.md](review.md)。

## 验证边界

以上确认本次首屏版本已公开部署及其工程行为。手机验证为Chrome中的视口检查，用户偏好、理解速度、实际安装和转化效果仍未测量；原有无障碍覆盖缺口继续保留。前面的样稿评估记录描述发布前状态，本记录补充已上线事实。研究档案不参与网站或Skill的运行与构建。
