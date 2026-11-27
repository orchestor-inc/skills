---
version: 0.4.0
name: orchestor-product-photoshoot
description: |
  Make brand-quality product images from a product photo via Orchestor image
  generation with a reference image.
  Use when: "product photo", "studio shot", "white background", "lifestyle
  image", "Pinterest pin", "hero banner", "ad creatives", "Meta ads",
  "product in a kitchen", "levitating product", "restyle this product
  photo", or any product or paid-social still.
  Modes: product_shot, lifestyle_scene, moodboard_pin, hero_banner,
  ad_creative_pack, conceptual_product, restyle.
  NOT for: images without a product (use orchestor-generate), product video
  (use orchestor-generate with the photo as the first frame).
argument-hint: "<product-image-url> [--mode <mode>] [--count N]"
allowed-tools: Bash
---

English | [日本語](SKILL.ja.md)

# Orchestor Product Photoshoot

Product imagery with `orc creative image generate`, the product photo as a
reference in `--image-urls`, and a prompt built from the mode template below.
Bootstrap and job handling follow [orchestor-generate](../orchestor-generate/SKILL.md).

## UX Rules

1. Ask at most 3 short questions, with labeled options: how many images
   `[1 / 3 / 4]`, which mode, and where they will be used (sets the aspect ratio).
   Skip any answer that is obvious from context.
2. Keep the product exactly as photographed: shape, color, label, logo. Say so
   in every prompt.
3. Return only the image URLs.

## Modes

| Mode | When the user wants | Aspect ratio |
| --- | --- | --- |
| `product_shot` | Product on a clean studio or catalog background | `1:1` |
| `lifestyle_scene` | Product in a real setting, in use | `4:3` or `4:5` |
| `moodboard_pin` | Vertical Pinterest-style pin | `2:3` |
| `hero_banner` | Wide website, email or campaign header | `16:9` |
| `ad_creative_pack` | Several static ad variants for paid social | `1:1`, `4:5`, `9:16` |
| `conceptual_product` | Levitating, splash, surreal or sculptural product | `1:1` |
| `restyle` | Same product, new season, mood or palette | match the input |

## Prompt template

```text
<mode scene>. The product from the reference image, unchanged: same shape, color, label and logo. <lighting>. <camera and lens>. Photorealistic commercial product photography, no added text.
```

Fill the scene, lighting and camera from the mode:

- `product_shot`: seamless light-gray backdrop, soft box light from the left, 85mm, centered.
- `lifestyle_scene`: the user's setting (kitchen counter, desk, gym), natural window light, 35mm, shallow depth of field.
- `moodboard_pin`: styled flat lay with props in one palette, overhead, soft daylight.
- `hero_banner`: product on the right third, open space on the left for copy, dramatic rim light, 50mm.
- `conceptual_product`: product floating with splashes or fragments, high-speed flash, dark backdrop.
- `restyle`: keep the composition of the reference; change only the season, palette or mood the user asked for.

For `ad_creative_pack`, submit one job per aspect ratio and vary only the scene.

## Submit

```bash
orc creative image generate --model gpt-image-2.6 --image-urls https://example.com/product.png --aspect-ratio 1:1 --num-images 1 --prompt "Seamless light-gray backdrop. The product from the reference image, unchanged: same shape, color, label and logo. Soft box light from the left. 85mm, centered. Photorealistic commercial product photography, no added text." --wait --field result.artifacts.0.url --raw
```

`--num-images` makes variants in one job (up to the model's `max_images`).
Upload a local product photo first ([media inputs](../orchestor-generate/references/media-inputs.md)).
