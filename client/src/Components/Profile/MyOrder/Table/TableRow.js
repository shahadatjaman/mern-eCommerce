import { Checkbox } from "pretty-checkbox-react";
import React from "react";
import { shortText } from "../../../../utils/";

import { ImageWrapper, Img } from "../Styles";
import Product from "./Product";

import {
  Actions,
  Circle,
  Date,
  H6,
  Name,
  OrderRow,
  SalePrice,
  Span,
  Status,
  StatusWrapper,
  TableRow,
  Td,
} from "./Styles";

const TRow = ({ order }) => {
  return (
    <>
      <TableRow>
        <OrderRow className="orderId">
          <H6>
            Order ID :<Span># {order._id}</Span>
          </H6>
          <Date>Placed on 02 Dec 2022 23:06:49</Date>
        </OrderRow>
      </TableRow>
      {order?.products?.map((val, index) => (
        <Product product={val} key={index} />
      ))}
    </>
  );
};

export default TRow;
