// <=== Hooks ====>
import { useDispatch, useSelector } from "react-redux";

// <=== Reducer functions =====>
import { wistList } from "../../../feature/reducer/wishList";

//<==== Components ====>
import ProductRatting from "../../Shared/Ratting/";

import SocialLink from "../SocialLink";

// <=== Styled Components  ====>
import {
  H4,
  Li,
  MetaText,
  OldPrice,
  ProductContentWrapper,
  ProductMeta,
  ProductPrice,
  Span,
  Text,
  Ul,
} from "./Styles";
import { useEffect, useState } from "react";
import { getSalePrice } from "../../../utils";
import Quantityy from "../Quantity";
import ProducrColor from "../ColorVariation";

const ProductContent = () => {
  const [salePices, setSalePrices] = useState(null);

  const dispatch = useDispatch();

  // get product
  const { product, discount, tags } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    if (product && discount) {
      const salePice = getSalePrice({
        price: product.price.$numberDecimal,
        discount: discount.discount_percent.$numberDecimal,
      });

      setSalePrices(salePice);
    }
  }, [product, discount]);

  if (!product) {
    return <h2>product not found!</h2>;
  }

  console.log(tags);

  return (
    <ProductContentWrapper>
      {/* Product Details Ttile */}
      <H4>{product && product.name}</H4>

      {/* Product Prices */}
      <ProductPrice>
        {discount ? (
          <>
            {salePices && <Span>$ {salePices.toFixed(2)}</Span>}

            <OldPrice> $ {product.price.$numberDecimal}</OldPrice>
          </>
        ) : (
          <Span>$ {product.price.$numberDecimal}</Span>
        )}
      </ProductPrice>

      {/* Product Ratting */}
      <ProductRatting />

      {/* Product Short Description */}
      <Text>{product.short_desc}</Text>

      <ProducrColor />

      {/* Product Color and Size */}

      {/* Product Quantity */}
      <Quantityy />

      {/* Product Categories */}
      <ProductMeta>
        <MetaText>Categories :</MetaText>
        <Ul>
          <Li>Categories</Li>
        </Ul>
      </ProductMeta>

      {/* Product Tags */}
      <ProductMeta>
        {tags?.length !== 0 && <MetaText>Tags :</MetaText>}

        <Ul>
          {tags?.map((val, index) => (
            <Li key={index}> {val.tag_name} </Li>
          ))}
        </Ul>
      </ProductMeta>

      {/* Social Media */}
      {product && <SocialLink links={product} />}
    </ProductContentWrapper>
  );
};

export default ProductContent;
