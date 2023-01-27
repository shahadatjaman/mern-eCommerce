import { Box, Grid } from "@mui/material";
import React from "react";
import CustomerOrders from "../../../Vendor/Components/CustomerOrders/index";
// import Orders from "../../Components/Orders";

const MyOrders = () => {
  return (
    <Box p={4}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* <Orders /> */}
          <CustomerOrders />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyOrders;
