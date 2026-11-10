# 图片与静态素材

用于主视觉、插画、产品概念图、海报、封面、信息图、连续图卡和演示图。先按实际交付选能力；位图生成、排版成图、SVG/代码图形与可编辑 UI 是不同产物。图片里的界面不是已实现的产品，生成的幻灯片图片也不等于可编辑 PPT。

## 选择

| 产物 | 候选 |
| --- | --- |
| 官网主视觉、插画、概念图、抠图、改图、透明素材 | imagegen；用户需要多供应商/API 批处理时考虑 baoyu-image-gen |
| 强调构图、排版和视觉表达的 PNG/PDF 海报 | canvas-design |
| 开发日志、文章或发布内容封面 | baoyu-cover-image |
| 技术方案、探索结论、流程与知识总结 | baoyu-infographic；需要简单可编辑图形时优先 SVG/代码 |
| 一组适合社交平台的连续图卡 | baoyu-xhs-images |
| 逐页演示图或图像式介绍材料 | baoyu-slide-deck |
| 文章配图、漫画式讲述 | baoyu-article-illustrator、baoyu-comic，按需求选 |

## 候选与依赖

<!-- skill: openai/skills@imagegen -->
- **imagegen**：[原文](https://github.com/openai/skills/blob/main/skills/.system/imagegen/SKILL.md)，[技能页](https://skills.sh/openai/skills/imagegen)。生成与编辑位图、参考图变体、透明背景素材、主视觉和产品概念图。优先宿主已有的图像工具；使用 CLI 路径需要对应 API 凭据。可编辑矢量和代码图形按实际交付形式选择工具。

<!-- skill: anthropics/skills@canvas-design -->
- **canvas-design**：[原文](https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md)，[技能页](https://skills.sh/anthropics/skills/canvas-design)。先确定视觉表达，再制作 PNG/PDF 静态作品；适合海报与少量文字的视觉设计，不用于实现网页。

以下来自 [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills)，源码为 `skills/<name>/SKILL.md`。内容组织指导可直接应用，实际生成需要可用的图像后端、凭据及相应脚本运行环境。

<!-- skill: jimliu/baoyu-skills@baoyu-image-gen -->
- **baoyu-image-gen**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-image-gen/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-image-gen)。API 图片生成与编辑，支持参考图、比例、保存提示和批量任务。适合需要多供应商或批处理的工作；可用后端、模型和调用方式以当前原文为准。

<!-- skill: jimliu/baoyu-skills@baoyu-cover-image -->
- **baoyu-cover-image**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-cover-image/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-cover-image)。按类型、色板、渲染、文字、情绪和目标比例组织封面，适合形成可复用的封面风格。

<!-- skill: jimliu/baoyu-skills@baoyu-infographic -->
- **baoyu-infographic**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-infographic/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-infographic)。按信息结构选择布局与视觉风格，用于技术、流程与知识内容图解。

<!-- skill: jimliu/baoyu-skills@baoyu-xhs-images -->
- **baoyu-xhs-images**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-xhs-images/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-xhs-images)。将内容拆为连续图卡，结合布局、视觉风格与色板组织表达，适合中文内容、小红书或轮播图。

<!-- skill: jimliu/baoyu-skills@baoyu-slide-deck -->
- **baoyu-slide-deck**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-slide-deck/SKILL.md)，[技能页](https://skills.sh/jimliu/baoyu-skills/baoyu-slide-deck)。从内容和大纲生成逐页演示图；需可编辑演示文稿时，检查它的实际输出并选择适配能力，不假称图片为可编辑源文件。

<!-- skill: jimliu/baoyu-skills@baoyu-article-illustrator -->
- **baoyu-article-illustrator**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-article-illustrator/SKILL.md)。文章配图位置、类型与生成；只有用户要求文章配图时追加。

<!-- skill: jimliu/baoyu-skills@baoyu-comic -->
- **baoyu-comic**：[原文](https://github.com/JimLiu/baoyu-skills/blob/main/skills/baoyu-comic/SKILL.md)。用于漫画式解释与故事画面。

## 参考、复用与交付

找成品插画、摄影和纹理读 [媒体素材库](../resources/media.md)，图标读 [图标库](../resources/icons.md)。按项目已确认风格统一比例、字体、色板和主要视觉元素，按任务所需制作变体。输出实际文件或可查看预览，说明格式与透明背景情况。
