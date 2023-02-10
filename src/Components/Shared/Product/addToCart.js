import React from "react";
import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCartItems } from "../../../feature/reducer/addToCart";
import { useAddToCart } from "../../../hooks/useAddToCart";
import useScrollTop from "../../../hooks/useScrollTop";
import { getLocalstorage } from "../../../utils";
import scrollTop from "../../../utils/ScrollHandler";
import { Action } from "./Styles";

const AddCart = ({ product }) => {
  const dispatch = useDispatch();

  const { addToCart, checkCartIsAddedIn } = useAddToCart();

  const naviagte = useNavigate();

  const addToCartHandler = (_id) => {
    // checkCartIsAddedIn({ _id: _id });

    // addToCart({
    //   _id: product._id,
    //   price: product.price.$numberDecimal,
    //   vendor_id: product.user_id,
    // });

    // const carts = getLocalstorage("carts");

    // dispatch(addCartItems(carts));
    naviagte(`/product/${product._id}`);
    scrollTop();
  };

  useEffect(() => {
    checkCartIsAddedIn({ _id: product._id });
  }, [checkCartIsAddedIn, product._id]);

  return (
    <Action bg={"fff"} onClick={() => addToCartHandler(product._id)}>
      <AiOutlineShoppingCart />
    </Action>
  );
};

export default AddCart;
