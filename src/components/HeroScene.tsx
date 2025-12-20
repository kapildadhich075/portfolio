import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

function CameraModel() {
    const groupRef = useRef<THREE.Group>(null!);

    // Mouse movement interaction
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 2;
            const y = -(clientY / window.innerHeight - 0.5) * 2;

            gsap.to(groupRef.current.rotation, {
                x: y * 0.3,
                y: x * 0.4,
                duration: 2,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Gentle idle floating
        groupRef.current.position.y = Math.sin(time) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group ref={groupRef}>
                {/* Camera Body */}
                <RoundedBox args={[2, 1.2, 0.8]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
                </RoundedBox>

                {/* Lens Base */}
                <mesh position={[0, 0, 0.5]}>
                    <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
                    <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
                </mesh>

                {/* Lens Glass */}
                <mesh position={[0, 0, 0.7]} rotation={[Math.PI / 2, 0, 0]}>
                    <sphereGeometry args={[0.35, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0} transparent opacity={0.6} emissive="#D4AF37" emissiveIntensity={0.5} />
                </mesh>

                {/* Top Dial/Button */}
                <mesh position={[0.6, 0.65, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
                    <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
                </mesh>

                {/* Viewfinder Accent */}
                <mesh position={[-0.5, 0.65, 0]}>
                    <boxGeometry args={[0.4, 0.2, 0.3]} />
                    <meshStandardMaterial color="#111" />
                </mesh>
            </group>
        </Float>
    );
}

export function HeroScene() {
    return (
        <div className="w-full h-full">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <ambientLight intensity={0.7} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={2} color="#D4AF37" />

                <CameraModel />
            </Canvas>
        </div>
    );
}
