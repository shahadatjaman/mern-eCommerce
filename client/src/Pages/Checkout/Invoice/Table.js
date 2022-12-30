import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Span, Total } from "./Styles";
import TRow from "./TableRow";

export default function BasicTable({ order }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Rate</TableCell>

            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.products.map((product, index) => (
            <TRow product={product} key={index} />
          ))}
        </TableBody>
      </Table>
      <Total>
        <Span>{Number(order.total.$numberDecimal).toFixed(2)} $</Span>
      </Total>
    </TableContainer>
  );
}
