---
version: 0.4.0
name: orchestor-video-edit
description: |
  Orchestor で既存の動画を編集します。アップスケール、背景削除、字幕、
  別の縦横比へのリフレーム、新しい音声へのリップシンク、キャラクター
  への動きの転写、写真からのトーキングアバターに対応します。
  使う場面:「この動画をアップスケールして」「4K にして」「背景を消して」
  「人物を切り抜いて」「字幕を付けて」「テロップを入れて」「縦型にして」
  「9:16 にして」「リップシンクして」「この写真をしゃべらせて」
  「このクリップの動きをまねして」。
  使わない場面: プロンプトからの新しい動画の生成（orchestor-generate）、
  別の言語への吹き替え、音声や声の作業（orchestor-audio）。
argument-hint: "<video-url> [upscale|background|captions|reframe|lipsync|motion|avatar]"
allowed-tools: Bash
---

[English](SKILL.md) | 日本語

# Orchestor Video Edit

それぞれの編集は専用モデルの動画ジョブで、`orc creative video generate` で送信します。準備とジョブの扱いは [orchestor-generate](../orchestor-generate/SKILL.ja.md) に従います。

## UX ルール

1. 入力動画が公開 HTTPS URL であることを確認します。ローカルのファイルは先にアップロードします（[メディア入力](../orchestor-generate/references/media-inputs.ja.md)）。
2. ほとんどの編集で `--duration-seconds` が必要です。入力の長さを切り上げた値です。推測せず、実際に測ります。
3. 編集は入力の秒数で課金されます。字幕は最低 60 秒分です。
4. 出力の URL をそのまま返します。

## 編集の種類

| やりたいこと | モデル | 必須の入力 |
| --- | --- | --- |
| アップスケール | `topaz-video` | `--video-url`、`--duration-seconds`（2〜60）、`--upscale` |
| 背景削除 | `sam-3.1-video` | `--video-url`、`--duration-seconds`（2〜60）、残す対象を書いた `--prompt`、`--background` |
| 字幕 | `veed-subtitles` | `--video-url`、`--duration-seconds`（2〜600）、`--captions`（`style` を含む） |
| リフレーム | `luma-ray-3.2-reframe` | `--video-url`、`--aspect-ratio` |
| 動画のリップシンク | `sync-lipsync-2` | `--video-url`、`--audio-url`、`--duration-seconds`（2〜60） |
| 写真からトーキングアバター | `kling-avatar-2.0` | `--image-url`、`--audio-url`、`--duration-seconds`（2〜60） |
| モーションコントロール | `kling-motion-control` | `--image-url`（キャラクター）、`--motion-video-url` |

最初の呼び出しの前に `orc creative video models get <model> --json` を読みます。そのモデルが受け付ける解像度、縦横比、長さの範囲が載っています。

## 例

```bash
orc creative video generate --model topaz-video --video-url https://example.com/clip.mp4 --duration-seconds 8 --upscale '{"resolution":"4K"}' --wait --field result.video_url --raw
orc creative video generate --model sam-3.1-video --video-url https://example.com/clip.mp4 --duration-seconds 8 --prompt "the person" --background '{"output":"cutout"}' --wait --field result.video_url --raw
orc creative video generate --model veed-subtitles --video-url https://example.com/clip.mp4 --duration-seconds 45 --captions '{"style":"simple","position":"bottom"}' --wait --field result.video_url --raw
orc creative video generate --model luma-ray-3.2-reframe --video-url https://example.com/clip.mp4 --aspect-ratio 9:16 --wait --field result.video_url --raw
orc creative video generate --model sync-lipsync-2 --video-url https://example.com/face.mp4 --audio-url https://example.com/line.mp3 --duration-seconds 6 --wait --field result.video_url --raw
```

## オプション

- **アップスケール**（`--upscale`）: `resolution`（`1080p`、`2K`、`4K`）、`fps`。30 fps を超える出力、または `fps` を省略すると料金は 2 倍です。
- **背景**（`--background`）: `output` は `cutout` か `mask` です。
- **字幕**（`--captions`）: `style` は必須です。標準のスタイルには `simple`、`plain`、`corpo`、`capri` などがあり、`glass` や `fusion` などの動的なスタイルは基本料金の 2 倍です。任意で `position`（`top`、`center`、`bottom`）、`shadow`（`none`、`min`、`mid`、`max`）、独自の文言を渡す `srt` を指定できます。

<!-- translation-source-sha256: 744cc8dc6b225c85553d2ccfe95bcf2f6ada20bbae864052eede6b1d9aa8e279 -->
