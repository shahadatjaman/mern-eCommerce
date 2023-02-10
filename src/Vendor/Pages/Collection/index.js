import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getProducts } from "../../feature/reducer/Product/products";

import Header from "./Header";

import { CollectionContainer } from "./Styles";

const Collection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        pathOne: "v3",
        pathTwo: "get-product-by-id",
        method: "get",
      })
    );
  }, [dispatch]);

  return (
    <CollectionContainer>
      {/* <MuiTable headCells={headCells} rows={products} /> */}
      <Header />
    </CollectionContainer>
  );
};

export default Collection;
