import { Categoreis, Wrapper } from "./Styles";
import Loading from "../../Shared/Skeleton/Product/Product";

import Product from "../../Shared/Product/";
import FeatureProdcut from "./Features";
import Paginations from "../../Shared/Pagination/";

import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  addFilterdProducts,
  fetchProducts,
  getProductByCategory,
} from "../../../feature/reducer/product";

import { Box, Container, Grid } from "@mui/material";
import LabTabs from "./Tabs";
import OffierCounter from "./Timer";

import { useState } from "react";

const SpeOffer = () => {
  const [recentPage, setRecentPage] = useState(1);
  // const [paginatedProducts, setPaginatedProducts] = useState(null);

  const { products, featureProduct, isLoading } = useSelector(
    (state) => state.product
  );

  const [contentPerPage] = useState(15);

  // const isFluid = useWindowWidth({ width: 1400 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProducts({
        pathOne: "vendor",
        pathTwo: "getproducts",
        from: 0,
        to: 15,
        method: "post",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getProductByCategory({
        category_id: "638d7127c57c08cdc0b59c90",
        pathOne: "vendor",
        pathTwo: "getproducts",
        method: "post",
        from: 0,
        to: 3,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      const getPaginatedData = (() => {
        const startIndex = recentPage * contentPerPage - contentPerPage;
        const endIndex = startIndex + contentPerPage;
        return products.slice(startIndex, endIndex);
      })();

      dispatch(addFilterdProducts(getPaginatedData));
    }
  }, [contentPerPage, recentPage, products, dispatch]);

  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xl={3} xs={12} md={3}>
            <OffierCounter />
            {featureProduct?.map((item, index) => (
              <FeatureProdcut value={item} key={index} />
            ))}
          </Grid>
          <Grid item xl={9} xs={12} md={9}>
            <Categoreis>
              <LabTabs />
              <div className="items">
                <Grid container spacing={2}>
                  {products?.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      lg={12 / 5}
                      xs={12 / 2}
                      md={3}
                      sm={12}
                    >
                      {isLoading ? <Loading /> : <Product product={item} />}
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Categoreis>
          </Grid>
        </Grid>
        <Box sx={{ background: "#fff", marginTop: 2, padding: 1 }}>
          {products && (
            <Paginations
              data={products}
              contentPerPage={contentPerPage}
              buttonConst={3}
              siblingCount={1}
              setRecentPage={setRecentPage}
            />
          )}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default SpeOffer;
