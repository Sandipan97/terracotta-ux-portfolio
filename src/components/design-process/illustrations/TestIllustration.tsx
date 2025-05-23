
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, RoundedBox } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedChecklist = () => {
  const boardRef = useRef<Mesh>(null);
  const checkmarksRef = useRef<Mesh[]>([]);
  
  useFrame((state) => {
    if (boardRef.current) {
      boardRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    checkmarksRef.current.forEach((checkmark, index) => {
      if (checkmark) {
        checkmark.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3 + index * 0.5) * 0.1);
      }
    });
  });

  return (
    <group>
      <RoundedBox ref={boardRef} args={[0.8, 1.2, 0.05]} radius={0.05} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </RoundedBox>
      
      <Box args={[0.2, 0.1, 0.03]} position={[0, 0.55, 0.03]}>
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
      </Box>
      
      <group position={[0, 0, 0.03]}>
        <Box args={[0.4, 0.02, 0.01]} position={[0.1, 0.3, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
        </Box>
        <Box args={[0.35, 0.02, 0.01]} position={[0.08, 0.1, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
        </Box>
        <Box args={[0.4, 0.02, 0.01]} position={[0.1, -0.1, 0]}>
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.1} />
        </Box>
        
        <mesh 
          ref={(el) => el && (checkmarksRef.current[0] = el)}
          position={[-0.2, 0.3, 0]} 
          rotation={[0, 0, Math.PI / 4]}
        >
          <boxGeometry args={[0.15, 0.02, 0.01]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
        <mesh 
          ref={(el) => el && (checkmarksRef.current[1] = el)}
          position={[-0.15, 0.25, 0]} 
          rotation={[0, 0, -Math.PI / 4]}
        >
          <boxGeometry args={[0.08, 0.02, 0.01]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
        </mesh>
      </group>
    </group>
  );
};

const TestIllustration = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.8} />
      <AnimatedChecklist />
    </Canvas>
  );
};

export default TestIllustration;
