# Authentication and workspace selection

CLI and MCP credentials are separate. Use `orc status` and `orc auth status` for
CLI state. Use the client's MCP status/OAuth flow for the hosted MCP connection.
A GitHub permission to install skills does not grant product access.

**Incorrect:** read a token file, print its value, or change the API URL because
a workspace link looks different from the configured service endpoint.

**Correct:** report the connection state and selected workspace. Follow the
supported login flow. If the endpoint or workspace conflicts with the request,
resolve that conflict before writing. Never paste access tokens into chat.

`orc workspace list` is not the workspace listing command. Inspect
`orc workspaces list --help` to discover accessible workspaces; `orc workspace`
contains local selection/linking helpers. Distinguish a remote workspace mutation
from changing the local selected workspace.

For unattended access, use only the requested API-key or service-account flow.
Inspect the command's supported scopes and expiry rather than copying a human
session token. Store returned secrets in the user's approved secret destination.
If that destination is unspecified, prepare the non-secret request details and
resolve storage before creating a credential.
