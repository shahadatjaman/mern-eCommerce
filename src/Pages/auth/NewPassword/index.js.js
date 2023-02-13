import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkCreatePassUrl } from "../../../feature/reducer/user/auth";
import Layout from "../../Layout";
import Form from "./Form";
import { Wraaper } from "./Styles";
const CreateNewPassword = () => {
  const { new_pass_url, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      checkCreatePassUrl({
        pathOne: "auth",
        pathTwo: "isvalid_pass_url",
        method: "get",
      })
    );
  }, [dispatch]);

  const tryHandler = () => {
    navigate("/");
  };

  return (
    <Layout footer={false}>
      <Box>
        <Container maxWidth={"xl"}>
          {!loading && !new_pass_url && (
            <Wraaper>
              <Typography variant="h6">Invalid URL</Typography>
              <Typography variant="body1">
                The link you used is invalid. Please try again.
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                <Button onClick={tryHandler} variant={"contained"}>
                  Try again
                </Button>
              </Box>
            </Wraaper>
          )}

          {new_pass_url && (
            <Wraaper>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h5" fontWeight={600}>
                  Choose a new password
                </Typography>
                <Typography variant="body1">
                  Create a new password that is at least 8 characters long. A
                  strong password has a combination of letters, digits and
                  punctuation marks.
                </Typography>
              </Box>

              <Box>
                <Form />
              </Box>
            </Wraaper>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default CreateNewPassword;
