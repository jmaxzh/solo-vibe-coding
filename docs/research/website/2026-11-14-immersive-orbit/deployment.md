# 沉浸光环首页发布记录

新版已经按原有GitHub Actions流程发布到GitHub Pages，没有修改生产部署配置。此次沿用用户已明确授权的GitHub推送与部署要求，先在隔离分支完成制作、验证和独立审查，再发布。

- [中文首页](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/?v=7a5e515)
- [English](https://jmaxzh.github.io/solo-vibe-coding/?v=7a5e515)
- [发布源码7a5e515071d833ea33122a43f2e28fc7221ef4bb](https://github.com/jmaxzh/solo-vibe-coding/commit/7a5e515071d833ea33122a43f2e28fc7221ef4bb)，main与website/immersive-orbit通过atomic push同步。
- [Website Actions 43582059118](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43582059118)：Website checks、Publish GitHub Pages均成功；CI的validate通过，17页及链接/元数据/预算验证通过，50项浏览器测试通过（1.7m）。见 [github-actions.json](github-actions.json)、[ci-summary.txt](ci-summary.txt)。
- Pages deployment ID为7785819051，SHA与上述发布源码一致，最终状态success。见 [github-deployment.json](github-deployment.json)、[github-deployment-statuses.json](github-deployment-statuses.json)。

## 公开网址核验

使用Chrome157.0.8103.51，减少动画，分别访问中英文1440×1000和390×844首页。首页地址带版本参数以请求新页面，站点canonical和原项目路径不变。

四组页面均为HTTP200、预期新主题变量、默认设计任务及四痛点；无横向溢出，原创WebP解码尺寸1536×1024，减少动画下场景静止，真实案例图片加载正常。实际选择推广任务后，刷新、站内切换语言和主行动进入上手页均继续该任务。报价计算为1955.00，CSV包含UTF-8 BOM及一致金额。

另有双语上手、指南、案例、更新、文章与sitemap共12个路径返回200；实际案例起始项目ZIP可下载，文件头有效。页面脚本错误0，站内HTTP失败资源0。详情见 [production-check.json](production-check.json)、[verify-production.mjs](verify-production.mjs) 以及screenshots/production-*截图。

脚本可在仓库根目录以RELEASE_COMMIT=完整发布SHA运行node docs/research/website/2026-11-14-immersive-orbit/verify-production.mjs复核；它只读取公开站点并执行浏览器内交互和下载，不写入服务端。

该核验补充了独立审查形成时缺少的部署后证据，不扩大审查者亲自执行的范围。真实用户审美、理解与效果、实体设备功耗和全面辅助设备体验仍未验证，见 [独立审查](independent-review.md)、[差异及成本](change-evaluation.md)。

原工作区两份未提交Skill修改仍保留，未随本轮提交或发布。
