import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../../../../hooks/useForm";
import { useWindowWidth } from "../../../../../hooks/userWindowWidth";
import { validation } from "./userValidation";

const Form = () => {
  const { user } = useSelector((state) => state.user);

  const windowWidth = useWindowWidth({ width: 500 });

  const { formState, handleChange, handleBlur, handleFocus, isValidForm } =
    useForm({
      init: { ...user },
      validate: validation,
    });

  const { firstName, lastName, email } = formState;

  return (
    <Box component={"form"}>
      <FormControl
        sx={{ width: windowWidth ? "100%" : "50%", mb: windowWidth ? 2 : 0 }}
      >
        <Typography variant="body2" fontWeight="500" mb={1}>
          Full Name
        </Typography>
        <TextField
          id="demo-helper-text-misaligned"
          label={firstName.error ? firstName.error : "Name"}
          error={firstName.error}
          name="firstName"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={firstName.value}
        />
      </FormControl>
      <FormControl
        sx={{
          marginLeft: windowWidth ? 0 : 4,
          width: windowWidth ? "100%" : "40%",
          mb: windowWidth ? 2 : 0,
        }}
      >
        <Typography variant="body2" fontWeight="500" mb={1}>
          Last Name
        </Typography>
        <TextField
          id="demo-helper-text-misaligned"
          label={lastName.error ? lastName.error : "Name"}
          error={lastName.error}
          name="lastName"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={lastName.value}
        />
      </FormControl>
      <Box sx={{ width: "100%", my: 2 }}>
        <FormControl
          sx={{ width: windowWidth ? "100%" : "50%", mb: windowWidth ? 2 : 0 }}
        >
          <Typography variant="body2" fontWeight="500" mb={1}>
            Email address
          </Typography>
          <TextField
            id="demo-helper-text-misaligned"
            label={email.error ? email.error : "Email"}
            error={email.error}
            name="email"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={email.value}
          />
        </FormControl>
        <FormControl
          sx={{
            width: windowWidth ? "100%" : "40%",
            marginLeft: windowWidth ? 0 : 4,
            mb: windowWidth ? 2 : 0,
          }}
        >
          <Typography variant="body2" fontWeight="500" mb={1}>
            Add Phone Number
          </Typography>
          <TextField disabled id="demo-helper-text-misaligned" label="Phone" />
        </FormControl>
      </Box>
      <Box>
        <Button variant="contained" disabled={!isValidForm}>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
