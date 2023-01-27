import React, { useEffect } from "react";

import Input from "../../../Shared/Form/Input";
import { useCheckbox } from "../../../hooks/useCheckbox";
import { Switch } from "pretty-checkbox-react";
import { Cart, H5 } from "../../../Shared/Styles";

import { Button, Discount, OnsaleWrapper, Space, Span } from "./Styles";

import { useState } from "react";
import { percentageOfNumber } from "../../../utils/";

import { useDispatch, useSelector } from "react-redux";
import { addProductFormState } from "../../../feature/reducer/Product/createProduct";

const init = {
  checked: false,
  saleprice: 0,
};

// {
//   discount: productInit.optionalValue.discount,
//   checked: productInit.optionalValue.checked,
//   saleprice : productInit.op

const Pricing = ({
  handleChange: changePrice,
  value,
  handleFocus,
  handleBlur,
  setInventory,
}) => {
  const { productInit } = useSelector((state) => state.createproduct);

  const [values, setValues] = useState({
    ...init,
    discount: productInit.optionalValue.discount,
  });

  const dispatch = useDispatch();
  const { handleChange, isChecked } = useCheckbox();

  const changeHandler = (e) => {
    const value = e.target.value;

    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: value,
      };
    });
  };

  useEffect(() => {
    if (!isChecked && productInit.optionalValue.discount === 0) {
      setValues({ ...init });
    }
  }, [isChecked, productInit]);
  const discountedAmount = percentageOfNumber(
    value.value,
    values.saleprice,
    values.discount
  );

  useEffect(() => {
    setInventory((prev) => {
      return { ...prev, discount: values.discount };
    });
  }, [setInventory, values]);

  useEffect(() => {
    dispatch(addProductFormState({ discount: values.discount }));
  }, [values, dispatch]);

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
        value={value.value}
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
              placeHolder={"Discount (optional)"}
              handleChange={changeHandler}
              value={values.discount}
              name="discount"
              parsent="true"
            />
            <Space width="2"></Space>
            <Input
              width="32"
              type="number"
              label="Sale price"
              name="saleprice"
              handleChange={changeHandler}
              placeHolder="0"
              disabled={true}
              value={
                values.saleprice === 0
                  ? value.value - discountedAmount
                  : values.saleprice - discountedAmount
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
