import { useMemo } from "react";

const NODES = [
  { x: 120, y: 140, r: 4 }, { x: 300, y: 90, r: 3 }, { x: 480, y: 180, r: 5 }, { x: 620, y: 100, r: 3 },
  { x: 200, y: 300, r: 3 }, { x: 420, y: 340, r: 4 }, { x: 600, y: 280, r: 3 }, { x: 700, y: 400, r: 4 },
  { x: 150, y: 480, r: 3 }, { x: 340, y: 520, r: 5 }, { x: 520, y: 500, r: 3 }, { x: 660, y: 560, r: 3 },
  { x: 250, y: 640, r: 4 }, { x: 460, y: 680, r: 3 }, { x: 600, y: 700, r: 4 }, { x: 100, y: 600, r: 3 },
];

const EDGE_PAIRS = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7],
  [4, 8], [5, 9], [6, 10], [7, 11], [8, 9], [9, 10], [10, 11], [8, 12], [9, 13], [10, 14], [11, 15], [12, 13], [13, 14], [14, 15],
];

// A quiet architecture diagram, not a hacking graphic: nodes breathe, edges
// drift in and out — a system idling, not "live data."
function NodeNetwork({ parallax = 0 }) {
  const { nodes, edges } = useMemo(() => {
    const n = NODES.map((node, i) => ({
      ...node,
      color: i % 4 === 0 ? "var(--accent)" : "rgba(20, 20, 18, 0.6)",
      dur: 5 + (i % 5),
      delay: (i * 0.3) % 4,
    }));
    const e = EDGE_PAIRS.map((pair, i) => {
      const a = NODES[pair[0]];
      const b = NODES[pair[1]];
      return { x1: a.x, y1: a.y, x2: b.x, y2: b.y, dur: 6 + (i % 4), delay: (i * 0.4) % 5 };
    });
    return { nodes: n, edges: e };
  }, []);

  return (
    <div className="node-network" aria-hidden="true">
      <svg viewBox="0 0 800 800" style={{ transform: `translateY(${parallax}px)` }}>
        <g className="node-network-sway">
          {edges.map((e, i) => (
            <line
              key={i}
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              className="node-network-edge"
              style={{ animationDuration: `${e.dur}s`, animationDelay: `${e.delay}s` }}
            />
          ))}
          {nodes.map((n, i) => (
            <circle
              key={i}
              cx={n.x} cy={n.y} r={n.r}
              fill={n.color}
              className="node-network-dot"
              style={{ animationDuration: `${n.dur}s`, animationDelay: `${n.delay}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default NodeNetwork;
