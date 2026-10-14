'use client';

import { useEffect, useState } from 'react';
import {
  CB_NAME,
  SCRIPT_ID,
  SCRIPT_SRC,
  TRANSLATE_NEEDED_EVENT,
  parseGoogtransTarget,
  scheduleInit,
} from '@/lib/googleTranslateShared';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
  }
}

/** Loads the script once and mounts the single `#google_translate_element` host. */
export function GoogleTranslateBootstrap() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (parseGoogtransTarget()) {
      setShouldLoad(true);
      return;
    }
    const onNeed = () => setShouldLoad(true);
    window.addEventListener(TRANSLATE_NEEDED_EVENT, onNeed);
    return () => window.removeEventListener(TRANSLATE_NEEDED_EVENT, onNeed);
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const onReady = () => scheduleInit();
    window[CB_NAME] = onReady;

    const existing = document.getElementById(SCRIPT_ID);
    if (!existing) {
      const s = document.createElement('script');
      s.id = SCRIPT_ID;
      s.src = `${SCRIPT_SRC}?cb=${CB_NAME}`;
      s.async = true;
      s.addEventListener('load', onReady, { once: true });
      document.body.appendChild(s);
    }

    onReady();
  }, [shouldLoad]);

  return (
    <div
      id="google_translate_element"
      className="google-translate-gadget-layer"
      aria-hidden
    />
  );
}
