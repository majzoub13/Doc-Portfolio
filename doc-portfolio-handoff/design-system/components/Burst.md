# Burst

The comic impact star: 13 irregular points, 3px ink stroke, `comic-yellow` or `comic-red` fill, optional 1–2 word label in Barlow 800 italic, rotated −6°.

## Props
`tone` (`yellow` · `red`), `size` (px, default 160), `children` (label), `points` (default 13), `fluid`, `textScale`.

## Limits
- Max **one** burst per viewport. Never on a project card, never behind body text.
- Labels: "New", "Shipped", "Live", "Next issue". No exclamations stacked ("!!!").
- Red bursts carry paper text with an ink shadow (3.9:1, allowed at ≥ 24px bold); yellow carry ink.
- Safe margin: `space-5` from any text block. Hide below 480px unless it is the only decoration in the section.
