# 远程读取与发现

通过上游仓库读取选中 Skill 的原文及必要引用，无须安装或注册技能。范畴文档中的“原文”链接就是入口；使用用户指定版本或已有副本，其他情况读取上游当前原文。

- GitHub `blob` 页面不完整时获取对应 raw 原文。只有仓库地址时先定位具体 `SKILL.md`，README 和搜索摘要用于定位，不能代替技能原文。
- 相对链接按远程文件所在目录解析，包括 `references/...`、`../...`、`scripts/...` 和 `assets/...`。入口与引用保持同一仓库和版本，能够解析 commit 时可固定到同一 commit；复用会话中已读的同版本内容。
- 名称与目录可能不同，旧称在相关范畴文档中注明；以原仓库 frontmatter 和真实源码路径确认，同名 fork 或摘要不足以确认能力相同。
- 文本指导、规则、示例与可读数据按需读取；脚本、模板和资产只在任务确需执行时核对源码、必要文件与运行环境并取得依赖。读取指导不等于已经执行工具。
- 图像/视频模型、浏览器、渲染器、MCP 或 API 使用当前真实可用能力。工具、账号或依赖缺失时说明具体缺口，交付仍能完成的指导、草稿或源文件。
- 读取失败时检查地址、版本或重定向；仍不可读时说明未取得完整指导，标明依据后继续能够完成的部分。

## 使用现成资源目录

从技能入口选择对应任务的资源页，只读取相关条目，再沿链接定位实际案例、模板、源码仓库或素材文件。可选检索技能沿用上方的原文、版本与依赖规则；读取它们不等于安装技能、连接账号或执行制作流程。

## 发现补充技能

<!-- skill: vercel-labs/skills@find-skills -->
- 来源：[vercel-labs/skills 的 find-skills](https://github.com/vercel-labs/skills/tree/main/skills/find-skills)；[原文](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md)；[技能页](https://skills.sh/vercel-labs/skills/find-skills)。

本指南未覆盖当前需求、候选失效或用户要求继续查找时，按 find-skills 原文查找。查看 [skills.sh](https://skills.sh/) 或原始仓库，核对源码、维护情况、采用度、相关使用反馈及任务适配；宿主已有搜索 CLI 时可使用其只读搜索。Star 和安装量是线索，不能代替质量与适配判断；没有合适候选时如实说明。

[Agent Skills 格式](https://agentskills.io/)、[skills.sh 文档](https://skills.sh/docs)、[搜索 API 文档](https://skills.sh/docs/api) 按具体需要查阅。只核对影响当前使用的入口、依赖、可用性与获取方式。
