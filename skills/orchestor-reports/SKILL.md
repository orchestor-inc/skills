---
name: orchestor-reports
description: "Read Orchestor visibility, sentiment, citation, fan-out, search-result, bot, and referral reports. Use for aggregate comparisons with explicit cohort and time bounds."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Work with aggregate reports

Reports summarize saved observations. Establish workspace, brand or other scope,
prompt membership, platform/model, country, persona, and period before comparing.

```bash
orc reports visibility get --help
orc reports visibility get --workspace WORKSPACE_ID --scope brand --scope-id BRAND_ID --date-range '{"period":"30d"}' --metrics visibility_rate,share_of_voice,average_position --format json
```

1. Read the requested report under a recorded scope.
2. For before/after comparisons use explicit UTC bounds and matching cohorts;
   check changed coverage, denominators, and missing observations.
3. Return metric names, values, scope, and limitations. Do not infer causality,
   revenue, or future performance from visibility alone.
4. Pass the relevant scope to `orchestor-answers` and `orchestor-sources` when the
   parent task needs underlying evidence. `--include-examples` is a discarded
   compatibility field in the current report contract; retrieve answers separately.

A report request does not authorize a new measurement. Perception and shopping
reports use their specialized resource skills when those objects are the target.

- [Metrics and scope](references/metrics-and-scope.md)
- [Traffic interpretation](references/traffic.md)
- [CLI operations](references/commands.md)
