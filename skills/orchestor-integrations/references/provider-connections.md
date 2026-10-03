# Provider connections

Inspect current connections before starting a new connect session. The current
connect-session provider set includes Google Analytics, Google Search Console,
Google Ads, Cloudflare, Amazon CloudFront, and Vercel; check installed help before
promising a provider or scope.

Google Analytics access_mode defaults to read_only; manage requests broader
analytics.edit access for property/web-stream creation. Use management access
only for the requested management task. Creating a property, creating a stream,
and reading a referral report are separate operations.

**Incorrect:** reconnect with broader scopes whenever data is missing, or infer
that OAuth completion means historical events were imported.

**Correct:** verify the selected source/property, connection state, permissions,
and collection period. For a requested history import, inspect the returned job
or receipt separately. Return missing data and permission limitations precisely.
