import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Actions from "./Actions";
import Product from "../../Shared/Product/";
import { Wrapper } from "./Styles";
import { useSelector } from "react-redux";
import ProductNotFound from "../../Shared/ProductNotFound/";
import Loading from "../../Shared/Skeleton/Product/Product";

const Category = () => {
  const { filteredProducts, grid, isLoading } = useSelector(
    (state) => state.product
  );

  return (
    <Wrapper>
      <Actions />
      <Box sx={{ marginTop: "1rem" }}>
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            {filteredProducts?.length === 0 && <ProductNotFound />}
            <Grid container spacing={2}>
              {filteredProducts?.map((product, index) => (
                <Grid
                  key={index}
                  xl={12 / grid}
                  md={12 / grid}
                  item
                  xs={6}
                  sm={12}
                  sx={{ transition: "0.5s" }}
                >
                  {isLoading ? <Loading /> : <Product product={product} />}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default Category;
