import { useEffect, useRef } from "react";

// Custom cursor: a dot that tracks instantly, a ring that eases behind and
// scales up over interactive elements. Mutates the DOM directly (no React
// re-renders per mousemove) for smooth 60fps tracking.
function useCustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return undefined; // touch device, skip

    let tx = -100, ty = -100, cx = -100, cy = -100, scale = 1, raf;

    function onMouseMove(e) {
      tx = e.clientX;
      ty = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    }

    function onMouseOver(e) {
      const hot = e.target.closest && e.target.closest("a, button, input, textarea, [data-hot]");
      scale = hot ? 2.4 : 1;
    }

    function loop() {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${cx - 17}px, ${cy - 17}px) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { dotRef, ringRef };
}

export default useCustomCursor;
