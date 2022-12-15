import React from "react";
import { NavLink } from "react-router-dom";
import { Img, ImgWrapper, Li, Name } from "./Styles";

const Category = ({ cate }) => {
  return (
    <Li>
      <NavLink to="categories">
        <Name>
          <ImgWrapper>
            <Img src={cate.icon_name} alt="icon" />
          </ImgWrapper>
          {cate.category_name}
        </Name>
      </NavLink>
    </Li>
  );
};

export default Category;
