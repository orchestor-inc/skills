---
name: orchestor-status
description: "Use this skill when: 「認証状態・ワークスペース・接続確認」; 「Orchestor に接続できない」「CLI の設定確認」"
metadata:
  source: apps/cli/skill-scaffold/sources/helper/orchestor-status.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
allowed-tools:
  - Read
  - Bash(orc status)
  - Bash(orc auth *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/helper/orchestor-status.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Check the Orchestor connection

Use this skill before a task when the CLI connection, authentication, or workspace is uncertain. Read [shared rules](../orchestor-shared/SKILL.md).

```bash
orc --version
orc status --format json
orc auth status
```

Inspect the actual returned fields. Do not infer quota or credits from a successful connection; use [account usage](../orchestor-account/SKILL.md) when the user asks about consumption.

Report connection and authentication state, the selected workspace when returned, and the next required step. Do not print credentials. Stop workspace operations if the target environment cannot be confirmed.
