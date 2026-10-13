import type * as React from 'react';

type IconName = 'arrow-right' | 'arrow-up-right' | 'external' | 'mail' | 'menu' | 'close' | 'code' | 'cpu' | 'layers' | 'database' | 'play' | 'file' | 'branch' | 'link' | 'eye' | 'ball' | 'download' | 'pin' | 'user' | 'spark' | 'chart' | 'copy' | 'image' | 'chevron-down' | 'check';
type DocState = 'hover' | 'pressed' | 'focus';
type Status = 'live' | 'progress' | 'research' | 'featured' | 'archived';
type Treatment = 't0' | 't1' | 't2' | 't3';
type Aspect = 'portrait' | 'tall' | 'wide' | 'cinema' | 'square';
interface LinkSpec { href: string; label?: string; icon?: IconName }

/** The "Doc" wordmark, set in type. */
export interface WordmarkProps { variant?: 'type' | 'tile'; size?: 'sm' | 'md' | 'lg'; withName?: boolean; href?: string; className?: string }
export declare function Wordmark(props: WordmarkProps): React.ReactElement;

/** Site header with container-responsive mobile sheet. */
export interface NavProps { items: { label: string; href?: string; current?: boolean }[]; cta?: { label: string; href: string }; brandHref?: string; brandVariant?: 'type' | 'tile'; defaultOpen?: boolean; label?: string; className?: string }
export declare function Nav(props: NavProps): React.ReactElement;

/** Ink-outlined action with a hard offset shadow. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'outline'; size?: 'md' | 'sm'; icon?: IconName; iconPosition?: 'start' | 'end'; href?: string; block?: boolean; state?: DocState }
export declare function Button(props: ButtonProps): React.ReactElement;

/** Inline link with red underline and marker hover. */
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { external?: boolean; tech?: boolean; state?: 'hover' | 'focus' }
export declare function TextLink(props: TextLinkProps): React.ReactElement;

/** 44px icon-only action; label is required. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { icon: IconName; label: string; variant?: 'square' | 'round' | 'ink'; href?: string; state?: DocState }
export declare function IconButton(props: IconButtonProps): React.ReactElement;

/** The page's single hero line. */
export interface HeroHeadlineProps { lines?: (string | { text: string; style?: 'accent' | 'outline' | 'marker' | 'ink' })[]; children?: React.ReactNode; slant?: boolean; as?: keyof JSX.IntrinsicElements; className?: string }
export declare function HeroHeadline(props: HeroHeadlineProps): React.ReactElement;

/** Section opener: label, title, red rule, intro. */
export interface SectionHeadingProps { title: React.ReactNode; chapter?: number | string; chapterTitle?: string; eyebrow?: string; intro?: React.ReactNode; level?: 2 | 3; rule?: boolean; className?: string }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;

/** "CHAPTER 03 — TITLE" running head. */
export interface ChapterLabelProps { number: number | string; title?: string; prefix?: string; className?: string }
export declare function ChapterLabel(props: ChapterLabelProps): React.ReactElement;

/** Short uppercase kicker. */
export interface EyebrowProps { children: React.ReactNode; tech?: boolean; className?: string }
export declare function Eyebrow(props: EyebrowProps): React.ReactElement;

/** Body text container (68ch). */
export interface ProseProps { children: React.ReactNode; lead?: boolean; secondary?: boolean; className?: string }
export declare function Prose(props: ProseProps): React.ReactElement;

/** Mono margin note with a hand-drawn arrow. */
export interface AnnotationProps { children: React.ReactNode; direction?: 'left' | 'right' | 'down'; className?: string }
export declare function Annotation(props: AnnotationProps): React.ReactElement;

/** Pen-mark emphasis for a word. */
export interface HighlightProps { children: React.ReactNode; variant?: 'marker' | 'underline' | 'circle' | 'ink'; className?: string }
export declare function Highlight(props: HighlightProps): React.ReactElement;

/** Square comic panel. */
export interface PanelProps { children?: React.ReactNode; variant?: 'standard' | 'featured' | 'secondary' | 'flat'; accent?: boolean; halftone?: boolean; theme?: 'paper' | 'ink'; label?: string; as?: keyof JSX.IntrinsicElements; className?: string; style?: React.CSSProperties }
export declare function Panel(props: PanelProps): React.ReactElement;

/** Decorative panel with an angled cut. */
export interface AngledPanelProps { children?: React.ReactNode; cut?: 'slant' | 'corner' | 'slant-both'; tone?: 'paper' | 'yellow' | 'ink'; as?: keyof JSX.IntrinsicElements; className?: string }
export declare function AngledPanel(props: AngledPanelProps): React.ReactElement;

