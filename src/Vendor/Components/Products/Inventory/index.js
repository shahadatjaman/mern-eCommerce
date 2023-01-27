import React from "react";
import { Cart, H5 } from "../../../Shared/Styles/";
import Input from "../../../Shared/Form/Input";
import Select from "../../../Shared/Form/Select/Select";
import Option from "../../../Shared/Form/Select/Option";
import { InputFields } from "./Styles";
import { Space } from "../Pricing/Styles";
import { useForm } from "../../../hooks/useForm";
import useNumber from "../../../hooks/useNumber";
import { useDispatch, useSelector } from "react-redux";
import { addProductFormState } from "../../../feature/reducer/Product/createProduct";
import { useEffect } from "react";

const Inventory = ({ setInventory }) => {
  const { productInit } = useSelector((state) => state.createproduct);

  const { formState, handleChange, handleFocus, handleBlur } = useForm({
    init: productInit.optionalValue,
    validate: true,
  });

  const { isStock, sku, weight } = formState;

  const dispatch = useDispatch();

  const validWeight = useNumber(weight.value);

  useEffect(() => {
    dispatch(
      addProductFormState({
        isStock: isStock.value,
        sku: sku.value,
        weight: weight.value,
      })
    );
  }, [dispatch, sku, weight, isStock]);

  useEffect(() => {
    // getStatus(status.value);
    setInventory((prev) => {
      return {
        ...prev,
        isStock: isStock.value,
        sku: sku.value,
        weigth: validWeight * 1,
      };
    });
  }, [isStock, setInventory, sku, validWeight]);

  return (
    <Cart>
      <H5>Inventory and shipping</H5>
      <InputFields>
        <Select
          width="33"
          label="Status"
          name={"isStock"}
          type="text"
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={isStock.value}
        >
          <Option value={"In stock"} option={"In Stock"} />
          <Option value={"Out of stock"} option={"Out of stock"} />
        </Select>
        <Space width="2"></Space>
        <Input
          name="sku"
          width={"33"}
          label="SKU"
          placeHolder={"SKU (optional)"}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={sku.value}
        />
        <Space width="2"></Space>
        <Input
          width={"33"}
          name="weight"
          label="Shipping weight"
          placeHolder={"Weight (optional)"}
          type="number"
          weight="true"
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={validWeight}
        />
      </InputFields>
    </Cart>
  );
};

export default Inventory;
