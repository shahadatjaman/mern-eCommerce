import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelelectedPorducts } from "../../../feature/reducer/Product/products";
import Export from "./Export";
import MoreAction from "./MoreAction";
import Visibility from "./Visibility";

const SelectedAction = () => {
  const dispatch = useDispatch();

  const { products, selectedProducts } = useSelector(
    (state) => state.getProducts
  );

  const disSelectHandler = () => {
    dispatch(addSelelectedPorducts(null));
  };

  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        height: 90,
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          borderRight: "1px solid #ddd",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          paddingRight: 2,
          lineHeight: 10,
        }}
      >
        <Typography sx={{ marginRight: 2 }}>
          {selectedProducts.length} of {products && products.length} selected
        </Typography>
        <Typography
          sx={{ cursor: "pointer" }}
          color={"#1976d2"}
          onClick={disSelectHandler}
        >
          Deselected All
        </Typography>
      </Box>
      <Export />
      <Visibility />
      <MoreAction />
    </Box>
  );
};

export default SelectedAction;
