# ClosingCallout

The last panel before the footer — the comic's "To be continued…": an ink spread (`data-theme="ink"`) with faint speed lines, a `display-1` italic title, one line of body, a primary button and a yellow burst.

## Props
`title` (default "To be continued…"), `body`, `action` (`{label, href}`), `burst` (burst text, or `false` to hide), `theme` (default `ink`).

## Rules
Once per page, directly above the footer. The burst is decorative; its words repeat nothing essential. Under 640px the burst moves above the title at 132px.
