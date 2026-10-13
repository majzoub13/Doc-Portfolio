// Section hq: ported 1:1 from the approved design (design-source/Main.dc.html).
import { Button, ProjectMeta, Reveal, SectionHeading } from '../doc';
import { images, tcMeta } from '../../content/site';

export function HQ() {
  return (
    <section className="scene scene--yellow hq-scene" id="hq" aria-label="HQ: TupCode">
      <div className="dots" aria-hidden="true" />
      <div className="wrap">
        <div className="chap">
          <span className="bignum-wrap par" aria-hidden="true">
            <Reveal as="span" className="bignum fx-num">
              02
            </Reveal>
          </span>
          <Reveal className="fx-head">
            <SectionHeading
              chapter={2}
              chapterTitle="HQ"
              title="Base of operations"
              intro="The software engineering and AI company I co-founded, where I lead mobile development."
            />
          </Reveal>
        </div>

        <Reveal className="fx-origin og-wrap">
          <span className="og-year" aria-hidden="true">
            2024
          </span>
          <span className="og-seal">
            <img className="og-seal__logo" src={images.logos.tupcode} alt="TupCode" />
          </span>
          <div className="cut cut--red cut--lg">
            <article className="cut__in clip-tr og" data-theme="paper" aria-labelledby="og-title">
              <div className="og-mapcol">
                <div className="og-mask">
                  <div
                    className="og-map"
                    role="img"
                    aria-label="Map of Syria with Damascus marked in red. Lines run from Damascus toward the Gulf and toward Canada."
                  >
                    <svg className="og-svg" viewBox="0 0 760 880" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                      <defs>
                        <pattern id="og-dots" width="12" height="12" patternUnits="userSpaceOnUse">
                          <circle className="og-dot" cx="6" cy="6" r="2.3" />
                        </pattern>
                        <path
                          id="og-syr"
                          d="M29.9,733.7L33.3,729.7L34.7,729.5L34.9,726.4L36.9,720.5L38.6,717.4L37.9,713.7L37.4,709.6L37.3,706.8L37.9,705.5L36.2,705.6L35.4,705.3L34.7,705.2L33.9,705.4L33.1,705.8L32.8,706.1L32.4,706.4L31.9,706.4L31.5,706.3L31.5,706.3L31.6,705.8L31.6,705.8L33.0,704.3L33.2,702.7L34.3,702.0L35.5,703.1L36.7,703.6L38.9,701.9L41.0,699.8L42.7,698.1L43.3,696.8L43.1,695.6L44.5,695.5L45.9,695.1L47.4,694.4L48.6,693.6L50.3,691.8L52.3,687.6L53.9,685.7L54.0,686.3L54.0,685.7L56.3,684.2L58.9,682.7L60.7,681.5L64.1,678.8L65.5,675.0L64.4,672.5L65.5,670.8L67.8,670.0L70.4,670.0L72.2,669.2L74.5,667.7L75.9,665.8L76.3,663.5L75.6,662.1L73.7,660.8L71.9,660.0L70.4,659.5L67.8,658.1L65.5,657.7L64.4,656.8L64.8,654.1L65.2,653.7L66.3,653.3L67.0,652.8L67.0,648.2L67.8,647.2L69.6,645.5L70.4,644.1L71.9,642.0L75.2,639.0L76.7,636.3L77.4,635.0L79.3,634.2L81.1,633.8L83.0,632.9L86.7,630.6L87.4,631.1L88.6,632.7L89.3,633.4L91.5,633.4L93.4,632.3L94.9,631.1L96.4,630.4L98.2,630.9L103.4,633.4L107.1,634.4L109.4,634.0L110.5,632.5L110.5,629.8L108.6,628.8L104.5,628.1L101.6,625.8L100.8,625.0L100.1,623.7L100.1,623.3L102.3,618.9L103.4,616.6L105.3,614.7L109.4,610.9L112.7,606.7L114.9,605.4L116.0,605.7L118.3,606.5L119.7,606.3L121.2,605.4L122.0,604.4L122.0,602.9L122.7,601.2L124.9,598.5L129.4,594.7L131.6,590.5L134.6,587.4L134.2,586.1L131.6,583.6L130.9,581.7L130.5,579.4L131.3,577.9L132.0,576.4L132.4,574.7L132.0,573.9L131.3,573.7L130.5,573.7L129.8,573.5L128.7,572.2L126.4,569.0L125.7,568.2L125.7,566.1L126.1,565.4L126.4,564.8L126.8,564.0L127.2,561.8L127.2,560.6L126.4,559.5L124.9,558.3L124.2,558.5L123.5,558.0L122.0,556.1L120.1,555.3L118.6,554.2L117.9,552.6L117.1,550.4L115.7,550.0L112.7,549.8L109.7,550.0L107.9,550.4L107.5,550.7L107.1,550.7L106.8,550.4L106.4,550.0L105.3,548.1L107.1,546.2L110.1,544.7L112.0,543.0L112.3,541.1L112.3,537.8L114.2,536.7L115.7,537.3L116.8,538.2L117.5,537.5L117.9,533.5L115.3,534.4L112.7,534.4L110.1,533.5L108.2,531.8L105.6,527.4L104.2,526.3L101.9,527.8L101.9,528.7L101.6,531.2L101.2,532.5L100.4,533.3L99.3,533.9L93.0,534.2L92.6,533.9L91.2,533.1L90.8,532.9L90.0,533.1L88.9,533.7L88.6,533.9L84.1,533.5L81.5,533.3L78.5,533.7L76.3,533.7L74.1,533.1L72.2,531.6L71.5,531.2L70.7,531.0L69.3,531.0L68.9,528.7L67.0,524.8L66.3,521.5L65.2,519.5L65.2,513.4L64.8,512.6L62.9,509.4L62.6,508.1L61.8,505.6L58.5,496.6L59.2,496.2L59.2,495.6L60.0,494.9L60.0,493.0L59.2,492.4L59.2,491.3L60.0,490.9L60.0,490.7L59.6,490.7L59.2,489.6L60.3,487.9L60.7,487.1L61.5,486.2L62.2,484.3L61.8,482.4L61.1,480.7L60.7,479.2L60.7,473.2L61.5,471.8L66.3,464.3L68.5,462.2L67.4,458.8L63.7,450.7L65.2,446.4L64.4,444.3L63.7,436.1L64.1,434.2L62.9,433.4L58.1,426.5L55.9,425.4L54.8,424.8L54.4,423.5L53.7,422.7L51.8,423.1L50.3,423.5L49.9,423.9L48.8,423.3L48.8,422.0L49.2,420.1L49.6,418.6L48.8,418.0L45.1,416.0L45.5,415.4L45.5,414.1L45.9,413.5L45.1,413.5L44.0,414.3L44.0,413.5L45.9,412.8L48.1,411.5L49.6,409.6L49.9,407.2L49.9,406.0L48.8,404.2L48.8,402.5L49.2,401.7L51.8,400.8L55.9,393.1L55.9,389.4L55.5,387.1L54.4,384.1L52.9,381.3L51.4,379.6L56.6,379.8L59.2,379.1L60.0,377.4L60.7,374.8L63.3,370.8L64.1,371.2L66.3,370.8L68.1,369.9L70.4,369.7L71.5,371.2L71.5,375.9L72.6,377.0L74.5,377.4L77.4,377.4L80.8,378.9L86.7,383.2L88.6,383.0L89.7,379.1L90.4,370.1L92.6,366.5L96.0,365.4L98.6,366.0L100.1,365.6L100.8,361.1L103.0,360.2L107.1,361.9L109.4,361.1L109.0,357.4L109.4,339.1L109.7,337.2L110.1,336.3L110.8,335.4L111.2,334.1L109.7,332.4L110.8,331.3L112.3,332.8L113.4,333.7L114.9,334.4L117.5,334.6L118.3,334.8L119.0,334.8L119.7,334.4L120.1,333.7L120.5,332.8L120.9,332.0L122.0,331.5L123.8,331.3L131.6,332.4L133.5,332.4L140.9,331.1L141.7,330.0L141.3,327.2L140.9,325.3L139.4,321.4L139.4,321.2L137.9,319.9L136.5,319.2L133.1,318.8L132.0,317.7L132.4,317.7L133.1,316.6L133.5,314.7L133.9,313.6L133.5,312.5L132.7,310.8L132.4,310.6L130.5,309.7L129.8,309.1L129.4,308.2L127.5,301.3L127.2,299.1L127.5,297.2L130.5,292.2L131.3,286.8L131.3,280.9L132.4,275.5L133.9,272.4L134.2,270.0L134.2,267.4L134.6,264.6L135.7,262.2L137.6,259.8L138.7,257.4L138.3,254.2L139.4,254.2L140.2,254.4L140.5,254.4L159.5,260.9L165.8,261.4L168.0,261.8L169.9,262.7L171.7,263.7L173.6,265.3L176.6,268.1L177.3,269.8L177.7,272.4L176.6,276.6L176.9,278.1L178.8,279.8L181.0,280.9L181.8,280.7L182.9,279.6L184.4,277.9L186.2,277.0L188.1,277.2L189.6,277.6L191.8,277.9L198.1,276.1L200.3,276.1L217.4,279.2L221.5,279.2L236.7,269.4L243.0,266.6L260.1,262.9L276.4,255.3L279.4,254.6L281.3,253.3L291.3,247.0L298.3,244.2L301.7,243.9L308.4,244.8L328.0,250.7L333.2,253.5L344.0,265.0L347.0,268.1L353.3,271.6L360.7,272.4L377.4,271.6L379.6,270.9L385.2,270.5L400.8,275.9L406.4,275.7L427.2,271.8L460.6,265.3L482.9,257.0L493.3,250.7L497.0,249.6L500.7,248.7L504.4,247.0L511.8,242.0L525.6,232.8L527.4,231.5L529.7,230.6L531.9,230.2L534.5,230.0L539.3,228.7L553.0,221.0L557.9,219.1L577.5,216.2L602.1,221.0L606.5,223.0L608.7,223.7L637.7,222.4L680.4,212.1L692.3,209.3L696.7,206.6L704.5,199.2L709.7,192.4L711.2,191.5L713.1,190L714.2,191.3L714.2,194.8L715.7,195.0L718.6,196.6L719.4,196.3L720.1,195.5L720.5,195.0L721.2,195.3L722.4,197.2L722.7,197.9L726.1,200.7L726.8,200.9L727.5,202.7L725.7,209.9L726.8,211.7L727.9,212.3L727.9,217.8L728.7,219.3L729.4,220.6L730.1,222.1L730.1,224.1L726.8,226.5L720.1,232.8L709.7,244.2L688.9,266.4L675.2,281.3L672.2,283.5L669.6,285.0L637.7,291.7L631.0,292.8L627.7,294.3L625.8,297.2L616.5,314.9L615.8,318.4L612.4,350.5L612.4,352.7L612.8,354.8L615.4,361.1L623.6,378.5L624.7,382.6L625.1,386.7L625.4,404.2L625.1,408.1L623.2,412.0L619.9,417.3L615.0,424.6L613.9,428.4L613.2,440.8L608.7,456.4L607.6,464.1L608.0,467.1L608.4,487.7L609.5,509.8L609.1,513.0L608.4,516.2L590.5,550.4L586.8,558.7L584.6,562.1L581.6,564.0L556.0,570.9L541.2,580.0L529.7,586.9L518.1,593.9L506.6,600.8L502.9,603.1L495.5,607.5L484.0,614.5L472.5,621.4L461.3,628.3L449.8,635.3L438.3,642.0L426.8,648.9L415.7,655.8L404.2,662.7L392.6,669.6L381.5,676.5L370.0,683.1L358.5,690.0L333.2,705.9L311.3,719.8L302.4,725.2L284.6,736.6L271.2,744.9L253.8,756.3L236.0,767.7L226.7,774.0L218.5,779.1L200.7,790.5L189.2,797.9L173.6,808.2L156.9,819.6L155.4,820L154.3,820L147.6,818.1L145.4,818.1L143.5,819.2L139.8,816.3L125.7,814.6L122.0,814.2L120.1,813.2L114.5,812.6L112.3,812.0L110.8,811.1L101.9,802.5L95.2,797.9L91.9,794.4L90.8,793.8L90.0,794.0L88.9,795.0L88.6,795.2L87.8,795.2L86.7,794.8L86.0,794.6L82.2,795.2L79.6,795.2L79.3,795.0L79.3,794.6L78.5,793.2L74.1,785.9L73.0,783.9L73.0,781.6L73.3,779.5L72.6,778.3L70.4,778.1L68.9,778.3L67.8,777.9L67.0,777.1L65.9,775.8L66.3,776.0L66.7,775.4L66.7,773.7L66.3,773.5L64.4,773.5L62.6,771.7L61.5,771.1L50.7,768.6L49.6,767.3L49.2,766.9L48.5,766.7L48.1,766.9L47.3,767.3L47.7,766.7L47.4,767.3L47.4,767.3L45.6,767.7L39.9,771.3L36.5,774.4L35.3,775.0L34.8,775.2L32.4,775.0L32.3,774.9L31.8,773.4L30.6,771.8L31.1,770.6L34.7,766.3L34.7,765.4L34.7,764.7L34.8,764.2L35.4,763.9L34.8,762.7L34.8,761.2L35.4,757.9L35.0,756.5L35.0,755.5L35.3,754.3L35.4,752.5L35.1,751.3L35.0,751.2L34.3,750.3L32.6,748.7L32.5,748.6L31.4,747.1L32.6,745.5L33.2,737.8Z"
                        />
                      </defs>
                      <path
                        className="og-grat"
                        d="M72.4 0V880M175.5 0V880M278.6 0V880M381.8 0V880M484.9 0V880M588 0V880M691.2 0V880M0 858.2H760M0 735.9H760M0 612.2H760M0 487H760M0 360.3H760M0 232H760M0 102H760"
                      />
                      <text className="og-gl" x="80.4" y="160">
                        36°E
                      </text>
                      <text className="og-gl" x="492.9" y="160">
                        40°E
                      </text>
                      <text className="og-gl" x="746" y="352.3" textAnchor="end">
                        36°N
                      </text>
                      <text className="og-gl" x="746" y="604.2" textAnchor="end">
                        34°N
                      </text>
                      <use className="og-shadow" href="#og-syr" transform="translate(12 12)" />
                      <use className="og-land" href="#og-syr" />
                      <use className="og-ht" href="#og-syr" />
                      <use className="og-edge" href="#og-syr" />
                      <path className="og-route draw" pathLength="1" d="M100.9 658.5 C 70.9 452.5, 40.900000000000006 342.5, 30 126" />
                      <path className="og-route draw" pathLength="1" d="M112.9 680.5 C 210.9 812.5, 470 846, 726 846" />
                      <g className="og-tag og-tag--ca">
                        <path className="og-arrow" d="M30 126 L 28 100 L 50 114 Z" />
                        <rect className="og-tagbox" x="22" y="40" width="164" height="38" />
                        <text className="og-tagt" x="36" y="66">
                          ↖ TO CANADA
                        </text>
                      </g>
                      <g className="og-tag og-tag--gulf">
                        <path className="og-arrow" d="M726 846 L 700 834 L 702 858 Z" />
                        <rect className="og-tagbox" x="524" y="776" width="202" height="38" />
                        <text className="og-tagt" x="538" y="802">
                          TO THE GULF ↘
                        </text>
                      </g>
                      <g className="og-pin">
                        <circle className="og-pin__ring" cx="100.9" cy="672.5" r="26" />
                        <circle className="og-pin__dot" cx="100.9" cy="672.5" r="12" />
                      </g>
                      <g className="og-lab">
                        <path className="og-lab__line" d="M124.9 654.5 L 170.9 610.5" />
                        <rect className="og-lab__box" x="164.9" y="568.5" width="262" height="44" />
                        <text className="og-lab__t" x="180.9" y="598.5">
                          DAMASCUS, SYRIA
                        </text>
                      </g>
                      <path className="og-tick" d="M56.900000000000006 632.5 l 12 12 M50.900000000000006 654.5 l 16 2 M66.9 616.5 l 2 16" />
                      <g className="og-north" transform="translate(710 84)">
                        <path className="og-north__a" d="M0 -30 L 12 10 L 0 2 L -12 10 Z" />
                        <text className="og-gl og-north__t" x="0" y="36" textAnchor="middle">
                          N
                        </text>
                      </g>
                      <g className="og-scale" transform="translate(540 92)">
                        <path className="og-scale__bar" d="M0 0 H 112.4" />
                        <path className="og-scale__end" d="M0 -8 V 8 M112.4 -8 V 8" />
                        <text className="og-gl" x="0" y="30">
                          0
                        </text>
                        <text className="og-gl" x="112.4" y="30" textAnchor="middle">
                          100 KM
                        </text>
                      </g>
                    </svg>
                    <p className="og-stamp">
                      Founded at
                      <br />
                      Damascus University
                    </p>
                  </div>
                </div>
              </div>
              <div className="og-story">
                <p className="hq-label">
                  <span>01</span> / The origin story
                </p>
                <p className="og-eyebrow">Built in Syria · Since 2024</p>
                <h3 className="og-title" id="og-title">
                  From Damascus to the world.
                </h3>
                <div className="og-copy">
                  <p>
                    TupCode started in 2024 with four students at Damascus University who wanted to build software that real businesses depend on. The first
                    product we launched is still running today.
                  </p>
                  <p>
                    We've since grown into a team of nine and shipped products for clients in Syria, the Gulf and Canada, from coupon platforms in Saudi Arabia
                    to computer-vision quality control on a factory line.
                  </p>
                </div>
                <div className="og-grow">
                  <p className="og-grow__a">
                    <b>4</b>
                    <span>Founders</span>
                  </p>
                  <svg className="og-grow__arrow" viewBox="0 0 64 24" aria-hidden="true">
                    <path className="draw" pathLength="1" d="M2 12 H 54" />
                    <path d="M46 3 L 60 12 L 46 21" />
                  </svg>
                  <p className="og-grow__b">
                    <b>
                      <span className="og-count" aria-hidden="true" />
                      <span className="sr-only">9</span>
                    </b>
                    <span>Team members</span>
                  </p>
                </div>
                <div className="og-me">
                  <ProjectMeta items={tcMeta} />
                  <Button variant="primary" size="sm" href="https://tupcode.com" target="_blank" rel="noopener noreferrer" icon="arrow-up-right">
                    Visit tupcode.com
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </Reveal>

        <div className="cut cut--lg eng-wrap">
          <article className="cut__in clip-bl eng" aria-labelledby="eng-title">
            <Reveal className="fx-up eng-head">
              <p className="hq-label hq-label--ink">
                <span>02</span> / What we build
              </p>
              <h3 className="eng-title" id="eng-title">
                Ideas are the beginning. <span>Systems are the result.</span>
              </h3>
              <p className="eng-lead">
                We build software and connected systems around real business needs, from the first product decisions to the engineering that keeps everything
                working.
              </p>
            </Reveal>
            <Reveal className="fx-prin">
              <ol className="prin" aria-label="Engineering principles">
                <li className="prin__p" data-theme="paper">
                  <div className="prin__art" role="img" aria-label="Modular blocks growing outward from a core">
                    <svg viewBox="0 0 320 150" aria-hidden="true">
                      <path className="pr-grid" d="M0 30H320M0 60H320M0 90H320M0 120H320M40 0V150M80 0V150M120 0V150M160 0V150M200 0V150M240 0V150M280 0V150" />
                      <rect className="pr-ghost" x="42" y="57" width="36" height="36" />
                      <rect className="pr-ghost" x="242" y="57" width="36" height="36" />
                      <rect className="pr-ghost" x="202" y="17" width="36" height="36" />
                      <rect className="pr-ghost" x="82" y="97" width="36" height="36" />
                      <rect className="pr-ink" x="82" y="57" width="36" height="36" />
                      <rect className="pr-ink" x="202" y="57" width="36" height="36" />
                      <rect className="pr-ink" x="142" y="17" width="36" height="36" />
                      <rect className="pr-ink" x="142" y="97" width="36" height="36" />
                      <rect className="pr-core" x="140" y="55" width="40" height="40" />
                      <path className="pr-line draw" pathLength="1" d="M28 75 H 6 M292 75 H 314" />
                      <path className="pr-head" d="M12 68 L 2 75 L 12 82 M308 68 L 318 75 L 308 82" />
                    </svg>
                  </div>{' '}
                  <div className="prin__body">
                    <p className="prin__k">
                      <span>01</span> / Built to grow with you
                    </p>
                    <h4 className="prin__t">Scalable, effective software.</h4>
                    <p className="prin__d">
                      Architecture that takes more users, more data and more features without a rewrite. It's how CartX runs its admin panel, seller dashboards
                      and mobile app on one platform.
                    </p>
                  </div>
                </li>
                <li className="prin__p" data-theme="paper">
                  <div className="prin__art" role="img" aria-label="Connected components protected by a bold outline">
                    <svg viewBox="0 0 320 150" aria-hidden="true">
                      <path className="pr-grid" d="M0 30H320M0 60H320M0 90H320M0 120H320M40 0V150M80 0V150M120 0V150M160 0V150M200 0V150M240 0V150M280 0V150" />
                      <rect className="pr-wall" x="34" y="16" width="252" height="118" rx="22" />
                      <rect className="pr-wall2" x="46" y="28" width="228" height="94" rx="14" />
                      <path
                        className="pr-line draw"
                        pathLength="1"
                        d="M88 56 L 160 44 L 232 60 M88 56 L 116 102 L 204 100 L 232 60 M160 44 L 160 76 L 116 102 M160 76 L 204 100"
                      />
                      <circle className="pr-node" cx="88" cy="56" r="10" />
                      <circle className="pr-node" cx="160" cy="44" r="10" />
                      <circle className="pr-node" cx="232" cy="60" r="10" />
                      <circle className="pr-node" cx="116" cy="102" r="10" />
                      <circle className="pr-node" cx="204" cy="100" r="10" />
                      <circle className="pr-node pr-node--core" cx="160" cy="76" r="13" />
                      <g transform="translate(262 4)">
                        <path className="pr-shackle" d="M8 16 V 9 A 10 10 0 0 1 28 9 V 16" />
                        <rect className="pr-lock" x="2" y="16" width="32" height="26" />
                        <circle className="pr-keyhole" cx="18" cy="28" r="3.5" />
                      </g>
                    </svg>
                  </div>{' '}
                  <div className="prin__body">
                    <p className="prin__k">
                      <span>02</span> / Top-tier experiences
                    </p>
                    <h4 className="prin__t">Secure &amp; high-performance products.</h4>
                    <p className="prin__d">
                      Products people rely on every day: coupon redemption for Saudi retailers, hotel reservations and billing, ad screens on the road. They
                      have to be fast and they can't go down.
                    </p>
                  </div>
                </li>
                <li className="prin__p" data-theme="paper">
                  <div className="prin__art" role="img" aria-label="A computer-vision frame with detection boxes">
                    <svg viewBox="0 0 320 150" aria-hidden="true">
                      <path className="pr-grid" d="M0 30H320M0 60H320M0 90H320M0 120H320M40 0V150M80 0V150M120 0V150M160 0V150M200 0V150M240 0V150M280 0V150" />
                      <path className="pr-frame" d="M24 40 V 16 H 52 M268 16 H 296 V 40 M296 110 V 134 H 268 M52 134 H 24 V 110" />
                      <ellipse className="pr-bisc" cx="84" cy="84" rx="34" ry="13" />
                      <ellipse className="pr-bisc" cx="160" cy="84" rx="34" ry="13" />
                      <ellipse className="pr-bisc" cx="236" cy="84" rx="34" ry="13" />
                      <path className="pr-crack" d="M140 80 L 150 88 L 158 79 L 168 89 L 178 82" />
                      <rect className="pr-ok draw" pathLength="1" x="44" y="62" width="80" height="44" />
                      <rect className="pr-ok draw" pathLength="1" x="196" y="62" width="80" height="44" />
                      <rect className="pr-bad draw" pathLength="1" x="118" y="58" width="84" height="50" />
                      <rect className="pr-badtag" x="118" y="36" width="72" height="22" />
                      <text className="pr-badt" x="125" y="52">
                        DEFECT
                      </text>
                      <rect className="pr-scan" x="24" y="20" width="272" height="5" />
                    </svg>
                  </div>{' '}
                  <div className="prin__body">
                    <p className="prin__k">
                      <span>03</span> / Less repetition. More possibility.
                    </p>
                    <h4 className="prin__t">AI &amp; automation.</h4>
                    <p className="prin__d">
                      Computer vision that catches defects on a biscuit production line. Automations that take repetitive work off your team. AI where it pays
                      for itself, not where it's fashionable.
                    </p>
                  </div>
                </li>
              </ol>
            </Reveal>
            <h4 className="svc-h">The tools to make it real</h4>
            <Reveal className="fx-svc">
              <div className="svc-map">
                <article className="svc svc--web" data-theme="paper" aria-labelledby="svc-web">
                  <div className="svc__top">
                    <span className="svc__no" aria-hidden="true">
                      01
                    </span>
                    <svg className="svc__icon" viewBox="0 0 48 48" aria-hidden="true">
                      <rect x="5" y="9" width="38" height="30" rx="2" />
                      <path d="M5 16 H 43" />
                      <circle cx="10" cy="12.5" r="1" />
                      <circle cx="14" cy="12.5" r="1" />
                      <path className="i-fill" d="M11 33 V 27 H 16 V 33 Z M20 33 V 22 H 25 V 33 Z M29 33 V 25 H 34 V 33 Z" />
                    </svg>
                  </div>
                  <h5 className="svc__t" id="svc-web">
                    <a href="https://tupcode.com/#contact" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">01 </span>Web Applications
                      <svg className="svc__go" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 12 L 12 4 M6 4 H 12 V 10" />
                      </svg>
                    </a>
                  </h5>
                  <p className="svc__d">Dashboards, platforms and online stores built around how your business actually runs.</p>
                  <details className="svc__ex">
                    <summary>Project example</summary>
                    <p>CartX runs its admin panel and seller dashboards on the web; Valuable Offers has a storefront, an operations dashboard and an API.</p>
                  </details>
                </article>
                <article className="svc svc--mobile" data-theme="paper" aria-labelledby="svc-mobile">
                  <div className="svc__top">
                    <span className="svc__no" aria-hidden="true">
                      02
                    </span>
                    <svg className="svc__icon" viewBox="0 0 48 48" aria-hidden="true">
                      <rect x="14" y="4" width="20" height="40" rx="4" />
                      <path d="M21 9 H 27 M22 39 H 26" />
                      <rect className="i-fill" x="18" y="14" width="12" height="9" />
                      <path d="M18 28 H 30 M18 32 H 26" />
                    </svg>
                  </div>
                  <h5 className="svc__t" id="svc-mobile">
                    <a href="https://tupcode.com/#contact" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">02 </span>Mobile Applications
                      <svg className="svc__go" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 12 L 12 4 M6 4 H 12 V 10" />
                      </svg>
                    </a>
                  </h5>
                  <p className="svc__d">Mobile apps from first sketch to store release, and the updates after launch.</p>
                  <details className="svc__ex">
                    <summary>Project example</summary>
                    <p>The CartX mobile app, the Carlton Hotel guest app and the Compass Team trainee app.</p>
                  </details>
                </article>
                <article className="svc svc--ux" data-theme="paper" aria-labelledby="svc-ux">
                  <div className="svc__top">
                    <span className="svc__no" aria-hidden="true">
                      03
                    </span>
                    <svg className="svc__icon" viewBox="0 0 48 48" aria-hidden="true">
                      <rect x="5" y="7" width="24" height="18" />
                      <rect className="i-fill" x="5" y="29" width="11" height="12" />
                      <path d="M20 29 H 29 V 41 H 20 Z" />
                      <path d="M44 12 L 31 33 L 28 41 L 35 36 L 47 15 Z M41 17 L 44 19" />
                    </svg>
                  </div>
                  <h5 className="svc__t" id="svc-ux">
                    <a href="https://tupcode.com/#contact" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">03 </span>UI/UX Design
                      <svg className="svc__go" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 12 L 12 4 M6 4 H 12 V 10" />
                      </svg>
                    </a>
                  </h5>
                  <p className="svc__d">Research, flows and interfaces that make complex products feel simple.</p>
                </article>
                <div className="svc-bus" aria-hidden="true" />
                <article className="svc svc--ai" data-theme="paper" aria-labelledby="svc-ai">
                  <div className="svc__top">
                    <span className="svc__no" aria-hidden="true">
                      04
                    </span>
                    <svg className="svc__icon" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M5 14 V 5 H 14 M34 5 H 43 V 14 M43 34 V 43 H 34 M14 43 H 5 V 34" />
                      <path d="M10 24 C 15 15, 33 15, 38 24 C 33 33, 15 33, 10 24 Z" />
                      <circle className="i-fill" cx="24" cy="24" r="5" />
                    </svg>
                  </div>
                  <h5 className="svc__t" id="svc-ai">
                    <a href="https://tupcode.com/#contact" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">04 </span>Artificial Intelligence
                      <svg className="svc__go" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 12 L 12 4 M6 4 H 12 V 10" />
                      </svg>
                    </a>
                  </h5>
                  <p className="svc__d">Computer vision, automation and data tools that save your team real hours.</p>
                  <details className="svc__ex">
                    <summary>Project example</summary>
                    <p>Katakit: a computer-vision system that inspects biscuits on the production line.</p>
                  </details>
                </article>
                <article className="svc svc--hw" data-theme="paper" aria-labelledby="svc-hw">
                  <div className="svc__top">
                    <span className="svc__no" aria-hidden="true">
                      05
                    </span>
                    <svg className="svc__icon" viewBox="0 0 48 48" aria-hidden="true">
                      <rect x="13" y="13" width="22" height="22" />
                      <rect className="i-fill" x="19" y="19" width="10" height="10" />
                      <path d="M18 13 V 6 M24 13 V 6 M30 13 V 6 M18 35 V 42 M24 35 V 42 M30 35 V 42 M13 18 H 6 M13 24 H 6 M13 30 H 6 M35 18 H 42 M35 24 H 42 M35 30 H 42" />
                    </svg>
                  </div>
                  <h5 className="svc__t" id="svc-hw">
                    <a href="https://tupcode.com/#contact" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">05 </span>Hardware Development
                      <svg className="svc__go" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 12 L 12 4 M6 4 H 12 V 10" />
                      </svg>
                    </a>
                  </h5>
                  <p className="svc__d">Embedded systems and connected devices that put your software in the physical world.</p>
                  <details className="svc__ex">
                    <summary>Project example</summary>
                    <p>Adlify: connected advertising screens mounted on cars, paired with the platform and reporting GPS.</p>
                  </details>
                </article>
                <article className="svc svc--consult" data-theme="paper" aria-labelledby="svc-consult">
                  <div className="svc__top">
                    <span className="svc__no" aria-hidden="true">
                      06
                    </span>
                    <svg className="svc__icon" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M4 8 H 30 V 26 H 14 L 7 32 V 26 H 4 Z" />
                      <path className="i-fill" d="M20 30 H 44 V 44 H 40 V 49 L 34 44 H 20 Z" transform="translate(0 -4)" />
                      <path d="M10 15 H 24 M10 20 H 19" />
                    </svg>
                  </div>
                  <h5 className="svc__t" id="svc-consult">
                    <a href="https://tupcode.com/#contact" target="_blank" rel="noopener noreferrer">
                      <span className="sr-only">06 </span>Consultations
                      <svg className="svc__go" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M4 12 L 12 4 M6 4 H 12 V 10" />
                      </svg>
                    </a>
                  </h5>
                  <p className="svc__d">A second opinion before you build: scope, stack, budget and a realistic plan.</p>
                </article>
              </div>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
}
