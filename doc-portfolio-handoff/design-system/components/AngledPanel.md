# AngledPanel

A decorative panel whose frame is cut at an angle — the "dramatic" panel of the page. Built from two clip-paths (ink frame, fill) inside a `drop-shadow` wrapper so the offset shadow follows the cut.

## Props
| prop | values |
|---|---|
| `cut` | `slant` (top edge rises 22px) · `corner` (40px folder cut, top-right) · `slant-both` (top and bottom) |
| `tone` | `paper` (`bg-panel`) · `yellow` (`bg-highlight` + `text-on-highlight`) · `ink` (`bg-inverse` + `text-inverse`) |

## Rules
- Decorative frames only: quotes, chapter breaks, a single callout. **Never** for project cards, forms or anything users scan in a grid.
- Max one angled panel per viewport-height.
- Keep content inside the padded area — the cut eats up to 40px of the corner; put no text in the top `space-7`.
- Under 768px the slant reduces to 12px and the shadow to 3px.
