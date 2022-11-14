import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../../Components/Shared/Form/Input";
import { useCheckbox } from "../../../../hooks/useCheckbox";
import { Switch } from "pretty-checkbox-react";
import { Cart, H5 } from "../../../Shared/Styles";

import { Button, Discount, OnsaleWrapper, Space, Span } from "./Styles";

import { useState } from "react";
import Cost from "./Cost";
import { percentageOfNumber } from "../../../../utils/index";
import useNumber from "../../../../hooks/useNumber";

const Pricing = ({
  handleChange: changePrice,
  value,
  handleFocus,
  handleBlur,
  getDiscount,
}) => {
  const [discount, setDiscount] = useState(0);

  const [salePrice, setSalePrice] = useState(0);

  const validDiscount = useNumber(discount);
  const validPrice = useNumber(value.value);

  const { handleChange, isChecked } = useCheckbox();

  const discountChange = (e) => {
    let value = e.target.value;
    setDiscount(value);
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
  const discountedAmount = percentageOfNumber(value.value, salePrice, discount);

  useEffect(() => {
    getDiscount(validDiscount);
  }, [validDiscount, getDiscount]);

  return (
    <Cart>
      <H5>Pricing</H5>
      <Input
        handleChange={changePrice}
        width="32"
        type="number"
        label="Price (BDT)"
        placeHolder="0"
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        value={validPrice}
        name="price"
        currency={true}
        error={value.error}
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
          <Discount>
            <Input
              width="32"
              type="number"
              label={"Discount"}
              handleChange={discountChange}
              value={validDiscount}
              name="discount"
              parsent="true"
            />
            <Space width="2"></Space>
            <Input
              width="32"
              type="number"
              label="Sale price"
              name="saleprice"
              handleChange={salePriceChange}
              placeHolder="0"
              disabled={true}
              value={
                salePrice === 0
                  ? value.value - discountedAmount
                  : salePrice - discountedAmount
              }
              currency={true}
            />
          </Discount>
        )}
      </OnsaleWrapper>
      {/* <CostWrapper>
        <Cost />
      </CostWrapper> */}
    </Cart>
  );
};

export default Pricing;
