import { LoadingButton } from "@mui/lab";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUpdatedUser,
  updateUser,
} from "../../../../../feature/reducer/user";
import { useForm } from "../../../../../hooks/useForm";
import { useWindowWidth } from "../../../../../hooks/userWindowWidth";
import { validation } from "./userValidation";
const UpdateForm = () => {
  const { user, loadingUpdatedUser } = useSelector((state) => state.user);

  const isSmall = useWindowWidth({ width: 500 });

  const dispatch = useDispatch();

  const { formState, handleChange, handleBlur, handleFocus, isValidForm } =
    useForm({
      init: user,
      validate: validation,
    });

  const { firstName, lastName, email } = formState;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        pathOne: "auth",
        pathTwo: "update_user",
        method: "post",
        values: {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        },
      })
    );
    dispatch(
      addUpdatedUser({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
      })
    );
  };

  return (
    <Box onSubmit={submitHandler} component={"form"}>
      <FormControl
        sx={{
          width: isSmall ? "100%" : "50%",
          mb: isSmall ? 1 : 0,
        }}
      >
        <Typography variant="body2" fontWeight="500" mb={1}>
          First Name
        </Typography>
        <TextField
          id="demo-helper-text-misaligned"
          name="firstName"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={firstName.value}
          error={firstName.error}
          label={firstName.error ? firstName.error : "Name"}
        />
      </FormControl>
      <FormControl
        sx={{
          ml: isSmall ? 0 : 4,
          width: isSmall ? "100%" : "40%",
          mb: isSmall ? 1 : 0,
        }}
      >
        <Typography variant="body2" fontWeight="500" mb={1}>
          Last Name
        </Typography>
        <TextField
          id="demo-helper-text-misaligned"
          name="lastName"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={lastName.value}
          error={lastName.error}
          label={lastName.error ? lastName.error : "Name"}
        />
      </FormControl>
      <Box sx={{ width: "100%", my: 2 }}>
        <FormControl
          sx={{
            width: isSmall ? "100%" : "50%",
            mb: isSmall ? 1 : 0,
          }}
        >
          <Typography variant="body2" fontWeight="500" mb={1}>
            Email address
          </Typography>
          <TextField
            id="demo-helper-text-misaligned"
            name="email"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={email.value}
            error={email.error}
            label={email.error ? email.error : "Email"}
          />
        </FormControl>
        <FormControl
          sx={{
            ml: isSmall ? 0 : 4,
            width: isSmall ? "100%" : "40%",
            mb: isSmall ? 1 : 0,
          }}
        >
          <Typography variant="body2" fontWeight="500" mb={1}>
            Add Phone Number
          </Typography>
          <TextField disabled id="demo-helper-text-misaligned" label="Phone" />
        </FormControl>
      </Box>
      <Box>
        {loadingUpdatedUser ? (
          <LoadingButton
            color="secondary"
            loading={true}
            loadingPosition="start"
            variant="contained"
          >
            <span>Save</span>
          </LoadingButton>
        ) : (
          <Button disabled={!isValidForm} variant="contained" type={"submit"}>
            Save Changes
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default UpdateForm;
