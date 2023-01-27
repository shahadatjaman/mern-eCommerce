import React from "react";
import { Name, TableHead, TableRow, Th } from "./Styles";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useChecked } from "../../../hooks/userChecked";
import { addSelelectedPorducts } from "../../../feature/reducer/Product/products";
import { useEffect } from "react";
import { OrderTable } from "./data";
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
        <Th width="20">
          <Name>
            <Checkbox checked={isChecked} onChange={handleChange} />
          </Name>
        </Th>
        {OrderTable?.tableHead.map((val) => (
          <Th>
            <Name>{val.name}</Name>
          </Th>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Head;
