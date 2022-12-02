import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAddToCart } from "../../../hooks/useAddToCart";
import RowTable from "./TableRow";

import { useSelector } from "react-redux";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const BasicTable = () => {
  const { carts } = useSelector((state) => state.cart);

  const { items } = useAddToCart();

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
