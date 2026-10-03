---
name: orchestor-domain
description: "Use this skill when: 「domain 登録」「domain 一覧」「domain 削除」; 「domain verify」「DNS 認証」"
metadata:
  source: apps/cli/skill-scaffold/sources/service/orchestor-domain.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
depends_on_skill:
  - orchestor-shared
allowed-tools:
  - Read
  - Bash(orc domains *)
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/service/orchestor-domain.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Manage tracked domains

Use this skill to register a domain, inspect its configuration, or follow its verification state. Read [shared rules](../orchestor-shared/SKILL.md).

## Procedure

1. Confirm the workspace and exact domain. Read `orc domains --help`, then the relevant leaf help.
2. List existing domains before creating one. Read current settings before a requested update.
3. For verification, use the returned challenge and current verification instructions. Do not invent DNS records or change DNS without authorization.
4. Re-read verification status after the requested action. Domain registration alone does not establish verification or traffic collection.

## Return

Domain ID, hostname, current verification state, and the next action required. For deletion, confirm the intended domain and consequences before execution. Missing traffic data is not evidence of zero visits.
