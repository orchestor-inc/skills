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
| `orc personas create` | Create a persona |
| `orc personas delete` | Soft-delete a persona |
| `orc personas get` | Get a persona |
| `orc personas list` | List personas |
| `orc personas update` | Update a persona |
| `orc personas suggestions refresh` | Generate persona suggestions |
| `orc personas suggestions generations get` | Get persona suggestion generation |
| `orc prompts create` | Create AI Search prompt |
| `orc prompts delete` | Remove an AI Search prompt from active views |
| `orc prompts disable` | Disable AI Search prompt |
| `orc prompts enable` | Enable AI Search prompt |
| `orc prompts get` | Get AI Search prompt |
| `orc prompts list` | List AI Search prompts |
| `orc prompts suggestions list` | List prompt suggestions |
| `orc prompts tags get` | List tags on a prompt |
| `orc prompts tags update` | Replace prompt tags (bulk) |
| `orc prompts update` | Update AI Search prompt |
| `orc prompts suggestions accept` | Accept suggestion (promote to prompt) |
| `orc prompts suggestions refresh` | Generate prompt suggestions |
| `orc prompts suggestions reject` | Reject suggestion |
| `orc prompts suggestions generations get` | Get prompt suggestion generation |
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
| `orc tags create` | Create tag |
| `orc tags delete` | Soft-delete tag |
| `orc tags list` | List tags |
| `orc tags update` | Update tag |
| `orc topics create` | Create AI Search topic |
| `orc topics delete` | Soft-delete AI Search topic |
| `orc topics get` | Get AI Search topic |
| `orc topics list` | List AI Search topics |
| `orc topics suggestions list` | List topic suggestions |
| `orc topics update` | Update AI Search topic |
| `orc topics suggestions accept` | Accept a topic suggestion (promote to topic) |
| `orc topics suggestions refresh` | Generate topic suggestions |
| `orc topics suggestions reject` | Reject a topic suggestion |
| `orc topics suggestions generations get` | Get topic suggestion generation |
| `orc workspaces measurement-configurations get` | Get the Workspace measurement configuration |
| `orc workspaces measurement-configurations update` | Update the Workspace measurement configuration |
| `orc workspaces measurement-configurations revisions list` | List append-only measurement configuration revisions |
| `orc workspaces measurement-targets get` | Get workspace measurement regions, languages and allowances |
| `orc workspaces measurement-targets update` | Update workspace measurement regions and languages |
| `orc workspaces quotas get` | Get workspace quotas |
| `orc workspaces setup get` | Get the durable onboarding journey checkpoint |
