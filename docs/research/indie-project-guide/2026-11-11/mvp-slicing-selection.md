# MVP 切分技能选型

## 范围与方法

为 `solo-vibe-coding` 增加已有产品方向内的 MVP 切分指导。按 [find-skills 原文](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md) 先查看 skills.sh 排行，再运行 `npx --yes skills find`，查询 `mvp`、`scope` 和 `user story mapping`。结合安装量、源仓库星数及技能原文判断适配性。

以下为 2026-11-11 查询快照。安装量是技能条目的采用信号，星数属于整个仓库，不代表单个技能的使用效果；数据会变化。

## 主要候选

| 候选 | skills.sh 安装量 | GitHub 仓库星数 | 原文审查与取舍 |
| --- | --- | --- | --- |
| [deanpeters/product-manager-skills / user-story-mapping](https://skills.sh/deanpeters/product-manager-skills/user-story-mapping) | 约 2.8K | 7,961 | 已读入口、模板与示例。沿用户旅程划分首版必需与后续能力，直接适合 MVP 切分，采用 |
| [slavingia/skills / mvp](https://skills.sh/slavingia/skills/mvp) | 约 2.8K | 11,163 | 已读入口。侧重人工交付到自动化的创业方法，包含周末交付、首日盈利、立即收费等默认要求；本次不采用 |
| [addyosmani/agent-skills / planning-and-task-breakdown](https://skills.sh/addyosmani/agent-skills/planning-and-task-breakdown) | 约 74.3K | 115,569 | 已读入口。擅长将明确需求拆成实现任务与验证步骤，不能直接替代首版产品范围的选择，本次不采用 |

其他检索命中包括 `orch-build-mvp`、`scope` 和 `scoping-cutting`。前两项已读入口，分别偏向完整开发编排和持续范围管理；后者仅查到目录描述与热度信息，未取得完整原文，不作为已完成审查的候选。

## 采用依据与适配

选择 `user-story-mapping`，以目标用户、任务路径和可用的首版范围为核心。原文包含活动与任务数量要求、团队协作建议及多版本规划，接入时按项目既有原则适配：映射深度随实际流程变化，简单流程使用清单或表格，产物进入已有 spec。本次只加入 MVP 切分入口与操作指导。

核读版本：

- [user-story-mapping 原文](https://github.com/deanpeters/product-manager-skills/blob/cfcb697f14b8891d8b3ec43c16c3547df3e70e13/skills/user-story-mapping/SKILL.md)、[模板](https://github.com/deanpeters/product-manager-skills/blob/cfcb697f14b8891d8b3ec43c16c3547df3e70e13/skills/user-story-mapping/template.md)、[示例](https://github.com/deanpeters/product-manager-skills/blob/cfcb697f14b8891d8b3ec43c16c3547df3e70e13/skills/user-story-mapping/examples/sample.md)。
- [mvp 原文](https://github.com/slavingia/skills/blob/eb9f57fba03ddb0382ed3bfe6654d3d7df128c70/skills/mvp/SKILL.md)。
- [planning-and-task-breakdown 原文](https://github.com/addyosmani/agent-skills/blob/main/skills/planning-and-task-breakdown/SKILL.md)；其仓库查询时主分支为 `301b02b12bff98e4688e6984af6556802322bbde`，本项入口通过主分支读取。

安装量来自 Skills CLI 搜索结果，星数来自各源仓库 GitHub API。没有取得独立的任务效果评测，采用判断依据为原文内容与本次任务的匹配程度。
