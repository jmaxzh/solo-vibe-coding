# Prompt Design Guidelines

The [main skill](../SKILL.md) defines purpose, principles, and rules; this reference contains practices (L3) for applying them.

**D1 General design dimensions**. Basis: R4.1.

| Dimension | Recommended | Avoid | Reason and applicability |
| --- | --- | --- | --- |
| Task definition | Specify goals, objects, outcomes, and completion criteria, with context and tradeoffs needed for judgment | Vague goals, unclear objects, missing decision context, unrelated background | Supports informed method choices and makes completion requirements understandable |
| Instruction clarity | Use concise, actionable instructions identifying necessary actors, objects, conditions, actions, and results | Ambiguity, missing conditions, requirements that do not guide action | Reduces ambiguity and unnecessary inference |
| Instruction length | Use minimum sufficient instructions; retain conditions affecting execution or outcomes | Repeating the same rule in different words, restating basic knowledge, generic admonitions, filler | Reduces redundancy and unnecessary constraints without losing specific rules |
| Input organization | Separate task instructions from the content to process; use fields or separators when necessary | Mixing instructions with data or imposing unnecessary structure on simple input | Makes clear what to process without unnecessary structure |
| Output constraints | Specify required content; constrain format, length, or structure only as needed for use | Omitting requirements that affect usability or adding unnecessary formatting constraints | Ensures usable results without unnecessary restrictions |

**D2 Scenario-specific dimensions**. Basis: R4.2, R4.3.

| Dimension | Activation scenario | Recommended | Avoid |
| --- | --- | --- | --- |
| Task decomposition | Dependencies, interface requirements, or identified risks require distinct stages | Specify necessary stages and their purpose, dependencies, and outcomes; leave other method choices open | Prescribing execution order without a concrete need |
| Instruction hierarchy | Different sources, priorities, or uses of instructions and materials | Clarify roles, priority, and applicability | Mixing instructions with data or letting lower-priority content override higher-priority rules |
| Reasoning guidance | A particular analytical method, reasoning framework, or verification process is required | Specify necessary analytical perspectives, methods, and verifiable outcomes | Universally requiring step-by-step reasoning or full internal chains of thought |
| Few-shot examples | Rules alone do not clarify classification boundaries, criteria, or output form | Use a few representative positive, negative, or boundary examples consistent with rules; explain their purpose | Repeated, irrelevant, contradictory examples, or incidental details becoming constraints |
| Evidence use | Designated sources, factual checks, or citations are required | Specify evidence scope, citation requirements, and source-conflict handling | Unsupported facts, fabricated evidence, or ignored conflicts |
| Exceptions and uncertainty | Missing information, invalid input, or source conflicts may affect results | Specify how to handle relevant exceptions and respond when information is uncertain | Requiring certainty in all cases or adding exception rules without a concrete basis |
| Tool-use instructions | External tools are allowed or required | Specify when and why to use tools, how to use their results, and when confirmation is required | Fabricated results, guessed required parameters, or expanded permissions |
| Templates and parameters | Reuse, batch processing, or dynamic filling | Use meaningful variables; separate fixed instructions and variable data | Ambiguous placeholders or ad hoc data concatenation |
| Roles and audience | Professional responsibilities, audience, or register affect outcomes | Specify necessary responsibilities, audience, and expression requirements | Ineffective expert roleplay or lengthy identity descriptions |

**D4 Final checklist**. Basis: R7.1, R7.4.

- Are the task goals, objects, and outcomes clear?
- Are there ambiguous, repetitive, generic, or unnecessary instructions?
- Is basic knowledge or capability unnecessarily repeated?
- Are necessary conditions, constraints, and behavioral boundaries retained?
- Are scenario-specific dimensions included only when needed?
- Are instructions, data, and examples clearly separated?
- Are examples representative, consistent, and free of accidental constraints?
- Is there enough relevant context to choose methods and assess tradeoffs without unnecessary background?
- Does each prescribed step, format, structure, or role serve a concrete task need, or could context and outcome requirements replace it?
- Do conclusions stay within the evidence from review, scenario walkthroughs, or any requested runtime evaluation?

## Maintenance and validation index

Maintenance operations: R3.6, R4.4–R4.6, R5.5–R5.8. Process-control assessment: R4.4–R4.6. Textual and scenario validation: R7.1–R7.2. Runtime evaluation and evidence boundaries: R7.3–R7.4.

Concept references (P5): [Netflix: Context, not Control](https://www.jobs.netflix.com/culture); [ByteDance: Context over Control](https://www.bytedance.com/about).
