import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const FloatingSphere = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 2]} intensity={0.7} />
        <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.8}>
          <Sphere args={[1.3, 64, 64]} position={[1.5, -0.2, 0]}>
            <MeshDistortMaterial color="#7abfff" distort={0.35} speed={1.4} roughness={0.2} />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};

export default FloatingSphere;
