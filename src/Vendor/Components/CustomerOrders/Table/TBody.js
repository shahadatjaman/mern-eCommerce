import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableBody } from "./Styles";

import { isEmptyArray } from "../../../utils";

import TRow from "./TableRow";
import { useEffect } from "react";
import {
  addPaginatedProducts,
  addSelelectedPorducts,
} from "../../../feature/reducer/Product/products";
import { useChecked } from "../../../hooks/userChecked";
import { Box } from "@mui/material";
import { OrderTable } from "./data";

const Body = () => {
  const { paginationStatus, paginatedProducts, isAllChecked } = useSelector(
    (state) => state.getProducts
  );

  const { addToMark, state } = useChecked();

  const dispatch = useDispatch();

  const isEmpty = isEmptyArray(paginatedProducts);

  useEffect(() => {
    if (
      OrderTable.tableBody &&
      paginationStatus &&
      OrderTable.tableBody.length !== 0
    ) {
      const paginarted = OrderTable.tableBody.slice(
        paginationStatus[0],
        paginationStatus[1]
      );

      dispatch(addPaginatedProducts(paginarted));
    }
  }, [paginationStatus, dispatch]);

  useEffect(() => {
    if (state.length >= 0) {
      dispatch(addSelelectedPorducts(state));
    }
  }, [state, dispatch]);

  return (
    <TableBody>
      {!isEmpty &&
        paginatedProducts.map((product, index) => (
          <TRow
            product={product}
            key={index}
            addToMark={addToMark}
            shouldCheck={isAllChecked}
          />
        ))}
    </TableBody>
  );
};

export default Body;
