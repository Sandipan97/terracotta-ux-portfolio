
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedMagnifyingGlass = () => {
  const glassRef = useRef<Mesh>(null);
  const handleRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (glassRef.current) {
      glassRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
    if (handleRef.current) {
      handleRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      <Torus
        ref={glassRef}
        args={[0.8, 0.1, 16, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </Torus>
      
      <mesh ref={handleRef} position={[0.7, -0.7, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.6]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      <Sphere args={[0.15]} position={[0, 0, 0.1]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
      </Sphere>
    </group>
  );
};

const ResearchIllustration = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.8} />
      <AnimatedMagnifyingGlass />
    </Canvas>
  );
};

export default ResearchIllustration;
