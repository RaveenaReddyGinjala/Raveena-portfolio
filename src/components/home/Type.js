import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";

function Type() {
  const typeWriter = useSelector((state) => state?.myData?.writer);
  const typeArray = typeWriter && typeWriter.split(",");

  // const typeArray = ["raveena", "sai"];

  return (
    <Typewriter
      options={{
        strings: typeArray,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
