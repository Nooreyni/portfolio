import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Appear from "./Appear";
import CaseStudyModal from "./CaseStudyModal";

// Custom SVG abstract animations for each question type
function ClarifyAnimation() {
  return (
    <div className="abstract-visual-box clarify-visual">
      <svg viewBox="0 0 400 300" className="abstract-svg">
        {/* Chaos dots that morph or float into structured grid */}
        <g className="chaos-group">
          {/* Scattered dots */}
          <circle cx="60" cy="80" r="4" className="chaos-dot d1" />
          <circle cx="90" cy="220" r="5" className="chaos-dot d2" />
          <circle cx="150" cy="50" r="3" className="chaos-dot d3" />
          <circle cx="280" cy="70" r="4" className="chaos-dot d4" />
          <circle cx="340" cy="190" r="6" className="chaos-dot d5" />
          <circle cx="310" cy="250" r="4" className="chaos-dot d6" />
        </g>

        {/* Structured Grid that fades in/out */}
        <g className="structure-group">
          {/* Grid lines */}
          <line x1="120" y1="100" x2="280" y2="100" className="structure-line" />
          <line x1="120" y1="150" x2="280" y2="150" className="structure-line" />
          <line x1="120" y1="200" x2="280" y2="200" className="structure-line" />
          
          <line x1="150" y1="70" x2="150" y2="230" className="structure-line" />
          <line x1="200" y1="70" x2="200" y2="230" className="structure-line" />
          <line x1="250" y1="70" x2="250" y2="230" className="structure-line" />

          {/* Clean intersection nodes */}
          <circle cx="150" cy="100" r="5" className="struct-node n1" />
          <circle cx="200" cy="100" r="5" className="struct-node n2" />
          <circle cx="250" cy="100" r="5" className="struct-node n3" />
          
          <circle cx="150" cy="150" r="5" className="struct-node n4" />
          <circle cx="200" cy="150" r="5" className="struct-node n5" />
          <circle cx="250" cy="150" r="5" className="struct-node n6" />
          
          <circle cx="150" cy="200" r="5" className="struct-node n7" />
          <circle cx="200" cy="200" r="5" className="struct-node n8" />
          <circle cx="250" cy="200" r="5" className="struct-node n9" />
        </g>

        {/* Flow connection path linking chaos to structure */}
        <path d="M 60 80 Q 110 50 150 100" className="flow-connector c1" />
        <path d="M 90 220 Q 120 180 200 150" className="flow-connector c2" />
        <path d="M 310 250 Q 280 220 250 200" className="flow-connector c3" />
      </svg>
    </div>
  );
}

function ConnectAnimation() {
  return (
    <div className="abstract-visual-box connect-visual">
      <svg viewBox="0 0 400 300" className="abstract-svg">
        {/* Three main hub nodes */}
        <g className="hubs">
          {/* People hub */}
          <circle cx="100" cy="150" r="28" className="hub-circle people-hub" />
          <text x="100" y="154" className="hub-text">HUMAN</text>

          {/* System hub */}
          <circle cx="200" cy="80" r="28" className="hub-circle system-hub" />
          <text x="200" y="84" className="hub-text">SYSTEM</text>

          {/* Process hub */}
          <circle cx="300" cy="150" r="28" className="hub-circle process-hub" />
          <text x="300" y="154" className="hub-text">PROCESS</text>
        </g>

        {/* Continuous pulse loop paths connecting them */}
        <path d="M 100 150 L 200 80" className="connect-link l1" />
        <path d="M 200 80 L 300 150" className="connect-link l2" />
        <path d="M 300 150 C 200 240 200 240 100 150" className="connect-link l3" />

        {/* Floating signal packets */}
        <circle cx="0" cy="0" r="4" className="signal-packet p1" />
        <circle cx="0" cy="0" r="4" className="signal-packet p2" />
        <circle cx="0" cy="0" r="4" className="signal-packet p3" />
      </svg>
    </div>
  );
}

