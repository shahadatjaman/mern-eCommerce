import React from "react";
import Input from "../../../../Components/Shared/Form/Input";
import PriceInput from "../../../Shared/Input/discount/PriceInput";
import { Prices } from "./Styles";

const Cost = () => {
  return (
    <Prices>
      <Input
        width="32"
        type="number"
        label="Cost of goods"
        // disabled={true}
        name="saleprice"
        placeHolder="0"
        currency={true}
      />
      <Input
        width="32"
        type="number"
        label="Profit"
        disabled={true}
        name="saleprice"
        placeHolder="0"
        currency={true}
      />
      <Input
        width="32"
        type="number"
        label="Margin"
        disabled={true}
        name="saleprice"
        placeHolder="0"
        currency={true}
      />
    </Prices>
  );
};

export default Cost;
