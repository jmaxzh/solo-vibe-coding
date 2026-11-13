# ADR 0005：以用户成果组织官网，区分产品使用与项目维护

- 状态：部分替代。首屏报价工具与主要案例以 [ADR 0006](0006-skill-increment-and-case-evidence.md) 为准；目标用户、用户/维护入口边界与实际成果导向继续有效。
- 日期：2026-11-13
- 部分替代：[ADR 0002](0002-content-and-languages.md) 的受众、首页入口与公开日志组织；[ADR 0003](0003-visual-and-interaction.md) 的首屏工作台与标签页交互。
- 延续：GitHub Pages 默认地址、Astro 静态生成、双语路径、基础视觉、质量门槛和既有发布流程。

## 结论

官网面向有制作目标、缺乏完整技术判断力的人，以用户想做的事和可操作成果组织内容。维护知识保留在仓库维护入口，官网用法、示例与更新服务实际使用者。

## 背景与依据

用户明确区分维护者与希望服务的人：后者希望借助一个 Skill 更快做出想要的东西，未必能够判断所有技术环节。原官网主要解释专业分类、指导读取和维护过程，首次示例停在功能规格文档，不能充分承接这类用户的目标。

JTBD 用于识别用户想取得的进展，价值主张画布用于对应目标、痛点与收益，渐进披露用于安排初次使用与深入内容。用户确认据此改版。当前技能已经让模型按任务选择专业指导和方法；本次调整官网表达与上手体验，不修改技能行为。

## 选择与取舍

1. 首屏展示能直接操作的报价工具，代替专业指导标签页；用户能先体验一个具体结果。增加浏览器计算与下载脚本，使用锁定版本的轻量十进制库处理金额舍入，无后端服务。
2. 六类用户目标覆盖新制作、加功能、设计、修复、发布与介绍；保留旧地址和锚点，专业分类仍存在于 Skill 中，不成为用户必须先作出的选择。
3. 上手指南以 Codex CLI/IDE 提供明确步骤，其他方式按需展开。安装说明结合官方文档，并在隔离项目验证 Codex / Claude Code 的安装文件；完整目标用户制作效果仍需用户试用。
4. 更新内容展示可以试用什么、如何用于自己的项目。内部知识、ADR、CI 与研究档案留在仓库；GitHub 和许可入口保留在页脚。
5. 双语产品定义、元数据与分享卡片同步调整。示例明确币种与条件，实际制作仍在用户自己的编程助手中执行。
6. 工程验证与产品验收分别记录。浏览器自动化可以证明示例操作和技术路径，不代表已经证明真实用户能独立成功或获得提效。

## 后果

当前系统规范随改版同步更新，原决策和验证记录仍可通过版本与研究档案回溯。维护信息不因仓库公开而自动进入官网阅读路径。后续增加案例、帮助或更新时，按其目标读者和实际价值确定内容与入口。

## 方法与官方来源

- [JTBD](https://www.christenseninstitute.org/theory/jobs-to-be-done/)
- [价值主张画布](https://www.strategyzer.com/library/the-value-proposition-canvas)
- [渐进披露](https://www.nngroup.com/articles/progressive-disclosure/)
- [OpenAI 官方技能说明](https://learn.chatgpt.com/docs/build-skills)
- [Codex CLI 安装与首次运行](https://learn.chatgpt.com/docs/codex/cli#getting-started)
- [Big.js 十进制计算库](https://github.com/MikeMcl/big.js)
- [Claude Code 技能说明](https://code.claude.com/docs/en/skills)
- [Skills CLI 安装参数](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add)
