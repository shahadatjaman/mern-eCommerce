import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Brand from "./Brand";
import { brands } from "./data";
import { Wrapper } from "./Styles";

const TopBrand = () => {
  return (
    <Wrapper>
      <Container maxWidth={"xl"}>
        <Box sx={{ borderBottom: "1px solid #ddd", paddingBottom: 1 }}>
          <Typography variant="h6">Top Brands</Typography>
        </Box>
        <Box mt={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {brands.map((val, index) => (
              <Brand val={val} key={index} />
            ))}
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default TopBrand;
