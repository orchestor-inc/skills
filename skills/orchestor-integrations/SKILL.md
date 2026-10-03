---
name: orchestor-integrations
description: "Connect Claude Code, Codex, Cursor, or another supported client to Orchestor MCP; inspect provider connections, OAuth connect sessions, analytics properties, web streams, browser contexts, and integration state. Use for agent-native setup and connection troubleshooting. Preserves existing client settings and separates configuration, OAuth, workspace authorization, and successful data access."
license: MIT
metadata:
  author: orchestor
  version: "0.3.0"
---

# Connect agents and external services

A configured server or installed plugin is not an authenticated connection.
Verify each layer independently.

## Choose the connection

| Need | Reference |
| --- | --- |
| Agent client → hosted Orchestor MCP | [MCP clients](references/mcp-clients.md) |
| Workspace → analytics, search, ads, or infrastructure provider | [Provider connections](references/provider-connections.md) |
| Programmatic identity or reusable CLI access | [Automation access](references/automation-access.md) |
| Inspect public browser-context/session resources | [Browser context](references/browser-context.md) |

## MCP quick start

Use the client's current official remote HTTP configuration. The hosted endpoint:

```json
{
  "mcpServers": {
    "orchestor": {
      "type": "http",
      "url": "https://mcp.orchestor.io/mcp"
    }
  }
}
```

This is the MCP server-map shape, not a universal configuration file for every
client. Read the [agent setup guide](https://orchestor.io/docs/agent-setup) and
client documentation before choosing the file and syntax.

## Procedure

1. Identify the client/provider, configuration scope, and intended workspace.
2. Inspect existing connection state and add only the requested entry.
3. Let the user complete OAuth. Do not ask for tokens in chat or inspect secret files.
4. Reconnect and inspect the tools or provider resources actually available.
5. Perform a small authorized read if the task includes verifying access.
6. Return configuration, authentication, selected workspace, and read outcome as
   separate facts. Report an unresolved step without claiming full success.

## Boundaries

A read-only provider connection differs from management access. Do not request
broader scopes or create provider properties to solve an unrelated read failure.
Do not promise self-hosted, Docker, alternate transport, or client-specific feature
support without current documentation.

See [command families](references/commands.md) for the product connection surface.
