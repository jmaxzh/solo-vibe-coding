# 玻璃折射首页正式发布记录

用户于2026-11-15授权“发布到GitHub”。本版已由PR #9合并main，并按原GitHub Actions流程发布到GitHub Pages；未修改生产部署配置、Astro静态架构或双语项目路径。

- [中文正式首页](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/?v=85ea88f)
- [English](https://jmaxzh.github.io/solo-vibe-coding/?v=85ea88f)
- [已合并PR #9](https://github.com/jmaxzh/solo-vibe-coding/pull/9)，合并提交：[85ea88fb8c370d6ffabc67a7b9d4f5bdc9381821](https://github.com/jmaxzh/solo-vibe-coding/commit/85ea88fb8c370d6ffabc67a7b9d4f5bdc9381821)。
- 正式main运行：[Website Actions 43653260844](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43653260844)。检查与Pages部署均成功；Node24、原Playwright Chromium，Astro34文件0错误/0警告/0提示，17页及链接、语言、元数据、sitemap、预算验证通过，54项浏览器测试通过（2.2m）。见github-actions.json、ci-summary.txt。
- 发布前新PR检查：[43652940475](https://github.com/jmaxzh/solo-vibe-coding/actions/runs/43652940475)，SHA为ee0d34a1ae10d3c18363149b2351d63e86f34522，检查成功。它仅同步采用状态；运行代码、资源、测试、依赖及配置与已审336a870逐项相同。
- Pages deployment ID为7795509181，完整SHA与合并提交及main运行一致，最终状态success。见github-deployment.json与github-deployment-statuses.json。PR合并证据见github-merged-pr.json。

## 公开网址实际核验

Chrome157.0.8103.51及减少动画，访问中英两种语言与1440×1000、390×844共四组首页。四组均返回200，预期玻璃版主题变量与主图解码尺寸1536×1024正确，默认设计任务、四个痛点、真实案例图片正常，无横向溢出，减少动画下场景静止。

实际选择推广任务后刷新、站内切换语言及主行动进入上手页，均保留对应任务。报价输入20小时、单价80、额外100、预留15%，得到1955.00；下载CSV包含UTF-8 BOM及相同金额。案例起始项目ZIP实际下载成功，文件头有效。

中英上手、指南、案例、更新、文章与sitemap共12个路径返回200。根robots.txt返回404，未由该文件提供阻断规则。页面脚本错误0、站内HTTP失败资源0。完整结果见production-check.json、verify-production.mjs和screenshots/production-*。

访问链接附版本参数便于重新请求页面；该参数不单独证明发布版本。本次以成功main运行、Pages deployment完整SHA、PR合并SHA，以及实际主题/图片/行为共同确认发布。

## 工作区与证据边界

主工作区main同步相同已发布代码；发布前后核对两份Skill原有修改的SHA256、未暂存状态与索引，保持原样，不纳入官网提交。维护档案后续提交不改变运行代码，也不触发重复部署。

发布授权没有被当作同等级审美、用户理解、转化或使用效果验证。没有实体设备功耗或全面辅助设备研究。候选阶段独立审查与本次发布前审查分别见independent-review.md及release-review.md，真实差异与成本见change-evaluation.md。旧候选截图、复盘及ZIP保留为当时交付证据；正式发布后核验不追溯扩大审查者的实际执行范围。
