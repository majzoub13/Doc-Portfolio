# Iconography and graphic motifs

## Icons

- **One family.** The Doc set has 25 line icons drawn for this system on a 24px grid, with a 2px stroke, square caps, mitred joins, no fills and no rounded terminals. The `Icon` component renders them with `currentColor`. The Icons asset group holds the same icons as single-ink SVGs (stroke `ink-black` #101820; an `<img>` can't recolour them).
- **Sizes:** 16px inline with mono text, 20px inside buttons, 22px in icon buttons and skill tiles, 24px standalone. Never draw the stroke heavier or lighter.
- **Colour:** icons are ink (`text-primary`) by default. Use accents only when the icon carries the accent's meaning: `text-technical` in technical rows, `on-…` colours inside filled controls. Don't use rainbow icon sets.
- **Alignment:** centre icons optically in their box. Put an `space-2` gap between an icon and its label. Use `space-1` beside mono text.
- **Brand marks:** this system draws **no** third-party logos. For GitHub, LinkedIn and similar, use the official single-colour mark from the brand's own press kit, scaled into the same 24px box, or the text label that `SocialLink` uses by default. Don't mix in another icon family (Feather, Material, Font Awesome). If an icon is missing, draw it to these rules.

## Graphic motifs

Motifs are accents, so they never compete with content. Every motif is `aria-hidden`, sits behind or beside content (`z-texture` / `z-overlap`), keeps `space-5` from text, and can be removed on mobile without losing meaning.

| motif | component / asset | colour | use it for | limit |
|---|---|---|---|---|
| Halftone dots | `Halftone`, `halftone-tile.svg`, panel `halftone` | `decor-halftone` (ink 15%); red/blue only as solid blocks | panel corners, image overlays, a texture block beside a hero | 1 block per section, ≤ 25% of the viewport, pitch 8–14px |
| Ink strokes | `InkStroke`, `Highlight` | underline `decor-burst`, swipe `decor-marker`, scribble and bracket `decor-annotation`, cross `decor-burst` | emphasising one word, grouping lines, striking out "what didn't work" | 3 marks per view; one per heading |
| Arrows | `Arrow`, `Annotation` | blue (technical), red (must-see), ink (neutral) | pointing from a note to a detail in evidence | 2 per view; must point *at* something |
| Comic bursts | `Burst`, `burst-*.svg` | yellow with ink text, red with paper text | a single "New / Shipped / Next issue" moment | 1 per viewport; never on cards, never behind text |
| Speed lines | `SpeedLines`, `speed-lines.svg` | `border-divider` on spreads, `text-primary` small | closing callout, a "shipped" moment, a section lead-in | 1 per page section; never animated in a loop |
| Panel-number markers | `PanelNumber` | ink disc with `comic-red` plate | ordered steps, numbering panels on a comic-page layout | not for counts or badges |
| Chapter numerals | `ChapterPanel` | ink outline with `comic-red` plate | one per chapter opener | one per section |
| Underlines and marker | `Highlight`, link underline | `link-underline`, `decor-marker` | links (structural), active nav (structural) | structural uses don't count toward the 3-mark limit |

**Never** decorate with: stars or sparkles scattered as confetti, "POW / BAM" sound effects, speech bubbles holding invented quotes, mascots, cartoon characters, or a drawing of a person.
