import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { Label } from "./Styles";

const OpenSelect = ({ handleChange, value, values, name }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box my={4}>
      <Box sx={{ marginBottom: 2 }}>
        <Label>What change would you like to make?</Label>
      </Box>

      <FormControl sx={{ minWidth: "100%" }}>
        <InputLabel
          sx={{ background: "#fff" }}
          id="demo-controlled-open-select-label"
        >
          Set a new price
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          name={name}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="none">
            <em>Select a amount type</em>
          </MenuItem>
          {values?.map((val, key) => (
            <MenuItem key={key} value={val.type}>
              {val.name}
            </MenuItem>
          ))}

          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default OpenSelect;
