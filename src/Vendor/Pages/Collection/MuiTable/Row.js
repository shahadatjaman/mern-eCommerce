import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { columns } from "./data";
import Img from "./Img";
import { ImageWrapper } from "./Styles";

const Row = (props) => {
  const { row } = props;

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      {columns.map((column) => {
        const value = row[column.id];

        return (
          <TableCell key={column.id} align={column.align}>
            {column.format && typeof value === "number"
              ? column.format(value)
              : value}

            {!value && <Img />}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default Row;
