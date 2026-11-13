# 官网视觉改版：彩色创作工作室

本版保留已确认的成果叙事，以钴蓝、橙、青柠、原创3D插画和有节奏的动效增强官网的视觉表现。四个代表场景采用已获认可的外部用户问题。本记录涵盖设计与本地验证；发布状态与线上核验见[发布记录](deployment.md)。

## 查看成品

- [中文预览](preview.zh-CN.html)、[英文预览](preview.en.html)：内嵌图片、字体、样式与脚本，可直接打开；首页、上手页和指南互通。
- [中文桌面](screenshots/home.zh-CN.1440.png)、[中文手机](screenshots/home.zh-CN.390.png)、[英文桌面](screenshots/home.en.1440.png)、[英文手机](screenshots/home.en.390.png)。
- [界面设计场景](screenshots/design.zh-CN.1440.png)。其他原有页面与仓库链接指向既有在线地址。

## 设计方法与实际改动

| 方法 | 本版处理 | 用意与可核对依据 |
| --- | --- | --- |
| AIDA，围绕目标组织阅读 | 首屏呈现想达到的成果；四个场景说明困难、具体帮助和交付目标；随后解释机制、提供来源与开始入口 | 吸引力围绕使用者想做的事展开。保留已认可的内容顺序，见 `Home.astro`、`outcomes.ts` |
| 视觉层级、格式塔的图底与分组 | 大标题和大幅3D主视觉建立首屏焦点；钴蓝承载品牌、橙色突出首要行动、暖白承载正文、青柠收束开始区；四个任务使用同一材质体系 | 通过尺寸、对比和接近关系组织注意力，避免所有信息同等醒目；见截图及 `Hero.astro`、`TaskStage.astro` |
| 动效编排与即时反馈 | 标题和插画分层入场；主视觉缓慢浮动、响应精细指针；任务切换、按钮和方法说明提供短反馈 | 为进入、选择和行动提供反馈。原生CSS/WAAPI实现，主要改变transform/opacity；默认内容可见，键盘切换即时 |
| 渐进增强与使用者控制 | 原生单选与静态内容先成立；动效可暂停并记忆选择，遵循系统减少动画设置；触屏操作独立于悬停 | 视觉增强保留原来的访问与操作路径；图片本地化、响应式、预留尺寸，避免新增3D运行时 |

视觉层级依据：[NN/g原文](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)。可读性和持续动效控制依据：[W3C文字对比度](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)、[暂停、停止、隐藏](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)。这些是设计依据，不能代替真实用户对新版的评价。

## 参考技能与图片

