// Section footprint: ported 1:1 from the approved design (design-source/Main.dc.html).
import { Reveal, SectionHeading, SpeedLines } from '../doc';
import { images } from '../../content/site';

export function Footprint() {
  return (
    <section
      className="scene scene--rev scene--blue fp-scene"
      data-theme="ink"
      id="footprint"
      aria-label="Technical footprint"
      style={{ background: 'var(--comic-blue)' } as React.CSSProperties}
    >
      <div className="dots" aria-hidden="true" />
      <div className="wrap">
        <div className="chap">
          <span className="bignum-wrap par" aria-hidden="true">
            <Reveal as="span" className="bignum fx-num">
              06
            </Reveal>
          </span>
          <Reveal className="fx-head">
            <SectionHeading chapter={6} chapterTitle="Inventory" title="Technical footprint" />
            <div className="streaks" aria-hidden="true">
              <SpeedLines count={7} width={600} height={72} direction="right" fluid />
            </div>
          </Reveal>
        </div>

        <Reveal className="fx-scan">
          <div className="scan-body stack">
            <div className="layer layer--fw">
              <h3 className="layer__tag">Frameworks</h3>
              <ul className="tiles">
                <li className="tile tile--primary">
                  <span className="emblem" aria-hidden="true">
                    <img className="logo" src={images.tech.flutter} alt="" />
                  </span>
                  <span className="tile__badge">Primary</span>
                  <span className="tile__name">Flutter</span>
                  <span className="tile__role">Mobile apps &amp; dashboards</span>
                </li>
                <li className="tile">
                  <span className="emblem" aria-hidden="true">
                    <img className="logo" src={images.tech.react} alt="" />
                  </span>
                  <span className="tile__name">React</span>
                  <span className="tile__role">Web front ends</span>
                </li>
                <li className="tile">
                  <span className="emblem" aria-hidden="true">
                    <img className="logo" src={images.tech.laravel} alt="" />
                  </span>
                  <span className="tile__name">Laravel</span>
                  <span className="tile__role">Back ends</span>
                </li>
              </ul>
            </div>
            <div className="layer layer--lang">
              <h3 className="layer__tag">Languages</h3>
              <ul className="tiles">
                <li className="tile tile--primary">
                  <span className="emblem" aria-hidden="true">
                    <img className="logo" src={images.tech.python} alt="" />
                  </span>
                  <span className="tile__badge">Primary</span>
                  <span className="tile__name">Python</span>
                  <span className="tile__role">AI &amp; computer vision</span>
                </li>
                <li className="tile">
                  <span className="emblem" aria-hidden="true">
                    <img className="logo" src={images.tech.java} alt="" />
                  </span>
                  <span className="tile__name">Java</span>
                  <span className="tile__role">Screen control</span>
                </li>
              </ul>
            </div>
            <p className="stack__legend">
              <span className="key key--primary">Primary technologies</span>
              <span className="key">Also experienced</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
