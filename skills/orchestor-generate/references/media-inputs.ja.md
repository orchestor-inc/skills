[English](media-inputs.md) | 日本語

# メディア入力

Orchestor の入力（`--image-urls`、`--image-url`、`--video-url`、`--audio-url`）はすべて、ジョブが終わるまで取得できる公開 HTTPS URL です。ローカルのファイルは先にアップロードします。

1. 正確なサイズと MIME タイプを指定して、アップロード用 URL を発行します。

   ```bash
   orc creative files upload-url create --content-type image/png --size-bytes "$(wc -c < ./input.png | tr -d ' ')" --filename input.png --json
   ```

2. ファイルのバイト列を `data.upload_url` に、`data.upload_method` と `data.upload_headers` のすべてのヘッダーを付けて送ります。このリクエストに Orchestor の API キーは付けません。アップロード用 URL は 15 分で期限切れになり、秘密の値として扱います。
3. `data.public_url` を生成のフラグに渡します。

完全なスクリプトは[ファイルのアップロード](https://www.orchestor.io/docs/uploads)を参照してください。

<!-- translation-source-sha256: 84391f9e92478374075aebb8513ec3ada12acffd4271d8ff400479fce444cb38 -->
