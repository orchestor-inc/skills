# Output and pagination

Prefer `--format json` for structured work. Use `--fields` to keep only needed
fields, or `--field` for one path. Do not assume every response is a top-level
array: inspect its envelope before parsing it. Use `--output` only when an artifact
is needed, with an explicit destination. Do not save customer exports inside a
public repository.

**Incorrect:** treat the first page as the complete dataset, reuse one provider's
cursor on another endpoint, or request all results before filtering.

**Correct:** filter first, read a bounded page, and follow the endpoint's actual
continuation contract. Generic paginated commands may support `--page-all` and
emit NDJSON. Research providers can instead return a complete `next_request`
object; pass it back unchanged and do not merge it with initial filters.

An empty data page with a continuation token is not completion. Preserve filters,
locale, sort order, and page limits while continuing. Report partial coverage if
you stop at the task's bound. Treat missing data as unknown, not zero.
