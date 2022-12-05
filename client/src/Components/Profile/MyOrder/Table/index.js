import React from "react";
import Head from "./THead";
import { TableWrapper, Wrapper } from "./Styles";
import Body from "./TBody.js";

const Table = () => {
  return (
    <Wrapper>
      <TableWrapper>
        {/* <Head /> */}
        <Body />
      </TableWrapper>
    </Wrapper>
  );
};

export default Table;
