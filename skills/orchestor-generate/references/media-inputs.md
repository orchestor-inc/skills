English | [日本語](media-inputs.ja.md)

# Media inputs

Every Orchestor input (`--image-urls`, `--image-url`, `--video-url`,
`--audio-url`) is a public HTTPS URL that stays reachable until the job ends.
Upload a local file first.

1. Request an upload URL with the exact size and MIME type:

   ```bash
   orc creative files upload-url create --content-type image/png --size-bytes "$(wc -c < ./input.png | tr -d ' ')" --filename input.png --json
   ```

2. Send the file bytes to `data.upload_url` with `data.upload_method` and every
   header in `data.upload_headers`. Do not attach the Orchestor API key to this
   request. The upload URL expires after 15 minutes and is a secret.
3. Pass `data.public_url` to the generation flag.

See [uploads](https://www.orchestor.io/docs/uploads) for a complete script.
