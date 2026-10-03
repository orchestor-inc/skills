---
name: orchestor-build-mcp-integration
description: "Use this skill when: 「Orchestor MCP を agent runtime に組み込みたい」; 「Claude Code / Cursor / Codex で Orchestor を呼びたい」; 「server.json 設定」「MCP integration」"
metadata:
  source: apps/cli/skill-scaffold/sources/build/orchestor-build-mcp-integration.md
  generator: apps/cli/scripts/generate-skills-bundle.ts
  generated_at_iso: 2026-10-03T00:00:00.000Z
allowed-tools:
  - Read
---

<!--
  AUTO-GENERATED — DO NOT EDIT DIRECTLY.
  Source: apps/cli/skill-scaffold/sources/build/orchestor-build-mcp-integration.md
  Generator: apps/cli/scripts/generate-skills-bundle.ts
  Edit the scaffold and re-run the generator.
-->

# Connect an agent to Orchestor MCP

Use this skill to connect a supported agent to the hosted Orchestor MCP service.

## Procedure

1. Identify the client and whether the user wants project or user-wide configuration.
2. Read the matching [agent setup guide](https://orchestor.io/docs/agent-setup) and [MCP guide](https://orchestor.io/docs/mcp). Use the client's documented remote HTTP configuration for `https://mcp.orchestor.io/mcp`.
3. Preserve existing MCP servers. Add only the requested Orchestor entry; never replace the entire configuration file.
4. Let the user complete OAuth and select the intended workspace. Do not ask them to paste access tokens into chat or commit credentials.
5. Reconnect the client, inspect the tools it exposes, and perform a small read such as listing brands when authorized.

## Verify

Report the configured client, configuration scope, connection state, and whether the workspace read succeeded. Installing a skill or adding a server entry alone is not proof of authentication. If the client cannot connect, report its actual error and the relevant documented step; do not claim self-hosted, Docker, or alternate transport support without current documentation.
