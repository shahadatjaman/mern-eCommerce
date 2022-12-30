import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  checkVeriCodeIsValid,
  clearMsg,
  findAccount,
  verifyCode,
} from "../../feature/reducer/user/auth";
import Layout from "../Layout";
import Counter from "./Counter";
import { Error, ForgetPasswordWrapper, Form, Span } from "./Styles";

const SendCode = () => {
  const [value, setValue] = useState("");
  const { email } = useParams();

  const { msg, isValidCode, validTime } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMsg());
  }, [dispatch]);

  const canelHandler = () => {
    navigate("/login");
  };

  // Check if verification code is valid or not
  useEffect(() => {
    dispatch(
      checkVeriCodeIsValid({
        pathOne: "auth",
        pathTwo: "checkvalidity",
        _id: email,
        method: "get",
      })
    );
  }, [dispatch, email]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      dispatch(
        verifyCode({
          pathOne: "auth",
          pathTwo: "verifycode",
          _id: email,
          method: "post",
          values: { code: value },
          navigate,
        })
      );
    }
  };

  // Resend code
  const resendCode = () => {
    if (email.trim().length > 0) {
      dispatch(
        findAccount({
          pathOne: "auth",
          pathTwo: "forget",
          method: "get",
          _id: email,
        })
      );
    }
  };

  return (
    <Layout>
      <ForgetPasswordWrapper>
        <Typography variant="h5" fontWeight={600}>
          Enter security code
        </Typography>
        <Box mt={1}>
          <Typography variant="body1">
            Please check your Email for a text message with your code. Your code
            is 10 characters in length.
          </Typography>
          <Typography display={"block"}>
            We sent your code to: <Span>{email}</Span>
          </Typography>
          {isValidCode && <Counter validTime={validTime} />}

          <Box sx={{ marginTop: 2 }}>
            <Form onSubmit={submitHandler}>
              <FormControl variant="standard" fullWidth>
                <TextField
                  error={msg ? msg : ""}
                  id="outlined-error"
                  fullWidth
                  type={"text"}
                  label={"Enter code"}
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </FormControl>
              {msg && <Error style={{ marginTop: "4px" }}>{msg}</Error>}

              <Box
                mt={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Button onClick={resendCode} disabled={isValidCode}>
                    Resend code
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{ marginRight: 1 }}
                    type="submit"
                  >
                    Cuntinue
                  </Button>
                  <Button variant="outlined" onClick={canelHandler}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            </Form>
          </Box>
        </Box>
      </ForgetPasswordWrapper>
    </Layout>
  );
};

export default React.memo(SendCode);
