import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import RedeemIcon from "@mui/icons-material/Redeem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";

import Drawer from "../../Shared/Drawer/index";
import Categories from "./Categories";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar, Stack } from "@mui/material";
import GradingIcon from "@mui/icons-material/Grading";
import { logout } from "../../../feature/reducer/user/auth";

const PrimarySearchAppBar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { user } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.cart);

  const { orders } = useSelector((state) => state.order);

  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event, type) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ? (
        <>
          <MenuItem
            onClick={() =>
              navigateHandler(`/profile/${user.firstName}/manageaccount`)
            }
          >
            Profile
          </MenuItem>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </>
      ) : (
        <>
          <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        </>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const { carts: addCarts } = useSelector((state) => state.cart);
  const { wishes } = useSelector((state) => state.wish);

  const navigate = useNavigate();

  const navigateHandler = (link) => {
    navigate(link);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user ? (
        <MenuItem
          onClick={() =>
            navigateHandler(`/profile/${user.firstName}/manageaccount`)
          }
        >
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge color="error">
              <Stack direction="row" spacing={2}>
                <Avatar alt={user.firstName} src={user.avatar} />
              </Stack>
            </Badge>
          </IconButton>

          <p>Profile</p>
        </MenuItem>
      ) : (
        <MenuItem onClick={() => navigateHandler("/login")}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge color="error">
              <LockOpenIcon />
            </Badge>
          </IconButton>

          <p>Sign/login</p>
        </MenuItem>
      )}

      <MenuItem onClick={() => navigateHandler("/cartitems")}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={addCarts ? carts.length : "0"} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={() => navigateHandler("/wishlist")}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={wishes ? wishes.length : "0"} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Wish</p>
      </MenuItem>

      <MenuItem
        onClick={() => navigateHandler(`/profile/${user?.firstName}/myorders`)}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={orders ? orders.length : "0"} color="error">
            <GradingIcon />
          </Badge>
        </IconButton>
        <p>Order</p>
      </MenuItem>
    </Menu>
  );

  const openHandler = () => {
    setIsOpenNav(true);
  };

  const closeHandler = () => {
    setIsOpenNav(false);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar
        position="static"
        sx={{ background: "#ffffff2b", backdropFilter: `blur 15px` }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#000"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={openHandler}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", color: "#000" } }}
            onClick={() => navigateHandler("/")}
          >
            Xpart
          </Typography>
          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {orders && (
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="#000"
                onClick={() =>
                  navigateHandler(`/profile/${user?.firstName}/myorders`)
                }
              >
                <Badge badgeContent={orders.length} color="error">
                  <RedeemIcon />
                </Badge>
              </IconButton>
            )}

            {carts && (
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="#000"
                onClick={() => navigateHandler("/cartitems")}
              >
                <Badge badgeContent={carts.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#000"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#000"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Drawer
        isOpenNav={isOpenNav}
        closeHandler={closeHandler}
        categories={categories}
      >
        <Categories categories={categories} />
      </Drawer>
    </Box>
  );
};

export default PrimarySearchAppBar;
