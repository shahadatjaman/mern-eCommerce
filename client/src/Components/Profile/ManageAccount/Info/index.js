import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import { ChangePassword } from "./ChangePassword";

import { Wrapper } from "./Styles";

import Modal from "../../../Shared/Modal/";

import { closeModal, openModal } from "../../../../feature/reducer/user/auth";
import DeleteAccount from "./DeleteAccount";

const LeftSide = () => {
  const { modalIsOpen, modalName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal());
  };
  // Are you absolutely sure?
  return (
    <Wrapper>
      <Typography variant="h5" fontWeight="500" my={3}>
        Profile Setting
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl sx={{ width: "50%" }}>
            <Typography variant="body2" fontWeight="500" mb={1}>
              Full Name
            </Typography>
            <TextField id="demo-helper-text-misaligned" label="Name" />
          </FormControl>
          <FormControl sx={{ marginLeft: 4, width: "40%" }}>
            <Typography variant="body2" fontWeight="500" mb={1}>
              Last Name
            </Typography>
            <TextField disabled id="demo-helper-text-misaligned" label="Name" />
          </FormControl>
          <Box sx={{ width: "100%", my: 2 }}>
            <FormControl sx={{ width: "50%" }}>
              <Typography variant="body2" fontWeight="500" mb={1}>
                Email address
              </Typography>
              <TextField id="demo-helper-text-misaligned" label="Email" />
            </FormControl>
            <FormControl sx={{ width: "40%", marginLeft: 4 }}>
              <Typography variant="body2" fontWeight="500" mb={1}>
                Add Phone Number
              </Typography>
              <TextField id="demo-helper-text-misaligned" label="Phone" />
            </FormControl>
          </Box>
          <Box>
            <Button variant="contained">Save Changes</Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Avatar />
          </Box>
        </Grid>
      </Grid>
      <Divider color="gray" variant="middle" sx={{ my: 5 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              background: "#f3f3f3",
              borderRadius: 2,
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Password
              </Typography>
              <Typography variant="caption" display={"block"}>
                You can reset or change your password by clicking here
              </Typography>
              {modalIsOpen && modalName === "password" && (
                <Modal
                  title="Change your password"
                  isOpen={modalIsOpen}
                  width={650}
                  closeModal={closeHandler}
                >
                  <ChangePassword closeModal={closeHandler} />
                </Modal>
              )}
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{ background: "#fff" }}
                onClick={() => dispatch(openModal("password"))}
              >
                Change
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              background: "#f3f3f3",
              borderRadius: 2,
              padding: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="body1" fontWeight={600}>
                Remove Account
              </Typography>
              <Typography variant="caption" display={"block"}>
                Once you delete your account, There is no going back. Please be
                certain
              </Typography>
            </Box>
            <Box>
              <Button
                variant="outlined"
                color="error"
                sx={{ background: "#fff" }}
                onClick={() => dispatch(openModal("delete_account"))}
              >
                Deactive
              </Button>
            </Box>
          </Box>
          {modalIsOpen && modalName === "delete_account" && (
            <Modal
              title="Are you absolutely sure?"
              isOpen={modalIsOpen}
              width={650}
              closeModal={closeHandler}
            >
              <DeleteAccount closeModal={closeHandler} />
            </Modal>
          )}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default LeftSide;
