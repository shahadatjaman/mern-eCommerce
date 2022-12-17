import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import React from "react";
import { H5 } from "../Styles";
import { Wrapper } from "./Styles";
import { MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../../../../utils";
import {
  addRecentCategory,
  clearAction,
} from "../../../../feature/reducer/product";

const Categories = () => {
  const [categories, setCategories] = useState(null);

  const { recentCategoryId } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(addRecentCategory({ _id: event.target.value }));
    dispatch(clearAction({ clear: false }));
  };

  // Get categories
  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "vendor",
        pathTwo: "getcategories",
        method: "get",
      });

      if (res.category) {
        setCategories(res.category);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <H5>Categories</H5>
      <FormControl sx={{ minWidth: "100%" }}>
        <Select
          value={recentCategoryId}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          size="small"
        >
          <MenuItem value="">All categories</MenuItem>
          {categories?.map((cat, index) => {
            return (
              cat.category_name !== "All categories" && (
                <MenuItem key={index} value={cat._id}>
                  {cat.category_name}
                </MenuItem>
              )
            );
          })}
        </Select>
      </FormControl>
    </Wrapper>
  );
};

export default Categories;
