import React from "react";
import { P, ToolpitWrape } from "./Styles";

const Toolpit = ({ text, position }) => {
  return (
    <ToolpitWrape position={position}>
      <P>{text}</P>
    </ToolpitWrape>
  );
};

export default Toolpit;
