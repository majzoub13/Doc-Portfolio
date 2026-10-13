# Callout

A highlighted aside — the yellow caption box of the comic. `bg-highlight` fill, 3px ink border, `shadow-1`, and an ink tab on the top edge.

## Props
| prop | notes |
|---|---|
| `tab` | 1–2 words: Key result · Note · Lesson · Warning |
| `title` | optional, 26px display uppercase |
| `tone` | `yellow` (default) · `ink` (`bg-inverse`, yellow tab, red plate shadow) · `paper` (`bg-panel`, red tab) |

## Rules
- Text on yellow is always `text-on-highlight` (11.88:1).
- Max one callout per screen; 1–3 sentences.
- Renders `<aside>` labelled by its tab.
