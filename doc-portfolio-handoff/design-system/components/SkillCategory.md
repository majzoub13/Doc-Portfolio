# SkillCategory

A skill group: ink icon tile with a red plate, `heading-4` title, item count in mono, one-line note, and `tech` TechTags. A 3px ink rule on top replaces a panel border.

## Props
`icon` (Icon name), `title`, `note` (≤ 60 characters), `items` (string[]), `variant` (TechTag variant, default `tech`), `level` (heading, default 3).

## Layout
Place categories in `.doc-skill-grid` (`auto-fit, minmax(240px, 1fr)`, gaps `space-6` × `space-5`). Three to five categories. No skill bars, percentages or star ratings.
