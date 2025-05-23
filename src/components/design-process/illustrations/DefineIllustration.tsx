
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cone } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedPencil = () => {
  const pencilRef = useRef<Mesh>(null);
  const tipRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (pencilRef.current) {
      pencilRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      pencilRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
    if (tipRef.current) {
      tipRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      tipRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  return (
    <group>
      {/* Pencil body */}
      <mesh ref={pencilRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 1.5]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Pencil tip */}
      <Cone ref={tipRef} args={[0.1, 0.3]} position={[0, 0.9, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Cone>
      
      {/* Eraser */}
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.2]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
      </mesh>
    </group>
  );
};

const DefineIllustration = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.8} />
      <AnimatedPencil />
    </Canvas>
  );
};

export default DefineIllustration;
