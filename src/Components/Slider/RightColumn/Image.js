import React from "react";
import { Link } from "react-router-dom";
import { Img, ImgWrapper } from "./Styles";

const Image = ({ product }) => {
  return (
    <ImgWrapper>
      <Link to={`/product/${product._id}`}>
        {product.variation && (
          <Img src={product?.variation[0].variation_img} alt="phone" />
        )}
      </Link>
    </ImgWrapper>
  );
};

export default Image;
