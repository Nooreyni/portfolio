import { ArrowUpRight } from "@phosphor-icons/react";
import WhatsAppMockup from "./WhatsAppMockup";
import CaseVignetteOutils from "./CaseVignetteOutils";
import CaseVignetteKelbail from "./CaseVignetteKelbail";
import CaseVignetteYobantel from "./CaseVignetteYobantel";
import CaseCard from "./CaseCard";

const cases = [
  {
    index: "01",
    tag: "projet personnel — en production",
    title: "outilsbelges.be",
    description:
      "Portail de calculateurs administratifs belges (salaire net, TVA, crédit, véhicule...) — conçu, développé et optimisé SEO de bout en bout pour générer du trafic organique.",
    href: "https://outilsbelges.be",
    vignette: CaseVignetteOutils,
    flagship: true,
  },
  {
    index: "02",
    tag: "produit — validé en conditions réelles",
    title: "Assistant IA WhatsApp",
    description:
      "Bot de prise de commande et service client pour petits commerces, multi-langue (FR/NL/EN) — testé de bout en bout : réception du message, réponse IA, confirmation de commande.",
    href: null,
    mockup: true,
  },
  {
    index: "03",
    tag: "mission cliente",
    title: "Kelbail.com",
    description: "Marketplace de sous-locations entre particuliers en Belgique, de la conception à la mise en ligne.",
    href: "https://kelbail.com",
    vignette: CaseVignetteKelbail,
  },
  {
    index: "04",
    tag: "mission cliente",
    title: "Yobantel.com",
    description: "Plateforme logistique diaspora ↔ Sénégal — étude fonctionnelle et conception.",
    href: "https://yobantel.com",
    vignette: CaseVignetteYobantel,
  },
];

function CaseStudies() {
  return (
    <section className="section section-alt" id="realisations">
      <div className="section-inner">
        <p className="section-eyebrow">02 / Preuves, pas promesses</p>
        <h2 className="section-title">Réalisations</h2>
        <div className="cases-grid">
          {cases.map((item) => {
            const Vignette = item.vignette;
            return (
              <CaseCard
                className={`case-card${item.flagship ? " case-card-flagship" : ""}`}
                key={item.title}
              >
                {Vignette && <Vignette />}
                {item.mockup && (
                  <div className="vignette vignette-mockup">
                    <WhatsAppMockup />
                  </div>
                )}
                <p className="case-card-index">{item.index}</p>
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
              </CaseCard>
            );
          })}
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
