# 工程质量指导选型与接入记录

日期：2026-11-11。范围：更新独立开发项目指南的远程参考与运行规则，不安装外部技能或插件。

## 目标与选择

工程项目优先确定适用的质量指标和自动检查；托管 CI 不可用时允许本地自动检查。已有标准和设施优先沿用，按技术栈与规模建立可执行基线。

| 职责 | 采用来源 | 选择依据 |
| --- | --- | --- |
| 简化与复用 | DietrichGebert/ponytail | 明确复用优先顺序与最小完整改动 |
| 主要工程纪律 | unclebob/ub-mode | TDD、行为保持的重构与质量验证 |
| 代码评审 | anthropics/claude-plugins-official，plugins/code-review/commands/code-review.md | 统一入口，明确原版 PR 与多代理依赖 |
| 指标建设 | addyosmani/agent-skills，constraint-driven-development | 标准、命令、基线与例外形成可执行约束 |
| CI 建设 | addyosmani/agent-skills，ci-cd-and-automation | 负责自动执行与门禁，复用同一套标准 |
| 设计决策 | anthropics/knowledge-work-plugins，architecture | 比较新功能及技术方案，形成 ADR |
| 架构诊断 | mattpocock/skills，improve-codebase-architecture | 从真实代码发现结构问题、确定重构优先级 |

CE Simplify Code、Matt TDD、Property-Based Testing、testing-strategy、Argo setup-quality-gates 及本轮技术栈专项候选不进入运行清单。已有 senior-architect、architecture-patterns 退出架构入口。原有 debugging-strategies、javascript-testing-patterns、e2e-testing-patterns、documentation-and-adrs 保留。

三个测试候选的退出基于用户的精简选择；属性测试和测试策略仍有独立价值，并非 UB Mode 完整覆盖。架构技能也并非完全重复，本次按常用职责与入口数量收敛。

## 接入边界

- 质量指标与 CI 规则集中于 references/quality-and-ci.md，根入口规定优先顺序，其他范畴通过引用使用。
- UB Mode 主导工程纪律，Ponytail 不降低已确定的验证标准。上游工具和数字需要核对可用性与适用范围；提交、推送、清理等仍遵守授权。
- 官方评审插件未安装；远程读取和其他宿主中的方法适配不宣称执行完整插件流程。
- Matt 架构诊断依赖同版本 codebase-design、productivity/grilling、必要报告资源；复用已有 domain-modeling 入口。其子代理步骤受宿主能力与授权约束。
- 本地检查是 CI 不可用时的运行方案，不能声称获得服务器端不可绕过的合并保护。

## 调研快照

本轮查询 GitHub API 与 skills.sh：

| 架构技能 | 仓库星数 | skills.sh 安装量（约） |
| --- | ---: | ---: |
| mattpocock/skills，improve-codebase-architecture | 321291 | 130 万 |
| anthropics/knowledge-work-plugins，architecture | 35408 | 7000 |
| alirezarezvani/claude-skills，senior-architect | 29614 | 1600 |
| wshobson/agents，architecture-patterns | 42407 | 25200 |

星数属于整个仓库；安装量不是好评率或独立用户数。能力以当时上游原文为准，运行入口不依赖本档案或这些数字。

核对了新收录指导原文及 Matt 的 codebase-design、grilling、HTML-REPORT.md，确认 Anthropic 的 system-design 引用可访问。技能格式校验、Markdown 本地文件与锚点引用检查以及 git diff 空白检查通过。这些检查验证指南结构，不代表在产品项目中执行了 CI 或质量工具。
