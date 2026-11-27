[English](README.md) | 日本語

# Orchestor Agent Skills

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

AI クリエイティブプラットフォーム [Orchestor](https://www.orchestor.io)（オーケスター）のエージェントスキルです。
Claude Code、Cursor、Codex などのコーディングエージェントが、`orc` CLI または Orchestor MCP サーバーを通じて画像・動画・音声を生成できるようにします。

## インストール

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-creative
```

表示される一覧からエージェントを選ぶか、名前で指定します。

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-creative --agent claude-code cursor codex
```

Claude Code では、[Orchestor プラグイン](https://github.com/orchestor-inc/orchestor-plugin)が同じスキルを MCP 接続と一緒に配布しています。同じスキルを二重にインストールしないよう、どちらか一方を選んでください。

スキルをインストールしてもログインはされません。先に CLI か MCP を接続します。

```bash
curl -fsSL https://orchestor.io/install | sh
orc auth login
```

または MCP サーバーを追加します。Claude Code の場合:

```bash
claude mcp add --transport http orchestor https://mcp.orchestor.io/mcp
```

## 使い方

ふだんの言葉でエージェントに頼みます。

> gpt-image-2 で、コンクリートの床に置いた白いスニーカーの商品写真を作って、URL を教えて。

> seedance-2.5 で夜明けの波の動画を 5 秒作って。生成中はジョブ ID を教えて。

> この原稿を落ち着いた日本語の声で読み上げて、音声ファイルを返して。

エージェントはカタログからモデルを選び、ジョブを送信して完了を待ち、成果物の URL を返します。

## スキル

| スキル | 内容 |
| --- | --- |
| [orchestor-creative](skills/orchestor-creative/SKILL.ja.md) | 画像・動画・音声の生成、モデルの選択、生成ジョブの確認 |

### 以前のワークスペース向けスキル

このリポジトリのほかのスキル（`orchestor-cli`、`orchestor-brands`、`orchestor-prompts`、`orchestor-runs`、`orchestor-reports`、`orchestor-answers`、`orchestor-sources`、`orchestor-research`、`orchestor-agentic-web`、`orchestor-perception`、`orchestor-shopping`、`orchestor-workspace`、`orchestor-manage-issues`、`orchestor-integrations`、`orchestor`、`orchestor-aeo-workflows`、`orchestor-aeo-best-practices`）は、Orchestor の以前の分析コマンドを扱います。既存のインストールのために残しており、クリエイティブの制作には使いません。

## 更新

```bash
npx skills@latest update
```

更新の前にローカルの編集を確認してください。ローカルの変更は自動では統合されません。

## コントリビュート

スキルは通常の `SKILL.md` ファイルです。うまくいかなかった依頼、変更内容、もう一度試した結果を添えて Pull Request を開いてください。英語の各ファイルには日本語訳の `.ja.md` があり、`node scripts/check-localization.mjs` で両者が一致しているかを検査します。例からは顧客データと資格情報を取り除いてください。

## ドキュメント

- [CLI リファレンス](https://www.orchestor.io/docs/cli)
- [MCP のセットアップ](https://www.orchestor.io/docs/mcp)
- [モデル](https://www.orchestor.io/docs/models)

## ライセンス

[MIT](LICENSE)。サードパーティのディスカバリーツールの帰属表示は [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) にあります。

<!-- translation-source-sha256: c7fc248ad36333cb902dc9aaf727da3b6a902763cf5b3b993dda08fe0cc2ded7 -->
