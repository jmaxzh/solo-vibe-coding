# Remote reading and discovery

Read the selected skill's original instructions and necessary references from its upstream repository; skills do not need to be installed or registered. The source links in topic references are the entry points. Use the user-specified version or an existing copy; otherwise read the current upstream source.

- When a GitHub `blob` page is incomplete, obtain the corresponding raw source. When only a repository is known, locate the exact `SKILL.md` first. README and search summaries help locate it but do not replace the original skill instructions.
- Resolve relative links against the remote file's directory, including `references/...`, `../...`, `scripts/...`, and `assets/...`. Keep entry points and references in the same repository and version; pin them to the same commit when it can be resolved. Reuse content of that version already read in the session.
- Names and directories can differ; relevant topics note former names. Confirm identity through the original repository's frontmatter and actual source paths. Same-named forks or summaries are insufficient to establish equivalent capabilities.
- Read text guidance, rules, examples, and readable data as needed. Inspect source, necessary files, and runtime requirements and obtain dependencies for scripts, templates, and assets only when the task actually requires execution. Reading guidance does not mean tools have been executed.
- Use image/video models, browsers, renderers, MCP, or APIs actually available in the current environment. When tools, accounts, or dependencies are missing, state the specific gap and deliver the guidance, drafts, or source files still possible.
- When reading fails, check the address, version, or redirects. If it remains unreadable, state that full guidance was not obtained, identify the basis for continuing, and complete what remains possible.

## Use existing resource catalogs

Choose the task-specific resource page from the skill entry point and read only relevant entries. Follow links to actual cases, templates, source repositories, or asset files. Optional discovery skills follow the same source, version, and dependency rules above; reading them does not install a skill, connect an account, or execute a production workflow.

## Discover supplementary skills

<!-- skill: vercel-labs/skills@find-skills -->
- Source: [find-skills in vercel-labs/skills](https://github.com/vercel-labs/skills/tree/main/skills/find-skills); [Original instructions](https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md); [Skill page](https://skills.sh/vercel-labs/skills/find-skills).

When this guide does not cover the current need, a candidate is unavailable, or the user requests further discovery, follow the original find-skills instructions. Inspect [skills.sh](https://skills.sh/) or original repositories, checking source, maintenance, adoption, relevant usage feedback, and task fit. An existing host search CLI may be used for read-only search. Stars and installs are signals, not substitutes for quality and suitability judgments; say when no suitable candidate is found.

Consult the [Agent Skills format](https://agentskills.io/), [skills.sh documentation](https://skills.sh/docs), and [search API documentation](https://skills.sh/docs/api) according to the task. Check only the entry points, dependencies, availability, and retrieval methods that affect current use.
