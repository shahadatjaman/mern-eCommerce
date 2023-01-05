import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Form } from "./Styles";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff2b",
  border: "1px solid #ddd",
  backdropFilter: "blur 15px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      color: "#000",
    },
    [theme.breakpoints.up("xs")]: {
      width: "20ch",
      color: "#000",
    },
  },
}));

const SearchBar = () => {
  const [value, setValue] = useState("");

  const nagivate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (value) {
      nagivate(`/query?queryText=${value}`);
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={handleChange}
          value={value}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <Button type="submit"></Button>
      </Search>
    </Form>
  );
};

export default SearchBar;
