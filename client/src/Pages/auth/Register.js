import React from "react";
import Input from "../../Components/Shared/Form/Input";
import { FormWrape } from "./Styles";
import Button from "../../Components/Shared/Form/Button";
import Form from "../../Components/Shared/Form/Form";
import Or from "./Or";
import { userValidator } from "../../utils/userValidator";
import { useColor } from "../../utils";
import { useForm } from "../../hooks/useForm";

const initial = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const {
    formState,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    isValid,
  } = useForm({
    init: initial,
    validate: userValidator,
  });

  const { primary, gray } = useColor();

  const cb = ({ values, hasError }) => {};

  const { username, email, password } = formState;

  return (
    <FormWrape>
      <Form onSubmit={(e) => handleSubmit(e, cb)}>
        <Input
          name="username"
          placeHolder="Username"
          value={username.value}
          error={username.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Input
          name="email"
          placeHolder="Email"
          value={email.value}
          error={email.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Input
          name="password"
          placeHolder="Password"
          value={password.value}
          error={password.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Button
          activeColor={gray}
          hoverColor={primary}
          type="submit"
          text="Register"
          isDisabled={isValid}
        />
      </Form>
      <Or />
    </FormWrape>
  );
};

export default Register;
