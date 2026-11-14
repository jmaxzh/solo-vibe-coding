# 整站体验、图示语义与本地化

本版将共享视觉覆盖全部页面类型，把主视觉和四类案例改为与任务有关的界面/流程示意，并分别打磨中文与英文。基线为`1e3e6130010ef09793cbc8af84e276c80127e1fd`，实现对照该提交与本轮实际diff评估。用户已授权实现后直接发布，状态与线上证据见[发布记录](deployment.md)。

## 成品与改动

- 全站对照：[中文](screenshots/overview.zh-CN.png)、[英文](screenshots/overview.en.png)。
- 手机上手：[中文](screenshots/start.zh-CN.390.png)、[英文](screenshots/start.en.390.png)。
- 四类图示：[修复](screenshots/scene.development.zh-CN.png)、[设计](screenshots/scene.design.zh-CN.png)、[上线](screenshots/scene.deployment.zh-CN.png)、[推广](screenshots/scene.growth.zh-CN.png)。

| 目标 | 修改前 | 本版实现与依据 |
| --- | --- | --- |
| 全站视觉一致 | 首页独有大幅品牌面与动效，内页沿用旧文档版式 | `PageIntro.astro`、`SceneIcon.astro`与公共样式覆盖上手、指南、工具、制作记录、更新、文章和404；按操作/阅读调整正文密度 |
| 图像帮助理解用途 | 主视觉为抽象雕塑，任务以独立物件隐喻 | `TaskVisual.astro`共享于首页和指南：黑屏修复与原功能保留、多页设计一致、登录/保存/再次访问、目标用户与演示/试用入口 |
| 动效表达关系 | 位图浮动与整体淡入 | 流程方向、任务切换和界面视差；文字始终不透明，暂停、减少动态效果、无脚本和静态含义保留 |
| 本地化 | 部分中文为抽象标语或不自然表达 | 导航、首页、任务、上手、工具、制作记录、两篇中文文章、更新及404分别编辑；英文独立调整措辞和图示说明，保持事实/命令/费用/边界对应 |
| 用途连续 | 报价页开始入口进入默认修视频需求 | 报价入口携带`quote`参数和锚点，上手复用报价完整需求与检查；四代表任务和旧`requirements`均保留 |
| 资源与维护成本 | 全站1309.2KiB、JS14.0KiB | 删除六张明确未用的大图后，全站790.2KiB、JS13.9KiB；新增共享图示与页头组件需要维护，无新增依赖、服务或3D运行时 |

保留17个HTML、原URL、六个指南锚点、双语、原生任务选择、计算/下载、复制和历史/语言/刷新行为。指南将四类代表任务排在前面，通用任务仍可从原锚点访问。网站运行不读取研究档案。

## 方法与技能

- [一致性与标准](https://www.nngroup.com/articles/consistency-and-standards/)及设计系统：共用品牌、组件和行为，按页面用途区分宣传、操作和阅读。参考仓库视觉路由中的`frontend-design`、[Impeccable](https://github.com/pbakaus/impeccable/blob/c4cd1924c389f68d37c687d9c2bbf13f12547c41/.agents/skills/impeccable/SKILL.md)的页面模式、Operate/Read与craft指导。专用上下文/审查引擎不可用，实际采用项目规范、源码与浏览器审查，未宣称运行引擎。
- [JTBD](https://www.christenseninstitute.org/theory/jobs-to-be-done/)及[有目的的动效](https://m1.material.io/motion/material-motion.html)：以具体困难和想达到的进展组织画面。沿用`animate`的原生实现、短反馈、暂停与减少动态效果指导。
- [本地化](https://www.w3.org/International/questions/qa-i18n)：共享产品事实，分别组织语言与呈现。参考[营销技能](https://github.com/coreyhaines31/marketingskills/tree/1f837447b20bb6f0e72d87b80ece1c221c362c7d/skills)中的`product-marketing`、`copywriting`和`copy-editing`，检查客户语言、清晰度、语气、具体性与证据。沿用既有官网定位，没有新增一套重复的营销上下文档案。

社区原帖仍是痛点来源，不是本Skill的客户案例。图示标明处理思路和目标，未伪造原帖作者的使用成果、用户数量、提效或转化。原制作对照记录中的结果、成本和限制保持事实不变。

## 验证

- [`npm run validate`](validate.log)：Astro检查0错误、0警告；17HTML、内链/锚点、双语、元数据、结构化数据、sitemap与原体积预算通过。
- [最终34项Playwright检查](e2e.log)：全部通过，52.9秒；增加各内页共享页头和单一主标题核对、报价用途延续/语言保持、404的axe覆盖。原有计算、下载、历史导航、无脚本和动画偏好检查保留。
- [28组页面视图](surface-checks.json)：7种页面×2种语言×2种宽度，无横向溢出或页面异常，保存对应截图。
- [16种案例状态](browser-states.json)：2种语言×2种宽度×4案例，无严重/关键axe问题、横向溢出或页面异常，图示有对应的可访问说明。
- `git diff --check`通过。两份开工前已有修改的Skill文件SHA-256未变，未修改工作流、依赖或质量门槛。

## 独立审查与边界

全新上下文的只读评审先根据原始请求、确认要求、适用规则、前后源码、实际diff和浏览器表现形成判断，再核对本自评。其发现的404中文对比度与报价入口用途丢失已修复，并独立复核了404、报价的安装/语言/刷新/历史/无脚本路径和无透明度入场。评审另覆盖17页、320/390/768/1440宽度与中英文自然性；详见[审查记录](independent-review.md)。

实现检查和独立设计判断支持本地交付；真实目标用户能否复述图示、理解用途、完成首次安装，以及审美偏好、转化和低端实机性能，尚无本轮数据。没有将工程通过写成这些效果或全维用户价值的帕累托改善。生产验证另见发布记录。
