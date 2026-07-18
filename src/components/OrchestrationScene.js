import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

// A hub-and-spoke node network: one node (him) orchestrating several satellites.
// Four satellites carry each real project's brand color; pulses travel the
// spokes toward the hub — work flowing in, not just floating geometry.
const PROJECT_COLORS = ["#F59E0B", "#DB2777", "#0F6B3A", "#25D366"]; // outilsbelges, kelbail, yobantel, whatsapp bot
const GENERIC_COLORS = ["#0369A1", "#0369A1", "#0369A1"]; // governance / security / web
const HUB_COLOR = "#0D9488";

function Network() {
  const groupRef = useRef(null);
  const hubMatRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pulseRefs = useRef([]);

  const satellites = useMemo(() => {
    const colors = [...PROJECT_COLORS, ...GENERIC_COLORS];
    const count = colors.length;
    return colors.map((color, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 2.4;
      const position = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      const mid = position.clone().multiplyScalar(0.55);
      const offset = new THREE.Vector3(position.y, -position.x, position.z).normalize().multiplyScalar(0.5);
      const control = mid.add(offset);
      const curve = new THREE.QuadraticBezierCurve3(position, control, new THREE.Vector3(0, 0, 0));
      return { color, position, curve, points: curve.getPoints(24), phase: i / count };
    });
  }, []);

  useEffect(() => {
    function handlePointerMove(e) {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.1;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.25,
      0.03
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -mouse.current.x * 0.15,
      0.03
    );

    const t = state.clock.elapsedTime;
    let hubFlash = 0;

    satellites.forEach((sat, i) => {
      const speed = 0.35;
      const u = (t * speed + sat.phase) % 1; // 0 = at satellite, 1 = arriving at hub
      const p = sat.curve.getPoint(u);
      const pulse = pulseRefs.current[i];
      if (pulse) {
        pulse.position.copy(p);
        const fade = Math.sin(u * Math.PI); // fades in/out along the trip
        pulse.scale.setScalar(0.35 + fade * 0.4);
      }
      hubFlash += Math.exp(-Math.pow((u - 1) * 9, 2));
    });

    if (hubMatRef.current) {
      hubMatRef.current.emissiveIntensity = 1.6 + hubFlash * 2.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Hub */}
      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          ref={hubMatRef}
          color={HUB_COLOR}
          emissive={HUB_COLOR}
          emissiveIntensity={1.6}
          toneMapped={false}
        />
      </mesh>

      {satellites.map((sat, i) => (
        <group key={i}>
          <Line points={sat.points} color={sat.color} transparent opacity={0.4} lineWidth={1} />
          <mesh position={sat.position}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={1.3}
              toneMapped={false}
            />
          </mesh>
          <mesh ref={(el) => (pulseRefs.current[i] = el)}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={3}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function OrchestrationScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />
        <Network />
      </Canvas>
    </div>
  );
}

export default OrchestrationScene;
