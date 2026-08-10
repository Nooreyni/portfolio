import { useEffect, useRef } from "react";
import * as THREE from "three";

// Friendly Lazy Curious Panda Avatar (Three.js 60fps)
// Follows cursor with eyes & head tilt, happy, lazy, floating seamlessly without any frame/box
function HeroAvatar3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const width = container.offsetWidth || 480;
    const height = container.offsetHeight || 480;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Soft, warm, inviting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff8f0, 2.0);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const softFillLight = new THREE.DirectionalLight(0xe8f0ff, 1.2);
    softFillLight.position.set(-4, -2, 3);
    scene.add(softFillLight);

    // 3. Materials
    const whiteFurMat = new THREE.MeshStandardMaterial({
      color: 0xf5f4ee,
      roughness: 0.85,
      metalness: 0.05,
    });

    const darkFurMat = new THREE.MeshStandardMaterial({
      color: 0x181816,
      roughness: 0.75,
      metalness: 0.1,
    });

    const shinyEyeMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a09,
      roughness: 0.1,
      metalness: 0.9,
    });

    const eyeHighlightMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    });

    const pinkMouthMat = new THREE.MeshBasicMaterial({
      color: 0xe67385,
    });

    // 4. Panda Character Master Group
    const pandaGroup = new THREE.Group();
    scene.add(pandaGroup);

    // 4A. Lazy Panda Body & Paws
    const bodyGeo = new THREE.SphereGeometry(1.1, 32, 32);
    bodyGeo.scale(1.1, 1.0, 0.95);
    const body = new THREE.Mesh(bodyGeo, whiteFurMat);
    body.position.y = -1.35;
    pandaGroup.add(body);

    // Dark Shoulder Collar / Arms resting lazily
    const armGeo = new THREE.SphereGeometry(0.42, 24, 24);
    const leftArm = new THREE.Mesh(armGeo, darkFurMat);
    leftArm.position.set(-0.95, -1.0, 0.3);
    leftArm.scale.set(1.1, 0.8, 1.0);
    pandaGroup.add(leftArm);

    const rightArm = new THREE.Mesh(armGeo, darkFurMat);
    rightArm.position.set(0.95, -1.0, 0.3);
    rightArm.scale.set(1.1, 0.8, 1.0);
    pandaGroup.add(rightArm);

    // 4B. Head Group (Tilts towards cursor)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.1, 0);
    pandaGroup.add(headGroup);

    // Head Base
    const headGeo = new THREE.SphereGeometry(1.05, 48, 48);
    headGeo.scale(1.15, 0.98, 1.0);
    const head = new THREE.Mesh(headGeo, whiteFurMat);
    headGroup.add(head);

    // Ears
    const earGeo = new THREE.SphereGeometry(0.32, 24, 24);
    earGeo.scale(1.0, 1.1, 0.6);

    const leftEar = new THREE.Mesh(earGeo, darkFurMat);
    leftEar.position.set(-0.85, 0.82, -0.1);
    leftEar.rotation.z = -0.3;
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeo, darkFurMat);
    rightEar.position.set(0.85, 0.82, -0.1);
    rightEar.rotation.z = 0.3;
    headGroup.add(rightEar);

    // Panda Dark Eye Patches
    const patchGeo = new THREE.SphereGeometry(0.33, 24, 24);
    patchGeo.scale(1.1, 1.35, 0.4);

    const leftPatch = new THREE.Mesh(patchGeo, darkFurMat);
    leftPatch.position.set(-0.42, 0.08, 0.88);
    leftPatch.rotation.z = 0.35;
    leftPatch.rotation.y = -0.15;
    headGroup.add(leftPatch);

    const rightPatch = new THREE.Mesh(patchGeo, darkFurMat);
    rightPatch.position.set(0.42, 0.08, 0.88);
    rightPatch.rotation.z = -0.35;
    rightPatch.rotation.y = 0.15;
    headGroup.add(rightPatch);

    // Curious Eyes (Pupils that move inside patches)
    const eyesGroup = new THREE.Group();
    headGroup.add(eyesGroup);

    const pupilGeo = new THREE.SphereGeometry(0.12, 20, 20);

    const leftPupil = new THREE.Mesh(pupilGeo, shinyEyeMat);
    leftPupil.position.set(-0.42, 0.08, 1.02);
    eyesGroup.add(leftPupil);

    const leftHighlight = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), eyeHighlightMat);
    leftHighlight.position.set(-0.39, 0.12, 1.12);
    eyesGroup.add(leftHighlight);

    const rightPupil = new THREE.Mesh(pupilGeo, shinyEyeMat);
    rightPupil.position.set(0.42, 0.08, 1.02);
    eyesGroup.add(rightPupil);

    const rightHighlight = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 12), eyeHighlightMat);
    rightHighlight.position.set(0.45, 0.12, 1.12);
    eyesGroup.add(rightHighlight);

    // Snout / Nose
    const snoutGeo = new THREE.SphereGeometry(0.24, 24, 24);
    snoutGeo.scale(1.3, 0.85, 0.7);
    const snout = new THREE.Mesh(snoutGeo, whiteFurMat);
    snout.position.set(0, -0.22, 0.95);
    headGroup.add(snout);

    // Cute Nose
    const noseGeo = new THREE.SphereGeometry(0.1, 16, 16);
    noseGeo.scale(1.4, 0.8, 0.8);
    const nose = new THREE.Mesh(noseGeo, darkFurMat);
    nose.position.set(0, -0.16, 1.14);
    headGroup.add(nose);

    // Happy Mouth Curve
    const mouthGeo = new THREE.TorusGeometry(0.09, 0.02, 12, 20, Math.PI);
    const mouth = new THREE.Mesh(mouthGeo, darkFurMat);
    mouth.position.set(0, -0.28, 1.12);
    mouth.rotation.x = Math.PI;
    headGroup.add(mouth);

    // Little Happy Tongue
    const tongueGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const tongue = new THREE.Mesh(tongueGeo, pinkMouthMat);
    tongue.position.set(0, -0.3, 1.12);
    headGroup.add(tongue);

    // 5. Mouse Interaction & Animation Loop
    let mouse = { x: 0, y: 0 };
    let target = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      // Normalized screen coordinates: X is -1 (left) to +1 (right), Y is -1 (bottom) to +1 (top)
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
      target.x = x * 0.6;
      target.y = y * 0.45;
    };

    const handleMouseLeave = () => {
      // Reset gaze back to straight ahead when cursor leaves the window
      target.x = 0;
      target.y = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!container) return;
      const w = container.offsetWidth || 480;
      const h = container.offsetHeight || 480;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Render loop
    const clock = new THREE.Clock();
    let animId;

    // Max rotation angles (80 degrees max horizontally, 35 degrees vertically)
    const MAX_ROT_Y = Math.PI / 2.25; // ~80 degrees
    const MAX_ROT_X = Math.PI / 5;    // ~36 degrees

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tracking interpolation
      mouse.x += (target.x - mouse.x) * 0.08;
      mouse.y += (target.y - mouse.y) * 0.08;

      // Calculate clamped rotations (strictly capped at 80° max on sides)
      const rawRotY = mouse.x * 0.75;
      const clampedRotY = Math.max(-MAX_ROT_Y, Math.min(MAX_ROT_Y, rawRotY));

      const rawRotX = -mouse.y * 0.4;
      const clampedRotX = Math.max(-MAX_ROT_X, Math.min(MAX_ROT_X, rawRotX));

      // Head tilts curiously toward mouse within safe 80° bounds
      headGroup.rotation.y = clampedRotY + Math.sin(elapsedTime * 0.8) * 0.04;
      headGroup.rotation.x = clampedRotX + Math.cos(elapsedTime * 0.6) * 0.03;

      // Eyes follow mouse (clamped within eye patches)
      eyesGroup.position.x = Math.max(-0.16, Math.min(0.16, mouse.x * 0.12));
      eyesGroup.position.y = Math.max(-0.12, Math.min(0.12, mouse.y * 0.1));

      // Lazy body breathing & gentle floating levitation
      pandaGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
      body.scale.y = 1.0 + Math.sin(elapsedTime * 2.0) * 0.015;

      // Ear wiggles when mouse moves fast
      leftEar.rotation.z = -0.3 + Math.sin(elapsedTime * 2.5) * 0.03;
      rightEar.rotation.z = 0.3 - Math.sin(elapsedTime * 2.5) * 0.03;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-avatar-3d-seamless">
      <div ref={containerRef} className="three-avatar-canvas-wrapper" />
    </div>
  );
}

export default HeroAvatar3D;
