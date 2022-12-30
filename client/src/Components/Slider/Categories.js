import React from "react";
import { CartTitel, CategoriesWrapper, H5, Menubar, Ul } from "./Styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useSelector } from "react-redux";

import Category from "./category";
import CategoryLoading from "../Shared/Skeleton/Category";
import { Box, Typography } from "@mui/material";

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
          {categories?.slice(0, 8).map((cate, index) => (
            <Category cate={cate} key={index} />
          ))}
        </Ul>
        {categories?.length === 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
            mt={4}
          >
            <Typography>Categories not created yet!</Typography>
          </Box>
        )}
      </Menubar>
    </CategoriesWrapper>
  );
};

export default Categories;
