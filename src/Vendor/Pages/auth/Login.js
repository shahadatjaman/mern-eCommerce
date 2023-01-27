import { useState } from "react";

import Input from "../../Shared/Form/Input";
import {
  Checkmark,
  Error,
  FormWrape,
  H4,
  Label,
  P,
  ShowPassword,
} from "./Styles";
import { Button, Typography } from "@mui/material";

import Form from "../../Shared/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../feature/reducer/user/";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const init = {
  email: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState({ ...init });
  const [type, setType] = useState("password");
  const [isValid, setIsValid] = useState(false);

  const { error } = useSelector((state) => state.user);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      login({
        pathOne: "admin",
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

  useEffect(() => {
    if (values.email && values.password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [values]);

  return (
    <FormWrape>
      <Typography variant="h6" textAlign={"center"} my={3}>
        Login As Admin
      </Typography>
      {error && <Error>{error.email?.msg}</Error>}
      {error && <Error>{error.password?.msg}</Error>}

      <Form onSubmit={submitHandler}>
        <Input
          name="email"
          type="text"
          handleChange={changeHandler}
          value={values.username}
          placeHolder="Your Eamil"
          // error={errors.username}
        />

        <Input
          name="password"
          type={type}
          handleChange={changeHandler}
          value={values.password}
          placeHolder="Password"
          // error={errors.password}
        />

        <ShowPassword>
          <Checkmark type="checkbox" onChange={visibleHandler} />
          <Label>Show Password</Label>
        </ShowPassword>
        <Button type="submit" variant="contained" disabled={!isValid}>
          Login
        </Button>
      </Form>
      {/* <Or /> */}
    </FormWrape>
  );
};

export default Login;
