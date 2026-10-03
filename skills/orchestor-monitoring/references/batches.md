# Batch execution

Use a batch only for a requested bounded set. Read `runs batches create --help`.
Each request needs a unique custom_id within the batch. Different prompts or
channels are separate requests. Check current maximum size and completion-window
constraints before composing the body; these are limits, not target sizes.

**Incorrect:** expand 10 requested prompts across every available channel without
approval, or retry an entire partially completed batch to obtain missing answers.

**Correct:** show the intended prompt × channel scope, submit once, and retain its
batch ID. Track per-item outcomes and custom_ids. Collect results and report
completed, failed, canceled, expired, and still-pending items separately as returned.
Retry only the unresolved authorized work after checking existing outcomes.

An extended completion window is a deadline request, not a guarantee of success.
Do not treat an expiry count as completed observations. Deleting a record and
canceling execution are different operations; use only the one requested.
