# CLI command reference

Catalog snapshot: 2026-10-03, CLI source version 0.6.2. These names were
resolved against the public CLI registry. This proves routing coverage, not
authenticated execution or availability in every published binary. Read the
installed leaf command’s `--help` for arguments, schema, permissions and limits.

| Command | Purpose |
| --- | --- |
| `orc api-keys create` | Create API key |
| `orc api-keys delete` | Revoke API key |
| `orc api-keys list` | List API keys |
| `orc api-keys update` | Update API key |
| `orc auth credential` | 標準出力へ現在の資格情報を明示的に出す（秘密情報） |
| `orc auth login` | Authenticate with the Orchestor API |
| `orc auth logout` | Remove stored API credentials |
| `orc auth status` | Verify the active credential |
| `orc completion` | Print shell completion for bash, zsh, fish, or PowerShell |
| `orc config get` | Read a non-secret CLI configuration value |
| `orc config set` | Set a CLI configuration value |
| `orc config show` | Show current auth status and config |
| `orc costs get` | Get daily credit costs |
| `orc forge clone` | Clone a read-only Forge mirror using your CLI login |
| `orc forge fetch` | Fetch a read-only Forge mirror using your CLI login |
| `orc service-accounts create` | Create service account |
| `orc service-accounts get` | Get service account |
| `orc service-accounts list` | List service accounts |
| `orc service-accounts update` | Update service account |
| `orc service-accounts keys create` | Create service account key |
| `orc setup mcp` | Configure CLI as MCP server for agent consumption |
| `orc setup skills` | Install bundled Orchestor SKILL.md directories to agent skill paths via symlink. |
| `orc status` | 資格情報・base URL・organization・workspace と実行環境を確認する |
| `orc stop` | Stop paid measurement execution through the operator control plane |
| `orc update` | Update the CLI through its detected install owner |
| `orc usage get` | Get usage by time bucket |
| `orc whoami` | Show the authenticated identity and selected Workspace |
| `orc workspace current` | Show the currently selected Workspace tenant |
| `orc workspace link` | Bind a Workspace to the current directory |
| `orc workspace unlink` | Remove the Workspace binding from the current directory |
| `orc workspace use` | Set the default Workspace for future commands |

| `orc review` | Run canonical review checks against a git diff |
