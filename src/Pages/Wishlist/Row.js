import * as React from "react";
import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { Link } from "./Styles";
import { useWish } from "../../hooks/useWish";
import { addNewWish } from "../../feature/reducer/addWish";
import { useState } from "react";
import { callApi } from "../../utils";
import DeleteIcon from "@mui/icons-material/Delete";
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
const Row = ({ value }) => {
  const [product, setProduct] = useState(null);
  const [variation, setVariation] = useState(null);
  const { state, removeWish } = useWish();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getproduct",
        _id: value._id,
        method: "get",
      });
      if (res.product) {
        setProduct(res.product);
      }

      if (res.variations) {
        setVariation(res.variations[0]);
      }
    })();
  }, [value]);

  const removeHandler = () => {
    removeWish(value._id);
  };

  useEffect(() => {
    if (state) {
      dispatch(addNewWish({ wish: state }));
    }
  }, [state, dispatch]);

  return (
    product &&
    variation && (
      <StyledTableRow key={product.name}>
        <StyledTableCell component="th" scope="row">
          <Link to={`/product/`}>
            <Box
              sx={{ width: 50 }}
              component={"img"}
              src={variation?.variation_img}
              alt="product"
            />
          </Link>
        </StyledTableCell>
        <StyledTableCell align="left"> {product.name}</StyledTableCell>
        <StyledTableCell align="right">
          $ {product?.price.$numberDecimal}
        </StyledTableCell>
        <StyledTableCell align="right">{value.carbs}</StyledTableCell>
        <StyledTableCell align="right">
          <Box sx={{ cursor: "pointer" }} onClick={removeHandler}>
            <DeleteIcon color="error" />
          </Box>
        </StyledTableCell>
      </StyledTableRow>
    )
  );
};

export default Row;
