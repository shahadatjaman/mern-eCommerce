import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { boxStyles, Wrapper } from "./Styles";
import CheckIcon from "@mui/icons-material/Check";
import Icon from "./IconMessage";
import OrderSummary from "./OrderSummary";
const OrderContent = () => {
  return (
    <Wrapper>
      <Box my={8} sx={{ overflow: "scroll" }}>
        <Container maxWidth={"xl"}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0}>
              <Grid item xl={2} md={2} xxs={0}></Grid>
              <Grid item xl={8} md={12} xxs={12}>
                <Box
                  sx={{
                    ...boxStyles,
                    borderRadius: 2,
                  }}
                >
                  <Icon />
                  <OrderSummary />
                </Box>
              </Grid>
              <Grid item xl={2} md={0} xxs={0}></Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default OrderContent;
