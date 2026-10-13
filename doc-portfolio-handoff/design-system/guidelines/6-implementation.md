# Implementation reference

## Files

| file | what |
|---|---|
| `tokens.json` → `tokens.css` | all tokens. Colours become `--<name>` per theme (`:root, [data-theme="paper"]`, `[data-theme="ink"]`), and spacing, radius, border, layout, aspect, duration, easing and zIndex become `--<name>` on `:root`. Families become `--font-display`, `--font-sans` and `--font-mono` |
| `fonts/*.woff2` | Barlow Condensed, Inter and IBM Plex Mono (Latin, OFL) |
| `components/bundle.css` | component styles, all `doc-` prefixed, reading only token variables |
| `components/bundle.js` | `window.Doc` with React 18 components |
| `components/index.d.ts` | props for every component |
| `components/<Name>/README.md` | guidelines per component |
| `assets/Icons`, `assets/Motifs` | single-ink SVG exports of the icon set and motifs |
| `assets/Samples` | generic sample images for demonstrating treatments only, **not** for the site |

## Token naming

- Primitives are named for what they are: `comic-red`, `paper-shade`, `ink-raised`.
- Semantics are named `<role>-<variant>`: `bg-panel`, `text-technical`, `border-ink`, `action-primary-pressed`, and `on-<fill>` for text on a fill.
- Scales are named `<family>-<step>`: `space-6`, `shadow-2`, `dur-base`, `aspect-wide`.
- Components never use a hex value or a primitive colour. The only exceptions are the brand-plate effects (`comic-red` misregistration), which are by definition the brand colour.

## Using the components

```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="react.production.min.js"></script>
<script src="react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { Panel, Button, ProjectCard } = window.Doc;
</script>
```

In a React app, port the components into source modules by copying the class names and props one-to-one. The CSS works unchanged.

## Inventory

| group | components |
|---|---|
| Brand | Wordmark |
| Navigation | Nav |
| Actions | Button · TextLink · IconButton |
| Typography | HeroHeadline · SectionHeading · ChapterLabel · Eyebrow · Prose · Annotation · Highlight |
| Panels | Panel · AngledPanel · ImagePanel · ChapterPanel · Callout · SpeechBubble |
| Projects | ProjectCard (featured, compact) · ProjectMeta · TechTag · StatusLabel · CaseStudyHeader · Gallery · ProjectLinks |
| Technical | SkillCategory · MetaRow · LinkList · Icon |
| Contact | EmailLink · SocialLink · ContactCTA · ClosingCallout |
| Footer | Footer |
| Motifs | Burst · Halftone · SpeedLines · Arrow · InkStroke · PanelNumber |
| Motion | Reveal |

The **Composition** card is a specimen spread showing proportion and accent budget. It is not the portfolio layout.

## Rules a page build must follow

1. Paper page with grain. Ink spreads only for the footer, the closing callout and at most one feature section.
2. One `h1`, one hero, one primary button per view, one featured panel with `shadow-accent` per view.
3. One lead accent colour per view. Put no more than three decorative marks on screen at once.
4. Square panels, 3px ink borders and hard shadows. Rounding only for chips, the bubble and discs.
5. One overlap per viewport-height, by one step, never over faces, subjects, captions or text.
6. Evidence images at T0–T1. T3 for the hero portrait only.
7. Use container-responsive components and drop decoration below 768px. Nothing may scroll sideways.
8. Every interactive element is ≥ 44px with the 3px focus ring. Every animation respects reduced motion.
