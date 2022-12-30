import React from "react";

import { useDispatch } from "react-redux";
import { changePassword } from "../../../../../feature/reducer/user/auth";

import { passwordVlidation } from "../../../../../utils/passwordValidation";
import { ChangePasswordWrapper } from "../Styles";

import { useForm } from "../../../../../hooks/useForm";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const init = {
  password: "",
  new_password: "",
};

export const ChangePassword = ({ closeHandler, closeModal }) => {
  const {
    formState,
    handleChange,
    handleFocus,
    handleBlur,
    clear,
    isValidForm,
  } = useForm({ init, validate: passwordVlidation });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    const { password, new_password } = formState;

    if (password.value && new_password.value) {
      dispatch(
        changePassword({
          pathOne: "auth",
          pathTwo: "change_password",
          method: "post",
          navigate,
          values: {
            password: formState.password.value,
            new_password: formState.new_password.value,
          },
        })
      );
    }
  };

  return (
    <ChangePasswordWrapper>
      <Form
        formState={formState}
        submitHandler={submitHandler}
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        clear={clear}
        isValidForm={isValidForm}
        closeModal={closeModal}
      />
    </ChangePasswordWrapper>
  );
};
