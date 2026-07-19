import Appear from "./Appear";

function CaseStudies({ t }) {
  return (
    <section className="case-studies" id="projects">
      <div className="case-studies-inner">
        <p className="case-studies-label">{t.projectsLabel}</p>
        {t.projects.map((p) => (
          <Appear key={p.name} as="article" className="case-study">
            <div className="case-study-head">
              <h3 className="case-study-name">{p.name}</h3>
              <span className="case-study-tag">{p.tag}</span>
            </div>
            <div className="case-study-grid">
              <div>
                <p className="case-study-field-label">{t.caseLabels.problem}</p>
                <p className="case-study-field-value">{p.problem}</p>
              </div>
              <div>
                <p className="case-study-field-label">{t.caseLabels.thinking}</p>
                <p className="case-study-field-value">{p.thinking}</p>
              </div>
              <div>
                <p className="case-study-field-label">{t.caseLabels.architecture}</p>
                <p className="case-study-field-value">{p.architecture}</p>
              </div>
              <div>
                <p className="case-study-field-label">{t.caseLabels.outcome}</p>
                <p className="case-study-field-value case-study-outcome">{p.outcome}</p>
              </div>
            </div>
          </Appear>
        ))}
      </div>
    </section>
  );
}

export default CaseStudies;
