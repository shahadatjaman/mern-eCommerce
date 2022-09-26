import { useSelector, useDispatch } from "react-redux";

import { FaRegStar } from "react-icons/fa";

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
  Ratting,
  Span,
  Title,
} from "./Styles";

import { AiOutlineHeart } from "react-icons/ai";

import { useState } from "react";

import { wistList } from "../../../../feature/reducer/wishList";

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
  };

  return (
    <ProductWrap onMouseEnter={mouseEnter} onMouseLeave={mouseEnter}>
      <ProductImage>
        <ImgLink to={"/"}>
          {isHovere ? (
            <Image src={product.imageOne} />
          ) : (
            <Image src={product.imageTwo} />
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
        <Ratting>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </Ratting>
        <Price>
          <Span>${product.price} - </Span>
          <Old>${product.old}</Old>
        </Price>
      </ProductContent>
    </ProductWrap>
  );
};

export default Product;
