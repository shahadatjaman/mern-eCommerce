import React from "react";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { Count, Decrement, Increment, Wrapper } from "./Styles";
import { addCartItems } from "../../../feature/reducer/addToCart";
import { useDispatch } from "react-redux";
import { getLocalstorage } from "../../../utils/";

const Quantity = ({ cart }) => {
  const { increment, decrement } = useAddToCart();

  const dispatch = useDispatch();

  const incrementHandler = () => {
    increment({ _id: cart.product_id });
    const carts = getLocalstorage("carts");
    dispatch(addCartItems(carts));
  };

  const decrementHandler = () => {
    decrement({ _id: cart.product_id });
    const carts = getLocalstorage("carts");
    dispatch(addCartItems(carts));
  };

  return (
    <Wrapper>
      <Decrement onClick={decrementHandler}>-</Decrement>
      <Count>{cart.qty}</Count>
      <Increment onClick={incrementHandler}>+</Increment>
    </Wrapper>
  );
};

export default Quantity;
