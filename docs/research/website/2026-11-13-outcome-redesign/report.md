# 官网场景版：改动与验证

本版以明确产品方向的独立开发者为读者，说明他们想完成什么、可能卡在哪里、Skill 为助手提供什么帮助，以及希望交付什么。代码已提交、推送并部署，生产验证见[发布记录](deployment.md)。

## 查看成品

- [中文预览](preview.zh-CN.html)、[英文预览](preview.en.html)：内嵌样式、字体与脚本，可直接打开，无需启动服务。
- 预览中的官网、上手页、使用场景页互相链接；原执行记录、报价工具和仓库链接指向既有在线地址。
- [中文桌面](screenshots/home.zh-CN.1440.png)、[中文手机](screenshots/home.zh-CN.390.png)、[英文桌面](screenshots/home.en.1440.png)、[英文手机](screenshots/home.en.390.png)。

## 改动评估

基线：`dad270ff529638c2999dab6c3d5622e99fb36eee`；对照该提交与改版提交`ad3bbea31fb2ff0b6934285dd4f696a60d95f9f9`的实际差异评估。

| 维度 | 之前 | 本版与可核对依据 |
| --- | --- | --- |
| 用途表达 | 抽象方法介绍，主视觉展示普通导出功能 | 四类任务分别展示目标、具体困难、助手获得的指导与交付目标；见 `outcomes.ts`、`TaskStage.astro` 与实际页面 |
| 任务连续性 | 上手默认统一制作报价器 | 场景任务贯穿上手、安装往返、刷新、历史导航与语言切换；有对应浏览器测试 |
| 证据范围 | 收藏导出承担首页主演示 | 任务图明确为交付目标示意；报价工具与实际执行记录独立保留，公开两组都完成及额外成本 |
| 维护方式 | 首页介绍、指南和默认需求分别维护 | 四类场景数据同源用于首页、指南、上手；删除旧预览组件、旧定位数据和未用首页字段 |
| 能力与约束 | 双语静态网站、原URL、六场景锚点、计算和下载 | 17页、URL及锚点保留；原有功能与无脚本路径通过检查；Skill 包和依赖未改动 |

内容理解和路径的改善可以从产物与实际操作核对；推广、提效或减少用户投入的效果尚未测得。不能将工程验证视为已证明用户价值的帕累托改善。

新增场景与需求内容有体积成本：发布目录约从506 KiB增至564.6 KiB，脚本约从10.2 KiB增至11.3 KiB，仍满足原有5 MiB和60 KiB预算；没有新增依赖、服务或用户必经的专业学习步骤。离线预览内嵌资源，独立存放于研究目录，不参与网站构建或运行。

## 方法依据

- [价值主张画布](https://www.strategyzer.com/library/the-value-proposition-canvas)：将用户任务、困难、预期收益与具体帮助对应。
- [product-marketing](https://github.com/coreyhaines31/marketingskills/blob/1f837447b20bb6f0e72d87b80ece1c221c362c7d/skills/product-marketing/SKILL.md)、[copywriting](https://github.com/coreyhaines31/marketingskills/blob/1f837447b20bb6f0e72d87b80ece1c221c362c7d/skills/copywriting/SKILL.md)：按目标用户与替代做法组织价值，使用具体、可核对的语言。
- [landing-page](https://github.com/mengto/skills/blob/07274a3b3dba5f6a311186ddaf65765d94f78cec/agent-skills/web-design/landing-page/SKILL.md)、[frontend-design](https://github.com/anthropics/skills/blob/2c5958ecac7cee2b583967a2c4981d0f4a75c579/skills/frontend-design/SKILL.md)：围绕理解与开始使用组织信息，以任务交互承载内容，沿用既有品牌与技术。

## 验证

- `npm run validate`：通过。Astro 0错误、0警告；17个HTML、全部内链锚点、语言对应、元数据、结构化数据、sitemap与体积检查通过。
- `PLAYWRIGHT_CHANNEL=chrome npm run test:e2e -- --workers=2`：最终30项全部通过，48.8秒；覆盖双语、桌面/手机、安装往返、刷新、语言与历史导航、复制、报价计算及下载、真实执行记录、无脚本、axe、减少动态效果与404。
- 清理未使用的首页数据后再次完整构建验证；本地生成目录37个文件的SHA-256与上述浏览器测试版本全部一致。实际线上发布文件的口径与验证见[发布记录](deployment.md)。
- [16种场景状态](browser-states.json)：2种语言 × 2种尺寸 × 4个任务，没有横向溢出、页面异常或axe严重/关键问题。
- [4组离线预览检查](offline-preview-checks.json)：双语 × 启用/关闭脚本；任务切换、对应需求与安装往返可用，启用脚本时语言切换与刷新保留任务，无HTTP请求和页面异常。
- `git diff --check`：通过。

## 独立评审

由全新上下文的只读评审代理完成。评审先依据原始需求、适用指令、基线与工作树差异、成品和验证证据形成判断，再阅读改动自评。

确认并修复了安装往返及历史导航丢失任务、两段英文需求模板省略确认条件的问题，补充对应回归检查。评审独立复核中英安装、刷新、连续前进后退、语言切换、无效参数和无脚本路径，并再次执行静态验证；修复复核通过，未发现剩余实质问题或已知能力回归。

## 尚未验证

四类场景是依据当前能力组织的用途说明，不能当作真实客户访谈或已完成项目案例。实际用户能否理解用途、安装转化、首次任务成功率和提效仍需真实使用验证。新版线上响应、资源和关键交互已核验，见[发布记录](deployment.md)；搜索收录仍未验证。
