# 质量指标与自动检查

用于所有工程项目启动或接手时确定质量标准、配置检查工具并建立 CI；已有设施优先沿用。检查内容与技术栈、风险、项目规模相匹配，临时脚本或纯文档仓库也建立适用的最小基线，不强套应用项目的测试、覆盖率或编译要求。

## 建设顺序与交付

1. **识别现状**：读取项目指令、语言与依赖清单、锁文件、现有格式与静态分析配置、测试及覆盖报告、构建命令和流水线。先测量已有基线，再确定缺口。
2. **确定标准**：列明适用维度、阈值或基线、实际命令、运行时机，以及失败是阻断还是警告。优先使用项目工具；只有影响选择的目标、成本或取舍不明确时才询问用户。沿用已有质量文档，无约定时写入根目录 `CONSTRAINTS.md`，并从现有项目指令或文档入口引用。
3. **实现检查**：将标准落实为版本化配置和一个可重复执行的本地入口，例如现有包管理脚本、Make target 或检查脚本。复用成熟工具，明确安装方式、版本与必要环境；关键检查失败或工具异常时返回非零退出码。
4. **建立自动执行**：仓库支持时接入托管 CI 或已有 runner，调用同一本地入口，在 PR 与主分支更新时执行适用检查。核对 required checks 或等效合并规则；仅有工作流文件不代表已阻止合并。
5. **验证有效性**：运行真实命令，在隔离或可回退范围验证已知违规被拦截、正常样例通过、检查工具失败不会被当作成功。清理临时样例，记录实际结果和未执行项。

托管平台、仓库权限或运行环境不支持 CI 时，交付本地检查入口及适用的提交前或推送前 hook，说明启用方法和何时运行。hook 可绕过、手工命令需主动执行，不宣称与受保护分支的门禁等效；没有可用 hook 时至少保留统一命令，并在任务交付前运行。具备 CI 条件后复用该入口接入，无需重新定义标准。

## 指标选择

| 维度 | 确定什么 |
| --- | --- |
| 格式与静态分析 | 项目采用的格式、lint、类型或语言静态检查及错误级别 |
| 行为与覆盖 | 关键行为的测试层级、运行命令、适用的新增代码或整体覆盖基线 |
| 编译与构建 | 对项目有效的编译、打包或产物完整性检查 |
| 复杂度与重复 | 使用工具支持的复杂度、重复率指标与测量范围；需要时增加变异测试 |
| 架构依赖 | 已确认的模块边界、禁止依赖与循环依赖检查；设计合理性仍需架构分析 |
| 其他风险 | 根据产品选择安全、性能、体积、无障碍等可执行检查，明确所需运行环境 |

每项标准必须能定位到真实命令与判定配置；不适用的维度说明原因。已有债务采用测量基线并逐步收紧，不机械套用覆盖率或复杂度数字。快速检查、任务结束检查和完整检查按耗时分层，本地与 CI 共用配置及判定来源，文档引用配置而不维护第二套阈值。

检查失败应修复原因。减少断言、跳过测试、扩大忽略范围、降低阈值等变更需有实际依据并显式报告；合理例外记录范围、原因与复查条件。报告区分标准已定义、命令已运行、流水线已执行、合并门禁已生效四种状态。

## 上游指导

<!-- skill: addyosmani/agent-skills@constraint-driven-development -->
- **constraint-driven-development**：[原文](https://github.com/addyosmani/agent-skills/blob/main/skills/constraint-driven-development/SKILL.md)。识别项目工具，建立可执行质量标准、测量基线与逐步收紧机制，防止为通过检查而弱化标准。原版的访谈方式和 `CONSTRAINTS.md` 模板按实际信息缺口及项目约定使用；引用的 `interview-me` 仅在确需其访谈方法时按同仓库定位。需要复制判定脚本时读取同版本源码与依赖并验证，不仅复制入口中的命令示例。

<!-- skill: addyosmani/agent-skills@ci-cd-and-automation -->
- **ci-cd-and-automation**：[原文](https://github.com/addyosmani/agent-skills/blob/main/skills/ci-cd-and-automation/SKILL.md)。将项目检查接入流水线，配置触发、缓存、并行、报告与失败反馈。原文示例偏 Node/TypeScript 和 GitHub Actions，按实际语言、平台及版本适配；生产部署、发布验证和回滚结合[生产部署与发布](deployment.md)，只在相应任务范围内使用。

<!-- skill: samber/cc-skills-golang@golang-continuous-integration -->
- **golang-continuous-integration**：[原文](https://github.com/samber/cc-skills-golang/blob/main/skills/golang-continuous-integration/SKILL.md)，[技能页](https://skills.sh/samber/cc-skills-golang/golang-continuous-integration)。Go 项目配置 GitHub Actions 时，优先用本项落实测试、竞态、lint、漏洞扫描和构建；通用 ci-cd-and-automation 用于其他栈或平台及本项未覆盖的问题。工作流共用同一本地检查入口与标准，工具版本按 `go.mod`、现有配置及当前兼容性确定。按需读取上游 `assets/` 模板；GoReleaser、Codecov、依赖机器人和自动评审仅在项目需要时接入，代码评审仍沿用[既有入口](development.md#代码评审与调试)。

指标指导负责定义项目标准，CI 指导负责执行与阻断；实现过程遵循[开发与质量](development.md)，文档归位遵循[根技能的知识库规范](../SKILL.md#项目知识库规范)。
