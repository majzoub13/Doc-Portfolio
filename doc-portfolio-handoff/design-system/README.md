Doc is the personal brand of **Mohamed Al-Majzoub**: AI engineer, software developer and technical founder. The visual language is a **premium printed graphic novel brought into a digital interface**: warm paper, black ink, square panels, hard offset shadows, real photography under halftone, and a few precise accents in red, yellow and blue. It has to read as editorial and cinematic to a founder, and as technically credible to an engineering recruiter. Never childish, never superhero merchandise, never generic SaaS.

## Design principles

1. **Paper first, ink for structure, colour for meaning.** Warm paper covers most of every screen. Ink black draws every line and every word. Red, yellow and blue each have a job, and only one of them leads in a given view.
2. **Panels, not cards.** Content sits in square-cornered frames with solid ink borders and hard shadows, laid out like a page from a printed comic: mostly orderly, sometimes overlapping, rarely angled.
3. **Evidence beats decoration.** Screenshots, footage and diagrams stay legible (treatment T0–T1). The heavy graphic treatment is for the portrait and section openers only.
4. **Lettering is for display.** Barlow Condensed does the shouting. Inter carries every paragraph, and IBM Plex Mono labels the facts.
5. **Motion is a page turn, not a show.** Short reveals, small panel shifts, and shadows that lift and settle. Nothing loops, bounces or chases the cursor.

## Content fundamentals

- **Voice:** confident, plain and specific. First person singular ("I build…", "I shipped…"). Name the real thing: "a football video analysis pipeline", not "innovative AI solutions".
- **Claims:** only what can be shown. Use no invented metrics, testimonials or logos. Where a number is unknown, leave it out.
- **Casing:** display headings, labels, buttons and nav are set **uppercase by CSS**, so source text is written in sentence case ("View case file"). Paragraphs are never uppercase.
- **Publication vocabulary:** sections are *Chapters* ("Chapter 02 — Selected work"), projects are *Case files* ("Case file 01 / 2025"), images are *Figures* ("Fig. 03"). Use it consistently and lightly. Don't pun on it in body copy.
- **Punctuation:** em dashes and the ellipsis in display copy are fine ("To be continued…"). Avoid stacked exclamation marks. A single "!" belongs only inside a burst.
- **No emoji.** Use icons from the Doc set, or words.

## Using this system

- Load `tokens.css` (generated from `tokens.json`), then `components/bundle.css`, then React 18 and `components/bundle.js`. The components are exposed on `window.Doc` (`Doc.Button`, `Doc.Panel`, …). Their props are documented in each component's guidelines and in `components/index.d.ts`.
- Fonts ship in `fonts/` as WOFF2, Latin subset, SIL OFL: Barlow Condensed 600/700/800 plus 700/800 italic, Inter 400/500/600/700, and IBM Plex Mono 400/500.
- **Two themes.** `paper` is the default page. `ink` is applied with `data-theme="ink"` on any element (the footer, the closing callout, a feature spread) and flips every semantic token inside it. An ink spread is a *section*, not a site-wide dark mode, and it is used at most twice per page.
- Always use **semantic tokens** (`bg-page`, `text-primary`, `border-ink`, `action-primary`…) in components. Brand primitives (`comic-red`, `comic-yellow`, `comic-blue`) appear directly only in decorative marks: bursts, plates and markers.

## Colour

### Palette

| token | hex | role |
|---|---|---|
| `warm-paper` | #FAF6ED | the page; dominant everywhere |
| `ink-black` | #101820 | text, outlines, shadows, ink spreads |
| `comic-red` | #E63946 | brand red: bursts, plates, accent shadow, display type ≥ 24px |
| `comic-yellow` | #F4D03F | highlighter, callouts, selected labels, always with ink text |
| `comic-blue` | #1E4D8A | technical text, annotations, secondary action, focus ring |
| `panel-gray` | #E5E7EB | neutral support: archived status, disabled controls |

