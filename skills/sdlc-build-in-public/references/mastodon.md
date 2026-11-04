# Mastodon

## Writing

Use the assigned topic to explain an observation or tradeoff to readers on the chosen instance and people seeing a shared post elsewhere. Explain project terms that these readers may not know.

### Opening and reasoning

Identify the work and the current finding before explaining the choice it led to. Include the condition that makes the tradeoff meaningful. If the post follows an earlier update, briefly name the unresolved issue and the new observation.

Use enough text to make the reasoning understandable on its own. Separate a result already observed from the next question under examination. A link to the full record can support a reader who wants details.

### Community context and media

Choose subject tags that actually describe the post when they help readers find the conversation. Use community vocabulary that is relevant to the topic. Mention people when their participation is relevant.

Describe the significant content of attached media. For a comparison, explain what differs between the images. Where the content warrants a content warning, make the warning descriptive of what readers will encounter. Mastodon documents media descriptions, tags and content warnings. [Posting features](https://docs.joinmastodon.org/user/posting/)

### Length and ending

Check the chosen instance's current text and media limits. Review the post including links, media descriptions and any content warning. If a native attachment is needed, confirm support in the intended method.

End with the implication of the observation or a concrete question for readers with relevant experience. A follow-up post can add context when the explanation needs more room. Make the connection between posts clear.

### Worked post

Illustrative input. A workshop uses the same upload page for several exercises. Submission steps can be repeated on each worksheet or maintained in shared instructions.

> I’m preparing workshop worksheets with separate task and answer-format blocks. Every exercise uses the same upload page.
>
> I’m deciding where to put the submission steps. Repeating them beside each task means editing each copy when the destination changes. How do you keep these instructions easy to find in your learning materials?

State how each option affects later updates so readers can offer relevant experience.

### Sources

Audience context draws on [social, Before Creating Content](https://github.com/coreyhaines31/marketingskills/blob/88c79f6528a9347420e57ceb1fff9a60de651768/skills/social/SKILL.md#before-creating-content). Mastodon's linked documentation establishes the posting features.

## Delivery

Confirm the account’s instance and public visibility. API posting requires a user token with `write:statuses`. If an idempotency key is used, keep the same key for a retry of that post. [Official documentation](https://docs.joinmastodon.org/methods/statuses/)

Retain the status URL. If delivery is uncertain, check the account on that instance before retrying.
