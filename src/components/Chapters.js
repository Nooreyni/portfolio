import useChapterStacking from "../hooks/useChapterStacking";

// No per-chapter wrapper on purpose: a sticky element's travel range is
// bounded by its immediate containing block. A wrapper sized to fit its own
// sticky child (the natural default) leaves zero room to stick — each
// chapter must be a direct child of the single tall `.chapters` container,
// exactly like its siblings, so the container itself provides the scroll room.
function Chapters({ t }) {
  const { setChapterRef, nextRef, styleFor } = useChapterStacking(t.chapters.length);

  return (
    <div className="chapters">
      {t.chapters.map((ch, i) => (
        <div
          key={ch.title}
          ref={setChapterRef(i)}
          className="chapter-sticky"
          style={{ zIndex: 10 + i, ...styleFor(i) }}
        >
          <p className="chapter-index">
            {String(i + 1).padStart(2, "0")} — {t.chaptersLabel}
          </p>
          <h2 className="chapter-title">{ch.title}</h2>
          <p className="chapter-body">{ch.body}</p>
        </div>
      ))}
      <div ref={nextRef} className="chapters-end" />
    </div>
  );
}

export default Chapters;
