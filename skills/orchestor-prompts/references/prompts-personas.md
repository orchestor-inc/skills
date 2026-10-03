# Prompts, topics, tags, and personas

Create a prompt only after checking for an existing relevant question in the
workspace. Resolve brand/topic IDs and the exact requested wording. Do not turn a
specific request into a large synthesized prompt set.

Topics and tags organize observations; they do not change the question's meaning.
When updating a tag set, inspect existing tags and preserve unrelated ones unless
the user asked to replace the entire set. Suggestions need review before acceptance.

Personas can be saved records or execution context. Do not assume a persona was
used in historical answers because it is configured now. Record the actual
persona or execution identity returned by the observation.

**Incorrect:** create a draft and immediately execute it, or enable monitoring
because “add this question” sounded like a monitoring request.

**Correct:** return the draft ID and state. Ask only about a required unresolved
activation decision. For explicit execution, use a valid saved prompt state and
supported channel. Changes to current configuration do not rewrite past evidence.
