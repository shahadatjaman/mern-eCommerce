import { useSelector } from "react-redux";

import Layout from "../../Pages/Layout";

import GrandTotal from "./GrandTotal";
import Container from "@mui/material/Container";
import { Box, Grid, Typography } from "@mui/material";
import BasicTable from "./Tabel";
import EmptyCart from "./EmptyCart";

const Shopping = () => {
  const { carts } = useSelector((state) => state.cart);

  return (
    <Layout footer={true}>
      <Box my={8}>
        <Container maxWidth="xl">
          {carts.length === 0 ? (
            <EmptyCart />
          ) : (
            <Grid container spacing={2}>
              <Grid item xl={12} md={12} lg={12} sm={12} xxs={12}>
                <Typography variant={"h4"} fontWeight="600">
                  Shopping Cart
                </Typography>
              </Grid>
              <Grid item xl={8} lg={8} md={8} sm={12} xxs={12}>
                <BasicTable />
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={12} xxs={12}>
                <GrandTotal />
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default Shopping;
