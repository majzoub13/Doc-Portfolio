// Section top: ported 1:1 from the approved design (design-source/Main.dc.html).
import { Button, HeroHeadline, Prose } from '../doc';
import { images, heroLines } from '../../content/site';
import { useSnap } from '../../hooks/useSnap';

export function Hero() {
  const snap = useSnap(images.snapBase);
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__slab par-slow" aria-hidden="true" />
      <div className="dots hero__dots" aria-hidden="true" />
      <div className="wrap g12 hero__grid">
        <div className="hero__copy">
          <span className="tag rise" style={{ '--d': '0' } as React.CSSProperties}>
            Doc · Chapter 01
          </span>
          <div className="hero__title">
            <HeroHeadline className="hero-title" lines={heroLines} />
          </div>
          <p className="roles narr rise" style={{ '--d': '1' } as React.CSSProperties}>
            AI Engineer
            <span className="roles__dot" aria-hidden="true">
              ·
            </span>
            Software Developer
            <span className="roles__dot" aria-hidden="true">
              ·
            </span>
            Technical Founder
          </p>
          <div className="hero__lead narr narr--paper rise" style={{ '--d': '2' } as React.CSSProperties}>
            <Prose lead>
              <p style={{ margin: '0' } as React.CSSProperties}>
                I'm Mohamed Al-Majzoub, an AI engineer, software developer, and technical founder focused on building useful products and intelligent systems.
              </p>
            </Prose>
          </div>
          <div className="actions rise" style={{ '--d': '3' } as React.CSSProperties}>
            <Button variant="primary" href="#work" icon="chevron-down">
              Explore my work
            </Button>
            <Button variant="outline" href="#contact" icon="mail">
              Get in touch
            </Button>
          </div>
        </div>

        <div className="hero__side">
          <div className="cut cut--blue stage-wipe" style={{ '--shx': '14px', '--shy': '14px' } as React.CSSProperties}>
            <div className="cut__in stage__in clip-bl">
              <div className={`sx ${snap.className}`}>
                <svg
                  className="sx-scene"
                  viewBox="0 0 878 1368"
                  preserveAspectRatio="xMaxYMin slice"
                  role="img"
                  aria-label="Comic-book illustration of Mohamed Al-Majzoub in a navy hero suit, snapping his thumb and middle finger in a gold six-gem gauntlet"
                >
                  <defs>
                    <radialGradient id="sx-glow">
                      <stop offset="0" stopColor="#fff3b0" stopOpacity=".95" />
                      <stop offset=".45" stopColor="#F4D03F" stopOpacity=".55" />
                      <stop offset="1" stopColor="#F4D03F" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <image className="sx-base" href={images.snapBase} x="0" y="0" width="878" height="1368" />
                  <ellipse className="sx-aura" cx="755" cy="640" rx="150" ry="230" fill="url(#sx-glow)" />
                  <g className="sx-h2">
                    <image href={images.snapHandContact} x="580" y="250" width="298" height="880" />
                  </g>
                  <g className="sx-h3">
                    <image href={images.snapHandRelease} x="580" y="250" width="298" height="880" />
                  </g>
                  <g className="sx-gather">
                    <circle className="sx-gather__ring" cx="684" cy="492" r="46" />
                    <circle className="sx-gather__core" cx="684" cy="492" r="12" />
                  </g>
                  <g className="sx-lines">
                    <path className="sx-l" pathLength="1" d="M715 367 L 703 140" />
                    <path className="sx-l sx-l--y" pathLength="1" d="M714 364 L 707 259" />
                    <path className="sx-l sx-l--k" pathLength="1" d="M776 411 L 987 332" />
                    <path className="sx-l" pathLength="1" d="M761 469 L 871 564" />
                    <path className="sx-l sx-l--y" pathLength="1" d="M769 436 L 924 449" />
                    <path className="sx-l" pathLength="1" d="M774 400 L 883 336" />
                    <path className="sx-l" pathLength="1" d="M732 385 L 791 193" />
                    <path className="sx-l sx-l--y sx-l--k" pathLength="1" d="M750 465 L 916 634" />
                    <path className="sx-l" pathLength="1" d="M731 482 L 793 720" />
                    <path className="sx-l" pathLength="1" d="M755 394 L 923 220" />
                    <path className="sx-l sx-l--y" pathLength="1" d="M696 386 L 590 169" />
                    <path className="sx-l" pathLength="1" d="M693 368 L 614 165" />
                    <path className="sx-l sx-l--k" pathLength="1" d="M702 484 L 660 615" />
                    <path className="sx-l sx-l--y" pathLength="1" d="M747 470 L 845 598" />
                    <path className="sx-l" pathLength="1" d="M780 433 L 932 437" />
                    <path className="sx-l" pathLength="1" d="M694 493 L 632 648" />
                    <path className="sx-l sx-l--y" pathLength="1" d="M695 485 L 613 672" />
                    <path className="sx-l sx-l--k" pathLength="1" d="M783 456 L 880 493" />
                    <path className="sx-l" pathLength="1" d="M718 366 L 718 260" />
                    <path className="sx-l sx-l--y" pathLength="1" d="M731 379 L 776 194" />
                    <path className="sx-l" pathLength="1" d="M765 435 L 911 443" />
                    <path className="sx-l" pathLength="1" d="M767 418 L 976 357" />
                  </g>
                  <g className="sx-ring">
                    <circle className="sx-ring__r" cx="718" cy="432" r="40" pathLength="4" />
                    <circle className="sx-ring__y" cx="718" cy="432" r="40" pathLength="4" />
                    <circle className="sx-ring__b" cx="718" cy="432" r="40" pathLength="4" />
                    <circle className="sx-ring__g" cx="718" cy="432" r="40" pathLength="4" />
                  </g>
                  <polygon
                    className="sx-flash"
                    points="796.0,432.0 741.2,438.2 785.5,471.0 735.0,449.0 757.0,499.5 724.2,455.2 718.0,510.0 711.8,455.2 679.0,499.5 701.0,449.0 650.5,471.0 694.8,438.2 640.0,432.0 694.8,425.8 650.5,393.0 701.0,415.0 679.0,364.5 711.8,408.8 718.0,354.0 724.2,408.8 757.0,364.5 735.0,415.0 785.5,393.0 741.2,425.8"
                  />
                  <circle className="sx-core" cx="718" cy="432" r="18" />
                  <g className="sx-parts">
                    <g className="sx-p sx-p--b" style={{ '--dx': '202px', '--dy': '-95px', '--pr': '157deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="10" />
                    </g>
                    <g className="sx-p sx-p--g" style={{ '--dx': '-1px', '--dy': '166px', '--pr': '119deg' } as React.CSSProperties}>
                      <polygon points="718,414 731,441 707,437" />
                    </g>
                    <g className="sx-p sx-p--r" style={{ '--dx': '73px', '--dy': '-88px', '--pr': '5deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="8" />
                    </g>
                    <g className="sx-p sx-p--b" style={{ '--dx': '-83px', '--dy': '97px', '--pr': '18deg' } as React.CSSProperties}>
                      <polygon points="718,413 732,442 706,438" />
                    </g>
                    <g className="sx-p sx-p--y" style={{ '--dx': '-57px', '--dy': '137px', '--pr': '51deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="11" />
                    </g>
                    <g className="sx-p sx-p--g" style={{ '--dx': '-27px', '--dy': '-145px', '--pr': '-181deg' } as React.CSSProperties}>
                      <polygon points="718,419 727,439 710,436" />
                    </g>
                    <g className="sx-p sx-p--g" style={{ '--dx': '173px', '--dy': '-15px', '--pr': '96deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="7" />
                    </g>
                    <g className="sx-p sx-p--w" style={{ '--dx': '-78px', '--dy': '116px', '--pr': '-178deg' } as React.CSSProperties}>
                      <polygon points="718,417 729,440 709,437" />
                    </g>
                    <g className="sx-p sx-p--g" style={{ '--dx': '98px', '--dy': '-57px', '--pr': '-117deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="9" />
                    </g>
                    <g className="sx-p sx-p--y" style={{ '--dx': '176px', '--dy': '-21px', '--pr': '115deg' } as React.CSSProperties}>
                      <polygon points="718,415 730,441 708,437" />
                    </g>
                    <g className="sx-p sx-p--y" style={{ '--dx': '127px', '--dy': '101px', '--pr': '-32deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="7" />
                    </g>
                    <g className="sx-p sx-p--g" style={{ '--dx': '139px', '--dy': '171px', '--pr': '190deg' } as React.CSSProperties}>
                      <polygon points="718,413 731,441 707,438" />
                    </g>
                    <g className="sx-p sx-p--b" style={{ '--dx': '-22px', '--dy': '-166px', '--pr': '161deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="9" />
                    </g>
                    <g className="sx-p sx-p--g" style={{ '--dx': '159px', '--dy': '136px', '--pr': '51deg' } as React.CSSProperties}>
                      <polygon points="718,412 732,442 706,438" />
                    </g>
                    <g className="sx-p sx-p--b" style={{ '--dx': '-64px', '--dy': '103px', '--pr': '19deg' } as React.CSSProperties}>
                      <circle cx="718" cy="432" r="10" />
                    </g>
                    <g className="sx-p sx-p--b" style={{ '--dx': '189px', '--dy': '79px', '--pr': '66deg' } as React.CSSProperties}>
                      <polygon points="718,414 730,441 707,437" />
                    </g>
                  </g>
                  <g className="sx-trails">
                    <path className="sx-t sx-t--g" pathLength="1" d="M718 432 C 758 372, 738 302, 788 242" />
                    <path className="sx-t sx-t--r" pathLength="1" d="M718 432 C 788 412, 828 362, 868 372" />
                    <path className="sx-t sx-t--b" pathLength="1" d="M718 432 C 738 352, 708 282, 728 202" />
                  </g>
                  <g className="sx-word" style={{ '--wx': '772px', '--wy': '215px' } as React.CSSProperties}>
                    <polygon
                      className="sx-word__burst"
                      points="106.9,15.0 69.9,24.4 93.1,54.8 55.2,49.3 65.0,86.3 32.1,66.7 27.0,104.6 4.2,73.9 -15.0,106.9 -24.4,69.9 -54.8,93.1 -49.3,55.2 -86.3,65.0 -66.7,32.1 -104.6,27.0 -73.9,4.2 -106.9,-15.0 -69.9,-24.4 -93.1,-54.8 -55.2,-49.3 -65.0,-86.3 -32.1,-66.7 -27.0,-104.6 -4.2,-73.9 15.0,-106.9 24.4,-69.9 54.8,-93.1 49.3,-55.2 86.3,-65.0 66.7,-32.1 104.6,-27.0 73.9,-4.2"
                    />
                    <text className="sx-word__t" x="0" y="20" textAnchor="middle">
                      SNAP!
                    </text>
                  </g>
                </svg>
              </div>
              <button type="button" className="sn-replay" aria-label="Replay the snap animation" onClick={snap.replay}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 12 A8 8 0 1 0 7 5.8" />
                  <path d="M3.5 3.5 V 8 H 8" />
                </svg>
                Replay snap
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
