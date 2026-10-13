# IconButton

A 44 × 44px square (or circle) holding one 22px line icon, for actions whose meaning the icon alone carries: menu, close, copy, next, play.

## Props
| prop | notes |
|---|---|
| `icon` | an `Icon` name — required |
| `label` | required; becomes `aria-label` and the tooltip |
| `variant` | `square` (default, `radius-xs`) · `round` (`radius-full`, carousels and panel steppers) · `ink` (`bg-inverse`) |
| `href` | renders a link |
| `state` | `hover` · `pressed` · `focus` (docs only) |

## Tokens
2px `border-ink`, `bg-page`, `shadow-1`; hover `action-hover-fill` + `shadow-2`; pressed `shadow-none`; focus `focus-ring`.

## Rules
Never use an icon button for a primary action. Pair unfamiliar icons with a visible label (use `Button` with `icon` instead).
