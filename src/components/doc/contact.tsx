import { useEffect, useRef, useState } from 'react';
import { cx } from './cx';
import { Icon } from './Icon';
import { IconButton, Wordmark } from './actions';

export type LinkItem = { label: string; meta: string; href: string; external?: boolean };

export function LinkList({ items, className }: { items: LinkItem[]; className?: string }) {
  return (
    <ul className={cx('doc-linklist', className)}>
      {items.map((it) => (
        <li key={it.label}>
          <a className="doc-linklist__a" href={it.href} target={it.external ? '_blank' : undefined} rel={it.external ? 'noopener noreferrer' : undefined}>
            <span className="doc-linklist__label">{it.label}</span>
            <span className="doc-linklist__meta">{it.meta}</span>
            <Icon name={it.external ? 'arrow-up-right' : 'arrow-right'} />
            {it.external ? <span className="doc-sr"> (opens in a new tab)</span> : null}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function EmailLink({ address, copy }: { address: string; copy?: boolean }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const link = (
    <a className="doc-email" href={`mailto:${address}`}>
      {address}
    </a>
  );
  if (!copy) return link;

  const onCopy = () => {
    navigator.clipboard?.writeText(address).then(
      () => {
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 1800);
      },
      () => {},
    );
  };

  return (
    <span className="doc-email-wrap">
      {link}
      <IconButton icon={copied ? 'check' : 'copy'} label={copied ? 'Email address copied' : 'Copy email address'} onClick={onCopy} />
      <span className="doc-email__copied" role="status" aria-live="polite">
        {copied ? 'Copied' : ''}
      </span>
    </span>
  );
}

export type SocialItem = { label: string; handle: string; href: string };

function SocialLink({ label, handle, href }: SocialItem) {
  return (
    <a className="doc-social doc-social--bare" href={href} target="_blank" rel="noopener noreferrer">
      <span className="doc-social__label">{label}</span>
      <span className="doc-social__handle">{handle}</span>
      <Icon name="arrow-up-right" />
      <span className="doc-sr"> (opens in a new tab)</span>
    </a>
  );
}

type FooterProps = { brandHref?: string; tagline?: string; socials: SocialItem[]; legal: string };

export function Footer({ brandHref = '#', tagline, socials, legal }: FooterProps) {
  return (
    <footer className="doc-footer doc-paper" data-theme="ink">
      <div className="doc-footer__inner">
        <div>
          <Wordmark size="lg" withName href={brandHref} />
          {tagline ? <p className="doc-footer__tag">{tagline}</p> : null}
        </div>
        <div>
          <p className="doc-footer__h">Elsewhere</p>
          <ul className="doc-socials" style={{ flexDirection: 'column', gap: 0 }}>
            {socials.map((s) => (
              <li key={s.label}>
                <SocialLink {...s} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="doc-footer__base">
        <span>{legal}</span>
      </div>
    </footer>
  );
}
