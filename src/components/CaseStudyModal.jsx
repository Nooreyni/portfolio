import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudyModal({ isOpen, onClose, t, studyKey, lang }) {
  if (!isOpen) return null;

  const isEn = lang === "en";

  // Dynamically resolve data based on the key
  let data = null;
  if (studyKey === "whatsapp-ai") {
    data = t.whatsappCaseStudy;
  } else if (studyKey === "microsoft-workplace") {
    data = t.microsoftCaseStudy;
  } else if (studyKey === "yobantel") {
    data = t.yobantelCaseStudy;
  } else if (studyKey === "ai-agents") {
    data = t.aiAgentsCaseStudy;
  } else if (studyKey === "crm-platform") {
    data = t.crmCaseStudy;
  }

  if (!data) return null;

  return (
    <AnimatePresence>
      <div className="wa-modal-overlay" onClick={onClose}>
        <motion.div 
          className="wa-modal-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button className="wa-modal-close" onClick={onClose} aria-label="Fermer">
            ✕
          </button>

          {/* Header */}
          <span className="wa-modal-tag">
            {isEn ? "CASE STUDY / ANALYSIS" : "ÉTUDE DE CAS / ANALYSE"}
          </span>
          <h3 className="wa-modal-title">{data.title}</h3>
          <p className="wa-modal-subtitle">{data.subtitle}</p>

          <div className="wa-modal-divider" />

          {/* Overview */}
          <div className="wa-modal-section">
            <h5 className="wa-section-title">
              {isEn ? "OVERVIEW" : "PRÉSENTATION"}
            </h5>
            <p className="wa-section-text">{data.overview}</p>
          </div>

          {/* System architecture table */}
          {data.architecture && (
            <div className="wa-modal-section">
              <h5 className="wa-section-title">
                {isEn ? "SYSTEM COMPONENTS" : "COMPOSANTS DU SYSTÈME"}
              </h5>
              <div className="wa-table-container">
                <table className="wa-minimal-table">
                  <tbody>
                    {data.architecture.map((item, idx) => (
                      <tr key={idx} className="wa-table-row">
                        <td className="wa-table-col wa-col-num">0{idx + 1}</td>
                        <td className="wa-table-col wa-col-name">{item.name}</td>
                        <td className="wa-table-col wa-col-role">{item.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Setup steps list */}
          {data.steps && (
            <div className="wa-modal-section">
              <h5 className="wa-section-title">
                {isEn ? "IMPLEMENTATION PROCESS" : "PROCESSUS DE DÉPLOIEMENT"}
              </h5>
              <div className="wa-minimal-steps">
                {data.steps.map((step, idx) => (
                  <div key={idx} className="wa-minimal-step-item">
                    <div className="wa-step-header">
                      <span className="wa-step-num-circle">{step.num}</span>
                      <h6 className="wa-step-name">{step.title}</h6>
                    </div>
                    <p className="wa-step-desc-text">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pricing packages (only for WhatsApp Bot) */}
          {data.packages && (
            <div className="wa-modal-section">
              <h5 className="wa-section-title">
                {isEn ? "PRICING STRUCTURE" : "STRUCTURE TARIFAIRE"}
              </h5>
              <div className="wa-table-container">
                <table className="wa-minimal-table wa-pricing-table">
                  <thead>
                    <tr>
                      <th>{isEn ? "PACKAGE" : "FORMULE"}</th>
                      <th className="text-right">{isEn ? "SETUP" : "INSTALLATION"}</th>
                      <th className="text-right">{isEn ? "MONTHLY" : "ABONNEMENT"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.packages.map((pkg, idx) => (
                      <tr key={idx} className="wa-table-row">
                        <td className="wa-col-name">{pkg.name}</td>
                        <td className="text-right wa-col-value">{pkg.setup}</td>
                        <td className="text-right wa-col-value highlight-val">{pkg.recurring}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Final CTA */}
          <div className="wa-modal-footer">
            <a href="#contact" className="wa-modal-cta" onClick={onClose}>
              {studyKey === "whatsapp-ai"
                ? (isEn ? "Order WhatsApp Bot Setup →" : "Commander l'assistant WhatsApp →")
                : (isEn ? "Discuss this solution →" : "Échanger sur cette solution →")
              }
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
