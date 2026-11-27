English | [日本語](README.ja.md)

# Orchestor Agent Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Skills](https://img.shields.io/badge/skills-4-blueviolet.svg)](#skills)

AI agent skills for image, video and audio generation via [Orchestor](https://www.orchestor.io),
the AI creative platform. Works with Claude Code, Cursor, Codex, and other AI
coding agents that load Markdown-based skills.

## Install

Pick one. Each skill installs the `orc` CLI and asks you to sign in on first use.

### `npx skills` — recommended, cross-agent

```bash
npx skills@latest add orchestor-inc/skills
```

### Claude Code plugin

The [Orchestor plugin](https://github.com/orchestor-inc/orchestor-plugin) ships
these skills with the hosted MCP connection:

```bash
claude plugin marketplace add orchestor-inc/orchestor-plugin
claude plugin install orchestor@orchestor
```

More options in [INSTALL.md](./INSTALL.md).

## Skills

| Skill | Description |
|---|---|
| [`orchestor-generate`](./skills/orchestor-generate) | Image and video generation across the Orchestor catalog (GPT Image 2.6, Seedream, Seedance 2.5, Veo 3.1, Kling, …), image edits with references, image-to-video, and generation jobs. |
| [`orchestor-video-edit`](./skills/orchestor-video-edit) | Edit an existing video: upscale, background removal, captions, reframe, lip sync, talking avatars, and motion control. |
| [`orchestor-audio`](./skills/orchestor-audio) | Text to speech with preset voices, voice change for recordings, and transcription. |
| [`orchestor-product-photoshoot`](./skills/orchestor-product-photoshoot) | Brand-quality product images from a product photo. 7 modes (studio, lifestyle, Pinterest, hero banner, ad pack, conceptual, restyle). |

The skills chain: `orchestor-product-photoshoot` makes the stills, `orchestor-generate`
animates them, `orchestor-audio` writes the narration, and `orchestor-video-edit`
lip syncs, captions and reframes the result. See [COOKBOOK.md](./COOKBOOK.md).

## Quick reference

| What you want | Skill | Note |
|---|---|---|
| Generate an image from a prompt | `orchestor-generate` | Defaults to `gpt-image-2.6`; `seedream-5-flash` when the user asks for cheaper |
| Edit an image with a reference | `orchestor-generate` | `--image-urls` |
| Generate a video, or animate a photo | `orchestor-generate` | Defaults to `seedance-2.5`; `--image-url` for the first frame |
| Product photo on a studio, lifestyle or banner background | `orchestor-product-photoshoot` | Reference image + mode template |
| Upscale a video to 4K | `orchestor-video-edit` | `topaz-video` |
| Remove a video's background | `orchestor-video-edit` | `sam-3.1-video` |
| Add captions | `orchestor-video-edit` | `veed-subtitles` |
| Change a video to 9:16 | `orchestor-video-edit` | `luma-ray-3.2-reframe` |
| Lip sync a face to new audio | `orchestor-video-edit` | `sync-lipsync-2`, or `kling-avatar-2.0` from a photo |
| Narration from a script | `orchestor-audio` | `qwen-audio-3.0-tts` or `eleven-v3` |
| Replace the voice in a recording | `orchestor-audio` | `orc creative voice change` |
| Transcribe audio | `orchestor-audio` | `orc creative stt transcribe` |

## Documentation

- [CLI reference](https://www.orchestor.io/docs/en/cli)
- [MCP setup](https://www.orchestor.io/docs/en/mcp)
- [Models](https://www.orchestor.io/docs/en/models)

## License

MIT — see [LICENSE](./LICENSE).
