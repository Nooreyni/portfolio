import { useEffect, useRef, useState } from "react";

// Drives the stacked-chapter scroll effect: as the next chapter (or the
// section right after the last one) slides up over a sticky chapter, that
// chapter settles back (scale down, dim) — a real depth cue, not a fade.
function useChapterStacking(count) {
  const chapterRefs = useRef([]);
  const nextRef = useRef(null); // element right after the last chapter
  const [progress, setProgress] = useState(() => new Array(count).fill(0));

  useEffect(() => {
    let raf = null;

    function update() {
      const vh = window.innerHeight;
      const followers = [...chapterRefs.current.slice(1), nextRef.current];
      const next = chapterRefs.current.map((el, i) => {
        const followerEl = followers[i];
        if (!el || !followerEl) return 0;
        const followerTop = followerEl.getBoundingClientRect().top;
        return Math.max(0, Math.min(1, 1 - followerTop / vh));
      });
      setProgress(next);
      raf = null;
    }

    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [count]);

  function setChapterRef(i) {
    return (el) => {
      chapterRefs.current[i] = el;
    };
  }

  function styleFor(i) {
    const p = progress[i] || 0;
    const scale = (1 - p * 0.07).toFixed(3);
    const translate = (-p * 24).toFixed(1);
    const brightness = (1 - p * 0.35).toFixed(2);
    return {
      transform: `scale(${scale}) translateY(${translate}px)`,
      filter: `brightness(${brightness})`,
    };
  }

  return { setChapterRef, nextRef, styleFor };
}

export default useChapterStacking;
