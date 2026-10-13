# Highlight

Emphasis for a word or short phrase, drawn like a pen mark.

| variant | draws | use |
|---|---|---|
| `marker` | `decor-marker` swipe across the lower 40% | display and body — the only one allowed in body copy |
| `underline` | double hand-drawn stroke in `decor-burst` | display only, ≥ 32px |
| `circle` | scribbled loop in `decor-annotation` | display only; technical emphasis |
| `ink` | ink block, paper type, red plate shadow | display only; one word |

## Rules
One highlight per heading, at most one per paragraph. Never highlight a whole sentence. The words stay real text; the marks are decorative SVG with `aria-hidden`. On ink spreads the marker becomes a full yellow block with `text-on-highlight` so contrast holds.
