import React from "react";
import { Wrapper } from "./Styles";

const ShoppingCart = ({ children, width, height }) => {
  return (
    <Wrapper width={width} height={height}>
      {children}
    </Wrapper>
  );
};

export default ShoppingCart;
