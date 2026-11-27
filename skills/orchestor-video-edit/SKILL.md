---
version: 0.4.0
name: orchestor-video-edit
description: |
  Edit an existing video via Orchestor: upscale, remove the background,
  add captions, reframe to another aspect ratio, lip sync to new audio,
  transfer motion to a character, or make a talking avatar from a photo.
  Use when: "upscale this video", "make it 4K", "remove the background",
  "cut out the person", "add subtitles", "burn in captions", "make it
  vertical", "change to 9:16", "lip sync this", "make this photo talk",
  or "copy the moves from this clip".
  NOT for: generating a new video from a prompt (use orchestor-generate),
  dubbing into another language, or speech and voice work (use
  orchestor-audio).
argument-hint: "<video-url> [upscale|background|captions|reframe|lipsync|motion|avatar]"
allowed-tools: Bash
---

English | [日本語](SKILL.ja.md)

# Orchestor Video Edit

Each edit is a video job on a dedicated model, submitted with
`orc creative video generate`. Bootstrap and job handling follow
[orchestor-generate](../orchestor-generate/SKILL.md).

## UX Rules

1. Confirm the input video is a public HTTPS URL; upload local files first
   ([media inputs](../orchestor-generate/references/media-inputs.md)).
2. Most edits need `--duration-seconds`: the length of the input, rounded up.
   Measure it; do not guess.
3. Edits are billed per second of input. Captions bill at least 60 seconds.
4. Return the output URL unchanged.

## Edits

| User wants | Model | Required inputs |
| --- | --- | --- |
| Upscale | `topaz-video` | `--video-url`, `--duration-seconds` (2–60), `--upscale` |
| Remove background | `sam-3.1-video` | `--video-url`, `--duration-seconds` (2–60), `--prompt` naming what to keep, `--background` |
| Captions | `veed-subtitles` | `--video-url`, `--duration-seconds` (2–600), `--captions` with a `style` |
| Reframe | `luma-ray-3.2-reframe` | `--video-url`, `--aspect-ratio` |
| Lip sync a video | `sync-lipsync-2` | `--video-url`, `--audio-url`, `--duration-seconds` (2–60) |
| Talking avatar from a photo | `kling-avatar-2.0` | `--image-url`, `--audio-url`, `--duration-seconds` (2–60) |
| Motion control | `kling-motion-control` | `--image-url` (character), `--motion-video-url` |

Read `orc creative video models get <model> --json` before the first call. It
lists the resolutions, aspect ratios and duration range the model accepts.

## Examples

```bash
orc creative video generate --model topaz-video --video-url https://example.com/clip.mp4 --duration-seconds 8 --upscale '{"resolution":"4K"}' --wait --field result.video_url --raw
orc creative video generate --model sam-3.1-video --video-url https://example.com/clip.mp4 --duration-seconds 8 --prompt "the person" --background '{"output":"cutout"}' --wait --field result.video_url --raw
orc creative video generate --model veed-subtitles --video-url https://example.com/clip.mp4 --duration-seconds 45 --captions '{"style":"simple","position":"bottom"}' --wait --field result.video_url --raw
orc creative video generate --model luma-ray-3.2-reframe --video-url https://example.com/clip.mp4 --aspect-ratio 9:16 --wait --field result.video_url --raw
orc creative video generate --model sync-lipsync-2 --video-url https://example.com/face.mp4 --audio-url https://example.com/line.mp3 --duration-seconds 6 --wait --field result.video_url --raw
```

## Options

- **Upscale** (`--upscale`): `resolution` (`1080p`, `2K`, `4K`), `fps`. Output
  above 30 fps, or no `fps`, doubles the price.
- **Background** (`--background`): `output` is `cutout` or `mask`.
- **Captions** (`--captions`): `style` is required. Standard styles include
  `simple`, `plain`, `corpo` and `capri`; dynamic styles such as `glass` and
  `fusion` cost twice the basic rate. Optional `position` (`top`, `center`,
  `bottom`), `shadow` (`none`, `min`, `mid`, `max`) and `srt` for your own text.
