import { useState, useEffect } from "react";

// Minimalist High-Credibility System Blueprint Component (No heavy text, purely visual & interactive)
function HeroSystemBlueprint() {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [activeNode, setActiveNode] = useState(null);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    setActiveNode(null);
  };

  const pulseOffset = (pulse * 2.5) % 20;

  return (
    <div className="hero-blueprint-wrapper">
      <div
        className="hero-blueprint-badge"
        style={{ transform, transition: "transform 0.15s ease-out" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Frame Hairline Corners */}
        <span className="badge-corner corner-tl" />
        <span className="badge-corner corner-tr" />
        <span className="badge-corner corner-bl" />
        <span className="badge-corner corner-br" />

        {/* Live Status Bar */}
        <div className="blueprint-top-bar">
          <div className="status-live">
            <span className="status-dot-pulse" />
            <span className="status-text">SYSTEM ARCHITECTURE</span>
          </div>
          <span className="status-code">BE • BRUXELLES</span>
        </div>

        {/* System Nodes Visual Schematic */}
        <div className="blueprint-schematic-box">
          <svg viewBox="0 0 320 220" className="schematic-svg">
            <defs>
              <linearGradient id="cobaltLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#111111" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0033FF" stopOpacity="1" />
                <stop offset="100%" stopColor="#0033FF" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Background Grid Lines */}
            <line x1="20" y1="110" x2="300" y2="110" stroke="rgba(17,17,17,0.06)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="160" y1="20" x2="160" y2="200" stroke="rgba(17,17,17,0.06)" strokeWidth="1" strokeDasharray="4 4" />

            {/* Connecting Flux Lines */}
            <path
              d="M 65 110 Q 112 60, 160 110"
              fill="none"
              stroke={activeNode === 0 ? "#0033FF" : "rgba(17,17,17,0.2)"}
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <path
              d="M 160 110 Q 208 160, 255 110"
              fill="none"
              stroke={activeNode === 2 ? "#0033FF" : "rgba(17,17,17,0.2)"}
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* Main Flux Stream */}
            <line x1="65" y1="110" x2="255" y2="110" stroke="url(#cobaltLine)" strokeWidth="2.5" />
            <line
              x1="65"
              y1="110"
              x2="255"
              y2="110"
              stroke="#0033FF"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              strokeDashoffset={-pulseOffset}
            />

            {/* NODE 1: CLOUD / INFRA (Left Hub) */}
            <g
              className="schematic-node-group"
              onMouseEnter={() => setActiveNode(0)}
              style={{ cursor: "pointer" }}
            >
              <circle cx="65" cy="110" r="22" fill="#F5F4EE" stroke={activeNode === 0 ? "#0033FF" : "#111111"} strokeWidth="1.5" />
              {/* Cloud Icon */}
              <path
                d="M 57 113 A 6 6 0 0 1 61 104 A 9 9 0 0 1 73 107 A 6 6 0 0 1 73 113 Z"
                fill="none"
                stroke={activeNode === 0 ? "#0033FF" : "#111111"}
                strokeWidth="1.5"
              />
              <text x="65" y="146" className="node-tag">CLOUD</text>
            </g>

            {/* NODE 2: AUTOMATION & INTEGRATION (Center Core Hub) */}
            <g
              className="schematic-node-group"
              onMouseEnter={() => setActiveNode(1)}
              style={{ cursor: "pointer" }}
            >
              <circle cx="160" cy="110" r="26" fill="#F5F4EE" stroke="#0033FF" strokeWidth="2" />
              <circle cx="160" cy="110" r="32" fill="none" stroke="#0033FF" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
              {/* Refresh / Flow Icon */}
              <path
                d="M 154 105 A 7 7 0 0 1 166 107 M 166 115 A 7 7 0 0 1 154 113"
                fill="none"
                stroke="#0033FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text x="160" y="153" className="node-tag core-tag">WORKFLOWS</text>
            </g>

            {/* NODE 3: AI ASSISTANTS (Right Output Hub) */}
            <g
              className="schematic-node-group"
              onMouseEnter={() => setActiveNode(2)}
              style={{ cursor: "pointer" }}
            >
              <circle cx="255" cy="110" r="22" fill="#F5F4EE" stroke={activeNode === 2 ? "#0033FF" : "#111111"} strokeWidth="1.5" />
              {/* AI Sparkle Icon */}
              <path
                d="M 255 101 L 257 108 L 264 110 L 257 112 L 255 119 L 253 112 L 246 110 L 253 108 Z"
                fill={activeNode === 2 ? "#0033FF" : "#111111"}
              />
              <text x="255" y="146" className="node-tag">AI BOTS</text>
            </g>
          </svg>
        </div>

        {/* Tech Ecosystem Line */}
        <div className="blueprint-tech-stack">
          <span className="tech-item">MICROSOFT 365</span>
          <span className="tech-dot">•</span>
          <span className="tech-item">AZURE</span>
          <span className="tech-dot">•</span>
          <span className="tech-item">POWER PLATFORM</span>
          <span className="tech-dot">•</span>
          <span className="tech-item">N8N</span>
          <span className="tech-dot">•</span>
          <span className="tech-item">OPENAI</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSystemBlueprint;
