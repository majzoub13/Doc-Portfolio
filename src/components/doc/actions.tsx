import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from './cx';
import { Icon, type IconName } from './Icon';

/* ---------------- Brand ---------------- */
export function Wordmark({ href, size, withName, className }: { href?: string; size?: 'sm' | 'md' | 'lg'; withName?: boolean; className?: string }) {
  const inner = (
    <>
      <span className="doc-wordmark__type">Doc</span>
      {withName ? (
        <span className="doc-wordmark__name">
          Mohamed
          <br />
          Al-Majzoub
        </span>
      ) : null}
    </>
  );
  const cls = cx('doc-wordmark', 'doc-wordmark--type', size && size !== 'md' ? `doc-wordmark--${size}` : null, className);
  if (href)
    return (
      <a className={cx(cls, 'doc-focus')} href={href} aria-label="Doc — Mohamed Al-Majzoub, home">
        {inner}
      </a>
    );
  return <span className={cls}>{inner}</span>;
}

/* ---------------- Actions ---------------- */
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md';
  icon?: IconName;
  iconPosition?: 'start' | 'end';
  className?: string;
  children: ReactNode;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>;

export function Button({ variant = 'primary', size, icon, iconPosition, className, children, href, ...rest }: ButtonProps) {
  const lead = icon && iconPosition === 'start';
  const cls = cx('doc-btn', `doc-btn--${variant}`, size === 'sm' ? 'doc-btn--sm' : null, className);
  const kids = (
    <>
      {lead ? <Icon name={icon} className="doc-btn__icon" /> : null}
      <span>{children}</span>
      {icon && !lead ? <Icon name={icon} className="doc-btn__icon doc-btn__icon--trail" /> : null}
    </>
  );
  if (href)
    return (
      <a className={cls} href={href} {...rest}>
        {kids}
      </a>
    );
  return (
    <button type="button" className={cls}>
      {kids}
    </button>
  );
}

type IconButtonProps = {
  icon: IconName;
  label: string;
  variant?: 'square' | 'round' | 'ink';
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function IconButton({ icon, label, variant = 'square', className, ...rest }: IconButtonProps) {
  const cls = cx('doc-iconbtn', variant === 'round' ? 'doc-iconbtn--round' : null, variant === 'ink' ? 'doc-iconbtn--ink' : null, className);
  return (
    <button type="button" className={cls} aria-label={label} title={label} {...rest}>
      <Icon name={icon} />
    </button>
  );
}
