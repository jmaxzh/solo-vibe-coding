# Technical planning workflow and output structure

Use when generating technical plans from clear requirements. Retain confirmed requirements, acceptance criteria, and project constraints; when technology choices are unspecified, follow the [default stack](architecture.md#default-technology-stack).

## Required workflow

Execute all three stages in order. Scale depth to the task and reuse still-valid findings, checking their current applicability.

1. **Research with [search-first](https://github.com/affaan-m/ecc/blob/main/skills/search-first/SKILL.md).** Inspect similar implementations, conventions, and reusable capabilities in the project, then investigate mature industry solutions, open-source implementations, components, or templates. Apply the [shared reuse criteria](../SKILL.md#apply-guidance-to-project-conditions); identify sources, coverage, gaps, and opportunities for direct reuse, extension, or reference. If nothing fits, state the search scope and reasons.
2. **Evaluate with [architecture](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/architecture/SKILL.md).** Use those findings to compare suitability, complexity, cost, scalability, familiarity, delivery time, and maintenance. Choose what to adopt, adapt, reference, or build, explaining reasons, consequences, and remaining work. An evident choice still needs a brief assessment; alternatives need not be manufactured.
3. **Design with [system-design](https://github.com/anthropics/knowledge-work-plugins/blob/main/engineering/skills/system-design/SKILL.md).** Develop the chosen direction into an implementable plan using the domain and layer structure below. Explain changes and reuse in the existing system, with the necessary interfaces, data flows, failure handling, capacity, reliability, assumptions, and validation. Findings that invalidate a choice feed back into research and evaluation before finalizing the design.

Keep necessary sources and decisions in the same plan. Planning delivers design and recommendations; installation and implementation follow task authorization. Independent research or review requests use the relevant [architecture entry](architecture.md).

## Final plan structure

Partition horizontally by business domain: state each domain's responsibility, boundary, and cross-domain contracts. Within each domain, organize vertically into **Data structures → Logic algorithms → Control algorithms**.

| Layer | What to explain |
| --- | --- |
| Data structures | Data types, representations, organization, relationships, and invariants; relevant records, arrays, sets, lists, trees, or other structures, including in-memory and persistent representations where needed. |
| Logic algorithms | Problem-solving knowledge, business rules, relations, calculations, and correctness conditions: what must hold between the inputs and intended results. |
| Control algorithms | Strategies for applying that logic: evaluation order, branching, iteration/recursion, and search; scheduling, concurrency, I/O, and failure recovery where relevant. |

Data structures use the sense in Niklaus Wirth's [Algorithms + Data Structures = Programs](https://people.inf.ethz.ch/wirth/Books.pdf), with a readable [revised text](https://people.inf.ethz.ch/wirth/AD.pdf). Logic and control follow Robert Kowalski's [Algorithm = Logic + Control](https://www.doc.ic.ac.uk/~rak/papers/algorithm%20=%20logic%20%2B%20control.pdf): distinguish what is true from how to solve for it. Domain partitioning and the three-layer presentation are this skill's plan organization; map responsibilities to code and runtime boundaries using project conventions.

Present the plan in this order:

1. **Overall recommendation and basis:** summarize references, reuse, and technical choices.
2. **Each affected domain:** give its responsibility, then Data structures, Logic algorithms, and Control algorithms in that order. A simple task can have one domain; briefly identify retained designs in unchanged layers.
3. **Cross-domain collaboration and implementation/validation:** connect domains through interfaces and end-to-end flows; give each independent work item's changes, verification, effort, risk, reasons, assumptions, and unknowns.
