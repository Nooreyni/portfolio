function Ticker({ t }) {
  const items = t.marqueeItems;
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[0, 1].map((rep) => (
          <span className="ticker-group" key={rep} aria-hidden={rep === 1}>
            {items.map((item, i) => (
              <span className="ticker-item" key={`${rep}-${i}`}>
                {item}
                <span className="ticker-dot" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
