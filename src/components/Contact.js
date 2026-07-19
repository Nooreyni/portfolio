import { useState } from "react";
import Appear from "./Appear";

// No backend on this static site — the "form" composes a real mailto so the
// message actually reaches an inbox, instead of silently vanishing.
function Contact({ t }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact — ${name || "site"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${t.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <Appear as="p" className="contact-line">{t.contact.line}</Appear>

        {!sent ? (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.contact.namePh}
              required
            />
            <textarea
              className="contact-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contact.messagePh}
              rows={4}
              required
            />
            <button type="submit" className="contact-submit" data-hot="1">
              {t.contact.submit}
            </button>
          </form>
        ) : (
          <p className="contact-thanks">{t.contact.thanks}</p>
        )}

        <a href={`mailto:${t.contact.email}`} className="contact-email">{t.contact.email}</a>
      </div>
    </section>
  );
}

export default Contact;
