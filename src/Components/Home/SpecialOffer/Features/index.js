import { Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import { shortText } from "../../../../utils";

import { Caption, Img, ImgWrapper } from "./Styles";

const FeatureProdcut = ({ product }) => {
  return (
    <Grid container spacing={2} mb={4}>
      <Grid
        item
        xs={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to={`/product/${product._id}`}>
          <ImgWrapper>
            <Img src={product.variation[0].variation_img} alt="laptop" />
          </ImgWrapper>
        </Link>
      </Grid>
      <Grid item xs={8}>
        <Caption>
          <Link to={`/product/${product._id}`}>
            <h6>{shortText(product.name, 21, 0, 21)}</h6>
          </Link>

          {product.total_rating ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <Rating name="read-only" value={product.total_rating} readOnly />(
              {product.total_rating} )
            </Box>
          ) : (
            <Rating name="disabled" value={0} disabled />
          )}

          <Typography variant="body1" display="block" fontWeight="600">
            $ {parseFloat(product.price.$numberDecimal).toFixed(2)}
          </Typography>
        </Caption>
      </Grid>
    </Grid>
  );
};

export default FeatureProdcut;
