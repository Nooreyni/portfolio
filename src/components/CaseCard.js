import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Continuous scroll-linked settle-in (scale + fade) as the card crosses the
// viewport — tracks scroll position directly instead of firing once at a threshold.
function CaseCard({ className, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 55%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.article
      ref={ref}
      className={className}
      style={{ scale, opacity }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {children}
    </motion.article>
  );
}

export default CaseCard;
