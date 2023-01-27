import React from "react";
import Head from "./THead";
import { TableWrapper, Wrapper } from "./Styles";
import Body from "./TBody.js";
import { Box } from "@mui/material";

const Table = () => {
  return (
    <Wrapper>
      <Box sx={{ height: "50vh", overflowX: "scroll" }}>
        <TableWrapper>
          <Head />
          <Body />
        </TableWrapper>
      </Box>
    </Wrapper>
  );
};

export default Table;
