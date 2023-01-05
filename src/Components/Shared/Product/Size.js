import React from "react";
import { MainSize, Size } from "./Styles";

const SizeVariation = ({ size, active }) => {
  return (
    <Size>
      <MainSize active={active}>{size}</MainSize>
    </Size>
  );
};

export default SizeVariation;
