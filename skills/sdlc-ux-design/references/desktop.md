# Desktop UX Design Principles

Use the [shared principles](../SKILL.md#shared-principles) and entry rule R2.2 for selection; clauses use the entry document’s levels and P bases.

| Clause | When | Requirement | Criterion | Basis |
| --- | --- | --- | --- | --- |
| **D1** | Providing desktop shortcuts | Provide common shortcuts according to platform conventions. | Common shortcuts agree with the target platform. | P3 |
| **D2** | Shortcuts are available during text input | Do not disrupt text input. | Text entry remains operable. | P4 |
| **D3** | Closing an overlay | Restore focus to the trigger or the control needed for the next action. | Focus returns to one of these task-relevant controls. | P4 |
| **D4** | The same WPF action has multiple entry points in the same context | Apply the same execution conditions to all entry points. [Source context](sources.md#wpf-action-consistency) | Action availability agrees across entry points. | P3 |
| **D5** | The same WPF action has multiple entry points in the same context | Apply the same target resolution to all entry points. [Source context](sources.md#wpf-action-consistency) | Entry points resolve the same target. | P3 |
| **D6** | The interface runs in a browser | Read [web principles](web.md) under R2.4. | Browser rules are available. | P1 |
