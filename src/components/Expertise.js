import { useState } from "react";
import Appear from "./Appear";

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
                  <div className="expertise-index">{String(i + 1).padStart(2, "0")}</div>
                  <div className="expertise-main">
                    <div className="expertise-title-row">
                      <h3 className="expertise-title">{ex.title}</h3>
                      <span className="expertise-arrow">↗</span>
                    </div>
                    <p className="expertise-desc">{ex.desc}</p>
                  </div>
                  <div className="expertise-tools">
                    {ex.tools.map((tool) => (
                      <span className="expertise-tool" key={tool}>{tool}</span>
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
