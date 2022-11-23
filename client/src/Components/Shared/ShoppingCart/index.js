import React from "react";
import { Body, Bottom, Span, Wrapper } from "./Styles";

const ShoppingCart = ({ children, width, height }) => {
  return (
    <Wrapper width={width} height={height}>
      {children}
    </Wrapper>
  );
};

export default ShoppingCart;
