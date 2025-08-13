/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Text3D } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import ContactBoy from "../models/Portfolio";
const ContactExperience = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1c34ff"} />
      <group>
        <Text3D
          font={"/fonts/Inter_Bold.json"}
          position={[-3, -3, -2]}
          size={1.5}
          height={0.5}
          curveSegments={32}
          letterSpacing={-0.06}
          bevelSize={0.06}
          bevelThickness={0.1}
          bevelEnabled
        >
          {`Hello`}
          <meshStandardMaterial />
        </Text3D>
        <ContactBoy scale={2.5} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};
export default ContactExperience;
