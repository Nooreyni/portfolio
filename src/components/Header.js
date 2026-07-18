function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="header-logo">
          Nooreyni
        </a>
        <nav className="header-nav" aria-label="Navigation principale">
          <a href="#services">Services</a>
          <a href="#realisations">Réalisations</a>
          <a href="#parcours">Parcours</a>
          <a href="#contact" className="header-cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
