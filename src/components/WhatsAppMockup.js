import { Check, Checks } from "@phosphor-icons/react";

// Representative conversation based on how the bot actually behaves in production
// (real system: FR/NL/EN detection, hours + FAQ from DB, order flow) — not a literal
// transcript screenshot since WhatsApp conversations can't be captured that way.
function WhatsAppMockup() {
  return (
    <div className="wa-mockup" role="img" aria-label="Aperçu d'une conversation avec l'assistant WhatsApp">
      <div className="wa-mockup-header">
        <div className="wa-mockup-avatar">LPB</div>
        <div>
          <p className="wa-mockup-name">Le Petit Belge</p>
          <p className="wa-mockup-status">en ligne</p>
        </div>
      </div>
      <div className="wa-mockup-body">
        <div className="wa-bubble wa-bubble-in">
          Bonjour, vous êtes ouverts ce soir ?
        </div>
        <div className="wa-bubble wa-bubble-out">
          👋 Oui, jusqu'à 22h ce soir ! Vous pouvez commander directement ici,
          ou passer sur place.
          <span className="wa-bubble-meta">21:04 <Checks size={14} weight="bold" /></span>
        </div>
        <div className="wa-bubble wa-bubble-in">
          Je veux commander
        </div>
        <div className="wa-bubble wa-bubble-out">
          Super ! 📅 Pour quelle date et heure ? (ex: ce soir à 20h)
          <span className="wa-bubble-meta">21:04 <Check size={14} weight="bold" /></span>
        </div>
      </div>
    </div>
  );
}

export default WhatsAppMockup;
