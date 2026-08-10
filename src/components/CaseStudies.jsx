import { useState, useEffect } from "react";
import Appear from "./Appear";
import CaseStudyModal from "./CaseStudyModal";

// 1. WhatsApp Live Interactive Chat Simulator Widget
function WhatsAppSimulator({ isEn }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: isEn ? "Hello! 👋 Welcome to Bistro Bruxellois. How can I help you today?" : "Bonjour ! 👋 Bienvenue au Bistro Bruxellois. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const prompts = isEn ? [
    { label: "🍕 Menu & Prices", botReply: "Here is our menu:\n- Daily Special: 16,50 €\n- Woodfired Pizza: 14,00 €\n- Artisanal Drinks: 4,50 €" },
    { label: "📅 Book a Table", botReply: "Table for how many people and at what time? I can confirm your booking instantly!" },
    { label: "🕒 Business Hours", botReply: "We are open Tuesday to Sunday, 12:00 to 22:30. Closed on Mondays!" }
  ] : [
    { label: "🍕 Menu & Tarifs", botReply: "Voici notre carte du jour :\n- Plat du jour : 16,50 €\n- Pizza feu de bois : 14,00 €\n- Boissons artisanales : 4,50 €" },
    { label: "📅 Réserver une table", botReply: "Pour combien de personnes et à quelle heure ? Je valide votre réservation immédiatement !" },
    { label: "🕒 Horaires d'ouverture", botReply: "Nous sommes ouverts du Mardi au Dimanche de 12h00 à 22h30. Fermé le Lundi !" }
  ];

  const handlePromptClick = (prompt) => {
    if (isTyping) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: prompt.label }]);
    setIsTyping(true);

    // Simulate bot thinking/typing delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: prompt.botReply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="wa-simulator-box">
      {/* Smartphone Header */}
      <div className="wa-sim-header">
        <div className="wa-sim-avatar">🤖</div>
        <div className="wa-sim-meta">
          <span className="wa-sim-name">Assistant Bistro PME</span>
          <span className="wa-sim-status">✦ {isEn ? "Online (AI Bot)" : "En ligne (Bot IA)"}</span>
        </div>
      </div>

      {/* Chat Messages Screen */}
      <div className="wa-sim-body">
        {messages.map((m, idx) => (
          <div key={idx} className={`wa-msg-bubble ${m.sender === "user" ? "msg-user" : "msg-bot"}`}>
            <p>{m.text}</p>
          </div>
        ))}

        {isTyping && (
          <div className="wa-msg-bubble msg-bot is-typing">
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
            <span className="typing-dot"></span>
          </div>
        )}
      </div>

      {/* Interactive Quick Action Prompts */}
      <div className="wa-sim-actions">
        <span className="wa-actions-label">{isEn ? "Test interactive prompt:" : "Tester une commande :"}</span>
        <div className="wa-prompts-list">
          {prompts.map((p, idx) => (
            <button
              key={idx}
              type="button"
              className="wa-prompt-btn"
              onClick={() => handlePromptClick(p)}
              disabled={isTyping}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// 2. OutilsBelges Live Interactive Tax Calculator Preview Widget
function TaxCalculatorWidget({ isEn }) {
  const [grossSalary, setGrossSalary] = useState(3400);

  // Approximate Belgian Tax Calculation Logic
  const onss = Math.round(grossSalary * 0.1307);
  const taxable = grossSalary - onss;
  const taxEst = Math.round(taxable * 0.28);
  const netSalary = taxable - taxEst;

  return (
    <div className="tax-widget-box">
      <div className="tax-widget-header">
        <span className="tax-widget-badge">OUTILSBELGES.BE</span>
        <span className="tax-widget-tag">{isEn ? "OFFICIAL TAX CALCULATOR" : "CALCULATEUR OFFICIEL"}</span>
      </div>

      <div className="tax-widget-controls">
        <label className="tax-slider-label">
          <span>{isEn ? "Gross Monthly Salary:" : "Salaire Brut Mensuel :"}</span>
          <span className="tax-val-highlight">{grossSalary.toLocaleString()} €</span>
        </label>
        <input
          type="range"
          min="1900"
          max="7500"
          step="100"
          value={grossSalary}
          onChange={(e) => setGrossSalary(Number(e.target.value))}
          className="tax-range-slider"
        />
      </div>

      <div className="tax-results-grid">
        <div className="tax-res-card">
          <span className="tax-res-lbl">Brut</span>
          <span className="tax-res-val">{grossSalary.toLocaleString()} €</span>
        </div>
        <div className="tax-res-card">
          <span className="tax-res-lbl">ONSS (13.07%)</span>
          <span className="tax-res-val text-red">-{onss.toLocaleString()} €</span>
        </div>
        <div className="tax-res-card">
          <span className="tax-res-lbl">{isEn ? "Est. Tax" : "Précompte est."}</span>
          <span className="tax-res-val text-red">-{taxEst.toLocaleString()} €</span>
        </div>
        <div className="tax-res-card result-net">
          <span className="tax-res-lbl">{isEn ? "Estimated Net" : "Net Estimé"}</span>
          <span className="tax-res-val val-cobalt">{netSalary.toLocaleString()} € / mois</span>
        </div>
      </div>
    </div>
  );
}

// 3. Yobantel Interactive Cross-Border Logistics Workflow Widget
function YobantelWorkflowWidget({ isEn }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = isEn ? [
    { title: "01. Europe Order", desc: "Customer places order for electronics or goods in Europe." },
    { title: "02. Customs & Tax", desc: "Automated real-time calculation of West African shipping & customs duty." },
    { title: "03. Mobile Payment", desc: "Instant checkout via Mobile Money (Orange, Wave, Wave Money) or Stripe." },
    { title: "04. WhatsApp Tracking", desc: "Automated parcel tracking updates sent directly via WhatsApp." }
  ] : [
    { title: "01. Commande Europe", desc: "Le client passe commande de matériel ou marchandises en Europe." },
    { title: "02. Douane & Taxes", desc: "Calcul automatique en temps réel des frais de douane et de transport." },
    { title: "03. Paiement Mobile", desc: "Règlement instantané par Mobile Money (Orange, Wave, Wave Money) ou Stripe." },
    { title: "04. Suivi WhatsApp", desc: "Notifications et suivi de livraison automatiques envoyés sur WhatsApp." }
  ];

  return (
    <div className="yobantel-widget-box">
      <div className="yobantel-widget-header">
        <span className="yobantel-tag">YOBANTEL LOGISTICS ENGINE</span>
        <span className="yobantel-status">✦ {isEn ? "WORKFLOW ACTIVE" : "WORKFLOW ACTIF"}</span>
      </div>

      <div className="yobantel-stepper-list">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={idx}
              className={`yobantel-step-card ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveStep(idx)}
            >
              <div className="step-card-top">
                <span className="step-card-title">{s.title}</span>
                <span className="step-card-indicator">{isActive ? "● ACTIF" : "○"}</span>
              </div>
              <p className="step-card-desc">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Main Component: Re-imagined "Selected Systems" Blueprint Dossiers Stack
function CaseStudies({ t, lang }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState("");
  const isEn = lang === "en";

  const handleOpenModal = (studyKey) => {
    setSelectedStudy(studyKey);
    setIsModalOpen(true);
  };

  return (
    <section className="case-studies-section" id="projects">
      <div className="case-studies-header">
        <p className="cs-header-label">{t.projectsLabel}</p>
        <Appear as="h2" className="cs-header-title">
          {isEn ? "Selected Systems & Products" : "Systèmes Conçus & Réalisations"}
        </Appear>
        <p className="cs-header-sub">
          {isEn
            ? "Every project starts with an operational friction. Here is how technology resolves it."
            : "Chaque système répond à une friction précise. Découvrez les solutions concrètes en action."}
        </p>
      </div>

      {/* Blueprint Dossier Stack */}
      <div className="dossiers-stack">
        {/* DOSSIER 01: WHATSAPP AI BOT */}
        <Appear className="dossier-card featured-dossier">
          <div className="dossier-grid">
            <div className="dossier-left-col">
              <div className="dossier-status-pill">
                <span className="status-dot"></span>
                <span>{isEn ? "ACTIVE SYSTEM — AVAILABLE FOR DEPLOYMENT" : "SOLUTION ACTIVE — DISPONIBLE IMMÉDIATEMENT"}</span>
              </div>

              <span className="dossier-num">01 / BOT PME</span>
              <h3 className="dossier-title">Assistant IA WhatsApp</h3>
              <p className="dossier-subtitle">
                {isEn
                  ? "How do you handle customer bookings, orders, and inquiries 24/7 without extra staff?"
                  : "Comment gérer les commandes, rendez-vous et questions clients 24h/24 sans alourdir l'équipe ?"}
              </p>

              <ul className="dossier-highlights">
                <li><span className="bullet">✦</span> {isEn ? "Bookings & dynamic FAQ 24/7" : "Prise de rendez-vous & FAQ dynamique 24/7"}</li>
                <li><span className="bullet">✦</span> {isEn ? "Meta Cloud API & SQLite architecture" : "Architecture Meta Cloud API & SQLite"}</li>
                <li><span className="bullet">✦</span> {isEn ? "Real-time manager Telegram alerts" : "Alertes Telegram instantanées pour le gérant"}</li>
              </ul>

              <div className="dossier-tags">
                <span className="dossier-tag">META CLOUD API</span>
                <span className="dossier-tag">NODE.JS</span>
                <span className="dossier-tag">OPENAI</span>
                <span className="dossier-tag">SQLITE</span>
              </div>

              <div className="dossier-price-row">
                <span className="price-label">{isEn ? "Setup & License:" : "Formule d'installation :"}</span>
                <span className="price-val">500 € setup • 100 €/mois</span>
              </div>

              <div className="dossier-actions">
                <button
                  type="button"
                  className="dossier-btn-primary"
                  onClick={() => handleOpenModal("whatsapp-ai")}
                >
                  {isEn ? "Deploy Solution →" : "Déployer la solution →"}
                </button>
              </div>
            </div>

            <div className="dossier-right-col">
              <WhatsAppSimulator isEn={isEn} />
            </div>
          </div>
        </Appear>

        {/* DOSSIER 02: OUTILSBELGES.BE */}
        <Appear className="dossier-card">
          <div className="dossier-grid">
            <div className="dossier-left-col">
              <div className="dossier-status-pill">
                <span className="status-dot green"></span>
                <span>{isEn ? "PUBLIC UTILITY PLATFORM" : "PLATEFORME D'UTILITÉ PUBLIQUE"}</span>
              </div>

              <span className="dossier-num">02 / OUTILSBELGES.BE</span>
              <h3 className="dossier-title">OutilsBelges</h3>
              <p className="dossier-subtitle">
                {isEn
                  ? "How do you make complex administrative and tax calculations clear and accessible?"
                  : "Comment rendre les règles administratives et fiscales belges simples et instantanées ?"}
              </p>

              <ul className="dossier-highlights">
                <li><span className="bullet">✦</span> {isEn ? "47+ official tax and salary calculators" : "47+ calculateurs fiscaux et salariaux officiels"}</li>
                <li><span className="bullet">✦</span> {isEn ? "Bespoke high-performance web platform" : "Plateforme web sur-mesure à haute performance"}</li>
                <li><span className="bullet">✦</span> {isEn ? "Used daily by Belgian citizens and businesses" : "Utilisé quotidiennement par les citoyens et PME belges"}</li>
              </ul>

              <div className="dossier-tags">
                <span className="dossier-tag">REACT</span>
                <span className="dossier-tag">PYTHON</span>
                <span className="dossier-tag">TAX ENGINE</span>
              </div>

              <div className="dossier-actions">
                <a
                  href="https://outilsbelges.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dossier-btn-secondary"
                >
                  {isEn ? "Visit platform →" : "Visiter la plateforme →"}
                </a>
              </div>
            </div>

            <div className="dossier-right-col">
              <TaxCalculatorWidget isEn={isEn} />
            </div>
          </div>
        </Appear>

        {/* DOSSIER 03: YOBANTEL */}
        <Appear className="dossier-card">
          <div className="dossier-grid">
            <div className="dossier-left-col">
              <div className="dossier-status-pill">
                <span className="status-dot blue"></span>
                <span>{isEn ? "LOGISTICS CASE STUDY" : "ÉTUDE DE CAS LOGISTIQUE"}</span>
              </div>

              <span className="dossier-num">03 / YOBANTEL</span>
              <h3 className="dossier-title">Yobantel</h3>
              <p className="dossier-subtitle">
                {isEn
                  ? "How do you connect European ordering with West African cross-border logistics?"
                  : "Comment connecter la commande en Europe et la livraison logistique en Afrique de l'Ouest ?"}
              </p>

              <ul className="dossier-highlights">
                <li><span className="bullet">✦</span> {isEn ? "Cross-border parcel & customs tax engine" : "Moteur de douane et calcul de frais de livraison"}</li>
                <li><span className="bullet">✦</span> {isEn ? "Stripe & Mobile Money payments" : "Passerelle de paiement Stripe & Mobile Money"}</li>
                <li><span className="bullet">✦</span> {isEn ? "Automated WhatsApp status notifications" : "Notifications de suivi automatiques envoyées par WhatsApp"}</li>
              </ul>

              <div className="dossier-tags">
                <span className="dossier-tag">NEXT.JS</span>
                <span className="dossier-tag">MOBILE MONEY</span>
                <span className="dossier-tag">REST API</span>
              </div>

              <div className="dossier-actions">
                <button
                  type="button"
                  className="dossier-btn-secondary"
                  onClick={() => handleOpenModal("yobantel")}
                >
                  {isEn ? "Read Case Study →" : "Consulter l'étude de cas →"}
                </button>
              </div>
            </div>

            <div className="dossier-right-col">
              <YobantelWorkflowWidget isEn={isEn} />
            </div>
          </div>
        </Appear>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        t={t}
        studyKey={selectedStudy}
        lang={lang}
      />
    </section>
  );
}

export default CaseStudies;
