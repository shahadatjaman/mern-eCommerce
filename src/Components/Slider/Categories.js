import React from "react";
import { CartTitel, CategoriesWrapper, H5, Menubar, Ul } from "./Styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import Category from "./category";
import CategoryLoading from "../Shared/Skeleton/Category";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { addcategory, getCategory } from "../../feature/reducer/category";

const Categories = () => {
  const { category, loading } = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    const cate__ = localStorage.getItem("cate__");
    if (!cate__) {
      dispatch(getCategory());
    } else {
      dispatch(addcategory(JSON.parse(cate__)));
    }
  }, [dispatch]);

  return (
    <CategoriesWrapper className="dispaly-none">
      <CartTitel>
        <H5>Categoriess</H5>
        <span>
          <FaAngleLeft />
          <FaAngleRight />
        </span>
      </CartTitel>
      <Menubar>
        <Ul>
          {loading ? (
            <CategoryLoading />
          ) : (
            <>
              {category?.slice(0, 8).map((cate, index) => (
                <Category cate={cate} key={index} />
              ))}
            </>
          )}
        </Ul>
        {category?.length === 0 && (
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
