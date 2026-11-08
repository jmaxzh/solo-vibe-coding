# Web UX Design Principles

Use the [shared principles](../SKILL.md#shared-principles) and entry rule R2.4 for selection; clauses use the entry document’s levels and P bases.

| Clause | When | Requirement | Criterion | Basis |
| --- | --- | --- | --- | --- |
| **W1** | Providing browser navigation | Match expectations for browser back and forward. | Back and forward follow meaningful navigation states. | P3 |
| **W2** | Providing browser navigation | Preserve native behavior such as opening links in new tabs. | Native link actions remain available. | P3 |
| **W3** | Recording navigation history | Avoid duplicate or meaningless history entries. | History entries represent distinct, meaningful navigation. | P3 |
| **W4** | Implementing navigation | Use native links. | Navigation controls retain native link semantics and behavior. | P4 |
| **W5** | Implementing actions | Use native buttons. | Action controls retain native button semantics and behavior. | P4 |
| **W6** | Implementing controls | Do not simulate controls with elements lacking required interaction semantics and behavior. | Controls expose required semantics and operation. | P4 |
| **W7** | A local count or status change needs to be communicated to users | Provide enough context for assistive technology users to understand the update. [Source context](sources.md#local-status-announcements) | The announcement identifies what changed and its context. | P4 |
| **W8** | Announcing a local count or status update | Preserve the user’s current focus. [Source context](sources.md#local-status-announcements) | The announcement does not move focus. | P4 |
| **W9** | A browser runs on mobile | Also read [mobile principles](mobile.md). | Both browser and mobile rules are available. | P1 |
| **W10** | Desktop-window behavior or frequent keyboard/mouse usage is in scope | Also read [desktop principles](desktop.md). | Desktop behavior is assessed alongside browser behavior. | P1 |
