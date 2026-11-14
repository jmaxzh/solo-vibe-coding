# 钴蓝折纸首页验收

本轮从f2b27f3在website/cobalt-fold隔离制作，保留Astro静态、中英路径、GitHub Pages与原Actions流程；不纳入原工作区两份未提交Skill修改。完整发布记录在deployment.md。

## 预览与截图

- [可操作图览与新旧对照](http://127.0.0.1:8770/)
- [中文本地预览](http://127.0.0.1:4327/solo-vibe-coding/zh-CN/) / [English](http://127.0.0.1:4327/solo-vibe-coding/)

服务停止后，在 /Users/zhangjin/rich-workspace/my-dev-skills-cobalt/website 执行npm ci、npm run build、npm run preview -- --port 4327。在本档案目录以python3 -m http.server 8770 --bind 127.0.0.1启动图览。这些是本机服务，公开地址和线上状态见部署记录。

截图等待字体与图片解码，使用减少动画固定构图；动态分支另行测试。桌面1440×1000，手机390×844，全页保留相同宽度。旧版为用户已认可的金属光环版，左右对照采用同一视口。

| 视口 | 中文首屏 | 中文全页 | 英文首屏 | 英文全页 | 新旧对比 |
| --- | --- | --- | --- | --- | --- |
| 1440px | [打开](screenshots/zh-CN-desktop-hero.png) | [打开](screenshots/zh-CN-desktop-full.png) | [打开](screenshots/en-desktop-hero.png) | [打开](screenshots/en-desktop-full.png) | [左旧右新](screenshots/comparison-desktop.png) |
| 390px | [打开](screenshots/zh-CN-mobile-hero.png) | [打开](screenshots/zh-CN-mobile-full.png) | [打开](screenshots/en-mobile-hero.png) | [打开](screenshots/en-mobile-full.png) | [左旧右新](screenshots/comparison-mobile.png) |

图库已实操核验HTTP200、中英文与390px外层控件、嵌入站点任务选择及站内语言切换保留任务，页面错误0。

## 四项验收

| 维度 | 结果与边界 |
| --- | --- |
| 审美 | 原创钴蓝折纸、海报大字、硬边纸张与编辑式章节形成独立风格；独立审阅有连贯性证据，用户偏好尚未确认 |
| 产品理解 | 原助手+Skill定位、四任务和需求→方法→交付检查目标保留；社区、示意、实际记录、功能示例边界一致，无真实用户理解研究 |
| 操作 | 保留50项既有检查，并新增4项图文分隔测试：任务选择、刷新/语言、上手入口、键盘、复制、案例ZIP、报价CSV、文章/FAQ、无脚本和减少动画 |
| 工程 | validate通过，54项浏览器测试通过（1.1m）；120布局、30控件、28内页比较通过；公开GitHub Pages发布另由部署记录核验 |

新增图文分隔测试覆盖14个宽度，在静态以及桌面fine pointer左右位置等待变换结束后比较图片与标题/正文的实际矩形；手机模拟验证静态分隔。Canvas测试比较真实画面签名，不仅检查状态属性。独立审查另复核复杂断点、动效暂停、离屏、减少动画与双语无脚本四任务。

## 检查范围

运行环境Node.js v26.7.0，既有锁文件npm ci，Chrome157.0.8103.51及手机模拟。仓库Playwright配置不改，临时派生配置只将预览端口改为4327并使用本工作树绝对路径。执行npm run validate及PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --config=/tmp/solo-cobalt-playwright.config.mjs --workers=4。CI使用原配置、Node24及Playwright Chromium。

布局审计覆盖320/390/600/601/700/701/768/800/801/900/1000/1001/1024/1100/1440px × 双语 × 四任务，共120项；每个宽度/语言检查暂停控件中心命中及不与导航重叠，共30项；双语×两视口×七内页共28项，对比正文、归一站内origin后的链接、可见元素几何、字体、颜色和圆角。见 [audit.json](audit.json) 与脚本。

未修改site/outcomes内容数据、原生任务与复制业务逻辑、公共global.css、依赖/锁文件、Astro/Actions/路径配置或Skill。替换装饰场景后，测试更新场景标记与名称，新增图文重叠回归检查，所有原行为断言保留。

最终源代码、独立审查和真实差异评价分别可核对；不把实现检查等同于审美、用户理解或使用效果。实体设备、功耗、全面辅助设备体验与转化仍未验证。详见 [差异及成本](change-evaluation.md)、[独立审查](independent-review.md)、[主视觉与最终提示](visual-assets.md)。
