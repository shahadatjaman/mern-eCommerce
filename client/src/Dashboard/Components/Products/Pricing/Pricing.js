import React from "react";
import Input from "../../../../Components/Shared/Form/Input";
import { useCheckbox } from "../../../../hooks/useCheckbox";
import PriceInput from "../../../Shared/Input/discount/PriceInput";
import { Switch } from "pretty-checkbox-react";
import { Cart, H5 } from "../../../Shared/Styles";

import { Button, OnsaleWrapper, SalePrices, Span } from "./Styles";

import { handleDiscount } from "../../../feature/reducer/productPricing";

import { useState } from "react";
import useNumber from "../../../../hooks/useNumber";

const Pricing = () => {
  const [discount, setDiscount] = useState(0);

  const { handleChange, isChecked } = useCheckbox();

  const { value } = useNumber(discount);
  console.log(value);

  const discountChange = (e) => {
    let value = e.target.value;
    setDiscount(value);
  };

  return (
    <Cart>
      <H5>Pricing</H5>
      <Input width="40" type="number" label="Price (BDT)" placeHolder="0" />

      <OnsaleWrapper>
        <Button>
          <Switch
            type="checkbox"
            onChange={handleChange}
            name="checkbox"
            value={isChecked}
          />

          <Span>On sale</Span>
        </Button>

        {isChecked && (
          <SalePrices>
            <PriceInput
              width="40"
              label={"Discount"}
              currency="true"
              parsent="true"
              handleChange={discountChange}
              value={discount}
              name="discount"
            />
            <Input
              width="40"
              type="number"
              label="Sale price"
              placeHolder="0"
            />
          </SalePrices>
        )}
      </OnsaleWrapper>
    </Cart>
  );
};

export default Pricing;
