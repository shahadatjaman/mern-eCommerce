import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { NavLink } from "react-router-dom";
import { shortText } from "../../../utils";
import { Img, ImgWrapper } from "./Styles";

const Product = ({ product }) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} sm={12} xxs={12}>
          <ImgWrapper>
            <NavLink to={`/product/${product._id}`}>
              <Img
                src={product.variation[0]?.variation_img}
                alt={product.name}
              />
            </NavLink>
          </ImgWrapper>
        </Grid>
        <Grid item xs={6} md={6} sm={12} xxs={12}>
          <NavLink to={`/product/${product._id}`}>
            <Typography variant="h6">
              {shortText(product.name, 50, 0, 50)}
            </Typography>
            <Typography variant="caption">
              {shortText(product.short_desc, 100, 0, 100)}
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
