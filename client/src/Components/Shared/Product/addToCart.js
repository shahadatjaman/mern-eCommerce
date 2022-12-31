import React from "react";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addCartItems } from "../../../feature/reducer/addToCart";
import { useAddToCart } from "../../../hooks/useAddToCart";
import { getLocalstorage } from "../../../utils";
import { Action } from "./Styles";

const AddCart = ({ product }) => {
  const dispatch = useDispatch();

  const { addToCart, checkCartIsAddedIn } = useAddToCart();

  const addToCartHandler = (_id) => {
    checkCartIsAddedIn({ _id: _id });

    addToCart({
      _id: product._id,
      price: product.price.$numberDecimal,
    });

    const carts = getLocalstorage("carts");

    dispatch(addCartItems(carts));
  };

  useEffect(() => {
    checkCartIsAddedIn({ _id: product._id });
  }, [checkCartIsAddedIn, product._id]);

  return (
    <Action onClick={() => addToCartHandler(product._id)}>
      <AiOutlineShoppingCart />
    </Action>
  );
};

export default AddCart;
