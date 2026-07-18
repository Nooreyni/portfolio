import { WhatsappLogo, ShieldCheck, Code } from "@phosphor-icons/react";

const services = [
  {
    icon: WhatsappLogo,
    tag: "Produit prêt à l'emploi",
    title: "Assistant IA WhatsApp pour PME",
    description:
      "Un bot qui répond aux questions, prend les commandes et gère les rendez-vous directement sur WhatsApp — en français, néerlandais et anglais. Conçu et testé en conditions réelles, pas un prototype.",
  },
  {
    icon: ShieldCheck,
    tag: "Conseil & mise en œuvre",
    title: "Gouvernance & sécurité M365 / Azure",
    description:
      "Audit, conformité RGPD, sécurisation de l'environnement Microsoft (Intune, Conditional Access, Defender) — pour des structures qui n'ont pas le budget d'un grand intégrateur mais ont les mêmes exigences.",
  },
  {
    icon: Code,
    tag: "Sites & outils",
    title: "Développement web sur mesure",
    description:
      "Sites et outils web pensés pour être trouvés (SEO) et pour convertir, de la conception à la mise en production.",
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <p className="section-eyebrow">Ce que je propose</p>
        <h2 className="section-title">Des services concrets, pas une liste de compétences</h2>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div className="service-card" key={service.title}>
                <div className="service-card-icon">
                  <Icon size={24} weight="regular" />
                </div>
                <p className="service-card-tag">{service.tag}</p>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
