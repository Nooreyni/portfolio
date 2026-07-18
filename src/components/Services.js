import { WhatsappLogo, ShieldCheck, Code } from "@phosphor-icons/react";

const services = [
  {
    index: "01",
    icon: WhatsappLogo,
    status: "● en production",
    title: "Assistant IA WhatsApp pour PME",
    description:
      "Un bot qui répond aux questions, prend les commandes et gère les rendez-vous directement sur WhatsApp — en français, néerlandais et anglais. Conçu et testé en conditions réelles, pas un prototype.",
    flagship: true,
  },
  {
    index: "02",
    icon: ShieldCheck,
    status: "conseil & mise en œuvre",
    title: "Gouvernance & sécurité M365 / Azure",
    description:
      "Audit, conformité RGPD, sécurisation de l'environnement Microsoft (Intune, Conditional Access, Defender) — pour des structures qui n'ont pas le budget d'un grand intégrateur mais ont les mêmes exigences.",
  },
  {
    index: "03",
    icon: Code,
    status: "sites & outils",
    title: "Développement web sur mesure",
    description:
      "Sites et outils web pensés pour être trouvés (SEO) et pour convertir, de la conception à la mise en production.",
  },
];

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <p className="section-eyebrow">01 / Ce que je propose</p>
        <h2 className="section-title">Des services concrets, pas une liste de compétences</h2>
        <div className="services-list reveal-group">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                className={`service-row reveal${service.flagship ? " service-row-flagship" : ""}`}
                key={service.title}
              >
                <p className="service-row-index">{service.index}</p>
                <div className="service-row-body">
                  <div className="service-row-heading">
                    <Icon size={22} weight="regular" />
                    <h3 className="service-row-title">{service.title}</h3>
                  </div>
                  <p className="service-row-description">{service.description}</p>
                </div>
                <p className="service-row-status">{service.status}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
