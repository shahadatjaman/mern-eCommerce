import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Empty from "./Empty";
import {
  Body,
  Bottom,
  CheckOut,
  CheckOutLink,
  Span,
  SubTotal,
  TotalPrice,
  TotalWrapper,
  ViewCart,
} from "./Styles";

import { useAddToCart } from "../../../hooks/useAddToCart";

const Carts = () => {
  const { carts } = useSelector((state) => state.cart);

  const { totallPrice } = useAddToCart();

  return (
    <>
      <Body>
        {carts && carts.length === 0 && <Empty />}
        {carts.map((cart, index) => (
          <Cart cart={cart} key={index} />
        ))}
      </Body>
      {carts && carts.length !== 0 && (
        <Bottom>
          <TotalWrapper>
            <SubTotal>Total :</SubTotal>

            <TotalPrice>{parseFloat(totallPrice()).toFixed(2)} $</TotalPrice>
          </TotalWrapper>
          <ViewCart to="/cartitems">View Cart</ViewCart>

          <CheckOut>
            <CheckOutLink to={"/billing"}>Check out</CheckOutLink>
          </CheckOut>
        </Bottom>
      )}
    </>
  );
};

export default Carts;
