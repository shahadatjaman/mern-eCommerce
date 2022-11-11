import React from "react";
import { Image, ImgWrapper } from "../Styles";

const Img = ({ file }) => {
  console.log(file);
  return (
    <ImgWrapper>
      <Image src={file.variation_img} alt="img" />
    </ImgWrapper>
  );
};

export default Img;
