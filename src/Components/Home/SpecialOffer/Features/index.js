import { Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { callApi, shortText } from "../../../../utils";

import { Wrapper, Caption, FeatureShop, Img, ImgWrapper } from "./Styles";

const FeatureProdcut = ({ value }) => {
  const [variation, setVariation] = useState(null);
  const [totalRating, setTotalRating] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: value._id,
        pathOne: "v1",
        pathTwo: "getvariation",
        method: "get",
      });

      setVariation(res.variation);
      if (res.totalRating) {
        setTotalRating(res.totalRating);
      }
    })();
  }, [value]);

  return (
    <Grid container spacing={2} mb={4}>
      <Grid
        item
        xs={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Link to={`/product/${value._id}`}>
          <ImgWrapper>
            {variation && <Img src={variation.variation_img} alt="laptop" />}
          </ImgWrapper>
        </Link>
      </Grid>
      <Grid item xs={8}>
        <Caption>
          <Link to={`/product/${value._id}`}>
            <h6>{shortText(value.name, 21, 0, 21)}</h6>
          </Link>

          {totalRating ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <Rating name="read-only" value={totalRating} readOnly />(
              {totalRating} )
            </Box>
          ) : (
            <Rating name="disabled" value={0} disabled />
          )}

          <Typography variant="body1" display="block" fontWeight="600">
            $ {parseFloat(value.price.$numberDecimal).toFixed(2)}
          </Typography>
        </Caption>
      </Grid>
    </Grid>
  );
};

export default FeatureProdcut;
