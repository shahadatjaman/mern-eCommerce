import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Actions from "./Actions";
import Product from "../../Shared/Product/";
import { Wrapper } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductByCategory } from "../../../feature/reducer/product";
import ProductNotFound from "../../Shared/ProductNotFound/";

const Category = () => {
  const { filteredProducts, grid } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProductByCategory({
        pathOne: "vendor",
        pathTwo: "getproducts",
        method: "post",
        from: 0,
        to: 15,
      })
    );
  }, [dispatch]);

  return (
    <Wrapper>
      <Actions />
      <Box>
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            {filteredProducts?.length === 0 && <ProductNotFound />}
            <Grid container spacing={2}>
              {filteredProducts?.map((product, index) => (
                <Grid
                  key={index}
                  xl={12 / grid}
                  item
                  xs={8}
                  sx={{ transition: "0.5s" }}
                >
                  <Product product={product} />
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
