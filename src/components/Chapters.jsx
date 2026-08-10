import { useState } from "react";
import useChapterStacking from "../hooks/useChapterStacking";

function Chapters({ t }) {
  const { setChapterRef, nextRef, styleFor } = useChapterStacking(t.chapters.length);
  const [openMobileIdx, setOpenMobileIdx] = useState(0);

  const toggleMobileStep = (idx) => {
    setOpenMobileIdx((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="chapters-section" id="approche">
      {/* Desktop View: 100% Original Sticky Stacking */}
      <div className="chapters chapters-desktop-view">
        {t.chapters.map((ch, i) => (
          <div
            key={ch.title}
            ref={setChapterRef(i)}
            className="chapter-sticky"
            style={{ zIndex: 10 + i, ...styleFor(i) }}
          >
            <p className="chapter-index">
              {String(i + 1).padStart(2, "0")} — {t.chaptersLabel}
            </p>
            <h2 className="chapter-title">{ch.title}</h2>
            <p className="chapter-body">{ch.body}</p>
          </div>
        ))}
        <div ref={nextRef} className="chapters-end" />
      </div>

      {/* Mobile-Exclusive View: Vertical Interactive Accordion Stepper */}
      <div className="chapters-mobile-view">
        <div className="chapters-mobile-header">
          <span className="chapters-mobile-label">✦ {t.chaptersLabel}</span>
          <h3 className="chapters-mobile-heading">Méthodologie en 5 Étapes</h3>
        </div>

        <div className="chapters-accordion-list">
          {t.chapters.map((ch, i) => {
            const isOpen = openMobileIdx === i;
            return (
              <div 
                key={ch.title}
                className={`chapters-accordion-item ${isOpen ? "is-open" : ""}`}
                onClick={() => toggleMobileStep(i)}
              >
                <div className="chapters-accordion-header">
                  <div className="chapters-accordion-title-wrap">
                    <span className="chapters-accordion-num">0{i + 1}</span>
                    <h4 className="chapters-accordion-title">{ch.title}</h4>
                  </div>
                  <span className="chapters-accordion-toggle-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {isOpen && (
                  <div className="chapters-accordion-content">
                    <p className="chapters-accordion-body">{ch.body}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Chapters;
