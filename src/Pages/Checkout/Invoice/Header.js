import { Grid, Typography } from "@mui/material";
import React from "react";
import { HeaderWrapper, Img, Logo, Text } from "./Styles";

let logo =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1674822152/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z-removebg-preview_vmbfes.png";

const Header = ({ address }) => {
  return (
    <HeaderWrapper>
      <Grid container spacing={2}>
        <Grid item xl={6} md={6} xs={6} sm={6}>
          {/* <Logo>
            <Img src={logo} alt={"logo"} />
          </Logo> */}
          <Typography fontWeight={"600"} variant="h4">
            BazaarHub
          </Typography>
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
