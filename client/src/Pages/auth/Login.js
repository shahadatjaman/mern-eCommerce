import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import Input from "../../Components/Shared/Form/Input";
import { Checkmark, Error, FormWrape, Label, P, ShowPassword } from "./Styles";

import Form from "../../Components/Shared/Form/Form";
import { login } from "../../feature/reducer/user/auth";
import Or from "./Or";
import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [isValidForm, setIsValidForm] = useState(false);
  const [type, setType] = useState("password");

  const { errorToLogin } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // Check if form is fullfieled
  useEffect(() => {
    if (values.email && values.password) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [isValidForm, values]);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        pathOne: "auth",
        pathTwo: "login",
        method: "post",
        values,
        navigate,
      })
    );
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

  return (
    <FormWrape>
      <Form onSubmit={submitHandler}>
        <Input
          name="email"
          type="text"
          handleChange={changeHandler}
          value={values.email}
          placeHolder="Enter Email Address"
        />

        <Input
          name="password"
          type={type}
          handleChange={changeHandler}
          value={values.password}
          placeHolder="Enter Your Password"
        />
        <Error>{errorToLogin && errorToLogin}</Error>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ShowPassword>
            <FormControlLabel
              control={<Checkbox onChange={visibleHandler} />}
              label="Show Password"
            />
          </ShowPassword>
          <Box>
            <NavLink to={"/identify/forget_password"}>Forget Password</NavLink>
          </Box>
        </Box>

        <Button variant="contained" type="submit" disabled={!isValidForm}>
          Login
        </Button>
      </Form>
      <Or />
    </FormWrape>
  );
};

export default Login;
