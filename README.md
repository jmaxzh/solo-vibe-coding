# Solo Vibe Coding

**Agent skills and workflows for solo developers building with AI—from ideas and design to implementation and verification.**

English | [简体中文](README.zh-CN.md)

Use Claude Code and Codex to plan, build, and maintain your own software. Start with an idea, clarify what it needs to do, choose a design, and implement it with explicit verification. The six core skills combine a development workflow with focused guidance for documentation, UI, UX, MySQL, and CC Connect.

Choose the workflow for a project or a bounded stage, or use a specialist for the task at hand. These are reusable instructions and integration helpers; they do not replace your coding agent or provide hosted application services.

## Skills

| Skill | Purpose | Activation and dependencies |
| --- | --- | --- |
| [SDLC Workflow](skills/sdlc-workflow/SKILL.md) | Requirements, technical design, implementation, verification, and knowledge-base maintenance | Explicit invocation; document work requires `sdlc-instr-doc-design` |
| [Instruction and Documentation Design](skills/sdlc-instr-doc-design/SKILL.md) | Instructions, prompts, skills, and reader-facing documents | Artifact work; usable independently |
| [UI Design](skills/sdlc-ui-design/SKILL.md) | Visual hierarchy, typography, color, layout, and motion | Applicable visual interface tasks |
| [UX Design](skills/sdlc-ux-design/SKILL.md) | Information organization, interaction, feedback, and recovery | Applicable product task experience work |
| [MySQL Table and SQL Design](skills/sdlc-mysql-design/SKILL.md) | Models, SQL, indexes, transactions, and concurrency | MySQL must be established as the target database |
| [CC Connect Integration](skills/cc-connect-integration/SKILL.md) | Messaging-to-local-agent deployment and optional desktop copies | CC Connect integration tasks |
| [Build in Public](skills/sdlc-build-in-public/SKILL.md) | Shared topic selection, channel-specific drafts, batch review and delivery guidance | Optional, independently installable |
| [Worktree-first Development Strategy](skills/worktree-first-development/SKILL.md) | Maintain a project's isolated-development strategy in project or project-scoped home instructions | Optional; requires `sdlc-instr-doc-design` |

We recommend the six core skills. Installation does not activate all skills for every task. Initialization and dedicated knowledge-base audits still require explicit requests.

## Install

These GitHub commands require the distribution changes to be published to the repository. For an unpublished checkout, use its absolute path as the source; see [local verification and distribution](docs/distribution.md).

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

Install all eight English skills and choose a supported agent:

```sh
npx skills add jmaxzh/solo-vibe-coding --skill '*'
```

To install Build in Public by itself, select `--skill sdlc-build-in-public`.

The minimum complete workflow combination is:

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill sdlc-workflow \
  --skill sdlc-instr-doc-design
```

For the worktree strategy without the full plugin, install its documentation dependency too:

```sh
npx skills add jmaxzh/solo-vibe-coding \
  --skill worktree-first-development \
  --skill sdlc-instr-doc-design
```

The other six specialists can be installed individually. UI and UX can each be installed alone or combined for mixed tasks. The workflow and worktree strategy each require the documentation skill for their document work. Each skill carries its own MIT notice.

### Manual installation

Copy the selected skill directories inside `skills/` together into your agent's documented skill directory. Preserve `references/`, any bundled scripts, and license files. Back up existing installations before replacement. Do not copy the repository root or maintenance translations into an automatically discovered skill directory.

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

When needed, the workflow and strategy skills load the installed documentation skill using the runtime's actual name and namespace. Missing required resources pause dependent work; skills do not silently skip rules or install dependencies automatically. These examples are requests, not completed deployment transcripts.

## Languages and maintenance

English is the only installed instruction edition and the source of truth. [Chinese translations](translations/zh-CN/README.md) help developers understand and maintain the sources; they are not runtime skills. Instructions do not force the language of user conversations or deliverables.

Keep corresponding translations synchronized in the same change. Runtime scripts and tests have one implementation in their owning English skill. Follow [the maintenance rules](AGENTS.md).

## Distribution and license

Codex and Claude Code use the same eight-skill plugin. skills.sh supports GitHub installation and discovery; SkillsMP indexes public source skills. See [distribution](docs/distribution.md) and [verification results](docs/verification.md).

[MIT](LICENSE). The owner confirmed that the adapted CC Connect mirror scripts may also be distributed under MIT; see [source and license notes](docs/provenance.md).

## Boundaries

- Skills guide an agent; permissions, integrations, and verification determine actual outcomes. They do not provide hosting, CI services, or automatic deployment themselves.
- MySQL rules include project conventions: no queries in explicit transactions, foreign keys, `CHECK`, or stored procedures. Read them before adoption.
- CC Connect mirroring is optional and view-only. Its bundled Codex adapter targets legacy sessions and IPC v11, with macOS service deployment. Real messaging, desktop rendering, login recovery, and compatibility require target-machine verification.
- Existing Chinese title handling and test fixtures remain part of the scripts. English skill instructions do not change runtime strings.
