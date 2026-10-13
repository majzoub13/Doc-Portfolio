// All contact details, links and repeated data for the page live here.
// Mirrors renderVals() in the design source (doc-portfolio-handoff/design-source/page-logic.js).
import type { HeroLine, LinkItem, MetaItem, NavItem, SocialItem } from '../components/doc';

import snapBase from '../assets/images/hero/snap-base.webp';
import snapHandContact from '../assets/images/hero/snap-hand-contact.webp';
import snapHandRelease from '../assets/images/hero/snap-hand-release.webp';
import logoAdlify from '../assets/images/logos/projects/adlify.png';
import logoCarlton from '../assets/images/logos/projects/carlton.svg';
import logoCartx from '../assets/images/logos/projects/cartx.png';
import logoKatakit from '../assets/images/logos/projects/katakit.png';
import logoTupcode from '../assets/images/logos/projects/tupcode-white.png';
import techFlutter from '../assets/images/logos/tech/flutter.svg';
import techJava from '../assets/images/logos/tech/java.svg';
import techLaravel from '../assets/images/logos/tech/laravel.svg';
import techPython from '../assets/images/logos/tech/python.svg';
import techReact from '../assets/images/logos/tech/react.svg';
import shotAdlify from '../assets/images/screenshots/adlify.jpg';
import shotCarlton from '../assets/images/screenshots/carlton.jpg';
import shotCartx from '../assets/images/screenshots/cartx.jpg';
import shotKatakit from '../assets/images/screenshots/katakit.jpg';
import shotMatchlensDashboard from '../assets/images/screenshots/matchlens-dashboard.jpg';
import shotMatchlensTracking from '../assets/images/screenshots/matchlens-tracking.jpg';

// ── Contact details ─────────────────────────────────────────────────────
export const EMAIL = 'mohamed13majzoub@gmail.com';
export const MAILTO = `mailto:${EMAIL}`;
const PHONE_DISPLAY = '+971 52 386 4849';
const PHONE_TEL = 'tel:+971523864849';
const WHATSAPP_URL = 'https://wa.me/971523864849';
export const GITHUB_URL = 'https://github.com/majzoub13';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/mohamed-al-majzoub-716904380';
export const TUPCODE_URL = 'https://tupcode.com';

// ── Images ──────────────────────────────────────────────────────────────
export const images = {
  snapBase,
  snapHandContact,
  snapHandRelease,
  logos: { adlify: logoAdlify, carlton: logoCarlton, cartx: logoCartx, katakit: logoKatakit, tupcode: logoTupcode },
  tech: { flutter: techFlutter, java: techJava, laravel: techLaravel, python: techPython, react: techReact },
  shots: {
    adlify: shotAdlify,
    carlton: shotCarlton,
    cartx: shotCartx,
    katakit: shotKatakit,
    matchlensDashboard: shotMatchlensDashboard,
    matchlensTracking: shotMatchlensTracking,
  },
};

// ── Sections tracked by the nav ─────────────────────────────────────────
export const SECTION_IDS = ['top', 'hq', 'work', 'capabilities', 'about', 'footprint', 'contact'] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export function navItems(active: string): NavItem[] {
  return [
    { label: 'Work', href: '#work', current: active === 'work' },
    { label: 'About', href: '#about', current: active === 'about' },
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'Contact', href: '#contact', current: active === 'contact' },
  ];
}

// ── Hero ────────────────────────────────────────────────────────────────
export const heroLines: HeroLine[] = ['I bridge engineering,', 'product, and business', 'to turn ideas into', { text: 'intelligent products.', style: 'ink' }];

// ── Project and profile details ─────────────────────────────────────────
export const mlMeta: MetaItem[] = [
  { label: 'My role', value: 'Idea Founder · System Architect · Football Domain Expert' },
  { label: 'Status', value: 'MVP with a live demo' },
];

export const tcMeta: MetaItem[] = [
  { label: 'My role', value: 'Co-founder · Manager · Head of Mobile Development' },
  { label: 'Website', value: 'tupcode.com' },
];

export const cxMeta: MetaItem[] = [
  { label: 'My role', value: 'Flutter Team Lead · Mobile App Development' },
  { label: 'Platform (TupCode)', value: 'Admin and seller dashboards, mobile app' },
];

export const aboutMeta: MetaItem[] = [
  { label: 'Degree', value: 'Information Technology Engineering — AI' },
  { label: 'University', value: 'Damascus University' },
  { label: 'Works across', value: 'AI · Software · Entrepreneurship' },
];

// ── Screenshots shown in the comic zoom viewer ──────────────────────────
export type ShotKey = 'ml1' | 'ml2' | 'ad' | 'cx' | 'kk' | 'ch';
export type Shot = { src: string; tag: string; caption: string; alt: string };

export const SHOTS: Record<ShotKey, Shot> = {
  ml1: {
    src: shotMatchlensTracking,
    tag: 'Fig. 02',
    caption: 'MatchLens · player and ball tracking',
    alt: 'MatchLens tracking view: numbered player and ball tracks on match footage, with a mini-map of positions',
  },
  ml2: {
    src: shotMatchlensDashboard,
    tag: 'Fig. 03',
    caption: 'MatchLens · analysis dashboard',
    alt: 'MatchLens dashboard: tracked video, tactical radar, engine metrics and an event log',
  },
  ad: {
    src: shotAdlify,
    tag: 'Adlify',
    caption: 'Fleet map with zones, filters and stats',
    alt: 'Adlify dashboard: a city map with zones and ad markers, with date and ad filters and trip stats',
  },
  cx: {
    src: shotCartx,
    tag: 'CartX',
    caption: 'Mobile app home screen',
    alt: 'CartX mobile app: home screen with search, a featured offer and the CartX Supermarket banner',
  },
  kk: {
    src: shotKatakit,
    tag: 'Katakit',
    caption: 'Biscuit detection dashboard',
    alt: 'Katakit dashboard: live and detection feeds of biscuits on the conveyor, rejected biscuits, and defect statistics',
  },
  ch: {
    src: shotCarlton,
    tag: 'Carlton Hotel',
    caption: 'Guest app services screen',
    alt: 'Carlton Hotel guest app: room status and a grid of services such as room service, laundry and concierge',
  },
};

// ── Contact ─────────────────────────────────────────────────────────────
export const contactLinks: LinkItem[] = [
  { label: 'Phone', meta: PHONE_DISPLAY, href: PHONE_TEL },
  { label: 'WhatsApp', meta: 'Message me', href: WHATSAPP_URL, external: true },
  { label: 'GitHub', meta: 'majzoub13', href: GITHUB_URL, external: true },
  { label: 'LinkedIn', meta: 'Mohamed Al-Majzoub', href: LINKEDIN_URL, external: true },
  { label: 'TupCode', meta: 'tupcode.com', href: TUPCODE_URL, external: true },
];

export const footerSocials: SocialItem[] = [
  { label: 'GitHub', handle: 'majzoub13', href: GITHUB_URL },
  { label: 'LinkedIn', handle: 'Mohamed Al-Majzoub', href: LINKEDIN_URL },
  { label: 'TupCode', handle: 'tupcode.com', href: TUPCODE_URL },
];
