import { Footer, Nav } from './components/doc';
import { About } from './components/sections/About';
import { Capabilities } from './components/sections/Capabilities';
import { Contact } from './components/sections/Contact';
import { Footprint } from './components/sections/Footprint';
import { HQ } from './components/sections/HQ';
import { Hero } from './components/sections/Hero';
import { Work } from './components/sections/Work';
import { ZoomProvider } from './components/zoom/ZoomContext';
import { ZoomViewer } from './components/zoom/ZoomViewer';
import { SECTION_IDS, footerSocials, navItems } from './content/site';
import { useActiveSection } from './hooks/useActiveSection';

// In-page links scroll the target into view ourselves, waiting two frames so a
// closing mobile menu has released the page first. Instant under reduced motion.
function onJumpLink(e: React.MouseEvent) {
  const a = (e.target as Element).closest?.('a[href^="#"]');
  if (!a) return;
  const id = (a.getAttribute('href') || '').slice(1);
  const el = id ? document.getElementById(id) : null;
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const go = () => {
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };
  requestAnimationFrame(() => requestAnimationFrame(go));
}

export default function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <ZoomProvider>
      <div className="site" onClick={onJumpLink}>
        <div className="site-nav">
          <Nav items={navItems(active)} brandHref="#top" label="Primary" />
        </div>
        <main>
          <Hero />
          <HQ />
          <Work />
          <Capabilities />
          <About />
          <Footprint />
          <Contact />
        </main>
        <Footer
          brandHref="#top"
          tagline="AI Engineer · Software Developer · Technical Founder"
          socials={footerSocials}
          legal={`© ${new Date().getFullYear()} Mohamed Al-Majzoub`}
        />
        <ZoomViewer />
      </div>
    </ZoomProvider>
  );
}
