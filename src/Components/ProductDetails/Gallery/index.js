import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SmallImg } from "../../../Pages/ProductDetails/styles";
import { BoxStyle } from "./Styles";
import { addRecentVariation } from "../../../feature/reducer/productDetails";

const Gallery = ({ variant }) => {
  const { recentVariation } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();

  const variationHandler = () => {
    dispatch(addRecentVariation(variant));
  };

  useEffect(() => {
    dispatch(addRecentVariation(variant));
  }, [dispatch, variant]);

  if (!variant && !recentVariation) {
    return "Variation not found!";
  }

  return (
    <BoxStyle
      onClick={variationHandler}
      isActive={variant?._id === recentVariation?._id}
    >
      <SmallImg src={variant.variation_img} alt="product" />
    </BoxStyle>
  );
};

export default Gallery;
