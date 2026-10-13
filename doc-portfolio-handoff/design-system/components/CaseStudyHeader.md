# CaseStudyHeader

The top of a case-study page: "CASE FILE 01" label + status, a `display-1` title (88 → 48px), lead paragraph and links in the right column, a `ProjectMeta` strip, then a hero frame in 21/9 (16/9 on small containers) with `shadow-accent`.

## Props
`fileNo`, `status`, `title` (the page `h1`), `lead`, `meta` (ProjectMeta items), `links` (ProjectLinks props), `image` (ImagePanel props; defaults `treatment: t1`, `frame: hero`, eager loading).

## Layout
Desktop: title 7 columns, lead 5, bottoms aligned. Under a 760px container: one column, title → lead → links → meta → image. The title is the only `h1` on the page.

## Rules
The hero image is evidence — real product, footage or diagram output, T0 or T1. Don't use a portrait here.
