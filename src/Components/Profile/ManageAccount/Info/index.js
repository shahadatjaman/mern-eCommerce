import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";

import { Wrapper } from "./Styles";

import Modal from "../../../Shared/Modal/";

import { closeModal } from "../../../../feature/reducer/user/auth";
import UpdateUser from "../Info/UpdateUser/";
import DeleteAccount from "./removeAccount/DeleteAccount";
import RemoveAccount from "./removeAccount";
import UpadatePassword from "../Info/UpdatePassword/";
import { useWindowWidth } from "../../../../hooks/userWindowWidth";
import { useEffect } from "react";
import { getUser } from "../../../../feature/reducer/user";

const Content = () => {
  const windowWidth = useWindowWidth({ width: 850 });

  const { modalIsOpen, modalName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeModal());
  };

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(
        getUser({
          pathOne: "auth",
          pathTwo: "getuser",
          _id: user._id,
          method: "get",
        })
      );
    }
  }, [dispatch, user]);

  return (
    <Wrapper>
      <Typography variant="h5" fontWeight="500" my={3}>
        Profile Setting
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          display: windowWidth && "flex",
          flexDirection: windowWidth && "column-reverse",
        }}
      >
        <Grid item xl={8} md={8} sm={12} xs={12}>
          <UpdateUser />
        </Grid>
        <Grid item xl={4} md={4} sm={12} xs={12}>
          <Box>
            <Avatar />
          </Box>
        </Grid>
      </Grid>
      <Divider color="gray" variant="middle" sx={{ my: 5 }} />
      <Grid container spacing={2}>
        <Grid item xl={6} xs={12} md={6} sm={12}>
          <UpadatePassword />
        </Grid>
        <Grid item xl={6} xs={12} md={6} sm={12}>
          <RemoveAccount />

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

export default Content;
