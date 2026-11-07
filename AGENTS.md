# Skill maintenance rules

- When designing, writing, modifying, or reviewing this project's skills and related documentation, read and follow the [Instruction and Documentation Design Principles](skills/sdlc-instr-doc-design/SKILL.md).

## Runtime integrations

- For this project's Feishu resource operations or app identity and authorization troubleshooting, use `lark-cli --profile my-dev-skills`. A request arriving through Feishu alone does not require CLI use.

## Language and sources

- `skills/` contains the only installable skill edition: English. English files define behavior and constraints. Do not add runtime language selection or translated `SKILL.md` discovery entries.
- Maintain `README.zh-CN.md` and `translations/zh-CN/` as Chinese developer translations only. Each translation must identify its English source. Use `SKILL.zh-CN.md` and `AGENTS.zh-CN.md` for translated entry documents.
- Update corresponding translations in the same change as English rules, conditions, examples, or references. Settle Chinese proposals in the English source first, then synchronize the translation; resolve discrepancies against English. Preserve identifiers, commands, configuration keys, and protocol names.
- Keep runtime scripts and their tests only in the owning English skill directory. Translate documentation, not executable code. This policy does not prescribe the language of user conversations or script output.
