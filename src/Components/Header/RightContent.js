import React from "react";
import { Action, Count, HeaderRightWrapper, Item } from "./Styles";
import {
  FaLuggageCart,
  FaRegCommentAlt,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";

import { addCartItems } from "../../feature/reducer/addToCart";
import { useEffect } from "react";
import { getLocalstorage } from "../../utils";
import ShoppingCart from "../Shared/ShoppingCart";
import Cart from "./Cart";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
import { NavLink, useNavigate } from "react-router-dom";

import { getOrders } from "../../feature/reducer/order/";
import { useWindowWidth } from "../../hooks/userWindowWidth";

const RightContent = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { carts } = useSelector((state) => state.cart);
  const { wishes } = useSelector((state) => state.wish);
  const isSmall = useWindowWidth({ width: 600 });
  const { user } = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state.order);

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

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

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
        <NavLink to={"/wishlist"}>
          <Action>
            <FavoriteIcon fontSize="large" />
            <span>Wish</span>
          </Action>
          {wishes && user && (
            <Count>{wishes.length === 0 ? 0 : wishes.length}</Count>
          )}
        </NavLink>
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
      {!isSmall && (
        <>
          <Item>
            <NavLink to={`/profile/${user?.firstName}/myorders`}>
              <Action>
                <FaLuggageCart />
                <span>Order</span>
              </Action>
              {user && <>{orders && <Count>{orders.length}</Count>}</>}
            </NavLink>
          </Item>
        </>
      )}
    </HeaderRightWrapper>
  );
};

export default RightContent;
