import { useEffect, useRef } from "react";

// Interactive Organic Kinetic Constellation Canvas
// Ultra-smooth 60fps dynamic network with interactive spring physics, energy pulses & HUD overlays
function NodeNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || 600);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || 600;
      height = canvas.height = canvas.parentElement.offsetHeight || 600;
    };
    window.addEventListener("resize", handleResize);

    // Network Hub Nodes
    const nodeCount = 22;
    const nodes = [];
    const labels = ["CLOUD.CORE", "AI.AGENT", "AUTOMATION", "SECURITY", "DATA.FLOW", "IDENTITY", "N8N.WORKFLOW", "AZURE", "LLM.MODEL", "REST.API"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 2,
        label: i < labels.length ? labels[i] : null,
        isHub: i < 5,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Energy pulses traveling along connections
    const pulses = [];
    for (let i = 0; i < 6; i++) {
      pulses.push({
        from: Math.floor(Math.random() * nodeCount),
        to: Math.floor(Math.random() * nodeCount),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.008
      });
    }

    // Mouse position tracking with physics radius
    let mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Update positions & handle boundaries
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        if (node.x < 40 || node.x > width - 40) node.vx *= -1;
        if (node.y < 40 || node.y > height - 40) node.vy *= -1;

        // Mouse repulsion & spring reaction
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            node.x -= (dx / dist) * force * 2;
            node.y -= (dy / dist) * force * 2;
          }
        }
      });

      // 2. Draw Connection Lines
      const maxDistance = 160;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            
            // Curved connection for organic feel
            const midX = (n1.x + n2.x) / 2 + Math.sin(time + i) * 8;
            const midY = (n1.y + n2.y) / 2 + Math.cos(time + j) * 8;
            ctx.quadraticCurveTo(midX, midY, n2.x, n2.y);

            const isHubConn = n1.isHub || n2.isHub;
            ctx.strokeStyle = isHubConn 
              ? `rgba(0, 51, 255, ${alpha})` // Cobalt Blue accent
              : `rgba(17, 17, 17, ${alpha * 0.7})`; // Ink line

            ctx.lineWidth = isHubConn ? 1.2 : 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Draw Traveling Energy Pulses
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          p.from = Math.floor(Math.random() * nodeCount);
          p.to = Math.floor(Math.random() * nodeCount);
        }
        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        const px = n1.x + (n2.x - n1.x) * p.progress;
        const py = n1.y + (n2.y - n1.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#0033FF";
        ctx.shadowColor = "#0033FF";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // 4. Draw Nodes & HUD Labels
      nodes.forEach((node) => {
        const pSize = Math.sin(node.pulse) * 0.8 + node.radius;

        // Node Outer Glow Ring for Hubs
        if (node.isHub) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, pSize * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 51, 255, 0.08)";
          ctx.fill();
        }

        // Inner Solid Node
        ctx.beginPath();
        ctx.arc(node.x, node.y, pSize, 0, Math.PI * 2);
        ctx.fillStyle = node.isHub ? "#0033FF" : "#111111";
        ctx.fill();

        // Technical HUD Callout Label
        if (node.label) {
          ctx.font = "10px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = node.isHub ? "#0033FF" : "rgba(17, 17, 17, 0.7)";
          ctx.fillText(node.label, node.x + 10, node.y + 3);

          // Tiny hairline anchor dot
          ctx.beginPath();
          ctx.arc(node.x + 6, node.y, 1, 0, Math.PI * 2);
          ctx.fillStyle = "#0033FF";
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="node-network-3d" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default NodeNetwork;
