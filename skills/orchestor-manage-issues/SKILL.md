---
name: orchestor-manage-issues
description: "Create, find, update, classify, and organize tasks and Issues inside an Orchestor workspace, including project and milestone assignment. Use when a user asks to record an action from a workspace URL, a screen, or analysis evidence. Complete the requested record operation; do not substitute GitHub Issues or start implementation and deployment."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Manage Orchestor Issues

This skill owns interpreting the request, resolving membership, and verifying the
saved record. The CLI owns authentication, request shape, and transport.

## When to apply

Use for an Orchestor product Issue. A GitHub issue, a Codex chat, a project, and
an Orchestor Issue are different objects. Confirm only when the intended product
object cannot be resolved from the request.

## Preflight

Check `orc --version` and, if the connection/workspace is not already known,
`orc status`. Use the configured endpoint. Check `orc issues create --help` for
an unfamiliar input. Ordinary task creation does not require browsing every
command, searching source code, or inspecting secret files.

## Resolve scope

A URL such as `/w/WORKSPACE/issues?project_id=UUID&milestone_id=UUID` supplies the
scope directly. Do not copy a full DOM path into the issue.

- Pass `--workspace WORKSPACE_ID` consistently.
- Keep issue project_id (UUID) separate from milestone projectKey.
- Resolve projectKey only when needed, then inspect that project's milestones.
- Do not invent an assignee, priority, due date, or membership the user did not request.

## Create

1. If duplication is plausible, search the same workspace/project with relevant
   title words. Do not conclude absence from a display-number-only search.
2. Write a UTF-8 JSON body with title, classification, description, and any
   explicitly requested project/initiative/priority fields.
3. Submit once using stdin and an idempotency key where supported.
4. Retain the returned internal ID and display identifier separately.
5. Assign the requested milestone using the created ID, then read back membership.

```bash
orc issues create --workspace WORKSPACE_ID --idempotency-key UNIQUE_KEY --stdin --format json < issue.json
```

The JSON body should state current behavior, requested change, completion
condition, and source evidence. Classification uses the current product values
such as owned, earned, or community; do not confuse classification with priority.

## Update and recover

Read the existing issue, update only requested fields, and verify the result.
Omitted fields retain their values where documented; null or an explicit array
may clear or replace them. If milestone assignment fails after creation, resume
from the existing Issue ID rather than creating a duplicate.

## Return

Issue identifier, title, workspace, membership, and resulting state. A request
to create the record is complete when the record is verified; do not start coding,
publication, or notifications unless separately requested.

## References

- [Membership and identifiers](references/membership.md)
- [Updates and retries](references/updates.md)
- [Command families](references/commands.md)
