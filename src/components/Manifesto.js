import Appear from "./Appear";

function Manifesto({ t }) {
  return (
    <section className="manifesto" id="manifesto">
      <div className="manifesto-inner">
        <Appear as="p" className="manifesto-statement">{t.manifesto.statement}</Appear>
        <Appear as="p" delay={0.15} className="manifesto-body">{t.manifesto.body}</Appear>
      </div>
    </section>
  );
}

export default Manifesto;
