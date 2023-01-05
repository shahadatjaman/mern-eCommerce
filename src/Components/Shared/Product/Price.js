import React, { useEffect, useState } from "react";

import { getSalePrice } from "../../../utils";
import { Old, Price, Span } from "./Styles";

const Prices = ({ product, discount }) => {
  const [salePrice, setSalePrice] = useState(null);

  useEffect(() => {
    if (discount) {
      const res = getSalePrice({
        discount: discount.discount_percent.$numberDecimal,
        price: product.price.$numberDecimal,
      });

      setSalePrice(res);
    }
  }, [discount, product]);

  return (
    <Price>
      {salePrice ? (
        <>
          <Span> {salePrice.toFixed(2)} $</Span>
          <Old> {parseFloat(product.price.$numberDecimal).toFixed(2)} </Old>
        </>
      ) : (
        <Span>{parseFloat(product.price.$numberDecimal).toFixed(2)} $</Span>
      )}
    </Price>
  );
};

export default Prices;
