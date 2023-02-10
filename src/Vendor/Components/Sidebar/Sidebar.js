import React from "react";

import { Link, LinkText, SidebarWrape, TopSection, Fixed } from "./Styles";

import { Outlet, useLocation } from "react-router-dom";
import Layout from "../../Pages/Layout/Layout";
import { menuItem } from "./data";

import Alert from "../../Shared/Alert";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../../feature/reducer/Product/UpdateProdcutsInventory";

const Sidebar = () => {
  const { message, ok, close } = useSelector((state) => state.updateProduct);

  const location = useLocation();
  const pathname = location.pathname;

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
        <Grid mt={2} item xl={2} md={2} sm={2}>
          <SidebarWrape className="sidebar">
            <Fixed>
              <TopSection></TopSection>
              {menuItem.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  isActive={pathname === item.path}
                >
                  <LinkText className="icon">{item.icon}</LinkText>
                  <LinkText>{item.name}</LinkText>
                </Link>
              ))}
            </Fixed>
          </SidebarWrape>
        </Grid>
        <Grid item xl={10} md={10} sm={2}>
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
