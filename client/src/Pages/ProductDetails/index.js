//<=== Hooks ====>
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//<====  Redux Toolkit || Reducer functions   ====>
import {
  addRecentVariation,
  fetchProduct,
} from "../../feature/reducer/productDetails";

//<=== Components  ====>
import Layout from "../Layout";
import ProductContent from "../../Components/ProductDetails/ProductContent/productContent";

//<==== Styled Components  ====>
import { gallerySm, Image, ImageWrapper, largeImg } from "./styles";
import ResourseNotFound from "../NotFound";

// <=== MUI  ====>
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import Tabs from "../../Components/ProductDetails/Review/Tabs";
import Gallery from "../../Components/ProductDetails/Gallery";
import { getRecentVariation } from "../../utils";

const Details = () => {
  const { variations, product, isLoading, recentVariation, recentColor } =
    useSelector((state) => state.productDetails);

  // Get product id by params ===>
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({ product_id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    const newVariation = getRecentVariation(variations, recentColor);

    if (newVariation) {
      dispatch(addRecentVariation(newVariation));
    }
  }, [recentColor, variations, dispatch]);

  if (!product && !isLoading) {
    return <ResourseNotFound />;
  }

  return (
    <Layout footer={true}>
      <Box my={8}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={12}>
              <ImageWrapper sx={{ ...largeImg }}>
                {recentVariation && (
                  <Image src={recentVariation.variation_img} alt="prodcut" />
                )}
              </ImageWrapper>
              <Box
                sx={{
                  ...gallerySm,
                }}
              >
                {variations?.map((variant, index) => (
                  <Gallery variant={variant} key={index} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <ProductContent />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Box
              sx={{
                margin: "5rem auto",
              }}
            >
              <Tabs />
            </Box>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Details;
