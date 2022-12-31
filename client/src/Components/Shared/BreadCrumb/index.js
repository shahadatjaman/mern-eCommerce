// import { Link, Span, BreadCrumb as Bread } from "./styles";
// /**
//  *
//  * @param {string} param0
//  * @returns JSX element
//  */

// const BreadCrumb = ({ pathName }) => {
//   return
//   // return (
//   //   <Bread>
//   //     {/* <Link to={"/"}>
//   //       <Span>Home</Span>
//   //     </Link>
//   //     <Span>/</Span>
//   //     <Span active>{pathName}</Span> */}
//   //   </Bread>
//   // );
// };

// export default BreadCrumb;
import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

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
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

export default function BreadCrumb({ pathOne, pathTwo, IconOne, IconTwo }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`${path}`);
  };

  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          onClick={() => handleClick("/")}
          label={pathOne}
          icon={<IconOne fontSize="small" />}
        />

        <StyledBreadcrumb
          label={pathTwo}
          onClick={() => handleClick("/wishlist")}
          icon={<IconTwo fontSize="small" />}
        />
      </Breadcrumbs>
    </Box>
  );
}
