import { Checkbox } from "pretty-checkbox-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  arrayToObject,
  getSalePrice,
  isEmptyArray,
  isEmptyObject,
  shortText,
} from "../../../../utils";
import { getInventories } from "../../../feature/reducer/inventory";
import Poper from "../Poper";
import { ImageWrapper, Img } from "../Styles";

import {
  addSelectedProductInfo,
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

const img =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='164' height='120' viewBox='0 0 164 120'%3E%3Cg fill='none'%3E%3Crect width='164' height='120' fill='%23DAEFFE'/%3E%3Cpath fill='%23B9E3FF' d='M-8.52651283e-14,120 L49.0917544,74.9616932 C52.151039,72.1550101 56.848961,72.1550101 59.9082456,74.9616932 L71.293,85.4057534 L96.9019846,59.8591624 C100.0299,56.7386931 105.095216,56.744729 108.215685,59.8726439 C108.284098,59.9412201 108.35126,60.0110332 108.417137,60.0820486 L164,120 L-8.52651283e-14,120 Z'/%3E%3Ccircle cx='67.5' cy='43.5' r='10.5' fill='%23F5FBFF'/%3E%3C/g%3E%3C/svg%3E%0A";

const TRow = ({ product }) => {
  const [inventories, setInventories] = useState(null);
  const [salePrice, setSalePrice] = useState(0);

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
    if (discount && !isEmptyObject(discount)) {
      const getprice = getSalePrice({
        price: product.price.$numberDecimal,
        discount: Math.floor(discount.discount_percent.$numberDecimal),
      });
      setSalePrice(getprice);
    }
  }, [discount, product]);

  return (
    <TableRow>
      <Td>
        <Name>
          <Checkbox />
        </Name>
      </Td>
      <Td width="120">
        <ImageWrapper>
          <Img src={img} alt="img" />
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
          <SalePrice>{salePrice > 0 && salePrice} $</SalePrice>
          <OldPrice>{product.price.$numberDecimal} $</OldPrice>
        </Name>
      </Td>
      <Td>
        <Name>{inventories && inventories.quantity}</Name>
      </Td>
      <Td>
        <Actions>
          {selectedProductInfo && selectedProductInfo._id === product._id && (
            <Poper />
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
