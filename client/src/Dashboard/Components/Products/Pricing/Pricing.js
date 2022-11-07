import React, { useEffect } from "react";
import Input from "../../../../Components/Shared/Form/Input";
import { useCheckbox } from "../../../../hooks/useCheckbox";
import PriceInput from "../../../Shared/Input/discount/PriceInput";
import { Switch } from "pretty-checkbox-react";
import { Cart, H5 } from "../../../Shared/Styles";

import { Button, OnsaleWrapper, SalePrices, Span } from "./Styles";

import { useState } from "react";
import useNumber from "../../../../hooks/useNumber";

const Pricing = () => {
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);

  const { handleChange, isChecked } = useCheckbox();

  const validDiscount = useNumber(discount);
  const validPrice = useNumber(price);
  const validSalePrice = useNumber(salePrice);

  const discountChange = (e) => {
    let value = e.target.value;
    setDiscount(value);
  };

  const priceChange = (e) => {
    let value = e.target.value;
    setPrice(value);
  };

  const salePriceChange = (e) => {
    let value = e.target.value;
    setSalePrice(value);
  };

  useEffect(() => {
    if (!isChecked) {
      setDiscount(0);
      setSalePrice(0);
    }
  }, [isChecked]);

  return (
    <Cart>
      <H5>Pricing</H5>
      <Input
        handleChange={priceChange}
        name="price"
        width="40"
        type="number"
        label="Price (BDT)"
        placeHolder="0"
        value={validPrice}
        currency={true}
      />

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
              parsent="true"
              handleChange={discountChange}
              value={validDiscount}
              name="discount"
            />
            <Input
              width="40"
              type="number"
              label="Sale price"
              name="saleprice"
              handleChange={salePriceChange}
              placeHolder="0"
              value={salePrice === 0 ? price - validDiscount : validSalePrice}
              currency={true}
            />
          </SalePrices>
        )}
      </OnsaleWrapper>
    </Cart>
  );
};

export default Pricing;
