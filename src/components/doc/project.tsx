import type { ReactNode } from 'react';
import { cx } from './cx';

export type MetaItem = { label: string; value: string };

export function ProjectMeta({ items, className }: { items: MetaItem[]; className?: string }) {
  return (
    <dl className={cx('doc-meta', className)}>
      {items.map((it) => (
        <div key={it.label} className="doc-meta__item">
          <dt>{it.label}</dt>
          <dd>{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TechTag({ children }: { children: ReactNode }) {
  return <span className="doc-tag">{children}</span>;
}

export function StatusLabel({ status = 'live', children }: { status?: 'live'; children?: ReactNode }) {
  return (
    <span className={cx('doc-status', `doc-status--${status}`)}>
      <svg className="doc-status__glyph" viewBox="0 0 10 10" aria-hidden="true">
        <circle cx={5} cy={5} r={4} fill="currentColor" />
      </svg>
      {children ?? 'Live'}
    </span>
  );
}
