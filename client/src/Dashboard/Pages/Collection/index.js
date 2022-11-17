import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "../../Shared/Styles";
import Header from "./Header";

import { getProducts } from "../../feature/reducer/products";

const Collection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Collection;
