import { useState } from "react";
import Appear from "./Appear";

function Contact({ t }) {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedPills, setSelectedPills] = useState([]);
  const [sent, setSent] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const togglePill = (label) => {
    setSelectedPills((prev) =>
      prev.includes(label)
        ? prev.filter((p) => p !== label)
        : [...prev, label]
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(t.contact.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoriesText = selectedPills.length > 0 ? selectedPills.join(" | ") : "Général";
    const subject = encodeURIComponent(`[Contact Portfolio] ${categoriesText} — ${name}`);
    const body = encodeURIComponent(
      `Nom / Entreprise : ${name}\nEmail : ${userEmail}\n\nDomaines sélectionnés :\n${categoriesText}\n\nMessage :\n${message}`
    );
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <p className="contact-label">{t.contact.title}</p>
        <Appear as="h2" className="contact-headline">{t.contact.line}</Appear>
        <p className="contact-sub">{t.contact.sub}</p>

        <div className="contact-grid">
          {/* Left Column: Direct SLA & System Status Cards */}
          <div className="contact-info-col">
            <div className="contact-card">
              <div className="contact-card-header">
                <span className="contact-card-icon">⚡</span>
                <span className="contact-card-title">{t.contact.statusLabel}</span>
              </div>
              <p className="contact-card-value">
                <span className="contact-card-dot" /> {t.contact.statusValue}
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <span className="contact-card-icon">📍</span>
                <span className="contact-card-title">{t.contact.locationLabel}</span>
              </div>
              <p className="contact-card-value">{t.contact.locationValue}</p>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <span className="contact-card-icon">⏱️</span>
                <span className="contact-card-title">{t.contact.slaLabel}</span>
              </div>
              <p className="contact-card-value">{t.contact.slaValue}</p>
            </div>

            <div className="contact-email-card">
              <div className="contact-email-meta">
                <span className="contact-email-label">EMAIL DIRECT</span>
                <a href={`mailto:${t.contact.email}`} className="contact-email-link">{t.contact.email}</a>
              </div>
              <button 
                type="button" 
                onClick={handleCopyEmail} 
                className="contact-copy-btn"
                aria-label="Copier l'email"
              >
                {emailCopied ? "✓ Copié !" : "📋 Copier"}
              </button>
            </div>

            <div className="contact-social-links">
              <a href="https://github.com/nooreyni" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                GitHub ↗
              </a>
              <a href="https://www.linkedin.com/in/nooreyni/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="contact-form-col">
            {!sent ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-pills-block">
                  <p className="contact-pills-title">{t.contact.projectTypesTitle}</p>
                  <div className="contact-pills-list">
                    {t.contact.projectTypes.map((pt) => {
                      const isSelected = selectedPills.includes(pt.label);
                      return (
                        <button
                          key={pt.id}
                          type="button"
                          className={`contact-pill ${isSelected ? "is-selected" : ""}`}
                          onClick={() => togglePill(pt.label)}
                        >
                          {pt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="contact-field-group">
                  <div className="contact-field">
                    <input
                      className="contact-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact.namePh}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <input
                      type="email"
                      className="contact-input"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder={t.contact.emailPh}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <textarea
                    className="contact-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.messagePh}
                    rows={4}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-btn" data-hot="1">
                  <span>{t.contact.submit}</span>
                  <span className="contact-btn-arrow">➔</span>
                </button>
              </form>
            ) : (
              <div className="contact-thanks-box">
                <span className="contact-thanks-icon">✉️</span>
                <p className="contact-thanks">{t.contact.thanks}</p>
                <button type="button" onClick={() => setSent(false)} className="contact-reset-btn">
                  Envoyer une autre demande
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
