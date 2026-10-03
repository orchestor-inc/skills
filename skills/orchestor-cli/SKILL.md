---
name: orchestor-cli
description: "Install and use the orc CLI, authenticate, select workspaces, request structured output, paginate, use stdin and dry-run, handle errors, and manage automation identities. Use for connection failures, CLI scripting, account usage or costs, and safe repeatable API-backed operations. Do not use internal operator commands or inspect credential files."
license: UNLICENSED
metadata:
  author: orchestor
  version: "0.2.0"
---

# Operate the Orchestor CLI

Use this skill for reliable command execution. It is self-contained; task-specific
analysis belongs in the relevant product skill.

## When to apply

- The user asks to connect Orchestor, choose a workspace, or check authentication.
- You need to write a repeatable CLI command or diagnose its response.
- The task involves output filtering, pagination, idempotency, or an async run.

## Quick start

```bash
orc --version
orc status
orc auth status
orc workspace current
```

If `orc` is missing, follow the [CLI guide](https://orchestor.io/docs/cli).
Check the leaf command's `--help` before unfamiliar flags. A successful help exit
that only prints the parent namespace does not prove the leaf is available.
Never invent a REST path or try an internal command as a fallback.

## Execution rules by priority

| Priority | Rule | Reference |
| --- | --- | --- |
| Critical | Verify workspace and connection; keep credentials out of output | [Authentication](references/authentication.md) |
| Critical | Separate read, preview, write, and paid collection | [Safe changes](references/safe-changes.md) |
| High | Bound requests and retain continuation state | [Output and pagination](references/output-pagination.md) |
| High | Classify failures before retrying | [Error recovery](references/error-recovery.md) |

## Procedure

1. Resolve the exact user task and intended workspace. Reuse a known workspace ID.
   Use `--workspace WORKSPACE_ID` on data calls, especially for multi-client work.
2. Read the relevant help and existing state. Choose only the fields and page
   size needed. Preserve the endpoint's returned units and timestamps.
3. For a write, prepare the exact request in a UTF-8 JSON file and use `--stdin`.
   Use `--dry-run` where supported to inspect shape before submitting.
4. Submit only the requested operation. For a supported retry, keep the same
   idempotency key and exact body; a new logical operation needs a new key.
5. Read back the affected ID. For async work, poll the returned job, not a new job.
6. Return result, scope, evidence IDs, and unresolved errors. A dry run proves
   request preparation only; an accepted job is not a completed result.

## Account and automation

Use `orc usage get --help` and `orc costs get --help` for requested usage figures.
Do not turn a cost inspection into a plan or payment change. For API keys or
service accounts, read the access reference and the command help; create or revoke
credentials only as requested. Never print newly returned secrets in chat.

Use [command families](references/commands.md) to locate an operation. This is a
catalog snapshot, not a guarantee that every installed version exposes it.
