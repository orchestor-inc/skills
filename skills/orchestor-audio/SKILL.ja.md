---
version: 0.4.0
name: orchestor-audio
description: |
  Orchestor で、テキストを音声にする、録音の声を変える、音声を文字起こし
  する、を行います。
  使う場面:「読み上げて」「ナレーションを作って」「ボイスオーバー」
  「テキスト読み上げ」「TTS」「日本語の声で」「声を変えて」
  「このクリップの声を差し替えて」「文字起こしして」「音声をテキストに」。
  使わない場面: 顔を音声に合わせるリップシンク（orchestor-video-edit）、
  画像や動画の生成（orchestor-generate）。
argument-hint: "[tts|voice-change|transcribe] [text-or-audio-url]"
allowed-tools: Bash
---

[English](SKILL.md) | 日本語

# Orchestor Audio

`orc creative tts`、`orc creative voice`、`orc creative stt` を使います。準備とジョブの扱いは [orchestor-generate](../orchestor-generate/SKILL.ja.md) に従います。

## テキスト読み上げ

1. モデルを選びます。既定は `qwen-audio-3.0-tts`。ElevenLabs の声を使うなら `eleven-v3`。

   ```bash
   orc creative tts models list --json
   ```

2. モデルの系列から声を選びます。各声には `language` と `supported_models` が載っています。系列をまたいで ID を混ぜないでください。

   ```bash
   orc creative tts voices list --family qwen --json
   ```

3. リクエストを JSON にして標準入力で渡し、音声の URL を待ちます。

   ```bash
   printf '%s\n' '{"model":"qwen-audio-3.0-tts","transcript":"Hello.","voice":{"id":"Ono_Anna"}}' | orc creative tts generate --stdin --wait --field result.audio_url --raw
   ```

料金は文字数で決まります。最低文字数を課金するモデルもあるため、モデル一覧の `pricing` を確認してください。

## ボイスチェンジ

音声や動画の録音の声を差し替えます。この用途の声を一覧してから送信します。コマンドはジョブを返すので、その結果を取得します。

```bash
orc creative tts voices list --family eleven --purpose voice_change --json
printf '%s\n' '{"audio_url":"https://example.com/take.mp3","voice":{"id":"<voice-id>"}}' | orc creative voice change --stdin --json
orc creative jobs result <job-id>
```

## 文字起こし

```bash
orc creative stt transcribe --audio-url https://example.com/take.mp3 --language-code ja --json
orc creative jobs result <job-id>
```

`--language-code` を省略すると言語を自動で判定します。

## ルール

- 入力は公開 HTTPS URL である必要があります。ローカルのファイルは先にアップロードします（[メディア入力](../orchestor-generate/references/media-inputs.ja.md)）。
- 本人の同意なしに、実在の人物の声を複製したりまねたりしないでください。
- 音声の URL か文字起こしのテキストを返します。チャットに JSON をそのまま出しません。

<!-- translation-source-sha256: e40e83a07d8f78a7dcf4d3997b3413ccb1c3e86fab6623b7859cb887cd614cd2 -->
