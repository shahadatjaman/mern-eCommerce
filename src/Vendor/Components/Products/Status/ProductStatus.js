import React from "react";
import Option from "../../../../Components/Shared/Form/Select/Option";
import Select from "../../../../Components/Shared/Form/Select/Select";
import { Cart, H5 } from "../../../Shared/Styles";

const ProductStatus = () => {
  return (
    <Cart>
      <H5>Product status</H5>
      <Select>
        <Option option="Active" />
        <Option option="Draft" />
      </Select>
    </Cart>
  );
};

export default ProductStatus;
