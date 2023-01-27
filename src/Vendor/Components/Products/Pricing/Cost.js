import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../../Shared/Form/Input";
import useNumber from "../../../hooks/useNumber";
import { Prices } from "./Styles";

const Cost = () => {
  const [cost, setCost] = useState(0);
  const { price } = useSelector((state) => state.pricing);

  const validCost = useNumber(cost);

  const costChangeHandler = (e) => {
    const value = e.target.value;
    setCost(value);
  };

  return (
    <Prices>
      <Input
        width="32"
        type="number"
        label="Cost of goods"
        // disabled={true}
        name="saleprice"
        placeHolder="0"
        handleChange={costChangeHandler}
        value={validCost}
        currency={true}
      />
      <Input
        width="32"
        type="number"
        label="Profit"
        disabled={true}
        name="saleprice"
        placeHolder={price - validCost}
        currency={true}
      />
      <Input
        width="32"
        type="number"
        label="Margin"
        disabled={true}
        name="saleprice"
        placeHolder={price}
        parsent={true}
      />
    </Prices>
  );
};

export default Cost;
