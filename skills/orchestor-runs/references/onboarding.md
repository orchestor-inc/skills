# Reviewed onboarding from a website

`observations create` can produce editable onboarding resources for a workspace.
For an agency, website means the client's brand website, not the agency's own.

**Incorrect:** pass one-shot automatically because the user only asked to inspect
brand facts, or submit all generated competitor suggestions without review.

**Correct:** choose the smallest requested flow. `profile_only` publishes editable
brand facts without generating topics, prompts, or measurements, and overrides
one_shot. The normal review flow lets the user review configuration before the
confirmation step. Only use one-shot when starting initial measurement is requested.

Inspect the generated configuration before `observations configurations confirm`.
Use the returned monitoring scope and IDs. The current confirmation contract
requires reviewed brand, competitors, topics, prompts, and dimensions; it requires
1–5 selected prompts on the free plan or 10–40 on paid plans, with selected
parent topics and at most 40 submitted candidates. Validate the actual schema
before submission rather than generating arbitrary placeholder IDs.

Every submitted competitor is included regardless of its `selected` flag; omit
an unwanted competitor from the submitted array. Confirmation is not a generic
partial patch. Preserve reviewed user edits and supply the required full shape.
