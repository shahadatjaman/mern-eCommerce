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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Drawer from "../../Shared/Drawer/index";
import Categories from "./Categories";

const PrimarySearchAppBar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const { carts } = useSelector((state) => state.cart);

  const { orders } = useSelector((state) => state.order);

  const { categories } = useSelector((state) => state.categories);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
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
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={100} color="error">
            <RedeemIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={100} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const navigate = useNavigate();
  const navigateHandler = (link) => {
    navigate(link);
  };

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
                onClick={() => navigateHandler("/profile/username/myorders")}
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
