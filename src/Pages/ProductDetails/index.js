//<=== Hooks ====>
import { useEffect, useState } from "react";
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
import { callApi, getRecentVariation } from "../../utils";
import BreadCrumb from "../../Components/Shared/BreadCrumb";

import DetailsIcon from "@mui/icons-material/Details";
import Product from "../../Components/Shared/Product";
import { Typography } from "@mui/material";
import { getProductsByCategoryId } from "../../feature/reducer/getProducts";
import ProdcutImg from "./ProdcutImg";
import useScrollTop from "../../hooks/useScrollTop";
const Details = () => {
  const { products, loading } = useSelector((state) => state.getItems);

  const { variations, product, isLoading, recentVariation, recentColor } =
    useSelector((state) => state.productDetails);

  // Get product id by params ===>
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProduct({
        pathOne: "v1",
        pathTwo: "getproduct",
        method: "get",
        _id: id,
      })
    );
  }, [dispatch, id]);

  useEffect(() => {
    const newVariation = getRecentVariation(variations, recentColor);

    if (newVariation) {
      dispatch(addRecentVariation(newVariation));
    }
  }, [recentColor, variations, dispatch]);

  // Get related products
  useEffect(() => {
    if (product?.category_id) {
      dispatch(
        getProductsByCategoryId({ category_id: product.category_id, to: 5 })
      );
    }
  }, [product, dispatch]);

  if (!product && !isLoading) {
    return <ResourseNotFound />;
  }

  return (
    <Layout footer={true}>
      <BreadCrumb pathTwo={"Product"} IconTwo={DetailsIcon} />
      <Box my={8}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={12}>
              {recentVariation && (
                <ProdcutImg recentVariation={recentVariation.variation_img} />
              )}

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

          <Grid container spacing={2}>
            <Grid item xl={12} md={12} sm={12} xxs={12}>
              <Box my={2}>
                <Typography variant="h5">Related Products</Typography>
              </Box>
            </Grid>
            {!loading &&
              products?.map((product) => (
                <Grid item xl={12 / 5} lg={12 / 5} md={4} sm={6} xxs={12}>
                  <Product product={product} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Details;
