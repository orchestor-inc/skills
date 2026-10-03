---
title: Compare the same cohort before interpreting change
impact: CRITICAL
impactDescription: Prevents mismatched populations from appearing as an improvement
---

## Compare the same cohort before interpreting change

Prevents mismatched populations from appearing as an improvement.

**Incorrect:** Compare a last-30-days all-platform average to a one-week, one-platform value and call the difference an uplift.

**Correct:** Hold brand set, prompt set, platform/model, country, persona, and metric constant. Use explicit UTC start/end bounds for period comparisons and disclose missing observations.

A rolling window moves between requests. A current configuration change does not rewrite historical evidence. Record the cohort and boundaries before interpreting the delta.

Reference: [Orchestor CLI](https://orchestor.io/docs/cli) and the relevant
endpoint's current help/schema. The impact label describes correctness or data
risk; it is not a quantified claim of business improvement.
