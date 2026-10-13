import type { ReactNode } from 'react';
import { cx } from './cx';

export type HeroLine = string | { text: string; style: 'ink' | 'marker' };

export function Highlight({ variant = 'marker', children }: { variant?: 'marker' | 'ink'; children: ReactNode }) {
  return <span className={cx('doc-hl', `doc-hl--${variant}`)}>{children}</span>;
}

export function HeroHeadline({ lines, className }: { lines: HeroLine[]; className?: string }) {
  return (
    <h1 className={cx('doc-hero', className)}>
      {lines.map((ln, i) =>
        typeof ln === 'string' ? (
          <span key={i} className="doc-hero__line">
            {ln}
          </span>
        ) : (
          <span key={i} className="doc-hero__line">
            <Highlight variant={ln.style}>{ln.text}</Highlight>
          </span>
        ),
      )}
    </h1>
  );
}

export function ChapterLabel({
  number,
  title,
  prefix = 'Chapter',
  className,
}: {
  number: number | string;
  title?: string;
  prefix?: string;
  className?: string;
}) {
  const num = typeof number === 'number' && number < 10 ? `0${number}` : number;
  return (
    <span className={cx('doc-chapter', className)}>
      <span className="doc-chapter__mark" aria-hidden="true" />
      <span>{`${prefix} ${num}`}</span>
      {title ? (
        <>
          <span className="doc-chapter__sep" aria-hidden="true">
            —
          </span>
          <span className="doc-chapter__title">{title}</span>
        </>
      ) : null}
    </span>
  );
}

type SectionHeadingProps = { chapter?: number | string; chapterTitle?: string; title: ReactNode; intro?: ReactNode; id?: string; className?: string };

export function SectionHeading({ chapter, chapterTitle, title, intro, id, className }: SectionHeadingProps) {
  return (
    <div className={cx('doc-section-heading', className)}>
      {chapter != null ? <ChapterLabel number={chapter} title={chapterTitle} /> : null}
      <h2 className="doc-section-heading__title" id={id}>
        {title}
      </h2>
      <span className="doc-section-heading__rule" aria-hidden="true" />
      {intro ? <p className="doc-section-heading__intro">{intro}</p> : null}
    </div>
  );
}

export function Prose({ lead, className, children }: { lead?: boolean; className?: string; children: ReactNode }) {
  return <div className={cx('doc-prose', lead ? 'doc-prose--lead' : null, className)}>{children}</div>;
}
