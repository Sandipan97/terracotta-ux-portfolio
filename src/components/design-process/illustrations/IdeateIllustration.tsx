
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedLightbulb = () => {
  const bulbRef = useRef<Mesh>(null);
  const baseRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (bulbRef.current) {
      bulbRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
      bulbRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
    if (baseRef.current) {
      baseRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group>
      <Sphere ref={bulbRef} args={[0.6]} position={[0, 0.2, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
        />
      </Sphere>
      
      <mesh ref={baseRef} position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.4]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      <group position={[0, 0.2, 0]}>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.01, 0.01, 0.6]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <cylinderGeometry args={[0.01, 0.01, 0.6]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </group>
  );
};

const IdeateIllustration = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={1} />
      <AnimatedLightbulb />
    </Canvas>
  );
};

export default IdeateIllustration;
