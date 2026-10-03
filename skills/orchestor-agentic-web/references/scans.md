# Scan requests and stored reports

The scan-create URL is a public HTTP(S) domain root. Bare domains are accepted;
paths, queries, fragments, and credentials are rejected. A separate MCP URL must
be an explicit public endpoint and also cannot contain credentials, query strings,
or fragments. Do not put a token into an endpoint URL.

**Incorrect:** request a force scan every time a report is read, or claim the
scan discovered and tested an MCP server when none was supplied.

**Correct:** inspect available reports and their ages. Set cache/freshness fields
according to the task. `force` starts a fresh scan; it is not merely a display
refresh. The browser option adds rendered DOM/accessibility and WebMCP evidence
checks using an isolated public browser, not access to the user's signed-in tabs.

Preserve scan/report IDs and inspect the returned resource. Accepted collection
is not a completed report. Report unsupported or blocked targets accurately.