/** Framed image with treatment level, aspect, caption or placeholder. */
export interface ImagePanelProps { src?: string; alt?: string; treatment?: Treatment; tint?: 'blue' | 'red' | 'yellow'; aspect?: Aspect | string; frame?: 'standard' | 'hero' | 'flat'; focal?: string; caption?: React.ReactNode; figNo?: string; sample?: boolean; interactive?: boolean; eager?: boolean; placeholder?: { kind?: 'portrait' | 'screenshot' | 'football' | 'diagram' | 'product'; title?: string; spec?: string; label?: string }; className?: string }
export declare function ImagePanel(props: ImagePanelProps): React.ReactElement;

/** Chapter opener with outlined numeral. */
export interface ChapterPanelProps { number: number | string; label?: string; title: React.ReactNode; children?: React.ReactNode; level?: 2 | 3; variant?: PanelProps['variant']; halftone?: boolean; className?: string }
export declare function ChapterPanel(props: ChapterPanelProps): React.ReactElement;

/** Yellow caption-box aside. */
export interface CalloutProps { children: React.ReactNode; tab?: string; title?: string; tone?: 'yellow' | 'ink' | 'paper'; className?: string }
export declare function Callout(props: CalloutProps): React.ReactElement;

/** Comic speech bubble for short real quotes. */
export interface SpeechBubbleProps { children: React.ReactNode; speaker?: string; tail?: 'left' | 'right'; tone?: 'paper' | 'yellow'; className?: string }
export declare function SpeechBubble(props: SpeechBubbleProps): React.ReactElement;

/** Project listing card. */
export interface ProjectLinksProps { demo?: LinkSpec; repo?: LinkSpec; caseStudy?: LinkSpec; className?: string }
export interface ProjectCardProps { variant?: 'featured' | 'compact'; fileNo?: string; status?: Status; title: React.ReactNode; description: React.ReactNode; tags?: string[]; image?: ImagePanelProps; href?: string; links?: ProjectLinksProps; level?: 2 | 3 | 4; flip?: boolean; moreLabel?: string; state?: 'hover'; className?: string }
export declare function ProjectCard(props: ProjectCardProps): React.ReactElement;

/** Case-file facts as a definition list. */
export interface ProjectMetaProps { items: { label: string; value: React.ReactNode }[]; className?: string }
export declare function ProjectMeta(props: ProjectMetaProps): React.ReactElement;

/** Technology tag / label. */
export interface TechTagProps { children: React.ReactNode; variant?: 'tag' | 'tech' | 'plain'; href?: string; icon?: IconName; className?: string }
export declare function TechTag(props: TechTagProps): React.ReactElement;

/** Project status: word + glyph + fill. */
export interface StatusLabelProps { status?: Status; children?: React.ReactNode; className?: string }
export declare function StatusLabel(props: StatusLabelProps): React.ReactElement;

/** Top of a case-study page. */
export interface CaseStudyHeaderProps { fileNo: string | number; title: React.ReactNode; lead: React.ReactNode; status?: Status; meta?: ProjectMetaProps['items']; links?: ProjectLinksProps; image?: ImagePanelProps; className?: string }
export declare function CaseStudyHeader(props: CaseStudyHeaderProps): React.ReactElement;

/** Comic-page image gallery. */
export interface GalleryProps { items: ImagePanelProps[]; layout?: 'lead' | 'even'; className?: string }
export declare function Gallery(props: GalleryProps): React.ReactElement;

/** Demo / repository / case-study links. */
export declare function ProjectLinks(props: ProjectLinksProps): React.ReactElement;

/** Skill group with tech labels. */
export interface SkillCategoryProps { title: string; items: string[]; icon?: IconName; note?: string; variant?: TechTagProps['variant']; level?: 2 | 3 | 4; className?: string }
export declare function SkillCategory(props: SkillCategoryProps): React.ReactElement;

/** Slash-separated mono metadata. */
export interface MetaRowProps { items: (string | { key: string; value: React.ReactNode })[]; strong?: boolean; label?: string; className?: string }
export declare function MetaRow(props: MetaRowProps): React.ReactElement;

/** Ruled list of links. */
export interface LinkListProps { items: { label: string; meta?: string; href: string; external?: boolean; state?: 'hover' }[]; className?: string }
export declare function LinkList(props: LinkListProps): React.ReactElement;

