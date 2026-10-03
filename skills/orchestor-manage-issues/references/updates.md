# Updates, relations, and retries

Search the intended workspace and project before updating. Use a known internal
ID for `issues get` when available. Trim result fields for lists, then fetch the
selected record's description only when needed.

**Incorrect:** retry creation with a new idempotency key after an ambiguous network
failure, or replace a labels array to add one label without reading existing labels.

**Correct:** retain the original request/key and inspect the outcome. Reuse the
same key only for the identical operation and body. For an update, preserve
unrelated values and relationships. A labels array is a replacement when the
contract says so; compute the intended merged set before submission.

Relations, comments, reactions, subscriptions, and favorites are distinct writes.
Perform only the user's requested record operation. Read back the relevant state;
do not claim a relation was attached merely because the parent Issue exists.