function ScaleAnimation() {
  return (
    <div className="abstract-visual-box scale-visual">
      <svg viewBox="0 0 400 300" className="abstract-svg">
        {/* Growing levels that get stronger but remain simple */}
        <g className="scale-base">
          {/* Bottom solid platform */}
          <rect x="80" y="220" width="240" height="24" rx="4" className="scale-layer layer-base" />
          <text x="200" y="235" className="layer-text">FOUNDATION (M365 & Security)</text>

          {/* Middle tier */}
          <rect x="110" y="160" width="180" height="24" rx="4" className="scale-layer layer-mid" />
          <text x="200" y="175" className="layer-text">INTEGRATIONS (Identity)</text>

          {/* Top tier */}
          <rect x="140" y="100" width="120" height="24" rx="4" className="scale-layer layer-top" />
          <text x="200" y="115" className="layer-text">AUTOMATION</text>
        </g>

        {/* Vertical alignment indicator showing strength/growth */}
        <line x1="200" y1="60" x2="200" y2="240" className="alignment-core" />
        <circle cx="200" cy="60" r="6" className="growth-node" />
        
        {/* Subtle rising expansion lines */}
        <path d="M 80 220 L 110 160" className="scale-join" />
        <path d="M 320 220 L 290 160" className="scale-join" />
        <path d="M 110 160 L 140 100" className="scale-join" />
        <path d="M 290 160 L 260 100" className="scale-join" />
      </svg>
    </div>
  );
}

function CaseStudies({ t }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState("");

  // Track vertical scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Discrete indexing on milestones
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.35) {
      setActiveIndex(0);
    } else if (latest >= 0.35 && latest < 0.65) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const list = t.questionsList || [];

  const handleLinkClick = (e, link) => {
    if (link === "whatsapp-ai" || link === "yobantel") {
      e.preventDefault();
      setSelectedStudy(link);
      setIsModalOpen(true);
    }
  };

  return (
    <div ref={containerRef} className="cs-horizontal-container" id="projects">
      <div className="cs-sticky-wrapper">
        {/* Pinned Section Title */}
        <h2 className="cs-horizontal-title">{t.projectsLabel}</h2>

        {/* Horizontal track translating discretely to avoid half-and-half splits */}
        <div 
          className="cs-horizontal-track" 
          style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
        >
          {list.map((item, idx) => {
            return (
              <div key={item.name} className={`cs-horizontal-panel ${item.isFeatured ? "featured-panel-highlight" : ""}`}>
                <Appear className="cs-chapter-layout">
                  {/* Left content block: Storytelling questions & proof */}
                  <div className="cs-chapter-left">
                    {/* Featured pulsing badge for Slide 1 (WhatsApp Bot) */}
                    {item.isFeatured && (
                      <div className="cs-featured-badge-pulse">
                        <span className="pulse-dot"></span>
                        <span className="pulse-text">{item.badgeText}</span>
                      </div>
                    )}

                    <span className="cs-chapter-num">0{idx + 1}</span>
                    <h3 className="cs-chapter-question">{item.question}</h3>
                    <p className="cs-chapter-desc">{item.paragraph}</p>
                    
                    <div className="cs-chapter-separator" />
                    
                    <div className="cs-chapter-proof">
                      <h4 className="cs-chapter-project-name">{item.name}</h4>
                      <p className="cs-chapter-project-purpose">{item.purpose}</p>
                      
                      <ul className="cs-chapter-highlights">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="cs-chapter-highlight-item">
                            <span className="cs-chapter-bullet">✦</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      {item.linkText && (
                        <a 
                          href={item.link === "whatsapp-ai" || item.link === "yobantel" ? "#" : item.link} 
                          className={`cs-chapter-cta ${item.isFeatured ? "featured-btn-cta" : ""}`}
                          onClick={(e) => handleLinkClick(e, item.link)}
                          target={item.link.startsWith("http") ? "_blank" : "_self"}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                        >
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right visual block: Abstract SVG animation */}
                  <div className={`cs-chapter-right ${item.isFeatured ? "featured-visual-glow" : ""}`}>
                    {idx === 0 && <ClarifyAnimation />}
                    {idx === 1 && <ConnectAnimation />}
                    {idx === 2 && <ScaleAnimation />}
                  </div>
                </Appear>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal (Shared generic modal) */}
      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        t={t} 
        studyKey={selectedStudy}
      />
    </div>
  );
}

export default CaseStudies;
