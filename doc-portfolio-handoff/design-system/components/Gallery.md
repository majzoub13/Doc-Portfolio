# Gallery

A comic-page image layout for case studies: one lead panel spanning two rows on the left (2fr), two stacked panels on the right (1fr), each with a numbered caption ("FIG. 01"). `layout="even"` gives a three-up grid of squares.

## Props
`items`: ImagePanel props + `caption`. Default treatment **T0** — gallery images are evidence. `layout`: `lead` (default) · `even`.

## Rules
- 3 items for `lead`, 3 or 6 for `even`.
- Every image gets a caption that says what it proves.
- Under a 640px container everything stacks in one column at 16/9 — no horizontal scrolling, no carousels.
