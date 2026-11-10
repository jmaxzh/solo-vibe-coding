# 调研快照：2026-11-11

仅在追溯收集结果、比较采用度或查漏时读取，不作为普通任务的必读提示。数据来自当日官方仓库 API、skills.sh 及网站页面；不同缓存、四舍五入和查询时刻会略有差异。Star 属于整个源仓库；安装量通常属于索引条目。二者反映采用度，不能证明独立开发者的收入、流量或转化改善。

## 源仓库采用度

| 来源 | GitHub Star 约 | 备注 |
| --- | ---: | --- |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | 38,862 | Skills CLI 与 find-skills |
| [anthropics/skills](https://github.com/anthropics/skills) | 192,108 | 整库，不能全部归给 frontend-design |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | 59,568 | 当前与旧营销名称共存于市场索引 |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | 147,739 | 本地可检索设计资料 |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | 33,838 | Vercel 官方集合 |
| [leonxlnx/taste-skill](https://github.com/leonxlnx/taste-skill) | 112,937 | 市场旧名多，当前源树一个主要 Skill |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | 107,472 | 多个命令，不是同等数量独立 Skill |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | 55,755 | 创作者自己的设计/动效家族 |
| [mengto/skills](https://github.com/mengto/skills) | 7,353 | 含网页、3D、素材与其他专项 |
| [JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) | 27,453 | 原始来源，区别于 fork |
| [openai/skills](https://github.com/openai/skills) | 28,662 | imagegen 等技能源 |
| [greensock/gsap-skills](https://github.com/greensock/gsap-skills) | 18,240 | GSAP 官方技能源 |
| [LottieFiles/motion-design-skill](https://github.com/LottieFiles/motion-design-skill) | 2,929 | 动效设计原则 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | 8,724 | 需要实际 Stitch 能力 |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | 6,786 | 技能库；与 Remotion 框架仓库不同 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | 82,204 | 视频框架和技能 |
| [fal-ai-community/skills](https://github.com/fal-ai-community/skills) | 266 | 生成媒体专项，低采用度备选 |
| [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | 10,930 | UI 专项能力 |
| [kylezantos/design-motion-principles](https://github.com/kylezantos/design-motion-principles) | 1,542 | 第三方动效实践归纳 |
| [samber/developer-relations-skills](https://github.com/samber/developer-relations-skills) | 8 | 不能因单技能安装量较多就称为高星来源 |

## 技能安装量

下列都是约数；K=千，M=百万。来源和适用范围见各任务指南。

| 家族 | 当时观察到的条目与安装量 |
| --- | --- |
| 发现 | find-skills 4.3M；更早缓存有 3.2M |
| 营销表达 | product-marketing 94.1K；copywriting 251.1K；copy-editing 159.3K；marketing-psychology 174.7K；marketing-ideas 155.4K；offers 65.9K |
| 内容与传播 | social 95.8K；content-strategy 175K；free-tools 81.7K；launch 86.7K |
| 条件性 | customer-research 124.4K；cro 101K；analytics 93.2K；marketing-loops 55.5K |
| 营销旧名 | social-content 67K；product-marketing-context 61.2K；pricing-strategy 61.2K；analytics-tracking 57.8K；page-cro 57.5K；launch-strategy 56K；free-tool-strategy 52.3K |
| 界面 | frontend-design 1.1M；ui-ux-pro-max 444.5K；impeccable 398.8K；design-taste-frontend 758K；emil-design-eng 434.8K；web-design-guidelines 846.6K |
| 静态与主题 | canvas-design 130.3K；theme-factory 100.9K；algorithmic-art 94.3K；web-artifacts-builder 118K；brand-guidelines 118.1K |
| 网页专项 | landing-page（MengTo）2.3K；threejs（MengTo）2.3K；gsap（MengTo）2K |
| Stitch | stitch::generate-design 11.6K；enhance-prompt 59.4K；design-md 66K；stitch-loop 57.2K；stitch::react-components 8.3K；旧 react:components 50.4K |
| 图片 | imagegen 6.2K；baoyu-image-gen 34.2K；baoyu-cover-image 32.6K；baoyu-infographic 33.4K；baoyu-xhs-images 31.8K；baoyu-slide-deck 31.7K；baoyu-article-illustrator 32.4K；baoyu-comic 30.4K |
| GSAP | core 86.3K；scrolltrigger 82.7K；timeline 79.1K；performance 79.2K；plugins 76.8K；react 75.6K；utils 74.2K；frameworks 71K |
| 动效 | motion-design（LottieFiles）24.2K；animate（Emil）212.7K；review-animations 297.3K；improve-animations 263K；animation-performance 74.3K；fixing-motion-performance 28.6K；design-motion-principles 13.9K |
| Remotion | best-practices 788.8K；create 306.1K；render 308K；studio 269.8K；captions 304.3K；markup 299.1K；interactivity 292.8K；multimedia 277.6K；maps 275.3K；saas 290.4K；docs 290.9K；upgrade 281.9K；license 49.4K |
| HyperFrames | hyperframes 1.5M；media-use 1.4M；remotion-to-hyperframes 594.1K |
| 较弱候选 | build-in-public（samber）13.3K；indie-hacker-strategy 1.3K；jab-hook 377；fal-video-generation 12 |

Taste 旧索引还曾显示：high-end-visual-design 458.9K、redesign-existing-projects 458.8K、minimalist-ui 425.2K、full-output-enforcement 401.1K、gpt-taste 399.5K、industrial-brutalist-ui 397K、stitch-design-taste 394.9K、brandkit 390.7K、image-to-code 385.9K、imagegen-frontend-web 380.2K、imagegen-frontend-mobile 373.8K、design-taste-frontend-v1 330.4K、v2-experimental 19.5K、image-taste-frontend 3.6K。不能据这些历史数字推断当前仍可独立安装。

HyperFrames 旧索引还曾显示：CLI 1.5M、registry 约 1.3M、animation 1M、core 931.1K、creative 917.1K、keyframes 754.8K、audio 663.9K、general-video 661.8K、product-launch-video 539.3K、faceless-explainer 522K、motion-graphics 514.3K、slideshow 499.8K。当前真实入口见视频指南。

## 素材与源码的采用度

| 来源 | 仓库 Star 约 | 范围说明 |
| --- | ---: | --- |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | 127,837 | 官方组件与 Blocks 的整个源库 |
| [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits) | 51,648 | 创意 React 源码组件 |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | 23,192 | 免费组件库，Pro 产品另算 |
| [ibelick/motion-primitives](https://github.com/ibelick/motion-primitives) | 6,930 | 开源动效组件 |
| [lucide-icons/lucide](https://github.com/lucide-icons/lucide) | 25,686 | 图标家族 |
| [tabler/tabler-icons](https://github.com/tabler/tabler-icons) | 22,596 | 图标家族 |
| [simple-icons/simple-icons](https://github.com/simple-icons/simple-icons) | 26,196 | 品牌图标 |
| [iconify/iconify](https://github.com/iconify/iconify) | 6,393 | 框架仓库，不等于每个图标集的认可度 |
| [pqoqubbw/icons](https://github.com/pqoqubbw/icons) | 页面约 8,284 | Lucide Animated |
| [withastro/astro](https://github.com/withastro/astro) | 63,873 | 框架，不能归给所有主题 |
| [greensock/GSAP](https://github.com/greensock/GSAP) | 30,419 | 动画框架，与技能库是不同仓库 |

Phosphor React 仓库约 1.8K Star，核心资产仓库约 399；不能以某个子仓库 Star 直接代表整个图标生态。LottieFiles dotlottie-web 播放器约 941，不能直接当作整个素材平台的规模。

## 可获取性与旧链接

- Mobbin MCP 调研时在 Pro/Team；SaaSFrame 免费筛选结果受限；Lapa 与 Land-book 有免费浏览和 Pro。
- Framer、Webflow、Astro Themes、21st.dev、Shadcnblocks、Aceternity、Magic UI 等有不同的免费/商业边界；公开预览不代表所有源文件都可获取。
- LottieFiles 免费动画与编辑、导出、优化、CDN 等付费能力分别核对。Spline 免费导出当时带水印，视频与无水印等能力有套餐差异。
- HyperFrames 的 media-use 调研文档区分免费素材与 credits：音乐库、音效、素材搜索、部分配音有免费范围；AI 生成和数字人可能用 credits，部分能力支持用户选择的本地工具。曾记录免费 Voice Turbo 每月 3 分钟、音乐库 10K+、素材搜索 75K+，这些不是持久承诺。
- Godly 重定向到 Recent；旧 `spline.design/community` 为 404，现行为 `community.spline.design`。Codrops、Motion Primitives 曾被当前抓取工具以 403 拒绝，Rive/Phosphor 等依赖 JavaScript；不能以抓取结果代替真实站点可用性。

## 开发者讨论的证据范围

[HN 关于 Feather/Lucide 的讨论](https://news.ycombinator.com/item?id=33223964)和 [Tabler Icons 讨论](https://news.ycombinator.com/item?id=31121089)有具体采用者评价；[Godly 讨论](https://news.ycombinator.com/item?id=37226805)同时包含视觉欣赏与对操作性的批评，并提到 Mobbin 更适合真实产品界面。它们是有日期与上下文的个体意见，不等于当前开发者一致好评。

商业平台首页的用户数、客户 Logo 与评价属于平台自述；本库不据此编造第三方评分或“已证实有效”的营销结论。
