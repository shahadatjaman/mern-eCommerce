// export default BreadCrumb;
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default function BreadCrumb({ pathTwo, IconTwo }) {
  const navigate = useNavigate();

  const location = useLocation();

  const handleClick = (path) => {
    navigate(`${path}`);
  };

  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          onClick={() => handleClick("/")}
          label={"Home"}
          icon={<HomeIcon fontSize="small" />}
        />

        <StyledBreadcrumb
          label={pathTwo}
          onClick={() => handleClick(`${location.pathname}`)}
          icon={<IconTwo fontSize="small" />}
        />
      </Breadcrumbs>
    </Box>
  );
}
