import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={6}>
          <ImgWrapper>
            <Img src={variation?.variation_img} alt="car" />
          </ImgWrapper>
        </Grid>
        <Grid item xs={8} md={6}>
          <Typography variant="h6">
            {shortText(product.name, 50, 0, 50)}
          </Typography>
          <Typography variant="caption">
            {shortText(product.short_desc, 100, 0, 100)}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
