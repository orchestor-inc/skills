# Run lifecycle

A new run needs a saved prompt_id and eligible model_channel_id. Inspect
`orc channels list` and `orc runs create --help`. The public contract rejects
direct vendor API channels and legacy aliases for new measurements.

**Incorrect:** replace a requested ChatGPT UI observation with a direct API call,
or create a second run because waiting for the first timed out.

**Correct:** preserve the requested observation channel, save the returned run ID,
and use `runs get` / `runs results get` to inspect the same execution. Use bounded
`--wait`, `--timeout`, and `--poll-interval` where supported.

A supplied brand_id or topic_id may be an assertion that must match the saved
prompt; it does not retarget the prompt. Persona, region, language, and country
fields have different meanings. Read the field contract instead of assuming
that a catalog ID and free-form context are interchangeable.

The transcript request flag does not guarantee a public messages field or a
retrievable transcript. Report only the answer/result fields actually returned.
Cancellation requests do not erase an already completed result or prove refunds.
