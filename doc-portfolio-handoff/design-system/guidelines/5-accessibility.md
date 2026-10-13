# Accessibility and performance

## Colour and contrast

- Every text token's usage note names the grounds it is legible on, and every pair holds **≥ 4.5:1** in both themes. The full table is under Colour in the brand book.
- `comic-red` text is allowed only at ≥ 24px (or bold ≥ 19px). Small red text uses `text-accent` (`press-red`, 4.6–5.6:1).
- Yellow is never a text colour and never sits under white text.
- Non-text marks that carry meaning (control borders, focus ring, link underline, icons) hold ≥ 3:1. Decorative hairlines (`border-divider`) never form the only boundary of a control.
- State is never colour-only. Links have underlines, status labels pair a word with a glyph, and the active nav item has a marker bar plus `aria-current`.

## Focus

One focus style everywhere: a **3px solid `focus-ring` outline with a 3px offset** (blue on paper at 7.1:1 or better; yellow on ink at 10.7:1 or better). It shows on `:focus-visible` and is never removed. Stretched-link cards move focus to the title link, and its outline wraps the whole card through the pseudo-element.

## Touch targets

At least 44 × 44px for every interactive element (`tap-min`). Buttons are 48px (44px small), icon buttons 44px, nav links 44px (56px in the mobile sheet), link-list rows 56px, and tags-as-links 32px tall with at least 8px spacing. Footer links are 44px rows.

## Semantics

- One `h1` per page (the hero or case-study title), with chapters as `h2` and no skipped levels. Components take a `level` prop where a heading's rank varies.
- `Nav` renders `header > nav[aria-label]` with a real list. The menu button uses `aria-expanded` and `aria-controls`.
- `Panel` takes `as="section"` or `as="article"` when it is a landmark or a self-contained item. `ProjectCard` is an `article`, `Callout` an `aside`, `ProjectMeta` a `dl`, and tags a `ul`.
- External links announce "(opens in a new tab)". The copy button announces "Copied" through a polite live region.
- Decorative SVG (motifs, highlight strokes, chapter numerals, burst shapes) is `aria-hidden`. The words they decorate stay real text.

## Text over texture

Body copy always sits on a solid surface (`bg-page`, `bg-panel`, `bg-secondary`). Paper grain is ≤ 6% and fine-grained, so it passes. Halftone is masked away from text areas and never sits behind paragraphs. Captions go below images, never on them.

## Motion

Follow the Motion section's reduced-motion rules. No content depends on an animation finishing, and nothing auto-plays sound or moves for longer than 5 seconds.

## Images

Alt text rules are in Photography. Decorative images get `alt=""`. Placeholders carry `role="img"` with an `aria-label` that says the asset is pending.

## Performance

- **Textures are CSS, not images.** Halftone uses radial-gradient dots and grain is one 160px SVG tile. Neither needs network requests or large bitmaps.
- Bake T2/T3 photo treatments offline and serve WebP/AVIF at 2× size (hero ≤ 180KB, project images ≤ 120KB) with `loading="lazy"` below the fold and `decoding="async"`. The case-study hero loads eagerly.
- Avoid `filter` and `mix-blend-mode` on large animated elements. The CSS treatments are static, and only opacity and transform animate.
- Fonts: 11 Latin WOFF2 files at about 250KB total. Preload Barlow Condensed 800 and Inter 400 only, and use `font-display: swap`.
- `clip-path` and `drop-shadow` (angled panels) are limited to one or two per viewport.
- Decorative layers live in their own elements or pseudo-elements, so a mobile or reduced-data stylesheet can remove them without touching content.
