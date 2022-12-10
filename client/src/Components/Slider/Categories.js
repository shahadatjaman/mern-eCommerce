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
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { getCategories } from "../../feature/reducer/categories";

import { categoriesData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Category from "./category";

const Categories = () => {
  const { categories } = useSelector((state) => state.categories);

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
          {categories?.map((cate, index) => (
            <Category cate={cate} key={index} />
          ))}
        </Ul>
      </Menubar>
    </CategoriesWrapper>
  );
};

export default Categories;
