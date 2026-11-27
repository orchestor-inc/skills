---
version: 0.4.0
name: orchestor-generate
description: |
  Generate images and video via Orchestor. Defaults: GPT Image 2.6 for
  images, Seedance 2.5 for video.
  Use when: "generate an image", "make a picture", "edit this image",
  "make a video", "animate this photo", "image-to-video", "which model
  should I use", "check my generation job", or "get the result of job X".
  NOT for: editing an existing video (upscale, background removal, captions,
  reframe, lip sync, motion control: use orchestor-video-edit), speech,
  voice change or transcription (use orchestor-audio), product photography
  (use orchestor-product-photoshoot).
argument-hint: "[prompt] [--model <id>] [--image-urls <url>]"
allowed-tools: Bash
---

English | [日本語](SKILL.ja.md)

# Orchestor Generate

Submit image and video jobs to Orchestor. Wraps `orc creative image`,
`orc creative video` and `orc creative jobs`, or the equivalent MCP tools.

## Step 0 — Bootstrap

1. If the Orchestor MCP tools are available (`generate_image`, `generate_video`,
   `jobs_status`, `jobs_result`), use them and skip the CLI steps.
2. Otherwise, if `orc` is not on `$PATH`, install it:
   ```bash
   curl -fsSL https://orchestor.io/install | sh
   ```
3. If `orc status` reports no credential, ask the user to run `orc auth login`
   and wait. Never read credential files.

## UX Rules

1. Be concise. Return the output URL from the CLI unchanged, plus a one-line
   summary (model, duration for video). No raw JSON in chat.
2. Reply in the user's language. Model IDs and flags stay English.
3. Ask at most one question, and only when something required is missing.
4. Pass `--wait` so the command blocks until the job ends and prints the result.
5. Generation spends credits. Submit only what the user asked for.

## Workflow

1. **Pick a model.** Use these defaults unless the user names a model:

   - Images: `gpt-image-2.6`. Cheaper or faster: `seedream-5-flash`.
   - Image edits with a reference: `gpt-image-2.6` with `--image-urls`.
   - Video: `seedance-2.5`. Cheaper or faster: `veo-3.1-lite`.
   - Image-to-video: `seedance-2.5` with `--image-url` as the first frame.

   Check that the model is available to the workspace and what it accepts:

   ```bash
   orc creative image models list --json
   orc creative video models get seedance-2.5 --json
   ```

   A model whose `constraints` start with `Unavailable` cannot run. Pick another.

2. **Inputs are public HTTPS URLs.** Upload local files first; see
   [media inputs](references/media-inputs.md).
3. **Submit and wait.**

   ```bash
   orc creative image generate --model gpt-image-2.6 --prompt "A red cube on a white background" --wait --field result.artifacts.0.url --raw
   orc creative video generate --model seedance-2.5 --prompt "Slowly moving along a coast at dawn" --duration-seconds 5 --wait --timeout 10m --field result.video_url --raw
   ```

4. **Long jobs.** Submit without `--wait`, keep `job.id`, and poll that job.
   Do not submit a second job to check on the first.

   ```bash
   orc creative jobs status <job-id>
   orc creative jobs result <job-id>
   ```

5. **Deliver.** A job ends as `COMPLETED`, `FAILED` or `CANCELED`. On failure,
   report the error. Do not retry with a different model unless the user asks.

## Retries and duplicates

Reuse the same `--idempotency-key` to resend an identical request without
creating a second job. A new request needs a new key.

## Troubleshooting

| Error | Meaning |
| --- | --- |
| `402` `Insufficient creative credits` | The workspace needs a plan or more credits. Tell the user; do not retry. |
| `403` `Workspace is not accessible` | Pass `--workspace <id>` for the workspace the credential belongs to (`orc whoami`). |
| `Unavailable` in model `constraints` | The model has no provider right now. Pick another model. |
