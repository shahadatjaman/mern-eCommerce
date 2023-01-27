import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callApi, deepClone, shortText } from "../../../utils";
import { getInventories } from "../../../feature/reducer/Product/inventory";
import data from "./data";
import { ImageWrapper, Img } from "../Styles";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { addAsSelectProduct } from "../../../feature/reducer/Product/products";

import { Actions, Name, SalePrice, TableRow, Td } from "./Styles";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Options from "./Options";

import { Box, Checkbox } from "@mui/material";
import Visibility from "./Visibility";

const TRow = ({ product, addToMark, shouldCheck }) => {
  const [checked, setChecked] = React.useState(false);

  const [inventories, setInventories] = useState(null);

  const [variants, setVariations] = useState(null);

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

  useEffect(() => {
    (async () => {
      const res = await callApi({
        _id: product._id,
        pathOne: "v1",
        pathTwo: "getvariations",
        method: "get",
      });

      if (res.variants) {
        setVariations(res.variants);
      }
    })();
  }, [product]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    // addToMark(product._id);
    dispatch(addAsSelectProduct(product._id));
  };

  useEffect(() => {
    (async () => {
      const res = await callApi({
        pathOne: "v1",
        pathTwo: "getinventory",
        _id: product._id,
        method: "get",
      });

      if (res.inventory) {
        setInventories(res.inventory);
      }
    })();
  }, [product]);

  useEffect(() => {
    setChecked(shouldCheck);
  }, [shouldCheck]);

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
      <Td width="120">
        <ImageWrapper>
          {variants ? (
            <Img src={variants?.variation_img} alt="img" />
          ) : (
            <Img src={data.default_img} alt="img" />
          )}
        </ImageWrapper>
      </Td>
      <Td width="200">
        <Name>{shortText(product.name, 15, 0, 15)} </Name>
      </Td>

      <Td width="220">
        <Name>{shortText(product.SKU, 15, 0, 15)}</Name>
      </Td>
      <Td width="150">
        <Name>
          <SalePrice>{product.price.$numberDecimal} $</SalePrice>
          {/* <OldPrice>{product.price.$numberDecimal} $</OldPrice>*/}
        </Name>
      </Td>
      <Td width={"100"}>
        <Name>{inventories && inventories.quantity}</Name>
      </Td>
      <Td width={"200"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginRight: 2 }}>
            <Visibility product={product} />
          </Box>
          <Actions>
            <Options product_id={product._id} />
          </Actions>
        </Box>
      </Td>
    </TableRow>
  );
};

export default TRow;
