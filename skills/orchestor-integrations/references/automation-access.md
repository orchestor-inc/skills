# Automation access

Use the supported API-key or service-account commands for explicitly requested
automation identity changes. Inspect scopes, expiry, current keys, and the target
workspace. Provisioning a credential is not part of a simple status check.

Never place credential values in a SKILL.md, plugin manifest, command history,
public issue, or chat. Use an approved secret destination. Report the opaque key
or account ID and granted scope, not the secret value.

After creating or changing access, verify only the authorized operation. Do not
probe other tenants or infer organization-wide access from a workspace success.
