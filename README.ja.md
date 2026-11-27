[English](README.md) | 日本語

# Orchestor Agent Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Skills](https://img.shields.io/badge/skills-4-blueviolet.svg)](#スキル)

AI クリエイティブプラットフォーム [Orchestor](https://www.orchestor.io)（オーケスター）で画像・動画・音声を生成するための、AI エージェント向けスキルです。Claude Code、Cursor、Codex など、Markdown のスキルを読み込むコーディングエージェントで使えます。

## インストール

どれか 1 つを選びます。各スキルは、初回の利用時に `orc` CLI をインストールし、ログインを案内します。

### `npx skills` — おすすめ、エージェント共通

```bash
npx skills@latest add orchestor-inc/skills
```

### Claude Code プラグイン

[Orchestor プラグイン](https://github.com/orchestor-inc/orchestor-plugin)は、これらのスキルをホスト型 MCP 接続と一緒に配布しています。

```bash
claude plugin marketplace add orchestor-inc/orchestor-plugin
claude plugin install orchestor@orchestor
```

ほかの方法は [INSTALL.ja.md](./INSTALL.ja.md) を参照してください。

## スキル

| スキル | 内容 |
|---|---|
| [`orchestor-generate`](./skills/orchestor-generate) | Orchestor のカタログ（GPT Image 2.6、Seedream、Seedance 2.5、Veo 3.1、Kling など）での画像・動画の生成、参照画像を使った編集、画像から動画、生成ジョブの確認。 |
| [`orchestor-video-edit`](./skills/orchestor-video-edit) | 既存の動画の編集。アップスケール、背景削除、字幕、リフレーム、リップシンク、トーキングアバター、モーションコントロール。 |
| [`orchestor-audio`](./skills/orchestor-audio) | プリセットの声によるテキスト読み上げ、録音のボイスチェンジ、文字起こし。 |
| [`orchestor-product-photoshoot`](./skills/orchestor-product-photoshoot) | 商品写真から作る、ブランド品質の商品画像。7 つのモード（スタジオ、ライフスタイル、Pinterest、ヒーローバナー、広告パック、コンセプト、リスタイル）。 |

スキルはつなげて使えます。`orchestor-product-photoshoot` が静止画を作り、`orchestor-generate` がそれを動かし、`orchestor-audio` がナレーションを作り、`orchestor-video-edit` がリップシンク、字幕、リフレームで仕上げます。[COOKBOOK.ja.md](./COOKBOOK.ja.md) を参照してください。

## 早見表

| やりたいこと | スキル | 補足 |
|---|---|---|
| プロンプトから画像を生成する | `orchestor-generate` | 既定は `gpt-image-2.6`。安くしたいときは `seedream-5-flash` |
| 参照画像を使って画像を編集する | `orchestor-generate` | `--image-urls` |
| 動画を生成する、写真を動かす | `orchestor-generate` | 既定は `seedance-2.5`。最初のフレームは `--image-url` |
| スタジオ、ライフスタイル、バナー背景の商品写真 | `orchestor-product-photoshoot` | 参照画像とモード別テンプレート |
| 動画を 4K にアップスケールする | `orchestor-video-edit` | `topaz-video` |
| 動画の背景を削除する | `orchestor-video-edit` | `sam-3.1-video` |
| 字幕を付ける | `orchestor-video-edit` | `veed-subtitles` |
| 動画を 9:16 にする | `orchestor-video-edit` | `luma-ray-3.2-reframe` |
| 顔を新しい音声にリップシンクする | `orchestor-video-edit` | `sync-lipsync-2`。写真からなら `kling-avatar-2.0` |
| 原稿からナレーションを作る | `orchestor-audio` | `qwen-audio-3.0-tts` または `eleven-v3` |
| 録音の声を差し替える | `orchestor-audio` | `orc creative voice change` |
| 音声を文字起こしする | `orchestor-audio` | `orc creative stt transcribe` |

## ドキュメント

- [CLI リファレンス](https://www.orchestor.io/docs/cli)
- [MCP のセットアップ](https://www.orchestor.io/docs/mcp)
- [モデル](https://www.orchestor.io/docs/models)

## ライセンス

MIT。[LICENSE](./LICENSE) を参照してください。

<!-- translation-source-sha256: ef92cb605056944efd97fe7e4d4d67992496a6beb87369398cf23861bb6016db -->
