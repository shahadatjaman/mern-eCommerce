import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Action from "./action/Action";
import OrderTable from "./Tablee/Table";
import BasicTabs from "./Tabs";
import { text, title } from "./text";

const Orders = () => {
  return (
    <Box my={10}>
      <Typography variant="h4" fontWeight={500}>
        {title}
      </Typography>
      <Typography mt={2} color={"#707070"} maxWidth={1000}>
        {text}
      </Typography>

      <Container maxWidth={"xl"}>
        <Grid container spacing={"2"}>
          <Grid item xl={6}>
            <Box mt={4} mb={4} mx={2}>
              <BasicTabs />
            </Box>
          </Grid>
          <Grid item xl={6}>
            <Box>
              <Action />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        mt={2}
        sx={{
          background: "#fff",
          borderRadius: 2,
          paddingBottom: 2,
        }}
      >
        <Box px={3} mt={4}>
          {/* Order table */}
          <OrderTable />
        </Box>
      </Box>
    </Box>
  );
};

export default Orders;
