---
version: 0.4.0
name: orchestor-generate
description: |
  Orchestor で画像と動画を生成します。既定は画像が GPT Image 2.6、動画が
  Seedance 2.5 です。
  使う場面:「画像を生成して」「絵を作って」「この画像を編集して」
  「動画を作って」「この写真を動かして」「画像から動画」「どのモデルを
  使えばいい？」「生成ジョブを確認して」「ジョブ X の結果を取得して」。
  使わない場面: 既存の動画の編集（アップスケール、背景削除、字幕、
  リフレーム、リップシンク、モーションコントロールは orchestor-video-edit）、
  音声・ボイスチェンジ・文字起こし（orchestor-audio）、商品写真
  （orchestor-product-photoshoot）。
argument-hint: "[prompt] [--model <id>] [--image-urls <url>]"
allowed-tools: Bash
---

[English](SKILL.md) | 日本語

# Orchestor Generate

Orchestor に画像と動画のジョブを送信します。`orc creative image`、`orc creative video`、`orc creative jobs`、または同等の MCP ツールを使います。

## Step 0 — 準備

1. Orchestor の MCP ツール（`generate_image`、`generate_video`、`jobs_status`、`jobs_result`）が使えるなら、それを使い、CLI の手順は飛ばします。
2. そうでなく、`orc` が `$PATH` にない場合はインストールします。
   ```bash
   curl -fsSL https://orchestor.io/install | sh
   ```
3. `orc status` で資格情報がないと表示されたら、ユーザーに `orc auth login` の実行を頼み、完了を待ちます。資格情報ファイルは読みません。

## UX ルール

1. 簡潔に答えます。CLI が出力した URL をそのまま返し、1 行の要約（モデル、動画なら長さ）を添えます。チャットに JSON をそのまま出しません。
2. ユーザーの言語で返答します。モデル ID とフラグは英語のままにします。
3. 質問は 1 つまで。必須の情報が欠けているときだけ聞きます。
4. `--wait` を付け、ジョブが終わるまで待って結果を表示させます。
5. 生成にはクレジットを消費します。頼まれたものだけを送信します。

## ワークフロー

1. **モデルを選ぶ。** ユーザーがモデルを指定しない限り、次の既定を使います。

   - 画像: `gpt-image-2.6`。安く速くしたい場合は `seedream-5-flash`。
   - 参照画像を使った編集: `gpt-image-2.6` に `--image-urls` を付けます。
   - 動画: `seedance-2.5`。安く速くしたい場合は `veo-3.1-lite`。
   - 画像から動画: `seedance-2.5` に、最初のフレームとして `--image-url` を付けます。

   そのモデルがワークスペースで使えるか、何を受け付けるかを確認します。

   ```bash
   orc creative image models list --json
   orc creative video models get seedance-2.5 --json
   ```

   `constraints` が `Unavailable` で始まるモデルは実行できません。別のモデルを選びます。

2. **入力は公開 HTTPS URL です。** ローカルのファイルは先にアップロードします。[メディア入力](references/media-inputs.ja.md)を参照してください。
3. **送信して待つ。**

   ```bash
   orc creative image generate --model gpt-image-2.6 --prompt "A red cube on a white background" --wait --field result.artifacts.0.url --raw
   orc creative video generate --model seedance-2.5 --prompt "Slowly moving along a coast at dawn" --duration-seconds 5 --wait --timeout 10m --field result.video_url --raw
   ```

4. **時間のかかるジョブ。** `--wait` を付けずに送信し、`job.id` を保持して、そのジョブをポーリングします。状態を確かめるために 2 つ目のジョブを送信しないでください。

   ```bash
   orc creative jobs status <job-id>
   orc creative jobs result <job-id>
   ```

5. **届ける。** ジョブは `COMPLETED`、`FAILED`、`CANCELED` のいずれかで終わります。失敗したらエラーを報告します。ユーザーに頼まれない限り、別のモデルで再試行しません。

## 再送と重複

同じリクエストを再送するときは、同じ `--idempotency-key` を使うと 2 つ目のジョブは作られません。新しいリクエストには新しいキーを使います。

## トラブルシューティング

| エラー | 意味 |
| --- | --- |
| `402` `Insufficient creative credits` | ワークスペースにプランかクレジットが必要です。ユーザーに伝え、再試行しません。 |
| `403` `Workspace is not accessible` | `--workspace <id>` で、資格情報が属するワークスペース（`orc whoami` で確認）を指定します。 |
| `Unavailable` がモデルの `constraints` にある | 現在そのモデルを提供できません。別のモデルを選びます。 |

<!-- translation-source-sha256: 9387d18840d8b88a8fc9cc257c214fe7088ba7cdd3ad51d38708eb47ba1fb064 -->
