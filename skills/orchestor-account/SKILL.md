---
name: orchestor-account
description: "Use this skill when: 「auth 確認」「API key 動作確認」; 「使用量 / cost確認」「persona一覧」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-account.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
allowed-tools:
  - Read
  - Bash(orc *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-account.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Inspect account access and usage

Use this skill for authentication status, usage, costs, and available personas. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. Confirm the requested workspace and question.
2. Use `orc auth status` for authentication. Read `orc usage --help`, `orc costs --help`, or `orc personas --help` to find the installed version's relevant read command.
3. Retrieve only the requested time range and fields. Preserve the units and period reported by the API.

## Return

Authentication state or usage/cost figures with their scope, currency or units, and date range. Missing fields are unknown, not zero. Do not change plans, payment settings, credentials, or observation schedules as part of an inspection.
