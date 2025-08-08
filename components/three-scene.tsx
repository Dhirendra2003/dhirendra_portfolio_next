"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import * as THREE from "three"

function Knot() {
const mesh = useRef<THREE.Mesh>(null)

useFrame((state) => {
  if (!mesh.current) return
  const t = state.clock.getElapsedTime()
  mesh.current.rotation.x = t * 0.25
  mesh.current.rotation.y = t * 0.35
})

return (
  <Float speed={1.0} rotationIntensity={0.5} floatIntensity={1.2}>
    <mesh ref={mesh}>
      {/* radius, tube, tubularSegments, radialSegments, p, q */}
      <torusKnotGeometry args={[1.1, 0.34, 80, 8, 2, 3]} />
      {/* Wireframe in white, not affected by lights */}
      <meshBasicMaterial color={"#ff007b"} wireframe transparent opacity={0.95} />
    </mesh>
  </Float>
)
}

export function ThreeScene() {
return (
  <div className="w-full h-full vignette ">
    <Canvas camera={{ position: [0, 0, 0], fov: 50 }}>
      <color attach="background" args={["#000"]} />
      {/* Lights kept for potential future non-basic materials (safe to keep) */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 3, 2]} intensity={1.1} />
      <Knot />
      <Environment preset="city" />
    </Canvas>
  </div>
)
}

ThreeScene.defaultProps = {}
