# Import semantics

Read `orc perception observations import --help`. The body requires answer_id,
answer_digest, analysis_label, and observations. Each observation requires a
workspace brand_id, attribute, start, end, and quote. Use the current length and
count constraints; do not fill missing evidence with guessed text.

Imports require the relevant workspace permission. They replace attribute
observations only for brands present in the request, preserving other brands
and raw answers. Therefore a partial set for one included brand can replace that
brand's existing annotations; inspect intended scope before submitting.

**Incorrect:** import one convenient quote and assume it only appends a row.

**Correct:** make the replacement scope explicit and include the intended complete
set for affected brands. Use `--stdin` with a UTF-8 JSON file, stable idempotency
for retries, and read the receipt. A digest conflict means the source changed;
permission errors do not justify use of operator credentials.
