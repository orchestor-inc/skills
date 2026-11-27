[English](COOKBOOK.md) | 日本語

# Orchestor Skills — クックブック

Orchestor のスキルをつなげたワークフローです。各レシピには、エージェントへの頼み方、エージェントが実行するコマンド、実践的なヒントを載せています。URL は例です。

---

## レシピ 1 — 写真 1 枚から作る商品ローンチ素材

**できること:** 商品写真 1 枚 → スタジオとライフスタイルの静止画 → いちばん良い静止画を 5 秒のクリップに → Reels や TikTok 向けの 9:16 版。

**頼み方:**

```
Here is my product: https://example.com/bottle.png. Make a studio shot and two
lifestyle shots on a kitchen counter, animate the best one into a 5-second clip,
and give me a vertical version too.
```

**エージェントの動き:**

1. **静止画**（`orchestor-product-photoshoot`、モード `product_shot` と `lifestyle_scene`）:

   ```bash
   orc creative image generate --model gpt-image-2.6 --image-urls https://example.com/bottle.png --aspect-ratio 4:5 --num-images 2 --prompt "Kitchen counter in morning window light. The product from the reference image, unchanged: same shape, color, label and logo. 35mm, shallow depth of field. Photorealistic commercial product photography, no added text." --wait --json
   ```

2. **動かす**（`orchestor-generate`、画像から動画）:

   ```bash
   orc creative video generate --model seedance-2.5 --image-url https://example.com/lifestyle-01.png --prompt "Slow push-in, steam rising from a cup beside the bottle" --duration-seconds 5 --wait --field result.video_url --raw
   ```

3. **縦型版**（`orchestor-video-edit`、リフレーム）:

   ```bash
   orc creative video generate --model luma-ray-3.2-reframe --video-url https://example.com/clip.mp4 --aspect-ratio 9:16 --wait --field result.video_url --raw
   ```

**ヒント:**

- できれば最終の縦横比で静止画を作ります。リフレームは画面を描き足すもので、切り取られた細部は戻りません。
- 動かす静止画は自分で選びます。プロンプトより、きれいな最初のフレームのほうが効きます。

---

## レシピ 2 — 字幕付きの話す人物の動画

**できること:** 原稿と顔写真 1 枚 → ナレーション → トーキングアバターの動画 → 焼き込み字幕。

**頼み方:**

```
Turn this 20-second script into a video of the person in https://example.com/face.png
reading it in a calm Japanese voice, with captions at the bottom.
```

**エージェントの動き:**

1. **ナレーション**（`orchestor-audio`）:

   ```bash
   orc creative tts voices list --family qwen --json
   printf '%s\n' '{"model":"qwen-audio-3.0-tts","transcript":"<script>","voice":{"id":"Ono_Anna"}}' | orc creative tts generate --stdin --wait --field result.audio_url --raw
   ```

2. **トーキングアバター**（`orchestor-video-edit`）:

   ```bash
   orc creative video generate --model kling-avatar-2.0 --image-url https://example.com/face.png --audio-url https://example.com/narration.mp3 --duration-seconds 20 --wait --field result.video_url --raw
   ```

3. **字幕**（`orchestor-video-edit`）:

   ```bash
   orc creative video generate --model veed-subtitles --video-url https://example.com/avatar.mp4 --duration-seconds 20 --captions '{"style":"simple","position":"bottom"}' --wait --field result.video_url --raw
   ```

**ヒント:**

- `--duration-seconds` はナレーションの長さを切り上げた値にします。音声ファイルから測ります。
- 字幕は最低 60 秒分の課金です。下書きのたびではなく、完成版に 1 回だけ付けます。
- 出演に同意した人の写真を使います。

---

## レシピ 3 — クリップを別の言語の声にする

**できること:** 既存の話しているクリップ → 文字起こし → 翻訳したナレーション → 新しい音声に唇を合わせ直す。

**頼み方:**

```
Make an English version of https://example.com/interview-ja.mp4. Keep the speaker's
face; match the lips to the new audio.
```

**エージェントの動き:**

1. **文字起こし**（`orchestor-audio`）:

   ```bash
   orc creative stt transcribe --audio-url https://example.com/interview-ja.mp3 --language-code ja --json
   orc creative jobs result <job-id>
   ```

2. 会話の中で文字起こしを**翻訳**し、**ナレーション**を作ります（`orchestor-audio`）:

   ```bash
   printf '%s\n' '{"model":"eleven-v3","transcript":"<translated script>","voice":{"id":"<voice-id>"}}' | orc creative tts generate --stdin --wait --field result.audio_url --raw
   ```

3. **リップシンク**（`orchestor-video-edit`）:

   ```bash
   orc creative video generate --model sync-lipsync-2 --video-url https://example.com/interview-ja.mp4 --audio-url https://example.com/narration-en.mp3 --duration-seconds 30 --wait --field result.video_url --raw
   ```

**ヒント:**

- 文字起こしは音声の URL を受け取ります。先に動画から音声トラックを取り出します。
- 翻訳は元の長さに近づけると、リップシンクが自然になります。
- 実在の人物の声を差し替えるには、本人の同意が必要です。

---

## 早見表 — どのレシピを使うか

| 目的 | レシピ | 使うスキル |
|---|---|---|
| 商品写真 1 枚からローンチ素材を作る | #1 商品ローンチ素材 | `orchestor-product-photoshoot` → `orchestor-generate` → `orchestor-video-edit` |
| 原稿から話す人物の動画を作る | #2 話す人物の動画 | `orchestor-audio` → `orchestor-video-edit` |
| クリップの別言語版を作る | #3 別の言語の声 | `orchestor-audio` → `orchestor-video-edit` |

## レシピに共通するパターン

1. **すべての手順はジョブです。** 短い手順は `--wait` を使います。長い手順は `job.id` を保持し、`orc creative jobs status` でポーリングします。
2. **入力は URL です。** 前の手順の出力 URL が次の手順の入力になります。ローカルのファイルは `orc creative files upload-url create` で 1 回だけアップロードします。
3. **頼まれたら安いモデルから。** 安く試したいと言われたら、`seedream-5-flash` や `veo-3.1-lite` で下書きし、方向が決まってから既定のモデルに切り替えます。
4. **最初の呼び出しの前にモデルを確認します。** `orc creative video models get <model> --json` で、受け付ける長さ、縦横比、解像度が分かります。

<!-- translation-source-sha256: e79bd03d806e1dfab515618e279dc4717b68b8fd775dfb5fcc47cf830bf2a52b -->
