import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the device screen size corresponds to a mobile/phone viewport.
 * Responds dynamically to viewport resize events.
 *
 * @param breakpoint The pixel width threshold (default: 768px).
 * @returns boolean true if viewport width <= breakpoint.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [breakpoint]);

  return isMobile;
}
