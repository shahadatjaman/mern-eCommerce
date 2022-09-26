import {
  AddToCart,
  AddToCompare,
  AddToWishList,
  Button,
  CartPlusMinus,
  Count,
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

const ProductContent = ({ content }) => {
  return (
    <ProductContentWrapper>
      {/* Product Details Ttile */}
      <H4>{content.title}</H4>

      {/* Product Prices */}
      <ProductPrice>
        <Span>${content.price}</Span>
        <OldPrice>${content.old}</OldPrice>
      </ProductPrice>

      {/* Product Ratting */}
      <ProductRatting />

      {/* Product Short Description */}
      <Text>{content.shortDesc}</Text>

      {/* Product Color */}
      <ProducrColor />
      {/* Product Quantity */}
      <ProductQuantity>
        <CartPlusMinus>
          <Button decrement>-</Button>
          <Count>0</Count>
          <Button increment>+</Button>
        </CartPlusMinus>
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
          {content.categories.map((fashion, index) => (
            <Li key={index}>{fashion.name}</Li>
          ))}
        </Ul>
      </ProductMeta>

      {/* Product Tags */}
      <ProductMeta>
        <MetaText>Tags :</MetaText>
        <Ul>
          {content.tags.map((tag, index) => (
            <Li key={index}>{tag.name}</Li>
          ))}
        </Ul>
      </ProductMeta>

      {/* Social Media */}
      <SocialMedia>
        <Ul>
          {content.social.map((social, index) => (
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
