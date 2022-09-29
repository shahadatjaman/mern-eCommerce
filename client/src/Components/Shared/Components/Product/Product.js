import { useDispatch } from "react-redux";

import {
  Action,
  Icon,
  Image,
  ImgLink,
  Old,
  Price,
  ProductAction,
  ProductContent,
  ProductImage,
  ProductWrap,
  Span,
  Title,
} from "./Styles";

import { AiOutlineHeart } from "react-icons/ai";

import { useState } from "react";

import { wistList } from "../../../../feature/reducer/wishList";

import ProductRatting from "../Ratting";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [isHovere, setHover] = useState(false);

  const mouseEnter = () => {
    if (isHovere) {
      setHover(false);
    } else {
      setHover(true);
    }
  };

  const dispatch = useDispatch();

  const addToWishlist = () => {
    dispatch(wistList(product));
    console.log(product);
  };

  return (
    <ProductWrap onMouseEnter={mouseEnter} onMouseLeave={mouseEnter}>
      <ProductImage>
        <ImgLink to={`/product/${product._id}`}>
          {isHovere ? (
            <Image src={product.thumbnail_image} />
          ) : (
            <Image src={product.hover_image} />
          )}
        </ImgLink>
        <ProductAction className="action">
          <Action width="48" onClick={addToWishlist}>
            <AiOutlineHeart />
          </Action>

          <Action widthCalc="96">Buy Now</Action>
          <Action width="48">
            <Icon className="fa-regular fa-eye"></Icon>
          </Action>
        </ProductAction>
      </ProductImage>
      <ProductContent>
        <Title>Lorem ipsum fashion jacket</Title>
        <ProductRatting />
        <Price>
          <Span>${product.pricing.current_price} - </Span>
          <Old>${product.pricing.old_price}</Old>
        </Price>
      </ProductContent>
    </ProductWrap>
  );
};

export default Product;
