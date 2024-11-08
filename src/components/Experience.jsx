import React, { useEffect, useState } from "react";
import { Model } from "./Model";
import { Model1 } from "./Model1";
import { Billboard, Html, Text } from "@react-three/drei";

const Experience = ({ hovered, setHoverred,pos,color }) => {
  

  return (
    <>
      <group>
        <Model
          position-y={pos}
          rotation-y={-Math.PI / 2}
          hovered={hovered}
          setHoverred={setHoverred}
          pos = {pos}
          color = {color}
        />
      </group>
      {/* <Model1 position-y={-1} /> */}
    </>
  );
};

export default Experience;