**Refinements added for accessibility (same family):** `press-red` #C42634 is the primary button fill and the colour for small red text, because `comic-red` reaches only 3.86:1 on paper and 4.17:1 under white text. `press-red-dark` #A81E2B and `blue-dark` #163C6E are pressed states. `blue-light` #8FB4EA, `red-light` #FF7A84 and `red-bright` #F0505C are the accents used on ink. The paper and ink tints (`paper-bright`, `paper-shade`, `ink-raised`, `ink-sunken`, `ink-gray`, `ink-muted`, `paper-muted`, `line-paper`, `line-ink`) give surfaces depth without new hues. No other colours exist.

### Distribution

- About **70% paper, 20% ink, 10% accent** on any screen.
- **One lead accent per view.** Red leads in heroes and on primary actions, yellow in callouts and highlights, blue in technical sections. The other two may appear once each, small.
- Never put all three accents on one component. The single exception is the burst on an ink spread, which is yellow with red near it.

### Semantic tokens

- **Surfaces:** `bg-page` · `bg-panel` (lifted) · `bg-secondary` (alternating bands, placeholders) · `bg-neutral` · `bg-inverse` (an ink block on paper) · `bg-highlight` (yellow).
- **Text:** `text-primary` · `text-secondary` · `text-inverse` · `text-on-highlight` · `text-accent` (red emphasis) · `text-technical` (blue) · `text-disabled`.
- **Lines:** `border-ink` for every structural line and control boundary. `border-divider` for decorative hairlines only.
- **Actions:** `action-primary` / `-pressed` / `on-action-primary`, `action-secondary` / `-pressed` / `on-action-secondary`, `action-hover-fill` (yellow), `action-disabled`, `focus-ring`, `link-underline`.
- **Status:** `status-live`, `status-progress`, `status-featured` and `status-archived`, each with an `on-` partner. *Research* uses `bg-page` with a dashed ink border.
- **Decor:** `decor-shadow` (ink on paper, blue on ink), `decor-shadow-accent`, `decor-halftone`, `decor-grain`, `decor-marker`, `decor-burst`, `decor-annotation`.

### Accessible combinations (WCAG 2.x)

| foreground on background | paper theme | ink theme | allowed for |
|---|---|---|---|
| `text-primary` on `bg-page` / `bg-panel` | 16.59 / 17.60 | 16.59 / 14.91 | all text |
| `text-secondary` on `bg-page` / `bg-secondary` / `bg-neutral` | 7.44 / 6.70 / 6.48 | 8.65 / 9.18 / 6.11 | all text |
| `text-accent` on `bg-page` / `bg-secondary` / `bg-neutral` | 5.30 / 4.77 / 4.62 | 7.13 / 7.56 / 5.03 | all text |
| `text-technical` on `bg-page` / `bg-secondary` | 7.84 / 7.06 | 8.42 / 8.93 | all text |
| `on-action-primary` on `action-primary` | 5.30 | 5.12 | button labels |
| `on-action-secondary` on `action-secondary` | 7.84 | 8.42 | button labels |
| `text-on-highlight` on `bg-highlight` | 11.88 | 11.88 | all text |
| `comic-red` on `warm-paper` | 3.86 | — | **display ≥ 24px only**, marks |
| `focus-ring` against `bg-page` / `bg-panel` | 7.84 / 8.32 | 11.88 / 10.68 | focus indicator |

**Never:** white or paper text on `comic-yellow` (1.51:1). Small text in `comic-red`. `comic-blue` on ink (2.12:1). Yellow as a standalone mark on paper without an ink outline (1.40:1). Colour as the only signal: links carry an underline and status labels carry a word and a glyph.

## Typography

