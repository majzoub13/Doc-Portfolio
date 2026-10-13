# Motion

Motion is a **page turn**: cinematic, short and over before the reader would wait for it. Everything is built from three moves, *rise*, *wipe* and *lift*, and the tokens below.

## Tokens

| token | value | use |
|---|---|---|
| `dur-instant` | 80ms | press feedback |
| `dur-fast` | 140ms | hover shifts, colour and underline changes |
| `dur-base` | 240ms | card lift, menu open, image treatment change |
| `dur-reveal` | 480ms | entrance of a panel or image |
| `dur-stagger` | 70ms | delay between siblings, maximum 5 steps (350ms) |
| `ease-out` | cubic-bezier(0.2, 0.8, 0.2, 1) | entrances, hover lift |
| `ease-in-out` | cubic-bezier(0.65, 0, 0.35, 1) | clip-path wipes, menu |
| `ease-snap` | cubic-bezier(0.3, 1.4, 0.5, 1) | press release, burst pop (one small overshoot, never a loop) |

## Patterns

| pattern | how | where |
|---|---|---|
| **Entrance (rise)** | opacity 0 → 1, translateY 16px → 0, clip-path inset(0 0 12% 0) → 0; `dur-reveal`, `ease-out` | panels and headings as they enter the viewport (`Reveal`) |
| **Panel reveal (wipe)** | clip-path inset(0 100% 0 0) → 0; `dur-reveal`, `ease-in-out` | images, chapter rules, the hero frame |
| **Stagger** | `--i` × `dur-stagger`, at most 5 | sibling cards in a grid, skill categories |
| **Hover** | translate(−2px, −2px) plus one shadow step; `dur-fast` | buttons, icon buttons, tags, social links |
| **Card hover** | translate(−3px, −3px) to `shadow-3`, image scale 1.03; `dur-base` | compact project cards |
| **Button feedback** | press: translate(3px, 3px), shadow none, darker fill; `dur-instant`. Release: `ease-snap` | all buttons |
| **Link / marker** | yellow background-size 0 → 100%; `dur-fast` (`dur-base` for rows) | text links, link lists, email |
| **Image interaction** | `interactive` frames fade the treatment out and settle at scale 1.02; `dur-base` | gallery and project images where the untreated original matters |
| **Section transition** | one chapter rule wipes in (72px red bar), then the heading rises; no full-screen transitions | each chapter opener |
| **Menu** | the sheet appears with a 120ms wipe from the top; `ease-in-out` | mobile nav |

## Don'ts

No constant bouncing or pulsing, parallax deeper than 0, cursor-following elements, particles, scroll hijacking or snapping, auto-advancing carousels, typing effects on headlines, or anything that hides content until an animation ends. Above-the-fold content is visible on first paint. Reveals apply only below the fold and run once.

## Reduced motion

Under `prefers-reduced-motion: reduce`:

- `Reveal` skips the observer and renders content immediately.
- All durations and delays become 0ms, and hover translates are removed. Colour changes and shadow steps remain, so state is still visible.
- Bursts don't pop, and menus appear without a wipe.

Every interaction works identically with motion off.
