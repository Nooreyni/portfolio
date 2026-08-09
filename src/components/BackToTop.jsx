import { useState, useEffect } from "react";

// Floating Back-to-Top Button
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className={`back-to-top-btn ${isVisible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Remonter en haut de page"
    >
      <span className="btt-arrow">↑</span>
      <span className="btt-text">HAUT</span>
    </button>
  );
}

export default BackToTop;
