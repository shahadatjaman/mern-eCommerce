import React from "react";

import { H5, Title, Verified } from "./Styles";
import Slider from "react-slick";

import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./product";
import { Box, Container, Grid } from "@mui/material";
import { getMostViewed } from "../../../feature/reducer/getProducts";

const VerifiedCompany = () => {
  const [show, setShow] = useState(3);

  const { mostViewed, loadingMostViewed } = useSelector(
    (state) => state.getItems
  );

  const dispatch = useDispatch();

  const isValid = useWindowWidth({ width: 990 });
  useEffect(() => {
    if (isValid) {
      setShow(1);
    } else {
      setShow(3);
    }
  }, [isValid]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(getMostViewed());
  }, [dispatch]);

  return (
    <Box my={5}>
      <Container maxWidth={"xl"} sx={{ background: "#fff" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} xl={12} xx={12}>
            <Title>
              <H5>Most Viewed</H5>
            </Title>
          </Grid>
          <Grid xs={12} xl={12}>
            <Verified>
              <Slider {...settings}>
                {!loadingMostViewed &&
                  mostViewed?.map((item, index) => (
                    <Product product={item} key={index} />
                  ))}
              </Slider>
            </Verified>
          </Grid>
        </Grid>
        {/* <Grid container spacing={2}>
      
        </Grid> */}
      </Container>
    </Box>
  );
};

export default VerifiedCompany;