- 仓库的视觉与交互参考路由，以及 [frontend-design](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/frontend-design/SKILL.md)：明确艺术方向，统一构图、材质、字体与颜色。
- [animate](https://github.com/emilkowalski/skills/blob/f7ce8c02d6e3c8f0d980a44c57bcc41a40254349/skills/animate/SKILL.md)、[animation-performance](https://github.com/emilkowalski/skills/blob/f7ce8c02d6e3c8f0d980a44c57bcc41a40254349/skills/animation-performance/SKILL.md)：使用适合任务的原生实现、缓出、短反馈、transform/opacity和减少动态效果支持。未引入动画库。
- `sites:sites`：在现有Astro仓库与GitHub Pages流程中完成本地实现；本轮没有注册其他托管站点。
- `imagegen`：用内置图像工具生成主视觉及摄像头、手机、发布窗口、纸飞机四个场景插画，再按320/768与720/1440尺寸输出透明WebP。[生成提示词、原图位置和产物路径](image-prompts.json)。没有采用外部产品截图或品牌标志。

## 四个外部场景与证据边界

| 场景 | 原始问题 |
| --- | --- |
| 修复反复的Bug | [Cursor：修复WebRTC访客黑屏破坏背景模糊等原功能](https://forum.cursor.com/t/major-regression-loop-in-next-js-webrtc-state-management-context-loss-issues/153452) |
| 甩掉界面的AI味 | [移动App已能用，重设计和参考截图后仍主要换色](https://www.reddit.com/r/vibecoding/comments/1t3fg6l/vibe_coded_app_ui_help/) |
| 把Demo真正上线 | [非编程背景设计者无法接通前后端、认证、配置和部署](https://www.reddit.com/r/AskVibecoders/comments/1wyowet/how_do_you_actually_go_from_vibe_coding_to_a/) |
| 找到第一批用户 | [Inslytic有SDK、控制台和入门流程，发帖时仍没有用户](https://www.reddit.com/r/vibecoding/comments/1sh4kge/ive_been_building_a_product_for_months_and_i_cant/) |

原帖证明这些困难存在。Skill的帮助按当前指令能力描述；插画与旁边文字明确为交付目标示意。没有将原作者写成Skill客户，也没有编造使用效果、提效、用户数或转化数据。

## 对照实际diff的评估

基线为 `28495b2`，对照该提交与当前官网工作树的差异，不包含开工前已存在的两份双语Skill修改。

| 维度 | 修改前 → 修改后 | 收益与成本 |
| --- | --- | --- |
| 视觉 | 素色标题、代码绘制的小预览 → 鲜明的全幅首屏、5张统一3D图、彩色任务选择和结尾行动区 | 视觉表现和材质一致性可直接核对；图片与维护成本增加 |
| 动态体验 | 基础悬停 → 入场、浮动、视差、图像切换、分组反馈 | 反馈更丰富且可暂停；新增约80行动效逻辑，需要持续维护 |
| 任务内容 | 自有示例承担代表场景 → 已确认的四类外部真实问题 | 具体痛点、原始讨论和Skill帮助对应；普通报价示例与历史记录独立保留 |
| 路径和边界 | 原17页、双语、六个场景锚点、计算器、无脚本路径 → 保留 | 新案例贯穿上手和指南；旧`requirements`仍为新产品首版；没有改共享Skill行为 |
| 资源 | 全站约564.6KiB / JS11.3KiB → 约1309.2KiB / JS14.0KiB | 增加约0.73MiB静态资源及2.7KiB脚本，仍在原5MiB/60KiB预算内；没有新增依赖或服务 |

上述是可观察的实现变化和受控成本，不能据此宣称已证明用户价值的帕累托改善。是否更吸引目标读者、更易理解或提高安装转化，需要真实使用验证。

## 验证与独立审查

- [`npm run validate`](validate.log)：Astro 0错误、0警告；17个HTML，全部内链、锚点、语言对应、元数据、结构化数据、sitemap与原体积预算通过。最终JS14.0KiB、全站1309.2KiB。
- [`PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --workers=2`](e2e.log)：最终34项全部通过，53.7秒；覆盖双语、桌面/手机、任务与安装往返、语言和历史导航、复制、报价计算下载、历史执行页、无脚本、axe、暂停/系统减少动态效果、旧`requirements`和404。
- [16种场景状态](browser-states.json)：2种语言×2种尺寸×4个场景，图像加载成功，无横向溢出、页面异常或严重/关键axe问题。
- [4组实际动效检查](motion-checks.json)：主图transform随时间变化，桌面精细指针倾斜响应，暂停停止浮动并清除视差。
- [4组离线预览检查](offline-preview-checks.json)：双语×启用/关闭JavaScript，图片、场景选择、对应任务、安装往返、语言切换与刷新、指南锚点可用，无HTTP请求或页面异常。
- `git diff --check`通过；两份开工前已有修改的Skill文件SHA-256保持一致。本轮没有改动依赖、工作流、质量门槛或共享Skill。

全新上下文的只读评审代理先按原始要求、适用规则、前后版本、diff和浏览器表现形成判断，再与本报告的改动评估比对。确认视觉方向回应本次诉求，来源和示意边界诚实。审查发现的暗色代码块焦点、当前页导航选中状态对比度已修复；逐场景检查发现的标签颜色插值也已消除。评审对最终产物复核通过，没有剩余阻断发现；详见[独立审查记录](independent-review.md)。

## 验证边界

浏览器自动检查和人工看图能检查构图、内容与操作，不能证明用户审美偏好、推广效果或真实设备性能。本轮未做真实用户试用或低端实机测试；无障碍自动检查也不等于完整合规审计。线上核验范围见发布记录。

归档预览、图片提示词与验证记录不参与官网构建或运行。可执行的维护要求保存在项目规范与网站README中。