| role | family | token | desktop | mobile | weight / tracking |
|---|---|---|---|---|---|
| Hero | Barlow Condensed | `display-hero` | 128 / .88 | 60 / .9 | 800, −.01em, uppercase |
| Chapter / case title | Barlow Condensed | `display-1` | 88 / .9 | 48 / .92 | 800, uppercase |
| Section heading | Barlow Condensed | `heading-1` | 64 / .95 | 40 / .95 | 800, uppercase |
| Panel / featured title | Barlow Condensed | `heading-2` | 44 / 1 | 32 / 1 | 700, uppercase |
| Sub-section | Barlow Condensed | `heading-3` | 30 / 1.05 | 24 / 1.1 | 700 |
| Card / skill title | Barlow Condensed | `heading-4` | 22 / 1.1 | 20 / 1.15 | 700, .02em, uppercase |
| Chapter label | Barlow Condensed | `label-chapter` | 18 | 18 | 800, .14em, uppercase |
| Eyebrow | Barlow Condensed | `label-eyebrow` | 15 | 15 | 700, .16em, uppercase |
| Button | Barlow Condensed | `label-button` | 19 (17 small) | 19 | 700, .06em, uppercase |
| Nav | Barlow Condensed | `label-nav` | 18 | 32 in sheet | 700, .08em, uppercase |
| Lead | Inter | `body-lg` | 20 / 1.6 | 18 / 1.6 | 400 |
| Body | Inter | `body` | 17 / 1.65 | 16 / 1.65 | 400, max 68ch |
| Small / caption | Inter | `body-sm` | 15 / 1.55 | 15 | 400 |
| UI | Inter | `ui` | 15 / 1.3 | 15 | 500 |
| Tag / status | Inter | `label-ui` | 12 | 12 | 600, .08em, uppercase; the floor for any text |
| Annotation | IBM Plex Mono | `mono-annotation` | 14 / 1.4 | 14 | 500 |
| Metadata | IBM Plex Mono | `mono-meta` | 12 / 1.4 | 12 | 500, .06em, uppercase |
| Code | IBM Plex Mono | `mono-code` | 14 / 1.6 | 14 | 400 |

- **Fluid sizing:** each display style scales linearly from its mobile value at 375px to its desktop value at 1280px: `clamp(min, calc(intercept + slope·vw), max)`. For example, the hero is `clamp(60px, calc(31.8px + 7.51vw), 128px)`. Inside container-aware components, use `cqi` in place of `vw`.
- **Hierarchy per page:** one `display-hero` (the `h1`), `heading-1` per chapter (`h2`), `heading-2`/`heading-3` inside (`h3`). Don't skip heading levels for size; restyle instead.
- **Italic** Barlow is for the wordmark, the closing callout and an optional slanted hero. It is never used for running headings.
- **Comic lettering** lives only in display type, highlights and annotations. Never apply distressed, outlined or hand-lettered effects to paragraphs. An outlined (`-webkit-text-stroke`) word is allowed once in a hero, and the chapter numeral uses it.
- Fallbacks: `"Arial Narrow"`, then `"Roboto Condensed"`, then sans-serif for display; system UI for Inter; `ui-monospace` for Plex Mono.

## Layout and spacing

