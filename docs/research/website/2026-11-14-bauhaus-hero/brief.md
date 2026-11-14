# 首页暖纸色与现代包豪斯启发

## 需求与范围

用户要求：「把官网首页的蓝色的背景调整一下，现在这个蓝色感觉有点太商业化了，就是能不能稍微就是再美化一下？就是我的用户群体是 AI skill，对 AI skill 不熟悉的小白用户。年轻用户们。包豪斯风格？」

基线`0043997`为用户要求恢复的浅色官网；其网站源码与`25d8205`一致。本轮调整首页首屏背景和相关表面、文字、按钮与参考图呈现，采用现代包豪斯启发，保持入口清楚、阅读友好。现有内容、案例、第三方图片、页面结构、交互和内页均保留。沿用既有提交推送和GitHub Pages发布授权；两份Skill文件已有用户修改须原样保留且不提交。

修改前后以`git diff 0043997 -- website/src/components/Hero.astro docs/specs/website.md`核对。修改前完整源码可从该提交获取；截图见相邻`2026-11-14-stock-experience/screenshots/`中同源码版本的首页图。修改后代表图保存在本目录`screenshots/`。

## 设计依据与取舍

- [Letterform Archive：Bauhaus Typography at 100](https://exhibitions.letterformarchive.org/bauhaus/exhibit/introduction)通过原作展示无衬线文字、非对称网格、留白与实用性。本轮沿用现有无衬线字体、双栏与内容层级，用色彩重新组织主行动和设计参考，属于现代启发而非完整历史风格复刻。
- [MoMA展览设计师的包豪斯实践](https://www.moma.org/explore/inside_out/2009/11/06/bauhaus-the-graphic-design-department-goes-back-to-school/)讨论超越三原色和基本几何形状的惯常表达。此次黄色承担参考图画框，朱红标识主要操作，蓝色用于辅助标识；不依靠额外插画或图案解释产品。
- [Impeccable配色指导](https://github.com/pbakaus/impeccable/blob/main/.agents/skills/impeccable/reference/colorize.md)强调颜色的角色和真实状态检查。参考图的亮底工具栏、说明和焦点随背景一起调整，原始照片不重新着色。
- [WCAG文字对比度](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)与[必要控件对比度](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)分别采用普通文字4.5:1、大字与必要控件/焦点3:1。以浏览器计算样式和实际交互状态检查。

暖纸底与局部强调能减弱原有大面积商业蓝的观感、让入口容易辨认，是设计推断；年轻初学者是否更喜欢、能否更顺利开始使用，需真实反馈，不能由工程检查推定。

## 本地验证

- `validate.log`：Astro检查、17页构建、内链/锚点、语言对应、元数据、结构化数据及体积验证通过。
- `e2e.log`：现有38项桌面/手机、双语、键盘、无脚本、任务连续性、复制、计算下载、动态偏好与可检测无障碍测试通过（38.4秒）。
- `audit.json`、`audit.mjs`：英中首页在1440、768、390、320宽度共8组合无横向溢出，首屏素材加载成功；15种角色/状态检查无失败，所测普通文字最低5.47:1。显式等待渲染后读取悬停和键盘焦点；禁用控件单独记录豁免。另检查关闭脚本时两张原图均可见，以及灰度下的主操作可辨识性。
- `detector.json`：对最终Hero源码运行一次Impeccable静态检测，0告警；不将该结果当作用户审美或完整无障碍认证。

浏览器为本机Chrome及测试所用Chrome，截图与模拟屏宽不代表实体设备或环境光测试。工程结果、审美偏好和真实使用效果分开判断。

## 独立复核

`/root/review_bauhaus_hero`以全新上下文只读审查，先独立读取原始要求、适用指令、前后源码、实际diff、截图及检查，再与`evaluation.md`交叉核对。预发布复核通过，未发现阻断问题；确认改动仅为首屏CSS与规范，入口在参考图之前、灰度下仍可辨、无脚本参考可见，称为「现代包豪斯启发」适当。

审查要求统一最终体积为788.9 KiB，并披露画框内边距使参考图显示宽度约303→281px；已在自评中完成，不宣称全部尺寸不变或零成本。真实年轻初学者的审美、理解与转化尚无证据；正式站部署与资源同SHA核对另行记录。
