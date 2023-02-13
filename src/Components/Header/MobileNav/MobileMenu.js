import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import { useState } from "react";
import MenuLi from "./MenuItem";

function MobileMenu({ user }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={user.avatar} />
            </IconButton>

            <MenuLi
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              user={user}
            />
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
export default MobileMenu;
