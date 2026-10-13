# Halftone

A dot-screen block: CSS radial-gradient dots (cheap, resolution-independent), faded with a mask.

## Props
`tone` (`ink` · `red` · `blue` · `yellow`), `mask` (`fade` left→right · `radial` · `solid`), `pitch` (px, default 10), `dot` (radius px, default 2.2), `width`, `height`.

## Limits
- Background only (`aria-hidden`, `z-texture`); never under body text — text sits on a solid panel.
- One halftone block per section; it should cover ≤ 25% of the viewport.
- Pitch 8–14px. Under 768px use pitch ≥ 12px or drop it.
- Yellow dots on paper read as noise; use yellow only on ink spreads.
