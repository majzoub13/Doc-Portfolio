# InkStroke

Loose pen marks for annotating: `underline` (red double stroke), `swipe` (yellow marker), `scribble` (blue loop), `bracket` (blue curly bracket for grouping lines), `cross` (red strike for "what didn't work").

## Props
`kind`, `width`, `height`, `color` (override — keep to `decor-*` tokens), `style`. Strokes are non-scaling, so stretching the box keeps line weight.

## Limits
Annotation only — never as dividers or borders. `Highlight` already wraps underline, swipe and scribble for words; use InkStroke for free placement in margins. Max three marks per view.
