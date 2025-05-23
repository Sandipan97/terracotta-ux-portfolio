
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedEnhancedMagnifyingGlass = () => {
  const glassRef = useRef<Mesh>(null);
  const plusRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (glassRef.current) {
      glassRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.15;
    }
    if (plusRef.current) {
      plusRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      plusRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <group>
      <Torus
        ref={glassRef}
        args={[0.7, 0.08, 16, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </Torus>
      
      <mesh position={[0.6, -0.6, 0]} rotation={[0, 0, Math.PI / 4]}>
        <cylinderGeometry args={[0.04, 0.04, 0.5]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      <group ref={plusRef} position={[0, 0, 0.1]}>
        <Box args={[0.3, 0.05, 0.05]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </Box>
        <Box args={[0.05, 0.3, 0.05]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </Box>
      </group>
    </group>
  );
};

const MoreResearchIllustration = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.8} />
      <AnimatedEnhancedMagnifyingGlass />
    </Canvas>
  );
};

export default MoreResearchIllustration;
