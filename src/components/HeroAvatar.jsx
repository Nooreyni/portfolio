import { useState } from "react";

// Minimalist 2D Vector Character Avatar Illustration (Editorial Notion/Framer Style)
function HeroAvatar() {
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <div className="hero-avatar-container">
      <div 
        className="hero-avatar-card"
        style={{ transform, transition: "transform 0.15s ease-out" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Frame corner marks */}
        <span className="avatar-corner corner-tl" />
        <span className="avatar-corner corner-tr" />
        <span className="avatar-corner corner-bl" />
        <span className="avatar-corner corner-br" />

        {/* Character Vector Illustration Wrapper */}
        <div className="character-illustration-wrapper">
          <svg viewBox="0 0 360 360" className="character-avatar-svg">
            <defs>
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F5F4EE" />
                <stop offset="100%" stopColor="#EAE7DF" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6E473B" />
                <stop offset="100%" stopColor="#543329" />
              </linearGradient>
              <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0033FF" />
                <stop offset="100%" stopColor="#0022B3" />
              </linearGradient>
            </defs>

            {/* Soft Background Circle */}
            <circle cx="180" cy="180" r="160" fill="url(#bgGrad)" stroke="#111111" strokeWidth="1.5" strokeDasharray="6 3" />
            <circle cx="180" cy="180" r="130" fill="none" stroke="#0033FF" strokeWidth="1" strokeOpacity="0.3" />

            {/* Floating Tech Badges around Character */}
            {/* Cloud Icon Badge */}
            <g transform="translate(45, 80)">
              <rect x="0" y="0" width="46" height="28" rx="14" fill="#111111" />
              <text x="23" y="18" fill="#F5F4EE" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CLOUD</text>
            </g>

            {/* AI Sparkle Badge */}
            <g transform="translate(265, 95)">
              <rect x="0" y="0" width="48" height="28" rx="14" fill="#0033FF" />
              <text x="24" y="18" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">✦ AI</text>
            </g>

            {/* Automation Badge */}
            <g transform="translate(255, 230)">
              <rect x="0" y="0" width="56" height="28" rx="14" fill="#111111" />
              <text x="28" y="18" fill="#F5F4EE" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AUTO</text>
            </g>

            {/* Character Base & Clothing */}
            {/* Dark Minimalist Blazer / Jacket */}
            <path d="M 80 340 Q 180 270 280 340 Z" fill="#111111" />
            {/* Turtleneck Collar */}
            <path d="M 145 250 L 215 250 L 220 290 L 140 290 Z" fill="#1C1C1A" />

            {/* Neck */}
            <rect x="162" y="215" width="36" height="45" rx="6" fill="url(#skinGrad)" />

            {/* Head & Face Shape */}
            <path d="M 130 150 C 130 215 230 215 230 150 C 230 95 130 95 130 150 Z" fill="url(#skinGrad)" />

            {/* Hair */}
            <path d="M 128 140 C 128 85 232 85 232 140 C 232 105 128 105 128 140 Z" fill="#140D0B" />

            {/* Glasses (Modern Architect Frame) */}
            <g stroke="#111111" strokeWidth="3.5" fill="none">
              {/* Left Lens */}
              <rect x="142" y="135" width="34" height="26" rx="6" fill="rgba(255,255,255,0.15)" stroke="#0033FF" />
              {/* Right Lens */}
              <rect x="184" y="135" width="34" height="26" rx="6" fill="rgba(255,255,255,0.15)" stroke="#0033FF" />
              {/* Bridge */}
              <line x1="176" y1="146" x2="184" y2="146" stroke="#111111" strokeWidth="3" />
            </g>

            {/* Eyes behind glasses */}
            <circle cx="159" cy="148" r="3" fill="#140D0B" />
            <circle cx="201" cy="148" r="3" fill="#140D0B" />

            {/* Friendly Confident Smile */}
            <path d="M 165 182 Q 180 194 195 182" fill="none" stroke="#3D241C" strokeWidth="3" strokeLinecap="round" />

            {/* Ears */}
            <circle cx="127" cy="155" r="8" fill="url(#skinGrad)" />
            <circle cx="233" cy="155" r="8" fill="url(#skinGrad)" />

            {/* Subtle System Connection Rays */}
            <line x1="91" y1="94" x2="142" y2="140" stroke="#0033FF" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
            <line x1="265" y1="109" x2="218" y2="140" stroke="#0033FF" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.6" />
          </svg>
        </div>

        {/* Architectural HUD Label */}
        <div className="avatar-hud">
          <div className="avatar-hud-item">
            <span className="avatar-hud-label">CONSULTANT</span>
            <span className="avatar-hud-val">OUSMANE DIOP</span>
          </div>
          <div className="avatar-hud-item text-right">
            <span className="avatar-hud-label">SYSTEMS</span>
            <span className="avatar-hud-val val-active">✦ ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroAvatar;
