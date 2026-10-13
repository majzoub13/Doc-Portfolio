# Photography and image treatment

The site uses **real photographs of Mohamed and genuine project assets**. Nothing in this system invents a face or claims to show him. Generic sample images (the Samples asset group) exist only to demonstrate treatments. Every sample is stamped "Sample image" (`ImagePanel sample`) and must be replaced before launch.

## Treatment levels

| level | look | halftone | ink outline | colour |
|---|---|---|---|---|
| **T0 Evidence** | untouched | none | frame only | full, unaltered |
| **T1 Print** | +6% contrast, −8% saturation | 5px screen, ~8% ink | frame only | full colour |
| **T2 Graphic** | mono, contrast 1.3 | 7px screen, ~15% ink | frame; optional 2px subject edge (baked) | one accent plate: blue (default), red or yellow |
| **T3 Cover** | mono, contrast 1.6, crushed blacks | 8px ink screen in the shadows, fading in from one edge | 3px subject edge (baked) | red plate in the lower third, or a solid accent block behind the cut-out subject |

## Where each level goes

| image type | level | aspect | frame | notes |
|---|---|---|---|---|
| Hero portrait | **T3** | 4/5 desktop, 3/4 mobile | `hero`: 5px + `shadow-accent` | eyes on the upper third line. Real photo only; placeholder until supplied |
| Secondary portrait (About) | **T2**, blue plate | 4/5 or 1/1 | standard | candid or at work; one per page |
| Project screenshots | **T1** (T0 in a case study's evidence) | 16/9 | standard / flat in compact cards | crop to the feature being discussed; never retouch UI |
| Football analysis imagery | **T0** for detections and tracking output; **T1** for mood stills | 16/9, 21/9 for the case header | standard | overlays (boxes, IDs, heatmaps) must stay legible, so never put mono or plates over them |
| Technical diagrams | **T0** | 16/9 or 1/1 | standard | redraw in ink, paper, blue and red where possible; otherwise use the original as is |
| Product imagery (app screens, devices) | **T1** | 1/1 or 4/5 | standard | on a `bg-secondary` field; no fake device reflections |

Rule of thumb: **the more an image proves, the lighter its treatment.** Any image you make a claim about stays at T0 or T1.

## Cropping

- Portraits: the head and shoulders fill 60–75% of the frame height, and the eyes sit at 33–40% from the top. Never crop through the eyes or chin. Use `focal` (`object-position`) to keep the face in frame as the aspect changes.
- Screenshots: crop to the relevant UI with at least `space-4` of surrounding interface. Don't scale text below about 11px effective.
- Footage stills: keep the ball and the annotated players inside the central 80%.
- **Mobile cropping:** the hero portrait switches to 3/4 and centres on the face. The case-study header drops from 21/9 to 16/9. Gallery lead panels become 16/9. Provide art-directed sources (`<picture>` with a 3/4 crop) rather than relying on `object-fit` alone for the portrait.

## Producing T2 and T3

The CSS treatments in `ImagePanel` are a live fallback. For production, bake derivatives offline (Photoshop actions, or a Python/OpenCV script) so the browser ships a single flat image:

1. Desaturate and set levels: the black point at 8–12%, the white point at 92–95%.
2. **Ink layer:** run edge detection (Canny or a high-pass threshold) on the subject mask only, dilated to 2px (T2) or 3px (T3), and fill it `ink-black`. Never outline the background.
3. **Halftone:** apply a 45° round-dot screen to the shadows and midtones only (below 55% luminance) at the level's pitch. Keep skin highlights clean.
4. **Plate:** multiply one accent (`comic-red`, `comic-blue` or `comic-yellow`) on its own layer, offset 6–8px from the subject for the misregistered-print look.
5. Export WebP/AVIF at 2× the display size. Hero portraits should be at most 180KB and project images at most 120KB. Then render with `treatment="t0"` so the CSS doesn't double-process.

Facial features stay realistic and recognisable. Don't use posterisation that erases the eyes, cartoon filters, AI restyling, or face retouching that changes proportions.

## Contrast and readability

- Never put text directly on a photograph. Captions go below the frame. If a label must sit over an image, it goes on a solid chip (`doc-sample`, `doc-panel__label` style).
- Overlaid annotation arrows and notes use `decor-annotation` on T0/T1 images only, and the note itself sits outside the frame.
- Check the treated image at 50% zoom: if the subject is unreadable, step down a level.

## Placeholders

When a real asset isn't available, render `ImagePanel` with `placeholder`: `bg-secondary` with diagonal hatching, an icon for the kind, the kind name in an ink-boxed label, and the spec (for example "4:5 · T3 · asset pending"). Never substitute a stock person, an illustration of a person, a blurred face or an AI-generated likeness.

## Alt text

- Portraits: "Mohamed Al-Majzoub, [what he's doing / where]", for example "Mohamed Al-Majzoub presenting MatchLens at his graduation defence."
- Evidence images: say what the image shows **and** what it proves, for example "Broadcast frame with every player boxed and numbered; the ball carrier is tracked across the cut."
- Diagrams: summarise the flow in one sentence, and put the full description in adjacent text.
- Decorative images and textures: `alt=""` (motifs are already `aria-hidden`).
