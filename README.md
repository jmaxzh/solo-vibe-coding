# Solo Vibe Coding

**Build, ship, and grow your product.**

[中文](README.zh-CN.md)

A single Agent Skill for independent developers who already have a clear product direction. It selects specialist guidance for the current task across acquisition and conversion, visual design and interaction, requirements and communication, architecture and technical design, development and quality, and production deployment and release.

Engineering projects prioritize quality criteria and automated checks and share project knowledge conventions. Each topic can be entered independently; this skill does not explore startup ideas.

## Install

Use a coding agent that supports [Agent Skills](https://agentskills.io/specification). The skill reads upstream instructions remotely, so the agent needs access to local files and remote text. Browsers, renderers, CLIs, accounts, and API credentials depend on the selected task.

With Node.js 22.20+ and npm, run from your product project:

```sh
npx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding
```

Choose your coding agent when prompted. Installation is project-local by default; add `-g` for use across projects. See the [Skills CLI installation reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add) for supported sources and options.

To install from a local checkout:

```sh
npx skills add /path/to/solo-vibe-coding --skill solo-vibe-coding
```

For manual installation, download or clone the repository and copy the entire `skills/solo-vibe-coding/` directory into your agent's documented skill location, keeping its references, metadata, and license together. Follow your host's instructions for reloading skills.

## Use

Select the skill through your agent's supported interface. For hosts with explicit `$skill-name` invocation, examples include:

```text
Use $solo-vibe-coding to turn this feedback into a scoped feature spec:
users want to export their saved items as CSV. Follow this project's conventions.
```

```text
Use $solo-vibe-coding to review this change for concrete bugs and report findings.
```

```text
Use $solo-vibe-coding to improve our landing page's message and visual design.
Keep our existing brand and technology stack.
```

```text
Use $solo-vibe-coding to build a functional tool page with forms, results, and state feedback.
Add suitable imagery and motion while retaining our existing technology stack.
```

```text
Use $solo-vibe-coding to build a static portfolio page with a particle background
and scroll-driven storytelling.
```

```text
Use $solo-vibe-coding to turn real product screens into a WeChat cover,
a Xiaohongshu carousel, and a vertical short video. Keep a consistent visual style,
adapt composition and pacing to each platform, and deliver assets and editable source.
```

The [skill entry point](skills/solo-vibe-coding/SKILL.md) routes to six task entry points and two technology and quality references, with shared references for remote reading and project knowledge conventions. The agent reads selected upstream skills and necessary references on demand; those external skills do not need installation or registration. Actual execution depends on available tools and user authorization. When a source or tool is unavailable, the guide calls for reporting that gap and the work actually completed.

## Languages and layout

```text
AGENTS.md                              Repository instructions
README.md                              English project overview
README.zh-CN.md                        Chinese project overview
LICENSE                                MIT license
skills/solo-vibe-coding/                Default English skill package
  SKILL.md                             Skill entry point
  agents/openai.yaml                   Host interface metadata
  references/                          Task, supplementary, and shared references
  LICENSE.txt                          License carried with the package
i18n/zh-CN/AGENTS.md                    Chinese repository instructions
i18n/zh-CN/skills/solo-vibe-coding/      Chinese skill with matching structure
```

English is the default distributed version. The [Chinese skill](i18n/zh-CN/skills/solo-vibe-coding/SKILL.md) preserves the corresponding content and structure for maintainers. It is the same skill in another language, not an additional capability. Keep both versions aligned when maintaining content.

## License and sources

Original repository content is available under the [MIT License](LICENSE). The skill's topic references link to upstream skills and resources. Linked instructions, software, templates, fonts, media, trademarks, and services retain their respective licenses and terms; this repository does not relicense them or imply affiliation with their authors. Check the selected source's license, dependencies, access, and costs before use.
