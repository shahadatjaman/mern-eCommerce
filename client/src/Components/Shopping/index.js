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
    <Layout>
      <Box my={8}>
        <Container maxWidth="xl">
          {carts.length === 0 ? (
            <EmptyCart />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <BasicTable />
              </Grid>
              <Grid item xs={4}>
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
