import { Grid } from "@mui/material";
import React from "react";
import MuiInput from "../../../shared/input";

const UserAddress = () => {
  return (
    <Grid my={5} container spacing={2}>
      <Grid item xs={6}>
        <MuiInput text="Company Name" />
      </Grid>
      <Grid item xs={6}>
        <MuiInput text="Company Name" />
      </Grid>
    </Grid>
  );
};

export default UserAddress;
