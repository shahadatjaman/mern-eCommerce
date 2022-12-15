import React from "react";
import { useDispatch } from "react-redux";

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

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import { addCartItems } from "../../../feature/reducer/addToCart";

import { useAddToCart } from "../../../hooks/useAddToCart";
import { useEffect, useState } from "react";

import { callApi, getLocalstorage, shortText } from "../../../utils";
import { NavLink } from "react-router-dom";

import Prices from "./Price";
import Rating from "./Rating";
import { Skeleton, Typography } from "@mui/material";

const Product = ({ product }) => {
  const [discount, setDiscount] = useState(null);

  const [variation, setVariation] = useState(null);
  const [totalRating, setTotalRating] = useState(null);

  const { addToCart, checkCartIsAddedIn } = useAddToCart();

  // const { rating } = useTotalRating(ratings);

  const dispatch = useDispatch();

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
  }, [checkCartIsAddedIn, product]);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: product._id,
        pathOne: "vendor",
        pathTwo: "getvariation",
        method: "get",
      });

      setVariation(res.variation);

      if (res.totalRating) {
        setTotalRating(res.totalRating);
      }
      if (res.discount) {
        setDiscount(res.discount);
      }
    })();
  }, [product]);

  return (
    <ShoppingWrapper>
      {/* Discount */}
      {discount && (
        <DiscountWrapper>
          <Discount>-{discount.discount_percent.$numberDecimal}%</Discount>
        </DiscountWrapper>
      )}

      {/* Actions */}
      <ProductAction className="action">
        <Action onClick={() => addToCartHandler(product._id)}>
          <AiOutlineShoppingCart />
        </Action>
        <Action>
          <AiOutlineHeart />
        </Action>

        <Action>
          <Icon className="fa-regular fa-eye"></Icon>
        </Action>
      </ProductAction>

      {/* Product Image */}

      <ImgWrapper>
        {/* <NavLink to={`/product/${product._id}`}> */}
        {variation && (
          <ShoppingImg src={variation?.variation_img} alt="camera" />
        )}
        {/* </NavLink> */}
      </ImgWrapper>

      {/* Product Content */}
      <Content>
        <ShoppingTitle>
          <NavLink to={`/product/${product._id}`}>
            <h6>{shortText(product.name, 25, 0, 20)}</h6>
          </NavLink>
        </ShoppingTitle>
        <Rating totalRating={totalRating} />

        <Prices product={product} discount={discount} />
      </Content>
    </ShoppingWrapper>
  );
};

export default React.memo(Product);
