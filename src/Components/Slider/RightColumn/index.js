import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSliderProdcuts } from "../../../feature/reducer/getProducts";
import { callApi, shortText } from "../../../utils";
import Image from "./Image";
import SkeletonLoad from "./Skeleton";

import { Caption, Title } from "./Styles";

const RigthColumn = () => {
  const { loadingSlider, sliderProducts } = useSelector(
    (state) => state.getItems
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderProdcuts());
  }, [dispatch]);

  return (
    <Box py={2} sx={{ flexGrow: 1, background: "#fff" }}>
      {loadingSlider && <SkeletonLoad />}
      {sliderProducts &&
        sliderProducts?.map((product, index) => {
          return (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  maxWidth={140}
                  overflow={"hidden"}
                  sx={{ margin: 1, borderRadius: 2 }}
                >
                  <Image product={product} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Caption>
                  <Title>
                    <Typography>
                      {shortText(product.name, 20, 0, 40)}
                    </Typography>
                  </Title>
                  <Box>
                    <Button>
                      <NavLink to={`/product/${product._id}`}>Shop Now</NavLink>

                      <FaAngleRight />
                    </Button>
                  </Box>
                </Caption>
              </Grid>
            </Grid>
          );
        })}
    </Box>
  );
};

export default RigthColumn;
