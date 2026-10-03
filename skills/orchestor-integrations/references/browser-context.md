# Browser contexts and sessions

The public browser-context and browser-session command families expose product
resources. They are not the internal operator browser bridge or permission to
control the user's desktop session.

Read current records and exact command help before creating, deactivating, or
deleting a context. These are distinct lifecycle operations. Preserve unrelated
contexts, and do not inspect credentials or profile storage to diagnose access.

A listed session is not proof that a page loaded or a user task succeeded. Report
the returned state and evidence only. If the needed browser operation is absent
from the public surface, state that limitation instead of reaching for internal
host tooling.
