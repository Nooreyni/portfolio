import useActiveSection from "../hooks/useActiveSection";

const SECTION_IDS = ["services", "realisations", "parcours", "contact"];

function Header() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="header-logo">
          nooreyni_
        </a>
        <nav className="header-nav" aria-label="Navigation principale">
          <a href="#services" className={active === "services" ? "is-active" : ""}>
            Services
          </a>
          <a href="#realisations" className={active === "realisations" ? "is-active" : ""}>
            Réalisations
          </a>
          <a href="#parcours" className={active === "parcours" ? "is-active" : ""}>
            Parcours
          </a>
          <a href="#contact" className="header-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
