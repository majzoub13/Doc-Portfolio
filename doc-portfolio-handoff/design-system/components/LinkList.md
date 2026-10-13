# LinkList

A ruled list of links — writing, resources, references. Each row: label (Inter 600), mono meta, and an arrow (→ internal, ↗ external). 56px rows, 2px ink rule on top, 1px `border-divider` between.

## Props
`items`: `{label, meta?, href, external?}[]`.

## States
Hover: the yellow marker sweeps across the full row (`dur-base`), text → `text-on-highlight`, arrow nudges. Focus: `focus-ring`.

Under 480px the meta drops under the label.
