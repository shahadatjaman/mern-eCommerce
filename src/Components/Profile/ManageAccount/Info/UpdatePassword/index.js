import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModal,
} from "../../../../../feature/reducer/user/auth";
import Modal from "../../../../Shared/Modal";
import { ChangePassword } from "./ChangePassword";

const UpadatePassword = () => {
  const { modalIsOpen, modalName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const closeHandler = () => {
    dispatch(closeModal());
  };

  return (
    <Box
      sx={{
        background: "#f3f3f3",
        borderRadius: 2,
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {modalIsOpen && modalName === "password" && (
        <Modal
          title="Change your password"
          isOpen={modalIsOpen}
          width={650}
          closeModal={closeHandler}
        >
          <ChangePassword closeModal={closeHandler} />
          {/* <ChangePassword closeModal={closeHandler} /> */}
        </Modal>
      )}

      <Grid container spacing={2}>
        <Grid item xl={8}>
          <Box>
            <Typography variant="body1" fontWeight={600}>
              Password
            </Typography>
            <Typography fontSize={14} display={"block"}>
              {user.provider.trim() === "social"
                ? "You can't change your password. Because you have signed with google."
                : "You can reset or change your password by clicking here"}
            </Typography>
          </Box>
        </Grid>
        <Grid item xl={4}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="outlined"
              sx={{ background: "#fff" }}
              disabled={user.provider.trim() === "social"}
              onClick={() => dispatch(openModal("password"))}
            >
              Change
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UpadatePassword;
