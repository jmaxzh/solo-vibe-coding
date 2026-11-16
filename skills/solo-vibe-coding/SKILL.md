---
name: solo-vibe-coding
description: "Select specialist guidance for independent developers with an established product direction across acquisition and conversion, visual design and interaction, requirements and communication, architecture and technical design, development and quality, and production deployment and release. Prioritize quality criteria and automated checks in engineering projects and unify project knowledge conventions. Find existing examples, templates, source code, and assets by task. Tasks can be entered independently; does not explore startup ideas."
---

# Solo Vibe Coding

For independent developers with an established product direction, select and combine specialist guidance for the current task, deliver within project constraints, and maintain reusable project knowledge. Does not explore startup ideas.

Each task can be entered independently; read guidance and constraints relevant to the current task.

## Select task guidance

Choose by the requested result; combine topics as needed, reusing project facts, constraints, and implementation.

### Choose the main entry point by task

| Current problem | Specialist guidance | Existing references |
| --- | --- | --- |
| Value proposition, marketing copy, content distribution, building in public, websites, landing pages, conversion analysis | [Acquisition and conversion](references/acquisition.md) | [Examples](references/resources/acquisition.md) |
| Interface aesthetics, design systems, interaction and motion, functional/static pages, social images/video, visual examples and assets | [Visual design and interaction](references/visual-interaction.md) | [Assets](references/resources/visual.md) |
| Problems and solutions, feedback, business terms, MVP slicing, feature scope, acceptance criteria, requirements documents | [Requirements and communication](references/requirements.md) | [Templates](references/resources/requirements.md) |
| Technical implementation plans, system structure, technology choices, module/data boundaries, scaling, architecture patterns, technical constraints, decision records | [Architecture and technical design](references/architecture.md) | [Cases](references/resources/architecture.md) |
| Local setup and debugging preparation, implementation, code review, troubleshooting, tests, verification, usage documentation | [Development and quality](references/development.md) | [Code and setups](references/resources/development.md) |
| Production configuration, packaging, Cloudflare frontend and single-VPS backend deployment, release verification, rollback | [Production deployment and release](references/deployment.md) | [Deployment assets](references/resources/deployment.md) |

### Add guidance for technology and quality needs

Add technology guidance for implementation methods and quality guidance for the engineering baseline; enter either directly for framework or quality-infrastructure issues.

| Current problem | Reference |
| --- | --- |
| Implementation, performance, and runtime issues in React, Next.js, Tauri/Rust, Go/Gin, MySQL, and React Native | [Technology-specific guidance](references/technology-stack.md) |
| Defining project quality criteria, establishing check tools and GitHub Actions with designated self-hosted runners, or configuring local automated checks | [Quality criteria and automated checks](references/quality-and-ci.md) |

Read only guidance and resources relevant to the task. Use the resource column directly for reference-only requests, returning existing sources; use specialist guidance for advice, review, implementation, or production.

## Apply guidance to project conditions

- Provide advice, review, or implementation according to the current request, retaining known product facts, brand, aesthetics, technology stack, and code. Fill only information gaps that affect the task.
- Before producing visuals or changing appearance, obtain a concrete, viewable reference; reuse an approved existing page, component, or work, or help find one when missing. Select the relevant upstream workflow through [visual design and interaction](references/visual-interaction.md).
- For any requirement, reuse existing work first. For new implementation, prefer suitable, mature open-source foundations, frameworks, components, or templates, writing custom code only for gaps they cannot reasonably cover. When research is needed, use [search-first](https://github.com/affaan-m/ecc/blob/main/skills/search-first/SKILL.md) to assess fit, maintenance, licensing, compatibility, and total cost; scale research to the task and reuse conclusions that remain valid.
- Adapt upstream default steps, templates, and quantity requirements to user requirements and project conditions. The model chooses professional judgments, methods, and combinations according to the actual task. Style preferences follow the user's and project's existing choices.
- For websites or multilingual copy, write for the target language, locale, and audience, adapting wording, tone, and calls to action instead of translating sentence by sentence. Preserve product facts, capability boundaries, commitments, and what each action does; first read each version on its own for naturalness, then compare for information consistency.

### Technical implementation: design and real-user acceptance

Start from a confirmed requirement, retaining its acceptance criteria and project constraints. Requirements discussion and clarification are separate tasks; carry their confirmed results into this workflow.

1. **Design the technical plan from the confirmed requirement.** Follow the required [technical planning workflow and output structure](references/technical-planning.md), including scenarios and expected outcomes for acceptance. Implement the plan within task authorization, retaining the project's automated checks during implementation.
2. **Perform real-user acceptance on the running implementation.** Follow [real-user acceptance](references/development.md#real-user-acceptance) to simulate users completing their tasks and verify actual outcomes. Once acceptance passes, follow its review/refactoring loop: non-bug code review, behavior-preserving refactoring, targeted re-acceptance after each refactor, and another review, until its stopping condition is met.

### Communicate requirements and plans

- When confirming requirements as a separate task, execute [grill-with-docs in requirements and communication](references/requirements.md#required-guidance); reuse existing context and confirmed conclusions, and obtain user confirmation of unresolved decisions before implementation.
- Requirements and plans involving user workflows must clearly explain the user journey: the user and situation, starting point, key actions and system responses, and outcome. Cover branches, failure cases, and handoffs that affect completing the goal.
- Organize other questions and details according to the selected skills and project conventions. Write clearly and coherently, with detail proportional to task complexity; use headings, paragraphs, lists, or tables where they help readers see the key points and relationships.
- For implementation plans, including bug fixes and new features, give each independent work item's effort and risk separately, with reasons. Effort considers changes, reuse, integration, and verification costs; risk considers likelihood and consequences, with mitigation where needed.
- State estimation assumptions and unknowns; small/medium/large effort and low/medium/high risk are sufficient. Keep simple tasks brief; group or tabulate complex ones as needed.

### Engineering project priorities

When starting or taking over any engineering project, prioritize defining quality criteria and establishing automated checks before implementing features or making structural refactors. Read existing standards, tool configuration, tests, and pipelines first; reuse them when they meet requirements. Where they are missing, use [quality criteria and automated checks](references/quality-and-ci.md) to establish an executable baseline appropriate to the project's size. When hosting or repository conditions do not support CI, use repeatable local automated checks. Subsequent tasks follow the existing standards and fill only the gaps exposed by the current change, without rebuilding the infrastructure.

### Read original instructions and fill guidance gaps

Before the first remote read, read and follow [remote reading and discovery](references/guidance-access.md) to obtain selected guidance using its source, path, version, and dependency rules. Installation or registration is unnecessary; reuse content of the same version already read.

When this guide does not cover the current need, a candidate is unavailable, or the user requests further discovery, use that document's [supplementary skill discovery method](references/guidance-access.md#discover-supplementary-skills). When tools or sources are unavailable, state the specific gap, identify the basis for continuing, and complete what can still be delivered.

## Deliver against actual results and maintain knowledge

### Verify delivery status

Base content on real products and evidence. For website discovery, provide existing sites and their relevant uses; for specific examples, identify original pages, screenshots, component source, or asset files, with playable examples for dynamic effects. Report delivery status according to files actually obtained, execution, and verification results.

### Project knowledge conventions

Locate project knowledge as needed for engineering tasks, using code and tests to understand facts and constraints. When reading or writing project knowledge, read and follow [project knowledge conventions](references/project-knowledge.md), retaining existing conventions and sharing primary documents across skills. Maintain stable knowledge within task scope; keep full process records worth retaining in research archives.
