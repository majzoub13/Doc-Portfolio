import type { Config } from 'tailwindcss';

// Every value points at a Doc design token (src/styles/tokens.css), so utilities
// and the design's own CSS always agree. Preflight is off: the design ships its own base styles.
const v = (name: string) => `var(--${name})`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: v('comic-red'),
      yellow: v('comic-yellow'),
      blue: { DEFAULT: v('comic-blue'), dark: v('blue-dark'), light: v('blue-light') },
      ink: { DEFAULT: v('ink-black'), raised: v('ink-raised'), sunken: v('ink-sunken'), gray: v('ink-gray'), muted: v('ink-muted') },
      paper: { DEFAULT: v('warm-paper'), bright: v('paper-bright'), shade: v('paper-shade'), muted: v('paper-muted') },
      press: { DEFAULT: v('press-red'), dark: v('press-red-dark') },
      panel: v('panel-gray'),
      page: v('bg-page'),
      primary: v('text-primary'),
      secondary: v('text-secondary'),
      accent: v('text-accent'),
      technical: v('text-technical'),
      focus: v('focus-ring'),
    },
    fontFamily: {
      display: v('font-display'),
      sans: v('font-sans'),
      mono: v('font-mono'),
    },
    spacing: {
      0: '0px',
      1: v('space-1'), 2: v('space-2'), 3: v('space-3'), 4: v('space-4'), 5: v('space-5'),
      6: v('space-6'), 7: v('space-7'), 8: v('space-8'), 9: v('space-9'), 10: v('space-10'),
    },
    borderRadius: {
      none: v('radius-none'), xs: v('radius-xs'), bubble: v('radius-bubble'), full: v('radius-full'),
    },
    borderWidth: {
      DEFAULT: v('border-hair'), control: v('border-control'), panel: v('border-panel'), heavy: v('border-heavy'),
    },
    boxShadow: {
      1: v('shadow-1'), 2: v('shadow-2'), 3: v('shadow-3'), accent: v('shadow-accent'), none: 'none',
    },
    screens: { sm: '480px', md: '768px', lg: '1024px', xl: '1440px' },
    extend: {
      maxWidth: { container: v('container-max'), wide: v('container-wide'), text: v('container-text') },
      transitionDuration: { fast: v('dur-fast'), base: v('dur-base'), reveal: v('dur-reveal') },
      transitionTimingFunction: { out: v('ease-out'), 'in-out': v('ease-in-out'), snap: v('ease-snap') },
      zIndex: { nav: v('z-nav'), menu: v('z-menu') },
    },
  },
} satisfies Config;
