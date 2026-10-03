---
name: orchestor-workspace
description: "Manage Orchestor workspaces, membership, projects, milestones, initiatives, files, and saved views. Use for organizing customer work, workspace setup or access, storing requested artifacts, and locating project or milestone IDs. Preserves tenant boundaries and distinguishes task-project UUIDs from project keys; not infrastructure administration."
license: UNLICENSED
metadata:
  author: orchestor
  version: "0.2.0"
---

# Organize an Orchestor workspace

Use the workspace as the access boundary and projects/initiatives as organization
inside it. Do not use a project to simulate isolation between clients.

## When to apply

Use for “create a workspace/project”, “find this milestone”, “attach this document”,
“save this view”, or an explicit membership/access change. For issue creation and
updates, use `orchestor-manage-issues` if installed.

## Choose the reference

- [Scope and membership](references/scope-access.md) before access or workspace changes.
- [Projects and initiatives](references/projects-initiatives.md) for work organization.
- [Files and views](references/files-views.md) for artifacts and saved filters.

## Quick start

```bash
orc workspaces list --help
orc projects list --workspace WORKSPACE_ID --fields id,projectKey,name --format json
orc initiatives list --workspace WORKSPACE_ID --limit 20 --format json
```

## Procedure

1. Reuse the workspace and IDs supplied by the user or their product URL.
2. Read current state and resolve names only as far as needed. A URL can provide
   workspace, project_id, and milestone_id; preserve those identities.
3. Distinguish a read request from create/update, membership changes, archive,
   pause/resume, or publication. Perform only the requested action.
4. Preserve unrelated fields and relationships. Prefer a minimal update.
5. Read back affected records and report their IDs and state.

## Return

Workspace, changed or located resources, relevant membership/relationship state,
and evidence IDs. Do not expose member details or file content beyond the task.
If access is denied, state the needed product permission rather than searching
for internal administrator tooling.

See [command families](references/commands.md).
