import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { TabelWrapper } from "./Styles";
import { useWish } from "../../hooks/useWish";
import { useNavigate } from "react-router-dom";
import { addNewWish } from "../../feature/reducer/addWish";
import { tostify } from "../../utils/toastify";
import { useState } from "react";
import { callApi } from "../../utils";
import Row from "./Row";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "white",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 24, 4.0, "X"),
  createData("Ice cream sandwich", 37, 4.3, "X"),
  createData("Eclair", 24, 6.0, "X"),
  createData("Cupcake", 67, 4.3, "X"),
  createData("Gingerbread", 49, 3.9, "X"),
];

export default function CustomizedTables() {
  const [rows, setRows] = useState([]);
  const { wishes } = useSelector((state) => state.wish);
  const { clearWish } = useWish();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const cleareCartItems = () => {
    dispatch(addNewWish({ wish: null }));
    clearWish();
    tostify("Cleared wish list!");
  };

  const goToHome = () => {
    navigate("/");
  };
  useEffect(() => {});

  return (
    <TabelWrapper>
      <Box mb={2}>
        <Typography variant={"h4"} fontWeight="600">
          Wishes Cart
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>PRODUCT</StyledTableCell>
              <StyledTableCell align="left">NAME</StyledTableCell>
              <StyledTableCell align="right">PRICE</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right">ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wishes.map((row, index) => (
              <Row value={row} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          maxWidth: 1200,
          paddingTop: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Button variant="contained" onClick={goToHome}>
          CONTINUE SHOPPING
        </Button>
        <Button onClick={cleareCartItems} variant="outlined" error>
          CLEAR WISHLIST
        </Button>
      </Box>
    </TabelWrapper>
  );
}
