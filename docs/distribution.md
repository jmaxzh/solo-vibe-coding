# Validate and distribute the suite

Run commands from the repository root. Installation checks use temporary projects and plugin configurations; they do not change your normal agent configuration or call a model.

## Validate locally

```sh
python3 -B scripts/validate.py
python3 -B -m unittest discover -s tests -v
python3 -B -m unittest discover -s skills/cc-connect-integration/scripts -v
python3 -B scripts/smoke_install.py --native
```

The smoke check requires Node/npm, network access for `skills@1.7.4`, and the Codex/Claude CLIs for `--native`. It exercises default/full-depth discovery, all seven skills, the five-skill core suite, the workflow/documentation pair, the worktree-strategy/documentation pair, five independent specialists, and deliberately incomplete installations of both dependent skills. Its missing-dependency results are file/composition checks, not proof of model compliance. Native checks register and install locally and inspect actual skill inventories. Codex app-server is queried without creating a model turn.

The report is written to `dist/install-report.json`. A timeout or unavailable CLI is a failure when `--native` was requested; inspect the report rather than treating skipped or failed execution as passed. GitHub Actions runs the portable checks, script tests, skills CLI smoke check, and installation-report upload; it does not claim to test native clients absent from the runner.

## Check native clients manually

Assign `CHECKOUT` to this checkout's actual absolute directory. These commands change the client configuration in which you run them; use a disposable configuration as the smoke script does when testing.

```sh
codex plugin marketplace add "$CHECKOUT"
codex plugin add solo-vibe-coding@solo-vibe-coding
claude plugin marketplace add "$CHECKOUT"
claude plugin install solo-vibe-coding@solo-vibe-coding
```

In a fresh local session, verify actual registered skill names and invoke the workflow for requirements only. Confirm that it loads the documentation skill when producing the artifact, without invoking all specialists. For the worktree strategy, check that it asks for project-level or home-directory placement and limits a home section to the target project and its derived task directories. Verify selected-file loading separately from the existence of that file.

Then test disposable workflow-only and strategy-only installations: each should identify missing `sdlc-instr-doc-design`, pause dependent document work, explain its pair installation, and not install anything itself. Record observed behavior separately from CLI inventory checks. Never remove your normal documentation skill to perform these negative tests.

## Migrate an existing installation

Version `0.2.0` uses the repository `jmaxzh/solo-vibe-coding` and the plugin/marketplace identity `solo-vibe-coding@solo-vibe-coding`. Earlier installations used `vibe-dev-skills@vibe-dev-skills`; renaming the repository does not migrate that installed identity.

Back up local customizations. Register the new marketplace and install the new identity using the commands above, then verify the seven installed skills and required resources in a fresh session. Inspect their actual registered names rather than assuming the old namespace. Once the new installation is verified, disable or remove the old identity using the client's supported plugin management to avoid duplicate activation. These instructions do not automatically change existing installations.

Individual skill names and directories remain unchanged. Manual installations retain their documented backup-and-replacement procedure. GitHub redirects old repository URLs, but use the new address for future installations and Git remotes. Do not reuse the old repository name for another repository, which would break those redirects.

Historical verification records retain the identity and revision they actually tested; they are not evidence that the renamed package passed new checks.

## Publish and check GitHub installation

Only after explicit authorization, publish the reviewed changes to the repository and rerun:

```sh
python3 -B scripts/smoke_install.py --source jmaxzh/solo-vibe-coding
```

The source must match the local entries being validated. Before publication the remote repository still has its previous structure; local smoke success does not establish remote success. Existing manually copied installations must be backed up and updated from the new `skills/` directories; old root skill paths are removed without compatibility symlinks.

Use [the project README](../README.md#install) for public commands. Codex and Claude Code install the entire suite. skills CLI also supports either the workflow or worktree strategy paired with its documentation dependency, and the five independent specialists. No custom dependency metadata or installer is used.

skills.sh tracks directory appearances through actual installation telemetry; these verification runs disable telemetry. SkillsMP indexes public GitHub `SKILL.md` files. After publication, check each English source and index link; neither site promises an immediate listing. If missing, use the site's current official feedback channel only when authorized. Do not fabricate rankings or submit duplicate Chinese skills.

Sources: [OpenAI packaging](https://developers.openai.com/plugins/build/plugins), [Claude marketplace publishing](https://code.claude.com/docs/en/plugins/publish), [skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md), [skills.sh listing](https://www.skills.sh/docs/faq), [SkillsMP](https://skillsmp.com/about).
