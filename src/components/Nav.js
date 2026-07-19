function Nav({ t, onToggleLang }) {
  return (
    <div className="nav">
      <div className="nav-pill">
        <a href="#top" className="nav-mark">OD</a>
        <div className="nav-divider" />
        <a href="#manifesto">{t.nav.manifesto}</a>
        <a href="#expertise">{t.nav.expertise}</a>
        <a href="#projects">{t.nav.projects}</a>
        <a href="#contact">{t.nav.contact}</a>
        <button className="nav-lang" onClick={onToggleLang} data-hot="1">
          {t.nav.langLabel}
        </button>
      </div>
    </div>
  );
}

export default Nav;
