import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GradingIcon from "@mui/icons-material/Grading";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LoginIcon from "@mui/icons-material/Login";

import Logout from "@mui/icons-material/Logout";
import BadgeAvatar from "../Shared/Avatar";

import { logout } from "../../feature/reducer/user/auth";

const AccountMenu = ({ user, setIsOpenCart }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpenCart(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const authHandler = ({ name }) => {
    if (name === "register") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  console.log(user);
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title={user && "Account settings"}>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {!user ? (
              <Avatar sx={{ width: 32, height: 32 }} src={user?.avatar}>
                Un
              </Avatar>
            ) : (
              <BadgeAvatar avatar={user?.avatar} name={user.firstName} />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {user ? (
          <div>
            <MenuItem>
              <ListItemIcon>
                <StorefrontIcon fontSize="small" />
              </ListItemIcon>
              <NavLink to={"/dashboard"}>My Vendor</NavLink>
            </MenuItem>

            <MenuItem>
              <Avatar src={user?.avatar} />{" "}
              <NavLink to={`/profile/${user?.firstName}/manageaccount`}>
                My account
              </NavLink>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <GradingIcon fontSize="small" />
              </ListItemIcon>
              <NavLink to={`/profile/${user.firstName}/myorders`}>
                My orders
              </NavLink>
            </MenuItem>

            <MenuItem onClick={logoutHandler}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </div>
        ) : (
          <div>
            <MenuItem onClick={() => authHandler({ name: "register" })}>
              <PersonAddAltIcon sx={{ marginRight: 1 }} /> Sign up
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => authHandler({ name: "login" })}>
              <ListItemIcon>
                <LoginIcon fontSize="small" />
              </ListItemIcon>
              Login
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};

export default AccountMenu;
