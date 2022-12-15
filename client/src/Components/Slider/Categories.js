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

import { useSelector } from "react-redux";

import Category from "./category";
import CategoryLoading from "../Shared/Skeleton/Category";

const Categories = () => {
  const { categories, loading } = useSelector((state) => state.categories);

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
          {loading && <CategoryLoading />}
          {categories?.map((cate, index) => (
            <Category cate={cate} key={index} />
          ))}
        </Ul>
      </Menubar>
    </CategoriesWrapper>
  );
};

export default Categories;
