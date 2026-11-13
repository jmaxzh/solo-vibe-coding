# Formal verification

Use for high-impact promises in the current task that ordinary tests struggle to cover, such as concurrency, retries, state transitions, or algorithmic properties. Compare the benefit with setup, rerun, and maintenance costs; choose a meaningful, manageable scope and reuse existing verification assets. Adopt checks under [project quality standards](quality-and-ci.md).

## Choose a method

- **Event ordering and state combinations**: consider a small model checked with TLA+ or another suitable tool. Describe actual atomic steps, failures, and consistency assumptions. Checking a design model establishes a property of that model; implementation conformance needs separate evidence.
- **Properties of code inputs and data structures**: prefer a verifier that works on the actual code and language. When that is unavailable, explain the gap and consider [property-based tests](development.md#testing-and-verification) on the real code. Distinguish sampled testing, checks within stated bounds, and proofs under explicit assumptions.

## Establish and maintain a check

1. State the property and the harm from violating it in business terms. Keep the requirement in the feature spec; identify assumptions and bounds that limit the guarantee.
2. Map model actions or proof obligations to the covered files, functions, and shared-state access. Check that modeled atomic steps match the implementation. Record the mapping, reproducible tool version, command, and last commit confirmed to match the code.
3. Run the check and validate its effectiveness in an isolated, reversible scope using a relevant defect in the guarded code; restore the change and rerun. Replay counterexamples against the code before calling them implementation bugs. Distinguish modeling errors, actual defects, and inconclusive or unexecuted checks; report the resulting guarantee and exclusions.
4. Recheck the mapping when covered code, properties, or assumptions change, including moved functions and new writers of guarded state. Update verification from the intended behavior and code, rerun affected checks, and advance the sync record only after confirming both correspondence and results. A changed property needs a requirements basis; a stale model passing is insufficient evidence for changed code.

Version models, harnesses, and properties with the project. Maintain specifications, commands, and verification coverage under the existing [project knowledge conventions](project-knowledge.md); reuse the local/CI entry point rather than creating duplicate operating instructions.

## Upstream guidance

Read the original instructions and necessary dependencies under [remote reading and discovery](guidance-access.md). Select setup or upkeep for the current task; generate a project-local verify skill when a reusable skill entry is needed, retaining existing commands and document ownership.

<!-- skill: cursor/plugins@create-formal-verification-skill -->
- **create-formal-verification-skill**: [Source](https://github.com/cursor/plugins/blob/main/pstack/skills/create-formal-verification-skill/SKILL.md), [Skill page](https://skills.sh/cursor/plugins/create-formal-verification-skill). Select a costly, hard-to-test failure, establish one useful check, demonstrate that the workflow detects a relevant defect, and leave a reproducible project entry.

<!-- skill: cursor/plugins@maintain-formal-verification-skill -->
- **maintain-formal-verification-skill**: [Source](https://github.com/cursor/plugins/blob/main/pstack/skills/maintain-formal-verification-skill/SKILL.md), [Skill page](https://skills.sh/cursor/plugins/maintain-formal-verification-skill). Bring existing verification back in line after changes, including merges or refactors that skipped checks; distinguish drift, intended behavior changes, and bugs.

The creation workflow's TLA+ route also uses [statechart](https://github.com/cursor/plugins/blob/main/pstack/skills/statechart/SKILL.md); read it from the same version. Check its TypeScript runtime, mise, Java/TLC, and any requested image-rendering dependencies against the actual host. Inspect scripts before execution; report missing prerequisites and the scope actually run. Source instructions do not establish tool availability or expand task authorization.
