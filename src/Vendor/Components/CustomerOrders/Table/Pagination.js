import { Pagination, Stack } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addPagination,
  getProducts,
} from "../../../feature/reducer/Product/products";
import { PaginationWrapper } from "../MuiTable/Styles";

const Paginations = ({ products }) => {
  const [recentPage, setRecentPage] = React.useState(1);
  const [perpage] = useState(5);
  const [totalPageAmount, setTotalPageAmount] = useState(
    Math.ceil(products.length / perpage)
  );

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    setRecentPage(value);
    // dispatch(getProducts({ from: perpage * recentPage, to: perpage }));
  };

  useEffect(() => {
    const startIndex = recentPage * perpage - perpage;
    const endIndex = startIndex + perpage;

    dispatch(addPagination([startIndex, endIndex]));
  }, [dispatch, perpage, recentPage]);

  useEffect(() => {
    setTotalPageAmount(Math.ceil(products.length / perpage));
  }, [perpage, products]);

  return (
    <PaginationWrapper>
      <Stack spacing={2}>
        <Pagination
          count={totalPageAmount}
          page={recentPage}
          onChange={handleChange}
        />
      </Stack>
    </PaginationWrapper>
  );
};

export default Paginations;
