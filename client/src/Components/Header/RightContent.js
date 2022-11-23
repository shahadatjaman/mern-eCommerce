import React from "react";
import {
  Action,
  Count,
  HeaderRightWrapper,
  Item,
  Li,
  Link,
  LinkName,
  Span,
  Ul,
} from "./Styles";
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

const RightContent = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);
  const { carts } = useSelector((state) => state.cart);

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
      setIsOpenAccount(false);
    }
  };

  // Account toggler handler
  const toggleAccountHandler = () => {
    if (isOpenAccount) {
      setIsOpenAccount(false);
    } else {
      setIsOpenAccount(true);
      setIsOpenCart(false);
    }
  };

  return (
    <HeaderRightWrapper>
      <Item>
        <Action onClick={toggleAccountHandler}>
          <FaUserAlt />
          <span>Sign Up</span>
        </Action>
        {isOpenAccount && (
          <ShoppingCart width="150" height="100">
            <Ul>
              <Li>
                <Link to={"/login"}>Login</Link>
              </Li>
              <Li>
                <Link to={"/register"}>Register</Link>
              </Li>
            </Ul>
          </ShoppingCart>
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
      <Item onClick={toggleCartHandler}>
        <Action>
          <FaShoppingCart />
          <span>Cart</span>
        </Action>

        {carts.length > 0 && <Count>{carts.length}</Count>}
        {isOpenCart && (
          <ShoppingCart height={"350"}>
            <Cart />
          </ShoppingCart>
        )}
      </Item>
    </HeaderRightWrapper>
  );
};

export default RightContent;
