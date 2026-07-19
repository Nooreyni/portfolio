import { useEffect, useState } from "react";
import NodeNetwork from "./NodeNetwork";

function Hero({ t }) {
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    let raf = null;
    function update() {
      setParallax(Math.min(60, window.scrollY * 0.1));
      raf = null;
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(update);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-network">
        <NodeNetwork parallax={parallax} />
      </div>
      <div className="hero-content">
        <p className="hero-label">{t.hero.label}</p>
        <h1 className="hero-title">
          <span className="hero-line hero-line-1">{t.hero.line1}</span>
          <span className="hero-line hero-line-2">{t.hero.line2}</span>
          <span className="hero-line hero-line-3">{t.hero.line3}</span>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
      </div>
    </section>
  );
}

export default Hero;
