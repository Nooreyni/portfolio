import { useState, useRef, useEffect } from "react";

// ── Configuration ──────────────────────────────────────────────────────────
// URL de base du serveur WhatsApp Bot PME.
//  - Dev local : http://localhost:3001
//  - Prod     : l'URL publique du bot (ex. https://app.onrender.com) une fois
//               déployé, sinon le widget ne répondra pas sur le site en ligne.
const API_BASE = "http://localhost:3001";

// Numéro de téléphone du commerce (identifie le client côté bot).
const BUSINESS_PHONE = "+32470000111";

// Session stable : sert de numéro client côté serveur (persistance du contexte).
const SESSION_ID = "portfolio-widget";
// ───────────────────────────────────────────────────────────────────────────

const QUICK_SUGGESTIONS = [
  "Comment travailles-tu ?",
  "Disponibilités ?",
  "Combien ça coûte ?",
];

const TYPING = "…";

function ChatWidget({ lang }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const isEn = lang === "en";

  const labels = isEn
    ? {
        open: "Chat",
        title: "Chat",
        sub: "Ask me anything",
        ph: "Type your message…",
        send: "Send",
        err: "Unavailable right now. Email instead.",
        retry: "Retry",
      }
    : {
        open: "Discuter",
        title: "Parlons-en",
        sub: "Je réponds en direct",
        ph: "Écris ton message…",
        send: "Envoyer",
        err: "Indisponible pour l'instant. Écris-moi par email.",
        retry: "Réessayer",
      };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, busy]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  async function send(text) {
    const msg = (text || input).trim();
    if (!msg || busy) return;
    setInput("");
    setError(false);
    const userMsg = { role: "user", content: msg };
    setMessages((m) => [...m, userMsg]);
    setBusy(true);
    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          phone: BUSINESS_PHONE,
          session: SESSION_ID,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.reply) throw new Error(data.error || "Erreur");
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (e) {
      setError(true);
    } finally {
      setBusy(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      <button
        type="button"
        className={`chat-fab ${open ? "is-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={labels.open}
        aria-expanded={open}
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className="chat-panel" role="dialog" aria-label={labels.title}>
          <div className="chat-head">
            <div>
              <span className="chat-dot" />
              <span className="chat-title">{labels.title}</span>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="chat-body" ref={listRef}>
            <div className="chat-msg assistant">
              {isEn
                ? "Hi! I'm the assistant here. How can I help?"
                : "Salut ! Je suis l'assistant de Nooreyni Studio. Comment puis-je t'aider ?"}
            </div>

            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role}`}>
                {m.content}
              </div>
            ))}

            {busy && <div className="chat-msg assistant">{TYPING}</div>}

            {error && (
              <div className="chat-error">
                {labels.err}
                <button type="button" onClick={() => send(messages[messages.length - 1]?.content)}>
                  {labels.retry}
                </button>
              </div>
            )}
          </div>

          <div className="chat-quick">
            {QUICK_SUGGESTIONS.map((q) => (
              <button key={q} type="button" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className="chat-input-row">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder={labels.ph}
              aria-label={labels.ph}
            />
            <button
              type="button"
              className="chat-send"
              onClick={() => send()}
              disabled={busy}
              aria-label={labels.send}
            >
              {labels.send}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
