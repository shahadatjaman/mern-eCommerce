import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person2Icon from "@mui/icons-material/Person2";
import { removeCookie } from "../../feature/reducer/user";
import { useWindowWidth } from "../../hooks/userWindowWidth";

const AccountMenu = ({ user, setIsOpenCart }) => {
  const [isOpenProfile, setIsOpenProfile] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSmall = useWindowWidth({ width: 600 });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpenCart(false);

    if (isOpenProfile) {
      setIsOpenProfile(false);
    } else {
      setIsOpenProfile(true);
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(removeCookie());
  };

  const authHandler = ({ name }) => {
    if (name === "register") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  const navigateHandler = (path) => {
    navigate(path);
    setIsOpenProfile(false);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip>
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

      <Box
        sx={{
          position: "absolute",
          background: "#fff",
          top: isOpenProfile ? "153%" : "100%",
          width: isOpenProfile ? "200px" : "0px",
          // height: isOpenProfile ? "200px" : "0px",
          opacity: isOpenProfile ? "1" : "0",
          transition: "0.1s",
          borderRadius: 2,
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          // display: "flex",
          // alignItems: "center",
        }}
      >
        {user ? (
          <>
            {user?.role.includes("vendor") && (
              <MenuItem onClick={() => navigateHandler("/dashboard")}>
                <ListItemIcon>
                  <StorefrontIcon fontSize="small" />
                </ListItemIcon>
                <NavLink>My Vendor</NavLink>
              </MenuItem>
            )}

            <MenuItem onClick={() => navigateHandler(`/profile`)}>
              {/* <Avatar src={user?.avatar} />{" "} */}

              <ListItemIcon>
                <Person2Icon fontSize="small" />
              </ListItemIcon>
              <NavLink>My account</NavLink>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => navigateHandler(`/profile/myorders`)}>
              <ListItemIcon>
                <GradingIcon fontSize="small" />
              </ListItemIcon>
              <NavLink>My orders</NavLink>
            </MenuItem>
            {isSmall && (
              <>
                <MenuItem onClick={() => navigateHandler(`/cartitems`)}>
                  <ListItemIcon>
                    <ShoppingCartIcon fontSize="small" />
                  </ListItemIcon>
                  <NavLink>Cart</NavLink>
                </MenuItem>
                <MenuItem onClick={() => navigateHandler(`/wishlist`)}>
                  <ListItemIcon>
                    <FavoriteBorderIcon fontSize="small" />
                  </ListItemIcon>
                  <NavLink>wishlist</NavLink>
                </MenuItem>
              </>
            )}

            <MenuItem onClick={logoutHandler}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
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
          </>
        )}
      </Box>
    </>
  );
};

export default AccountMenu;
