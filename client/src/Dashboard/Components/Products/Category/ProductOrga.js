import React from "react";
import Input from "../../../../Components/Shared/Form/Input";
import Option from "../../../../Components/Shared/Form/Select/Option";
import Select from "../../../../Components/Shared/Form/Select/Select";
import { Cart, H5 } from "../../../Shared/Styles";

const ProductOrga = () => {
  return (
    <Cart>
      <H5>Product Organizations</H5>
      <Select mb="1" label="Product Category">
        <Option option={"Furniture"} />
      </Select>
      <Input label="Product Type" placeHolder="e.g., T-Shirt" />
      <Input label="Tags" placeHolder="create tags" />
    </Cart>
  );
};

export default ProductOrga;
