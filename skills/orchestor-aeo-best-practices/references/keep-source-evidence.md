---
title: Keep source identity and exact quotations
impact: HIGH
impactDescription: Makes findings inspectable and reproducible
---

## Keep source identity and exact quotations

Makes findings inspectable and reproducible.

**Incorrect:** Summarize a retrieved page as if it were inspected, or paraphrase an attribute quote while retaining its old offsets.

**Correct:** Retain answer/source IDs, URLs, timestamps, and scope. For perception, preserve the returned digest and exact UTF-16 quote offsets.

Search-result snippets, full-page capture, saved AI answers, and provider metadata are different evidence types. Name which one supports each claim.

Reference: [Orchestor CLI](https://orchestor.io/docs/cli) and the relevant
endpoint's current help/schema. The impact label describes correctness or data
risk; it is not a quantified claim of business improvement.
