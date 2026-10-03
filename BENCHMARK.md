# Benchmark decisions

## Pinned mechanisms

- Primary: [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278). Copy the standard skills directory, trigger-oriented descriptions, task guidance, and progressive loading of detailed rules. The root discovery workflow and builder retain their existing upstream attribution.
- Supporting: [Supabase Agent Skills](https://github.com/supabase/agent-skills/tree/c9be0e931b7930f7d02126d04774d904c381e7d7). Copy the short entry-point and focused references with incorrect/correct examples and explicit consequences. Apply this to evidence quality and API contracts instead of inventing a bespoke frontmatter schema.
- Supporting: [Cloudflare Skills](https://github.com/cloudflare/skills/tree/41e0d1985894). Copy goal-to-capability routing and optional sibling skills with documentation fallback. Use the cloudflare SKILL.md product routing table as the mechanism.

## Changes and reasons

The previous bundle grouped instructions by CLI resource and omitted major public
surfaces. It also generated a private scaffold format and copied only SKILL.md.
This revision authors standard Skills directly, groups related operations by the
user's goal, and ships references with the entry point. Thirteen skills cover the
public catalog; the count is a consequence of the task boundaries, not a quota.

AEO practices are reusable review rules. Multi-step workflows compose product
capabilities. Agency, in-house, and content roles are workflow references rather
than competing copies of the same product instructions. Shared safety and scope
requirements stay in each relevant skill so single-skill installation is usable.

Public product knowledge belongs here even when used by an internal product
agent. Deployment, private infrastructure, operator credentials, and internal CLI
commands stay with internal operator skills. No built-in runtime is claimed.

## Evidence and limits

See COVERAGE.md for the 457-command source catalog and distribution of ownership.
Coverage means a documented route, not that every command was executed against a
live workspace. Examples were checked against the current public command shape;
paid collection and customer writes were not run for this documentation change.
