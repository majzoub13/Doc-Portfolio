# Build spec: Doc portfolio

Rebuild the approved one-page portfolio as a production web project. The visual design, copy and behaviour are final. This is a port, not a redesign.

## 1. Sources, in order of authority

1. `reference/static.html`: the exact rendered markup and CSS of the approved page (open it in a browser). When in doubt about structure or class names, copy from here.
2. `reference/screenshots/desktop-full-page.png` (1440px wide) and `mobile-full-page.png` (390px): what it must look like.
3. `design-source/Main.dc.html`: the original design file. `design-source/page.css` is its stylesheet, with image URLs already rewritten to `/images/...`. `design-source/page-logic.js` is its script (state, data, behaviours).
4. `design-system/`: the Doc design system. `README.md` (principles, colour, type, spacing, surfaces), `tokens.css` and `tokens.json`, `components/bundle.css` (component styles), `components/index.d.ts` (every component's props), `components/<Name>.md` (per-component rules) and `guidelines/` (iconography, imagery, motion, responsive, accessibility, implementation).

The design file uses a canvas template syntax: `{{name}}` holes are filled from `renderVals()` in the script, `<sc-if>`/`<sc-for>` are conditionals and loops, and `<x-import component-from-global-scope="Doc.X">` mounts a Doc component with the attributes as props. `/_blob/<id>` URLs are images; `asset-map.json` maps each to `public/images/...`.

## 2. Recommended stack

- Next.js (App Router) + TypeScript, `output: 'export'` (a static site, deployable to Vercel, Netlify, Cloudflare Pages or GitHub Pages).
- Plain CSS: `tokens.css` + `bundle.css` + the page CSS as global styles to start, then split into per-section files if useful. No Tailwind or CSS-in-JS is needed; the existing CSS is the spec.
- Fonts self-hosted from `public/fonts/` with `@font-face` (weights: Barlow Condensed 600/700/800 + 700/800 italic, Inter 400/500/600/700, IBM Plex Mono 400/500). Remove the Google Fonts `<link>` from the design source.
- Images served from `public/images/`. `next/image` is optional (with static export it needs `unoptimized: true`). Keep `loading="lazy"` below the fold and eager loading for the hero art.

## 3. The Doc components

The design mounts these Doc components (count in brackets): Nav (1), HeroHeadline (1), Button (4), SectionHeading (5), ChapterLabel (1), Prose (3), Reveal (34), ImagePanel (2), ProjectMeta (4), StatusLabel (1), TechTag (20), PanelNumber (4), SpeechBubble (1), SpeedLines (3), Arrow (1), EmailLink (1), LinkList (1), Footer (1).

Port each one as a typed React component in `src/components/doc/`, using the props in `design-system/components/index.d.ts` and producing **the same DOM and class names** you see in `reference/static.html`, so `bundle.css` styles them unchanged. `design-system/components/bundle.js` is the compiled original (React 18, exposed on `window.Doc`). Read it for behaviour details such as the Nav mobile sheet and EmailLink copy, but don't ship it as a global script.

## 4. Page structure

One page, top to bottom. Section ids are used by the nav and in-page links; keep them.

| # | Element | id | Theme | Content summary |
|---|---|---|---|---|
| | Header (Doc.Nav) | | paper | Wordmark; Work, About, GitHub (external), Contact; mobile sheet menu |
| 01 | Hero | `top` | paper | Chapter label, 4-line hero headline (last line ink block), role strip, intro paragraph, "Explore my work" / "Get in touch" buttons, the **snap character panel** with a Replay snap button |
| 02 | HQ: TupCode | `hq` | yellow scene | "Base of operations": the Syria map, the origin story ("From Damascus to the world.", 2024), founders and team counts, principles, and the "What we build" services |
| 03 | Selected work | `work` | ink | Case files: MatchLens (with two zoomable screenshots and a "live" status), Adlify, CartX, Katakit, Carlton Hotel; each with its logo, details, tech tags and a zoomable screenshot thumbnail |
| 04 | Capabilities | `capabilities` | paper | "How Doc works": three "power" panels (AI & intelligent systems; Software & product engineering; Product & entrepreneurship) |
| 05 | About | `about` | paper (bright) | "Behind Doc": quote, degree, university, "works across", bio paragraphs |
| 06 | Technical footprint | `footprint` | ink on blue | Frameworks (Flutter, React, Laravel) and languages (Python, Java) with tech logos |
| 07 | Contact | `contact` | ink | "Let's build something meaningful.", email headline with copy button, Send an email, Direct lines list (phone, WhatsApp, GitHub, LinkedIn, TupCode), "To be continued…" |
| | Footer (Doc.Footer) | | ink | Wordmark, tagline, Elsewhere links, © 2026 |

Copy every string, alt text and aria-label from the design source. Put all data (contact details, nav items, project meta, screenshot captions and alts) into one typed content module, `src/content/site.ts`, mirroring `renderVals()` in `page-logic.js`.

## 5. Behaviours to implement

All of these are in `design-source/page-logic.js`; port them to React state and hooks in client components (`'use client'`), keeping everything else server-rendered.

1. **Active section in the nav.** An IntersectionObserver with `rootMargin: '-45% 0px -50% 0px'` watches `top, hq, work, capabilities, about, footprint, contact`. The matching nav item gets `current` (`aria-current="page"`).
2. **In-page links.** Clicking any `a[href^="#"]` scrolls the target into view (`smooth`, or `auto` under reduced motion), waiting two animation frames so a closing mobile menu releases the page first.
3. **Mobile menu.** Tapping a link inside the Nav sheet closes the sheet.
4. **Scroll reveals (Doc.Reveal).** Elements wipe or slide in once as they enter the viewport; they are fully visible with no animation under reduced motion. If JavaScript fails, content must still be visible.
5. **Screenshot zoom viewer.** Six screenshots (`SHOTS` in page-logic.js: ml1, ml2, ad, cx, kk, ch). Hover or focus on a thumbnail shows a "peek" preview (mouse leave or blur hides it); click pins it open as a dialog with a close button. Escape closes it; when pinned, clicking the backdrop closes it. Focus moves to the close button when pinned and returns to the thumbnail when closed. The comic-style open animation is in `page.css` (search `zoom`).
6. **The snap (hero).** See section 6.

## 6. The snap animation

The hero character is three stacked layers in one SVG (`viewBox="0 0 878 1368"`, `preserveAspectRatio="xMaxYMin slice"`, so the gauntlet stays in frame at any panel width):

| Layer | File | Placement |
|---|---|---|
| Base: face, torso, resting hand (pose 1) | `/images/hero/snap-base.webp` | x 0, y 0, 878 × 1368 |
| Hand, contact (pose 2) | `/images/hero/snap-hand-contact.webp` | x 580, y 250, 298 × 880 |
| Hand, release (pose 3) | `/images/hero/snap-hand-release.webp` | x 580, y 250, 298 × 880 |

The face and torso never move; only the hand layers swap. On top sit SVG effects: an aura, a gathering ring at the contact point, 22 speed lines, a four-colour ring, a flash star and core, 16 particles, 3 trails and a "SNAP!" burst. Copy the SVG markup from `reference/static.html` (search `sx-scene`) and the CSS from `page.css` (section "Hero: THE SNAP (layered artwork)"). Keep these timings:

| Time (of 2200 ms) | Beat |
|---|---|
| 0–700 ms | Anticipation: pose 1 at rest, aura builds, ring gathers at the fingertips |
| 700–1050 ms | Contact: pose 2 presses in, small tension tremble |
| 1050 ms | Snap: instant cut to pose 3 with a sharp flick |
| 1050–1950 ms | Impact: flash, speed lines, ring, particles, trails, SNAP! burst |
| 1640–1800 ms | Recovery: pose 3 fades back to pose 1 |

- **Start:** the CSS timeline runs when the wrapper has the class `sn--play`. Add `sn--ready sn--play` once the base image has loaded. If it fails or takes longer than 2.5 s, start anyway (add `sn--nochar` on error).
- **Replay snap button:** removes `sn--play`, waits two animation frames, then adds it back. It must work by mouse and keyboard.
- **Reduced motion:** no animation; show pose 3 (the release) as a still and hide the Replay button.
- The SVG has `role="img"` and an aria-label describing the illustration.
- `reference/screenshots/snap-frames.png` shows the expected frames; `reference/snap-pose-references/` holds the three source poses.

## 7. Responsive and accessibility

- The breakpoints, mobile simplifications and tablet rules are in `page.css` (sections "Tablet" and "Mobile") and `design-system/guidelines/4-responsive.md`. At 390px, match `mobile-full-page.png`.
- No horizontal overflow at any width ≥ 320px.
- Reduced motion: see `page.css` "Motion" and `guidelines/3-motion.md`.
- Follow `guidelines/5-accessibility.md`: one `h1` (the hero headline), section `h2`s, focus rings, 44px tap targets, external links marked "(opens in a new tab)" for screen readers as in the design.

## 8. SEO and metadata (new; not in the design)

- `<title>`: "Mohamed Al-Majzoub — AI Engineer, Software Developer, Technical Founder" (or ask Mohamed).
- Meta description built only from the hero intro sentence. Open Graph and Twitter tags, `lang="en"`, a favicon. Ask Mohamed which image to use for the social preview; don't invent one.
- JSON-LD `Person` with only facts already on the page (name, job titles, the GitHub and LinkedIn URLs, alma mater Damascus University).

## 9. Build plan

1. Scaffold the project, add fonts, tokens, `bundle.css` and `page.css`, and the images.
2. Port the Doc components used on the page (section 3), checking each against `static.html`.
3. Build the content module, then the sections in page order. After each one, compare it with the screenshots at 1440px and 390px.
4. Add the behaviours (section 5) and the snap (section 6).
5. Metadata (section 8), then a production build and static export.
6. Final checks (section 10). Deployment target: ask Mohamed (Vercel is the default suggestion).

## 10. Acceptance checks

- [ ] Visually matches both full-page screenshots; page height at 1440px is about 13,130px.
- [ ] All links, phone, WhatsApp and email work; no `/_blob/` URLs remain anywhere.
- [ ] Nav highlights the current section; in-page links scroll correctly on desktop and mobile; the mobile menu closes after a tap.
- [ ] Zoom viewer: hover peek, click to pin, Escape and backdrop close, focus returns.
- [ ] Snap plays once on load, Replay works by mouse and keyboard, reduced motion shows the static release pose with no button.
- [ ] No horizontal overflow at 320, 390, 768, 1024 and 1440px.
- [ ] Lighthouse: Accessibility and SEO 100, Performance ≥ 90 on mobile.
- [ ] `npm run build` clean; no console errors.

## 11. Open items for Mohamed

- **Gauntlet artwork:** the gold gauntlet with coloured stones and the chest emblem closely resemble Marvel's Infinity Gauntlet and a franchise logo. Consider an original redesign before wide promotion.
- **Hero art resolution:** the snap layers were upscaled from fairly small source images. Higher-resolution originals, aligned the same way, would make the hero sharper on large screens.
- Domain, hosting account and social preview image.
