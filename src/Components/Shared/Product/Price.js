import React from "react";

import { Old, Price, Span } from "./Styles";

const Prices = ({ product }) => {
  console.log(product.salePrie);
  return (
    <Price>
      {product.salePrie ? (
        <>
          <Span> {product.salePrie} $</Span>
          <Old> {parseFloat(product.price.$numberDecimal).toFixed(2)} </Old>
        </>
      ) : (
        <Span>{parseFloat(product.price.$numberDecimal).toFixed(2)} $</Span>
      )}
    </Price>
  );
};

export default Prices;
