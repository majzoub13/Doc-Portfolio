import { createElement } from 'react';
import { cx } from './cx';

// 24-grid, 2px stroke, square caps, miter joins. Only the icons this page uses.
type Part = [tag: 'path' | 'rect', attrs: Record<string, string | number>];
const ICONS = {
  'arrow-right': [
    ['path', { d: 'M4 12h15' }],
    ['path', { d: 'M13 6l6 6-6 6' }],
  ],
  'arrow-up-right': [
    ['path', { d: 'M7 17L17 7' }],
    ['path', { d: 'M8 7h9v9' }],
  ],
  mail: [
    ['rect', { x: 3, y: 5, width: 18, height: 14 }],
    ['path', { d: 'M3 6l9 7 9-7' }],
  ],
  menu: [
    ['path', { d: 'M3 6h18' }],
    ['path', { d: 'M3 12h18' }],
    ['path', { d: 'M3 18h12' }],
  ],
  close: [
    ['path', { d: 'M5 5l14 14' }],
    ['path', { d: 'M19 5L5 19' }],
  ],
  copy: [
    ['rect', { x: 8, y: 8, width: 13, height: 13 }],
    ['path', { d: 'M16 8V3H3v13h5' }],
  ],
  check: [['path', { d: 'M4 12l5 5L20 6' }]],
  'chevron-down': [['path', { d: 'M6 9l6 6 6-6' }]],
} satisfies Record<string, Part[]>;

export type IconName = keyof typeof ICONS;

export function Icon({ name, className, size = 24, title }: { name: IconName; className?: string; size?: number; title?: string }) {
  const parts: Part[] = ICONS[name];
  return (
    <svg
      className={cx('doc-icon', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      aria-label={title}
      focusable="false"
    >
      {parts.map(([tag, attrs], i) => createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
