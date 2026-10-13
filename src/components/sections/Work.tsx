// Section work: ported 1:1 from the approved design (design-source/Main.dc.html).
import { ImagePanel, ProjectMeta, Reveal, SectionHeading, SpeedLines, StatusLabel, TechTag } from '../doc';
import { images, cxMeta, mlMeta } from '../../content/site';
import { useZoom } from '../zoom/ZoomContext';

export function Work() {
  const zoom = useZoom();
  return (
    <section className="scene scene--rev scene--ink work" data-theme="ink" id="work" aria-label="Selected work">
      <div className="dots" aria-hidden="true" />
      <div className="wrap">
        <div className="chap">
          <span className="bignum-wrap par" aria-hidden="true">
            <Reveal as="span" className="bignum fx-num">
              03
            </Reveal>
          </span>
          <Reveal className="fx-head">
            <svg className="hburst" viewBox="-20 -40 420 400" aria-hidden="true">
              <polygon points="200,-27 233,46 305,-13 289,81 353,82 315,139 375,170 302,197 363,264 289,259 288,322 229,280 200,353 167,291 105,335 113,257 25,271 87,200 -3,170 73,136 52,84 106,76 100,-3 172,64" />
            </svg>
            <SectionHeading chapter={3} chapterTitle="Case files" title="Selected work" />
            <div className="streaks" aria-hidden="true">
              <SpeedLines count={7} width={600} height={72} direction="right" fluid />
            </div>
          </Reveal>
        </div>

        <article className="issue ml g12" aria-labelledby="ml-title">
          <div className="ml-art">
            <Reveal className="fx-ink">
              <div className="cut cut--yellow lift">
                <div className="cut__in ml-scene clip-a">
                  <div className="ml-pitch" aria-hidden="true">
                    <svg viewBox="0 0 1200 760" preserveAspectRatio="none">
                      <g className="pl">
                        <rect className="draw" pathLength="1" x="110" y="40" width="980" height="680" />
                        <path className="draw" pathLength="1" d="M600 40 V720" />
                        <circle className="draw" pathLength="1" cx="600" cy="380" r="90" />
                        <circle className="spot" cx="600" cy="380" r="7" />
                        <rect className="draw" pathLength="1" x="110" y="178" width="164" height="404" />
                        <rect className="draw" pathLength="1" x="110" y="288" width="56" height="184" />
                        <path className="draw" pathLength="1" d="M274 308 A92 92 0 0 1 274 452" />
                        <rect className="draw" pathLength="1" x="926" y="178" width="164" height="404" />
                        <rect className="draw" pathLength="1" x="1034" y="288" width="56" height="184" />
                        <path className="draw" pathLength="1" d="M926 308 A92 92 0 0 0 926 452" />
                      </g>
                      <path className="pass" d="M420 560 C 520 420, 660 360, 790 330" />
                      <g className="trk trk--1">
                        <rect className="tab" x="380" y="490" width="80" height="28" />
                        <text x="389" y="510">
                          ID 01
                        </text>
                        <rect className="box" x="384" y="520" width="52" height="96" />
                        <circle className="dot" cx="410" cy="568" r="11" />
                      </g>
                      <g className="trk trk--2">
                        <rect className="tab" x="760" y="250" width="80" height="28" />
                        <text x="769" y="270">
                          ID 02
                        </text>
                        <rect className="box" x="764" y="280" width="52" height="96" />
                        <circle className="dot" cx="790" cy="328" r="11" />
                      </g>
                      <g className="trk trk--3">
                        <rect className="tab" x="610" y="520" width="80" height="28" />
                        <text x="619" y="540">
                          ID 03
                        </text>
                        <rect className="box" x="614" y="550" width="52" height="96" />
                        <circle className="dot" cx="640" cy="598" r="11" />
                      </g>
                      <g className="trk trk--4">
                        <rect className="tab" x="250" y="330" width="80" height="28" />
                        <text x="259" y="350">
                          ID 04
                        </text>
                        <rect className="box" x="254" y="360" width="52" height="96" />
                        <circle className="dot" cx="280" cy="408" r="11" />
                      </g>
                    </svg>
                  </div>
                  <svg className="ml-fx" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <g className="ballg">
                      <line className="act" x1="430" y1="232" x2="540" y2="214" />
                      <line className="act" x1="450" y1="252" x2="546" y2="236" />
                      <line className="act" x1="470" y1="272" x2="552" y2="258" />
                      <circle className="ball" cx="580" cy="232" r="26" />
                      <path className="ballp" d="M580 220 L591 228 L587 241 L573 241 L569 228 Z" />
                    </g>
                  </svg>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="ml-shots">
            <Reveal className="fx-up" index={1}>
              <div className="ml-shot" onMouseEnter={zoom.show('ml1')} onMouseLeave={zoom.hide('ml1')}>
                <ImagePanel
                  treatment="t0"
                  aspect="wide"
                  focal="50% 50%"
                  figNo="Fig. 02"
                  caption="Analysis screenshot — player tracking view"
                  src={images.shots.matchlensTracking}
                  alt="MatchLens tracking view: numbered player and ball tracks on match footage, with a mini-map of positions"
                />
                <button
                  type="button"
                  className="zoom-btn"
                  aria-label="View Fig. 02 at full size"
                  onFocus={zoom.show('ml1')}
                  onBlur={zoom.hide('ml1')}
                  onClick={zoom.pin('ml1')}
                  onKeyDown={zoom.onKeyDown}
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="6.5" cy="6.5" r="4.5" />
                    <path d="M10 10 L 14.5 14.5" />
                  </svg>
                  Zoom
                </button>
              </div>
            </Reveal>
            <Reveal className="fx-up" index={2}>
              <div className="ml-shot" onMouseEnter={zoom.show('ml2')} onMouseLeave={zoom.hide('ml2')}>
                <ImagePanel
                  treatment="t0"
                  aspect="wide"
                  focal="50% 50%"
                  figNo="Fig. 03"
                  caption="Analysis screenshot — events and insights"
                  src={images.shots.matchlensDashboard}
                  alt="MatchLens dashboard: tracked video, tactical radar, engine metrics and an event log"
                />
                <button
                  type="button"
                  className="zoom-btn"
                  aria-label="View Fig. 03 at full size"
                  onFocus={zoom.show('ml2')}
                  onBlur={zoom.hide('ml2')}
                  onClick={zoom.pin('ml2')}
                  onKeyDown={zoom.onKeyDown}
                >
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="6.5" cy="6.5" r="4.5" />
                    <path d="M10 10 L 14.5 14.5" />
                  </svg>
                  Zoom
                </button>
              </div>
            </Reveal>
          </div>

          <div className="ml-feats">
            <Reveal className="fx-up" index={1}>
              <div className="feats" data-theme="paper">
                <div>
                  <h3 className="feats__h">Match analysis</h3>
                  <ul className="checks">
                    <li>Player and ball tracking linked to teams and names</li>
                    <li>Possession analysis and changes in control</li>
                    <li>Passes, carries, crosses, shots and restarts</li>
                    <li>Performance maps and match statistics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="feats__h">Review, draw, explain</h3>
                  <ul className="checks">
                    <li>Tactical drawing overlays on paused video frames</li>
                    <li>Passing maps, shooting maps, heat maps and an xG race</li>
                    <li>Expected threat (xT), expected assists (xA) and expected goals (xG)</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="ml-body">
            <Reveal className="fx-right" index={2}>
              <div className="cut cut--red cut--lg lift">
                <div className="cut__in clip-tr issue-body" data-theme="paper">
                  <div className="issue-head">
                    <span className="tag">Issue #01</span>
                    <StatusLabel status="live">MVP · Live demo</StatusLabel>
                  </div>
                  <p className="issue-kicker">Sports AI · Computer Vision</p>
                  <h3 className="issue-title" id="ml-title">
                    MatchLens
                  </h3>
                  <p className="issue-hook">Turning football footage into structured match intelligence.</p>
                  <p className="issue-desc">
                    MatchLens is a football video-analysis platform for clubs, coaches, and analysts. It turns match footage into player and ball tracking,
                    possession analysis, match events, and performance metrics that help explain tactical decisions.
                  </p>
                  <ProjectMeta items={mlMeta} />
                  <ul className="tags" aria-label="MatchLens tags">
                    <li>
                      <TechTag>Computer Vision</TechTag>
                    </li>
                    <li>
                      <TechTag>Object Tracking</TechTag>
                    </li>
                    <li>
                      <TechTag>Sports Analytics</TechTag>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </article>

        <div className="spread">
          <article className="issue issue--ad" aria-labelledby="ad-title">
            <Reveal className="fx-left">
              <div className="cut cut--yellow lift" style={{ display: 'flex', flex: '1' } as React.CSSProperties}>
                <div className="cut__in clip-r" data-theme="paper">
                  <div className="ad-art" role="img" aria-label="Illustration: a campaign dashboard and a car carrying a roof-mounted advertising screen">
                    <div className="dots" aria-hidden="true" />
                    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                      <g className="ill-move">
                        <rect className="ill-ink" x="30" y="58" width="236" height="150" />
                        <rect className="ill-blue" x="44" y="72" width="208" height="20" />
                        <rect className="ill-gray" x="44" y="102" width="64" height="40" />
                        <rect className="ill-gray" x="116" y="102" width="64" height="40" />
                        <rect className="ill-gray" x="188" y="102" width="64" height="40" />
                        <rect className="ill-yel" x="52" y="168" width="18" height="30" />
                        <rect className="ill-red" x="76" y="154" width="18" height="44" />
                        <rect className="ill-blue" x="100" y="162" width="18" height="36" />
                        <path className="ill-ink-thin draw" pathLength="1" d="M134 192 L160 170 L186 178 L210 154 L246 160" />
                        <path className="ill-ink" d="M132 208 L122 250 M168 208 L178 250 M100 250 H 200" />
                      </g>
                      <path className="ad-road" d="M214 302 H 640" />
                      <g className="ad-car">
                        <path className="ad-speed draw" pathLength="1" d="M236 238 H 284 M250 254 H 290 M228 270 H 286" />
                        <path className="ill-signal draw" pathLength="1" d="M462 98 A26 26 0 0 1 514 98 M446 86 A42 42 0 0 1 530 86" />
                        <path className="ill-ink" d="M458 186 V 168 M518 186 V 168" />
                        <rect className="ill-ink" x="420" y="110" width="136" height="60" rx="6" />
                        <rect className="ad-screen" x="428" y="118" width="120" height="44" rx="3" />
                        <image href={images.logos.adlify} x="434" y="123" width="34" height="34" />
                        <path className="ad-scr-line" d="M478 133 H 536 M478 147 H 520" />
                        <path
                          className="ill-ink"
                          d="M300 270 V 248 Q 300 232 318 230 L 388 224 L 426 192 Q 434 186 448 186 L 528 186 Q 544 186 556 198 L 588 226 L 610 232 Q 624 236 624 252 V 270 Z"
                        />
                        <path className="ad-glass" d="M400 226 L 432 196 L 480 196 L 480 226 Z" />
                        <path className="ad-glass" d="M490 196 L 528 196 Q 540 196 548 204 L 572 226 L 490 226 Z" />
                        <path className="ill-ink-thin" d="M485 230 V 266 M440 240 H 458 M520 240 H 538" />
                        <rect className="ill-yel" x="610" y="240" width="12" height="10" />
                        <rect className="ill-red" x="301" y="240" width="10" height="10" />
                        <circle className="ad-tire" cx="352" cy="274" r="26" />
                        <circle className="ill-gray" cx="352" cy="274" r="11" />
                        <circle className="ad-tire" cx="566" cy="274" r="26" />
                        <circle className="ill-gray" cx="566" cy="274" r="11" />
                      </g>
                    </svg>
                  </div>
                  <div className="issue-body">
                    <button
                      type="button"
                      className="shot-thumb shot-thumb--wide"
                      aria-label="View the Adlify dashboard screenshot at full size"
                      onMouseEnter={zoom.show('ad')}
                      onMouseLeave={zoom.hide('ad')}
                      onFocus={zoom.show('ad')}
                      onBlur={zoom.hide('ad')}
                      onClick={zoom.pin('ad')}
                      onKeyDown={zoom.onKeyDown}
                    >
                      <img src={images.shots.adlify} alt="" />
                      <span className="shot-thumb__tag">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <circle cx="6.5" cy="6.5" r="4.5" />
                          <path d="M10 10 L 14.5 14.5" />
                        </svg>
                        Screen
                      </span>
                    </button>
                    <div className="issue-head">
                      <span className="tag">Issue #02</span>
                    </div>
                    <p className="issue-kicker">AdTech · Connected Systems</p>
                    <div className="pj-name">
                      <span className="pj-emblem" aria-hidden="true">
                        <img className="pj-logo" src={images.logos.adlify} alt="" />
                      </span>
                      <h3 className="issue-title" id="ad-title">
                        Adlify
                      </h3>
                    </div>
                    <p className="issue-hook">Connecting mobile advertising screens with campaign intelligence.</p>
                    <p className="issue-desc">
                      Adlify is a digital-signage advertising platform for car-mounted screens. Screens pair securely and retrieve their assigned playlists,
                      while a rule-based scheduler controls when and where ads play. GPS data feeds a live fleet map and heat maps, impressions are billed by
                      zone, and advertisers monitor their campaigns through a dedicated portal.
                    </p>
                    <div className="contrib">
                      <h4 className="contrib__h">My contribution</h4>
                      <ul className="checks">
                        <li>The advertisers' dashboard, built in Flutter</li>
                        <li>The advertising-screen apps, built in Flutter, with Java for screen control</li>
                      </ul>
                    </div>
                    <ul className="tags" aria-label="Adlify tags">
                      <li>
                        <TechTag>Flutter</TechTag>
                      </li>
                      <li>
                        <TechTag>Java</TechTag>
                      </li>
                      <li>
                        <TechTag>Digital Signage</TechTag>
                      </li>
                      <li>
                        <TechTag>GPS &amp; Mapping</TechTag>
                      </li>
                      <li>
                        <TechTag>Advertising Technology</TechTag>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>

          <article className="issue issue--cx" aria-labelledby="cx-title">
            <Reveal className="fx-right" index={1}>
              <div className="cut cut--red lift" style={{ display: 'flex', flex: '1' } as React.CSSProperties}>
                <div className="cut__in clip-l" data-theme="paper">
                  <div className="cx-art" role="img" aria-label="Illustration: a phone with a shopping interface and a cart in motion">
                    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                      <polygon
                        className="ill-burst"
                        transform="translate(150 20) scale(.9)"
                        points="200,-27 233,46 305,-13 289,81 353,82 315,139 375,170 302,197 363,264 289,259 288,322 229,280 200,353 167,291 105,335 113,257 25,271 87,200 -3,170 73,136 52,84 106,76 100,-3 172,64"
                      />
                      <g className="ill-move">
                        <g transform="rotate(-8 300 190)">
                          <rect className="ill-ink" x="232" y="30" width="148" height="300" rx="24" />
                          <rect className="ill-blue" x="248" y="58" width="116" height="20" />
                          <rect className="ill-gray" x="248" y="88" width="54" height="62" />
                          <rect className="ill-gray" x="310" y="88" width="54" height="62" />
                          <rect className="ill-gray" x="248" y="160" width="54" height="62" />
                          <rect className="ill-gray" x="310" y="160" width="54" height="62" />
                          <path className="ill-ink-thin" d="M248 88 L302 150 M302 88 L248 150 M310 88 L364 150 M364 88 L310 150" />
                          <rect className="ill-red" x="248" y="276" width="116" height="30" />
                        </g>
                      </g>
                      <g className="cx-cart">
                        <line
                          className="ill-ink-thin draw"
                          pathLength="1"
                          x1="396"
                          y1="196"
                          x2="450"
                          y2="196"
                          style={{ strokeWidth: '5' } as React.CSSProperties}
                        />
                        <line
                          className="ill-ink-thin draw"
                          pathLength="1"
                          x1="380"
                          y1="222"
                          x2="446"
                          y2="222"
                          style={{ strokeWidth: '5' } as React.CSSProperties}
                        />
                        <line
                          className="ill-ink-thin draw"
                          pathLength="1"
                          x1="402"
                          y1="248"
                          x2="452"
                          y2="248"
                          style={{ strokeWidth: '5' } as React.CSSProperties}
                        />
                        <path
                          className="ill-ink"
                          d="M462 170 H 484 L 506 260 H 590 L 606 196 H 494"
                          style={{ fill: 'var(--paper-bright)' } as React.CSSProperties}
                        />
                        <circle className="ill-ink" cx="518" cy="288" r="13" />
                        <circle className="ill-ink" cx="580" cy="288" r="13" />
                      </g>
                      <g transform="rotate(14 110 120)">
                        <path className="ill-yel" d="M60 80 H 150 L 178 112 L 150 144 H 60 Z" style={{ fill: 'var(--paper-bright)' } as React.CSSProperties} />
                        <circle className="ill-ink-thin" cx="152" cy="112" r="7" />
                        <path className="ill-ink-thin" d="M78 104 H 128 M78 122 H 116" />
                      </g>
                    </svg>
                  </div>
                  <div className="issue-body">
                    <button
                      type="button"
                      className="shot-thumb shot-thumb--phone"
                      aria-label="View the CartX app screenshot at full size"
                      onMouseEnter={zoom.show('cx')}
                      onMouseLeave={zoom.hide('cx')}
                      onFocus={zoom.show('cx')}
                      onBlur={zoom.hide('cx')}
                      onClick={zoom.pin('cx')}
                      onKeyDown={zoom.onKeyDown}
                    >
                      <img src={images.shots.cartx} alt="" />
                      <span className="shot-thumb__tag">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <circle cx="6.5" cy="6.5" r="4.5" />
                          <path d="M10 10 L 14.5 14.5" />
                        </svg>
                        Screen
                      </span>
                    </button>
                    <div className="issue-head">
                      <span className="tag">Issue #03</span>
                    </div>
                    <p className="issue-kicker">E-commerce · Marketplace</p>
                    <div className="pj-name">
                      <span className="pj-emblem" aria-hidden="true">
                        <img className="pj-logo" src={images.logos.cartx} alt="" />
                      </span>
                      <h3 className="issue-title" id="cx-title">
                        CartX
                      </h3>
                    </div>
                    <p className="issue-hook">Connecting shoppers with products and independent sellers.</p>
                    <p className="issue-desc">
                      CartX is a marketplace and commerce platform focused on connecting shoppers with products and independent sellers. It brings together
                      product discovery, catalogs, offers, and customer interaction within a regional market.
                    </p>
                    <ProjectMeta items={cxMeta} />
                    <ul className="tags" aria-label="CartX tags">
                      <li>
                        <TechTag>Flutter</TechTag>
                      </li>
                      <li>
                        <TechTag>Mobile Development</TechTag>
                      </li>
                      <li>
                        <TechTag>E-commerce</TechTag>
                      </li>
                      <li>
                        <TechTag>Marketplace</TechTag>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>
        </div>

        <div className="spread">
          <article className="issue issue--ad issue--kk" aria-labelledby="kk-title">
            <Reveal className="fx-left">
              <div className="cut cut--blue lift" style={{ display: 'flex', flex: '1' } as React.CSSProperties}>
                <div className="cut__in clip-r" data-theme="paper">
                  <div className="kk-art" role="img" aria-label="Illustration: a camera above a conveyor belt inspecting biscuits, one flagged with a crack">
                    <div className="dots" aria-hidden="true" />
                    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                      <polygon className="kk-beam" points="306,112 334,112 576,250 64,250" />
                      <g className="kk-cam">
                        <rect className="ill-ink" x="300" y="-10" width="40" height="40" />
                        <rect className="ill-ink" x="250" y="28" width="140" height="68" />
                        <rect className="ill-red" x="266" y="42" width="22" height="14" />
                        <circle className="ill-ink" cx="320" cy="104" r="22" />
                        <circle className="ill-blue" cx="320" cy="104" r="11" />
                      </g>
                      <path className="ill-ink" d="M96 300 V 356 M544 300 V 356" />
                      <rect className="ill-ink" x="24" y="268" width="592" height="40" rx="20" />
                      <path className="kk-belt" d="M58 288 H 582" />
                      <circle className="ill-yel" cx="46" cy="288" r="11" />
                      <circle className="ill-yel" cx="594" cy="288" r="11" />
                      <g className="kk-run">
                        <ellipse className="ill-yel" cx="120" cy="252" rx="46" ry="15" />
                        <ellipse className="ill-yel" cx="240" cy="252" rx="46" ry="15" />
                        <ellipse className="ill-yel" cx="400" cy="252" rx="46" ry="15" />
                        <ellipse className="ill-yel" cx="520" cy="252" rx="46" ry="15" />
                        <path
                          className="kk-holes"
                          d="M106 250 h1 M120 254 h1 M134 250 h1 M226 250 h1 M240 254 h1 M254 250 h1 M506 250 h1 M520 254 h1 M534 250 h1"
                        />
                        <path className="ill-ink-thin" d="M368 246 L382 256 L392 245 L406 257 L418 247 L430 254" />
                        <rect className="kk-ok draw" pathLength="1" x="66" y="226" width="108" height="48" />
                        <rect className="kk-ok draw" pathLength="1" x="186" y="226" width="108" height="48" />
                        <rect className="kk-ok draw" pathLength="1" x="466" y="226" width="108" height="48" />
                        <rect className="kk-bad draw" pathLength="1" x="346" y="222" width="108" height="54" />
                        <rect className="kk-tab kk-tab--ok" x="66" y="200" width="44" height="24" />
                        <text className="kk-t" x="75" y="217">
                          OK
                        </text>
                        <rect className="kk-tab kk-tab--ok" x="186" y="200" width="44" height="24" />
                        <text className="kk-t" x="195" y="217">
                          OK
                        </text>
                        <rect className="kk-tab kk-tab--ok" x="466" y="200" width="44" height="24" />
                        <text className="kk-t" x="475" y="217">
                          OK
                        </text>
                        <rect className="kk-tab kk-tab--bad" x="346" y="194" width="96" height="26" />
                        <text className="kk-t kk-t--bad" x="355" y="213">
                          CRACK
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div className="issue-body">
                    <button
                      type="button"
                      className="shot-thumb shot-thumb--tall"
                      aria-label="View the Katakit dashboard screenshot at full size"
                      onMouseEnter={zoom.show('kk')}
                      onMouseLeave={zoom.hide('kk')}
                      onFocus={zoom.show('kk')}
                      onBlur={zoom.hide('kk')}
                      onClick={zoom.pin('kk')}
                      onKeyDown={zoom.onKeyDown}
                    >
                      <img src={images.shots.katakit} alt="" />
                      <span className="shot-thumb__tag">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <circle cx="6.5" cy="6.5" r="4.5" />
                          <path d="M10 10 L 14.5 14.5" />
                        </svg>
                        Screen
                      </span>
                    </button>
                    <div className="issue-head">
                      <span className="tag">Issue #04</span>
                    </div>
                    <p className="issue-kicker">Industrial AI · Computer Vision</p>
                    <div className="pj-name">
                      <span className="pj-emblem pj-emblem--wide" aria-hidden="true">
                        <img className="pj-logo" src={images.logos.katakit} alt="" />
                      </span>
                      <h3 className="issue-title" id="kk-title">
                        Katakit
                      </h3>
                    </div>
                    <p className="issue-hook">Replacing manual biscuit checks with real-time computer vision.</p>
                    <p className="issue-desc">
                      An automated quality-control system for the Digestive biscuit production line at Katakit, a Syrian food manufacturer. A camera above the
                      conveyor feeds a real-time computer-vision pipeline that inspects biscuits in place of manual checks.
                    </p>
                    <div className="contrib">
                      <h4 className="contrib__h">What it does</h4>
                      <ul className="checks">
                        <li>Watershed segmentation of touching biscuits</li>
                        <li>Detects cracks, size and shape issues, and burnt or undercooked biscuits</li>
                        <li>Live dashboard, alerts and exportable reports</li>
                        <li>Recommendations that point to potential root causes</li>
                      </ul>
                    </div>
                    <ul className="tags" aria-label="Katakit tags">
                      <li>
                        <TechTag>Computer Vision</TechTag>
                      </li>
                      <li>
                        <TechTag>Image Segmentation</TechTag>
                      </li>
                      <li>
                        <TechTag>Quality Control</TechTag>
                      </li>
                      <li>
                        <TechTag>Dashboards</TechTag>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </article>

          <article className="issue issue--cx issue--ch" aria-labelledby="ch-title">
            <Reveal className="fx-right" index={1}>
              <div className="cut cut--yellow lift" style={{ display: 'flex', flex: '1' } as React.CSSProperties}>
                <div className="cut__in clip-l" data-theme="paper">
                  <div className="ch-art" role="img" aria-label="Illustration: a staff dashboard, a guest booking app, a key card and a reception bell">
                    <div className="dots" aria-hidden="true" />
                    <svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                      <g>
                        <rect className="ill-ink" x="34" y="44" width="236" height="156" />
                        <rect className="ill-blue" x="48" y="58" width="208" height="20" />
                        <rect className="ill-gray" x="48" y="90" width="60" height="96" />
                        <path className="ill-ink-thin draw" pathLength="1" d="M122 98 H 244 M122 120 H 228 M122 142 H 240 M122 164 H 212" />
                        <rect className="ill-yel" x="222" y="152" width="22" height="22" />
                        <path className="ill-ink" d="M140 200 L 130 236 M170 200 L 180 236 M108 236 H 202" />
                      </g>
                      <g className="ill-move">
                        <g transform="rotate(6 380 190)">
                          <rect className="ill-ink" x="306" y="34" width="148" height="296" rx="24" />
                          <rect className="ill-blue" x="322" y="62" width="116" height="20" />
                          <rect className="ill-gray" x="324" y="96" width="24" height="24" />
                          <rect className="ill-gray" x="354" y="96" width="24" height="24" />
                          <rect className="ill-gray" x="384" y="96" width="24" height="24" />
                          <rect className="ill-gray" x="414" y="96" width="24" height="24" />
                          <rect className="ill-gray" x="324" y="126" width="24" height="24" />
                          <rect className="ill-yel" x="354" y="126" width="24" height="24" />
                          <rect className="ill-yel" x="384" y="126" width="24" height="24" />
                          <rect className="ill-yel" x="414" y="126" width="24" height="24" />
                          <rect className="ill-gray" x="324" y="156" width="24" height="24" />
                          <rect className="ill-gray" x="354" y="156" width="24" height="24" />
                          <rect className="ill-gray" x="384" y="156" width="24" height="24" />
                          <rect className="ill-gray" x="414" y="156" width="24" height="24" />
                          <path className="ill-ink-thin" d="M324 204 H 420 M324 224 H 398" />
                          <rect className="ill-red" x="322" y="278" width="116" height="30" />
                        </g>
                      </g>
                      <g transform="rotate(-12 140 290)">
                        <rect className="ill-yel" x="64" y="250" width="156" height="92" rx="10" />
                        <rect className="ch-stripe" x="64" y="268" width="156" height="18" />
                        <rect className="ill-gray" x="84" y="302" width="34" height="26" />
                      </g>
                      <g className="ch-bell">
                        <path className="ill-paper-line draw" pathLength="1" d="M512 186 L500 162 M546 178 V 150 M580 186 L592 162" />
                        <circle className="ill-ink" cx="546" cy="216" r="9" />
                        <path className="ill-yel" d="M486 290 A60 60 0 0 1 606 290 Z" style={{ strokeWidth: '5' } as React.CSSProperties} />
                        <rect className="ill-ink" x="466" y="290" width="160" height="22" />
                      </g>
                    </svg>
                  </div>
                  <div className="issue-body">
                    <button
                      type="button"
                      className="shot-thumb shot-thumb--phone"
                      aria-label="View the Carlton Hotel app screenshot at full size"
                      onMouseEnter={zoom.show('ch')}
                      onMouseLeave={zoom.hide('ch')}
                      onFocus={zoom.show('ch')}
                      onBlur={zoom.hide('ch')}
                      onClick={zoom.pin('ch')}
                      onKeyDown={zoom.onKeyDown}
                    >
                      <img src={images.shots.carlton} alt="" />
                      <span className="shot-thumb__tag">
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                          <circle cx="6.5" cy="6.5" r="4.5" />
                          <path d="M10 10 L 14.5 14.5" />
                        </svg>
                        Screen
                      </span>
                    </button>
                    <div className="issue-head">
                      <span className="tag">Issue #05</span>
                    </div>
                    <p className="issue-kicker">Hospitality · Digital Platforms</p>
                    <div className="pj-name">
                      <span className="pj-emblem" aria-hidden="true">
                        <img className="pj-logo" src={images.logos.carlton} alt="" />
                      </span>
                      <h3 className="issue-title" id="ch-title">
                        Carlton Hotel
                      </h3>
                    </div>
                    <p className="issue-hook">One platform for guests, bookings, and hotel operations.</p>
                    <p className="issue-desc">
                      An end-to-end hotel platform combining a guest mobile app, a public booking website, and a staff dashboard. It supports guest services and
                      hotel operations across front-desk, housekeeping, billing, support, events, and night-audit workflows.
                    </p>
                    <div className="contrib">
                      <h4 className="contrib__h">What it does</h4>
                      <ul className="checks">
                        <li>Live availability and online check-in</li>
                        <li>In-stay services, folio and express checkout</li>
                        <li>A loyalty programme</li>
                        <li>Five languages and fine-grained permissions throughout</li>
                      </ul>
                    </div>
                    <ul className="tags" aria-label="Carlton Hotel tags">
                      <li>
                        <TechTag>Mobile App</TechTag>
                      </li>
                      <li>
                        <TechTag>Booking Website</TechTag>
                      </li>
                      <li>
                        <TechTag>Staff Dashboard</TechTag>
                      </li>
                      <li>
                        <TechTag>Hospitality</TechTag>
                      </li>
                    </ul>
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
