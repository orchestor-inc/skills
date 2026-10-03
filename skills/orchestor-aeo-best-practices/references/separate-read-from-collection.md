---
title: Separate analysis from paid collection and changes
impact: CRITICAL
impactDescription: Keeps actions within the requested scope and cost
---

## Separate analysis from paid collection and changes

Keeps actions within the requested scope and cost.

**Incorrect:** Start fresh runs, enable monitoring, or publish a report while answering a read-only question.

**Correct:** Use existing evidence first. Execute new collection or writes only when requested, with bounded prompt/channel scope and a verified result.

Draft prompt creation, monitoring enablement, a manual run, a batch, and publication have different effects. Provider reads can also carry costs; request only necessary enrichment.

Reference: [Orchestor CLI](https://orchestor.io/docs/cli) and the relevant
endpoint's current help/schema. The impact label describes correctness or data
risk; it is not a quantified claim of business improvement.