- **Spacing scale (4px base):** `space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 24 · `space-6` 32 · `space-7` 48 · `space-8` 64 · `space-9` 96 · `space-10` 128. Use no values outside the scale.
- **Breakpoints:** `bp-sm` 480 · `bp-md` 768 · `bp-lg` 1024 · `bp-xl` 1440. Components respond to their *container* (container queries) wherever possible. The page grid responds to the viewport.
- **Grid:** 12 columns, 24px gutters and 64px margins at ≥ 1024. 6 columns, 24px gutters and 32px margins at 768–1023. 4 columns, 16px gutters and 16px margins below 768.
- **Containers:** `container-max` 1280px for content, `container-wide` 1440px for framed full-bleed spreads, and `container-text` 68ch for prose. Above 1440px add paper margin, not wider panels.
- **Section spacing:** `space-10` top and bottom on desktop, `space-9` on tablet, `space-8` on mobile. Use `space-7` between panels in a spread (`space-5` on mobile).
- **Panel padding:** `space-6` standard, `space-7` featured, and `space-5` for both on mobile.
- **Aspect ratios:** `aspect-portrait` 4/5 · `aspect-tall` 3/4 · `aspect-wide` 16/9 · `aspect-cinema` 21/9 · `aspect-square` 1/1.

### Composition

- **Default to order.** Most rows are straight 12-column arrangements. Asymmetry (7/5, 8/4) is the default *split*. A centred layout is the exception.
- **Overlap rule:** an element may overlap another by **one step**: two grid columns horizontally, or `space-6` to `space-7` vertically. Overlaps happen on the bottom or side edge, never over a face, a subject, a caption or the other element's text. The overlapping element always sits on a solid surface (panel, bubble or callout) and gets `z-overlap`. Allow one overlap per viewport-height.
- **Angled frames:** at most one per viewport-height, and only for decorative panels (quote, chapter break, closing). Never use them for grids of things to scan.
- **Safe margins around decorative art:** bursts, arrows and halftone blocks keep `space-5` from text, and keep `space-3` clear for the offset shadow on the right and bottom of every shadowed element. Decoration never crosses the reading line.
- **Mobile simplifies; it doesn't shrink.** Below 768px use one column, drop overlaps to the small pull-up pattern (`space-6`), and remove angled cuts deeper than 12px, halftone blocks and secondary bursts. Keep one decorative gesture per section.

## Surfaces, borders and shadows

### Borders and radii

| line | weight | colour | used on |
|---|---|---|---|
| `border-hair` | 1px | `border-divider` | list rows, table rules |
| `border-control` | 2px | `border-ink` | buttons, tags, inputs, icon buttons, frames inside panels |
| `border-panel` | 3px (2px on mobile) | `border-ink` | panels, cards, image frames, callouts |
| `border-heavy` | 5px | `border-ink` | featured panel, hero frame, footer top rule (in `comic-red`) |

- **Square** (`radius-none`) is the default for every panel, frame, card, callout, nav and footer.
- **Slightly rounded** (`radius-xs`, 2px) is only for chip-sized interactive things: buttons, tags, status labels, inputs and icon buttons. It keeps them from looking like printed boxes.
- **Round** is reserved for the speech bubble (`radius-bubble`, 28px) and for panel-number discs or the round icon button (`radius-full`).
- **Angled** cuts are reserved for `AngledPanel`.

### Shadows

Hard offset shadows only: no blur and no spread. They always go down and to the right.

| token | value (paper) | rest state of | hover state of |
|---|---|---|---|
| `shadow-1` | 3px 3px ink | buttons, tags, icon buttons, callouts | — |
| `shadow-2` | 6px 6px ink | panels, project cards | buttons, icon buttons, social links |
| `shadow-3` | 10px 10px ink | featured panel | compact project cards |
| `shadow-accent` | 8px 8px `comic-red` | featured project **or** hero image, one per view | — |
| `shadow-none` | — | pressed state (the element sits down) | — |

On ink spreads the shadow prints in `comic-blue`, like a misregistered plate. Hover lifts by translate(−2px, −2px) and steps the shadow up one level. Press translates (3px, 3px) and removes it.

### The four surface treatments

1. **Paper**: `bg-page` + paper grain (`.doc-paper`: a 160px SVG noise tile at 22% multiply). Use it for the page body.
2. **Panel**: `bg-panel` + 3px ink border + `shadow-2`, with optional corner halftone. Use it for content units.
3. **Ink spread**: `data-theme="ink"`, the same components inverted with grain at 12% screen. Use it for the footer, the closing callout and at most one feature spread.
4. **Highlight**: `bg-highlight` + ink border + `shadow-1`. Use it for callouts and the yellow speech bubble.

A component uses one of these four, and nothing invents a fifth. **Avoid** glassmorphism, blurred or soft shadows, gradients, rounded "SaaS cards", and coloured left-border cards.

### Textures

- **Paper grain:** one tiled SVG noise at 6% ink (`decor-grain`). Apply it on the page or section, never per component.
- **Halftone:** CSS radial-gradient dots (`decor-halftone`, 8–14px pitch), masked to fade from one corner. Put it in panels, image overlays and motif blocks. Never put it under body text.
- **Print imperfection:** the only "imperfection" is the misregistered red plate on the wordmark, chapter numerals, panel numbers and the accent shadow. Don't add scratches, torn edges or fake ink bleed.
