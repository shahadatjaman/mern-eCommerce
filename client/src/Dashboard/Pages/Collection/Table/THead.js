import React from "react";
import { Name, TableHead, TableRow, Th } from "./Styles";
import { Checkbox } from "pretty-checkbox-react";
const Head = () => {
  return (
    <TableHead>
      <TableRow>
        <Th width="70">
          <Name>
            <Checkbox />
          </Name>
        </Th>
        <Th></Th>
        <Th>
          <Name>Name</Name>
        </Th>
        <Th>
          <Name>Status</Name>
        </Th>
        <Th>
          <Name>SKU</Name>
        </Th>
        <Th>
          <Name>Price</Name>
        </Th>
        <Th>
          <Name>Inventory</Name>
        </Th>
        <Th></Th>
      </TableRow>
    </TableHead>
  );
};

export default Head;
