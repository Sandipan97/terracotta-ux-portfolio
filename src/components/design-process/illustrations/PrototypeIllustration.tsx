
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, RoundedBox } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedScreen = () => {
  const screenRef = useRef<Mesh>(null);
  const standRef = useRef<Mesh>(null);
  const elementsRef = useRef<Mesh[]>([]);
  
  useFrame((state) => {
    if (screenRef.current) {
      screenRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (standRef.current) {
      standRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    elementsRef.current.forEach((element, index) => {
      if (element) {
        element.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
      }
    });
  });

  return (
    <group>
      {/* Screen */}
      <RoundedBox ref={screenRef} args={[1.2, 0.8, 0.05]} radius={0.05} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </RoundedBox>
      
      {/* Screen content - wireframe elements */}
      <group position={[0, 0.2, 0.03]}>
        <Box 
          ref={(el) => el && (elementsRef.current[0] = el)}
          args={[0.4, 0.1, 0.01]} 
          position={[-0.2, 0.2, 0]}
        >
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
        </Box>
        <Box 
          ref={(el) => el && (elementsRef.current[1] = el)}
          args={[0.6, 0.08, 0.01]} 
          position={[0.1, 0, 0]}
        >
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
        </Box>
        <Box 
          ref={(el) => el && (elementsRef.current[2] = el)}
          args={[0.3, 0.06, 0.01]} 
          position={[-0.3, -0.2, 0]}
        >
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
        </Box>
      </group>
      
      {/* Stand */}
      <mesh ref={standRef} position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.3]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

const PrototypeIllustration = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.8} />
      <AnimatedScreen />
    </Canvas>
  );
};

export default PrototypeIllustration;
