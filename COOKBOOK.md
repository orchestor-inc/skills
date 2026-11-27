English | [日本語](COOKBOOK.ja.md)

# Orchestor Skills — Cookbook

Workflows that chain the Orchestor skills. Each recipe is what you say to the
agent, what the agent runs, and practical tips. URLs below are placeholders.

---

## Recipe 1 — Product Launch Kit from One Photo

**What it does:** One product photo → studio and lifestyle stills → the best still
animated into a 5-second clip → a 9:16 version for Reels and TikTok.

**What you say:**

```
Here is my product: https://example.com/bottle.png. Make a studio shot and two
lifestyle shots on a kitchen counter, animate the best one into a 5-second clip,
and give me a vertical version too.
```

**What the agent does:**

1. **Stills** (`orchestor-product-photoshoot`, modes `product_shot` and `lifestyle_scene`):

   ```bash
   orc creative image generate --model gpt-image-2.6 --image-urls https://example.com/bottle.png --aspect-ratio 4:5 --num-images 2 --prompt "Kitchen counter in morning window light. The product from the reference image, unchanged: same shape, color, label and logo. 35mm, shallow depth of field. Photorealistic commercial product photography, no added text." --wait --json
   ```

2. **Animate** (`orchestor-generate`, image-to-video):

   ```bash
   orc creative video generate --model seedance-2.5 --image-url https://example.com/lifestyle-01.png --prompt "Slow push-in, steam rising from a cup beside the bottle" --duration-seconds 5 --wait --field result.video_url --raw
   ```

3. **Vertical cut** (`orchestor-video-edit`, reframe):

   ```bash
   orc creative video generate --model luma-ray-3.2-reframe --video-url https://example.com/clip.mp4 --aspect-ratio 9:16 --wait --field result.video_url --raw
   ```

**Tips:**

- Generate the stills at the final aspect ratio when you can. Reframing extends
  the frame; it does not recover detail that was cropped.
- Pick the still to animate yourself. A clean first frame matters more than the prompt.

---

## Recipe 2 — Talking Presenter with Captions

**What it does:** A script and one portrait → narration → a talking-avatar video
→ burned-in captions.

**What you say:**

```
Turn this 20-second script into a video of the person in https://example.com/face.png
reading it in a calm Japanese voice, with captions at the bottom.
```

**What the agent does:**

1. **Narration** (`orchestor-audio`):

   ```bash
   orc creative tts voices list --family qwen --json
   printf '%s\n' '{"model":"qwen-audio-3.0-tts","transcript":"<script>","voice":{"id":"Ono_Anna"}}' | orc creative tts generate --stdin --wait --field result.audio_url --raw
   ```

2. **Talking avatar** (`orchestor-video-edit`):

   ```bash
   orc creative video generate --model kling-avatar-2.0 --image-url https://example.com/face.png --audio-url https://example.com/narration.mp3 --duration-seconds 20 --wait --field result.video_url --raw
   ```

3. **Captions** (`orchestor-video-edit`):

   ```bash
   orc creative video generate --model veed-subtitles --video-url https://example.com/avatar.mp4 --duration-seconds 20 --captions '{"style":"simple","position":"bottom"}' --wait --field result.video_url --raw
   ```

**Tips:**

- Set `--duration-seconds` to the narration length, rounded up. Measure it from the audio file.
- Captions bill at least 60 seconds. Caption the final cut once, not every draft.
- Use a portrait of someone who has agreed to appear.

---

## Recipe 3 — Re-voice a Clip in Another Language

**What it does:** An existing talking clip → transcript → translated narration →
lips re-synced to the new audio.

**What you say:**

```
Make an English version of https://example.com/interview-ja.mp4. Keep the speaker's
face; match the lips to the new audio.
```

**What the agent does:**

1. **Transcribe** (`orchestor-audio`):

   ```bash
   orc creative stt transcribe --audio-url https://example.com/interview-ja.mp3 --language-code ja --json
   orc creative jobs result <job-id>
   ```

2. **Translate** the transcript in the conversation, then **narrate** (`orchestor-audio`):

   ```bash
   printf '%s\n' '{"model":"eleven-v3","transcript":"<translated script>","voice":{"id":"<voice-id>"}}' | orc creative tts generate --stdin --wait --field result.audio_url --raw
   ```

3. **Lip sync** (`orchestor-video-edit`):

   ```bash
   orc creative video generate --model sync-lipsync-2 --video-url https://example.com/interview-ja.mp4 --audio-url https://example.com/narration-en.mp3 --duration-seconds 30 --wait --field result.video_url --raw
   ```

**Tips:**

- Speech-to-text takes an audio URL. Extract the audio track from the video first.
- Keep the translation close to the original length so the lip sync stays natural.
- Re-voicing a real person needs their consent.

---

## Quick reference — which recipe for what

| Goal | Recipe | Skills used |
|---|---|---|
| Launch visuals from one product photo | #1 Product Launch Kit | `orchestor-product-photoshoot` → `orchestor-generate` → `orchestor-video-edit` |
| Presenter video from a script | #2 Talking Presenter | `orchestor-audio` → `orchestor-video-edit` |
| Another-language version of a clip | #3 Re-voice a Clip | `orchestor-audio` → `orchestor-video-edit` |

## Patterns these recipes share

1. **Every step is a job.** Use `--wait` for short steps. For long ones, keep the
   `job.id` and poll it with `orc creative jobs status`.
2. **Inputs are URLs.** Each step's output URL is the next step's input. Upload
   local files once with `orc creative files upload-url create`.
3. **Cheap first on request.** When the user wants to iterate cheaply, draft on
   `seedream-5-flash` or `veo-3.1-lite`, then switch to the default model once the
   direction is confirmed.
4. **Check the model before the first call.** `orc creative video models get <model> --json`
   lists accepted durations, ratios and resolutions.
