import {
  Action,
  HoverdImg,
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

const Product = ({ product }) => {
  const [isHover, setHover] = useState(false);

  const mouseOver = () => {
    setHover(true);
  };
  const mouseOut = () => {
    setHover(false);
  };

  return (
    <ProductWrap onMouseOver={mouseOver} onMouseOut={mouseOut}>
      <ProductImage>
        <ImgLink to={"/"}>
          {isHover ? (
            <Image src={product.imageOne} />
          ) : (
            <Image src={product.imageTwo} />
          )}
        </ImgLink>
        <ProductAction className="action">
          <Action width="48">
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
          <Icon>*</Icon>
          <Icon>*</Icon>
          <Icon>*</Icon>
          <Icon>*</Icon>
          <Icon>*</Icon>
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
