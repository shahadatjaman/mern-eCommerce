//<=== Hooks ====>
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

//<====  Redux Toolkit || Reducer functions   ====>
import { fetchProduct } from "../../feature/reducer/productDetails";

//<=== Components  ====>
import Layout from "../Layout";
import ProductContent from "../../Components/ProductDetails/ProductContent/productContent";

//<==== Styled Components  ====>
import { gallerySm, Image, imgBox, largeImg, SmallImg } from "./styles";
import ResourseNotFound from "../NotFound";

// <=== MUI  ====>
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import Tabs from "../../Components/ProductDetails/Review/Tabs";

const Details = () => {
  const { variations, product, isLoading } = useSelector(
    (state) => state.productDetails
  );

  const [activeVariation, setActiveVariation] = useState(null);

  // Get product id by params ===>
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct({ product_id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (variations) {
      setActiveVariation(variations[0].variation_img);
    }
  }, [variations]);

  if (!product && !isLoading) {
    return <ResourseNotFound />;
  }

  return (
    <Layout>
      <Box my={8}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ ...largeImg }}>
                {activeVariation && (
                  <Image src={activeVariation} alt="prodcut" />
                )}
              </Box>
              <Box
                sx={{
                  ...gallerySm,
                }}
              >
                {[1, 2, 2, 4].map((i, index) => (
                  <Box sx={{ ...imgBox }}>
                    <SmallImg
                      src={
                        "https://electro.madrasthemes.com/wp-content/uploads/2016/03/apptablet.png"
                      }
                      alt="product"
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={6}>
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
