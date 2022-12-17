import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectField = ({ name, value, handleChange, options }) => {
  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 200,
        background: "#fff",
        width: "400px !important",
      }}
    >
      <Select
        sx={{ height: 45 }}
        name={name}
        value={value}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">
          <em>All categories</em>
        </MenuItem>
        {options.map((val, index) => {
          return (
            val.category_name !== "All categories" && (
              <MenuItem key={index} value={val._id}>
                {val.category_name}
              </MenuItem>
            )
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectField;
