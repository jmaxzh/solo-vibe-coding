# CNBlogs

## Writing

Explain the assigned topic through a practice other developers can understand or try, including the technical conditions that make it useful. For a course, research or design project, use the actual tooling or method in the supplied material to explain that connection.

### Title and opening

Name the problem, technique or decision and enough context to locate it. A troubleshooting title can mention the symptom and component. A tutorial title can identify the task and relevant environment. Limit the promised result to what the material supports.

Start with the concrete problem and the effect it had on the work. Give the prerequisites, versions or setup that readers need to follow the explanation.

### Develop the article

- A tutorial gives the starting conditions, key actions, reasoning and a way to check the result. Explain the point at which each setting or step matters.
- A troubleshooting article connects the symptom, observations, possible causes, checks and supported explanation. Distinguish a cause that was verified from a working hypothesis.
- A review describes the constraint, actual options and selected approach, including the cost accepted. State where the approach was tried and where its applicability remains open.

Use headings to expose the reasoning. Put a necessary command, short code fragment or error message beside its explanation. State the inputs a command or code example needs. Show observed output when available, and label any expected output. Define unfamiliar technical terms as they arise.

### Details, images and ending

Keep the smallest complete example needed to understand the behavior. Link full logs or larger source files. Prefer text for code readers need to copy, and use screenshots for visual behavior. Describe the relevant difference beside a comparison image. Prepare a titled Markdown article and inspect its rendering. [CNBlogs Markdown support](https://www.cnblogs.com/cmt/p/markdown.html)

Conclude with the verified result, applicable conditions and any unresolved cause or next check. If the purpose is to request experiences, ask about the particular condition that remains uncertain.

### Worked excerpt

Illustrative input. A CSV exporter writes its header inside the row loop. A test with three input records produces three headers. Moving the header write before the loop produces one header and three data rows for the same input. Other input shapes have not been tested.

> **Tracing repeated headers in a CSV export**
>
> An export with three records produced a header before each data row. The header write was inside the loop that handled records.
>
> I moved the header write before the loop and repeated the test with the same input. The output then contained one header and three data rows.
>
> That check covers the supplied three-record input. Empty input and other record shapes need separate checks.

Keep the conclusion tied to the case actually tested.

### Sources

The advice on specific, supportable wording draws on [copywriting, Drafting Protocol](https://github.com/coreyhaines31/marketingskills/blob/88c79f6528a9347420e57ceb1fff9a60de651768/skills/copywriting/SKILL.md#drafting-protocol).

## Delivery

The blog API accepts the blog owner’s personal access token. Set the AI-generated content declaration according to actual authorship. [Official documentation](https://www.cnblogs.com/cmt/articles/19246558)

Record the published article URL returned in `postUrl`. If the response is ambiguous, check the target blog.
