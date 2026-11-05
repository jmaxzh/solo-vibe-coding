# Web UI Design Principles

## Usage

- Read the [shared principles](../SKILL.md#shared-principles) and select the following rules for browser usage.
- For mobile browsers, also read [mobile principles](mobile.md). For desktop-window behavior or frequent keyboard/mouse usage, also read [desktop principles](desktop.md).

## Platform principles

- **Responsive layout**: reflow for available viewport and content. Support text scaling and orientation changes. Avoid whole-page horizontal scrolling. When content requires a two-dimensional layout, keep necessary horizontal scrolling within that content area.
- **Asynchronous layout stability**: in web interfaces, account for asynchronous content loading and updates in the layout to avoid unexpected shifts in reading position and interaction targets. [Source context](sources.md#asynchronous-layout-stability).
