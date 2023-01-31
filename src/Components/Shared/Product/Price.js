import React from "react";

import { Old, Price, Span } from "./Styles";

const Prices = ({ product, salePrie }) => {
  return (
    <Price>
      {salePrie ? (
        <>
          <Span> {salePrie.toFixed(2)} $</Span>
          <Old> {parseFloat(product.price.$numberDecimal).toFixed(2)} </Old>
        </>
      ) : (
        <Span>{parseFloat(product.price.$numberDecimal).toFixed(2)} $</Span>
      )}
    </Price>
  );
};

export default Prices;
