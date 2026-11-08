# Solo Vibe Coding

**Agent skills and workflows for solo developers building with AI—from ideas and design to implementation and verification.**

English | [简体中文](translations/zh-CN/README.md)

Use Claude Code and Codex to plan, build, and maintain your own software. Start with an idea, clarify what it needs to do, choose a design, and implement it with explicit verification.

Choose the workflow for a project or a bounded stage, or use a specialist for the task at hand. These are reusable instructions and integration helpers; they do not replace your coding agent or provide hosted application services.

Browse the [skills directory](skills/) for available skills and their instructions. Installation does not activate all skills for every task. Initialization and dedicated knowledge-base audits still require explicit requests.

## Install

These GitHub commands require the distribution changes to be published to the repository. For an unpublished checkout, use its absolute path as the source.

### Codex

```sh
codex plugin marketplace add jmaxzh/solo-vibe-coding
```

Install **Solo Vibe Coding** from the configured marketplace in the supported plugin UI. CLI versions providing `plugin add` also support:

```sh
codex plugin add solo-vibe-coding@solo-vibe-coding
```

### Claude Code

```sh
claude plugin marketplace add jmaxzh/solo-vibe-coding
claude plugin install solo-vibe-coding@solo-vibe-coding
```

### skills CLI

Install all English skills and choose a supported agent:

```sh
npx skills add jmaxzh/solo-vibe-coding --skill '*'
```

To install Build in Public by itself, select `--skill sdlc-build-in-public`.

The minimum complete workflow combination is:

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill sdlc-workflow \
  --skill sdlc-document-optimization \
  --skill sdlc-instruction-optimization
```

For the worktree strategy without the full plugin, install its instruction optimization dependency too:

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill worktree-first-development \
  --skill sdlc-instruction-optimization
```

Skills without required dependencies can be installed individually. UI and UX can each be installed alone or combined for mixed tasks. The complete workflow installation includes both optimization skills: document optimization for reader-facing content and instruction optimization for model-execution rules; load each only for its content purpose. The worktree strategy requires instruction optimization for strategy rules. Both optimization skills can be installed individually for single-purpose tasks; mixed artifacts require both, and a missing required skill pauses only the affected work. Each skill carries its own MIT notice.

## Use

Invoke the workflow using your agent's actual registered name or namespace:

> Use sdlc-workflow. Build a small issue tracker: clarify requirements, design the solution, then implement it with appropriate tests. Reuse existing decisions and pause only work blocked by unresolved decisions.

For a bounded stage:

> Use sdlc-workflow to turn this feature idea into requirements and acceptance criteria. Stop before technical design.

For a specialist task:

> Review this MySQL order schema and stock-deduction SQL with sdlc-mysql-design. Explain integrity and concurrency risks, distinguishing project conventions from MySQL limitations.

For integration work:

> Use cc-connect-integration to inspect my existing setup. Verify the messaging path before considering optional desktop mirroring.

For workspace strategy setup:

> Use worktree-first-development to establish this project's strategy. Let me choose between project instructions and project-scoped instructions in my home directory.

The strategy skill offers project-root `AGENTS.md`/`CLAUDE.md` or home-directory `~/AGENTS.md`/`~/CLAUDE.md`; the home option is limited to the chosen project and its derived task directories. It maintains instructions rather than executing synchronization or backup. Home-file automatic loading must be verified separately. Task and backup directories default to visible siblings named `<project-directory-name>-worktrees` and `<project-directory-name>-backups`, with paths resolved from the main workspace.

When needed, the workflow and strategy skills load their respective installed optimization skill using the runtime's actual name and namespace. Missing required resources pause dependent work; skills do not silently skip rules or install dependencies automatically. These examples are requests, not completed deployment transcripts.

## License

[MIT](LICENSE).

## Boundaries

- Skills guide an agent; permissions, integrations, and verification determine actual outcomes. They do not provide hosting, CI services, or automatic deployment themselves.
- MySQL rules include project conventions: no queries in explicit transactions, foreign keys, `CHECK`, or stored procedures. Read them before adoption.
- CC Connect mirroring is optional and view-only. Its bundled Codex adapter targets legacy sessions and IPC v11, with macOS service deployment. Real messaging, desktop rendering, login recovery, and compatibility require target-machine verification.
