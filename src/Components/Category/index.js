import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import Category from "../../Components/Category/Main/";
import SideBar from "./SideBar/";

import { getProductByCategory } from "../../feature/reducer/product";

import { useEffect } from "react";
import { useWindowWidth } from "../../hooks/userWindowWidth";
import Drawer from "../Shared/Drawer/";
import { useState } from "react";

import CategoryIcon from "@mui/icons-material/Category";
import { FilterCat, Span } from "./Styles";

const SideBarAndMain = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const dispatch = useDispatch();

  const { recentPriceRang, recentCategoryId, show } = useSelector(
    (state) => state.product
  );

  const isSmallDevice = useWindowWidth({ width: 1100 });

  useEffect(() => {
    const params = {
      pathOne: "v1",
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

  const openHandler = () => {
    setIsOpenNav(true);
  };
  const closeHandler = () => {
    setIsOpenNav(false);
  };

  return (
    <Box sx={{ paddingY: 5 }}>
      <Container maxWidth="xl">
        {isSmallDevice && (
          <Grid item xl={12} sx={{ display: "flex" }}>
            <FilterCat onClick={openHandler}>
              <CategoryIcon />
              <Span>Filter</Span>
            </FilterCat>
          </Grid>
        )}

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
      <Drawer isOpenNav={isOpenNav} closeHandler={closeHandler}>
        <SideBar />
      </Drawer>
    </Box>
  );
};

export default SideBarAndMain;
