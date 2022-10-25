import React from "react";
import { Cart, H5 } from "../../../Shared/Styles/";
import CreateProduct from "../CreateProduct/CreateProduct";

const ProductVariations = () => {
  return (
    <Cart>
      <H5>Add product variations</H5>
      <CreateProduct />
    </Cart>
  );
};

export default ProductVariations;
