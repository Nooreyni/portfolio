import { motion } from "framer-motion";
import { WhatsappLogo, ShieldCheck, Code } from "@phosphor-icons/react";
import { staggerContainer, staggerItem, viewportOnce } from "../motion";

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
        <motion.div
          className="services-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                className={`service-row${service.flagship ? " service-row-flagship" : ""}`}
                key={service.title}
                variants={staggerItem}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
