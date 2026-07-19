function Footer({ t }) {
  return (
    <footer className="footer">
      <div>OUSMANE DIOP — {t.footer.tag}</div>
      <div>© {new Date().getFullYear()}</div>
    </footer>
  );
}

export default Footer;
