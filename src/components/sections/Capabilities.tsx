// Section capabilities: ported 1:1 from the approved design (design-source/Main.dc.html).
import { Arrow, PanelNumber, Reveal, SectionHeading, SpeedLines } from '../doc';

export function Capabilities() {
  return (
    <section className="scene scene--rev scene--paper caps" id="capabilities" aria-label="Capabilities">
      <Reveal className="caps-slab fx-sweep">
        <div className="caps-slab__in" aria-hidden="true" />
      </Reveal>
      <div className="dots" aria-hidden="true" />
      <div className="wrap">
        <div className="chap">
          <span className="bignum-wrap par" aria-hidden="true">
            <Reveal as="span" className="bignum fx-num">
              04
            </Reveal>
          </span>
          <Reveal className="fx-head">
            <SectionHeading chapter={4} chapterTitle="Capabilities" title="How Doc works" />
            <div className="streaks" aria-hidden="true">
              <SpeedLines count={7} width={600} height={72} direction="right" fluid />
            </div>
          </Reveal>
        </div>

        <div className="page3">
          <article className="cap p3a">
            <Reveal className="fx-left fx-crisp" index={0}>
              <div className="cut cut--red lift" style={{ height: '100%' } as React.CSSProperties}>
                <div className="cut__in">
                  <div className="cap-label">
                    <span className="tag">Power 01</span>
                  </div>
                  <svg
                    className="motif motif--a"
                    viewBox="0 0 600 240"
                    role="img"
                    aria-label="Illustration: objects detected in a frame feed a small neural network that is evaluated"
                  >
                    <polygon
                      className="m-burst"
                      points="560,40 572,70 600,62 584,88 608,104 578,108 584,138 560,118 536,138 542,108 512,104 536,88 520,62 548,70"
                    />
                    <rect className="draw" pathLength="1" x="16" y="26" width="300" height="190" fill="none" stroke="var(--ink-black)" strokeWidth="3" />
                    <rect className="m-tab" x="16" y="26" width="70" height="22" />
                    <text className="m-tab-t" x="24" y="42">
                      FRAME
                    </text>
                    <circle className="m-ink" cx="82" cy="140" r="24" />
                    <rect className="m-ink" x="150" y="82" width="46" height="92" />
                    <path className="m-ink" d="M228 188 L262 120 L296 188 Z" />
                    <g className="m-shift">
                      <rect className="m-blue" x="50" y="108" width="64" height="64" />
                      <rect className="m-tab" x="50" y="88" width="50" height="20" />
                      <text className="m-tab-t" x="56" y="102">
                        OBJ 1
                      </text>
                      <rect className="m-blue" x="140" y="72" width="66" height="112" />
                      <rect className="m-tab" x="140" y="52" width="50" height="20" />
                      <text className="m-tab-t" x="146" y="66">
                        OBJ 2
                      </text>
                      <rect className="m-blue" x="220" y="110" width="84" height="86" />
                      <rect className="m-tab" x="220" y="90" width="50" height="20" />
                      <text className="m-tab-t" x="226" y="104">
                        OBJ 3
                      </text>
                    </g>
                    <path className="m-blue-solid draw" pathLength="1" d="M326 122 H 372" />
                    <path className="m-blue-solid" d="M360 110 L 374 122 L 360 134" />
                    <path
                      className="m-line draw"
                      pathLength="1"
                      d="M404 70 L484 48 M404 70 L484 96 M404 70 L484 146 M404 70 L484 194 M404 122 L484 48 M404 122 L484 96 M404 122 L484 146 M404 122 L484 194 M404 174 L484 48 M404 174 L484 96 M404 174 L484 146 M404 174 L484 194 M484 48 L556 172 M484 96 L556 172 M484 146 L556 172 M484 194 L556 172 M484 48 L556 214 M484 96 L556 214 M484 146 L556 214 M484 194 L556 214"
                    />
                    <path className="m-blue-solid draw" pathLength="1" d="M404 122 L484 96 L556 172" />
                    <circle className="m-node" cx="404" cy="70" r="10" />
                    <circle className="m-node m-node--on" cx="404" cy="122" r="10" />
                    <circle className="m-node" cx="404" cy="174" r="10" />
                    <circle className="m-node" cx="484" cy="48" r="10" />
                    <circle className="m-node m-node--on" cx="484" cy="96" r="10" />
                    <circle className="m-node" cx="484" cy="146" r="10" />
                    <circle className="m-node" cx="484" cy="194" r="10" />
                    <circle className="m-node m-node--on" cx="556" cy="172" r="10" />
                    <circle className="m-node" cx="556" cy="214" r="10" />
                    <text className="m-label" x="166" y="234" textAnchor="middle">
                      detect
                    </text>
                    <text className="m-label" x="484" y="232" textAnchor="middle">
                      model
                    </text>
                    <text className="m-label m-label--ink" x="562" y="152" textAnchor="middle">
                      eval
                    </text>
                  </svg>
                  <h3 className="cap__title">AI &amp; Intelligent Systems</h3>
                  <p className="cap__body">
                    Building AI-powered applications and exploring computer vision, machine learning, model evaluation, and the integration of intelligent
                    systems into useful products.
                  </p>
                </div>
              </div>
            </Reveal>
          </article>

          <article className="cap p3b">
            <Reveal className="fx-right fx-crisp" index={1}>
              <div className="cut cut--blue lift">
                <div className="cut__in">
                  <div className="cap-label">
                    <span className="tag">Power 02</span>
                  </div>
                  <h3 className="cap__title">Software &amp; Product Engineering</h3>
                  <p className="cap__body">
                    Developing mobile and web applications, business dashboards, marketplaces, and connected systems, connecting frontends and backends, and
                    making architectural decisions that support product needs.
                  </p>
                  <svg
                    className="motif motif--b"
                    viewBox="0 0 420 210"
                    role="img"
                    aria-label="Blueprint: interface and mobile clients connect through an API to a data store"
                  >
                    <rect className="m-ink" x="16" y="22" width="118" height="72" />
                    <text className="m-label m-label--ink" x="26" y="40">
                      INTERFACE
                    </text>
                    <path className="m-line" d="M26 54 H118 M26 66 H96 M26 78 H108" style={{ strokeOpacity: '.6' } as React.CSSProperties} />
                    <rect className="m-ink" x="16" y="120" width="118" height="68" />
                    <text className="m-label m-label--ink" x="26" y="138">
                      MOBILE
                    </text>
                    <rect className="m-line" x="26" y="148" width="22" height="30" style={{ strokeOpacity: '.6' } as React.CSSProperties} />
                    <rect className="m-line" x="56" y="148" width="22" height="30" style={{ strokeOpacity: '.6' } as React.CSSProperties} />
                    <g className="m-shift">
                      <rect className="m-ink" x="176" y="70" width="88" height="70" style={{ fill: 'var(--comic-yellow)' } as React.CSSProperties} />
                      <text className="m-label m-label--ink" x="220" y="110" textAnchor="middle">
                        API
                      </text>
                    </g>
                    <path className="m-blue m-flow" d="M134 58 H155 V96 H176" />
                    <path className="m-blue m-flow" d="M134 154 H155 V116 H176" />
                    <path className="m-blue m-flow" d="M264 105 H300" />
                    <path className="m-ink" d="M300 68 V142 A46 13 0 0 0 392 142 V68" />
                    <ellipse className="m-ink" cx="346" cy="68" rx="46" ry="13" />
                    <text className="m-label m-label--ink" x="346" y="112" textAnchor="middle">
                      DATA
                    </text>
                  </svg>
                </div>
              </div>
            </Reveal>
          </article>

          <article className="cap p3c">
            <Reveal className="fx-up fx-crisp" index={2}>
              <div className="cut cut--yellow lift">
                <div className="cut__in">
                  <div className="cap-c">
                    <div>
                      <div className="cap-label">
                        <span className="tag">Power 03</span>
                      </div>
                      <h3 className="cap__title">Product &amp; Entrepreneurship</h3>
                      <p className="cap__body">
                        Leading mobile teams and working across problem definition, technical planning, team collaboration, and product decisions to move ideas
                        toward implementation.
                      </p>
                    </div>
                    <ol className="flow" aria-label="From idea toward implementation">
                      <li>
                        <PanelNumber size={48}>1</PanelNumber>
                        <span className="flow__label">
                          Problem
                          <br />
                          definition
                        </span>
                      </li>
                      <li>
                        <PanelNumber size={48}>2</PanelNumber>
                        <span className="flow__label">
                          Technical
                          <br />
                          planning
                        </span>
                      </li>
                      <li>
                        <PanelNumber size={48}>3</PanelNumber>
                        <span className="flow__label">
                          Team
                          <br />
                          collaboration
                        </span>
                      </li>
                      <li>
                        <PanelNumber size={48}>4</PanelNumber>
                        <span className="flow__label">
                          Product
                          <br />
                          decisions
                        </span>
                      </li>
                      <li className="flow__end">
                        <Arrow variant="straight" tone="ink" width={52} />
                        <span className="impl impact">Implementation</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
}
