# Measurement configuration

Read workspace measurement configuration, targets, and revisions before changing
them. Language, location, platform selection, prompt state, and observation
history are separate concepts.

The current default-location contract supports global or country with an
uppercase two-letter country code, not region/city execution locations. The
language is a language tag such as ja-JP. Platform selection must use eligible
consumer channels; do not insert a direct API channel.

**Incorrect:** overwrite configuration with one requested field and guessed values
for the others, or claim new defaults changed historical reports.

**Correct:** obtain the current required shape, change only the requested values,
submit the complete supported update, then read it back. Preserve revision IDs
when returned. Report the new configuration separately from future collection.
