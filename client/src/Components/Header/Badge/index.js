import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Badges = ({ qty, onClick, children }) => {
  return (
    <IconButton onClick={onClick} aria-label="cart">
      <StyledBadge
        badgeContent={qty}
        color="primary"
        sx={{
          fontSize: "40px",
        }}
      >
        {children}
      </StyledBadge>
    </IconButton>
  );
};

export default Badges;
