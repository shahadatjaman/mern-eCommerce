import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import { getUserAddress } from "../../feature/reducer/user";
import Layout from "../Layout";
import Tab from "./Tab/Tab";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import Billing from "./Billing";

import Order from "./Order";

const Checkout = () => {
  const { isLoading, userAddress } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(
  //     getUserAddress({
  //       pathOne: "auth",
  //       pathTwo: "getuseraddress",
  //       method: "get",
  //     })
  //   );
  // }, [dispatch]);

  return (
    !isLoading && (
      <Layout footer={false}>
        <Container maxWidth="xl">
          <Box sx={{ flexGrow: 1 }} my={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={8} md={7} xxs={12} sm={12}>
                <Billing userAddress={userAddress} />
              </Grid>
              <Grid item xs={12} xl={4} md={5} xxs={12} sm={12}>
                <Order />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    )
  );
};

export default Checkout;
