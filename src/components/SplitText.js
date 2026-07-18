import { motion } from "framer-motion";

// Word-by-word reveal, masked by overflow-hidden — the signature hero move.
function SplitText({ text, delayStart = 0 }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="split-word-mask">
          <motion.span
            className="split-word"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: delayStart + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      )).reduce((acc, el, i) => (i === 0 ? [el] : [...acc, " ", el]), [])}
    </>
  );
}

export default SplitText;
