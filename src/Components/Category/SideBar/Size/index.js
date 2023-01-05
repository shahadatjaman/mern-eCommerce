import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { H5 } from "../Styles";
import { Wrapper } from "./Styles";

const Size = () => {
  return (
    <Wrapper>
      <H5>Size</H5>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="XL" />
      </FormGroup>
    </Wrapper>
  );
};

export default Size;
