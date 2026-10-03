# Safe changes and retries

**Incorrect:** add `--yes` to every command, call a create command again after a
timeout, or assume a successful dry-run means the write happened.

**Correct:** read existing state, prepare the requested fields, preview the
request where useful, submit once, then read back the returned ID.

```bash
orc issues create --help
orc issues create --workspace WORKSPACE_ID --stdin --dry-run --format json < issue.json
```

This example previews a request only. Submit it without `--dry-run` after its
workspace and body match the authorized task. Omitted update fields usually
retain values; explicit nulls and arrays may clear or replace them. Read the
specific field contract before merging changes.

Where idempotency is supported, use one unique key for a new operation and reuse
it only for the same method, path, query, and exact body. Keys can expire; inspect
current help for the lifetime. A conflict caused by different content must not
be resolved by silently choosing a new key and duplicating the operation.

Measurements, batches, connection creation, publication flags, membership changes,
and credential operations have distinct effects. A request to inspect or report
does not authorize these changes. Do not add recurring collection to a one-time
request. For uncertain create outcomes, inspect returned state before retrying.
