import { useState } from "react";
import { motion } from "framer-motion";

// outilsbelges.be — the count ticks up to the real number of tools live on the site.
function CaseVignetteOutils() {
  const [count, setCount] = useState(0);

  function start() {
    const target = 47;
    const duration = 1200;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  return (
    <motion.div
      className="vignette vignette-amber"
      onViewportEnter={start}
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.span
        className="vignette-bar vignette-bar-left"
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <span className="vignette-number">{count}</span>
      <span className="vignette-label">outils en ligne</span>
      <motion.span
        className="vignette-bar vignette-bar-right"
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default CaseVignetteOutils;
