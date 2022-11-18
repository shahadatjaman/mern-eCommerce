import { useDispatch } from "react-redux";

import {
  Action,
  Color,
  ColorWrapper,
  Icon,
  Image,
  ImgLink,
  MainColor,
  Old,
  Price,
  ProductAction,
  ProductContent,
  ProductImage,
  ProductWrap,
  SizeWrapper,
  Span,
  Title,
} from "./Styles";

import { AiOutlineHeart } from "react-icons/ai";

import { useState } from "react";

import { wistList } from "../../../feature/reducer/wishList/";

import ProductRatting from "../Ratting";
import ColorVariation from "./Color";
import SizeVariation from "./Size";

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
        {/* <ProductRatting /> */}
        <Price>
          <Span>${product.pricing.current_price} - </Span>
          <Old>${product.pricing.old_price}</Old>
        </Price>
        {/* Color Variations */}
        <ColorWrapper>
          <ColorVariation bg="red" />
          <ColorVariation bg="green" />
          <ColorVariation bg="blue" active="true" />
          <ColorVariation bg="black" />
        </ColorWrapper>

        {/* Size Variations */}
        <SizeWrapper>
          <SizeVariation size={"X"} />
          <SizeVariation size={"X"} active="true" />
        </SizeWrapper>
      </ProductContent>
    </ProductWrap>
  );
};

export default Product;
