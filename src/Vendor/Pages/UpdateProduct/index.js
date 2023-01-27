import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByProductId } from "../../feature/reducer/Product/createProduct";
import { getVariations } from "../../feature/reducer/Product/productVariation";
import CreateNewProduct from "../../Shared/Product/index";

const UpdateProduct = () => {
  const { productInit } = useSelector((state) => state.createproduct);

  const dispatch = useDispatch();

  const { product_id } = useParams();

  useEffect(() => {
    if (product_id) {
      dispatch(
        getProductByProductId({
          pathOne: "v3",
          pathTwo: "get_product_by-product_id",
          _id: product_id,
          method: "get",
        })
      );
    }
  }, [dispatch, product_id]);

  // getProductByProductId

  useEffect(() => {
    if (productInit.variations) {
      dispatch(getVariations(productInit.variations));
    }
  }, [dispatch, productInit]);

  return (
    productInit.requiredValue.name && (
      <CreateNewProduct title={"Update Product"} />
    )
  );
};

export default UpdateProduct;
