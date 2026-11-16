# GitHub Pages发布与线上核验

已发布：[中文官网](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/) · [English](https://jmaxzh.github.io/solo-vibe-coding/)。

官网源提交：`a44f3e3512fa7267e7703b8db7f05904e392036e`。对应[Website运行](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43845201360)的检查与发布两个job均为success；完整状态见actions-release.json。发布前独立复审通过，本地最终54项浏览器检查及17页产物检查通过。

线上核验时间：`2026-11-16T10:06:02.555Z`。verify-publication.mjs在CI成功后直接访问公开地址，结果保存于publication-checks.json：

- 17个HTML地址均返回200；中英文首页包含本次定位文案。
- 19个引用资源（含样式、脚本、图片、字体、案例ZIP）返回200，sitemap-index及其引用sitemap可访问。
- Chrome在双语390、820、1440px共6组配置下，图片完整加载、无横向溢出、图文间距满足要求、无页面脚本错误。
- 四类任务中的推广任务可切换，首屏安装入口延续到`task=growth#task-growth`；首屏实际记录入口打开正确案例。
- 中英文手机视口均实际触发报价CSV下载。
- 域名根robots.txt返回404，没有返回阻断项目路径的抓取规则。

之后仅提交本发布档案与核验脚本，不改变网站产物。工作区原有的两份SKILL.md修改未纳入官网提交。

未验证真实用户理解、阅读速度、安装转化、弱网和非Chrome实机表现；以上为工程、画面与公开服务的检查结果。
