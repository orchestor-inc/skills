---
name: orchestor-report
description: "Use this skill when: 「visibility 確認」「mention rate」「share of voice」「average position」; 「citation 集計」「source domain 別 breakdown」「self-citation」; 「sentiment 分析」「sentiment time series」; 「query fanout 集計」; 「bot traffic」「AI crawler 確認」「referral click」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-report.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
allowed-tools:
  - Read
  - Bash(orc report *)
  - Bash(orc reports *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-report.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Analyze AI visibility and citations

Use this skill to summarize visibility, citations, sentiment, or query fanouts and explain changes. Read [shared rules](../orchestor-shared/SKILL.md).

## Choose the report

| Question | Read |
| --- | --- |
| How often is the brand mentioned? | `orc reports visibility get --help` |
| Which sources are cited? | `orc reports citations get --help` |
| How is the brand described? | `orc reports sentiment get --help` |
| What follow-up queries appear? | `orc reports query-fanouts get --help` |
| Give me a combined summary | `orc report --help` |

For other report types, inspect the current `orc reports --help`; do not infer support from an old catalog.

## Procedure

1. Fix workspace, scope IDs, period, platforms, country, and prompt filters.
2. Select only supported metrics and dimensions from leaf help. Visibility uses `visibility_rate`, `share_of_voice`, and `average_position`; citations use `citation_count` or `citation_rate`.
3. Retrieve comparable report windows. Use `--date-range` for detailed reports; do not pass the summary command's `--period` flag to every report command.
4. Inspect [saved answers](../orchestor-answer/SKILL.md) behind a material difference. An aggregate report alone does not establish why a metric changed.
5. Prioritize actions with evidence and state what further measurement would distinguish competing explanations.

## Return

A table of findings with scope, time range, metric, evidence, and next action. Do not interpret missing rows as zero or confuse mention share of voice with citation rate. Create [Issues](../orchestor-manage-issues/SKILL.md) only when requested.
