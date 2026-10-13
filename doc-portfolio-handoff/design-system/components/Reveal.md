# Reveal

Wraps content that enters as it scrolls into view: a 16px rise plus a clip-path opening (`dur-reveal` 480ms, `ease-out`; clip on `ease-in-out`), staggered by `dur-stagger` (70ms) per `index`, capped at 5 steps.

## Props
`index` (stagger position), `variant` (default rise · `wipe` — clip from the left, for images and rules · `slide-x`), `as`, `show` (force visible).

## Rules
- Reveal panels, images and headings — never body paragraphs one by one, never navigation, never anything above the fold on load.
- Content is in the DOM and readable before and without the animation; the observer fires once.
- `prefers-reduced-motion: reduce` → no observer, content shown immediately, all transitions 0ms.
