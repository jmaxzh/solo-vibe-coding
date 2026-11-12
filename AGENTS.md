# Repository instructions

- Use Chinese when communicating with the user.

## Deliverables and production process

- When writing or updating a reusable artifact, retain only the capabilities, boundaries, operating methods, and necessary rationale that serve its purpose. Conversation records, temporary state, candidate tradeoffs, and correction history belong to the production process and should not become operating rules in the artifact.
- Turn requirements confirmed in discussion into concise, stable behavior. Avoid turning a single failure, temporary condition, or abandoned approach into a general prohibition.
- When complete research, historical scoring, or verification records need retention, save them separately in research or maintenance material. Executable artifacts and their runtime references must not depend on those archives.
- Before delivery, check whether a first-time user can understand and use the artifact without chat history. Move out text that only explains how the work reached its current state. For artifacts whose purpose is to record a process, such as research reports, decision explanations, audits, and change records, retain process content according to their purpose and the user's requirements.

## Skill maintenance

- **Structure:** Follow Barbara Minto's Pyramid Principle when maintaining this skill: lead with the conclusion, have each higher-level idea summarize those below it, group related ideas by a consistent criterion, and arrange them in logical order.
- **Change evaluation:** After every modification, compare the before and after versions using the actual diff. Explain clear improvements and their evidence, check relevant capabilities, constraints, and costs for regressions, and disclose unverified items. Ensure a Pareto improvement: at least one relevant dimension clearly improves, and none deteriorates. Scale evaluation and review depth to the change; choose the presentation as needed.
- **Independent review:** Before delivering a maintenance change, use a read-only review agent in a fresh context. Provide the original request and confirmed requirements, applicable instructions, before and after versions, diff, and necessary verification evidence. Have the reviewer form an independent judgment before checking the change evaluation. Correct confirmed regressions and omissions, then recheck affected areas. Report the review outcome and evidence gaps at delivery. Do not mark the change as passing while regressions or material verification gaps remain; if independent review cannot run, report it as incomplete.
- This repository provides the single `solo-vibe-coding` skill. The default English package is in `skills/solo-vibe-coding/`; its Chinese counterpart mirrors the same structure in `i18n/zh-CN/skills/solo-vibe-coding/`.
- Keep both language versions aligned. Translate content faithfully, preserving capabilities, defaults, requirements, boundaries, source links, and structure. Change skill behavior only when requested; keep publishing instructions in the repository README files.
