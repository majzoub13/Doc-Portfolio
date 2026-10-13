// Section about: ported 1:1 from the approved design (design-source/Main.dc.html).
import { ProjectMeta, Prose, Reveal, SectionHeading, SpeechBubble } from '../doc';
import { aboutMeta } from '../../content/site';

export function About() {
  return (
    <section className="scene scene--paper about-scene" id="about" aria-label="About" style={{ background: 'var(--paper-bright)' } as React.CSSProperties}>
      <div className="dots par-slow" aria-hidden="true" />
      <div className="wrap">
        <div className="chap">
          <span className="bignum-wrap par" aria-hidden="true">
            <Reveal as="span" className="bignum fx-num">
              05
            </Reveal>
          </span>
          <Reveal className="fx-head">
            <SectionHeading chapter={5} chapterTitle="About" title="Behind Doc" />
          </Reveal>
        </div>
        <div className="g12 about">
          <aside className="about__aside">
            <Reveal className="fx-talk">
              <SpeechBubble className="about-bubble" speaker="Mohamed" tone="yellow">
                <span className="w" style={{ '--w': '0' } as React.CSSProperties}>
                  I&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '1' } as React.CSSProperties}>
                  care&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '2' } as React.CSSProperties}>
                  about&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '3' } as React.CSSProperties}>
                  why&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '4' } as React.CSSProperties}>
                  it&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '5' } as React.CSSProperties}>
                  should&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '6' } as React.CSSProperties}>
                  exist,&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '7' } as React.CSSProperties}>
                  how&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '8' } as React.CSSProperties}>
                  it&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '9' } as React.CSSProperties}>
                  should&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '10' } as React.CSSProperties}>
                  be&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '11' } as React.CSSProperties}>
                  built,&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '12' } as React.CSSProperties}>
                  and&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '13' } as React.CSSProperties}>
                  how&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '14' } as React.CSSProperties}>
                  it&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '15' } as React.CSSProperties}>
                  can&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '16' } as React.CSSProperties}>
                  create&nbsp;
                </span>{' '}
                <span className="w" style={{ '--w': '17' } as React.CSSProperties}>
                  value.
                </span>
              </SpeechBubble>
              <div className="about__meta">
                <ProjectMeta items={aboutMeta} />
              </div>
            </Reveal>
          </aside>
          <div className="about__text">
            <Reveal className="fx-para" index={1}>
              <Prose lead>
                <p style={{ '--d': '0' } as React.CSSProperties}>
                  I'm Mohamed Al-Majzoub, a graduate in Information Technology Engineering with a specialization in AI from Damascus University, a software
                  developer, and a technical founder.
                </p>
              </Prose>
              <Prose>
                <p style={{ '--d': '1' } as React.CSSProperties}>
                  My interests sit at the intersection of AI engineering, software development, and entrepreneurship. I enjoy working through the full product
                  journey: understanding a problem, exploring possible solutions, making technical decisions, and turning ideas into working systems.
                </p>{' '}
                <p style={{ '--d': '2' } as React.CSSProperties}>
                  Through my technical projects and work with TupCode, I'm developing an approach to engineering that considers more than whether something
                  works. I care about why it should exist, how it should be built, and how it can create value.
                </p>{' '}
                <p style={{ '--d': '3' } as React.CSSProperties}>
                  I'm interested in ambitious technical challenges, meaningful collaborations, and opportunities to build products that solve real problems.
                </p>
              </Prose>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
