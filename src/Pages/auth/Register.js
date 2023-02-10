import React, { useState } from "react";
import { useSelector } from "react-redux";
import Input from "../../Components/Shared/Form/Input";
import { Error, FormWrape, ShowPassword } from "./Styles";

import Form from "../../Components/Shared/Form/Form";
import Or from "./Or";
import { useValidator } from "../../utils/userValidator";

import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { register } from "../../feature/reducer/user/auth";
import { BiX } from "react-icons/bi";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { addVendorProperty } from "../../feature/reducer/user";

const Register = () => {
  const [isVendor, setIsVendor] = useState(false);

  const { userInit } = useSelector((state) => state.user);
  const { errors } = useSelector((state) => state.auth);

  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const { formState, handleChange, handleFocus, handleBlur, isValidForm } =
    useForm({
      init: userInit,
      validate: useValidator,
    });

  const dispatch = useDispatch();

  const vendorHandler = (e) => {
    setIsVendor(e.target.checked);
    dispatch(addVendorProperty({ isVendor: e.target.checked }));
  };

  // password visibility
  const visibleHandler = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    if (value) {
      setType("text");
    } else {
      setType("password");
    }
  };

  const { firstName, lastName, email, password } = formState;

  const submitForm = (e) => {
    e.preventDefault();

    const commonPath = { pathOne: "auth", pathTwo: "register", method: "post" };

    const commonValue = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    if (isVendor) {
      dispatch(
        register({
          ...commonPath,
          values: {
            ...commonValue,
            vendorName: formState.vendorName.value,
            role: "vendor",
          },
          navigate,
        })
      );
    } else {
      dispatch(
        register({
          ...commonPath,
          values: {
            ...commonValue,
          },
          navigate,
        })
      );
    }
  };

  return (
    <FormWrape>
      <Box>
        <FormGroup>
          <FormControlLabel
            control={<Switch onChange={vendorHandler} />}
            label="I'm a Vendor"
          />
        </FormGroup>
      </Box>

      {errors && (
        <resourcesError>
          {errors.email && (
            <Error>
              <ErrorOutlineIcon /> {`${errors.email.msg}`}
            </Error>
          )}
        </resourcesError>
      )}

      <Form onSubmit={submitForm}>
        {isVendor && formState.vendorName && (
          <Input
            name="vendorName"
            type="text"
            placeHolder="Vendor Name"
            value={formState.vendorName.value}
            error={formState.vendorName.error}
            handleChange={handleChange}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
        )}

        <Input
          name="firstName"
          type="text"
          placeHolder="First Name"
          value={firstName.value}
          error={firstName.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />
        <Input
          name="lastName"
          type="text"
          placeHolder="Last Name"
          value={lastName.value}
          error={lastName.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />

        <Input
          name="email"
          type="email"
          placeHolder="Email"
          value={email.value}
          error={email.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />

        <Input
          name="password"
          type={type}
          placeHolder="Password"
          value={password.value}
          error={password.error}
          handleChange={handleChange}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />

        <ShowPassword>
          <FormControlLabel
            control={<Checkbox onChange={visibleHandler} />}
            label="Show Password"
          />
        </ShowPassword>

        <Button
          type="submit"
          variant="contained"
          disabled={
            !isValidForm || !password.value || !email.value || !lastName.value
          }
        >
          Register
        </Button>
      </Form>
      <Or />
    </FormWrape>
  );
};

export default Register;
