# Web UI Design Principles

First read the [shared principles](../SKILL.md#shared-principles). This table uses the entry document’s rule format: the required result is the criterion. Each Basis names an L1 principle in that document.


## Usage

| ID | When | Required result (criterion) | Basis |
| --- | --- | --- | --- |
| WB1 | selecting web rules | must select for browser usage. | P2 |
| WB2 | targeting mobile browsers | must also read [mobile principles](mobile.md). | P2 |
| WB3 | desktop-window behavior or frequent keyboard/mouse usage is involved | must also read [desktop principles](desktop.md). | P2 |

## Platform principles

| ID | When | Required result (criterion) | Basis |
| --- | --- | --- | --- |
| WB4 | laying out web content | must reflow for the available viewport and content. | P2 |
| WB5 | text scale or orientation changes | must support the change in the layout. | P3 |
| WB6 | content requires horizontal scrolling | must avoid whole-page horizontal scrolling and confine necessary two-dimensional scrolling to that content area. | P3 |
| WB7 | web content loads or updates asynchronously | must account for it in layout to avoid unexpected shifts in reading position and interaction targets. [Source context](sources.md#asynchronous-layout-stability). | P3 |
