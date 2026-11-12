---
name: solo-vibe-coding
description: "Select specialist guidance for independent developers with an established product direction across acquisition and conversion, visual design and interaction, requirements and communication, architecture and technical design, development and quality, and production deployment and release. Prioritize quality criteria and automated checks in engineering projects and unify project knowledge conventions. Tasks can be entered independently; does not explore startup ideas."
---

# Solo Vibe Coding

For independent developers with an established product direction, select and combine specialist guidance for the current task, deliver within project constraints, and maintain reusable project knowledge. Does not explore startup ideas.

Each task can be entered independently; read guidance and constraints relevant to the current task.

## Select task guidance

Choose the main entry point by the result to achieve; combine other topics as needed for compound tasks, reusing project facts, constraints, and existing implementation.

### Choose the main entry point by task

| Current problem | Reference |
| --- | --- |
| Product value proposition, marketing copy, content distribution, building in public, websites and landing pages, conversion analysis | [Acquisition and conversion](references/acquisition.md) |
| Interface aesthetics, design systems, interaction, and motion for functional and static pages, social media image and video production, or finding examples, templates, icons, and media assets | [Visual design and interaction](references/visual-interaction.md) |
| Discussing problems and solutions, understanding feedback, clarifying business terms, slicing an MVP, defining feature scope and acceptance criteria, maintaining requirements | [Requirements and communication](references/requirements.md) |
| System structure, technology selection, module and data boundaries, scaling, architectural patterns, technical constraints, decision records | [Architecture and technical design](references/architecture.md) |
| Local environment setup and debugging preparation, implementation, code review, troubleshooting, testing, verification, and related usage documentation | [Development and quality](references/development.md) |
| Production configuration, application packaging, single-VPS deployment, release verification, and rollback | [Production deployment and release](references/deployment.md) |

### Add guidance for technology and quality needs

Add technology guidance for implementation methods and quality guidance for the engineering baseline; enter either directly for framework or quality-infrastructure issues.

| Current problem | Reference |
| --- | --- |
| Implementation, performance, and runtime issues in React, Next.js, Tauri/Rust, Go/Gin, MySQL, and React Native | [Technology-specific guidance](references/technology-stack.md) |
| Defining project quality criteria, establishing check tools and CI, or configuring local automated checks | [Quality criteria and automated checks](references/quality-and-ci.md) |

Choose the most relevant specialist guidance, adding capabilities that address independent gaps when necessary. Read skills and assets on demand rather than loading every candidate listed in the same topic.

## Apply guidance to project conditions

- Provide advice, review, or implementation according to the current request, retaining known product facts, brand, aesthetics, technology stack, and code. Fill only information gaps that affect the task.
- Adapt upstream default steps, templates, and quantity requirements to user requirements and project conditions. The model chooses professional judgments, methods, and combinations according to the actual task. Style preferences follow the user's and project's existing choices.

### Engineering project priorities

When starting or taking over any engineering project, prioritize defining quality criteria and establishing automated checks before implementing features or making structural refactors. Read existing standards, tool configuration, tests, and pipelines first; reuse them when they meet requirements. Where they are missing, use [quality criteria and automated checks](references/quality-and-ci.md) to establish an executable baseline appropriate to the project's size. When hosting or repository conditions do not support CI, use repeatable local automated checks. Subsequent tasks follow the existing standards and fill only the gaps exposed by the current change, without rebuilding the infrastructure.

### Read original instructions and fill guidance gaps

Before the first remote read, read and follow [remote reading and discovery](references/guidance-access.md) to obtain selected guidance using its source, path, version, and dependency rules. Installation or registration is unnecessary; reuse content of the same version already read.

When this guide does not cover the current need, a candidate is unavailable, or the user requests further discovery, use that document's [supplementary skill discovery method](references/guidance-access.md#discover-supplementary-skills). When tools or sources are unavailable, state the specific gap, identify the basis for continuing, and complete what can still be delivered.

## Deliver against actual results and maintain knowledge

### Verify delivery status

Base content on real products and evidence. References should identify concrete pages, screenshots, component source, or asset files; provide playable examples for dynamic effects. Report delivery status according to files actually obtained, execution, and verification results.

### Project knowledge conventions

Locate project knowledge as needed for engineering tasks, using code and tests to understand facts and constraints. When reading or writing project knowledge, read and follow [project knowledge conventions](references/project-knowledge.md), retaining existing conventions and sharing primary documents across skills. Maintain stable knowledge within task scope; keep full process records worth retaining in research archives.
