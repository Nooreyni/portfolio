import useScrollProgress from "../hooks/useScrollProgress";

// The signature device: a single thread running down the page, filling as you
// move through it — literally the "one person orchestrating everything" idea.
function OrchestrationLine() {
  const progress = useScrollProgress();

  return (
    <div className="orchestration-line" aria-hidden="true">
      <div className="orchestration-line-track">
        <div
          className="orchestration-line-fill"
          style={{ height: `${progress * 100}%` }}
        />
        <div
          className="orchestration-line-node"
          style={{ top: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}

export default OrchestrationLine;
