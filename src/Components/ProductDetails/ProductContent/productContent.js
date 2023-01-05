// <=== Hooks ====>
import { useSelector } from "react-redux";

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
import { getSalePrice, shortText } from "../../../utils";
import Quantityy from "../Quantity";

import ProducrVariation from "../ColorVariation";
import { Box } from "@mui/material";
import SkletonLoad from "./SkletonLoad";

const ProductContent = () => {
  const [salePices, setSalePrices] = useState(null);

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

  return (
    <ProductContentWrapper>
      {!product ? (
        <SkletonLoad />
      ) : (
        <Box>
          <H4>{product && product.name}</H4>
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
          <Text>{shortText(product.short_desc, 200, 0, 200)}</Text>
          <ProducrVariation />
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
        </Box>
      )}
    </ProductContentWrapper>
  );
};

export default ProductContent;
