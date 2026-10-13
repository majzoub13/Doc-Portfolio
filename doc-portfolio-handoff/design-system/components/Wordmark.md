# Wordmark

The Doc wordmark: the word "Doc" set in Barlow Condensed ExtraBold Italic with a comic-red misregistration shadow.

There is no drawn logo. The wordmark is type only, and it is set by this component every time — never re-typed by hand, never redrawn as an image.

## Anatomy
- **Type** — "Doc", `display` family, 800 italic, uppercase, letter-spacing .02em.
- **Plate** — a 3px × 3px `comic-red` text-shadow (the misregistered second plate). In the `tile` variant it moves to a 4px `comic-red` box-shadow behind a `bg-inverse` tile.
- **Name** (optional) — "Mohamed / Al-Majzoub" in `mono-meta`, `text-secondary`, two lines.

## Props
| prop | values | default |
|---|---|---|
| `variant` | `type` · `tile` | `type` |
| `size` | `sm` (26px, nav) · `md` (34px) · `lg` (56px, footer) | `md` |
| `withName` | boolean — adds the full name | false |
| `href` | string — renders a link with the accessible name "Doc — Mohamed Al-Majzoub, home" | — |

## Rules
- Use `type` in the navigation and footer; `tile` only where the mark sits on a photo or busy halftone.
- Clear space: one cap-height on every side. Minimum size 22px.
- Never recolour the plate; never add a burst, outline or gradient to the wordmark.
- On ink spreads the type flips to `warm-paper` automatically (tokens); the plate stays `comic-red`.
