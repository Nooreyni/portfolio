import { ArrowUpRight } from "@phosphor-icons/react";

const cases = [
  {
    tag: "Projet personnel — en production",
    title: "outilsbelges.be",
    description:
      "Portail de calculateurs administratifs belges (salaire net, TVA, crédit, véhicule...) — conçu, développé et optimisé SEO de bout en bout pour générer du trafic organique.",
    href: "https://outilsbelges.be",
  },
  {
    tag: "Produit — validé en conditions réelles",
    title: "Assistant IA WhatsApp",
    description:
      "Bot de prise de commande et service client pour petits commerces, multi-langue (FR/NL/EN) — testé de bout en bout : réception du message, réponse IA, confirmation de commande.",
    href: null,
  },
  {
    tag: "Missions clients",
    title: "Kelbail.com & Yobantel.com",
    description:
      "Sites web livrés pour des tiers, de la conception à la mise en ligne.",
    href: "https://kelbail.com",
  },
];

function CaseStudies() {
  return (
    <section className="section section-alt" id="realisations">
      <div className="section-inner">
        <p className="section-eyebrow">Preuves, pas promesses</p>
        <h2 className="section-title">Réalisations</h2>
        <div className="cases-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.title}>
              <p className="case-card-tag">{item.tag}</p>
              <h3 className="case-card-title">{item.title}</h3>
              <p className="case-card-description">{item.description}</p>
              {item.href && (
                <a
                  className="case-card-link"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site
                  <ArrowUpRight size={16} weight="bold" />
                </a>
              )}
            </article>
          ))}
        </div>
        <p className="credibility-line">
          Actuellement IT Manager pour une structure de 350 utilisateurs à Bruxelles —
          gouvernance Microsoft 365, sécurité et infrastructure réseau au quotidien.
        </p>
      </div>
    </section>
  );
}

export default CaseStudies;
