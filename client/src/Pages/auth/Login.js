import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Input from "../../Components/Shared/Form/Input";
import { Checkmark, Error, FormWrape, Label, P, ShowPassword } from "./Styles";

import { useTheme } from "styled-components";
import Form from "../../Components/Shared/Form/Form";
import { login } from "../../feature/reducer/user";
import Or from "./Or";
import { useColor } from "../../utils";
import { Button } from "@mui/material";

const init = {
  username: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [type, setType] = useState("password");

  const { errors } = useSelector((state) => state.user);

  const changeHandler = (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(values));
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
      <Error>{errors?.message}</Error>
      <Form onSubmit={submitHandler}>
        <Input
          name="username"
          type="text"
          handleChange={changeHandler}
          value={values.username}
          placeHolder="Username"
        />
        <Input
          name="password"
          type={type}
          handleChange={changeHandler}
          value={values.password}
          placeHolder="Password"
        />

        <ShowPassword>
          <Checkmark type="checkbox" onChange={visibleHandler} />
          <Label>Show Password</Label>
        </ShowPassword>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Form>
      <Or />
    </FormWrape>
  );
};

export default Login;
