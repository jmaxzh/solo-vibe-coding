# Solo Vibe Coding

**面向个人开发者的 AI 编程技能与工作流——从想法、设计到实施与验证。**

[English](../../README.md) | 简体中文

使用 Claude Code 和 Codex 规划、开发和维护自己的软件。从想法出发，明确需要实现的行为，选择设计方案，并完成具有明确验证要求的实现。

可以为整个项目或一个限定阶段调用工作流，也可以按任务使用专项技能。这些可复用指令和集成辅助工具不替代编程代理，也不提供应用托管服务。

可用技能及其指引见[技能目录](skills/)。安装不会为每项任务启用全部技能。项目初始化和知识库专项审查仍须明确要求。

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

安装全部英文技能，并选择受支持的代理：

```sh
npx skills add jmaxzh/solo-vibe-coding --skill '*'
```

仅安装公开构建技能时选择 `--skill sdlc-build-in-public`。

工作流的最小完整组合为：

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill sdlc-workflow \
  --skill sdlc-document-optimization \
  --skill sdlc-instruction-optimization
```

不安装完整插件、只使用 worktree 策略时，同时安装指令优化依赖：

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill worktree-first-development \
  --skill sdlc-instruction-optimization
```

没有必需依赖的技能可单独安装。UI 与 UX 均可单装，混合任务可组合使用。完整工作流安装包含两个优化技能：读者文档使用文档优化，模型执行规则使用指令优化，按内容用途加载。worktree 策略规则需要指令优化技能。单一用途的任务可单装相应优化技能；混合产物需要两者，缺少必需技能时仅暂停受影响部分。每项技能均保留 MIT 声明。

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

工作流与策略技能按需通过运行环境实际名称和命名空间加载各自依赖的优化技能。缺少必需资料时暂停依赖部分，不静默跳过规则或自动安装依赖。以上是请求示例，不是已完成部署记录。

## 许可证

采用 [MIT](../../LICENSE)。

## 能力边界

- 技能提供执行指导，实际结果取决于权限、集成与验证；本身不提供托管、CI 服务或自动部署。
- MySQL 规则包含项目约定：显式事务内禁止查询，禁止外键、`CHECK` 和存储过程；采用前先阅读正文。
- CC Connect 镜像为可选只读副本，随包 Codex 适配器针对 legacy 会话和 IPC v11，服务部署方式为 macOS。真实消息收发、桌面显示、登录恢复和兼容性须在目标机器验证。
