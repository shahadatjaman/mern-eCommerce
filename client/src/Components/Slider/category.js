import React from "react";
import { Img, ImgWrapper, Li, Name } from "./Styles";

const Category = ({ cate }) => {
  console.log(cate);
  return (
    <Li>
      <Name>
        <ImgWrapper>
          <Img src={cate.icon_name} alt="icon" />
        </ImgWrapper>
        {cate.category_name}
      </Name>
      {/* <Name>
        <FaAngleRight />
      </Name> */}
    </Li>
  );
};

export default Category;
