---
title: Treat missing coverage as unknown
impact: HIGH
impactDescription: Avoids false absence and zero-performance claims
---

## Treat missing coverage as unknown

Avoids false absence and zero-performance claims.

**Incorrect:** Interpret an empty first page or unavailable provider period as zero visibility.

**Correct:** Check pagination, filters, connection state, acquisition result, and denominator. If coverage remains incomplete, say so.

An empty page can still carry a continuation cursor. Unsupported metrics, collection failures, and true observed zero are different states.

Reference: [Orchestor CLI](https://orchestor.io/docs/cli) and the relevant
endpoint's current help/schema. The impact label describes correctness or data
risk; it is not a quantified claim of business improvement.
