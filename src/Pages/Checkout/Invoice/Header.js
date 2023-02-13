import { Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderWrapper, Text } from "./Styles";

const Header = ({ address }) => {
  return (
    <HeaderWrapper>
      <Grid container spacing={2}>
        <Grid item xl={6} md={6} xxs={12} sm={12}>
          {/* <Logo>
            <Img src={logo} alt={"logo"} />
          </Logo> */}
          <Typography fontWeight={"600"} variant="h4">
            BazaarHub
          </Typography>
        </Grid>
        <Grid item xl={6} md={6} xxs={12} sm={12} sx={{ textAlign: "right" }}>
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
