# Error recovery

| Observation | Action |
| --- | --- |
| Missing leaf command or unknown flag | Check installed version and exact leaf help; use documented upgrade guidance |
| Authentication failure | Inspect connection state; use supported login; do not retry blindly |
| Permission failure | Check workspace and needed role; do not substitute operator credentials |
| Validation failure | Correct the indicated input from its schema; do not invent a default |
| Rate limit | Respect Retry-After and bound retries |
| Async timeout | Preserve the returned job ID and inspect that job |
| Ambiguous write outcome | Read by returned ID or retry the identical idempotent request |
| Empty result | Check filters, period, pagination, and data availability before concluding absence |

Return a concise error and the next supported step. Do not echo headers, tokens,
raw credential configuration, or unrelated customer data to diagnose the problem.
