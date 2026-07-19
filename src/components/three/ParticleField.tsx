"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { scroll } from "./scrollStore";
import { sceneConfig } from "./sceneConfig";

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  attribute float aScale;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vTw;
  void main() {
    vColor = aColor;
    vec3 p = position;
    p.x += sin(uTime * 0.20 + position.y * 0.4) * 0.18;
    p.y += cos(uTime * 0.16 + position.x * 0.4) * 0.18;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float tw = 0.55 + 0.45 * sin(uTime * 1.4 + aScale * 18.0);
    vTw = tw;
    gl_PointSize = uSize * aScale * tw * (300.0 / max(1.0, -mv.z));
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uTint;
  varying vec3 vColor;
  varying float vTw;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float a = smoothstep(0.5, 0.0, d);
    vec3 col = mix(vColor, uTint, 0.16);
    gl_FragColor = vec4(col, a * vTw * 0.9);
  }
`;

export default function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const { geometry, uniforms } = useMemo(() => {
    const count =
      typeof window !== "undefined" && window.innerWidth < 760 ? 2200 : 4200;
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const deep = new THREE.Color("#0e3b30");
    const teal = new THREE.Color("#3fb98f");
    const bright = new THREE.Color("#62e6b6");
    const gold = new THREE.Color("#ffcb3d");
    const golden = Math.PI * (1 + Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const inc = Math.acos(1 - 2 * t);
      const az = golden * i;
      const r = 9 * (0.75 + Math.random() * 0.35);
      positions[i * 3] = Math.sin(inc) * Math.cos(az) * r;
      positions[i * 3 + 1] = Math.cos(inc) * r;
      positions[i * 3 + 2] = Math.sin(inc) * Math.sin(az) * r;
      scales[i] = 0.4 + Math.random() * 1.4;
      const c = deep.clone().lerp(teal, Math.random());
      if (Math.random() > 0.86) c.copy(bright);
      if (Math.random() > 0.94) c.copy(gold);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    g.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

    const u = {
      uTime: { value: 0 },
      uSize: { value: 1.15 },
      uTint: { value: new THREE.Color("#62e6b6") },
    };
    return { geometry: g, uniforms: u };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mouse.current.x = e.clientX / window.innerWidth - 0.5;
      mouse.current.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    return () => geometry.dispose();
  }, [geometry]);

  useFrame((state, delta) => {
    const m = matRef.current;
    if (m) {
      m.uniforms.uTime.value += reduced ? 0 : Math.min(delta, 0.05);
      (m.uniforms.uTint.value as THREE.Color).lerp(
        new THREE.Color(sceneConfig.accent),
        0.05,
      );
    }
    const p = pointsRef.current;
    if (p) {
      const targetY =
        (reduced ? 0 : state.clock.elapsedTime * 0.03) +
        mouse.current.x * 0.3 +
        scroll.progress * 0.9;
      const targetX = -mouse.current.y * 0.2 + scroll.progress * 0.35;
      p.rotation.y += (targetY - p.rotation.y) * 0.05;
      p.rotation.x += (targetX - p.rotation.x) * 0.05;
    }
    camera.position.x += (mouse.current.x * 1.6 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.current.y * 1.2 - camera.position.y) * 0.04;
    camera.position.z += (13 + scroll.progress * 4 - camera.position.z) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
