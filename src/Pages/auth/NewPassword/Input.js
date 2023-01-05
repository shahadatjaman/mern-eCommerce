import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";

const Input = ({
  name,
  value,
  handleChange,
  handleFocus,
  handleBlur,
  error,
  palceHolder,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl sx={{ marginTop: 3, width: "100%" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">
        {palceHolder}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        name={name}
        error={error}
        onChange={handleChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      <Typography mt={1} color={"red"}>
        {error}
      </Typography>
    </FormControl>
  );
};

export default Input;
