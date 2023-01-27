import React from "react";
import { Name, TableHead, TableRow, Th } from "./Styles";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useChecked } from "../../../hooks/userChecked";
import { addSelelectedPorducts } from "../../../feature/reducer/Product/products";
import { useEffect } from "react";
const Head = () => {
  const { selectedProducts, products, isAllChecked } = useSelector(
    (state) => state.getProducts
  );

  const [isChecked, setIsCheked] = useState(isAllChecked);
  const { selectAll } = useChecked();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIsCheked(event.target.checked);

    if (event.target.checked) {
      const selectedValues = selectAll(products);

      dispatch(addSelelectedPorducts(selectedValues));
    } else {
      dispatch(addSelelectedPorducts([]));
    }
  };

  useEffect(() => {
    if (selectedProducts && selectedProducts.length > 0) {
      setIsCheked(true);
    } else {
      setIsCheked(false);
    }
  }, [selectedProducts]);

  return (
    <TableHead>
      <TableRow>
        <Th width="70">
          <Name>
            <Checkbox checked={isChecked} onChange={handleChange} />
          </Name>
        </Th>
        <Th></Th>
        <Th>
          <Name>Name</Name>
        </Th>

        <Th>
          <Name>SKU</Name>
        </Th>
        <Th>
          <Name>Price</Name>
        </Th>
        <Th>
          <Name>Inventory</Name>
        </Th>
        <Th></Th>
      </TableRow>
    </TableHead>
  );
};

export default Head;
