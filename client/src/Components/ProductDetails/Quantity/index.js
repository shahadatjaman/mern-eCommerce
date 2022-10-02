import {
  ProductQuantity,
  AddToCart,
  WishList,
  AddToWishList,
  AddToCompare,
} from "./Styles";

import Quantity from "./Qty";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

const ProductQty = ({ addToWishList }) => {
  return (
    <ProductQuantity>
      <Quantity />

      <WishList>
        <AddToWishList onClick={addToWishList}>
          <FontAwesomeIcon icon={faHeart} />
        </AddToWishList>
      </WishList>
      <AddToCompare>
        <FontAwesomeIcon icon={faShuffle} />
      </AddToCompare>
    </ProductQuantity>
  );
};

export default ProductQty;
