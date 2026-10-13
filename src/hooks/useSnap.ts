import { useCallback, useEffect, useState } from 'react';

// THE SNAP: the CSS timeline runs while the wrapper has `sn--play`.
// It starts once the base artwork has loaded, or after 2.5s if it is slow;
// on error it starts anyway with `sn--nochar`. Reduced motion is handled in CSS.
export function useSnap(baseSrc: string) {
  const [s, setS] = useState({ ready: false, play: false, noChar: false });

  useEffect(() => {
    let done = false;
    const start = (noChar = false) => {
      if (done) return;
      done = true;
      setS({ ready: true, play: true, noChar });
    };
    const img = new Image();
    img.onload = () => start();
    img.onerror = () => start(true);
    img.src = baseSrc;
    if (img.complete && img.naturalWidth) start();
    const t = window.setTimeout(() => start(), 2500);
    return () => {
      done = true;
      window.clearTimeout(t);
    };
  }, [baseSrc]);

  // Restart the timeline: drop `sn--play`, wait two frames, add it back.
  const replay = useCallback(() => {
    setS((p) => ({ ...p, play: false }));
    requestAnimationFrame(() => requestAnimationFrame(() => setS((p) => ({ ...p, ready: true, play: true }))));
  }, []);

  const className = [s.ready && 'sn--ready', s.play && 'sn--play', s.noChar && 'sn--nochar'].filter(Boolean).join(' ');
  return { className, replay };
}
