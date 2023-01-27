import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { callApi, deepClone } from "../../../utils";
import { getInventories } from "../../../feature/reducer/Product/inventory";

import { addAsSelectProduct } from "../../../feature/reducer/Product/products";

import { Actions, Name, SalePrice, TableRow, Td } from "./Styles";

import Options from "./Options";

import { Box, Checkbox } from "@mui/material";
import AvatarChip from "./Chip";

const TRow = ({ product, addToMark, shouldCheck }) => {
  const [checked, setChecked] = React.useState(false);

  const { selectedProducts, isAllChecked } = useSelector(
    (state) => state.getProducts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getInventories({
        pathOne: "v1",
        pathTwo: "getinventory",
        _id: product._id,
        method: "get",
      })
    );
  }, [dispatch, product]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    // addToMark(product._id);
    dispatch(addAsSelectProduct(product._id));
  };

  useEffect(() => {
    const selected = deepClone(selectedProducts);

    if (selected) {
      const isExis = selected.findIndex((val) => val === product._id);

      if (isExis > -1) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    } else {
      setChecked(false);
    }
  }, [product, selectedProducts]);

  return (
    <TableRow checke={checked}>
      <Td>
        <Name>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Name>
      </Td>
      <Td width="120">{product.customerID}</Td>
      <Td width="200">{product.customerName}</Td>

      <Td width="220">
        <AvatarChip name={product.customerName} avata={product.avatar} />
      </Td>
      <Td width="150">
        <Name>
          <SalePrice>11 $</SalePrice>
          {/* <OldPrice>{product.price.$numberDecimal} $</OldPrice>*/}
        </Name>
      </Td>
      <Td width={"100"}>
        <Name>14</Name>
      </Td>
      <Td width={"200"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Actions>
            <Options product_id={"dgfgf6"} />
          </Actions>
        </Box>
      </Td>
    </TableRow>
  );
};

export default TRow;
