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
  const [totalPageAmount] = useState(Math.ceil(products.length / perpage));

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    setRecentPage(value);

    dispatch(getProducts({ from: 5 * recentPage, to: 5 }));
  };

  useEffect(() => {
    const startIndex = recentPage * perpage - perpage;
    const endIndex = startIndex + perpage;

    dispatch(addPagination([startIndex, endIndex]));
  }, [dispatch, perpage, recentPage]);

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
