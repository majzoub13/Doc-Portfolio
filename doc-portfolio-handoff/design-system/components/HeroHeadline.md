# HeroHeadline

The page's one hero line: Barlow Condensed 800, uppercase, `display-hero` (128px desktop → 60px mobile, fluid with `clamp()`), leading .88.

## Props
| prop | notes |
|---|---|
| `lines` | array of strings or `{text, style}` where style is `accent` (comic-red, allowed at this size), `outline` (3px ink stroke, transparent fill), `marker` (yellow highlighter), `ink` (ink block, paper type) |
| `slant` | italic — use for one-off poster moments, not every hero |
| `as` | element, default `h1` |

## Rules
- One per page. Two to four lines, each line a phrase; break by meaning, not width.
- Use at most **one** treated line (`accent`, `outline`, `marker` or `ink`) per headline.
- `comic-red` text is allowed here only because the size is ≥24px (3.86:1 on paper).
- Never apply distressed or hand-lettered effects to the hero.
- Mobile: max three lines at 60px; let `text-wrap: balance` handle orphans.
