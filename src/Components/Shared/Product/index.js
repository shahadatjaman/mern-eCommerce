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

import { useEffect, useState } from "react";

import { callApi, shortText } from "../../../utils";
import { NavLink } from "react-router-dom";

import Prices from "./Price";
import Rating from "./Rating";
import Wish from "./Wish";
import AddCart from "./addToCart";

const Product = ({ product }) => {
  const [discount, setDiscount] = useState(null);

  const [variation, setVariation] = useState(null);
  const [totalRating, setTotalRating] = useState(null);

  // const { rating } = useTotalRating(ratings);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: product._id,
        pathOne: "v1",
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
        {/* <Action onClick={() => addToCartHandler(product._id)}>
          <AiOutlineShoppingCart />
        </Action> */}
        <AddCart product={product} />
        <Wish product={product} />

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
            <h6>{shortText(product.name, 15, 0, 15)}</h6>
          </NavLink>
        </ShoppingTitle>
        <Rating totalRating={totalRating} />

        <Prices product={product} discount={discount} />
      </Content>
    </ShoppingWrapper>
  );
};

export default React.memo(Product);
