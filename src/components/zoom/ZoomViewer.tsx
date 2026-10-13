import { SHOTS } from '../../content/site';
import { useZoom } from './ZoomContext';

export function ZoomViewer() {
  const { state, close, onKeyDown } = useZoom();
  if (!state.key) return null;
  const shot = SHOTS[state.key];

  // When pinned, a click anywhere outside the panel (or on the close button) closes it.
  const onBackdrop = (e: React.MouseEvent) => {
    if (!state.pinned) return;
    const t = e.target as Element;
    if (t.closest('.zoom__panel') && !t.closest('.zoom__close')) return;
    close();
  };

  return (
    <div className={`zoom ${state.pinned ? 'zoom--pinned' : 'zoom--peek'}`} role="dialog" aria-label={shot.caption} onClick={onBackdrop} onKeyDown={onKeyDown}>
      <div className="zoom__lines" aria-hidden="true" />
      <svg className="zoom__burst" viewBox="0 0 600 620" aria-hidden="true">
        <polygon points="300,-9 333,114 395,39 400,126 493,70 450,174 590,132 466,239 555,255 479,300 610,355 464,360 536,436 462,436 501,540 393,462 414,613 331,478 300,614 270,471 199,576 197,479 85,556 139,435 49,445 117,366 20,349 129,300 5,248 105,229 15,135 146,171 83,41 211,146 207,44 267,115" />
      </svg>
      <span className="zoom__sfx" aria-hidden="true">
        Zoom!
      </span>
      <figure className="zoom__panel">
        <img className="zoom__img" src={shot.src} alt={shot.alt} />
        <figcaption className="zoom__cap">
          <span className="zoom__tag">{shot.tag}</span>
          <span>{shot.caption}</span>
        </figcaption>
        {state.pinned ? (
          <button type="button" className="zoom__close" aria-label="Close screenshot" onClick={close}>
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 3 L 13 13 M13 3 L 3 13" />
            </svg>
          </button>
        ) : null}
      </figure>
    </div>
  );
}
