import { useState } from 'react';
import { cx } from './cx';
import { IconButton, Wordmark } from './actions';

export type NavItem = { label: string; href: string; current?: boolean };

type NavProps = { items: NavItem[]; brandHref?: string; label?: string; sheetId?: string };

export function Nav({ items, brandHref = '#', label = 'Primary', sheetId = 'doc-nav-sheet-1' }: NavProps) {
  const [open, setOpen] = useState(false);

  const list = (extra?: string) => (
    <ul className={cx('doc-nav__list', extra)}>
      {items.map((it) => (
        <li key={it.label}>
          <a className="doc-nav__link" href={it.href} aria-current={it.current ? 'page' : undefined}>
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="doc-nav">
      <nav aria-label={label}>
        <div className="doc-nav__bar">
          <Wordmark href={brandHref} size="sm" />
          {list('doc-nav__list--desk')}
          <div className="doc-nav__actions">
            <IconButton
              className="doc-nav__menu"
              icon={open ? 'close' : 'menu'}
              label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls={sheetId}
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        {/* A tap on a sheet link closes the sheet so the chosen section isn't hidden under it. */}
        <div
          id={sheetId}
          className="doc-nav__sheet"
          data-open={open ? 'true' : 'false'}
          onClick={(e) => {
            if ((e.target as Element).closest('a')) setOpen(false);
          }}
        >
          {list()}
        </div>
      </nav>
    </header>
  );
}
