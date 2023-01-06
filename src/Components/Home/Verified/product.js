import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { callApi, shortText } from "../../../utils";
import { Caption, Img, ImgWrapper, Item, Items } from "./Styles";

const Product = ({ product }) => {
  const [variation, setVariation] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: product._id,
        pathOne: "v1",
        pathTwo: "getvariation",
        method: "get",
      });

      if (res.variation) {
        setVariation(res.variation);
      }
    })();
  }, [product]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} sm={12} xxs={12}>
          <ImgWrapper>
            <NavLink to={`/product/${product._id}`}>
              <Img src={variation?.variation_img} alt="car" />
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
