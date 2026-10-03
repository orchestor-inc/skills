# Product identity before comparison

Use IDs, confirmed URLs, brand, and supported product identifiers to distinguish
items. A product family, specific variant, bundle, and retailer listing can refer
to different things. Do not silently merge them.

**Incorrect:** assume a matching display name or extracted JAN candidate uniquely
identifies the requested product in every market.

**Correct:** inspect returned identifiers and source evidence; preserve ambiguity.
Use `products resolve-jan` only for the requested identifier resolution. Confirm
that the returned product/variant matches the task before comparing its metrics.

`products extract` takes source URLs and may retrieve external data. Do not run it
for the entire catalog when only one item is needed. Read current attribute keys
before changing attributes, preserve unrelated values, and verify the updated ID.
