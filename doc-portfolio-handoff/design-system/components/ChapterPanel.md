# ChapterPanel

A chapter opener: a huge outlined numeral (ink stroke, transparent fill, `comic-red` plate offset 6px) beside a `ChapterLabel`, an uppercase title and one short paragraph — on a standard panel with corner halftone.

## Props
`number`, `label` (chapter name), `title`, `children` (the paragraph), `level` (heading level, default 2), `variant` (Panel variant), `halftone` (default true).

## Responsive
Container-driven: under 520px the numeral moves above the text at 88px with a 2px stroke.

## Rules
The numeral is decorative (`aria-hidden`); the label carries the number for assistive tech. One per major section.
