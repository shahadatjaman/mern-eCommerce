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

import { NavLink } from "react-router-dom";

import Prices from "./Price";
import Rating from "./Rating";
import Wish from "./Wish";
import AddCart from "./addToCart";
import { shortText } from "../../../utils";

const Product = ({ product }) => {
  return (
    <ShoppingWrapper>
      {/* Discount */}
      {product.discount && (
        <DiscountWrapper>
          <Discount>-{product.discount}%</Discount>
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
        <NavLink to={`/product/${product._id}`}>
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
          <NavLink to={`/product/${product._id}`}>
            <h6>{shortText(product.name, 15, 0, 15)}</h6>
          </NavLink>
        </ShoppingTitle>
        <Rating totalRating={product.total_rating} />

        <Prices product={product} salePrie={product.salePrice} />
      </Content>
    </ShoppingWrapper>
  );
};

export default React.memo(Product);
