import type { ReactNode } from 'react';
import { cx } from './cx';

/* ---------------- Media ---------------- */
type ImagePanelProps = {
  src: string;
  alt: string;
  treatment?: 't0' | 't1' | 't2';
  aspect?: 'portrait' | 'tall' | 'wide' | 'cinema' | 'square';
  focal?: string;
  figNo?: string;
  caption?: string;
  eager?: boolean;
};

export function ImagePanel({ src, alt, treatment = 't1', aspect, focal, figNo, caption, eager }: ImagePanelProps) {
  const style = {
    ...(aspect ? { '--doc-ar': `var(--aspect-${aspect})` } : null),
    ...(focal ? { '--doc-focal': focal } : null),
  } as React.CSSProperties;
  const frame = (
    <div className={cx('doc-frame', `doc-frame--${treatment}`)} style={style}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </div>
  );
  if (!caption && !figNo) return <div className="doc-figure">{frame}</div>;
  return (
    <figure className="doc-figure">
      {frame}
      <figcaption className="doc-cap">
        {figNo ? <span className="doc-cap__no">{figNo}</span> : null}
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}

/* ---------------- Comic pieces ---------------- */
export function SpeechBubble({
  speaker,
  tone = 'paper',
  tail,
  className,
  children,
}: {
  speaker?: string;
  tone?: 'paper' | 'yellow';
  tail?: 'left' | 'right';
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx('doc-bubble', tail === 'right' ? 'doc-bubble--right' : null, tone === 'yellow' ? 'doc-bubble--yellow' : null, className)}>
      {speaker ? <span className="doc-bubble__speaker">{speaker}</span> : null}
      <span>{children}</span>
      <svg className="doc-bubble__tail" viewBox="0 0 34 26" aria-hidden="true">
        <path d="M2 0 L30 0 L5 26 Z" />
        <path d="M6.5 0 L24.5 0 L8.5 17.5 Z" />
      </svg>
    </div>
  );
}

export function PanelNumber({
  size,
  variant = 'round',
  label,
  children,
}: {
  size?: number;
  variant?: 'round' | 'square';
  label?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cx('doc-pnum', variant !== 'round' ? `doc-pnum--${variant}` : null)}
      style={size ? ({ '--pnum': `${size}px` } as React.CSSProperties) : undefined}
      aria-label={label}
    >
      {children}
    </span>
  );
}

type SpeedLinesProps = { count?: number; width?: number; height?: number; direction?: 'left' | 'right'; fluid?: boolean; className?: string };

export function SpeedLines({ count = 9, width = 400, height = 120, direction, fluid, className }: SpeedLinesProps) {
  const lines = Array.from({ length: count }, (_, i) => {
    const y = ((i + 0.5) * height) / count;
    const len = width * (0.35 + ((i * 37) % 11) / 18);
    const x1 = direction === 'left' ? 0 : width - len;
    const x2 = direction === 'left' ? len : width;
    return <line key={i} x1={x1} y1={y} x2={x2} y2={y} strokeWidth={1.5 + ((i * 7) % 4)} />;
  });
  return (
    <svg
      className={cx('doc-speed', className)}
      viewBox={`0 0 ${width} ${height}`}
      width={fluid ? '100%' : width}
      height={fluid ? '100%' : height}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines}
    </svg>
  );
}

const ARROWS = {
  curve: { d: 'M6 48 C 30 10, 70 6, 104 22', head: 'M90 11 L105 22 L89 30' },
  loop: { d: 'M6 50 C 20 22, 50 14, 52 34 C 54 50, 30 50, 36 34 C 44 14, 80 10, 110 18', head: 'M97 7 L111 18 L96 27' },
  straight: { d: 'M6 30 C 40 26, 80 34, 110 28', head: 'M97 18 L111 28 L97 38' },
  down: { d: 'M20 6 C 10 30, 30 46, 70 52', head: 'M58 42 L71 52 L57 60' },
};

export function Arrow({
  variant = 'curve',
  tone = 'blue',
  width = 116,
  className,
}: {
  variant?: keyof typeof ARROWS;
  tone?: 'blue' | 'red' | 'ink' | 'yellow';
  width?: number;
  className?: string;
}) {
  const a = ARROWS[variant];
  return (
    <svg
      className={cx('doc-arrow', tone !== 'blue' ? `doc-arrow--${tone}` : null, className)}
      viewBox="0 0 116 60"
      width={width}
      height={(width * 60) / 116}
      aria-hidden="true"
    >
      <path d={a.d} />
      <path d={a.head} />
    </svg>
  );
}
