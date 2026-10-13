# Doc portfolio: handoff to Claude Code

This folder contains everything needed to rebuild the approved "Doc" one-page portfolio (Mohamed Al-Majzoub) as a real, deployable web project.

## How to use it

1. Unzip this folder somewhere, for example `~/projects/doc-portfolio-handoff`.
2. Create an empty folder for the new project next to it, for example `~/projects/doc-portfolio`, and open Claude Code in that folder.
3. Paste the prompt below.

```text
Build my portfolio as a real project from the handoff bundle at ../doc-portfolio-handoff.
Read its README.md, HANDOFF.md and CLAUDE.md first, then follow HANDOFF.md exactly.
Use Next.js (App Router) with TypeScript and a static export, unless you see a strong reason not to; if so, ask me first.
Copy CLAUDE.md into this project's root, and copy public/ into this project's public/.
The approved design is the source of truth: match reference/static.html and the screenshots in reference/screenshots/ at 1440px and 390px.
Work in the order in HANDOFF.md's build plan, and check each section against the reference before moving on.
```

If you would rather put the bundle inside the new project, copy it into a `handoff/` folder there and change `../doc-portfolio-handoff` to `./handoff` in the prompt.

## What's inside

| Path | What it is |
|---|---|
| `HANDOFF.md` | The full build spec: sections, behaviours, the snap animation, content, accessibility, acceptance checks. |
| `CLAUDE.md` | Standing rules for the new project (copy it to the project root). |
| `reference/static.html` | A static render of the approved page. Open it in a browser. It is the exact markup and CSS, but has no JavaScript. |
| `reference/screenshots/` | Full-page desktop (1440px) and mobile (390px) screenshots, plus the snap animation frames. |
| `reference/snap-pose-references/` | Your three snap pose images, kept for future art changes. |
| `design-source/Main.dc.html` | The original design file: all markup, CSS (in its `<helmet><style>`), and the page logic. |
| `design-source/page-logic.js` | Just the page's script (state, links, contact details, behaviours), extracted for easy reading. |
| `design-system/` | The Doc design system: tokens (JSON and CSS), component CSS, the compiled component bundle, TypeScript props for every component, and per-component guidelines. |
| `public/fonts/` | Self-hosted WOFF2 fonts (Barlow Condensed, Inter, IBM Plex Mono; SIL OFL). |
| `public/images/` | Every image the page uses, with readable names. |
| `asset-map.json` | Maps each `/_blob/<id>` URL in the design source to its file in `public/images/`. |
