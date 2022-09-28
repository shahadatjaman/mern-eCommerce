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

const ProductContent = ({ img_info, content }) => {
  return (
    <ProductContentWrapper>
      {/* Product Details Ttile */}
      <H4>{content.title}</H4>

      {/* Product Prices */}
      <ProductPrice>
        <Span>${content.pricing.current_price}</Span>
        <OldPrice>${content.pricing.old_price}</OldPrice>
      </ProductPrice>

      {/* Product Ratting */}
      <ProductRatting />

      {/* Product Short Description */}
      <Text>{content.short_description}</Text>

      {/* Product Color */}
      <ProducrColor
        selectedColor={img_info}
        product_colors={content.small_images}
      />
      {/* Product Quantity */}
      <ProductQuantity>
        <Quantity />
        <AddToCart>Add To Cart</AddToCart>
        <WishList>
          <AddToWishList>
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
          <Li>{content.categorie}</Li>
        </Ul>
      </ProductMeta>

      {/* Product Tags */}
      <ProductMeta>
        <MetaText>Tags :</MetaText>
        <Ul>
          {content.tags.map((tag, index) => (
            <Li key={index}>{tag}</Li>
          ))}
        </Ul>
      </ProductMeta>

      {/* Social Media */}
      <SocialMedia>
        <Ul>
          {content.share_link.map((social, index) => (
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
