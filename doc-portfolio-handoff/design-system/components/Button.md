# Button

Square-cornered, ink-outlined action with a hard offset shadow that lifts on hover and sits down on press.

**Primary** (`action-primary`) at most once per view — the thing the section is for. **Secondary** (`action-secondary`, blue) for technical actions: repository, docs, API. **Outline** for everything else.

## Anatomy
2px `border-ink` · `radius-xs` · `shadow-1` · label in `label-button` (Barlow Condensed 700, 19px, uppercase, .06em) · optional 20px icon, 8px gap · padding `space-3` × `space-5` · min-height 48px (44px small).

## Props
| prop | values | default |
|---|---|---|
| `variant` | `primary` · `secondary` · `outline` | `primary` |
| `size` | `md` · `sm` | `md` |
| `icon` | any `Icon` name | — |
| `iconPosition` | `end` · `start` | `end` |
| `href` | renders an `<a>` | — |
| `block` | full width | false |
| `disabled` | boolean | false |
| `state` | `hover` · `pressed` · `focus` — forces a state for documentation only | — |

## States
| state | change | timing |
|---|---|---|
| hover | translate(-2px,-2px), `shadow-2`; outline fills `action-hover-fill`; trailing icon nudges 3px | `dur-fast`, `ease-out` |
| pressed | translate(3px,3px), `shadow-none`; fill → `action-primary-pressed` / `action-secondary-pressed` | `dur-instant` |
| focus | 3px `focus-ring` outline, 3px offset | — |
| disabled | `action-disabled` fill, `text-disabled`, `border-divider`, no shadow, `cursor: not-allowed` | — |

## Rules
- Labels are verbs, two or three words, uppercase via CSS: "View case file", "Download CV".
- The primary label is `on-action-primary` (warm-paper on press-red, 5.30:1). Never put text on `comic-red` or white text on `comic-yellow`.
- On mobile, buttons in a group go full width (`block`) under 480px and stack with `space-3`.
