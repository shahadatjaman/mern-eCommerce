import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../../feature/reducer/addToCart";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { requestTServer } from "../../../utils";
import Quantity from "../../Shared/Quantity";

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
  const [variation, setVariation] = useState(null);

  const { removeCart } = useAddToCart();

  const dispatch = useDispatch();

  const removeHandler = (id) => {
    if (variation) {
      const carts = removeCart({ _id: cart.product_id });
      dispatch(addCartItems(carts));
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await requestTServer({
        product_id: cart.product_id,
      });

      if (data.variants) {
        setVariation(data.variants);
      }
    })();
  }, [cart]);

  return (
    <CartWrapper>
      <Left>
        <ImgWrapper>
          {variation ? (
            <Img src={variation.variation_img} alt="img" />
          ) : (
            <Img
              src="https://res.cloudinary.com/dza2t1htw/image/upload/v1669222568/no-image_je9opq.jpg"
              alt="image"
            />
          )}
        </ImgWrapper>
      </Left>
      <Middle>
        <Name>Purple NX Mini F1 aparat </Name>
        <Quantity cart={cart} />
        <Price>
          ${cart.price} X {cart.qty}
        </Price>
      </Middle>
      <Right>
        <Close onClick={() => removeHandler(cart.product_id)}>X</Close>
      </Right>
    </CartWrapper>
  );
};

export default Cart;
