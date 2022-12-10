import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import RowTable from "./TableRow";

import { useSelector } from "react-redux";

const BasicTable = () => {
  const { carts } = useSelector((state) => state.cart);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="start">Price</TableCell>
            <TableCell align="start">Quantity</TableCell>
            <TableCell align="start">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carts &&
            carts.length !== 0 &&
            carts.map((row, index) => <RowTable key={index} cart={row} />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
