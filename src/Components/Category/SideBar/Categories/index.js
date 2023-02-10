import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import React from "react";
import { H5 } from "../Styles";
import { Wrapper } from "./Styles";
import { MenuItem, Select, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addcategory, getCategory } from "../../../../feature/reducer/category";

const Categories = ({ value, handleChange }) => {
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
    <Wrapper>
      <H5>Categories</H5>
      <FormControl sx={{ minWidth: "100%" }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
        >
          <MenuItem value="">All categories</MenuItem>
          {category?.map((cat, index) => {
            return (
              cat.category_name !== "All categories" && (
                <MenuItem key={index} value={cat._id}>
                  {cat.category_name}
                </MenuItem>
              )
            );
          })}

          {!category && !loading && (
            <Typography>Categories not created yet!</Typography>
          )}
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default Categories;
