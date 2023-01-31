import React from "react";
import { Wrapper } from "./Styles";
import { H5 } from "../Styles";
import RangeSlider from "./Rang";
const Price = (props) => {
  return (
    <Wrapper>
      <H5>Price</H5>
      <RangeSlider {...props} />
    </Wrapper>
  );
};

export default Price;
