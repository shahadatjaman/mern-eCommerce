import { Checkbox } from "pretty-checkbox-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSalePrice,
  isEmptyArray,
  isEmptyObject,
  requestTServer,
  shortText,
} from "../../../../utils";
import { getInventories } from "../../../feature/reducer/inventory";
import Poper from "../Poper";
import { ImageWrapper, Img } from "../Styles";

import {
  addSelectedProductInfo,
  deleteProduct,
  getDiscount,
} from "../../../feature/reducer/products";

import {
  Actions,
  Circle,
  Name,
  OldPrice,
  SalePrice,
  Status,
  StatusWrapper,
  TableRow,
  Td,
} from "./Styles";

const TRow = ({ product }) => {
  const [inventories, setInventories] = useState(null);

  const [variants, setVariations] = useState(null);

  const dispatch = useDispatch();
  const { selectedProductInfo, discount } = useSelector(
    (state) => state.getProducts
  );

  const { inventory } = useSelector((state) => state.inventory);

  const openHandler = (id) => {
    if (selectedProductInfo && selectedProductInfo._id === id) {
      dispatch(addSelectedProductInfo(null));
    } else {
      dispatch(addSelectedProductInfo({ _id: id }));
    }
  };

  useEffect(() => {
    dispatch(getInventories({ product_id: product._id }));
  }, [dispatch, product]);

  useEffect(() => {
    if (!isEmptyArray(inventory)) {
      const obj = Object.assign({}, ...inventory);
      setInventories(obj);
    }
  }, [inventory]);

  useEffect(() => {
    dispatch(getDiscount(product._id));
  }, [dispatch, product]);

  useEffect(() => {
    (async () => {
      const result = await requestTServer({ product_id: product._id });
      const response = result;

      if (response.data.variants) {
        setVariations(response.data);
      }
    })();
  }, [product]);

  const deleteHandler = (id) => {
    dispatch(deleteProduct({ product_id: id }));
  };

  return (
    <TableRow>
      <Td>
        <Name>
          <Checkbox />
        </Name>
      </Td>
      <Td width="120">
        <ImageWrapper>
          {variants ? (
            <Img src={variants.variants?.variation_img} alt="img" />
          ) : (
            <Img
              src={
                "https://res.cloudinary.com/dza2t1htw/image/upload/v1669218808/32173552_elulzk.jpg"
              }
              alt="img"
            />
          )}
        </ImageWrapper>
      </Td>
      <Td width="200">
        <Name>{shortText(product.name, 15, 0, 15)} </Name>
      </Td>
      <Td width="170">
        <StatusWrapper>
          {product.product_status === "draft" ? (
            <Status draft="true">
              <Circle draft="true"></Circle>
              Deactive
            </Status>
          ) : (
            <Status>
              <Circle></Circle>
              {product.product_status}
            </Status>
          )}
        </StatusWrapper>
      </Td>
      <Td width="220">
        <Name>{shortText(product.SKU, 15, 0, 15)}</Name>
      </Td>
      <Td width="200">
        <Name>
          <SalePrice>{product.price.$numberDecimal} $</SalePrice>
          {/* <OldPrice>{product.price.$numberDecimal} $</OldPrice>*/}
        </Name>
      </Td>
      <Td>
        <Name>{inventories && inventories.quantity}</Name>
      </Td>
      <Td>
        <Actions>
          {selectedProductInfo && selectedProductInfo._id === product._id && (
            <Poper deleteHandler={deleteHandler} _id={product._id} />
          )}

          <i
            onClick={() => openHandler(product._id)}
            className="fa-solid fa-ellipsis"
          ></i>
        </Actions>
      </Td>
    </TableRow>
  );
};

export default TRow;
