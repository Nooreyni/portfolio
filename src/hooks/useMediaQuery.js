import { useState, useEffect } from "react";

/**
 * Hook de détection de viewport responsive.
 * Retourne true quand la fenêtre passe sous le breakpoint donné.
 * Utilise matchMedia + écouteur, réagit aux resize.
 */
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** Vrai quand on est sur mobile/tablette (< 900px, même seuil que le CSS) */
export function useIsMobile(breakpoint = "(max-width: 900px)") {
  return useMediaQuery(breakpoint);
}

export default useMediaQuery;
