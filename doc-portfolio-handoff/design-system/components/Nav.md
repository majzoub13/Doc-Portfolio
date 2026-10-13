# Nav

The site header: wordmark left, four to five uppercase links, one primary call-to-action, and a full-width sheet menu on small containers.

## Anatomy
Bar (`bg-page`, 3px `border-ink` bottom rule, 72px tall) → `Wordmark` (sm) → link list → actions (primary `Button` sm, menu `IconButton`). The mobile sheet stacks the links at 32px display type with `border-divider` rules.

## Props
| prop | type | notes |
|---|---|---|
| `items` | `{label, href, current?}[]` | 4–5 items. `current` sets `aria-current="page"`. |
| `cta` | `{label, href}` | Optional. One only. |
| `brandHref` | string | Wordmark link, default `#`. |
| `defaultOpen` | boolean | Sheet open on mount (previews only). |
| `label` | string | `aria-label` of the `nav`, default "Primary". |

## States
- **Hover** — `action-hover-fill` behind the label, label `text-on-highlight`, `dur-fast`.
- **Active page** — a 6px `decor-marker` bar under the label (marker stroke), plus `aria-current`.
- **Focus** — 3px `focus-ring`, 3px offset.

## Responsive
Responds to its **container** (`container-type: inline-size`), not the viewport. Under 760px the inline list and CTA hide, the 44px menu button appears, and the sheet opens beneath the bar with `z-menu`; the CTA moves to the bottom of the sheet as a full-width button.

## Accessibility
Menu button carries `aria-expanded` and `aria-controls`; its label switches between "Open menu" and "Close menu". Keep link text to one word where possible. Sticky positioning is the consumer's choice (`position: sticky; top: 0` with `z-nav`).
