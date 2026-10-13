# TechTag

Technology tags and labels: `mono-meta` uppercase, 28px tall, 2px border, `radius-xs`.

| variant | look | use |
|---|---|---|
| `tag` | ink border on `bg-page` | project tags (max 4 on a compact card, 6 on featured) |
| `tech` | `text-technical` text and border | technology labels in skill lists and case-study stacks |
| `plain` | no border, 6px blue square bullet | dense lists, footers, meta rows |

`href` turns a tag into a filter link (hover: yellow fill + `shadow-1`, 32px tall). `icon` adds a 14px icon.

Group tags in a `<ul>` (the bundle's `Tags` helper does this). Use the technology's real name and casing in the data ("PyTorch", "GetX"); CSS uppercases it.
