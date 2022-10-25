import React from "react";
import Input from "../../../../Components/Shared/Form/Input";
import { Cart, H5 } from "../../../Shared/Styles/";

const Pricing = () => {
  return (
    <Cart>
      <H5>Pricing</H5>
      <Input label="Price (BDT)" placeHolder="0.00" />
      <Input label="Compare at price (BDT)" placeHolder="0.00" />
    </Cart>
  );
};

export default Pricing;
