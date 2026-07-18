import { motion } from "framer-motion";

// Kelbail — a key turning, a radar pulse expanding: handing over a home.
function CaseVignetteKelbail() {
  return (
    <div className="vignette vignette-magenta">
      <motion.span
        className="vignette-radar"
        animate={{ scale: [0.6, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.span
        className="vignette-radar"
        animate={{ scale: [0.6, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
      />
      <motion.svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        className="vignette-key"
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="8" cy="8" r="4.5" stroke="white" strokeWidth="1.6" />
        <path d="M11.2 11.2 L20 20 M17 17 L14.5 19.5 M19 19 L16.5 21.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </motion.svg>
    </div>
  );
}

export default CaseVignetteKelbail;
