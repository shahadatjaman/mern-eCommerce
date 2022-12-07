import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { ChangePasswordWrapper, H5 } from "./Styles";

export const ChangePassword = () => {
  return (
    <ChangePasswordWrapper>
      <H5>Change your password</H5>
      <Box
        component="form"
        sx={{
          marginTop: 1,
          "& .MuiTextField-root": { m: 1, width: "100%", background: "white" },
        }}
        noValidate
      >
        <TextField
          id="filled-password-input"
          label="Old Password"
          type="text"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="New Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Box
          sx={{
            marginTop: 1,
          }}
        ></Box>
        <Button variant="contained">Change</Button>
      </Box>
    </ChangePasswordWrapper>
  );
};
