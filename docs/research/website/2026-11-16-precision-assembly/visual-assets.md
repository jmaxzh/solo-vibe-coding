# 原创视觉素材

最终主视觉保存在官网静态资源中：

- `website/public/media/method-assembly.webp`：1120 × 1120，156,758 字节，含透明通道。
- `website/public/media/method-assembly-small.webp`：640 × 640，67,182 字节，含透明通道。
- `website/public/social-card.svg` 与 PNG：分享图的排版源与发布文件。

使用内置 image_gen 生成与编辑，没有使用外部参考图或 CLI/API 回退。第一轮生成雕塑，第二轮仅分离背景；将最终透明 PNG 以 Sharp 编码为响应式 WebP。分享图从真实资源合成，页面标题和按钮始终是网页文字。

主体作为品牌隐喻，图注明确区分概念视觉、产品界面和执行结果。第三方既有素材的来源与归属继续由 `website/public/licenses/visual-assets.txt` 分发；本次没有新增第三方素材。

## 原始生成提示

```text
Use case: stylized-concept. Asset type: original sculptural hero artwork for Solo Vibe Coding, an open-source skill adding professional product-building methods to a coding assistant. No references.
Create a sophisticated physically rendered sculptural object: an ascending, gently twisted stack of SIX substantial open rectangular frames made from vivid vermilion-orange anodized aluminum. Frames are architectural square loops with smoothly rounded bevels and wide flat faces, not tubes, not a spring. The frames are staggered, rotated and tilted as a cohesive fanned assembly; the silhouette suggests a rising folded S or an open gateway. The stack rises diagonally from lower-left to upper-right, with a clearly visible deep central opening, complex overlaps, open negative spaces, thick dimensional edges, precise consistent geometry. Rich orange faces, darker burnt-orange undersides, finely brushed satin metal, narrow bright reflective bevels, subtle surface grain. Heroic product-design sculpture in an immaculate high-end studio, three-quarter view from slightly above, long lens no distortion. Large softbox upper-left, warm cream highlights, deep crisp occlusion between layers, believable soft grounding shadow. Backdrop solid warm pale ivory #f4f1e9, seamless floor in same color. Composition object fills 85 percent of a square image with a little breathable margin, asymmetric elegant directional silhouette. Full sculpture visible. Excellent craftsmanship, material and lighting detail, sculptural visual tension, editorial product photography quality. No lettering, text, logos, UI, labels, charts, gradients as decorative backdrop, particles, other props or watermark.
```

## 透明背景编辑提示

```text
Use case: background-extraction. Edit the attached original sculpture artwork. Remove ONLY the cream backdrop, including the background visible through every open metal frame. Deliver a genuinely transparent PNG. Preserve the exact sculpture geometry, all six frames, their arrangement, proportions, bevels, orange brushed metallic texture, lighting, reflective highlights, deep occlusion and sharp clean silhouette. Keep a subtle realistic floor contact shadow on transparency under the bottom frame if possible. Do not fade any metal at image edges. Do not redesign or add any objects. Preserve full original framing. No text, no watermark.
```
