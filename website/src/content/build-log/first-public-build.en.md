---
title: "The first public build: a home for Solo Vibe Coding"
description: "Why this open-source Agent Skill is getting a website, how we chose its first scope, and what we will verify in public."
date: "2026-11-13"
locale: "en"
slug: "first-public-build"
---

Solo Vibe Coding has reached an initial version. Its next step is a place where an independent developer can understand the skill, try it, and follow what happens next.

This website is our first public build. It introduces the work and records the decisions behind it. It is not a claim that the skill has already produced measured gains in speed, quality, or adoption.

## Begin with a concrete task

The skill is for developers who already have a product direction. It selects specialist guidance for the current task: acquisition and conversion, visual design and interaction, requirements and communication, architecture and technical design, development and quality, or production deployment and release.

Each topic can be entered independently. Engineering work gives quality criteria and automated checks an early place, and the project keeps the useful knowledge that comes out of the work.

The website therefore starts with task examples. A developer should be able to recognize a current problem, copy a prompt, and understand the expected deliverable before deciding to install.

## Keep the first release small and usable

The first scope includes a product homepage, a getting-started guide, six task examples, and this build log. English and Chinese have their own URLs and equivalent content.

The site uses Astro to generate static HTML and GitHub Pages to publish from the existing public repository. We chose the default GitHub address to start, with no custom domain to buy or configure. GitHub Actions checks and publishes only the generated website files.

The visual direction uses warm white, graphite, and orange, with a dark task workbench. Copyable examples, readable pages, and mobile navigation are the first interactions to get right.

## Make the decisions inspectable

Project knowledge lives alongside the code. The knowledge index points to the website specification, architecture, decision records, and verification instructions. Public build notes tell the story; maintained documentation describes the current system and how to work on it.

The repository is the place to inspect what was actually implemented and how it was checked:

- [Website source](https://github.com/jmaxzh/solo-vibe-coding/tree/main/website)
- [Project knowledge](https://github.com/jmaxzh/solo-vibe-coding/blob/main/docs/README.md)
- [Architecture decisions](https://github.com/jmaxzh/solo-vibe-coding/blob/main/docs/decisions.md)
- [Build and deployment runs](https://github.com/jmaxzh/solo-vibe-coding/actions)

## Learn from what can be observed

Before publication, we check builds, links, language pairs, metadata, keyboard interaction, mobile layouts, and detectable accessibility issues. Publication itself needs a successful deployment and reachable public pages.

Search indexing, rankings, AI citations, and actual installation numbers need separate evidence after launch. They are observations to collect, not outcomes this first version can promise.

If you try the skill, [open an issue with the task and what happened](https://github.com/jmaxzh/solo-vibe-coding/issues). A concrete result or difficulty is useful material for the next improvement.