/** Doc line icon. */
export interface IconProps { name: IconName; size?: number; title?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;

/** Email address as a headline link, optional copy. */
export interface EmailLinkProps { address: string; copy?: boolean; state?: 'hover'; className?: string }
export declare function EmailLink(props: EmailLinkProps): React.ReactElement;

/** Link to a social profile. */
export interface SocialLinkProps { label: string; href: string; handle?: string; variant?: 'boxed' | 'bare'; icon?: React.ReactNode; state?: 'hover'; className?: string }
export declare function SocialLink(props: SocialLinkProps): React.ReactElement;

/** Contact section block. */
export interface ContactCTAProps { title: React.ReactNode; eyebrow?: string; body?: React.ReactNode; email?: string; primary?: { label: string; href: string }; bubble?: { speaker?: string; text: React.ReactNode }; socials?: SocialLinkProps[]; className?: string }
export declare function ContactCTA(props: ContactCTAProps): React.ReactElement;

/** "To be continued…" closing spread. */
export interface ClosingCalloutProps { title?: React.ReactNode; body?: React.ReactNode; action?: { label: string; href: string }; burst?: React.ReactNode | false; theme?: 'ink' | 'paper'; className?: string }
export declare function ClosingCallout(props: ClosingCalloutProps): React.ReactElement;

/** Dark-ink footer. */
export interface FooterProps { tagline?: React.ReactNode; nav?: { label: string; href?: string }[]; socials?: SocialLinkProps[]; legal?: React.ReactNode; note?: React.ReactNode; brandHref?: string; theme?: 'ink' | 'paper'; className?: string }
export declare function Footer(props: FooterProps): React.ReactElement;

/** Comic impact star. */
export interface BurstProps { children?: React.ReactNode; tone?: 'yellow' | 'red'; size?: number; points?: number; fluid?: boolean; textScale?: number; className?: string; style?: React.CSSProperties }
export declare function Burst(props: BurstProps): React.ReactElement;

/** Dot-screen block. */
export interface HalftoneProps { tone?: 'ink' | 'red' | 'blue' | 'yellow'; mask?: 'fade' | 'radial' | 'solid'; pitch?: number; dot?: number; width?: number | string; height?: number | string; className?: string; style?: React.CSSProperties }
export declare function Halftone(props: HalftoneProps): React.ReactElement;

/** Horizontal motion lines. */
export interface SpeedLinesProps { count?: number; width?: number; height?: number; direction?: 'left' | 'right'; fluid?: boolean; className?: string; style?: React.CSSProperties }
export declare function SpeedLines(props: SpeedLinesProps): React.ReactElement;

/** Hand-drawn arrow. */
export interface ArrowProps { variant?: 'curve' | 'loop' | 'straight' | 'down'; tone?: 'blue' | 'red' | 'ink'; width?: number; flip?: boolean; className?: string; style?: React.CSSProperties }
export declare function Arrow(props: ArrowProps): React.ReactElement;

/** Free-placed pen mark. */
export interface InkStrokeProps { kind?: 'underline' | 'scribble' | 'swipe' | 'bracket' | 'cross'; width?: number | string; height?: number | string; color?: string; className?: string; style?: React.CSSProperties }
export declare function InkStroke(props: InkStrokeProps): React.ReactElement;

/** Step / sequence marker. */
export interface PanelNumberProps { children: React.ReactNode; variant?: 'round' | 'square' | 'paper'; size?: number; label?: string; className?: string }
export declare function PanelNumber(props: PanelNumberProps): React.ReactElement;

/** Scroll-in reveal that respects reduced motion. */
export interface RevealProps { children: React.ReactNode; index?: number; variant?: 'wipe' | 'slide-x'; as?: keyof JSX.IntrinsicElements; show?: boolean; className?: string; style?: React.CSSProperties }
export declare function Reveal(props: RevealProps): React.ReactElement;

declare global {
  interface Window {
    Doc: {
      Wordmark: typeof Wordmark; Nav: typeof Nav; Button: typeof Button; TextLink: typeof TextLink; IconButton: typeof IconButton;
      HeroHeadline: typeof HeroHeadline; SectionHeading: typeof SectionHeading; ChapterLabel: typeof ChapterLabel; Eyebrow: typeof Eyebrow; Prose: typeof Prose; Annotation: typeof Annotation; Highlight: typeof Highlight;
      Panel: typeof Panel; AngledPanel: typeof AngledPanel; ImagePanel: typeof ImagePanel; ChapterPanel: typeof ChapterPanel; Callout: typeof Callout; SpeechBubble: typeof SpeechBubble;
      ProjectCard: typeof ProjectCard; ProjectMeta: typeof ProjectMeta; TechTag: typeof TechTag; StatusLabel: typeof StatusLabel; CaseStudyHeader: typeof CaseStudyHeader; Gallery: typeof Gallery; ProjectLinks: typeof ProjectLinks;
      SkillCategory: typeof SkillCategory; MetaRow: typeof MetaRow; LinkList: typeof LinkList; Icon: typeof Icon;
      EmailLink: typeof EmailLink; SocialLink: typeof SocialLink; ContactCTA: typeof ContactCTA; ClosingCallout: typeof ClosingCallout; Footer: typeof Footer;
      Burst: typeof Burst; Halftone: typeof Halftone; SpeedLines: typeof SpeedLines; Arrow: typeof Arrow; InkStroke: typeof InkStroke; PanelNumber: typeof PanelNumber; Reveal: typeof Reveal;
    };
  }
}
