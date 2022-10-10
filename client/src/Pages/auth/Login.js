import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Input from "../../Components/Shared/Form/Input";
import { Checkmark, FormWrape, Label, P, ShowPassword } from "./Styles";
import Button from "../../Components/Shared/Form/Button";
import { useTheme } from "styled-components";
import Form from "../../Components/Shared/Form/Form";
import { login } from "../../feature/reducer/user";
import Or from "./Or";
import { useColor } from "../../utils";

const init = {
  username: "",
  password: "",
};

const Login = () => {
  const [values, setValues] = useState({ ...init });
  const [type, setType] = useState("password");

  const { errors } = useSelector((state) => state.user);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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

  const { gray, primary } = useColor();

  return (
    <FormWrape>
      <Form onSubmit={submitHandler}>
        <Input
          name="username"
          type="text"
          onChange={changeHandler}
          value={values.username}
          placeHolder="Username"
          // error={errors.username}
        />
        <Input
          name="password"
          type={type}
          onChange={changeHandler}
          value={values.password}
          placeHolder="Password"
          // error={errors.password}
        />

        <ShowPassword>
          <Checkmark type="checkbox" onChange={visibleHandler} />
          <Label>Show Password</Label>
        </ShowPassword>
        <Button
          activeColor={gray}
          hoverColor={primary}
          type="submit"
          text="Login"
        />
      </Form>
      <Or />
    </FormWrape>
  );
};

export default Login;
