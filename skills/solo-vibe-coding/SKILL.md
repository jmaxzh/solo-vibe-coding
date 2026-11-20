---
name: solo-vibe-coding
description: "Select specialist guidance for independent developers with an established product direction across requirements clarification, visual design and interaction, project initialization, technical planning through implementation and acceptance, production deployment and release, and acquisition and conversion. Prioritize quality criteria and automated checks in engineering projects and unify project knowledge conventions. Proactively reflect on corrections to lasting principles and conventions. Find existing examples, templates, source code, and assets by task. Tasks can be entered independently; does not explore startup ideas."
---

# Solo Vibe Coding

For independent developers with an established product direction, independently select or combine specialist guidance by the requested result. Reuse project facts and implementation, deliver within project constraints, and maintain reusable knowledge. Does not explore startup ideas.

## Select a task entry point

| Task and scope | Guidance | Existing references |
| --- | --- | --- |
| **Requirements clarification**: problems and solutions, feedback, business terms, MVP slicing, feature scope, acceptance criteria, requirements documents | [Requirements and communication](references/requirements.md) | [Templates](references/resources/requirements.md) |
| **Visual design and interaction**: interface aesthetics, design systems, interaction and motion, functional/static pages, social images/video, visual examples and assets | [Visual design and interaction](references/visual-interaction.md) | [Assets](references/resources/visual.md) |
| **Project initialization**: start or take over a project, local environment and dependency services, quality criteria and automated checks | [Project initialization](references/project-initialization.md) | [Code and setups](references/resources/development.md) |
| **Technical planning, implementation, and acceptance**: technology choices, system structure and boundaries, scaling, implementation and refactoring, troubleshooting, reviews, tests, acceptance, usage documentation | [Technical planning workflow](references/technical-planning.md), [Architecture](references/architecture.md), [Development and quality](references/development.md) | [Architecture cases](references/resources/architecture.md), [Code](references/resources/development.md) |
| **Production deployment and release**: production configuration, packaging, Cloudflare frontend and single-VPS backend deployment, release verification, rollback | [Production deployment and release](references/deployment.md) | [Deployment assets](references/resources/deployment.md) |
| **Acquisition and conversion**: value proposition, marketing copy, content distribution, building in public, websites, landing pages, conversion analysis | [Acquisition and conversion](references/acquisition.md) | [Examples](references/resources/acquisition.md) |

For standalone research, technology selection, system design, or architecture diagnosis, use the architecture guide; for troubleshooting, reviews, tests, or acceptance, use the development guide. Follow the requested scope and reuse valid work.

Add technology guidance for implementation methods and quality guidance for the engineering baseline; use either directly for framework or quality-infrastructure issues.

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

Technical implementation starts from a confirmed requirement, retaining its acceptance criteria and project constraints. Requirements discussion and clarification are separate tasks; carry their confirmed results into this workflow.

1. **Design and implement the technical plan.** Follow the required [technical planning workflow and output structure](references/technical-planning.md), including scenarios and expected outcomes for acceptance. Implement within task authorization under the engineering discipline in [development and quality](references/development.md), retaining the project's automated checks during implementation.
2. **Perform real-user acceptance on the running implementation.** Follow [real-user acceptance](references/development.md#real-user-acceptance) to simulate users completing their tasks and verify actual outcomes. Once acceptance passes, follow its review/refactoring loop: non-bug code review, behavior-preserving refactoring, targeted re-acceptance after each refactor, and another review, until its stopping condition is met.

- When confirming requirements as a separate task, execute [grill-with-docs in requirements and communication](references/requirements.md#required-guidance); reuse existing context and confirmed conclusions, and obtain user confirmation of unresolved decisions before implementation.
- Requirements and plans involving user workflows must clearly explain the user journey: the user and situation, starting point, key actions and system responses, and outcome. Cover branches, failure cases, and handoffs that affect completing the goal.
- Organize other questions and details according to the selected skills and project conventions. Write clearly and coherently, with detail proportional to task complexity; use headings, paragraphs, lists, or tables where they help readers see the key points and relationships.
- For each independent item in an implementation plan, including fixes and new features, state effort and risk with reasons, assumptions, and unknowns. Effort covers changes, reuse, integration, and verification costs; risk covers likelihood, consequences, and mitigation where needed. Small/medium/large effort and low/medium/high risk suffice. Keep simple tasks brief; group or tabulate complex ones as needed.

When starting or taking over any engineering project, prioritize defining quality criteria and establishing automated checks before implementing features or making structural refactors. Read existing standards, tool configuration, tests, and pipelines first; reuse them when they meet requirements. Where they are missing, use [quality criteria and automated checks](references/quality-and-ci.md) to establish an executable baseline appropriate to the project's size. When hosting or repository conditions do not support CI, use repeatable local automated checks. Subsequent tasks follow the existing standards and fill only the gaps exposed by the current change, without rebuilding the infrastructure.

Before the first remote read, read and follow [remote reading and discovery](references/guidance-access.md) to obtain selected guidance using its source, path, version, and dependency rules. Installation or registration is unnecessary; reuse content of the same version already read.

When this guide does not cover the current need, a candidate is unavailable, or the user requests further discovery, use that document's [supplementary skill discovery method](references/guidance-access.md#discover-supplementary-skills). When tools or sources are unavailable, state the specific gap, identify the basis for continuing, and complete what can still be delivered.

## Deliver against actual results and maintain knowledge

Base content on real products and evidence. For website discovery, provide existing sites and their relevant uses; for specific examples, identify original pages, screenshots, component source, or asset files, with playable examples for dynamic effects. Report delivery status according to files actually obtained, execution, and verification results.

Locate project knowledge as needed for engineering tasks, using code and tests to understand facts and constraints. When reading or writing project knowledge, read and follow [project knowledge conventions](references/project-knowledge.md), retaining existing conventions and sharing primary documents across skills. Maintain stable knowledge within task scope.

During a task, when a user corrects a design judgment or convention, or an issue exposes missing or incorrect lasting guidance, proactively read and use [Reflect](references/project-knowledge.md#reflect-on-corrections). Ordinary implementation slips do not require reflection.
