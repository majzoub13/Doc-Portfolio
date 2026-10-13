/* @ds-bundle: {"format":4,"namespace":"Doc","components":[{"name":"Wordmark"},{"name":"Nav"},{"name":"Button"},{"name":"TextLink"},{"name":"IconButton"},{"name":"HeroHeadline"},{"name":"SectionHeading"},{"name":"ChapterLabel"},{"name":"Eyebrow"},{"name":"Prose"},{"name":"Annotation"},{"name":"Highlight"},{"name":"Panel"},{"name":"AngledPanel"},{"name":"ImagePanel"},{"name":"ChapterPanel"},{"name":"Callout"},{"name":"SpeechBubble"},{"name":"ProjectCard"},{"name":"ProjectMeta"},{"name":"TechTag"},{"name":"StatusLabel"},{"name":"CaseStudyHeader"},{"name":"Gallery"},{"name":"ProjectLinks"},{"name":"SkillCategory"},{"name":"MetaRow"},{"name":"LinkList"},{"name":"Icon"},{"name":"EmailLink"},{"name":"SocialLink"},{"name":"ContactCTA"},{"name":"ClosingCallout"},{"name":"Footer"},{"name":"Burst"},{"name":"Halftone"},{"name":"SpeedLines"},{"name":"Arrow"},{"name":"InkStroke"},{"name":"PanelNumber"},{"name":"Reveal"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var Fragment = React.Fragment;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); }
    return out.join(" ");
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k]; }
    return o;
  }

  /* ---------------- Icons: 24-grid, 2px stroke, square caps, miter joins ---------------- */
  var ICONS = {
    "arrow-right": [["path", { d: "M4 12h15" }], ["path", { d: "M13 6l6 6-6 6" }]],
    "arrow-up-right": [["path", { d: "M7 17L17 7" }], ["path", { d: "M8 7h9v9" }]],
    "external": [["path", { d: "M14 4h6v6" }], ["path", { d: "M20 4l-9 9" }], ["path", { d: "M18 14v6H4V6h6" }]],
    "mail": [["rect", { x: 3, y: 5, width: 18, height: 14 }], ["path", { d: "M3 6l9 7 9-7" }]],
    "menu": [["path", { d: "M3 6h18" }], ["path", { d: "M3 12h18" }], ["path", { d: "M3 18h12" }]],
    "close": [["path", { d: "M5 5l14 14" }], ["path", { d: "M19 5L5 19" }]],
    "code": [["path", { d: "M8 7l-5 5 5 5" }], ["path", { d: "M16 7l5 5-5 5" }], ["path", { d: "M14 4l-4 16" }]],
    "cpu": [["rect", { x: 6, y: 6, width: 12, height: 12 }], ["rect", { x: 10, y: 10, width: 4, height: 4 }], ["path", { d: "M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" }]],
    "layers": [["path", { d: "M12 3l9 5-9 5-9-5z" }], ["path", { d: "M3 13l9 5 9-5" }]],
    "database": [["ellipse", { cx: 12, cy: 5, rx: 8, ry: 3 }], ["path", { d: "M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" }], ["path", { d: "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" }]],
    "play": [["path", { d: "M7 4l13 8-13 8z" }]],
    "file": [["path", { d: "M6 2h9l5 5v15H6z" }], ["path", { d: "M14 2v6h6" }], ["path", { d: "M9 13h8M9 17h8" }]],
    "branch": [["circle", { cx: 6, cy: 5, r: 2 }], ["circle", { cx: 6, cy: 19, r: 2 }], ["circle", { cx: 18, cy: 6, r: 2 }], ["path", { d: "M6 7v10" }], ["path", { d: "M18 8c0 5-6 4-11.5 9" }]],
    "link": [["path", { d: "M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" }], ["path", { d: "M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" }]],
    "eye": [["path", { d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" }], ["circle", { cx: 12, cy: 12, r: 3 }]],
    "ball": [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M12 8l3.5 2.5-1.3 4H9.8l-1.3-4z" }], ["path", { d: "M12 8V3.5M15.5 10.5l4.2-1.4M14.2 14.5l2.6 3.7M9.8 14.5l-2.6 3.7M8.5 10.5L4.3 9.1" }]],
    "download": [["path", { d: "M12 3v12" }], ["path", { d: "M7 10l5 5 5-5" }], ["path", { d: "M4 21h16" }]],
    "pin": [["path", { d: "M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" }], ["circle", { cx: 12, cy: 10, r: 2.5 }]],
    "user": [["circle", { cx: 12, cy: 8, r: 4 }], ["path", { d: "M4 21c0-4 4-6 8-6s8 2 8 6" }]],
    "spark": [["path", { d: "M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" }]],
    "chart": [["path", { d: "M3 3v18h18" }], ["path", { d: "M7 15l4-4 3 3 6-7" }]],
    "copy": [["rect", { x: 8, y: 8, width: 13, height: 13 }], ["path", { d: "M16 8V3H3v13h5" }]],
    "image": [["rect", { x: 3, y: 4, width: 18, height: 16 }], ["circle", { cx: 9, cy: 10, r: 2 }], ["path", { d: "M3 18l6-5 4 3 3-2 5 4" }]],
    "chevron-down": [["path", { d: "M6 9l6 6 6-6" }]],
    "check": [["path", { d: "M4 12l5 5L20 6" }]]
  };
  function Icon(props) {
    var parts = ICONS[props.name] || ICONS["arrow-right"];
    var size = props.size || 24;
    var label = props.title;
    return h("svg", {
      className: cx("doc-icon", props.className), width: size, height: size, viewBox: "0 0 24 24",
      "aria-hidden": label ? undefined : "true", role: label ? "img" : undefined, "aria-label": label, focusable: "false"
    }, parts.map(function (p, i) { return h(p[0], Object.assign({ key: i }, p[1])); }));
  }
  Icon.names = Object.keys(ICONS);

  /* ---------------- Brand ---------------- */
  function Wordmark(props) {
    var variant = props.variant || "type";
    var inner = h(Fragment, null,
      h("span", { className: "doc-wordmark__type", "aria-hidden": props.withName ? undefined : undefined }, "Doc"),
      props.withName ? h("span", { className: "doc-wordmark__name" }, "Mohamed", h("br"), "Al-Majzoub") : null);
    var cls = cx("doc-wordmark", "doc-wordmark--" + variant, props.size && props.size !== "md" ? "doc-wordmark--" + props.size : null, props.className);
    if (props.href) return h("a", { className: cx(cls, "doc-focus"), href: props.href, "aria-label": "Doc — Mohamed Al-Majzoub, home" }, inner);
    return h("span", { className: cls }, inner);
  }

  /* ---------------- Actions ---------------- */
  function Button(props) {
    var variant = props.variant || "primary";
    var icon = props.icon;
    var lead = icon && props.iconPosition === "start";
    var cls = cx("doc-btn", "doc-btn--" + variant, props.size === "sm" ? "doc-btn--sm" : null, props.block ? "doc-btn--block" : null, props.className);
    var rest = omit(props, ["variant", "icon", "iconPosition", "size", "block", "className", "children", "href", "state", "disabled"]);
    var kids = [
      lead ? h(Icon, { key: "i", name: icon, className: "doc-btn__icon" }) : null,
      h("span", { key: "l" }, props.children),
      icon && !lead ? h(Icon, { key: "t", name: icon, className: "doc-btn__icon doc-btn__icon--trail" }) : null
    ];
    if (props.href) {
      return h("a", Object.assign({ className: cls, href: props.disabled ? undefined : props.href, "data-state": props.state, "aria-disabled": props.disabled ? "true" : undefined, role: props.disabled ? "link" : undefined }, rest), kids);
    }
    return h("button", Object.assign({ type: "button", className: cls, "data-state": props.state, disabled: props.disabled }, rest), kids);
  }

  function TextLink(props) {
    var rest = omit(props, ["external", "tech", "state", "className", "children"]);
    return h("a", Object.assign({
      className: cx("doc-link", props.tech ? "doc-link--tech" : null, props.className), "data-state": props.state,
      target: props.external ? "_blank" : undefined, rel: props.external ? "noopener noreferrer" : undefined
    }, rest), props.children,
      props.external ? h(Icon, { name: "arrow-up-right", className: "doc-link__icon" }) : null,
      props.external ? h("span", { className: "doc-sr" }, " (opens in a new tab)") : null);
  }

  function IconButton(props) {
    var variant = props.variant || "square";
    var cls = cx("doc-iconbtn", variant === "round" ? "doc-iconbtn--round" : null, variant === "ink" ? "doc-iconbtn--ink" : null, props.className);
    var rest = omit(props, ["icon", "label", "variant", "className", "state", "href"]);
    var kid = h(Icon, { name: props.icon });
    if (props.href) return h("a", Object.assign({ className: cls, href: props.href, "aria-label": props.label, title: props.label, "data-state": props.state }, rest), kid);
    return h("button", Object.assign({ type: "button", className: cls, "aria-label": props.label, title: props.label, "data-state": props.state }, rest), kid);
  }

  /* ---------------- Navigation ---------------- */
  var navCount = 0;
  function Nav(props) {
    var items = props.items || [];
    var st = React.useState(!!props.defaultOpen); var open = st[0], setOpen = st[1];
    var idRef = React.useRef(null); if (!idRef.current) { navCount += 1; idRef.current = "doc-nav-sheet-" + navCount; }
    function list(extra) {
      return h("ul", { className: cx("doc-nav__list", extra) }, items.map(function (it, i) {
        return h("li", { key: i }, h("a", { className: "doc-nav__link", href: it.href || "#", "aria-current": it.current ? "page" : undefined }, it.label));
      }));
    }
    return h("header", { className: cx("doc-nav", props.className) },
      h("nav", { "aria-label": props.label || "Primary" },
        h("div", { className: "doc-nav__bar" },
          h(Wordmark, { href: props.brandHref || "#", size: "sm", variant: props.brandVariant || "type" }),
          list("doc-nav__list--desk"),
          h("div", { className: "doc-nav__actions" },
            props.cta ? h(Button, { variant: "primary", size: "sm", href: props.cta.href, className: "doc-nav__cta" }, props.cta.label) : null,
            h(IconButton, { className: "doc-nav__menu", icon: open ? "close" : "menu", label: open ? "Close menu" : "Open menu", "aria-expanded": open ? "true" : "false", "aria-controls": idRef.current, onClick: function () { setOpen(!open); } }))),
        h("div", { id: idRef.current, className: "doc-nav__sheet", "data-open": open ? "true" : "false" },
          list(null),
          props.cta ? h(Button, { variant: "primary", href: props.cta.href, icon: "arrow-right" }, props.cta.label) : null)));
  }

  /* ---------------- Typography ---------------- */
  function HeroHeadline(props) {
    var Tag = props.as || "h1";
    var lines = props.lines;
    var body = lines ? lines.map(function (ln, i) {
      if (typeof ln === "string") return h("span", { key: i, className: "doc-hero__line" }, ln);
      var inner = ln.text;
      if (ln.style === "marker") inner = h(Highlight, { variant: "marker" }, ln.text);
      if (ln.style === "ink") inner = h(Highlight, { variant: "ink" }, ln.text);
      return h("span", { key: i, className: cx("doc-hero__line", ln.style === "accent" ? "doc-hero__accent" : null, ln.style === "outline" ? "doc-hero__outline" : null) }, inner);
    }) : props.children;
    return h(Tag, { className: cx("doc-hero", props.slant ? "doc-hero--slant" : null, props.className) }, body);
  }

  function ChapterLabel(props) {
    var n = props.number;
    var num = typeof n === "number" && n < 10 ? "0" + n : n;
    return h("span", { className: cx("doc-chapter", props.className) },
      h("span", { className: "doc-chapter__mark", "aria-hidden": "true" }),
      h("span", null, (props.prefix || "Chapter") + " " + num),
      props.title ? h(Fragment, null, h("span", { className: "doc-chapter__sep", "aria-hidden": "true" }, "—"), h("span", { className: "doc-chapter__title" }, props.title)) : null);
  }

  function Eyebrow(props) {
    return h("span", { className: cx("doc-eyebrow", props.tech ? "doc-eyebrow--tech" : null, props.className) }, props.children);
  }

  function SectionHeading(props) {
    var level = props.level || 2;
    var Tag = "h" + level;
    return h("div", { className: cx("doc-section-heading", level > 2 ? "doc-section-heading--h3" : null, props.className) },
      props.chapter != null ? h(ChapterLabel, { number: props.chapter, title: props.chapterTitle }) : null,
      props.eyebrow ? h(Eyebrow, null, props.eyebrow) : null,
      h(Tag, { className: "doc-section-heading__title" }, props.title),
      props.rule === false ? null : h("span", { className: "doc-section-heading__rule", "aria-hidden": "true" }),
      props.intro ? h("p", { className: "doc-section-heading__intro" }, props.intro) : null);
  }

  function Prose(props) {
    return h("div", { className: cx("doc-prose", props.lead ? "doc-prose--lead" : null, props.secondary ? "doc-prose--secondary" : null, props.className) }, props.children);
  }

  var ANNOT_ARROW = { left: "M52 8 C 36 4, 16 10, 8 26", head: "M3 17 L8 28 L18 23" };
  function Annotation(props) {
    var dir = props.direction || "left";
    var arrow = h("svg", { className: "doc-annot__arrow", viewBox: "0 0 56 36", "aria-hidden": "true", style: dir === "right" ? { transform: "scaleX(-1)" } : dir === "down" ? { transform: "rotate(-70deg)", width: 40 } : null },
      h("path", { d: ANNOT_ARROW.left }), h("path", { d: ANNOT_ARROW.head }));
    return h("span", { className: cx("doc-annot", "doc-annot--" + dir, props.className) }, arrow, h("span", null, props.children));
  }

  function Highlight(props) {
    var v = props.variant || "marker";
    var deco = null;
    if (v === "underline") deco = h("svg", { viewBox: "0 0 200 20", preserveAspectRatio: "none", "aria-hidden": "true" },
      h("path", { d: "M3 13 C 50 6, 120 5, 197 9", strokeWidth: 4, vectorEffect: "non-scaling-stroke" }),
      h("path", { d: "M24 18 C 80 13, 140 13, 182 15", strokeWidth: 2.5, vectorEffect: "non-scaling-stroke" }));
    if (v === "circle") deco = h("svg", { viewBox: "0 0 200 80", preserveAspectRatio: "none", "aria-hidden": "true" },
      h("path", { d: "M34 10 C 96 -2, 192 6, 195 38 C 198 70, 64 80, 16 60 C -4 48, 6 16, 76 7", strokeWidth: 3, vectorEffect: "non-scaling-stroke" }));
    return h("span", { className: cx("doc-hl", "doc-hl--" + v, props.className) }, props.children, deco);
  }

  /* ---------------- Panels ---------------- */
  function Panel(props) {
    var Tag = props.as || "div";
    var v = props.variant || "standard";
    return h(Tag, {
      className: cx("doc-panel", v !== "standard" ? "doc-panel--" + v : null, props.accent ? "doc-panel--accent" : null, props.halftone ? "doc-panel--halftone" : null, props.className),
      "data-theme": props.theme, style: props.style, "aria-labelledby": props["aria-labelledby"]
    }, props.label ? h("span", { className: "doc-panel__label" }, props.label) : null, props.children);
  }

  function AngledPanel(props) {
    var cut = props.cut || "slant";
    var tone = props.tone || "paper";
    var Tag = props.as || "div";
    return h(Tag, { className: cx("doc-angled", "doc-angled--" + cut, tone !== "paper" ? "doc-angled--" + tone : null, props.className) },
      h("div", { className: "doc-angled__frame" }, h("div", { className: "doc-angled__fill" }, props.children)));
  }

  var ASPECTS = { portrait: "var(--aspect-portrait)", tall: "var(--aspect-tall)", wide: "var(--aspect-wide)", cinema: "var(--aspect-cinema)", square: "var(--aspect-square)" };
  var PH_ICON = { portrait: "user", screenshot: "image", football: "ball", diagram: "layers", product: "image" };
  function Frame(props) {
    var t = props.treatment || "t1";
    var style = Object.assign({}, props.aspect ? { "--doc-ar": ASPECTS[props.aspect] || props.aspect } : null, props.focal ? { "--doc-focal": props.focal } : null);
    var ph = props.placeholder;
    return h("div", {
      className: cx("doc-frame", "doc-frame--" + t, props.tint ? "doc-frame--tint-" + props.tint : null, props.frame === "hero" ? "doc-frame--hero" : null, props.frame === "flat" ? "doc-frame--flat" : null, props.interactive ? "doc-frame--interactive" : null, props.className),
      style: style
    },
      props.sample ? h("span", { className: "doc-sample" }, "Sample image") : null,
      props.src ? h("img", { src: props.src, alt: props.alt || "", loading: props.eager ? "eager" : "lazy", decoding: "async" }) :
        h("div", { className: "doc-ph", role: "img", "aria-label": (ph && ph.label) || "Image placeholder" },
          h(Icon, { name: PH_ICON[(ph && ph.kind) || "screenshot"] || "image" }),
          h("span", { className: "doc-ph__kind" }, (ph && ph.title) || "Asset pending"),
          ph && ph.spec ? h("span", { className: "doc-ph__spec" }, ph.spec) : null));
  }
  function ImagePanel(props) {
    var frame = h(Frame, props);
    if (!props.caption && !props.figNo) return h("div", { className: "doc-figure" }, frame);
    return h("figure", { className: cx("doc-figure", props.figureClassName) }, frame,
      h("figcaption", { className: "doc-cap" }, props.figNo ? h("span", { className: "doc-cap__no" }, props.figNo) : null, h("span", null, props.caption)));
  }

  function ChapterPanel(props) {
    var n = props.number;
    var num = typeof n === "number" && n < 10 ? "0" + n : String(n);
    var Tag = "h" + (props.level || 2);
    return h(Panel, { variant: props.variant || "standard", halftone: props.halftone !== false, className: cx("doc-chpanel", props.className), as: "section" },
      h("div", { className: "doc-chpanel__inner" },
        h("span", { className: "doc-chpanel__num", "aria-hidden": "true" }, num),
        h("div", null,
          h(ChapterLabel, { number: n, title: props.label }),
          h(Tag, { className: "doc-chpanel__title" }, props.title),
          props.children ? h("p", { className: "doc-chpanel__body" }, props.children) : null)));
  }

  function Callout(props) {
    var tone = props.tone || "yellow";
    return h("aside", { className: cx("doc-callout", tone !== "yellow" ? "doc-callout--" + tone : null, props.className), "aria-label": props.tab || props.title },
      props.tab ? h("span", { className: "doc-callout__tab" }, props.tab) : null,
      props.title ? h("p", { className: "doc-callout__title" }, props.title) : null,
      h("div", { className: "doc-callout__body" }, props.children));
  }

  function SpeechBubble(props) {
    var tone = props.tone || "paper";
    return h("div", { className: cx("doc-bubble", props.tail === "right" ? "doc-bubble--right" : null, tone === "yellow" ? "doc-bubble--yellow" : null, props.className) },
      props.speaker ? h("span", { className: "doc-bubble__speaker" }, props.speaker) : null,
      h("span", null, props.children),
      h("svg", { className: "doc-bubble__tail", viewBox: "0 0 34 26", "aria-hidden": "true" },
        h("path", { d: "M2 0 L30 0 L5 26 Z" }), h("path", { d: "M6.5 0 L24.5 0 L8.5 17.5 Z" })));
  }

  /* ---------------- Projects ---------------- */
  var STATUS = {
    live: { label: "Live", glyph: h("svg", { className: "doc-status__glyph", viewBox: "0 0 10 10", "aria-hidden": "true" }, h("circle", { cx: 5, cy: 5, r: 4, fill: "currentColor" })) },
    progress: { label: "In progress", glyph: h("svg", { className: "doc-status__glyph", viewBox: "0 0 10 10", "aria-hidden": "true" }, h("circle", { cx: 5, cy: 5, r: 4, fill: "none", stroke: "currentColor", strokeWidth: 1.6 }), h("path", { d: "M5 1 A4 4 0 0 1 5 9 Z", fill: "currentColor" })) },
    research: { label: "Research", glyph: h("svg", { className: "doc-status__glyph", viewBox: "0 0 10 10", "aria-hidden": "true" }, h("path", { d: "M5 .8 L9.2 5 L5 9.2 L.8 5 Z", fill: "none", stroke: "currentColor", strokeWidth: 1.6 })) },
    featured: { label: "Featured", glyph: h("svg", { className: "doc-status__glyph", viewBox: "0 0 10 10", "aria-hidden": "true" }, h("path", { d: "M5 .5 L6.3 3.6 L9.6 3.8 L7 6 L7.9 9.3 L5 7.5 L2.1 9.3 L3 6 L.4 3.8 L3.7 3.6 Z", fill: "currentColor" })) },
    archived: { label: "Archived", glyph: h("svg", { className: "doc-status__glyph", viewBox: "0 0 10 10", "aria-hidden": "true" }, h("rect", { x: 1, y: 1, width: 8, height: 8, fill: "currentColor" })) }
  };
  function StatusLabel(props) {
    var s = props.status || "live";
    var d = STATUS[s] || STATUS.live;
    return h("span", { className: cx("doc-status", "doc-status--" + s, props.className) }, d.glyph, props.children || d.label);
  }

  function TechTag(props) {
    var v = props.variant || "tag";
    var cls = cx("doc-tag", v !== "tag" ? "doc-tag--" + v : null, props.href ? "doc-tag--link" : null, props.className);
    var kids = [props.icon ? h(Icon, { key: "i", name: props.icon }) : null, props.children];
    if (props.href) return h("a", { className: cls, href: props.href }, kids);
    return h("span", { className: cls }, kids);
  }
  function Tags(props) {
    return h("ul", { className: "doc-tags", "aria-label": props.label || "Technologies" }, (props.items || []).map(function (t, i) {
      return h("li", { key: i }, h(TechTag, { variant: props.variant }, t));
    }));
  }

  function ProjectMeta(props) {
    return h("dl", { className: cx("doc-meta", props.className) }, (props.items || []).map(function (it, i) {
      return h("div", { key: i, className: "doc-meta__item" }, h("dt", null, it.label), h("dd", null, it.value));
    }));
  }

  function MetaRow(props) {
    return h("ul", { className: cx("doc-metarow", props.strong ? "doc-metarow--strong" : null, props.className), "aria-label": props.label }, (props.items || []).map(function (it, i) {
      if (typeof it === "string") return h("li", { key: i }, it);
      return h("li", { key: i }, h("span", { className: "doc-metarow__key" }, it.key), h("span", null, it.value));
    }));
  }

  function ProjectLinks(props) {
    return h("div", { className: cx("doc-plinks", props.className) },
      props.demo ? h(Button, { variant: "primary", size: "sm", href: props.demo.href, icon: props.demo.icon || "play", iconPosition: "start" }, props.demo.label || "Live demo") : null,
      props.repo ? h(Button, { variant: "outline", size: "sm", href: props.repo.href, icon: "branch", iconPosition: "start" }, props.repo.label || "Repository") : null,
      props.caseStudy ? h(TextLink, { href: props.caseStudy.href }, props.caseStudy.label || "Read the case file") : null);
  }

  function ProjectCard(props) {
    var v = props.variant || "compact";
    var img = props.image || {};
    var Title = "h" + (props.level || 3);
    if (v === "featured") {
      return h("article", { className: cx("doc-pcard", "doc-pcard--featured", props.flip ? "doc-pcard--flip" : null, props.className) },
        h("div", { className: "doc-pcard__grid" },
          h("div", { className: "doc-pcard__media" }, h(Frame, Object.assign({ treatment: "t1", aspect: "wide", frame: "standard" }, img))),
          h(Panel, { variant: "featured", accent: true, className: "doc-pcard__body" },
            h("div", { className: "doc-pcard__head" }, h("span", { className: "doc-pcard__fileno" }, props.fileNo), props.status ? h(StatusLabel, { status: props.status }) : null),
            h(Title, { className: "doc-pcard__title" }, props.title),
            h("p", { className: "doc-pcard__desc" }, props.description),
            props.tags ? h(Tags, { items: props.tags }) : null,
            props.links ? h(ProjectLinks, props.links) : null)));
    }
    return h("article", { className: cx("doc-pcard", "doc-pcard--compact", props.className), "data-state": props.state },
      h(Frame, Object.assign({ treatment: "t1", aspect: "wide", frame: "flat" }, img)),
      h("div", { className: "doc-pcard__body" },
        h("div", { className: "doc-pcard__head" }, h("span", { className: "doc-pcard__fileno" }, props.fileNo), props.status ? h(StatusLabel, { status: props.status }) : null),
        h(Title, { className: "doc-pcard__title" }, props.href ? h("a", { className: "doc-pcard__stretch", href: props.href }, props.title) : props.title),
        h("p", { className: "doc-pcard__desc" }, props.description),
        props.tags ? h(Tags, { items: props.tags.slice(0, 4) }) : null,
        props.href ? h("span", { className: "doc-pcard__more", "aria-hidden": "true" }, props.moreLabel || "Open case file", h(Icon, { name: "arrow-right" })) : null));
  }

  function CaseStudyHeader(props) {
    return h("header", { className: cx("doc-case", props.className) },
      h("div", { className: "doc-case__top" },
        h("div", null,
          h("div", { className: "doc-pcard__head", style: { justifyContent: "flex-start", gap: "var(--space-3)" } },
            h(ChapterLabel, { prefix: "Case file", number: props.fileNo }),
            props.status ? h(StatusLabel, { status: props.status }) : null),
          h("h1", { className: "doc-case__title" }, props.title)),
        h("div", null,
          h("p", { className: "doc-case__lead" }, props.lead),
          props.links ? h(ProjectLinks, props.links) : null)),
      props.meta ? h(ProjectMeta, { items: props.meta }) : null,
      props.image ? h(ImagePanel, Object.assign({ treatment: "t1", frame: "hero", className: "doc-case__frame", eager: true }, props.image)) : null);
  }

  function Gallery(props) {
    return h("div", { className: cx("doc-gallery", props.layout === "even" ? "doc-gallery--even" : null, props.className) },
      h("ul", { className: "doc-gallery__grid" }, (props.items || []).map(function (it, i) {
        return h("li", { key: i }, h(ImagePanel, Object.assign({ treatment: "t0", aspect: "wide", interactive: false, figNo: "Fig. " + (i + 1 < 10 ? "0" : "") + (i + 1) }, it)));
      })));
  }

  /* ---------------- Technical ---------------- */
  function SkillCategory(props) {
    var Tag = "h" + (props.level || 3);
    return h("section", { className: cx("doc-skill", props.className) },
      h("div", { className: "doc-skill__head" },
        props.icon ? h("span", { className: "doc-skill__icon", "aria-hidden": "true" }, h(Icon, { name: props.icon })) : null,
        h(Tag, { className: "doc-skill__title" }, props.title),
        props.items ? h("span", { className: "doc-skill__count", "aria-hidden": "true" }, (props.items.length < 10 ? "0" : "") + props.items.length) : null),
      props.note ? h("p", { className: "doc-skill__note" }, props.note) : null,
      h(Tags, { items: props.items, variant: props.variant || "tech", label: props.title }));
  }

  function LinkList(props) {
    return h("ul", { className: cx("doc-linklist", props.className) }, (props.items || []).map(function (it, i) {
      return h("li", { key: i }, h("a", {
        className: "doc-linklist__a", href: it.href || "#", "data-state": it.state,
        target: it.external ? "_blank" : undefined, rel: it.external ? "noopener noreferrer" : undefined
      }, h("span", { className: "doc-linklist__label" }, it.label), h("span", { className: "doc-linklist__meta" }, it.meta || ""),
        h(Icon, { name: it.external ? "arrow-up-right" : "arrow-right" }),
        it.external ? h("span", { className: "doc-sr" }, " (opens in a new tab)") : null));
    }));
  }

  /* ---------------- Contact ---------------- */
  function EmailLink(props) {
    var st = React.useState(false); var copied = st[0], setCopied = st[1];
    var link = h("a", { className: cx("doc-email", props.className), href: "mailto:" + props.address, "data-state": props.state }, props.address);
    if (!props.copy) return link;
    return h("span", { className: "doc-email-wrap" }, link,
      h(IconButton, {
        icon: copied ? "check" : "copy", label: copied ? "Email address copied" : "Copy email address",
        onClick: function () {
          try { navigator.clipboard.writeText(props.address).then(function () { setCopied(true); setTimeout(function () { setCopied(false); }, 1800); }, function () { }); } catch (e) { }
        }
      }),
      h("span", { className: "doc-email__copied", role: "status", "aria-live": "polite" }, copied ? "Copied" : ""));
  }

  function SocialLink(props) {
    var v = props.variant || "boxed";
    return h("a", { className: cx("doc-social", v === "bare" ? "doc-social--bare" : null, props.className), href: props.href || "#", target: "_blank", rel: "noopener noreferrer", "data-state": props.state },
      props.icon ? props.icon : null,
      h("span", { className: "doc-social__label" }, props.label),
      props.handle ? h("span", { className: "doc-social__handle" }, props.handle) : null,
      h(Icon, { name: "arrow-up-right" }),
      h("span", { className: "doc-sr" }, " (opens in a new tab)"));
  }

  function ContactCTA(props) {
    return h("section", { className: cx("doc-cta", props.className), "aria-labelledby": "doc-cta-title" },
      h(Panel, { variant: "featured", halftone: true },
        h("div", { className: "doc-cta__grid" },
          h("div", null,
            props.eyebrow ? h(Eyebrow, null, props.eyebrow) : null,
            h("h2", { id: "doc-cta-title", className: "doc-cta__title" }, props.title),
            props.body ? h("p", { className: "doc-cta__body" }, props.body) : null,
            props.email ? h(EmailLink, { address: props.email, copy: true }) : null),
          h("div", { className: "doc-cta__side" },
            props.bubble ? h(SpeechBubble, { speaker: props.bubble.speaker, tone: "yellow" }, props.bubble.text) : null,
            props.primary ? h(Button, { variant: "primary", href: props.primary.href, icon: "arrow-right" }, props.primary.label) : null,
            props.socials ? h("ul", { className: "doc-socials" }, props.socials.map(function (s, i) { return h("li", { key: i }, h(SocialLink, s)); })) : null))));
  }

  function SpeedLines(props) {
    var n = props.count || 9, w = props.width || 400, hh = props.height || 120;
    var lines = [];
    for (var i = 0; i < n; i++) {
      var y = (i + 0.5) * hh / n;
      var len = w * (0.35 + ((i * 37) % 11) / 18);
      var x2 = props.direction === "left" ? len : w;
      var x1 = props.direction === "left" ? 0 : w - len;
      lines.push(h("line", { key: i, x1: x1, y1: y, x2: x2, y2: y, strokeWidth: 1.5 + ((i * 7) % 4) }));
    }
    return h("svg", { className: cx("doc-speed", props.className), viewBox: "0 0 " + w + " " + hh, width: props.fluid ? "100%" : w, height: props.fluid ? "100%" : hh, preserveAspectRatio: "none", "aria-hidden": "true", style: props.style }, lines);
  }

  function burstPoints(n, ro, ri) {
    var pts = [];
    for (var i = 0; i < n * 2; i++) {
      var a = (Math.PI * i) / n - Math.PI / 2;
      var jitter = i % 2 === 0 ? (((i * 13) % 7) - 3) * 1.4 : (((i * 5) % 5) - 2) * 1.2;
      var r = (i % 2 === 0 ? ro : ri) + jitter;
      pts.push((Math.cos(a) * r).toFixed(1) + "," + (Math.sin(a) * r).toFixed(1));
    }
    return pts.join(" ");
  }
  function Burst(props) {
    var tone = props.tone || "yellow";
    var size = props.size || 160;
    return h("div", { className: cx("doc-burst", "doc-burst--" + tone, props.className), style: Object.assign({ width: props.fluid ? undefined : size, "--burst-size": Math.round(size * (props.textScale || 0.17)) + "px" }, props.style), role: props.children ? undefined : "presentation" },
      h("svg", { viewBox: "-56 -56 112 112", "aria-hidden": "true" }, h("polygon", { className: "doc-burst__shape", points: burstPoints(props.points || 13, 50, 34), vectorEffect: "non-scaling-stroke" })),
      props.children ? h("span", { className: "doc-burst__text" }, props.children) : null);
  }

  function ClosingCallout(props) {
    return h("section", { className: cx("doc-closing", props.className), "data-theme": props.theme || "ink", "aria-labelledby": "doc-closing-title" },
      h("div", { className: "doc-closing__lines", "aria-hidden": "true" }, h(SpeedLines, { count: 14, width: 800, height: 400, fluid: true, direction: "right" })),
      h("div", { className: "doc-closing__inner" },
        h("div", null,
          h("h2", { id: "doc-closing-title", className: "doc-closing__title" }, props.title || "To be continued…"),
          props.body ? h("p", { className: "doc-closing__body" }, props.body) : null,
          props.action ? h(Button, { variant: "primary", href: props.action.href, icon: "arrow-right" }, props.action.label) : null),
        props.burst === false ? null : h(Burst, { className: "doc-closing__burst", tone: "yellow", fluid: true, size: 200 }, props.burst || "Next issue")));
  }

  function Footer(props) {
    return h("footer", { className: cx("doc-footer doc-paper", props.className), "data-theme": props.theme || "ink" },
      h("div", { className: "doc-footer__inner" },
        h("div", null,
          h(Wordmark, { variant: "type", size: "lg", withName: true, href: props.brandHref || "#" }),
          props.tagline ? h("p", { className: "doc-footer__tag" }, props.tagline) : null),
        props.nav ? h("nav", { "aria-label": "Footer" }, h("p", { className: "doc-footer__h" }, "Index"),
          h("ul", { className: "doc-footer__nav" }, props.nav.map(function (n, i) { return h("li", { key: i }, h("a", { href: n.href || "#" }, n.label)); }))) : null,
        props.socials ? h("div", null, h("p", { className: "doc-footer__h" }, "Elsewhere"),
          h("ul", { className: "doc-socials", style: { flexDirection: "column", gap: 0 } }, props.socials.map(function (s, i) { return h("li", { key: i }, h(SocialLink, Object.assign({ variant: "bare" }, s))); }))) : null),
      h("div", { className: "doc-footer__base" },
        h("span", null, props.legal || ("© " + new Date().getFullYear() + " Mohamed Al-Majzoub")),
        props.note ? h("span", null, props.note) : null));
  }

  /* ---------------- Motifs ---------------- */
  function Halftone(props) {
    var tone = props.tone || "ink";
    var mask = props.mask || "fade";
    return h("div", {
      className: cx("doc-halftone", tone !== "ink" ? "doc-halftone--" + tone : null, mask !== "fade" ? "doc-halftone--" + mask : null, props.className), "aria-hidden": "true",
      style: Object.assign({ width: props.width || "100%", height: props.height || 120 }, props.pitch ? { "--ht-pitch": props.pitch + "px" } : null, props.dot ? { "--ht-dot": props.dot + "px" } : null, props.style)
    });
  }

  var ARROWS = {
    curve: { d: "M6 48 C 30 10, 70 6, 104 22", head: "M90 11 L105 22 L89 30" },
    loop: { d: "M6 50 C 20 22, 50 14, 52 34 C 54 50, 30 50, 36 34 C 44 14, 80 10, 110 18", head: "M97 7 L111 18 L96 27" },
    straight: { d: "M6 30 C 40 26, 80 34, 110 28", head: "M97 18 L111 28 L97 38" },
    down: { d: "M20 6 C 10 30, 30 46, 70 52", head: "M58 42 L71 52 L57 60" }
  };
  function Arrow(props) {
    var a = ARROWS[props.variant || "curve"];
    var tone = props.tone || "blue";
    return h("svg", { className: cx("doc-arrow", tone !== "blue" ? "doc-arrow--" + tone : null, props.className), viewBox: "0 0 116 60", width: props.width || 116, height: (props.width || 116) * 60 / 116, "aria-hidden": "true", style: Object.assign({ transform: props.flip ? "scaleX(-1)" : undefined }, props.style) },
      h("path", { d: a.d }), h("path", { d: a.head }));
  }

  var STROKES = {
    underline: { vb: "0 0 200 20", paths: [["M3 13 C 50 6, 120 5, 197 9", 4], ["M24 18 C 80 13, 140 13, 182 15", 2.5]], color: "var(--decor-burst)" },
    scribble: { vb: "0 0 200 80", paths: [["M34 10 C 96 -2, 192 6, 195 38 C 198 70, 64 80, 16 60 C -4 48, 6 16, 76 7", 3]], color: "var(--decor-annotation)" },
    swipe: { vb: "0 0 200 30", paths: [["M8 18 C 60 12, 140 14, 192 10", 18]], color: "var(--decor-marker)" },
    bracket: { vb: "0 0 20 120", paths: [["M16 4 C 8 4, 8 8, 8 20 L8 52 C 8 58, 4 60, 2 60 C 4 60, 8 62, 8 68 L8 100 C 8 112, 8 116, 16 116", 3]], color: "var(--decor-annotation)" },
    cross: { vb: "0 0 40 40", paths: [["M6 8 C 16 18, 26 26, 34 34", 4], ["M34 6 C 24 16, 16 26, 6 34", 4]], color: "var(--decor-burst)" }
  };
  function InkStroke(props) {
    var s = STROKES[props.kind || "underline"];
    return h("svg", { className: cx("doc-stroke", props.className), viewBox: s.vb, preserveAspectRatio: "none", width: props.width || 200, height: props.height || 20, "aria-hidden": "true", style: Object.assign({ color: props.color || s.color, overflow: "visible" }, props.style) },
      s.paths.map(function (p, i) { return h("path", { key: i, d: p[0], strokeWidth: p[1], vectorEffect: "non-scaling-stroke" }); }));
  }

  function PanelNumber(props) {
    var v = props.variant || "round";
    return h("span", { className: cx("doc-pnum", v !== "round" ? "doc-pnum--" + v : null, props.className), style: props.size ? { "--pnum": props.size + "px" } : null, "aria-label": props.label }, props.children);
  }

  /* ---------------- Motion ---------------- */
  function Reveal(props) {
    var ref = React.useRef(null);
    var st = React.useState(!!props.show); var shown = st[0], setShown = st[1];
    React.useEffect(function () {
      var el = ref.current; if (!el || shown) return;
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !("IntersectionObserver" in window)) { setShown(true); return; }
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { setShown(true); io.disconnect(); } }); }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
      io.observe(el);
      return function () { io.disconnect(); };
    }, [shown]);
    var Tag = props.as || "div";
    var v = props.variant;
    return h(Tag, { ref: ref, className: cx("doc-reveal", v ? "doc-reveal--" + v : null, props.className), "data-in": shown ? "true" : "false", style: Object.assign({ "--i": Math.min(props.index || 0, 5) }, props.style) }, props.children);
  }

  var Doc = {
    Wordmark: Wordmark, Nav: Nav, Button: Button, TextLink: TextLink, IconButton: IconButton,
    HeroHeadline: HeroHeadline, SectionHeading: SectionHeading, ChapterLabel: ChapterLabel, Eyebrow: Eyebrow, Prose: Prose, Annotation: Annotation, Highlight: Highlight,
    Panel: Panel, AngledPanel: AngledPanel, ImagePanel: ImagePanel, ChapterPanel: ChapterPanel, Callout: Callout, SpeechBubble: SpeechBubble,
    ProjectCard: ProjectCard, ProjectMeta: ProjectMeta, TechTag: TechTag, StatusLabel: StatusLabel, CaseStudyHeader: CaseStudyHeader, Gallery: Gallery, ProjectLinks: ProjectLinks,
    SkillCategory: SkillCategory, MetaRow: MetaRow, LinkList: LinkList, Icon: Icon,
    EmailLink: EmailLink, SocialLink: SocialLink, ContactCTA: ContactCTA, ClosingCallout: ClosingCallout, Footer: Footer,
    Burst: Burst, Halftone: Halftone, SpeedLines: SpeedLines, Arrow: Arrow, InkStroke: InkStroke, PanelNumber: PanelNumber, Reveal: Reveal,
    Tags: Tags
  };
  window.Doc = Object.assign(window.Doc || {}, Doc);
})();
