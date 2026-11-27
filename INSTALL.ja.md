[English](INSTALL.md) | 日本語

# Orchestor Skills のインストール

このリポジトリには次のスキルがあります。

- **`orchestor-generate`** — 画像と動画の生成、モデルの選択、生成ジョブ
- **`orchestor-video-edit`** — アップスケール、背景削除、字幕、リフレーム、リップシンク、トーキングアバター、モーションコントロール
- **`orchestor-audio`** — テキスト読み上げ、ボイスチェンジ、文字起こし
- **`orchestor-product-photoshoot`** — 商品写真から作る 7 つのモードの商品画像

スキルはつなげて使えます。`orchestor-product-photoshoot` と `orchestor-generate` が素材を作り、`orchestor-audio` が声を作り、`orchestor-video-edit` が動画を仕上げます。

## 前提

Orchestor CLI をインストールしてログインします。

```bash
curl -fsSL https://orchestor.io/install | sh
orc auth login
```

スクリプトや CI では、代わりにシークレットマネージャーから `ORCHESTOR_API_KEY` を設定します。

または、ホスト型の MCP サーバーにエージェントを接続し、OAuth でログインします。Claude Code の場合:

```bash
claude mcp add --transport http orchestor https://mcp.orchestor.io/mcp
```

Codex、Cursor、OpenCode は [MCP のセットアップ](https://www.orchestor.io/docs/mcp)を参照してください。

## 方法 1 — `npx skills`（おすすめ、エージェント共通）

Claude Code、Cursor、Codex など、`~/.<agent>/skills/<name>/SKILL.md` を読み込むエージェントで使えます。Node.js が必要です。

```bash
npx skills@latest add orchestor-inc/skills
```

4 つのスキルがすべて入ります。`skills` CLI がエージェントを判定し、各スキルを正しい場所に書き込みます。エージェントとスキルを明示する場合:

```bash
npx skills@latest add orchestor-inc/skills --skill orchestor-generate --agent claude-code cursor codex
```

## 方法 2 — Claude Code プラグイン

Claude Code 専用です。同じスキルをホスト型 MCP 接続と一緒にインストールします。

```bash
claude plugin marketplace add orchestor-inc/orchestor-plugin
claude plugin install orchestor@orchestor
```

各スキルが 1 回だけ入るよう、どちらか一方の方法を使ってください。

## 方法 3 — ファイルをコピーする

```bash
git clone --depth 1 https://github.com/orchestor-inc/skills.git
cp -r skills/skills/orchestor-generate ~/.claude/skills/
```

## 確認

エージェントに次のように頼みます。

> 「ワークスペースで使える Orchestor の画像モデルを一覧して」

エージェントは `orchestor-generate` を使い、`orc creative image models list --json` を実行します。生成そのものには、クリエイティブのクレジットがあるワークスペースが必要です。

## 更新

| 方法 | 更新コマンド |
|---|---|
| `npx skills` | `npx skills@latest update` |
| Claude Code プラグイン | `claude plugin update orchestor@orchestor` |
| コピーしたファイル | `git pull` してからもう一度コピー |

<!-- translation-source-sha256: dec8d9932652a5ac6f9cce1dc0a834ff01a7b99bb7235077f6efa45ef454e418 -->
