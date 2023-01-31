import React from "react";
import { Img, ImgWrapper } from "./Styles";

const Image = ({ product }) => {
  return (
    <ImgWrapper>
      {product.variation && (
        <Img src={product?.variation[0].variation_img} alt="phone" />
      )}
    </ImgWrapper>
  );
};

export default Image;
