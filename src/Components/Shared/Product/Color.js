import React from "react";
import { Color, MainColor } from "./Styles";

const ColorVariation = ({ bg, active }) => {
  return (
    <Color active={active}>
      <MainColor bg={bg}></MainColor>
    </Color>
  );
};

export default ColorVariation;
