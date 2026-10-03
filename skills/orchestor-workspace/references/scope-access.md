# Scope and membership

A local `workspace use/link` selection and a remote workspace mutation are
different operations. Check the active connection and pass `--workspace` explicitly
on data calls when working across clients.

**Incorrect:** mix two customers' answers into one analysis because their projects
share a name, or add a workspace member to solve an unrelated read permission error.

**Correct:** keep a separate scope and evidence set for each workspace. For an
explicit membership request, confirm the intended member, workspace, and role;
inspect existing membership first; then apply and verify only that change.

Archiving, restoring, pausing, resuming, and deleting resources have different
semantics. Do not infer one from another. Inspect current state and the relevant
help, and do not expand a settings request into a broader lifecycle operation.
