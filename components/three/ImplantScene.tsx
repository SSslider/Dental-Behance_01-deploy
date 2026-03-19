"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Center, Float, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Part({ 
  textureUrl, 
  position, 
  label 
}: { 
  textureUrl: string; 
  position: [number, number, number]; 
  label: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, textureUrl);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Gentle floating rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <planeGeometry args={[3, 3]} />
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} />
        </mesh>
      </Float>
      {/* Label */}
      {/* (In a real app, use Html from drei for labels, but skipping for simplicity/performance in this view) */}
    </group>
  );
}

export function ImplantScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Center>
        <group>
            {/* Crown */}
            <Part textureUrl="/images/implant-crown.png" position={[0, 2.5, 0]} label="כתר" />
            {/* Abutment */}
            <Part textureUrl="/images/implant-abutment.png" position={[0, 0, 0]} label="מבנה" />
            {/* Screw */}
            <Part textureUrl="/images/implant-screw.png" position={[0, -2.5, 0]} label="שתל" />
        </group>
      </Center>
      <Environment preset="studio" />
      <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
    </Canvas>
  );
}
