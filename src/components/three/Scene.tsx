"use client";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import ParticleField from "./ParticleField";

export default function Scene() {
  return (
    <Canvas
      className="scene-fixed"
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 13], fov: 62 }}
      frameloop="always"
      onCreated={({ gl }) => gl.setClearColor(new THREE.Color("#060a09"), 0)}
    >
      <fogExp2 attach="fog" args={["#060a09", 0.055]} />
      <ParticleField />
    </Canvas>
  );
}
