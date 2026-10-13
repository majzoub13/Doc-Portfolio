class Component extends DCLogic {
  // Active-section tracking for the nav: a thin line across the middle of the
  // viewport decides which section is "current". Plays no animation itself.
  componentDidMount() {
    // The snap starts when the character art has loaded; if it is slow, start anyway after 2.5s.
    this._snapT = setTimeout(() => { if (!(this.state || {}).snapReady) this.setState({ snapReady: true, snapPlay: true }); }, 2500);
    if (typeof IntersectionObserver === 'undefined') return;
    this._sectionIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = e.target.id;
        if (!this.state || this.state.active !== id) this.setState({ active: id });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    ['top', 'hq', 'work', 'capabilities', 'about', 'footprint', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) this._sectionIO.observe(el);
    });
  }
  componentDidUpdate(prevProps, prevState) {
    const was = prevState || {}, now = this.state || {};
    // Pinned open: move focus into the viewer. Closed after being pinned: return focus to the thumbnail.
    if (now.zoomPinned && !was.zoomPinned) {
      const c = document.querySelector('.zoom__close');
      if (c) c.focus();
    } else if (was.zoomPinned && !now.zoom && this._zTrig && this._zTrig.focus) {
      this._zSkip = true;
      this._zTrig.focus();
      this._zSkip = false;
    }
  }
  componentWillUnmount() {
    clearTimeout(this._snapT);
    if (this._sectionIO) this._sectionIO.disconnect();
  }

  renderVals() {
    // ── Contact details, as provided ────────────────────────────────────
    const EMAIL = 'mohamed13majzoub@gmail.com';
    const PHONE_DISPLAY = '+971 52 386 4849';
    const PHONE_TEL = 'tel:+971523864849';
    const WHATSAPP_URL = 'https://wa.me/971523864849';  // same number as the phone
    const GITHUB_URL = 'https://github.com/majzoub13';
    const LINKEDIN_URL = 'https://www.linkedin.com/in/mohamed-al-majzoub-716904380';
    const TUPCODE_URL = 'https://tupcode.com';


    // Screenshots shown in the comic zoom viewer
    const SHOTS = {
      ml1: { src: '/_blob/b41e3533a49277700be68c41387a9df4', tag: 'Fig. 02', caption: 'MatchLens · player and ball tracking', alt: 'MatchLens tracking view: numbered player and ball tracks on match footage, with a mini-map of positions' },
      ml2: { src: '/_blob/071b6879c223171828655eb048fee089', tag: 'Fig. 03', caption: 'MatchLens · analysis dashboard', alt: 'MatchLens dashboard: tracked video, tactical radar, engine metrics and an event log' },
      ad: { src: '/_blob/3a34a004ff785a6f30a1d038d02a9640', tag: 'Adlify', caption: 'Fleet map with zones, filters and stats', alt: 'Adlify dashboard: a city map with zones and ad markers, with date and ad filters and trip stats' },
      cx: { src: '/_blob/087838681584b19958c72fffae2871eb', tag: 'CartX', caption: 'Mobile app home screen', alt: 'CartX mobile app: home screen with search, a featured offer and the CartX Supermarket banner' },
      kk: { src: '/_blob/e487a8d1a20151cccc4d25f5c99ce933', tag: 'Katakit', caption: 'Biscuit detection dashboard', alt: 'Katakit dashboard: live and detection feeds of biscuits on the conveyor, rejected biscuits, and defect statistics' },
      ch: { src: '/_blob/b89fb3c11576cd0516dfff2cd40b9467', tag: 'Carlton Hotel', caption: 'Guest app services screen', alt: 'Carlton Hotel guest app: room status and a grid of services such as room service, laundry and concierge' }
    };
    const zs = this.state || {};
    const zKey = zs.zoom && SHOTS[zs.zoom] ? zs.zoom : null;
    const zoomFor = (key) => ({
      show: (e) => { if (this._zSkip) { this._zSkip = false; return; } if ((this.state || {}).zoomPinned) return; this._zTrig = e.currentTarget; this.setState({ zoom: key, zoomPinned: false }); },
      hide: () => { const st = this.state || {}; if (st.zoomPinned || st.zoom !== key) return; this.setState({ zoom: null }); },
      pin: (e) => { const st = this.state || {}; this._zTrig = e.currentTarget; if (st.zoomPinned && st.zoom === key) this.setState({ zoom: null, zoomPinned: false }); else this.setState({ zoom: key, zoomPinned: true }); }
    });

    const reveal = this.props.revealOnScroll ?? true;
    const active = (this.state && this.state.active) || '';

    return {
      yes: true,
      showAll: !reveal,

      email: EMAIL,
      mailto: 'mailto:' + EMAIL,

      navItems: [
        { label: 'Work', href: '#work', current: active === 'work' },
        { label: 'About', href: '#about', current: active === 'about' },
        { label: 'GitHub', href: GITHUB_URL },
        { label: 'Contact', href: '#contact', current: active === 'contact' }
      ],

      heroLines: [
        'I bridge engineering,',
        'product, and business',
        'to turn ideas into',
        { text: 'intelligent products.', style: 'ink' }
      ],

      mlMeta: [
        { label: 'My role', value: 'Idea Founder · System Architect · Football Domain Expert' },
        { label: 'Status', value: 'MVP with a live demo' }
      ],

      tcMeta: [
        { label: 'My role', value: 'Co-founder · Manager · Head of Mobile Development' },
        { label: 'Website', value: 'tupcode.com' }
      ],

      cxMeta: [
        { label: 'My role', value: 'Flutter Team Lead · Mobile App Development' },
        { label: 'Platform (TupCode)', value: 'Admin and seller dashboards, mobile app' }
      ],

      aboutMeta: [
        { label: 'Degree', value: 'Information Technology Engineering — AI' },
        { label: 'University', value: 'Damascus University' },
        { label: 'Works across', value: 'AI · Software · Entrepreneurship' }
      ],

      contactLinks: [
        { label: 'Phone', meta: PHONE_DISPLAY, href: PHONE_TEL },
        { label: 'WhatsApp', meta: 'Message me', href: WHATSAPP_URL, external: true },
        { label: 'GitHub', meta: 'majzoub13', href: GITHUB_URL, external: true },
        { label: 'LinkedIn', meta: 'Mohamed Al-Majzoub', href: LINKEDIN_URL, external: true },
        { label: 'TupCode', meta: 'tupcode.com', href: TUPCODE_URL, external: true }
      ],

      footerSocials: [
        { label: 'GitHub', handle: 'majzoub13', href: GITHUB_URL },
        { label: 'LinkedIn', handle: 'Mohamed Al-Majzoub', href: LINKEDIN_URL },
        { label: 'TupCode', handle: 'tupcode.com', href: TUPCODE_URL }
      ],

      zMl1: zoomFor('ml1'), zMl2: zoomFor('ml2'), zAd: zoomFor('ad'), zCx: zoomFor('cx'), zKk: zoomFor('kk'), zCh: zoomFor('ch'),
      zoomOpen: !!zKey,
      zoomPinned: !!(zKey && zs.zoomPinned),
      zoomMode: zKey && zs.zoomPinned ? 'zoom--pinned' : 'zoom--peek',
      zoomSrc: zKey ? SHOTS[zKey].src : '',
      zoomAlt: zKey ? SHOTS[zKey].alt : '',
      zoomTag: zKey ? SHOTS[zKey].tag : '',
      zoomCaption: zKey ? SHOTS[zKey].caption : '',
      zoomClose: () => this.setState({ zoom: null, zoomPinned: false }),
      zoomKey: (e) => { if (e.key === 'Escape' && (this.state || {}).zoom) { e.stopPropagation(); this.setState({ zoom: null, zoomPinned: false }); } },
      zoomBackdrop: (e) => {
        if (!(this.state || {}).zoomPinned) return;
        const t = e.target;
        if (t && t.closest && t.closest('.zoom__panel') && !t.closest('.zoom__close')) return;
        this.setState({ zoom: null, zoomPinned: false });
      },

      // THE SNAP: plays once after the art loads; the replay button restarts the CSS timeline
      snapClass: ['sn--ready', 'sn--play', 'sn--nochar'].filter((c, i) => [zs.snapReady, zs.snapPlay, zs.snapNoChar][i]).join(' '),
      snapReady: () => { if (!(this.state || {}).snapReady) this.setState({ snapReady: true, snapPlay: true }); },
      snapFail: () => this.setState({ snapReady: true, snapPlay: true, snapNoChar: true }),
      snapReplay: () => {
        this.setState({ snapPlay: false }, () => {
          requestAnimationFrame(() => requestAnimationFrame(() => this.setState({ snapReady: true, snapPlay: true })));
        });
      },

      // In-page links (#work, #contact, …): scroll the section into view
      // ourselves, so they work in every viewer, including the canvas.
      jumpLinks: (e) => {
        const a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
        if (!a) return;
        const id = (a.getAttribute('href') || '').slice(1);
        const el = id ? document.getElementById(id) : null;
        if (!el) return;
        e.preventDefault();
        const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // Wait two frames so a closing mobile menu has released the page first.
        const go = () => el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        if (window.requestAnimationFrame) window.requestAnimationFrame(() => window.requestAnimationFrame(go));
        else go();
      },

      // The mobile menu sheet stays open after a tap on one of its links;
      // close it so the chosen section is not hidden under the sheet.
      closeMenuOnNav: (e) => {
        const link = e.target && e.target.closest ? e.target.closest('.doc-nav__sheet a') : null;
        if (!link) return;
        const btn = e.currentTarget.querySelector('.doc-nav__menu[aria-expanded="true"]');
        if (btn) btn.click();
      }
    };
  }
}
