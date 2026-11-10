# 视频与媒体制作

用于可导出的视频、产品介绍、界面演示、字幕和视听素材。根据交付形式选择：精确展示 UI 与文字常适合程序化视频；实拍、生成式片段、配音和数字人使用相应媒体后端。仅比较工具或讨论脚本时不启动生成、渲染或账号操作。

## 主选

| 条件 | 候选 |
| --- | --- |
| 熟悉 React，需要可编程、可重复修改的界面演示与动态图文 | Remotion 官方技能组 |
| 希望用 HTML/CSS/GSAP 编排可导出视频 | hyperframes |
| HyperFrames 视频需要图片、素材、音乐、音效、旁白或数字人 | media-use |
| 明确需要 fal 的生成、变换或视频后端 | fal-video-generation 与实际宿主工具；作为专项备选 |

不要同时用两个框架实现同一个时间线。已有工程优先沿用；由当前模型按用户技术环境判断，不因为两个候选都存在就让用户必须选。

## Remotion

来源：[remotion-dev/skills](https://github.com/remotion-dev/skills)。以下是真实子技能，由总入口按需导向并远程读取；无需安装技能集合。源码位于 `skills/<name>/SKILL.md`。实际预览和导出仍需要项目中的 Remotion 与渲染环境，单纯阅读不初始化工程。

<!-- skill: remotion-dev/skills@remotion-best-practices -->
- **[remotion-best-practices](https://github.com/remotion-dev/skills/blob/main/skills/remotion-best-practices/SKILL.md)**：[技能页](https://skills.sh/remotion-dev/skills/remotion-best-practices)。当前为各 Remotion 专项的路由入口。早期索引概述还提到动画、音频、资产、3D、图表、文字、转场、Lottie、Tailwind、FFmpeg、字幕与音效；不要将旧概述中的文件结构硬编码成当前版本。
<!-- skill: remotion-dev/skills@remotion-create -->
- **[remotion-create](https://github.com/remotion-dev/skills/blob/main/skills/remotion-create/SKILL.md)**：建立新 composition 或项目；只有用户的制作任务需要时才初始化工程，保留现有目录内容。
<!-- skill: remotion-dev/skills@remotion-render -->
- **[remotion-render](https://github.com/remotion-dev/skills/blob/main/skills/remotion-render/SKILL.md)**：渲染视频与静帧。
<!-- skill: remotion-dev/skills@remotion-studio -->
- **[remotion-studio](https://github.com/remotion-dev/skills/blob/main/skills/remotion-studio/SKILL.md)**：预览与 Studio。
<!-- skill: remotion-dev/skills@remotion-captions -->
- **[remotion-captions](https://github.com/remotion-dev/skills/blob/main/skills/remotion-captions/SKILL.md)**：字幕处理。
<!-- skill: remotion-dev/skills@remotion-markup -->
- **[remotion-markup](https://github.com/remotion-dev/skills/blob/main/skills/remotion-markup/SKILL.md)**：React 视频布局与元素。
<!-- skill: remotion-dev/skills@remotion-interactivity -->
- **[remotion-interactivity](https://github.com/remotion-dev/skills/blob/main/skills/remotion-interactivity/SKILL.md)**：Studio 中可编辑、可选择元素的结构。
<!-- skill: remotion-dev/skills@remotion-multimedia -->
- **[remotion-multimedia](https://github.com/remotion-dev/skills/blob/main/skills/remotion-multimedia/SKILL.md)**：剪裁、裁切和媒体信息等。
<!-- skill: remotion-dev/skills@remotion-maps -->
- **[remotion-maps](https://github.com/remotion-dev/skills/blob/main/skills/remotion-maps/SKILL.md)**：地图、路线与地理视频。
<!-- skill: remotion-dev/skills@remotion-saas -->
- **[remotion-saas](https://github.com/remotion-dev/skills/blob/main/skills/remotion-saas/SKILL.md)**：制作视频应用或 SaaS 的专项，普通发布短片不需要。
<!-- skill: remotion-dev/skills@remotion-docs -->
- **[remotion-docs](https://github.com/remotion-dev/skills/blob/main/skills/remotion-docs/SKILL.md)**：查阅现行 API。
<!-- skill: remotion-dev/skills@remotion-upgrade -->
- **[remotion-upgrade](https://github.com/remotion-dev/skills/blob/main/skills/remotion-upgrade/SKILL.md)**：已有工程升级，不能因使用本指南默认升级。
<!-- skill: remotion-dev/skills@remotion-license -->
- **[remotion-license](https://github.com/remotion-dev/skills/blob/main/skills/remotion-license/SKILL.md)**：用户的用途涉及授权选择时查现行规则，不把技能仓库开源推断为所有框架用途都无费用。

## HyperFrames 与媒体

<!-- skill: heygen-com/hyperframes@hyperframes -->
- **hyperframes**：[原文](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes/SKILL.md)，[技能页](https://skills.sh/heygen-com/hyperframes/hyperframes)。HTML 组合、GSAP 时间线、场景、字幕、音频与可参数化渲染。发布片、解释片、图表、竖屏内容等由同一入口按需读取参考；旧的 motion-graphics、product-launch-video 等历史条目不是当前独立技能。

<!-- skill: heygen-com/hyperframes@media-use -->
- **media-use**：[原文](https://github.com/heygen-com/hyperframes/blob/main/skills/media-use/SKILL.md)，[技能页](https://skills.sh/heygen-com/hyperframes/media-use)。查找或生成图片、图标、品牌标志、音乐、音效、配音、数字人、转录、抠像与调色素材。部分为本地能力，部分依赖 HeyGen 登录、额度或付费；逐项以当前环境和用户范围为准。图像模型生成与视频时间线渲染是不同能力。

<!-- skill: heygen-com/hyperframes@remotion-to-hyperframes -->
- **remotion-to-hyperframes**：[原文](https://github.com/heygen-com/hyperframes/blob/main/skills/remotion-to-hyperframes/SKILL.md)。用户明确要求迁移框架时使用，不自动重建已有 Remotion 工程。

## 生成式后端备选

<!-- skill: fal-ai-community/skills@fal-video-generation -->
- **fal-video-generation**：[原文](https://github.com/fal-ai-community/skills/blob/main/skills/fal-video-generation/SKILL.md)，[技能页](https://skills.sh/fal-ai-community/skills/fal-video-generation)。生成或转换片段、图像动画、参考视频、扩展与升格。调研时新名称仅约 12 次安装、仓库约 266 Star，作为专项备选，不包装成高采用度主选。后端模型、端点、费用、工具与产物路径须实际验证。
<!-- skill: fal-ai-community/skills@genmedia -->
- **genmedia**：[原文](https://github.com/fal-ai-community/skills/blob/main/skills/genmedia/SKILL.md)。终端环境发现模型、看 schema、上传与运行；需要实际 CLI 与服务凭据。
<!-- skill: fal-ai-community/skills@fal-media -->
- **fal-media**：[原文](https://github.com/fal-ai-community/skills/blob/main/skills/fal-media/SKILL.md)。对应 MCP 宿主的媒体操作入口；不假定当前存在。

找现成片段、音乐和音效读 [媒体素材库](../resources/media.md)。找视觉表现参考读 [动画库](../resources/animation.md) 或 [灵感库](../resources/inspiration.md)。完成制作时查看真实渲染和音画效果，交付实际文件与未完成项；不把脚本、时间线源码或静态封面称为已经交付的视频。
