import { Categoreis, Wrapper } from "./Styles";
import Loading from "../../Shared/Skeleton/Product/Product";

import Product from "../../Shared/Product/";
import FeatureProdcut from "./Features";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import LabTabs from "./Tabs";
import OffierCounter from "./Timer";
import {
  getProducts,
  getTopReviewed,
} from "../../../feature/reducer/getProducts/index";
import { placeHolder } from "./config";

const SpeOffer = () => {
  const { products, loading, topReviewed, loadingTopReview } = useSelector(
    (state) => state.getItems
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopReviewed());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xl={3} xs={12} md={3}>
            <OffierCounter />
            <Box sx={{ background: "#fff" }} mt={2} p={2}>
              <Typography
                variant="h6"
                p={2}
                mb={2}
                borderBottom={"1px solid #ddd"}
              >
                Recommended For You
              </Typography>
              {!loadingTopReview &&
                topReviewed?.map((item, index) => (
                  <FeatureProdcut product={item} key={index} />
                ))}

              {!topReviewed && loadingTopReview && (
                <Typography textAlign={"center"} py={5} display={"block"}>
                  No more product!
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid item xl={9} xs={12} md={9}>
            <Categoreis>
              <LabTabs />
              <div className="items">
                <Grid container spacing={2}>
                  {loading &&
                    placeHolder?.map((item, index) => (
                      <Grid
                        key={index}
                        item
                        lg={12 / 5}
                        xs={12 / 2}
                        md={4}
                        sm={12}
                      >
                        <Loading />
                      </Grid>
                    ))}
                  {!loading &&
                    products?.map((item, index) => (
                      <Grid
                        key={index}
                        item
                        lg={12 / 5}
                        xs={12 / 2}
                        md={4}
                        sm={12}
                      >
                        <Product product={item} />
                      </Grid>
                    ))}
                </Grid>
              </div>
            </Categoreis>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default SpeOffer;
