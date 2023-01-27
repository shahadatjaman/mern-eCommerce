import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableBody } from "./Styles";

import { isEmptyArray } from "../../../utils";
import Typography from "@mui/material/Typography";
import TRow from "./TableRow";
import { useEffect } from "react";
import { addPaginatedProducts } from "../../../feature/reducer/Product/products";

const Body = () => {
  const { products, paginationStatus, paginatedProducts } = useSelector(
    (state) => state.getProducts
  );

  const dispatch = useDispatch();

  const isEmpty = isEmptyArray(paginatedProducts);

  useEffect(() => {
    if (products && paginationStatus && products.length !== 0) {
      const paginarted = products.slice(
        paginationStatus[0],
        paginationStatus[1]
      );

      dispatch(addPaginatedProducts(paginarted));
    }
  }, [paginationStatus, products, dispatch]);

  return (
    <TableBody>
      <TRow />
      <TRow />
      <TRow />
    </TableBody>
  );
};

export default Body;
