import { LoadingButton } from "@mui/lab";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewPassword } from "../../../feature/reducer/user/auth";
import { useForm } from "../../../hooks/useForm";
import { newPassValid } from "../../../utils/validation/new_pass_validation";
import Input from "./Input";
import SaveIcon from "@mui/icons-material/Save";

const init = {
  new_pass: "",
  confirm_pass: "",
};

const Form = () => {
  const { loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { formState, handleBlur, handleChange, handleFocus, isValidForm } =
    useForm({ init, validate: newPassValid });

  const { new_pass, confirm_pass } = formState;

  const skipHandler = () => {
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createNewPassword({
        pathOne: "auth",
        pathTwo: "new_password",
        values: {
          new_password: new_pass.value,
        },
        method: "post",
        navigate,
      })
    );
  };

  return (
    <Box component={"form"} onSubmit={submitHandler}>
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

      <Box
        mt={2}
        sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        {loading ? (
          <LoadingButton
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            Saving
          </LoadingButton>
        ) : (
          <Button
            disabled={!isValidForm && !loading}
            variant="contained"
            sx={{ marginRight: 1 }}
            type={"submit"}
          >
            Save
          </Button>
        )}

        <Button onClick={skipHandler} variant="outlined">
          Skip
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
