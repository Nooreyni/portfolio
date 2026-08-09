import { useEffect, useState, useRef } from "react";

function Nav({ t, onToggleLang, theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const sectionIds = ["manifesto", "expertise", "projects", "contact"];

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Auto-hide on scroll down, reveal on scroll up
      if (currentScrollY > 180) {
        if (currentScrollY > lastScrollY.current + 10) {
          setIsHidden(true); // Scrolling DOWN -> hide header
        } else if (currentScrollY < lastScrollY.current - 10) {
          setIsHidden(false); // Scrolling UP -> reveal header
        }
      } else {
        setIsHidden(false); // At top -> reveal header
      }

      lastScrollY.current = currentScrollY;

      // Active Section Highlight
      const scrollPos = currentScrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${isHidden ? "is-hidden" : ""}`} aria-label="Main navigation">
      <div className="nav-pill">
        <a href="#top" className="nav-mark">OD</a>
        <div className="nav-divider" />
        <a href="#manifesto" className={activeSection === "manifesto" ? "is-active" : ""}>{t.nav.manifesto}</a>
        <a href="#expertise" className={activeSection === "expertise" ? "is-active" : ""}>{t.nav.expertise}</a>
        <a href="#projects" className={activeSection === "projects" ? "is-active" : ""}>{t.nav.projects}</a>
        <a href="#contact" className={activeSection === "contact" ? "is-active" : ""}>{t.nav.contact}</a>
        <button className="nav-theme" onClick={onToggleTheme} aria-label="Changer le thème" data-hot="1">
          {theme === "light" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          )}
        </button>
        <button className="nav-lang" onClick={onToggleLang} data-hot="1">
          {t.nav.langLabel}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
