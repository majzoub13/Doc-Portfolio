# Doc portfolio: project rules

The personal portfolio of Mohamed Al-Majzoub ("Doc"): AI engineer, software developer and technical founder. One page, comic-book art direction, built on the Doc design system.

## Source of truth
- The approved design is in the handoff bundle (`reference/static.html`, `reference/screenshots/`, `design-source/Main.dc.html`). Match it. Do not redesign, restyle, reorder sections or rewrite copy unless Mohamed asks.
- Design rules live in `design-system/README.md` and `design-system/components/*.md`. Follow them for anything new.

## Content rules
- Never invent facts, metrics, testimonials, client names, logos or URLs. All copy and links come from the design source. If something is missing, leave a visible `[TODO: …]` and say so.
- Contact details live in one place (`src/content/site.ts` or equivalent), never scattered through components.

## Engineering rules
- Use design tokens (CSS custom properties from `design-system/tokens.css`), not raw hex values, in new CSS.
- Self-host the fonts in `public/fonts/`; no Google Fonts request.
- Keep the page fully usable without JavaScript where practical (all text, links and images render server-side / at build time).
- No horizontal scrolling at any width from 320px up.
- Respect `prefers-reduced-motion`: no scroll reveals, no snap animation (show the static release pose), instant scrolling.
- Accessibility: real `<a>` and `<button>` elements, visible focus rings (`--focus-ring`), alt text as in the design source, one `h1`, no skipped heading levels, colour contrast as in the design system.
- Don't add analytics, cookies, trackers or third-party scripts without asking.

## Checks before calling work done
- Compare against `reference/screenshots/desktop-full-page.png` (1440px) and `mobile-full-page.png` (390px).
- `npm run build` passes with no type errors or lint errors.
- Keyboard-only pass: nav, mobile menu, screenshot zoom (open, close with Escape, focus returns), Replay snap.
- Reduced-motion pass.
