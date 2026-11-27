---
version: 0.4.0
name: orchestor-audio
description: |
  Turn text into speech, change the voice in a recording, or transcribe
  audio via Orchestor.
  Use when: "read this aloud", "make a narration", "voiceover",
  "text to speech", "TTS", "use a Japanese voice", "change my voice",
  "replace the voice in this clip", "transcribe this", or "speech to text".
  NOT for: lip syncing a face to audio (use orchestor-video-edit), image or
  video generation (use orchestor-generate).
argument-hint: "[tts|voice-change|transcribe] [text-or-audio-url]"
allowed-tools: Bash
---

English | [日本語](SKILL.ja.md)

# Orchestor Audio

Wraps `orc creative tts`, `orc creative voice` and `orc creative stt`.
Bootstrap and job handling follow [orchestor-generate](../orchestor-generate/SKILL.md).

## Text to speech

1. Pick a model. Default: `qwen-audio-3.0-tts`. For ElevenLabs voices: `eleven-v3`.

   ```bash
   orc creative tts models list --json
   ```

2. Pick a voice from the model's family. Each voice lists its `language` and
   `supported_models`. Do not mix IDs across families.

   ```bash
   orc creative tts voices list --family qwen --json
   ```

3. Send the request as JSON on stdin and wait for the audio URL.

   ```bash
   printf '%s\n' '{"model":"qwen-audio-3.0-tts","transcript":"Hello.","voice":{"id":"Ono_Anna"}}' | orc creative tts generate --stdin --wait --field result.audio_url --raw
   ```

Pricing is per character. Some models bill a minimum number of characters;
check `pricing` in the model list.

## Voice change

Replace the voice in an audio or video recording. List the voices for this
purpose, then submit. The command returns a job; fetch its result.

```bash
orc creative tts voices list --family eleven --purpose voice_change --json
printf '%s\n' '{"audio_url":"https://example.com/take.mp3","voice":{"id":"<voice-id>"}}' | orc creative voice change --stdin --json
orc creative jobs result <job-id>
```

## Transcription

```bash
orc creative stt transcribe --audio-url https://example.com/take.mp3 --language-code ja --json
orc creative jobs result <job-id>
```

Omit `--language-code` to detect the language automatically.

## Rules

- Inputs must be public HTTPS URLs; upload local files first
  ([media inputs](../orchestor-generate/references/media-inputs.md)).
- Do not clone or imitate a real person's voice without their consent.
- Return the audio URL or transcript text; no raw JSON in chat.
