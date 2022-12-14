import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Category from "../../Components/Category/Main";
import SideBar from "../../Components/Category/SideBar";
import Layout from "../Layout";

const Categories = () => {
  return (
    <Layout>
      <Box sx={{ paddingY: 5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xl={3} xs={6} md={8}>
              <SideBar />
            </Grid>
            <Grid item xl={9} xs={6} md={4}>
              <Category />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Categories;
