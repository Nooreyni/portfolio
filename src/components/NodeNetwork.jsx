import { useState, useEffect } from "react";

const TARGET_NODES = [
  { x: 120, y: 140, r: 4 }, { x: 300, y: 90, r: 3 }, { x: 480, y: 180, r: 5 }, { x: 620, y: 100, r: 3 },
  { x: 200, y: 300, r: 3 }, { x: 420, y: 340, r: 4 }, { x: 600, y: 280, r: 3 }, { x: 700, y: 400, r: 4 },
  { x: 150, y: 480, r: 3 }, { x: 340, y: 520, r: 5 }, { x: 520, y: 500, r: 3 }, { x: 660, y: 560, r: 3 },
  { x: 250, y: 640, r: 4 }, { x: 460, y: 680, r: 3 }, { x: 600, y: 700, r: 4 }, { x: 100, y: 600, r: 3 },
];

const CHAOS_OFFSETS = [
  { dx: -65, dy: 85 }, { dx: 95, dy: -45 }, { dx: -80, dy: 90 }, { dx: 60, dy: -95 },
  { dx: 110, dy: -70 }, { dx: -85, dy: 60 }, { dx: 75, dy: 110 }, { dx: -95, dy: -75 },
  { dx: -75, dy: -55 }, { dx: 85, dy: 70 }, { dx: -60, dy: -85 }, { dx: 100, dy: 45 },
  { dx: 70, dy: -80 }, { dx: -110, dy: 55 }, { dx: 85, dy: -70 }, { dx: -50, dy: 95 },
];

const EDGE_PAIRS = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7],
  [4, 8], [5, 9], [6, 10], [7, 11], [8, 9], [9, 10], [10, 11], [8, 12], [9, 13], [10, 14], [11, 15], [12, 13], [13, 14], [14, 15],
];

function NodeNetwork({ parallax = 0 }) {
  const [scrollFactor, setScrollFactor] = useState(0);

  useEffect(() => {
    let animationFrameId = null;
    function handleScroll() {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          // Progress goes from 0 (at top) to 1 (when scrolled 400px down)
          const scrollY = window.scrollY;
          const factor = Math.min(1, Math.max(0, scrollY / 400));
          setScrollFactor(factor);
          animationFrameId = null;
        });
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Compute interpolated node positions based on scrollFactor (0 = chaos, 1 = order)
  const currentNodes = TARGET_NODES.map((node, i) => {
    const chaos = CHAOS_OFFSETS[i];
    const unalignment = 1 - scrollFactor;
    return {
      ...node,
      x: node.x + chaos.dx * unalignment,
      y: node.y + chaos.dy * unalignment,
      color: i % 4 === 0 ? "var(--accent)" : "var(--node-inactive)",
      dur: 8 + (i % 5),
      delay: (i * 0.3) % 4,
    };
  });

  const currentEdges = EDGE_PAIRS.map((pair, i) => {
    const a = currentNodes[pair[0]];
    const b = currentNodes[pair[1]];
    return {
      x1: a.x, y1: a.y, x2: b.x, y2: b.y,
      dur: 12 + (i % 6),
      delay: (i * 0.4) % 5
    };
  });

  return (
    <div className="node-network" aria-hidden="true">
      <svg viewBox="0 0 800 800" style={{ transform: `translateY(${parallax}px)` }}>
        <g className="node-network-sway">
          {currentEdges.map((e, i) => (
            <line
              key={i}
              x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
              className="node-network-edge"
              style={{ animationDuration: `${e.dur}s`, animationDelay: `${e.delay}s` }}
            />
          ))}
          {currentNodes.map((n, i) => (
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
