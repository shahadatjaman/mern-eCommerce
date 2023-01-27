import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function InputAdornments({
  value,
  handleChange,
  name,
  type,
  isDisabled,
}) {
  return (
    <Box my={4} sx={{ display: "flex", flexWrap: "wrap" }}>
      <Box mt={4}>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <OutlinedInput
            disabled={isDisabled}
            name={name}
            type={type}
            onChange={handleChange}
            value={type === "number" ? Number(value) * 1 : type}
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">৳ 0</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
}
