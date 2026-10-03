---
name: orchestor-report-visibility
description: "Use this skill when: 「visibility 確認」「mention rate」「share of voice」; 「自社 vs 競合の SoV」「ブランド露出推移」"
metadata:
  source: apps/cli/skill-scaffold/sources/helper/orchestor-report-visibility.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
  - orchestor-report
allowed-tools:
  - Read
  - Bash(orc reports visibility get *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/helper/orchestor-report-visibility.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Compare brand visibility

Use this skill for brand exposure, mention rate, share of voice, or a comparison with competitors. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. Resolve the brand IDs and fix the comparison period, platforms, country, and prompt scope.
2. Read `orc reports visibility get --help` and retrieve the current metrics.

```bash
orc reports visibility get --workspace WORKSPACE_ID --scope brand --scope-id BRAND_ID --date-range '{"period":"30d"}' --metrics visibility_rate,share_of_voice,average_position --format json
```

3. Use the same conditions for every comparison. For reproducible period-over-period work, supply explicit UTC start/end dates instead of two moving windows.
4. Investigate a change with [saved answers](../orchestor-answer/SKILL.md). Use [citation reports](../orchestor-report/SKILL.md) for cited sources; mention share of voice is not citation rate.

## Return

A comparison table with scope, period, metric values, and evidence. State missing data and denominator differences. Describe changes without claiming causality from correlation.
