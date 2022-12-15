import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import Category from "../../Components/Category/Main/";
import SideBar from "./SideBar/";

import { getProductByCategory } from "../../feature/reducer/product";

import { useEffect } from "react";
import { useWindowWidth } from "../../hooks/userWindowWidth";

const SideBarAndMain = () => {
  const dispatch = useDispatch();

  const { recentPriceRang, recentCategoryId, show } = useSelector(
    (state) => state.product
  );

  const isSmallDevice = useWindowWidth({ width: 1100 });

  useEffect(() => {
    const params = {
      pathOne: "vendor",
      pathTwo: "getproducts",
      method: "post",
      from: 0,
      to: show,
    };
    const reqbody = {
      maxPrice: recentPriceRang[1],
      minPrice: recentPriceRang[0],
    };

    dispatch(
      getProductByCategory(
        recentCategoryId
          ? {
              ...params,
              values: {
                ...reqbody,
                category_id: recentCategoryId,
              },
            }
          : {
              ...params,
              values: {
                ...reqbody,
              },
            }
      )
    );
  }, [dispatch, recentCategoryId, recentPriceRang, show]);

  return (
    <Box sx={{ paddingY: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {!isSmallDevice && (
            <Grid item xl={3} xs={6} md={3}>
              <SideBar />
            </Grid>
          )}

          <Grid item xl={9} xs={12} md={isSmallDevice ? 12 : 9} sm={12}>
            <Category />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SideBarAndMain;
