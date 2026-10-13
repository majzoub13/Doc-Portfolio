# SectionHeading

Opens a section: optional chapter label or eyebrow, an uppercase `heading-1` title (64 → 40px), a 72 × 6px `comic-red` rule, and an optional intro in `text-secondary`.

## Props
| prop | notes |
|---|---|
| `title` | required |
| `chapter`, `chapterTitle` | renders a `ChapterLabel` above |
| `eyebrow` | renders an `Eyebrow` above (use chapter **or** eyebrow, not both) |
| `intro` | one or two sentences, max 60ch |
| `level` | 2 (default) or 3 — 3 uses `heading-2` sizes |
| `rule` | `false` hides the red rule |

## Spacing
Label → title `space-3`; title → rule `space-3`; whole block → content `space-6`.
