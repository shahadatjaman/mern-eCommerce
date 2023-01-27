import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";

const Input = ({ handleChange, value, name, type, label = "Value" }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel
          sx={{ background: "#fff", fontSize: 20 }}
          id="demo-simple-select-standard-label"
        >
          {name}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-weight"
          type={type}
          value={value}
          name={name}
          onChange={handleChange}
          endAdornment={<InputAdornment position="end">{label}</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </Box>
  );
};

export default Input;
