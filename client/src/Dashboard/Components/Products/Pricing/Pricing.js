import React from "react";
import Input from "../../../../Components/Shared/Form/Input";
import { useCheckbox } from "../../../../hooks/useCheckbox";
import PriceInput from "../../../Shared/Input/discount/PriceInput";
import Radio from "../../../Shared/Input/Radio";
import { Cart, H5 } from "../../../Shared/Styles";
import { CheckBox } from "../Styles";
import { Button, OnsaleWrapper, SalePrices, Span } from "./Styles";

const Pricing = () => {
  const { handleChange, isChecked } = useCheckbox();

  return (
    <Cart>
      <H5>Pricing</H5>
      <Input width="40" type="number" label="Price (BDT)" placeHolder="0" />

      <OnsaleWrapper>
        <Button>
          <CheckBox
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
              name={"Discount"}
              currency="true"
              parsent="true"
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
