# 沉浸光环首页验收

完整中英文首页在隔离分支website/immersive-orbit制作，基线5c4ad59。源码位于 /Users/zhangjin/rich-workspace/my-dev-skills-immersive/website/，原工作区两份Skill未提交修改保留。发布状态另由部署记录说明。

## 打开预览

[公开中文新版](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/?v=7a5e515) / [English](https://jmaxzh.github.io/solo-vibe-coding/?v=7a5e515)。本机预览及截图图览仍可使用。发布与公开核验见 [部署记录](deployment.md)。

- [可操作预览与新旧对照](http://127.0.0.1:8769/)
- [中文预览](http://127.0.0.1:4325/solo-vibe-coding/zh-CN/) / [English](http://127.0.0.1:4325/solo-vibe-coding/)
- 浏览器主图：[chrome-orbit.webp](../../../../website/public/media/orbit/chrome-orbit.webp)。原图和最终提示见 [主视觉制作记录](visual-assets.md)。

服务停止后，在上述website目录运行npm ci、npm run build和npm run preview -- --port 4325。截图对照页可用python3 -m http.server 8769 --bind 127.0.0.1 --directory指向本档案目录启动。均为本机地址，不执行生产发布。

## 截图

截图先等待字体与图片解码，使用减少动画固定构图；实际普通模式动效另由浏览器测试验证。桌面1440×1000，手机390×844，全页截图保留相同宽度。

| 视口 | 中文首屏 | 中文全页 | 英文首屏 | 英文全页 | 原版/新版 |
| --- | --- | --- | --- | --- | --- |
| 1440px | [打开](screenshots/zh-CN-desktop-hero.png) | [打开](screenshots/zh-CN-desktop-full.png) | [打开](screenshots/en-desktop-hero.png) | [打开](screenshots/en-desktop-full.png) | [左旧右新](screenshots/comparison-desktop.png) |
| 390px | [打开](screenshots/zh-CN-mobile-hero.png) | [打开](screenshots/zh-CN-mobile-full.png) | [打开](screenshots/en-mobile-hero.png) | [打开](screenshots/en-mobile-full.png) | [左旧右新](screenshots/comparison-mobile.png) |

图库已实操复核HTTP200、中英文与390px视口控制、嵌入站点任务选择及站内语言切换后保留任务，页面错误0。图库外层语言按钮打开该语言默认首页；任务延续使用站内语言入口。

## 四项验收

| 维度 | 结果及边界 |
| --- | --- |
| 审美 | 全幅光环、大字与叙事章节形成明显不同的完整画面；独立审阅有风格变化证据，用户审美未确认 |
| 产品理解 | 产品定义、原助手+Skill关系、使用示意与目标，以及社区/实测/功能例子的边界保留；无真实用户理解测试 |
| 操作 | 原42项用户行为保留，并增加4项动效与4项平板控件测试；任务、刷新/语言、上手、复制、案例ZIP、报价CSV、文章、FAQ、无脚本可用 |
| 工程 | validate通过、50项浏览器测试通过；88响应式状态、22控件命中、28内页比较通过；公开版核验已完成，见部署记录 |

## 验证证据

- Node.js v26.7.0，锁文件npm ci，无依赖变化。npm run validate：Astro34文件0错误/0警告/0提示，构建17页；内链、资源、锚点、语言元数据、canonical、结构化数据、sitemap和预算通过。见 [validate.log](validate.log)。
- 本机使用Chrome157.0.8103.51，手机为Chromium/iPhone13配置模拟。原Playwright配置派生为临时文件，仅将旧预览占用的4321改4325及测试目录绝对化，仓库配置不变。命令：PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --config=/tmp/solo-immersive-playwright.config.mjs --workers=4。50项通过，见 [e2e.log](e2e.log)。CI使用原配置与Playwright Chromium，50项同样通过（1.7m），见部署记录。
- [audit.json](audit.json)：320/390/600/601/700/701/768/800/900/1024/1440px × 双语 × 四任务共88项，无横向溢出；可见按钮、主要行动、语言和任务标签至少44px。每个宽度/语言检查暂停按钮中心真实命中且与导航不重叠，共22项。双语×两视口×七内页共28项，正文、归一站内origin后的链接、几何、字号、颜色与圆角均与基线相等，页面错误0。
- 独立审查直接复核中间断点点击命中和复杂图层上的文字，修复过导航遮挡、H1/简介亮区及定位语被暗幕覆盖；代表有效像素抽样约H1最低14.5:1、简介10.9:1，支持修复，不视为完整WCAG认证。
- Canvas新增测试比较真实画面签名，证明随动、暂停/离屏静止、恢复与减少动画静态；读屏仍只有语义树/键盘与自动检查证据，不等于真实辅助设备体验。
- Skill、产品内容数据、原交互脚本、公共global.css、依赖、锁文件、Astro/Actions/路由配置未改。源代码差异检查和独立审查另见 [independent-review.md](independent-review.md)。

本次未进行真实用户、实体手机、全面读屏、功耗或外网性能研究；不把工程通过当作审美、理解或提效的证明。页面长度、资源和动效成本见 [差异评估](change-evaluation.md)。
