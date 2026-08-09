// A barely-visible 12-column guide — the "everything is aligned" signal.
function GridOverlay() {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <div className="grid-overlay-col" key={i} />
      ))}
    </div>
  );
}

export default GridOverlay;
