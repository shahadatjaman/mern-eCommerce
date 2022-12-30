import React, { useEffect, useState } from "react";
import { SeachBarWrapper } from "./Styles";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { H5 } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../../../../utils";
import {
  addFilterdProducts,
  addQueryValue,
} from "../../../../feature/reducer/product";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  background: "#edf2fd",
  "&:hover": {
    background: "#edf2fd",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Input = () => {
  const { queryValue } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    dispatch(addQueryValue({ value: e.target.value }));
  };

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getproducts",
        method: "get",
        _id: queryValue,
      });

      dispatch(addFilterdProducts({ products: res.products }));
    })();
  }, [queryValue, dispatch]);

  return (
    <SeachBarWrapper>
      <H5>Search</H5>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={changeHandler}
          value={queryValue}
        />
      </Search>
    </SeachBarWrapper>
  );
};

export default Input;
