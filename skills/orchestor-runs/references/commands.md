# CLI command reference

Catalog snapshot: 2026-10-03, CLI source version 0.6.2. These names were
resolved against the public CLI registry. This proves routing coverage, not
authenticated execution or availability in every published binary. Read the
installed leaf command’s `--help` for arguments, schema, permissions and limits.

| Command | Purpose |
| --- | --- |
| `orc channels list` | List workspace model channels |
| `orc init` | Initialize credentials; with --website, complete onboarding and the first observation batch |
| `orc observations create` | Start or resume onboarding extraction |
| `orc observations get` | Get current onboarding extraction status |
| `orc observations configurations confirm` | Confirm onboarding resources and start the first observation batch |
| `orc observations configurations get` | Get generated onboarding review resources |
| `orc regions list` | List supported region catalog |
| `orc runs cancel` | Cancel a Prompt Run |
| `orc runs create` | Create a Prompt Run |
| `orc runs get` | Get a Prompt Run |
| `orc runs list` | List Prompt Runs |
| `orc runs results get` | Get Prompt Run results |
| `orc runs batches cancel` | Cancel a prompt run batch |
| `orc runs batches create` | Create a prompt run batch (ASYNC) |
| `orc runs batches delete` | Delete a prompt run batch |
| `orc runs batches get` | Retrieve a prompt run batch (status polling) |
| `orc runs batches list` | List prompt run batches |
| `orc runs batches results get` | Get results of a completed prompt run batch |
| `orc workspaces measurement-configurations get` | Get the Workspace measurement configuration |
| `orc workspaces measurement-configurations update` | Update the Workspace measurement configuration |
| `orc workspaces measurement-configurations revisions list` | List append-only measurement configuration revisions |
| `orc workspaces measurement-targets get` | Get workspace measurement regions, languages and allowances |
| `orc workspaces measurement-targets update` | Update workspace measurement regions and languages |
| `orc workspaces quotas get` | Get workspace quotas |
| `orc workspaces setup get` | Get the durable onboarding journey checkpoint |
