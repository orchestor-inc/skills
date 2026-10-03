# Agent journeys

Choose a curated intent from `agentic-web journeys intents list` when it matches
the task, or specify the user's bounded custom task. Read the mode contract first.
Browser mode can assess public reading or UI work; web mode conservatively limits
custom tasks to partial/failure. Do not compare mode outcomes as equivalent.

**Incorrect:** ask a test journey to buy something, submit an account change, or
send a message when the user requested a public-site audit.

**Correct:** use a read-only public navigation task, identify its expected evidence,
and report the actual reached outcome. Never infer authenticated capability from
an isolated public browser. Follow explicit authorization boundaries for any task
with external effects.
