import { Box, Grid } from "@mui/material";
import React from "react";
import { BodyWrapper, Country, Text } from "./Styles";

import { useTimeFormat } from "../../../hooks/useTimeFormate";
import { useSelector } from "react-redux";

const Body = ({ address, order }) => {
  const { user } = useSelector((state) => state.auth);

  const date = useTimeFormat(order.createdAt);

  console.log(user);
  return (
    <BodyWrapper>
      <Grid container spacing={2}>
        <Grid item xl={6} md={6} x={6} sm={6}>
          <Box>
            <Text color="#000" font={15}>
              Bill to :
            </Text>
            <Text mt={0.5} color="#000" font={16}>
              Customer name : {user?.firstName}
            </Text>
            <Text mt={0.5} color="#000" font={16}>
              {address.company_name}
            </Text>
            <Text mt={0.5} color="#000" font={14}>
              {address.state_country}, <Country>{address.country}</Country>
            </Text>

            <Text mt={0.5} color="#000" font={14}>
              {address.street_address}
            </Text>
          </Box>
        </Grid>
        <Grid item xl={6} md={6} x={6} sm={6} sx={{ textAlign: "right" }}>
          <Text font={14} color="#000" fontWeigth={700}>
            INVOICE #
          </Text>
          <Text mt={0.5} font={14} color="#000">
            4545454-DFDFD
          </Text>
          <Text mt={0.5} font={14} color="#000" fontWeigth={700}>
            DATE
          </Text>
          <Text mt={0.5} font={14} color="#000">
            {date}
          </Text>
        </Grid>
      </Grid>
    </BodyWrapper>
  );
};

export default Body;
