import React from "react";
import {
  CartTitel,
  CategoriesWrapper,
  H5,
  Img,
  ImgWrapper,
  Li,
  Menubar,
  Name,
  Ul,
} from "./Styles";
import { FaAngleLeft, FaAngleRight, FaCameraRetro } from "react-icons/fa";

import { categoriesData } from "./data";

const Categories = () => {
  return (
    <CategoriesWrapper className="dispaly-none">
      <CartTitel>
        <H5>Categories</H5>
        <span>
          <FaAngleLeft />
          <FaAngleRight />
        </span>
      </CartTitel>
      <Menubar>
        <Ul>
          {categoriesData.map((item, index) => (
            <Li>
              <Name>
                <ImgWrapper>
                  <Img src={item.icon_url} alt="icon" />
                </ImgWrapper>
                {item.name}
              </Name>
              <Name>
                <FaAngleRight />
              </Name>
            </Li>
          ))}
        </Ul>
      </Menubar>
    </CategoriesWrapper>
  );
};

export default Categories;
