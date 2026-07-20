function SystemBlueprint({ blueprint, activeAction, activeStep }) {
  const { nodes, edges } = blueprint;

  // Render a small icon marker depending on node type
  function getNodeIndicator(type) {
    switch (type) {
      case "input":
        return "●";
      case "security":
        return "🔒";
      case "database":
        return "⛁";
      case "blocked":
        return "✖";
      default:
        return "⚙";
    }
  }

  // Determine if a node should be active based on current activeStep
  function isNodeActive(nodeId) {
    if (!activeAction || activeStep < 0) return false;
    
    // Find active edge
    const activeEdge = edges[activeStep];
    if (!activeEdge) return false;
    
    // If nodeId matches the target of the active edge
    return activeEdge.to === nodeId;
  }

  return (
    <div className="cs-blueprint" aria-hidden="true">
      <svg viewBox="-20 0 540 300" className="sb-svg">
        <defs>
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--line)" />
          </marker>
          <marker
            id="arrow-accent"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* 1. Connection lines (Static Background) */}
        {edges.map((e, idx) => (
          <path
            key={`bg-${idx}`}
            d={e.d}
            className="sb-edge-bg"
            markerEnd={e.type === "blocked" ? "" : "url(#arrow)"}
          />
        ))}

        {/* 2. Flowing Data Particles (Dashed moving overlay) */}
        {edges.map((e, idx) => {
          let flowClass = "sb-flow-normal";
          if (e.type === "blocked") flowClass = "sb-flow-blocked";
          else if (e.type === "sync") flowClass = "sb-flow-sync";

          const isEdgeActive = activeAction && activeStep === idx;

          return (
            <path
              key={`flow-${idx}`}
              d={e.d}
              className={`sb-edge-flow ${flowClass}${isEdgeActive ? " is-active" : ""}`}
              markerEnd={e.type === "blocked" ? "" : "url(#arrow-accent)"}
            />
          );
        })}

        {/* 3. Node Cards */}
        {nodes.map((n) => {
          const width = 110;
          const height = 40;
          const rx = n.x - width / 2;
          const ry = n.y - height / 2;

          const isActive = isNodeActive(n.id);

          return (
            <g key={n.id} className={`sb-node sb-node-${n.type}${isActive ? " is-active" : ""}`}>
              {/* Card drop-shadow representation */}
              <rect
                x={rx + 2}
                y={ry + 2}
                width={width}
                height={height}
                rx={6}
                fill="none"
                stroke="transparent"
                className="sb-node-shadow"
              />
              
              {/* Card Container */}
              <rect
                x={rx}
                y={ry}
                width={width}
                height={height}
                rx={6}
                className="sb-node-box"
              />

              {/* Node Indicator / Icon Badge */}
              <text x={rx + 12} y={ry + 24} className="sb-node-icon">
                {getNodeIndicator(n.type)}
              </text>

              {/* Node Text Label */}
              <text x={rx + 28} y={ry + 24} className="sb-node-label">
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default SystemBlueprint;
