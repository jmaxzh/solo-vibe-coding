# 图标素材

用于产品 UI、官网、技术栈与品牌展示。优先一个主要图标家族，保持尺寸、线宽、粗细、填充和视觉重量一致；已有图标系统通常继续沿用。选资源时区分 UI 图标、品牌标志和动画图标。

<!-- resource: https://lucide.dev/ -->
## Lucide
- [入口](https://lucide.dev/)；[源码](https://github.com/lucide-icons/lucide)。统一线性 SVG，可调大小、颜色、线宽，支持多个技术栈与按需引入；调研约 2,000+ 图标。
- AI 文档：[llms.txt](https://lucide.dev/llms.txt)、[llms-full.txt](https://lucide.dev/llms-full.txt)。可以给具体图标名和实际包接口，避免模型发明不存在的 export。
- 获取：免费开源，ISC；品牌标志用途另看其品牌说明。

<!-- resource: https://phosphoricons.com/ -->
## Phosphor Icons
- [入口](https://phosphoricons.com/)；[React 源码](https://github.com/phosphor-icons/react)。不同重量、填充与双色等表现，适合更有性格的产品与图文素材。
- AI：用具体图标名、weight 和源码接口；React 当前包名以官方文档为准，调研时推荐 `@phosphor-icons/react` 而非旧 `phosphor-react`。
- 获取：开源图标体系，实际包和资产看对应说明。网站依赖 JavaScript 时可读官方仓库。

<!-- resource: https://tabler.io/icons -->
## Tabler Icons
- [入口](https://tabler.io/icons)；[源码](https://github.com/tabler/tabler-icons)。描边与填充，多种集成方式；调研超过 6,200 个图标，适合功能丰富的工具与后台。
- AI：具体 SVG、sprite 或组件源码，可统一网格、线宽和色彩。
- 获取：图标源码免费开源、MIT；网站另有打包格式与其他产品付费包，不能混为一谈。

<!-- resource: https://icon-sets.iconify.design/ -->
## Iconify
- [图标集搜索](https://icon-sets.iconify.design/)；[框架文档](https://iconify.design/)；[源码](https://github.com/iconify/iconify)。聚合大量图标家族，调研目录约 220 套、32 万个图标。
- AI：给出真实图标集前缀与名称，使用对应 SVG 或组件；先比较风格，再固定一个体系。
- 获取：按具体图标集展示的授权使用，不能给整个聚合库套一个统一资产授权。

<!-- resource: https://simpleicons.org/ -->
## Simple Icons
- [入口](https://simpleicons.org/)；[源码](https://github.com/simple-icons/simple-icons)。技术与商业品牌的 SVG 标志，适合技术栈、集成和开发者工具页面。
- AI：选择真实品牌条目，保持官方图形与颜色信息；品牌标志不同于普通通用 UI 图标。

<!-- resource: https://lucide-animated.com/ -->
## Lucide Animated
- [入口](https://lucide-animated.com/)；[源码](https://github.com/pqoqubbw/icons)。Lucide + Motion 的可复制 React 动态图标，适合按钮、悬停与状态反馈。
- AI：[llms.txt](https://lucide-animated.com/llms.txt)、[完整文档](https://lucide-animated.com/llms-full.txt)、[图标目录](https://lucide-animated.com/icons/llms.txt)、[skill.md](https://lucide-animated.com/skill.md)，并提供 `/mcp` 入口。Skill 文档可直接远程读取；MCP 连接是独立能力，不因读了文档就视作已经可用。
- 获取：MIT 开源；调研约 468 个动态图标，源码/registry 取用须与实际栈匹配。

<!-- resource: https://heroicons.com/ -->
## Heroicons
- [入口](https://heroicons.com/)；[官方源码](https://github.com/tailwindlabs/heroicons)。Tailwind 作者维护的 SVG 图标，有 React / Vue 接口与 Figma 入口；MIT。作为前期提及的补充图标家族保留。
- AI：选择相符的大小与样式，沿官方导出使用，不与现有图标家族无理由混用。
