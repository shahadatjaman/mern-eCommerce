import React from "react";
import { useSelector } from "react-redux";
import { TableBody } from "./Styles";

import { isEmptyArray } from "../../../../utils";

import TRow from "./TableRow";

const Body = () => {
  const { products } = useSelector((state) => state.getProducts);

  const isEmpty = isEmptyArray(products);

  return (
    <TableBody>
      {!isEmpty &&
        products.map((product, index) => (
          <TRow product={product} key={index} />
        ))}
    </TableBody>
  );
};

export default Body;
