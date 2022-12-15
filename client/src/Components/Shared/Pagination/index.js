import { Box, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { usePaginationRange, DOTS } from "../../../hooks/usePagination";
import { Counter, Wrapper } from "./Styles";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const Paginations = ({ data, buttonConst, siblingCount, contentPerPage }) => {
  const [totalPageAmount] = useState(Math.ceil(data.length / contentPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  const paginationRang = usePaginationRange({
    totalPageAmount,
    buttonConst,
    siblingCount,
    contentPerPage,
    currentPage,
  });

  const nextHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevHandler = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const changeHandler = (e) => {
    setCurrentPage(Number(e.target.textContent));
  };

  return (
    <Wrapper>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="text"
          onClick={prevHandler}
          sx={{ marginRight: "1rem" }}
          disabled={currentPage === 1}
        >
          <SkipPreviousIcon />
        </Button>

        {/* Show paginations */}
        {paginationRang.map((item, index) => {
          if (item === DOTS) {
            return <Counter key={index}>&#8230;</Counter>;
          }
          return (
            <Counter
              key={index}
              onClick={changeHandler}
              active={currentPage === item}
            >
              {item}
            </Counter>
          );
        })}
        <Button
          variant="text"
          onClick={nextHandler}
          disabled={currentPage === totalPageAmount}
        >
          <SkipNextIcon />
        </Button>
      </Box>
    </Wrapper>
  );
};

export default Paginations;
