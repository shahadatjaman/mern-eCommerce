import * as React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Color, Error } from "./Styles";
import { InputLabel, OutlinedInput } from "@mui/material";

const MuiSelect = ({
  names,
  width,
  value,
  handleChange,
  placeHolder,
  label,
  name,
  isAdded,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: width }}>
      <InputLabel
        sx={{ background: "#fff", fontSize: 20 }}
        id="demo-simple-select-standard-label"
      >
        {label}
      </InputLabel>
      <Select
        id="demo-simple-select-standard"
        name={name}
        value={value}
        onChange={handleChange}
        input={<OutlinedInput />}
        inputProps={{ "aria-label": "Without label" }}
        disabled={isAdded}
      >
        <MenuItem disabled value="">
          <em>{placeHolder}</em>
        </MenuItem>
        {names?.map((val, index) => (
          <MenuItem key={index} value={val.value}>
            <Color bg={val.value} />
            {val.name}
          </MenuItem>
        ))}
      </Select>
      {isAdded && <Error>Color already added!</Error>}
    </FormControl>
  );
};

export default MuiSelect;
