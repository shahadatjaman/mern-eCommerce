import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { boxStyles, Wrapper } from "./Styles";
import CheckIcon from "@mui/icons-material/Check";
import Icon from "./IconMessage";
import OrderSummary from "./OrderSummary";
const OrderContent = () => {
  return (
    <Wrapper>
      <Box my={8}>
        <Container maxWidth={"xl"}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={5}>
              <Grid item xl={12} md={12}>
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
            </Grid>
          </Box>
        </Container>
      </Box>
    </Wrapper>
  );
};

export default OrderContent;
