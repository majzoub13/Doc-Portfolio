# Responsive behaviour

Components respond to **their container** (`container-type: inline-size`), so the same card works in a 4-column grid and a full-width row. The page grid responds to the viewport.

## Desktop (≥ 1024px)

12-column editorial grid with 64px margins. Asymmetric splits (7/5, 8/4). One overlap per viewport-height (featured project card, image + bubble). Full display scale (hero 128px). Layered image panels with `shadow-3` / `shadow-accent`. Halftone blocks and one burst allowed.

## Tablet (768–1023px)

6 columns with 32px margins. Overlaps reduce to one column or `space-6`. Splits become 4/2 or stack when the text column would drop below 40ch. Headlines follow the fluid clamp (hero about 88–100px). Angled panels keep their cut, and halftone pitch rises to 12px.

## Mobile (< 768px)

4 columns with 16px margins, and **single column** for every content row. Panels use 2px borders, `shadow-1` and `space-5` padding. Overlaps survive only as the small pull-up (a panel overlapping the image above it by `space-6`, inset `space-3`). Angled cuts are ≤ 12px. Grain stays; halftone blocks, speed lines and secondary bursts are removed. Touch targets are ≥ 44px (`tap-min`). Body text is 16px, and the hero is a maximum of three lines at 60px. No horizontal overflow: tags and meta wrap, nothing scrolls sideways.

## Component behaviour

| component | desktop | mobile |
|---|---|---|
| Nav | inline links + CTA | wordmark + 44px menu button; full-width sheet with 32px links and a full-width CTA |
| HeroHeadline | 128px, 2–4 lines | 60px, ≤ 3 lines, `text-wrap: balance` |
| ProjectCard (featured) | image 8/12, panel overlaps 2 columns | image then panel pulled up `space-6`, inset `space-3` |
| ProjectCard (compact) | auto-fit grid, min 280px | one per row |
| CaseStudyHeader | title 7 / lead 5, image 21/9 | stacked; image 16/9 |
| Gallery | lead panel + 2 stacked | one column, all 16/9 |
| ChapterPanel | numeral beside text | numeral above, 88px |
| ContactCTA | 7 / 5 split | stacked, email first |
| ClosingCallout | title + burst side by side | burst above, 132px |
| Footer | 5 / 4 / 3 columns | one column |
| ImagePanel | 3px frame, `shadow-2` | 2px frame, `shadow-1`, halftone 10px |
| Annotation | in the margin with an arrow | below the image, arrow hidden |
| LinkList | label · meta · arrow | meta under the label |

## Checks before shipping a layout

- 320px wide: nothing overflows and long words (the email) wrap.
- 200% zoom: no clipped text, and sticky nav ≤ 20% of the viewport height.
- Landscape phone: the hero still shows its first line and the CTA without scrolling past the nav.
