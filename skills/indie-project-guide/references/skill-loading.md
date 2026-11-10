# 外部技能的远程读取与发现

通过上游仓库读取选中 Skill 的 `SKILL.md` 及必要引用，将指导应用到当前任务，无须安装或注册技能。

## 选择与应用

根据任务指南选择；重叠时比较用途、输入、交付形式、技术栈、既有实现和审美。技能名称与源码路径不一致时，参照 [名称与入口](skill-names.md)，并核对上游 frontmatter。

任务指南中的“原文”链接就是读取入口。使用用户指定的版本、分支或已有副本，其他情况读取上游当前原文。阅读指导与宿主是否支持原生技能调用相互独立。

使用网页读取或文件获取能力取得内容。GitHub `blob` 页面读取不完整时，获取对应 raw 原文；只有仓库地址时，先定位具体 `SKILL.md`。README 和搜索摘要可帮助定位，不能代替技能原文。

## 渐进读取远程引用

- 先读选中技能的入口，再按任务读取必要章节、Markdown 引用、数据或模板。
- 相对链接以该远程文件所在目录解析，包括 `references/...`、`../...` 和代码中引用的 `scripts/...`、`assets/...`。
- 例如入口为 `https://raw.githubusercontent.com/owner/repo/main/skills/foo/SKILL.md`，其 `references/type.md` 位于同目录下的 `references/type.md`；`../bar/SKILL.md` 指向 `skills/bar/SKILL.md`。
- 入口和后续文件保持同一仓库与版本；能够解析到 commit 时可用同一 commit 读取，避免跨版本拼接规则。会话中已读的同版本内容直接复用，不反复请求。
- 应用与当前任务相关的专业指导；执行方式遵循用户要求和宿主能力。

## 文本指导与执行依赖

| 远程技能需要什么 | 处理方式 |
| --- | --- |
| 文本原则、示例、规则、评审或写作框架 | 读取原文并应用，无须安装技能 |
| 相关 Markdown、设计数据、CSV 或模板说明 | 按远程路径读取必要文件或片段；可直接理解的数据可直接用于判断 |
| 脚本、模板、资产、二进制或运行包 | 制作任务确需执行时，核对源码、必要文件和运行环境，在该任务范围内取得依赖；仅报告实际运行的检查 |
| 图像/视频模型、浏览器、渲染器、MCP 或 API | 使用当前真实可用能力。无法执行时说明具体缺口，并交付仍可完成的指导、草稿或源文件 |

读取指导不等于执行工具。制作或渲染所需的项目依赖按制作任务处理，与安装技能包分开判断。

读取失败时检查地址、版本或重定向；仍不可读则说明未取得完整指导，标明依据后利用摘要或其他可读来源继续可完成的部分。

## find-skills

<!-- skill: vercel-labs/skills@find-skills -->
- 来源：[vercel-labs/skills 的 find-skills](https://github.com/vercel-labs/skills/tree/main/skills/find-skills)；[原文](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md)；[技能页](https://skills.sh/vercel-labs/skills/find-skills)。
- 用途：本库不能覆盖当前需求、候选失效或用户要求继续找技能时，按官方发现指南查找。
- 方法：查看 [skills.sh](https://skills.sh/) 或搜索原始仓库，核对具体源码、来源、维护情况、采用度和与任务相关的使用反馈，再读取原文。宿主已有搜索 CLI 时可使用其只读搜索。
- 优先原始来源。索引中的名称可能已更改或合并，以源码确认真实入口。采用度和 Star 只是线索，推荐还需符合当前任务与质量要求；没有合适候选时如实说明。
- [Agent Skills 格式](https://agentskills.io/)；[skills.sh 文档](https://skills.sh/docs)；[搜索 API 文档](https://skills.sh/docs/api)。API 与鉴权以现行文档为准。

只核对影响当前使用或推荐的现状，例如入口、必要依赖、服务可用性与获取方式。
