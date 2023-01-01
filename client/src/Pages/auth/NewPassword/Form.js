import { Password } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { newPassValid } from "../../../utils/validation/new_pass_validation";
import Input from "./Input";

const init = {
  new_pass: "",
  confirm_pass: "",
};

const Form = () => {
  const { formState, handleBlur, handleChange, handleFocus, isValidForm } =
    useForm({ init, validate: newPassValid });

  const { new_pass, confirm_pass } = formState;

  console.log(formState);
  return (
    <Box>
      <Input
        name={"new_pass"}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        value={new_pass.value}
        error={new_pass.error}
        palceHolder={"New Password"}
      />
      <Input
        name={"confirm_pass"}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleFocus={handleFocus}
        value={confirm_pass.value}
        error={confirm_pass.error}
        palceHolder={"Confirm Password"}
      />

      <Box mt={2}>
        <Button disabled={!isValidForm} variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
