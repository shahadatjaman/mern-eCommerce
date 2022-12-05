import React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

const MuiInput = ({ text }) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
        <FormHelperText id="outlined-weight-helper-text">{text}</FormHelperText>
        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
      </FormControl>
    </Box>
  );
};

export default MuiInput;
