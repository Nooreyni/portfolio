const steps = [
  {
    period: "Dakar",
    title: "Économie & commerce international",
    description: "Formation initiale, puis premières responsabilités opérationnelles.",
  },
  {
    period: "Sénégal",
    title: "Entrepreneuriat",
    description:
      "Fondateur d'ALLOO — stratégie digitale et marketing pour des clients locaux.",
  },
  {
    period: "Bruxelles",
    title: "Reconversion tech",
    description:
      "Bootcamp intensif IA & data (BeCode) — remise à niveau technique complète.",
  },
  {
    period: "Aujourd'hui",
    title: "IT Manager & consultant freelance",
    description:
      "Gouvernance d'un système d'information complet, en parallèle du lancement de mon activité indépendante.",
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
        <ol className="journey-timeline reveal-group">
          {steps.map((step) => (
            <li className="journey-step reveal" key={step.title}>
              <p className="journey-period">{step.period}</p>
              <h3 className="journey-title">{step.title}</h3>
              <p className="journey-description">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
