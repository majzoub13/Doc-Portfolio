# StatusLabel

Project status: word + glyph + fill, so it never relies on colour alone.

| status | glyph | fill / text | contrast |
|---|---|---|---|
| `live` | ● | `status-live` / `on-status-live` | 7.84:1 |
| `progress` | ◐ | `status-progress` / `on-status-progress` | 11.88:1 |
| `research` | ◇ | `bg-page`, dashed ink border | 16.59:1 |
| `featured` | ★ | `status-featured` / `on-status-featured` | 5.30:1 |
| `archived` | ■ | `status-archived` / `on-status-archived` | 6.48:1 |

`label-ui` (Inter 600, 12px, .08em, uppercase). Override the word with `children` ("Shipped", "Paused", "Prototype") but keep the status key that matches its meaning.
