# TextLink

Inline link inside prose: `text-primary`, weight 600, with a 2px `link-underline` (comic-red) and a yellow marker that sweeps in on hover.

## Props
| prop | notes |
|---|---|
| `href` | required |
| `external` | adds an up-right arrow, `target="_blank"`, `rel="noopener noreferrer"` and hidden "(opens in a new tab)" |
| `tech` | sets the label in `mono-code` — file paths, endpoints, package names |
| `state` | `hover` · `focus`, documentation only |

## States
Hover: `decor-marker` background grows 0 → 100% width (`dur-fast`), label → `text-on-highlight`. Focus: 3px `focus-ring`. Visited: unchanged.

## Rules
- Links are told apart by the underline, never by colour alone.
- Link text names the destination ("MatchLens case file"), never "click here".
- Standalone links outside prose use `LinkList` or a `Button`.
