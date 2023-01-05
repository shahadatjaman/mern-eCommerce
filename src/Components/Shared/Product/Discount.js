import React from "react";
import { DiscountWrapper } from "./Styles";

const Discount = () => {
  console.log("Product discount rendered");
  return (
    <DiscountWrapper>
      <Discount>-0%</Discount>
    </DiscountWrapper>
  );
};

export default React.memo(Discount);
