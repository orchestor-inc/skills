# Skill coverage

2026-10-03 source catalog, CLI source version 0.6.2. All 457 catalog entries have
one resource-skill owner. This is command routing coverage, not authenticated
execution or a claim that every published binary supports every entry. Detailed
operation names live in each resource skill's command references.

| Resource skill | Routed commands | Families (specialized leaves may have another owner) |
| --- | ---: | --- |
| `orchestor-cli` | 32 | `api-keys`, `auth`, `completion`, `config`, `costs`, `forge`, `review`, `service-accounts`, `setup`, `status`, `stop`, `update`, `usage`, `whoami`, `workspace` |
| `orchestor-brands` | 18 | `brands`, `domains` |
| `orchestor-prompts` | 35 | `personas`, `prompts`, `tags`, `topics` |
| `orchestor-runs` | 25 | `channels`, `init`, `observations`, `regions`, `runs`, `workspaces` |
| `orchestor-reports` | 9 | `report`, `reports`, `websites` |
| `orchestor-answers` | 3 | `answers` |
| `orchestor-sources` | 7 | `fanout-queries`, `sources` |
| `orchestor-research` | 178 | `research` |
| `orchestor-agentic-web` | 21 | `agentic-web`, `analytics` |
| `orchestor-perception` | 9 | `perception`, `perception-attributes`, `reports` |
| `orchestor-shopping` | 17 | `products`, `reports` |
| `orchestor-workspace` | 59 | `feedbacks`, `files`, `initiatives`, `project-label-groups`, `projects`, `saved-views`, `workspaces` |
| `orchestor-manage-issues` | 29 | `issues` |
| `orchestor-integrations` | 15 | `browser-context`, `browser-session`, `connect-sessions`, `connections` |

`orchestor` routes requests, `orchestor-aeo-workflows` composes resource skills,
and `orchestor-aeo-best-practices` reviews analysis. They add no CLI operations.
The 17-skill count follows the current boundaries and is not a fixed quota.
Internal operator commands and private infrastructure remain outside this bundle.
