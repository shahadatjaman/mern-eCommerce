import React from "react";
import { useTimeFormat } from "../../../../hooks/useTimeFormate";

import Product from "./Product";

import { Date, H6, OrderRow, Span, TableRow } from "./Styles";

const TRow = ({ order }) => {
  const date = useTimeFormat(order.createdAt);

  return (
    <>
      <TableRow>
        <OrderRow className="orderId">
          <H6>
            Order ID :<Span># {order._id}</Span>
          </H6>
          <Date>Placed on {date}</Date>
        </OrderRow>
      </TableRow>
      {order?.products?.map((val, index) => (
        <Product product={val} key={index} />
      ))}
    </>
  );
};

export default TRow;
