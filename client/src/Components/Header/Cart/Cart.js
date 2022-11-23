import React from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../../feature/reducer/addToCart";
import { useAddToCart } from "../../../hooks/useAddToCart";

import {
  CartWrapper,
  Img,
  ImgWrapper,
  Left,
  Name,
  Price,
  Qty,
  Middle,
  Right,
  Close,
} from "./Styles";

const Cart = ({ cart }) => {
  const { removeCart } = useAddToCart();

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    const carts = removeCart({ _id: id });
    dispatch(addCartItems(carts));
  };

  return (
    <CartWrapper>
      <Left>
        <ImgWrapper>
          <Img src={cart.img_url} alt="img" />
        </ImgWrapper>
      </Left>
      <Middle>
        <Name>{cart.name}</Name>
        <Qty>Qty : 1</Qty>
        <Price> 1.00$</Price>
      </Middle>
      <Right>
        <Close onClick={() => removeHandler(cart._id)}>X</Close>
      </Right>
    </CartWrapper>
  );
};

export default Cart;
