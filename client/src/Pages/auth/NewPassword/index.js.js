import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../../Layout";
import Form from "./Form";
const CreateNewPassword = () => {
  return (
    <Layout footer={false}>
      <Box>
        <Container maxWidth={"xl"}>
          <Box
            sx={{
              width: 600,
              background: "#fff",
              margin: "4rem auto",
              padding: 2,
            }}
          >
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
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default CreateNewPassword;
