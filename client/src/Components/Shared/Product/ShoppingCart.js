import { useDispatch } from "react-redux";

import {
  ImgWrapper,
  ShoppingImg,
  ShoppingTitle,
  ShoppingWrapper,
  Content,
  Price,
  Span,
  Old,
  ProductAction,
  Action,
  Icon,
} from "./Styles";

import ProductRatting from "../Ratting";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import { addCart } from "../../../feature/reducer/addToCart";

import { useAddToCart } from "../../../hooks/useAddToCart";
import { useEffect } from "react";

const Shopping = ({ product }) => {
  const { addToCart, checkCartIsAddedIn, isAdded, totallPrice } =
    useAddToCart();

  const dispatch = useDispatch();

  const addToCartHandler = (id) => {
    checkCartIsAddedIn({ _id: id });

    if (!isAdded) {
      const cart = addToCart({ _id: id, price: 100 });
      dispatch(addCart(cart));
    }
  };

  useEffect(() => {
    checkCartIsAddedIn({ _id: product._id });
  }, [checkCartIsAddedIn, product]);

  return (
    <ShoppingWrapper>
      {/* Discount */}
      {/* <DiscountWrapper>
        <Discount>-50%</Discount>
      </DiscountWrapper> */}
      {/* Actions */}
      <ProductAction className="action">
        <Action isAdded={isAdded} onClick={() => addToCartHandler(product._id)}>
          {isAdded ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <AiOutlineShoppingCart />
          )}
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
        <ShoppingImg src={product.img_url} alt="camera" />
      </ImgWrapper>

      {/* Product Content */}
      <Content>
        <ShoppingTitle>
          <h6>{product.name}</h6>
        </ShoppingTitle>
        <ProductRatting />
        {/* <ColorWrapper>
          <ColorVariation bg="red" />
          <ColorVariation bg="green" />
          <ColorVariation bg="blue" active="true" />
          <ColorVariation bg="black" />
        </ColorWrapper> */}
        <Price>
          <Span>0.00$</Span>
          <Old>0.00$</Old>
        </Price>
      </Content>
    </ShoppingWrapper>
  );
};

export default Shopping;
