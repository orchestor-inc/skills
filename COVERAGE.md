# Skill coverage

This is a 2026-10-03 source-catalog audit, not a production feature or test-status
claim. All 457 commands in the public CLI registry map to a product skill.
Specialized report/measurement prefixes take precedence over their parent family.
Internal operator entrypoints are outside this distribution.

| Product skill | Routed commands | Families |
| --- | ---: | --- |
| `orchestor-cli` | 31 | `auth`, `whoami`, `status`, `workspace`, `config`, `api-keys`, `service-accounts`, `costs`, `usage`, `setup`, `completion`, `update`, `forge`, `stop` |
| `orchestor-monitoring` | 60 | `init`, `observations`, `prompts`, `topics`, `tags`, `personas`, `regions`, `channels`, `runs`, `workspaces measurement-configurations`, `workspaces measurement-targets`, `workspaces quotas`, `workspaces setup` |
| `orchestor-visibility` | 38 | `brands`, `domains`, `answers`, `reports`, `fanout-queries`, `sources`, `websites`, `report`, `review` |
| `orchestor-research` | 178 | `research` |
| `orchestor-agentic-web` | 21 | `agentic-web`, `analytics` |
| `orchestor-perception` | 9 | `perception`, `perception-attributes`, `reports perception`, `reports perception-rankings` |
| `orchestor-shopping` | 17 | `products`, `reports shopping-performance`, `reports shopping-demand`, `reports shopping-trend`, `reports merchants` |
| `orchestor-workspace` | 59 | `workspaces`, `projects`, `project-label-groups`, `initiatives`, `files`, `saved-views`, `feedbacks` |
| `orchestor-manage-issues` | 29 | `issues` |
| `orchestor-integrations` | 15 | `connect-sessions`, `connections`, `browser-context`, `browser-session` |

`orchestor` chooses a workflow. `orchestor-aeo-best-practices` supplies analysis
rules. `orchestor-aeo-workflows` composes baseline, audit, citation-gap, and content
cycles. These three are task guidance rather than additional API coverage.

Public customer workflows are distributable regardless of whether the caller is
an external client or a future built-in product agent. Private deployment, data
maintenance, internal browser-host control, and company operating procedures
belong to the separate internal agent corpus. No built-in consumer integration
is claimed by this release.
