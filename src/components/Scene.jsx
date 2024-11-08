import { Canvas } from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import Experience from './Experience'
import { AccumulativeShadows, ContactShadows, Environment, OrbitControls, RandomizedLight, Stage } from '@react-three/drei'

const Scene = ({hovered, setHoverred,color}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [pos, setPos] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(isMobile ? -0.5 : -1);
    setPos(isMobile ? -.5 : -1);
  }, [isMobile]);



  return (
    <Canvas flat camera={{position:[0,1.5,6.5], fov:35}} shadows>
        <color attach={"background"} args={["#FDFDFD"]} />
        <Experience hovered={hovered} setHoverred={setHoverred} pos={pos} color={color} />
        {/* <Stage adjustCamera={false} /> */}
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr"} environmentIntensity={1} />
        {/* <Environment preset='city' /> */}
        <ContactShadows scale={40} position-y={pos-.2} opacity={.5} blur={2} />
        <ContactShadows scale={10} position-y={pos} opacity={.8} blur={1.5} />
        {/* <AccumulativeShadows position={[0, pos, 0]} frames={50} alphaTest={.7} scale={15}>
          <RandomizedLight amount={9} radius={15} ambient={.8} position={[1, 5, -1]} />
        </AccumulativeShadows> */}
        
        <OrbitControls maxPolarAngle={Math.PI/2.3} minPolarAngle={Math.PI/3} />
    </Canvas>
  )
}

export default Scene