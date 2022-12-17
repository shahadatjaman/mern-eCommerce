import { Grid } from "@mui/material";
import React from "react";
import { HeaderWrapper, Logo, Text } from "./Styles";

const Header = ({ address }) => {
  return (
    <HeaderWrapper style={{ background: "#1976d2" }}>
      <Grid container spacing={2}>
        <Grid item xl={6} md={6} xs={6} sm={6}>
          <Logo>
            <Text font={40}>Xpart</Text>
            <Text font={30}>Invoice</Text>
          </Logo>
        </Grid>
        <Grid item xl={6} md={6} x={6} sm={6} sx={{ textAlign: "right" }}>
          <Text font={20}>{address.company_name}</Text>

          <Text font={15} mt={1}>
            {address.town_city}
          </Text>
          <Text font={15} mt={0.5}>
            {address.country}
          </Text>
          <Text font={15} mt={0.5}>
            {address.postcode_zip}
          </Text>
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
};

export default Header;
