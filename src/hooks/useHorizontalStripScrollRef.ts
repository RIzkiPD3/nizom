'use client';

import { useEffect, useRef } from 'react';

/**
 * Ref for a horizontal overflow strip: vertical wheel only moves cards and does not
 * scroll the page while the pointer is over this element. Outside the strip, default
 * page scroll applies. Uses a non-passive wheel listener so preventDefault is reliable.
 */
export function useHorizontalStripScrollRef() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.shiftKey) return;
      if (el.scrollWidth <= el.clientWidth) return;
      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;

      const maxLeft = el.scrollWidth - el.clientWidth;
      el.scrollLeft = Math.min(maxLeft, Math.max(0, el.scrollLeft + e.deltaY));
      e.preventDefault();
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return ref;
}
