import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resetInitialProduct } from "../../feature/reducer/Product/createProduct";
import { resetVariations } from "../../feature/reducer/Product/productVariation";

import CreateNewProduct from "../../Shared/Product/index";

const CreateProduct = () => {
  const { productInit } = useSelector((state) => state.createproduct);

  const dispatch = useDispatch();

  const _param = useParams();

  useEffect(() => {
    if (!_param.product_id) {
      dispatch(resetInitialProduct());
      dispatch(resetVariations());
    }
  }, [dispatch, _param]);

  return (
    !productInit.requiredValue.name && (
      <CreateNewProduct title={"Create New Product"} />
    )
  );
};

export default CreateProduct;
