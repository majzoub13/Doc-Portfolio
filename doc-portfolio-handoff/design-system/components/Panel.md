# Panel

The basic unit of the page — a comic panel. Square corners, a solid ink border and a hard offset shadow.

## Variants
| variant | border | shadow | padding | use |
|---|---|---|---|---|
| `standard` | `border-panel` 3px | `shadow-2` | `space-6` | default container |
| `featured` | `border-heavy` 5px | `shadow-3`, or `shadow-accent` with `accent` | `space-7` | one hero panel per view |
| `secondary` | 3px | `shadow-2` | `space-6` | `bg-secondary` fill for alternating rhythm |
| `flat` | 3px | none | `space-6` | panels nested inside panels |

`theme="ink"` sets `data-theme="ink"` on the panel so all tokens flip (paper text, paper border, blue shadow). `halftone` adds a corner-fade dot screen (`decor-halftone`) behind content. `label` adds a mono case-file tab on the top border.

## Props
`variant`, `accent`, `halftone`, `theme`, `label`, `as` (default `div`; use `section`/`article` when the panel is a landmark), `children`.

## Rules
- Square corners always (`radius-none`).
- Never nest a shadowed panel in a shadowed panel — inner panels are `flat`.
- Gap between panels in a spread: `space-7` desktop, `space-5` mobile. Shadows need `space-3` clear space on the right and bottom.
- Under 768px the border drops to 2px and the shadow to `shadow-1`.
