import { ArrowRight } from "@phosphor-icons/react";

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-badge">orchestrateur_IT × IA</p>
        <h1 className="hero-title">
          Une infrastructure de grande entreprise.
          <br />
          Un budget de <span className="hero-title-accent">pme</span>.
        </h1>
        <p className="hero-subtitle">
          Architecte IT &amp; orchestrateur IA freelance basé à Bruxelles. Je pilote
          gouvernance, sécurité et automatisation pour des PME et associations
          belges — l'IA multiplie ce que je livre, elle ne remplace pas le
          jugement qui décide quoi construire.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button button-primary">
            Discutons de votre projet
            <ArrowRight size={18} weight="bold" />
          </a>
          <a href="#realisations" className="button button-ghost">
            Voir mes réalisations
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
