import { Box, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Product from "../Shared/Product/";

const Products = ({ products }) => {
  const { grid } = useSelector((state) => state.getItems);

  return (
    <Grid container spacing={2}>
      {products &&
        products.map((product, index) => (
          <Grid
            item
            xl={12 / grid}
            md={12 / grid}
            xs={12}
            sm={12}
            sx={{ transition: "0.5s" }}
          >
            <Product key={index} product={product} />
          </Grid>
        ))}
    </Grid>
  );
};

export default React.memo(Products);
