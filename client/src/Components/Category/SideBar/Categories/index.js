import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { H5 } from "../Styles";
import { Wrapper } from "./Styles";

const Categories = () => {
  return (
    <Wrapper>
      <H5>Categories</H5>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="All Categories"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Fashion"
        />
      </FormGroup>
    </Wrapper>
  );
};

export default Categories;
