import { useEffect } from "react";

// Fades/lifts .reveal elements into view once, on scroll — no dependency, respects reduced motion via CSS.
function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${(index % 3) * 80}ms`;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Safety net: never leave content permanently invisible if observation
    // fails for any reason (e.g. an environment where IO never fires).
    const fallback = setTimeout(() => {
      elements.forEach((el) => el.classList.add("is-visible"));
      observer.disconnect();
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
}

export default useReveal;
