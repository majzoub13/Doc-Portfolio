# ProjectCard

How a project appears in a list. Two variants.

## Featured
A 12-column grid: the image spans columns 1–8, a `featured` + `accent` Panel spans 7–12 and **overlaps the image by two columns** — the system's signature overlap. `flip` mirrors it. Holds file number, status, `heading-2` title, description, tags and `ProjectLinks`. Max one per section; alternate `flip` between consecutive featured cards.

## Compact
A whole-card link for grids: T1 image (16/9) with a 3px ink rule beneath, file number + status, `heading-3` title, a three-line clamped description, up to four tags pinned to the bottom, and "Open case file →" in `text-accent`. One `<a>` (the title) is stretched over the card, so it is a single tab stop.

## Props
| prop | notes |
|---|---|
| `variant` | `compact` (default) · `featured` |
| `fileNo` | "Case file 01 / 2025" — mono meta |
| `status` | `StatusLabel` key |
| `title`, `description` | required |
| `tags` | string[] |
| `image` | `ImagePanel` props (`src`, `alt`, `treatment`, `placeholder`, `sample`…) |
| `href` | compact: the card link |
| `links` | featured: `ProjectLinks` props |
| `level` | heading level, default 3 |
| `flip` | featured only |

## States
Compact hover: translate(-3px,-3px), `shadow-3`, image scales to 1.03 (`dur-base`, `ease-out`); arrow nudges 4px. Focus: `focus-ring` on the stretched link.

## Responsive
Container-driven. Under 760px the featured card stacks: image first, then the panel pulled up `space-6` over the image's bottom edge and inset `space-3` on both sides — the overlap survives, at a scale that reads. Compact cards sit in `repeat(auto-fit, minmax(280px, 1fr))` with `space-6` gaps.
