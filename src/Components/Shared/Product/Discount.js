import React from "react";
import { DiscountWrapper } from "./Styles";

const Discount = () => {
  return (
    <DiscountWrapper>
      <Discount>-0%</Discount>
    </DiscountWrapper>
  );
};

export default React.memo(Discount);
