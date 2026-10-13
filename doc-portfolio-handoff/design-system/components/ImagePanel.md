# ImagePanel

A framed image with a treatment level, an aspect ratio, and an optional numbered caption. Also renders the placeholder when a real asset is missing.

## Treatment levels
| level | filter | overlay | where |
|---|---|---|---|
| `t0` Evidence | none | none | screenshots, code, diagrams, footage you are making a claim about |
| `t1` Print (default) | contrast 1.06, saturate .92 | 5px halftone at 55% | project imagery, product shots, gallery |
| `t2` Graphic | grayscale, contrast 1.3 | one accent plate (`tint`: blue · red · yellow, screen 50%) + 7px halftone | section openers, secondary portrait, mood panels |
| `t3` Cover | grayscale, contrast 1.6 | red plate (multiply 55%) + 8px ink halftone fading in from one edge | the hero portrait only |

Treatment is the live CSS fallback. For production, bake T2/T3 derivatives offline (see Photography) and pass them as `src` with `treatment="t0"`.

## Props
| prop | notes |
|---|---|
| `src`, `alt` | `alt` is required for content images (see Accessibility). |
| `treatment` | `t0`–`t3`, default `t1` |
| `tint` | `blue` · `red` · `yellow` for t2/t3 |
| `aspect` | `portrait` 4/5 · `tall` 3/4 · `wide` 16/9 (default) · `cinema` 21/9 · `square` 1/1 |
| `frame` | `standard` (3px, `shadow-2`) · `hero` (5px, `shadow-accent`) · `flat` (no shadow) |
| `focal` | CSS `object-position`, default `50% 35%` (keeps faces in frame) |
| `caption`, `figNo` | numbered `figcaption` |
| `placeholder` | `{kind: portrait·screenshot·football·diagram·product, title, spec, label}` |
| `interactive` | hover fades the treatment and settles the image (scale 1.02, `dur-base`) |
| `sample` | stamps a "Sample image" tag — required on any non-Mohamed stand-in |

## Responsive
The frame drops to 2px / `shadow-1` and halftone coarsens to 10px under a 480px container. Crops follow the Photography rules.
