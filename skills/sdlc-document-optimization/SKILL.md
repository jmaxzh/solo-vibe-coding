---
name: sdlc-document-optimization
description: Design, write, optimize, and review reader-facing documents for understanding, operation, or troubleshooting, including knowledge-base documents. Not for model-execution rules or ordinary conversational answers. Factual audits follow applicable knowledge-base rules.
license: MIT
---

# Document Optimization

## Applicability

- Apply to designing, writing, optimizing, and reviewing reader-facing documents for understanding, operation, or troubleshooting, including knowledge-base documents; not to ordinary conversational answers.
- Instructions, prompts, skills, and execution rules that constrain model behavior belong to `sdlc-instruction-optimization`; imperative wording or operating steps alone do not change the document category. For mixed artifacts, apply both skills to their respective content; do not load both for single-purpose tasks. Resolve the other skill through the runtime's catalog and load it by its actual registered name and namespace, or read its entry and relevant resources at the discovered installation path. If a required skill or resource is unavailable, report the missing dependency and pause only the affected work; continue independent work without silently skipping rules or automatically installing dependencies.
- Follow the target artifact's established domain rules, format, and maintenance permissions. Do not extend project- or knowledge-base-specific requirements to other artifacts.

## Shared expression rules

- Prefer terms already defined by the project or document; otherwise use established industry terms. Explain concepts that affect understanding as needed.
- Use one standard term per concept and one concept per term. Do not alternate synonyms merely to vary wording.
- Identify the intended meaning of original wording and express it in standard terms rather than copying it mechanically. Clarify meaning, scope, and distinctions when terms are ambiguous or definitions conflict.
- Remove ambiguous references, clarify the scope of negation, and distinguish possible from confirmed causes.
- Organize content logically, retaining factual accuracy and complete meaning. Do not lose necessary conditions, negation, or causal relationships through compression.

## Reference

Read the [Documentation Design Principles](references/document-design.md) for tasks within this skill's scope.

## Working modes

Select a mode from the user's request: create for new artifacts; review only without changing target artifacts when only a review is requested; review and revise for changes to existing artifacts.

Before starting, establish the scope, document purpose, and applicable conventions, then read this skill's reference.

### Create

- Write the artifact for its goals, audience, and applicable conventions, checking content and expression against the relevant references.
- Check content completeness, explicit conditions and constraints, and consistency with related documents. Correct issues before delivery.

### Review only

- Report specific locations, problems, impacts, and revision suggestions. Distinguish confirmed issues, matters needing confirmation, and unverified scope.

### Review and revise

- Base changes on identified issues and revision goals; leave useful content unchanged when no change is needed.
- Choose the unit and order of work according to scope, dependencies, and risk. Related documents may be revised together when this helps maintain consistency; no fixed sequence of revision stages is required.
- Compare the result with the original to assess improvements and regressions. Preserve useful information, necessary explanations, conditions, constraints, and behavioral boundaries; restore or integrate valuable content omitted during revision. A diff supports this assessment but does not replace judgment about meaning and usefulness.
- As you finish reviewing each revised document, show its before-and-after comparison in a progress update. Cover every revised document, including translations. Name the document and section, pair the original and revised wording for each material change, and explain the practical difference. Identify additions or deletions directly. Show where an important original condition is preserved or why it was removed, and note any regression found and its resolution or current status.
- Resolve conflicts using document goals, facts, and applicable constraints. Check affected cross-document relationships. If an edit cannot meet the completion criteria, restore the affected content and report the unresolved issue and reason.

### Completion criteria and reporting

- New artifacts must meet task goals and applicable conventions. Revisions must solve target issues, retain valid original content, and introduce no omissions, ambiguity, contradictions, or redundancy.
- Removing content with evidence that it is wrong, obsolete, unrelated, or duplicated is not information loss.
- Close with a brief summary of the outcome, unresolved issues, and verification limits. Leave the document comparisons in the progress updates.

## Review boundaries

- Use the documentation reference for reader-facing content; do not force prompt dimensions onto it.
- For knowledge-base expression reviews, follow target-document conventions without automatically expanding into factual audits. For dedicated audits, follow applicable knowledge-base rules for sources of truth, content ownership, implementation status, and cross-document consistency.
