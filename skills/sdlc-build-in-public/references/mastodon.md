# Mastodon

## Writing

Use the assigned topic to explain an observation or tradeoff to readers on the chosen instance and people seeing a shared post elsewhere. Introduce project terms that this audience may not know, following the author's established voice.

### Opening and reasoning

Identify the work and the current finding before explaining the choice it led to. Include the condition that makes the tradeoff meaningful. If the post follows an earlier update, briefly name the unresolved issue and the new observation.

Use enough text to make the reasoning understandable on its own. Separate a result already observed from the next question under examination. A link to the full record can support a reader who wants details.

### Community context and media

Choose subject tags that actually describe the post when they help readers find the conversation. Use community vocabulary that is relevant to the topic. A mention should identify someone whose participation is relevant.

Describe the significant content of attached media. For a comparison, explain what differs between the images. Where the content warrants a content warning, make the warning descriptive of what readers will encounter. Mastodon documents media descriptions, tags and content warnings. [Posting features](https://docs.joinmastodon.org/user/posting/)

### Length and ending

Check the chosen instance's current text and media limits. Review the post including links, media descriptions and any content warning. If a native attachment is needed, confirm support in the intended method.

End with the implication of the observation or a concrete question for readers with relevant experience. A follow-up post can add context when the explanation needs more room. Make the connection between posts clear.

### Worked post

The example uses the publisher removal and the instruction to approve exact drafts and accounts. It focuses on where a human review enters the handoff.

> I’m writing an agent skill that prepares project updates for eight channels. I removed its common sender while the delivery methods are under review.
>
> The instructions require approval of the exact draft and destination account. If you maintain a publishing tool, which part of that handoff needs a human check in your setup?

The post supplies context for readers outside the project, states a real requirement and asks about a specific practice. Media or a subject tag can be added when they support the actual post.

### Sources and adaptation

Audience context draws on [social, Before Creating Content](https://github.com/coreyhaines31/marketingskills/blob/88c79f6528a9347420e57ceb1fff9a60de651768/skills/social/SKILL.md#before-creating-content). Mastodon's linked documentation establishes the posting features. The narrative and excerpt are this guide's editorial adaptations.

## Delivery

Confirm the account’s instance and public visibility. API posting requires a user token with `write:statuses`. If an idempotency key is used, keep the same key for a retry of that post. [Official documentation](https://docs.joinmastodon.org/methods/statuses/)

Retain the status URL. If delivery is uncertain, check the account on that instance before retrying.
