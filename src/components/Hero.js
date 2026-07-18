import { useRef, Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import SplitText from "./SplitText";

const OrchestrationScene = lazy(() => import("./OrchestrationScene"));

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const meshY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <motion.div className="hero-mesh" style={{ y: meshY }} aria-hidden="true" />
      <motion.div className="hero-scene-wrap" style={{ y: meshY }}>
        <Suspense fallback={null}>
          <OrchestrationScene />
        </Suspense>
      </motion.div>
      <motion.div className="hero-inner" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="hero-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          orchestrateur_IT × IA
        </motion.p>
        <h1 className="hero-title">
          <span className="hero-title-line">
            <SplitText text="Une infrastructure" delayStart={0.1} />
          </span>
          <span className="hero-title-line">
            <SplitText text="de grande entreprise." delayStart={0.3} />
          </span>
          <span className="hero-title-line">
            <SplitText text="Un budget de" delayStart={0.55} />{" "}
            <motion.span
              className="hero-title-accent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.75, ease: "easeOut" }}
            >
              pme
            </motion.span>
            .
          </span>
        </h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Architecte IT &amp; orchestrateur IA freelance basé à Bruxelles. Je pilote
          gouvernance, sécurité et automatisation pour des PME et associations
          belges — l'IA multiplie ce que je livre, elle ne remplace pas le
          jugement qui décide quoi construire.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
        >
          <a href="#contact" className="button button-primary">
            Discutons de votre projet
            <ArrowRight size={18} weight="bold" />
          </a>
          <a href="#realisations" className="button button-ghost">
            Voir mes réalisations
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
