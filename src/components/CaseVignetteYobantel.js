import { motion } from "framer-motion";

// Yobantel — a dashed route Bruxelles → Dakar, drawn in on view, with a dot traveling it.
function CaseVignetteYobantel() {
  return (
    <div className="vignette vignette-green">
      <svg width="100%" height="100%" viewBox="0 0 240 120" fill="none">
        <motion.path
          d="M 30 30 Q 120 10 210 90"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <circle cx="30" cy="30" r="4" fill="white" />
        <circle cx="210" cy="90" r="4" fill="white" />
        <text x="14" y="20" fill="white" fontSize="10" fontFamily="var(--font-mono)">BXL</text>
        <text x="188" y="108" fill="white" fontSize="10" fontFamily="var(--font-mono)">DKR</text>
        <motion.circle
          r="4"
          fill="#FDE68A"
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          style={{ offsetPath: "path('M 30 30 Q 120 10 210 90')" }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

export default CaseVignetteYobantel;
