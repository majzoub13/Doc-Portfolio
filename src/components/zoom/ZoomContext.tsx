import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode, type SyntheticEvent } from 'react';
import type { ShotKey } from '../../content/site';

// The comic screenshot viewer: hover or focus on a thumbnail shows a "peek",
// click pins it open as a dialog. Escape, the close button, or (when pinned) the
// backdrop closes it; focus moves to the close button and back to the thumbnail.

type ZoomState = { key: ShotKey | null; pinned: boolean };

type ZoomApi = {
  state: ZoomState;
  show: (key: ShotKey) => (e: SyntheticEvent<HTMLElement>) => void;
  hide: (key: ShotKey) => () => void;
  pin: (key: ShotKey) => (e: SyntheticEvent<HTMLElement>) => void;
  close: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
};

const ZoomCtx = createContext<ZoomApi | null>(null);

export function ZoomProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ZoomState>({ key: null, pinned: false });
  const stateRef = useRef(state);
  stateRef.current = state;
  const trigger = useRef<HTMLElement | null>(null);
  const skipFocus = useRef(false);
  const wasPinned = useRef(false);

  const close = useCallback(() => setState({ key: null, pinned: false }), []);

  const show = useCallback(
    (key: ShotKey) => (e: SyntheticEvent<HTMLElement>) => {
      if (skipFocus.current) {
        skipFocus.current = false;
        return;
      }
      if (stateRef.current.pinned) return;
      trigger.current = e.currentTarget;
      setState({ key, pinned: false });
    },
    [],
  );

  const hide = useCallback(
    (key: ShotKey) => () => {
      const s = stateRef.current;
      if (s.pinned || s.key !== key) return;
      setState({ key: null, pinned: false });
    },
    [],
  );

  const pin = useCallback(
    (key: ShotKey) => (e: SyntheticEvent<HTMLElement>) => {
      const s = stateRef.current;
      trigger.current = e.currentTarget;
      if (s.pinned && s.key === key) setState({ key: null, pinned: false });
      else setState({ key, pinned: true });
    },
    [],
  );

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && stateRef.current.key) {
      e.stopPropagation();
      setState({ key: null, pinned: false });
    }
  }, []);

  // Pinned open: focus the close button. Closed after being pinned: return focus to the thumbnail.
  useEffect(() => {
    if (state.pinned && !wasPinned.current) {
      document.querySelector<HTMLElement>('.zoom__close')?.focus();
    } else if (wasPinned.current && !state.key && trigger.current) {
      skipFocus.current = true;
      trigger.current.focus();
      skipFocus.current = false;
    }
    wasPinned.current = state.pinned;
  }, [state]);

  const api = useMemo(() => ({ state, show, hide, pin, close, onKeyDown }), [state, show, hide, pin, close, onKeyDown]);
  return <ZoomCtx.Provider value={api}>{children}</ZoomCtx.Provider>;
}

export function useZoom(): ZoomApi {
  const ctx = useContext(ZoomCtx);
  if (!ctx) throw new Error('useZoom must be used inside <ZoomProvider>');
  return ctx;
}
