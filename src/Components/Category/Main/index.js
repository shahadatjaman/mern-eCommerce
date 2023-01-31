import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import Actions from "./Actions";
import Product from "../../Shared/Product/";
import { Wrapper } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import ProductNotFound from "../../Shared/ProductNotFound/";
import Loading from "../../Shared/Skeleton/Product/Product";
import { getProducts } from "../../../feature/reducer/getProducts/";
import { placeHolder } from "../../Shared/placeholder";

const Category = () => {
  const dispatch = useDispatch();

  const { products, loading, grid } = useSelector((state) => state.getItems);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Actions />
      <Box sx={{ marginTop: "1rem" }}>
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }}>
            {!loading && !products && <ProductNotFound />}
            <Grid container spacing={2}>
              {loading &&
                placeHolder?.map((v, i) => {
                  return (
                    <Grid
                      key={i}
                      xl={12 / grid}
                      md={12 / grid}
                      item
                      xs={12}
                      sm={12}
                      xxs={12}
                      sx={{ transition: "0.5s" }}
                    >
                      <Loading />
                    </Grid>
                  );
                })}
              {products?.map((product, index) => (
                <Grid
                  key={index}
                  xl={12 / grid}
                  md={12 / grid}
                  item
                  xs={12}
                  sm={12}
                  xxs={12}
                  sx={{ transition: "0.5s" }}
                >
                  {loading ? <Loading /> : <Product product={product} />}
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
