import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CaseStudyModal from "./CaseStudyModal";

function AbstractMiniPreview({ name }) {
  // Renders a small abstract schematic based on the hovered item's name
  switch (name) {
    case "Kelbail":
      return (
        <svg viewBox="0 0 100 100" className="mini-preview-svg">
          <rect x="25" y="25" width="50" height="50" rx="6" className="preview-shape line-shape" />
          <line x1="25" y1="50" x2="75" y2="50" className="preview-shape line-shape" />
          <circle cx="50" cy="50" r="4" className="preview-dot" />
        </svg>
      );
    case "Microsoft Modern Workplace":
      return (
        <svg viewBox="0 0 100 100" className="mini-preview-svg">
          <circle cx="50" cy="50" r="24" className="preview-shape line-shape dash-shape" />
          <circle cx="50" cy="50" r="8" className="preview-shape line-shape" />
        </svg>
      );
    case "AI Agents":
      return (
        <svg viewBox="0 0 100 100" className="mini-preview-svg">
          <circle cx="50" cy="30" r="5" className="preview-shape node-point" />
          <circle cx="30" cy="65" r="5" className="preview-shape node-point" />
          <circle cx="70" cy="65" r="5" className="preview-shape node-point" />
          <line x1="50" y1="35" x2="30" y2="60" className="preview-shape line-shape" />
          <line x1="50" y1="35" x2="70" y2="60" className="preview-shape line-shape" />
          <line x1="35" y1="65" x2="65" y2="65" className="preview-shape line-shape" />
        </svg>
      );
    case "CRM Platform":
      return (
        <svg viewBox="0 0 100 100" className="mini-preview-svg">
          <line x1="20" y1="80" x2="80" y2="80" className="preview-shape line-shape" />
          <path d="M 20 70 L 40 40 L 60 55 L 80 20" className="preview-shape line-shape" />
          <circle cx="80" cy="20" r="3" className="preview-dot" />
        </svg>
      );
    default:
      return null;
  }
}

function OtherWork({ t }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudy, setSelectedStudy] = useState("");

  const items = t.otherSelectedWork || [];

  const handleItemClick = (e, item) => {
    if (item.link === "microsoft-workplace" || item.link === "ai-agents" || item.link === "crm-platform") {
      e.preventDefault();
      setSelectedStudy(item.link);
      setIsModalOpen(true);
    }
  };

  return (
    <section className="ow-section">
      <div className="ow-inner">
        {/* Sober Editorial Section Title */}
        <h2 className="ow-title">{t.otherSelectedTitle}</h2>

        <div className="ow-list-wrapper">
          <ul className="ow-list">
            {items.map((item, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <li 
                  key={item.name}
                  className="ow-item"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a 
                    href={item.link.startsWith("http") ? item.link : "#"}
                    className="ow-link"
                    onClick={(e) => handleItemClick(e, item)}
                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                  >
                    <span className="ow-name">{item.name}</span>
                    <span className="ow-type-badge">{item.type}</span>
                  </a>

                  {/* Horizontal line appearing on hover */}
                  <div className={`ow-hover-line ${isHovered ? "active" : ""}`} />

                  {/* Floating abstract preview */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        className="ow-floating-preview"
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <AbstractMiniPreview name={item.name} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Case Study Modal (Shared generic modal) */}
      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        t={t} 
        studyKey={selectedStudy}
      />
    </section>
  );
}

export default OtherWork;
