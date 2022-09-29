import { useDispatch, useSelector } from "react-redux";

import {
  AddToCart,
  AddToCompare,
  AddToWishList,
  H4,
  Icon,
  Li,
  MetaText,
  OldPrice,
  ProductContentWrapper,
  ProductMeta,
  ProductPrice,
  ProductQuantity,
  SocialMedia,
  Span,
  Text,
  Ul,
  WishList,
} from "../styles";

import ProductRatting from "../../../Components/Shared/Components/Ratting";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

import ProducrColor from "./ProducrColor";
import Quantity from "../../../Components/Shared/Components/ProductQuantity";

import { wistList } from "../../../feature/reducer/wishList";

import { addToCart } from "../../../feature/reducer/addToCart";

const ProductContent = () => {
  const dispatch = useDispatch();

  // get product
  const { product, priceColorAndSize, selectedProduct } = useSelector(
    (state) => state.productDetails
  );

  const addToWishList = () => {
    dispatch(wistList(product));
  };

  const addItemToCart = () => {
    const cartItem = {
      _id: product._id,
      url: selectedProduct.url,
      product_name: product.title,
      unit_price: priceColorAndSize.price,
      qty: 1,
      size: priceColorAndSize.size,
      subtotal: priceColorAndSize.price,
    };
    dispatch(addToCart(cartItem));

    const cartLists = localStorage.getItem("cartLists")
      ? JSON.parse(localStorage.getItem("cartLists"))
      : null;

    if (cartLists) {
      let cart = cartLists.findIndex(
        (cart) =>
          cart._id === product._id && cart.size === priceColorAndSize.size
      );

      cartLists[cart].qty = cartLists[cart].qty + 1;
      cartLists[cart].subtotal =
        cartLists[cart].subtotal + priceColorAndSize.price;

      localStorage.setItem("cartLists", JSON.stringify(cartLists));
    } else {
      localStorage.setItem("cartLists", JSON.stringify([cartItem]));
    }
  };

  return (
    <ProductContentWrapper>
      {/* Product Details Ttile */}
      <H4>{product && product.title}</H4>

      {/* Product Prices */}
      <ProductPrice>
        <Span>${priceColorAndSize && priceColorAndSize.price}</Span>
      </ProductPrice>

      {/* Product Ratting */}
      <ProductRatting />

      {/* Product Short Description */}
      <Text>{product && product.short_description}</Text>

      {/* Product Color */}
      <ProducrColor />
      {/* Product Quantity */}
      <ProductQuantity>
        <Quantity />
        <AddToCart onClick={addItemToCart}>Add To Cart</AddToCart>
        <WishList>
          <AddToWishList onClick={addToWishList}>
            <FontAwesomeIcon icon={faHeart} />
          </AddToWishList>
        </WishList>
        <AddToCompare>
          <FontAwesomeIcon icon={faShuffle} />
        </AddToCompare>
      </ProductQuantity>

      {/* Product Categories */}
      <ProductMeta>
        <MetaText>Categories :</MetaText>
        <Ul>
          <Li>{product && product.categorie}</Li>
        </Ul>
      </ProductMeta>

      {/* Product Tags */}
      <ProductMeta>
        <MetaText>Tags :</MetaText>
        <Ul>
          {product &&
            product.tags.map((tag, index) => <Li key={index}>{tag}</Li>)}
        </Ul>
      </ProductMeta>

      {/* Social Media */}
      <SocialMedia>
        <Ul>
          {product &&
            product.share_link.map((social, index) => (
              <Li marginRight="40" key={index}>
                <Icon className={social.icon}></Icon>
              </Li>
            ))}
        </Ul>
      </SocialMedia>
    </ProductContentWrapper>
  );
};

export default ProductContent;
