import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModal,
} from "../../../../../feature/reducer/user/auth";
import Modal from "../../../../Shared/Modal";
import DeleteAccount from "./DeleteAccount";

const RemoveAccount = () => {
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
    </Box>
  );
};

export default RemoveAccount;
