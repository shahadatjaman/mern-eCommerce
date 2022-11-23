import React from "react";
import Cart from "./Cart";
import { data } from "./data";
import { Body, Bottom, Span } from "./Styles";

const Carts = () => {
  return (
    <>
      <Body>
        {data.map((cart, index) => (
          <Cart cart={cart} key={index} />
        ))}
      </Body>
      <Bottom>
        <Span>Go to cart</Span>
      </Bottom>
    </>
  );
};

export default Carts;
