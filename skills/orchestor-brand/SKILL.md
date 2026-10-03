---
name: orchestor-brand
description: "Use this skill when: 「brand 追加」「自社 brand 登録」「競合 brand 追加」; 「監視 brand 一覧」「ブランド一覧を編集」「ブランドプロフィールを更新」; 「ブランドの監視を有効/無効にする」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-brand.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
allowed-tools:
  - Read
  - Bash(orc brands *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-brand.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Manage brands and competitors

Use this skill to set up a tracked brand, add a competitor, or update a brand profile. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. List workspace brands and resolve the intended ID. Own brands use `relation: owned`; competitors use `direct_competitor` or `indirect_competitor`.
2. Read `orc brands get BRAND_ID --workspace WORKSPACE_ID --format json` before changing a profile.
3. Inspect `orc brands update --help`. Preserve fields outside the request. Arrays replace existing values, so retain unrelated offerings, tags, and audience IDs.
4. Write only the requested fields to a JSON file and inspect the request:

```bash
orc brands update BRAND_ID --workspace WORKSPACE_ID --stdin --dry-run < brand-profile.patch.json
```

5. Apply the requested update without `--dry-run`, then read back the same brand ID. Confirm deletion explicitly when the user has not already authorized the exact deletion.

Updating a profile does not mean prompts were regenerated or measurements rerun. Use saved audience context when drafting monitoring questions; do not invent customer personas.

## Return

Brand ID, relation, changed fields, and verified state. Use [topics](../orchestor-topic/SKILL.md) and [prompts](../orchestor-prompt/SKILL.md) to organize monitoring questions.
