import React from "react";
import { Name, TableHead, TableRow, Th } from "./Styles";
import { Checkbox } from "pretty-checkbox-react";
const Head = () => {
  return (
    <TableHead>
      <TableRow>
        <Th>
          <Name>Order ID</Name>
        </Th>
        <Th>
          <Name>Customer</Name>
        </Th>
        <Th>
          <Name>Order</Name>
        </Th>
        <Th>
          <Name>Delivery Date</Name>
        </Th>
        <Th>
          <Name>Delivery Pricing</Name>
        </Th>
        <Th>
          <Name>Delivery Status</Name>
        </Th>
        <Th>
          <Name>Payment Status </Name>
        </Th>
      </TableRow>
    </TableHead>
  );
};

export default Head;
