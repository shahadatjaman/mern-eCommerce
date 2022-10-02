import { useDispatch, useSelector } from "react-redux";

import {
  H4,
  Li,
  MetaText,
  ProductContentWrapper,
  ProductMeta,
  ProductPrice,
  Span,
  Text,
  Ul,
} from "./Styles";

import ProductRatting from "../../Shared/Components/Ratting";

import ProducrColor from "../ColorVariation/ProducrColor";

import { wistList } from "../../../feature/reducer/wishList";

import { addToCart } from "../../../feature/reducer/addToCart";

import SocialLink from "../SocialLink";
import ProductQty from "../Quantity";

const ProductContent = () => {
  const dispatch = useDispatch();

  // get product
  const { product, dimension } = useSelector((state) => state.productDetails);

  const addToWishList = () => {
    dispatch(wistList(product));
  };

  return (
    <ProductContentWrapper>
      {/* Product Details Ttile */}
      <H4>{product && product.title}</H4>

      {/* Product Prices */}
      <ProductPrice>
        {dimension && <Span>${dimension.price}</Span>}
      </ProductPrice>

      {/* Product Ratting */}
      <ProductRatting />

      {/* Product Short Description */}
      <Text>{product && product.short_description}</Text>

      {/* Product Color and Size */}
      <ProducrColor />
      {/* Product Quantity */}
      <ProductQty addToWishList={addToWishList} />

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
      {product && <SocialLink links={product} />}
    </ProductContentWrapper>
  );
};

export default ProductContent;
