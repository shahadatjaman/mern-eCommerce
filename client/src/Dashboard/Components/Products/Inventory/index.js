import React from "react";
import { Cart, H5 } from "../../../Shared/Styles/";
import Input from "../../../../Components/Shared/Form/Input";
import Select from "../../../../Components/Shared/Form/Select/Select";
import Option from "../../../../Components/Shared/Form/Select/Option";
import { InputFields } from "./Styles";
import { Space } from "../Pricing/Styles";
import { useForm } from "../../../../hooks/useForm";
import useNumber from "../../../../hooks/useNumber";
import { useDispatch } from "react-redux";
import { addProductFormState } from "../../../feature/reducer/createProduct";
import { useEffect } from "react";
const initial = {
  status: "",
  sku: "",
  weight: "",
};

const Inventory = ({ getStatus, getSku, getWeight }) => {
  const { formState, handleChange, handleFocus, handleBlur, isValidForm } =
    useForm({ init: initial, validate: true });

  const { status, sku, weight } = formState;

  const dispatch = useDispatch();

  const validWeight = useNumber(weight.value);

  useEffect(() => {
    dispatch(
      addProductFormState({
        sku: sku.value,
        weight: weight.value,
      })
    );
  }, [dispatch, sku, weight, status]);

  useEffect(() => {
    getStatus(status.value);
  }, [status, getStatus]);

  useEffect(() => {
    getSku(sku.value);
  }, [getSku, sku]);

  useEffect(() => {
    getWeight(validWeight);
  }, [getWeight, validWeight]);

  return (
    <Cart>
      <H5>Inventory and shipping</H5>
      <InputFields>
        <Select
          width="33"
          label="Status"
          name={"status"}
          type="text"
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          value={status.value}
        >
          <Option value={"in stock"} option={"In Stock"} />
          <Option value={"out of stock"} option={"Out of stock"} />
        </Select>
        <Space width="2"></Space>
        <Input
          name="sku"
          width={"33"}
          label="SKU"
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
