import { Box, Button, Typography } from "@mui/material";
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
            {/* <ChangePassword closeModal={closeHandler} /> */}
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
  );
};

export default UpadatePassword;
