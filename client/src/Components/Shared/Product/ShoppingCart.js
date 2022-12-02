import { useDispatch, useSelector } from "react-redux";

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
  DiscountWrapper,
  Discount,
} from "./Styles";

import ProductRatting from "../Ratting";

import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

import { addCart, addCartItems } from "../../../feature/reducer/addToCart";

import { useAddToCart } from "../../../hooks/useAddToCart";
import { useEffect, useState } from "react";

import { getVariation } from "../../../Dashboard/feature/reducer/productVariation";
import { getDiscount } from "../../../Dashboard/feature/reducer/products";
import {
  getLocalstorage,
  isEmptyObject,
  requestTServer,
  shortText,
} from "../../../utils";
import { NavLink } from "react-router-dom";

const Shopping = ({ product }) => {
  const [variants, setVariations] = useState(null);

  const { addToCart, checkCartIsAddedIn } = useAddToCart();

  const { discount } = useSelector((state) => state.getProducts);

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
    dispatch(getVariation({ product_id: product._id }));
  }, [dispatch, product]);

  useEffect(() => {
    (async () => {
      const result = await requestTServer({ product_id: product._id });
      const response = result;

      if (response.data.variants) {
        setVariations(response.data);
      }
    })();
  }, [product]);

  return (
    <ShoppingWrapper>
      {/* Discount */}
      {discount && !isEmptyObject(discount) && (
        <DiscountWrapper>
          <Discount>-50%</Discount>
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
        <NavLink to={`/product/${product._id}`}>
          {variants ? (
            <ShoppingImg src={variants.variants?.variation_img} alt="camera" />
          ) : (
            <ShoppingImg
              src={
                "https://res.cloudinary.com/dza2t1htw/image/upload/v1669222568/no-image_je9opq.jpg"
              }
              alt="camera"
            />
          )}
        </NavLink>
      </ImgWrapper>

      {/* Product Content */}
      <Content>
        <ShoppingTitle>
          <NavLink to={`/product/${product._id}`}>
            <h6>{shortText(product.name, 25, 0, 25)}</h6>
          </NavLink>
        </ShoppingTitle>
        <ProductRatting />

        <Price>
          <Span>{product.price.$numberDecimal}$</Span>
          <Old>0.00$</Old>
        </Price>
      </Content>
    </ShoppingWrapper>
  );
};

export default Shopping;
