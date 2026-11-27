---
version: 0.4.0
name: orchestor-product-photoshoot
description: |
  商品写真を参照画像にした Orchestor の画像生成で、ブランド品質の商品画像
  を作ります。
  使う場面:「商品写真」「スタジオ撮影」「白背景」「ライフスタイル画像」
  「Pinterest のピン」「ヒーローバナー」「広告クリエイティブ」「Meta 広告」
  「キッチンに置いた商品」「浮いている商品」「この商品写真の雰囲気を変えて」、
  そのほか商品や SNS 広告用の静止画。
  モード: product_shot、lifestyle_scene、moodboard_pin、hero_banner、
  ad_creative_pack、conceptual_product、restyle。
  使わない場面: 商品のない画像（orchestor-generate）、商品の動画（写真を最初の
  フレームにして orchestor-generate）。
argument-hint: "<product-image-url> [--mode <mode>] [--count N]"
allowed-tools: Bash
---

[English](SKILL.md) | 日本語

# Orchestor Product Photoshoot

`orc creative image generate` に、商品写真を参照として `--image-urls` で渡し、下のモード別テンプレートで組み立てたプロンプトを使って商品画像を作ります。準備とジョブの扱いは [orchestor-generate](../orchestor-generate/SKILL.ja.md) に従います。

## UX ルール

1. 質問は短く 3 つまで、選択肢付きで聞きます。枚数 `[1 / 3 / 4]`、モード、使う場所（縦横比が決まります）。文脈から明らかなものは聞きません。
2. 商品は撮影されたとおりに保ちます。形、色、ラベル、ロゴ。すべてのプロンプトでそう指示します。
3. 返すのは画像の URL だけです。

## モード

| モード | ユーザーが欲しいもの | 縦横比 |
| --- | --- | --- |
| `product_shot` | すっきりしたスタジオやカタログ背景の商品 | `1:1` |
| `lifestyle_scene` | 実際の場所で使われている商品 | `4:3` または `4:5` |
| `moodboard_pin` | 縦長の Pinterest 風ピン | `2:3` |
| `hero_banner` | Web サイト、メール、キャンペーン用の横長ヘッダー | `16:9` |
| `ad_creative_pack` | SNS 広告用の静止画バリエーション | `1:1`、`4:5`、`9:16` |
| `conceptual_product` | 浮遊、スプラッシュ、シュール、彫刻的な商品 | `1:1` |
| `restyle` | 同じ商品で、季節、雰囲気、配色を変える | 入力に合わせる |

## プロンプトのテンプレート

```text
<mode scene>. The product from the reference image, unchanged: same shape, color, label and logo. <lighting>. <camera and lens>. Photorealistic commercial product photography, no added text.
```

シーン、ライティング、カメラはモードに合わせて埋めます。

- `product_shot`: 継ぎ目のないライトグレーの背景、左からのソフトボックス光、85mm、中央配置。
- `lifestyle_scene`: ユーザーが指定した場所（キッチンカウンター、デスク、ジム）、窓からの自然光、35mm、浅い被写界深度。
- `moodboard_pin`: 1 つの配色で小物をそろえたフラットレイ、真上から、柔らかい昼光。
- `hero_banner`: 商品を右 3 分の 1 に置き、左にコピー用の余白、印象的なリムライト、50mm。
- `conceptual_product`: しぶきや破片とともに浮かぶ商品、高速フラッシュ、暗い背景。
- `restyle`: 参照画像の構図を保ち、ユーザーが頼んだ季節、配色、雰囲気だけを変えます。

`ad_creative_pack` では、縦横比ごとにジョブを 1 つ送り、シーンだけを変えます。

## 送信

```bash
orc creative image generate --model gpt-image-2.6 --image-urls https://example.com/product.png --aspect-ratio 1:1 --num-images 1 --prompt "Seamless light-gray backdrop. The product from the reference image, unchanged: same shape, color, label and logo. Soft box light from the left. 85mm, centered. Photorealistic commercial product photography, no added text." --wait --field result.artifacts.0.url --raw
```

`--num-images` で 1 つのジョブから複数のバリエーションを作れます（モデルの `max_images` まで）。ローカルの商品写真は先にアップロードします（[メディア入力](../orchestor-generate/references/media-inputs.ja.md)）。

<!-- translation-source-sha256: 088f645b4f26613f9c9802a805a04c5893045f7dfc7c4061c08bec32d39485ef -->
