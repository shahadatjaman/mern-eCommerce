import React, { useEffect, useState } from "react";
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
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Register = () => {
  const { errors } = useSelector((state) => state.auth);

  const [type, setType] = useState("password");

  const navigate = useNavigate();

  const { formState, handleChange, handleFocus, handleBlur, isValidForm } =
    useForm({
      init: initial,
      validate: useValidator,
    });

  const dispatch = useDispatch();
  // const cb = ({ values, hasError }) => {
  //   dispatch(register(values));
  // };

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
    dispatch(
      register({
        pathOne: "auth",
        pathTwo: "register",
        method: "post",
        values: {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
        },
        navigate,
      })
    );
  };

  return (
    <FormWrape>
      {errors && (
        <resourcesError>
          {errors.email && (
            <Error>
              <BiX /> {`${errors.email.msg}`}
            </Error>
          )}
        </resourcesError>
      )}

      <Form onSubmit={submitForm}>
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
