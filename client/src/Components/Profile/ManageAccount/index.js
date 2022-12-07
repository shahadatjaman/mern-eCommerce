import React from "react";
import { Wrapper } from "./Styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LeftSide from "./Info";

const ManageAccount = () => {
  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LeftSide />
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};

export default ManageAccount;
