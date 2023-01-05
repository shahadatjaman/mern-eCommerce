import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { H5 } from "../Styles";
import { Wrapper } from "./Styles";

const Color = () => {
  return (
    <Wrapper>
      <H5>Color</H5>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="White" />
      </FormGroup>
    </Wrapper>
  );
};

export default Color;
