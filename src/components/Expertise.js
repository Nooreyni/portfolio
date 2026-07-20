import { useState } from "react";
import Appear from "./Appear";

const EXPERTISE_ICONS = [
  // Cloud & Infrastructure
  <svg key="cloud" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/></svg>,
  
  // Automation
  <svg key="auto" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6"/><path d="M2 11.5a10 10 0 0 1 18.8-4.3L21.5 8M22 12.5a10 10 0 0 1-18.8 4.2L2.5 16"/></svg>,
  
  // AI
  <svg key="ai" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-3.5-6.5l-2.1 2.1m-8.8 8.8l-2.1 2.1m0-13l2.1 2.1m8.8 8.8l2.1 2.1"/><circle cx="12" cy="12" r="3.5"/></svg>,
  
  // Development
  <svg key="dev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  
  // Security
  <svg key="sec" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  
  // Strategy
  <svg key="strat" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
];

function Expertise({ t }) {
  const [hovered, setHovered] = useState(-1);

  return (
    <section className="expertise" id="expertise">
      <div className="expertise-inner">
        <p className="expertise-label">{t.expertiseLabel}</p>
        <div className="expertise-list">
          {t.expertise.map((ex, i) => {
            const isHovered = hovered === i;
            return (
              <Appear
                key={ex.title}
                delay={i * 0.04}
                className={`expertise-row${isHovered ? " is-hovered" : ""}`}
                style={{}}
              >
                <div
                  className="expertise-row-inner"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                  data-hot="1"
                >
                  <div className="expertise-icon-box">{EXPERTISE_ICONS[i]}</div>
                  <div className="expertise-main">
                    <div className="expertise-title-row">
                      <h3 className="expertise-title">{ex.title}</h3>
                      <span className="expertise-arrow">↗</span>
                    </div>
                    <p className="expertise-desc">{ex.desc}</p>
                  </div>
                  <div className="expertise-tools">
                    {ex.tools.map((tool) => (
                      <span className="expertise-tool expertise-tool-badge" key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Appear>
            );
          })}
          <div className="expertise-rule" />
        </div>
      </div>
    </section>
  );
}

export default Expertise;
