import React from "react";
import Input from "../../../../Components/Shared/Form/Input";
import Option from "../../../../Components/Shared/Form/Select/Option";
import Select from "../../../../Components/Shared/Form/Select/Select";
import { Cart, H5 } from "../../../Shared/Styles";

const ProductOrga = () => {
  return (
    <Cart>
      <H5>Product Organizations</H5>
      <Select label="Product Category">
        <Option option={"Animals & Pet Supplies"} />
      </Select>
      <Input label="Product Type" placeHolder="e.g., T-Shirt" />
      <Input label="Tags" placeHolder="Find or create tags" />
    </Cart>
  );
};

export default ProductOrga;
