import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../../../../feature/reducer/user/auth";
import Input from "../../../Shared/Form/Input";
import SaveIcon from "@mui/icons-material/Save";
import { Error } from "../../../Shared/Styles/styles";
import { LoadingButton } from "@mui/lab";

const DeleteAccount = () => {
  const { user, msg, isLoading } = useSelector((state) => state.auth);

  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(
        deleteAccount({
          pathOne: "auth",
          pathTwo: "delete_user_account",
          method: "post",
          values: { username: value },
          navigate,
        })
      );
    }
  };

  return (
    <Box component={"form"} onSubmit={submitHandler}>
      <Typography variant="body1">
        This action cannot be undone. This will permanently delete your account
      </Typography>
      <Typography variant="body1" display={"block"} fontWeight={400} mb={1}>
        Please type <Typography fontWeight={500}>{user.username}</Typography> to
        confirm.
      </Typography>
      <Box>
        {msg && <Error>{msg}</Error>}

        <Input type="text" handleChange={handleChange} value={value} />
      </Box>
      {isLoading ? (
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          I understand the consequences, delete this account.
        </LoadingButton>
      ) : (
        <Button
          variant="outlined"
          color="error"
          disabled={value !== user.username}
          fullWidth
          type="submit"
        >
          I understand the consequences, delete this account.
        </Button>
      )}
    </Box>
  );
};

export default DeleteAccount;
