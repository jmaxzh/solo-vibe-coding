# GitHub Pages

## Writing

Start with the selected topic, project material, readers and purpose supplied through the skill entry. Shape the article around what a reader arriving at this page needs to understand. A direct visitor may know little about the project or its earlier updates. Introduce the project only as far as needed to explain this development, and link to background that deserves a separate read.

GitHub Pages hosts websites. Let the site's readers, existing articles and author's voice guide the writing. The recommendations below adapt long-form project accounts to that setting. [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

### Title and opening

Name the change, decision or question in the title. Give readers a concrete reason to continue, such as the choice they will understand or the method they can try. When the author supplies a draft, preserve its point of view and familiar vocabulary as you clarify the title and opening.

Open with a consequential moment, observation or result from the material. Then supply the context needed to interpret it. For example, a decision about removing a publisher needs a short explanation of what the publisher did and who depended on it. The opening should let a newcomer follow the next paragraph without first reading a repository or an earlier post.

### Develop the account

Choose a reading order that fits the material and the reader's question.

- A progress account connects the previous state, work performed and what can now be observed. Group activity around meaningful changes. Include dates for milestones when they help readers follow the sequence.
- A decision review explains the need or constraint, the options actually considered, the adopted choice and its consequences. Show the observations behind the choice and the cost accepted along with its benefit.
- An experiment account explains the question, setup, comparison, observations and what they justify. Include relevant versions, trial conditions and measurement details. If trials are still planned, describe the question and proposed check, with the outcome left open.

Use headings that help readers follow the particular argument. Close gaps between an observation and the decision it informed. A source link can support a claim while the article itself explains why that claim matters.

### Choose details and illustrations

Keep details that change the reader's understanding or let them try the method. Summarize routine activity, and link lengthy logs or background records when useful. For a reproducible account, provide the conditions and key actions needed to interpret the result. These might be an exercise and trial notes in a course project, a protocol in research, or a small code example in a technical project.

Place images or tables beside the point they explain. A before-and-after image should identify the relevant change. A results table should label its units and conditions. Use captions to explain what readers should notice, and check the embedded media and links in the article preview.

### Voice, scope and ending

Follow the site's writing language and the author's supplied samples. Explain unfamiliar terms when they enter the account. Give time-sensitive findings an observation date or version so later readers can judge their applicability.

End with the current result and any open question that follows from it. A trial invitation should say what to try and what feedback would help. A decision record can end with the consequence of the decision. When later evidence changes an earlier conclusion, link the earlier article and explain what was learned.

Prepare a titled article in the site's supported Markdown or HTML format, including any required front matter. Let the depth needed to explain the subject determine its length.

### Worked excerpt

This example uses facts from the review of this skill. It prepared drafts for eight channels, the initial guides called a shared publisher, the user requested separate channel reviews and deferred shared scripts, and the publisher was removed. Channel delivery methods are awaiting confirmation.

> **Why I removed the shared publisher from a build-in-public skill**
>
> The skill helps people turn project work into separate drafts for eight channels. Its first implementation routed those drafts through a shared publisher. That choice also put a shared set of publishing commands into every channel guide.
>
> During review, the user asked to confirm each channel's writing and delivery rules separately and to defer shared scripts. I removed the publisher and its calls from the guides. The revised instructions cover shared topic selection, independent channel drafts and batch review.
>
> Removing the executable sender leaves a practical question for each channel review. How will an approved draft reach the right account, and what evidence will confirm its arrival? That delivery path needs to be agreed before this skill can carry out the corresponding publication.

The opening explains the project and the earlier implementation. The middle connects the user's review decision to the change. The ending gives the actual delivery boundary and a concrete next question. Claims about reduced maintenance time or better publishing results would require additional evidence.

### Sources and adaptation

- Audience context and preserving an existing author's vocabulary draw on `copywriting`, particularly “Before Writing” and “Diagnose the Situation First.” Here they guide project articles. [Reader context](https://github.com/coreyhaines31/marketingskills/blob/88c79f6528a9347420e57ceb1fff9a60de651768/skills/copywriting/SKILL.md#before-writing) · [Author's voice](https://github.com/coreyhaines31/marketingskills/blob/88c79f6528a9347420e57ceb1fff9a60de651768/skills/copywriting/SKILL.md#diagnose-the-situation-first)
- Opening with a real moment or finding draws on the story and value openings in `social`'s “Hook Formulas.” Here the opening must introduce the article's actual subject and context. [Opening examples](https://github.com/coreyhaines31/marketingskills/blob/88c79f6528a9347420e57ceb1fff9a60de651768/skills/social/SKILL.md#hook-formulas)

These references use revision `88c79f6`. The three account forms and the worked excerpt are this guide's editorial adaptations. Topic assignment follows the skill entry, and each channel's draft is composed independently. Upstream's content-repurposing workflow proposes adapting a core piece across platforms. [Upstream reuse workflow](https://github.com/coreyhaines31/marketingskills/blob/88c79f6528a9347420e57ceb1fff9a60de651768/skills/social/SKILL.md#repurposing-workflow)

## Delivery

For a site deployed from a branch, confirm the source repository, branch, publishing directory, article path and final HTTPS URL. Updating the source file requires write access to that repository. [Official documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

Keep the commit SHA as evidence of submission. Report deployment as pending until the expected URL serves the approved article. If an older version is still visible, check the deployment before submitting again.
