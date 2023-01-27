import { Checkbox } from "pretty-checkbox-react";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  addSelectedProductInfo,
  deleteProduct,
} from "../../../feature/reducer/Product/products";

import {
  Actions,
  Circle,
  Name,
  SalePrice,
  Status,
  StatusWrapper,
  TableRow,
  Td,
} from "./Styles";

const TRow = () => {
  const dispatch = useDispatch();
  const { selectedProductInfo } = useSelector((state) => state.getProducts);

  const openHandler = (id) => {
    if (selectedProductInfo && selectedProductInfo._id === id) {
      dispatch(addSelectedProductInfo(null));
    } else {
      dispatch(addSelectedProductInfo({ _id: id }));
    }
  };

  const deleteHandler = (id) => {
    dispatch(deleteProduct({ product_id: id }));
  };

  return (
    <TableRow>
      <Td width="120">text</Td>
      <Td width="200">
        <Name>product.name </Name>
      </Td>
      <Td width="170">
        <StatusWrapper>
          <Status draft="true">
            <Circle draft="true"></Circle>
            Deactive
          </Status>

          {/* <Status>
            <Circle></Circle>
            Success
          </Status> */}
        </StatusWrapper>
      </Td>
      <Td width="220">
        <Name>SKU</Name>
      </Td>
      <Td width="200">
        <Name>
          <SalePrice>product.price</SalePrice>
          {/* <OldPrice>{product.price.$numberDecimal} $</OldPrice>*/}
        </Name>
      </Td>
      <Td>
        <StatusWrapper>
          <Status>
            <Circle></Circle>
            Success
          </Status>
        </StatusWrapper>
      </Td>
      <Td>
        <Actions>
          <i onClick={() => openHandler()} className="fa-solid fa-ellipsis"></i>
        </Actions>
      </Td>
    </TableRow>
  );
};

export default TRow;
