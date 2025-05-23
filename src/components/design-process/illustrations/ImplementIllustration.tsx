
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cone, Sphere } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedRocket = () => {
  const rocketRef = useRef<Mesh>(null);
  const flameRef = useRef<Mesh>(null);
  const sparklesRef = useRef<Mesh[]>([]);
  
  useFrame((state) => {
    if (rocketRef.current) {
      rocketRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      rocketRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.05;
    }
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.3;
      flameRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 - 0.7;
    }
    
    sparklesRef.current.forEach((sparkle, index) => {
      if (sparkle) {
        sparkle.scale.setScalar(0.5 + Math.sin(state.clock.elapsedTime * 4 + index) * 0.3);
        sparkle.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 - 0.9 - index * 0.1;
      }
    });
  });

  return (
    <group>
      {/* Rocket body */}
      <mesh ref={rocketRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Rocket nose */}
      <Cone args={[0.15, 0.4]} position={[0, 0.7, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Cone>
      
      {/* Fins */}
      <mesh position={[0.2, -0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.1, 0.3, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-0.2, -0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.1, 0.3, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* Flame */}
      <Cone ref={flameRef} args={[0.12, 0.4]} position={[0, -0.7, 0]}>
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </Cone>
      
      {/* Sparkles */}
      {[...Array(3)].map((_, index) => (
        <Sphere
          key={index}
          ref={(el) => el && (sparklesRef.current[index] = el)}
          args={[0.03]}
          position={[
            (Math.random() - 0.5) * 0.3,
            -0.9 - index * 0.1,
            (Math.random() - 0.5) * 0.1
          ]}
        >
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={0.7}
          />
        </Sphere>
      ))}
    </group>
  );
};

const ImplementIllustration = () => {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1} />
      <AnimatedRocket />
    </Canvas>
  );
};

export default ImplementIllustration;
