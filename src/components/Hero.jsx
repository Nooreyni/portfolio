import HeroAvatar3D from "./HeroAvatar3D";

// Balanced Split Architectural Hero Layout (Interactive 3D Curious Panda Avatar)
function Hero({ t }) {
  return (
    <section className="hero hero-split-layout" id="top">
      <div className="hero-split-grid">
        {/* Left Column: Core Narrative & Action */}
        <div className="hero-left-col">
          <p className="hero-clean-label">{t.hero.label}</p>

          <h1 className="hero-split-title">
            <span className="hero-split-line1">{t.hero.line1}</span>
            <span className="hero-split-line2">{t.hero.line2}</span>
          </h1>

          <p className="hero-split-sub">{t.hero.sub}</p>

          <div className="hero-split-actions">
            <a href="#contact" className="hero-cta-button">
              {t.hero.cta}
            </a>
            <a href="#manifesto" className="hero-scroll-link">
              {t.hero.scrollLink} <span className="scroll-arrow">↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Seamless 3D Curious Panda Avatar (No box, no frame) */}
        <div className="hero-right-avatar-3d">
          <HeroAvatar3D />
        </div>
      </div>
    </section>
  );
}

export default Hero;
