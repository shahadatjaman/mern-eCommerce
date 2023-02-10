import React from "react";

import {
  ImgWrapper,
  ShoppingImg,
  ShoppingTitle,
  ShoppingWrapper,
  Content,
  ProductAction,
  Action,
  Icon,
  DiscountWrapper,
  Discount,
} from "./Styles";

import { NavLink, useNavigate } from "react-router-dom";

import Prices from "./Price";
import Rating from "./Rating";
import Wish from "./Wish";
import AddCart from "./addToCart";
import { shortText } from "../../../utils";
import { Box } from "@mui/material";
import { useWish } from "../../../hooks/useWish";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewWish } from "../../../feature/reducer/addWish";
import scrollTop from "../../../utils/ScrollHandler";

const Product = ({ product }) => {
  const [isLoved, setIsLoved] = useState(false);

  const { addToWish, state } = useWish();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      const filtered = state.filter((val) => val._id === product._id);

      if (filtered.length > 0) {
        if (filtered[0]._id === product._id) {
          setIsLoved(true);
        } else {
          setIsLoved(false);
        }
      } else {
        setIsLoved(false);
      }
    }
  }, [product._id, state]);

  useEffect(() => {
    dispatch(addNewWish({ wish: state }));
  }, [state, dispatch]);

  const addHandler = () => {
    if (user) {
      addToWish({ product_id: product._id });
      if (isLoved) {
        setIsLoved(false);
      } else {
        setIsLoved(true);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <ShoppingWrapper>
      {/* Discount */}

      {product.discount && (
        <DiscountWrapper>
          <Discount>-{product.discount.$numberDecimal}%</Discount>
        </DiscountWrapper>
      )}

      <Box sx={{ position: "absolute", right: "14%", top: "5%" }}>
        <Wish addHandler={addHandler} isLoved={isLoved} product={product} />
      </Box>

      {/* Actions */}
      <ProductAction className="action">
        {/* <Action onClick={() => addToCartHandler(product._id)}>
          <AiOutlineShoppingCart />
        </Action> */}
        <AddCart product={product} />

        <Action bg={"fff"}>
          <Icon className="fa-regular fa-eye"></Icon>
        </Action>
      </ProductAction>

      {/* Product Image */}

      <ImgWrapper>
        <NavLink onClick={() => scrollTop()} to={`/product/${product._id}`}>
          {product?.variation[0] && (
            <ShoppingImg
              src={product.variation[0]?.variation_img}
              alt="camera"
            />
          )}
        </NavLink>
      </ImgWrapper>

      {/* Product Content */}
      <Content>
        <ShoppingTitle>
          <NavLink onClick={() => scrollTop()} to={`/product/${product._id}`}>
            <h6>{shortText(product.name, 15, 0, 15)}</h6>
          </NavLink>
        </ShoppingTitle>
        <Rating totalRating={product.total_rating} />

        <Prices product={product} />
      </Content>
    </ShoppingWrapper>
  );
};

export default React.memo(Product);
