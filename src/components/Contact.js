import { EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react";

function Contact() {
  return (
    <section className="section section-alt" id="contact">
      <div className="section-inner section-inner-narrow">
        <p className="section-eyebrow">04 / Contact</p>
        <h2 className="section-title">Un projet, une question, une mission à discuter ?</h2>
        <p className="section-lead">
          Je réponds personnellement, sous 24h ouvrées.
        </p>
        <div className="contact-links">
          <a className="button button-primary" href="mailto:nooreyni35@gmail.com">
            <EnvelopeSimple size={18} weight="bold" />
            nooreyni35@gmail.com
          </a>
          <a
            className="button button-ghost"
            href="https://www.linkedin.com/in/nooreyni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={18} weight="bold" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
