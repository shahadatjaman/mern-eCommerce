import React, { useEffect, useState } from "react";

import {
  SelfContainer,
  Link,
  LinkText,
  Main,
  SidebarWrape,
  TopSection,
  Wrapper,
  Fixed,
} from "./Styles";

import { Outlet } from "react-router-dom";
import Layout from "../../Pages/Layout/Layout";
import { menuItem } from "./data";

import Alert from "../../Shared/Alert";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../../feature/reducer/Product/UpdateProdcutsInventory";

const Sidebar = () => {
  const { message, ok, close } = useSelector((state) => state.updateProduct);

  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeAlert());
  };
  setTimeout(() => {
    closeHandler();
  }, 10000);

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 0 }}>
        <Grid
          mt={2}
          item
          sx={{
            background: "#131720",
            paddingLeft: 0,
            height: "102vh",
          }}
          xl={2}
        >
          <SidebarWrape className="sidebar">
            <Fixed>
              <TopSection></TopSection>
              {menuItem.map((item, index) => (
                <Link to={item.path} key={index} activeclassName="active">
                  <LinkText className="icon">{item.icon}</LinkText>
                  <LinkText>{item.name}</LinkText>
                </Link>
              ))}
            </Fixed>
          </SidebarWrape>
        </Grid>
        <Grid item xl={10}>
          <Box sx={{ position: "relative", marginTop: 5 }}>
            {!close && <Alert text={message} ok={ok} />}

            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Sidebar;
