# Solo Vibe Coding

**面向个人开发者的 AI 编程技能与工作流——从想法、设计到实施与验证。**

[English](README.md) | 简体中文

使用 Claude Code 和 Codex 规划、开发和维护自己的软件。从想法出发，明确需要实现的行为，选择设计方案，并完成具有明确验证要求的实现。六项核心技能包含开发工作流，以及文档、UI、UX、MySQL 和 CC Connect 专项指导。

可以为整个项目或一个限定阶段调用工作流，也可以按任务使用专项技能。这些可复用指令和集成辅助工具不替代编程代理，也不提供应用托管服务。

## 技能

| 技能 | 用途 | 启用与依赖 |
| --- | --- | --- |
| [SDLC 工作流](translations/zh-CN/skills/sdlc-workflow/SKILL.zh-CN.md) | 需求、技术方案、实施、验证与知识库维护 | 显式调用；文档任务需要 `sdlc-instr-doc-design` |
| [指令与文档设计](translations/zh-CN/skills/sdlc-instr-doc-design/SKILL.zh-CN.md) | 指令、提示词、技能及面向读者的文档 | 文档产物任务，可独立使用 |
| [UI 设计](translations/zh-CN/skills/sdlc-ui-design/SKILL.zh-CN.md) | 视觉层级、排版、颜色、布局与动效 | 适用的视觉界面任务 |
| [UX 设计](translations/zh-CN/skills/sdlc-ux-design/SKILL.zh-CN.md) | 信息组织、交互、反馈与恢复 | 适用的产品内任务体验工作 |
| [MySQL 数据表与 SQL 设计](translations/zh-CN/skills/sdlc-mysql-design/SKILL.zh-CN.md) | 建模、SQL、索引、事务与并发 | 必须已明确以 MySQL 为目标数据库 |
| [CC Connect 集成](translations/zh-CN/skills/cc-connect-integration/SKILL.zh-CN.md) | 消息平台接入本地代理及可选桌面副本 | CC Connect 集成任务 |
| [公开构建](translations/zh-CN/skills/sdlc-build-in-public/SKILL.zh-CN.md) | 统一选题、按渠道独立成稿、集中审稿与交付指导 | 可选，支持独立安装 |
| [worktree 优先的开发策略](translations/zh-CN/skills/worktree-first-development/SKILL.zh-CN.md) | 在项目级或限定项目的用户主目录指引中维护隔离开发策略 | 可选，需要 `sdlc-instr-doc-design` |
| [指令文档架构师](translations/zh-CN/skills/instruction-doc-architect/SKILL.zh-CN.md) | 指令条款原子化、抽象分层、依赖图、审查与改写 | 可选，可独立安装；面向 AI 的指令文档任务 |

推荐安装六项核心技能，但不会为每项任务启用全部技能。项目初始化和知识库专项审查仍须明确要求。

## 安装

下列 GitHub 命令需要先将分发改动发布到仓库。测试尚未发布的检出目录时，使用其实际绝对路径作为来源。

### Codex

```sh
codex plugin marketplace add jmaxzh/solo-vibe-coding
```

在受支持的插件界面中，从已配置市场安装 **Solo Vibe Coding**。提供 `plugin add` 的 CLI 版本还支持：

```sh
codex plugin add solo-vibe-coding@solo-vibe-coding
```

### Claude Code

```sh
claude plugin marketplace add jmaxzh/solo-vibe-coding
claude plugin install solo-vibe-coding@solo-vibe-coding
```

### skills CLI

安装全部九项英文技能，并选择受支持的代理：

```sh
npx skills add jmaxzh/solo-vibe-coding --skill '*'
```

仅安装公开构建技能时选择 `--skill sdlc-build-in-public`。

工作流的最小完整组合为：

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill sdlc-workflow \
  --skill sdlc-instr-doc-design
```

不安装完整插件、只使用 worktree 策略时，同时安装文档设计依赖：

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill worktree-first-development \
  --skill sdlc-instr-doc-design
```

其余七项专项技能可单独安装。UI 与 UX 均可单装，混合任务可组合使用。工作流与 worktree 策略各自的文档任务都需要文档设计技能；每项技能均保留 MIT 声明。

### 手动安装

将 `skills/` 中选定的技能目录并列复制到代理文档指定的技能目录，保留 `references/`、随技能提供的脚本和许可证。替换既有安装前先备份。不要将仓库根目录或维护译文复制到自动发现技能的目录。

## 使用

通过代理实际注册的名称或命名空间调用工作流：

> 使用 sdlc-workflow。开发一个小型问题跟踪工具：先明确需求，再设计方案，然后实施并完成适当测试。复用现有决策，仅暂停被未决事项阻塞的工作。

只推进到指定阶段：

> 使用 sdlc-workflow，将这个功能想法整理为需求和验收标准。停在技术方案阶段之前。

专项任务：

> 使用 sdlc-mysql-design，审查这份 MySQL 订单表结构与库存扣减 SQL。说明完整性、并发风险，并区分项目约定和 MySQL 功能限制。

集成任务：

> 使用 cc-connect-integration，检查既有配置。先验证消息主链路，再考虑可选桌面镜像。

配置工作区策略：

> 使用 worktree-first-development，为当前项目建立策略。让我选择项目级指引，或用户主目录中限定项目的指引。

策略技能提供项目根目录 `AGENTS.md`/`CLAUDE.md` 或用户主目录 `~/AGENTS.md`/`~/CLAUDE.md` 两种位置；用户级内容仅约束所选项目及其派生任务目录。技能维护指引，不执行同步或备份。用户主目录文件的自动加载须单独验证。任务和备份目录默认与项目同级、可见，名称分别为 `<project-directory-name>-worktrees` 和 `<project-directory-name>-backups`，路径从主工作区解析。

工作流与策略技能按需通过运行环境实际名称和命名空间加载已安装的文档设计技能。缺少必需资料时暂停依赖部分，不静默跳过规则或自动安装依赖。以上是请求示例，不是已完成部署记录。

## 语言与维护

英文是唯一安装指令版本和规范性来源。[中文译文](translations/zh-CN/README.md)用于开发者理解与维护，不作为运行技能；英文指令不强制决定用户对话或交付产物的语言。

同一次变更中同步对应译文。运行脚本及测试只在所属英文技能目录维护一份。遵循[维护规则](translations/zh-CN/AGENTS.zh-CN.md)。

## 分发与许可证

Codex 与 Claude Code 使用同一个九技能插件；skills.sh 支持 GitHub 安装与发现，SkillsMP 索引公开源技能。

采用 [MIT](LICENSE)。所有者已确认改编的 CC Connect 镜像脚本也可按 MIT 分发。

## 能力边界

- 技能提供执行指导，实际结果取决于权限、集成与验证；本身不提供托管、CI 服务或自动部署。
- MySQL 规则包含项目约定：显式事务内禁止查询，禁止外键、`CHECK` 和存储过程；采用前先阅读正文。
- CC Connect 镜像为可选只读副本，随包 Codex 适配器针对 legacy 会话和 IPC v11，服务部署方式为 macOS。真实消息收发、桌面显示、登录恢复和兼容性须在目标机器验证。
- 脚本保留既有中文标题处理和测试数据，英文技能指令不改变运行文案。
