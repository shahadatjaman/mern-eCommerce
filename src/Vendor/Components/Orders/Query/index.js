import React from "react";
import { Search, Wrapper } from "./Styles";
import { Input } from "./Styles";

import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSerchedProducts } from "../../../feature/reducer/Product/products";

const Query = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const val = e.target.value;
    setValue(val);

    dispatch(
      getSerchedProducts({
        pathOne: "v3",
        pathTwo: "searched_prodcuts",
        _id: value,
        method: "get",
      })
    );
  };

  return (
    <Box
      ml={2}
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "90%",
        height: 40,
        borderRadius: 50,
        overflow: "hidden",
        border: "1px solid #d6e6fe",
      }}
    >
      <Search>
        <SearchIcon sx={{ color: "#116dff" }} />
      </Search>
      <Input
        placeholder="Search for Order ID, customer, order status or something"
        value={value}
        onChange={changeHandler}
      />
    </Box>
  );
};

export default Query;
