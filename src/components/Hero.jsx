import HeroAvatar3D from "./HeroAvatar3D";

// Balanced Split Architectural Hero Layout (Interactive 3D Avatar Sculpture)
function Hero() {
  return (
    <section className="hero hero-split-layout" id="top">
      <div className="hero-split-grid">
        {/* Left Column: Core Narrative & Action */}
        <div className="hero-left-col">
          <p className="hero-clean-label">Ousmane Diop — Consultant IT Indépendant</p>

          <h1 className="hero-split-title">
            <span className="hero-split-line1">Des systèmes</span>
            <span className="hero-split-line2">plus simples.</span>
          </h1>

          <p className="hero-split-sub">
            Systèmes numériques, automatisation et IA pour supprimer les frictions opérationnelles.
          </p>

          <div className="hero-split-actions">
            <a href="#contact" className="hero-cta-button">
              Échanger sur vos enjeux →
            </a>
            <a href="#manifesto" className="hero-scroll-link">
              Examiner la démarche <span className="scroll-arrow">↓</span>
            </a>
          </div>
        </div>

        {/* Right Column: Seamless 3D Avatar Sculpture (No box, no frame) */}
        <div className="hero-right-avatar-3d">
          <HeroAvatar3D />
        </div>
      </div>
    </section>
  );
}

export default Hero;
