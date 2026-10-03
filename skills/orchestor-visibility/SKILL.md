---
name: orchestor-visibility
description: "Analyze saved AI answers, brand visibility, mention share, citations, sentiment, query fan-outs, search results, sources, bot traffic, and referrals in Orchestor. Use for competitor comparisons, visibility changes, citation gaps, source analysis, or monthly evidence. Do not start new measurements as part of a read-only analysis."
license: UNLICENSED
metadata:
  author: orchestor
  version: "0.2.0"
---

# Analyze brand visibility and citations

Use saved observations to explain what changed and what evidence supports the
interpretation. A report is not evidence of causality or future performance.

## When to apply

Use for “why are competitors cited?”, “did our visibility change?”, “which sources
matter?”, or “show answers behind this metric”. For collecting new observations,
use `orchestor-monitoring` if available or the monitoring documentation.

## Before analysis

Confirm the workspace and brand IDs with the current connection. Fix the date
range, platform/model, country, persona, and prompt scope. Retrieve known IDs
rather than guessing them from display names. Use only requested data.

## Choose the evidence

| Question | Start with | Drill into |
| --- | --- | --- |
| Who appears and how often? | visibility report | saved answers and brand comparison scope |
| Which sources are cited? | citations report | source domains, URLs, individual citations |
| How is the brand described? | sentiment report | exact saved answer passages |
| What searches did the answer use? | query-fanouts / web-search-results | search queries, returned URLs, adopted citations |
| Are AI agents reaching our site? | bots / referrals | connected traffic evidence and collection period |

Read [metric and scope rules](references/metrics-and-scope.md) before building a
comparison. For a specific gap, use [citation evidence](references/citation-gap.md).

## Quick start

```bash
orc reports visibility get --help
orc reports visibility get --workspace WORKSPACE_ID --scope brand --scope-id BRAND_ID --date-range '{"period":"30d"}' --metrics visibility_rate,share_of_voice,average_position --format json
orc answers list --help
```

A rolling window is useful for exploration. For before/after work, use explicit
UTC bounds and the same cohort. Do not assume `--include-examples` provides the
underlying answers; the current report contract marks it as a discarded
compatibility field. Retrieve answer evidence separately.

## Procedure

1. Establish the comparison cohort and record its scope.
2. Retrieve the relevant aggregate and identify the largest meaningful difference.
3. Inspect saved answers and source URLs behind that difference. Separate brand
   mentions, source citations, retrieved search results, and inferred explanations.
4. Check changed coverage, missing observations, and denominator differences.
5. Recommend a small number of actions, each tied to evidence and an uncertainty.
   Save an Orchestor Issue only if the user requested it.

## Return

A comparison table with period, scope, metric names and values, plus answer IDs
and source URLs. State missing data and limitations. Label hypotheses explicitly.
For exports, choose a private output destination and include only needed fields.

## References

- [Brand identity](references/brand-identity.md)
- [Traffic interpretation](references/traffic.md)
- [Command families](references/commands.md)
