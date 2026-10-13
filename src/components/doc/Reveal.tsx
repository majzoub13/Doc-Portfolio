import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';
import { cx } from './cx';

type RevealProps = { as?: ElementType; variant?: 'wipe' | 'slide-x'; index?: number; show?: boolean; className?: string; children: ReactNode };

// Wipes or slides its content in once, the first time it enters the viewport.
// Under reduced motion (or without IntersectionObserver) it is shown immediately.
export function Reveal({ as: Tag = 'div', variant, index = 0, show = false, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(show);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  return (
    <Tag
      ref={ref}
      className={cx('doc-reveal', variant ? `doc-reveal--${variant}` : null, className)}
      data-in={shown ? 'true' : 'false'}
      style={{ '--i': Math.min(index, 5) } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
