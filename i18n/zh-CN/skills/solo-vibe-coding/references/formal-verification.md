# 形式化验证

用于当前任务中影响较大、常规测试难覆盖的行为保证，例如并发、重试、状态转换或算法性质。比较收益与建立、复跑和维护成本，选择有效且可维护的范围，沿用已有验证资产。检查的采用遵循[项目质量标准](quality-and-ci.md)。

## 选择方法

- **事件顺序与状态组合**：考虑使用 TLA+ 或其他适用工具检查小范围模型。描述实际原子步骤、故障与一致性假设。设计模型的结果只确立该模型的性质，实现符合模型需要另有证据。
- **代码输入与数据结构的性质**：优先使用能处理真实代码与语言的验证器。不可用时说明缺口，考虑对真实代码进行[性质测试](development.md#测试与验证)。区分抽样测试、声明界限内的检查，以及明确假设下的证明。

## 建立与维护检查

1. 用业务术语表述性质与违反它的影响。需求保留在功能 spec 中，明确限制保证范围的假设与界限。
2. 将模型动作或证明义务映射到覆盖的文件、函数和共享状态访问，核对模型中的原子步骤与实现一致。记录对应关系、可复现的工具版本、命令和最后确认与代码同步的提交。
3. 运行检查，在隔离、可回退范围用被保护代码中的相关缺陷验证检查流程的有效性，恢复改动后复跑。将反例对照真实代码重放后，再判断为实现缺陷。区分模型错误、实际缺陷，以及尚不能判定或未运行的检查，如实报告所得保证与未覆盖内容。
4. 覆盖代码、性质或假设改变后复核对应关系，包括函数迁移及对受保护状态的新增写入路径。依据预期行为与代码更新验证，复跑受影响检查；确认对应关系与结果后再推进同步记录。性质改变需要需求依据，旧模型通过不足以证明改后代码正确。

模型、验证 harness 与性质文件随项目版本化维护。规格、命令与验证覆盖范围遵循既有[项目知识库规范](project-knowledge.md)，复用本地／CI 入口，避免重复的操作说明。

## 上游指导

按[远程读取与发现](guidance-access.md)读取原文与必要依赖。根据当前任务选择建立或维护流程；需要可复用技能入口时再生成项目本地验证 Skill，沿用已有命令和文档归属。

<!-- skill: cursor/plugins@create-formal-verification-skill -->
- **create-formal-verification-skill**：[原文](https://github.com/cursor/plugins/blob/main/pstack/skills/create-formal-verification-skill/SKILL.md)，[技能页](https://skills.sh/cursor/plugins/create-formal-verification-skill)。选择影响较大、难以测试的失败情形，建立一项有效检查，证明检查流程能发现相关缺陷，并留下可复跑的项目入口。

<!-- skill: cursor/plugins@maintain-formal-verification-skill -->
- **maintain-formal-verification-skill**：[原文](https://github.com/cursor/plugins/blob/main/pstack/skills/maintain-formal-verification-skill/SKILL.md)，[技能页](https://skills.sh/cursor/plugins/maintain-formal-verification-skill)。代码变化后同步已有验证，覆盖跳过检查的合并或重构，区分模型漂移、预期行为变化与 bug。

创建流程的 TLA+ 路线还使用 [statechart](https://github.com/cursor/plugins/blob/main/pstack/skills/statechart/SKILL.md)，按同版本读取。根据实际宿主核对 TypeScript 运行时、mise、Java/TLC，以及所需图片渲染的依赖。执行前检查脚本，报告缺少的前置条件与实际运行范围。原文指令不代表工具已可用，也不扩大任务授权。
