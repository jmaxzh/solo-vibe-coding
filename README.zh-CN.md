# Solo Vibe Coding

**把你想做的，变成能用的。**

[English](README.md)

为目标明确、希望借助 AI 独立做出产品的人提供的单一 Agent Skill。描述想做的网站、工具或功能，编程助手按任务选择相关指导，帮助规划、实现与检查。你可以确认重要选择，无须先掌握每个技术环节。

专业指导覆盖获客与转化、视觉与交互、需求与沟通、架构与技术设计、开发与质量、生产部署与发布。

工程项目优先确定质量指标并建立自动检查，共用项目知识库规范。各范畴可以独立进入，不探索创业方向。

## 安装

使用支持 [Agent Skills](https://agentskills.io/specification) 的编程助手。技能按需远程读取上游原文，因此助手需要能够读取本地文件和获取远程文本。浏览器、渲染器、CLI、账号及 API 凭据按所选任务需要提供。

安装 Node.js 22.20+ 与 npm 后，在产品项目中执行：

```sh
npx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding
```

按提示选择编程助手，默认安装到当前项目；添加 `-g` 可跨项目使用。支持的来源与选项见 [Skills CLI 安装参考](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add)。

从本地仓库安装：

```sh
npx skills add /path/to/solo-vibe-coding --skill solo-vibe-coding
```

手动安装时，下载或克隆仓库，将完整的 `skills/solo-vibe-coding/` 目录复制到助手规定的技能位置，保留参考文件、元数据与许可证。重载技能的方式按宿主说明执行。

## 使用

通过编程助手支持的界面选择技能。支持 `$技能名` 显式调用的宿主可使用以下示例：

```text
使用 $solo-vibe-coding，把这条反馈整理成范围明确的功能规格：
用户希望将收藏条目导出为 CSV。沿用项目已有规范。
```

```text
使用 $solo-vibe-coding，评审这次变更中的明确 bug 并报告发现。
```

```text
使用 $solo-vibe-coding，改善落地页的价值表达与视觉设计。
沿用已有品牌和技术栈。
```

```text
使用 $solo-vibe-coding，制作工具的功能页，完善表单、结果展示与状态反馈，
结合适合的图片和动效，沿用已有技术栈。
```

```text
使用 $solo-vibe-coding，制作带粒子背景和滚动叙事的静态作品展示页。
```

```text
使用 $solo-vibe-coding，根据真实产品画面制作公众号封面、小红书图卡与竖屏短视频，
保持统一视觉风格，按各平台调整构图与节奏，交付素材与可编辑源文件。
```

[技能入口](skills/solo-vibe-coding/SKILL.md) 指向六类任务指导、六份现成参考与素材目录和技术、质量两类专项参考，并提供远程读取与项目知识库的共用规范。助手按需读取选中的上游技能及必要引用，无须安装或注册这些外部技能。实际执行取决于可用工具和用户授权。来源或工具不可用时，指南要求说明缺口和实际完成的工作。

## 官网

可以先试用[能操作的报价计算器](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/examples/quote-calculator/)，或跟着[开始使用指南](https://jmaxzh.github.io/solo-vibe-coding/zh-CN/getting-started/)做第一件事。官网提供中英文页面、完整首次需求和按用户目标组织的使用示例。

## 维护这个仓库

官网源码位于 `website/`，与可安装的技能包独立维护。本地开发、检查、GitHub Pages 发布与回退方法见其 [README](website/README.md)。[维护知识库入口](docs/README.md) 汇集架构、需求、决策与测试说明；完整验证和评审记录独立保留在研究档案中。

## 语言与目录

```text
AGENTS.md                              仓库指令
README.md                              英文项目介绍
README.zh-CN.md                        中文项目介绍
LICENSE                                MIT 许可证
CONSTRAINTS.md                         官网质量标准
website/                               双语静态官网与检查
.github/workflows/website.yml          官网检查与 Pages 发布
docs/README.md                         项目知识库入口
docs/decisions.md                      决策索引与 ADR 入口
skills/solo-vibe-coding/                默认英文技能包
  SKILL.md                             技能入口
  agents/openai.yaml                   宿主界面元数据
  references/                          任务、专项与共用规范参考
    resources/                         现成案例、模板、源码与素材
  LICENSE.txt                          随技能包提供的许可证
i18n/zh-CN/AGENTS.md                    中文仓库指令
i18n/zh-CN/skills/solo-vibe-coding/      结构对应的中文技能
```

默认分发英文版本。[中文技能](i18n/zh-CN/skills/solo-vibe-coding/SKILL.md) 为维护者保留对应内容与结构，是同一技能的另一语言版本，不是新增能力。维护内容时同步两种语言。

## 许可证与来源

项目原创内容使用 [MIT 许可证](LICENSE)。技能各范畴参考链接到上游技能与资源。上游指导、软件、模板、字体、媒体、商标和服务保留各自许可证与条款，本仓库不重新授权这些内容，也不表示与其作者存在关联。使用前核对所选来源的许可、依赖、访问条件及费用。
