import { useSelector } from "react-redux";

import Layout from "../../Pages/Layout";

import GrandTotal from "./GrandTotal";
import Container from "@mui/material/Container";
import { Box, Grid } from "@mui/material";
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
              <Grid item xs={12} xl={8} md={8} sm={12}>
                <BasicTable />
              </Grid>
              <Grid item xs={12} xl={4} md={4} sm={12}>
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
