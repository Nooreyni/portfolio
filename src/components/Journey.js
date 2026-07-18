import { motion } from "framer-motion";

const steps = [
  {
    phase: "PHASE 01",
    period: "Dakar",
    title: "Économie & commerce international",
    description: "Formation initiale, puis premières responsabilités opérationnelles.",
    status: "validé",
    blob: "journey-blob-1",
  },
  {
    phase: "PHASE 02",
    period: "Sénégal",
    title: "Entrepreneuriat",
    description:
      "Fondateur d'ALLOO — stratégie digitale et marketing pour des clients locaux.",
    status: "validé",
    blob: "journey-blob-2",
  },
  {
    phase: "PHASE 03",
    period: "Bruxelles",
    title: "Reconversion tech",
    description:
      "Bootcamp intensif IA & data (BeCode) — remise à niveau technique complète.",
    status: "validé",
    blob: "journey-blob-3",
  },
  {
    phase: "PHASE 04",
    period: "Aujourd'hui",
    title: "IT Manager & consultant freelance",
    description:
      "Gouvernance d'un système d'information complet, en parallèle du lancement de mon activité indépendante.",
    status: "en cours",
    blob: "journey-blob-4",
  },
];

function Journey() {
  return (
    <section className="section" id="parcours">
      <div className="section-inner">
        <p className="section-eyebrow">03 / Parcours</p>
        <h2 className="section-title">Je ne viens pas de l'école d'ingénieur classique</h2>
        <p className="section-lead">
          Et c'est exactement ce qui fait la différence : j'ai appris à apprendre vite,
          à m'adapter à un nouveau domaine, et à diriger l'IA comme un outil plutôt que
          d'en dépendre.
        </p>
        <div className="journey-stack">
          {steps.map((step, i) => (
            <div className="journey-track" key={step.title}>
              <motion.div
                className="journey-card-sticky"
                style={{ top: `${110 + i * 72}px` }}
              >
                <div className={`journey-card ${step.blob}`}>
                  <motion.p
                    className="journey-phase"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.phase} <span className="journey-phase-sep">{"//"}</span>{" "}
                    {step.status === "validé" ? (
                      <motion.span
                        className="journey-status journey-status-done"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.3, delay: 0.35 }}
                      >
                        VALIDÉ ✓
                      </motion.span>
                    ) : (
                      <span className="journey-status journey-status-active">
                        EN COURS<span className="journey-cursor">_</span>
                      </span>
                    )}
                  </motion.p>
                  <p className="journey-period">{step.period}</p>
                  <h3 className="journey-title">{step.title}</h3>
                  <p className="journey-description">{step.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
