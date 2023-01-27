import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Input, InputWrapper } from "./Styles";
import { useNavigate } from "react-router-dom";

const Search = () => {
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
    <Box sx={{ width: "100%" }}>
      <Box
        component={"form"}
        onSubmit={submitHandler}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 4,
          height: 60,
          width: "100%",
          background: "#f7f7f7",
          borderRadius: 50,
          overflow: "hidden",
          border: "1px solid #ddd",
        }}
      >
        <Box
          sx={{
            ...InputWrapper,
          }}
        >
          <SearchIcon htmlColor="#fff" />
        </Box>
        <Input
          type="text"
          value={value}
          placeholder="Find products by category, name etc..."
          onChange={handleChange}
        />
        <Button hidden type={"submit"}></Button>
      </Box>
    </Box>
  );
};

export default Search;
