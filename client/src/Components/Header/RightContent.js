import React from "react";
import { Action, Count, HeaderRightWrapper, Item } from "./Styles";
import {
  FaLuggageCart,
  FaRegCommentAlt,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { addCartItems } from "../../feature/reducer/addToCart";
import { useEffect } from "react";
import { getLocalstorage } from "../../utils";
import ShoppingCart from "../Shared/ShoppingCart";
import Cart from "./Cart";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
import { useNavigate } from "react-router-dom";

const RightContent = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { carts } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const cartItems = getLocalstorage("carts");
    dispatch(addCartItems(cartItems));
  }, [dispatch]);

  // Cart toggler handler
  const toggleCartHandler = () => {
    if (isOpenCart) {
      setIsOpenCart(false);
    } else {
      setIsOpenCart(true);
    }
  };

  const authHandler = () => {
    navigate("/login");
  };

  return (
    <HeaderRightWrapper>
      <Item>
        {user ? (
          <AccountMenu user={user} setIsOpenCart={setIsOpenCart} />
        ) : (
          <Action onClick={authHandler}>
            <FaUserAlt />
            <span>Sing up</span>
          </Action>
        )}
      </Item>

      <Item>
        <Action>
          <FaRegCommentAlt />
          <span>Message</span>
        </Action>
      </Item>
      <Item>
        <Action>
          <FaLuggageCart />
          <span>Order</span>
        </Action>
      </Item>
      <Item>
        <Action onClick={toggleCartHandler}>
          <FaShoppingCart />
          <span>Cart</span>
        </Action>

        {carts?.length > 0 ? <Count>{carts.length}</Count> : <Count>0</Count>}
        {isOpenCart && (
          <ShoppingCart height={"450"}>
            <Cart />
          </ShoppingCart>
        )}
      </Item>
    </HeaderRightWrapper>
  );
};

export default RightContent;
