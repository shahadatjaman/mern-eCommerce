import * as React from "react";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../feature/reducer/user/auth";
import { removeCookie } from "../../../feature/reducer/user";
import { useWindowWidth } from "../../../hooks/userWindowWidth";
const MenuLi = ({ anchorElUser, handleCloseUserMenu, user }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isSmall = useWindowWidth({ width: 600 });

  const navigateHandler = (path) => {
    navigate(path);
    handleCloseUserMenu();
  };

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(removeCookie());
    handleCloseUserMenu();
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      <>
        {user && (
          <>
            {user?.role.includes("vendor") && (
              <MenuItem onClick={() => navigateHandler(`/dashboard`)}>
                <Typography textAlign="center">My Vendor</Typography>
              </MenuItem>
            )}
          </>
        )}
        {!user && isSmall && (
          <MenuItem onClick={() => navigateHandler(`/cartitems`)}>
            <Typography textAlign="center">My Cart</Typography>
          </MenuItem>
        )}
        {user && (
          <>
            <MenuItem onClick={() => navigateHandler(`/profile`)}>
              <Typography textAlign="center">My Account</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigateHandler(`/profile/myorders`)}>
              <Typography textAlign="center">My Orders</Typography>
            </MenuItem>
          </>
        )}

        <MenuItem onClick={() => navigateHandler(`/cartitems`)}>
          <Typography textAlign="center">My Cart</Typography>
        </MenuItem>

        <MenuItem onClick={() => navigateHandler(`/wishlist`)}>
          <Typography textAlign="center">My Wish</Typography>
        </MenuItem>
        {user ? (
          <MenuItem onClick={logoutHandler}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        ) : (
          <MenuItem onClick={() => navigateHandler(`/login`)}>
            <Typography textAlign="center">Login</Typography>
          </MenuItem>
        )}
      </>
    </Menu>
  );
};

export default MenuLi;
