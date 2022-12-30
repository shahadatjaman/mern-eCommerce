import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { callApi } from "../../../utils";

const TRow = ({ product }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getproduct",
        method: "get",
        _id: product.product_id,
      });

      setValue(res);
    })();
  }, [product]);

  return (
    value && (
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {value.product.name}
        </TableCell>
        <TableCell align="right">$ {product.price.$numberDecimal}</TableCell>

        <TableCell align="right">{product.qty.$numberDecimal}</TableCell>
        <TableCell align="right">
          $ {product.price.$numberDecimal * product.qty.$numberDecimal}
        </TableCell>
      </TableRow>
    )
  );
};

export default TRow;
