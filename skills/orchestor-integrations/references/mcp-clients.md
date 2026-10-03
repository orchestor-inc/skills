# MCP clients

Use https://mcp.orchestor.io/mcp with the client's documented HTTP transport and
OAuth support. Claude Code, Codex, and Cursor use different configuration surfaces;
do not paste a JSON server map into a TOML-only location or replace the entire
configuration file.

**Incorrect:** report “connected” after adding a URL, or overwrite all MCP servers
to add Orchestor.

**Correct:** preserve other entries, authorize with OAuth, inspect the connected
tool list, and make a small authorized read. MCP tool names and schemas are not
identical to CLI commands. Inspect the actual tool declaration rather than
mechanically translating a namespace into a guessed tool name.

CLI login is separate from MCP OAuth. A skill installation grants neither.
If the client cannot load the server, report its actual error and the relevant
setup step. Do not bypass workspace authorization with operator credentials.
