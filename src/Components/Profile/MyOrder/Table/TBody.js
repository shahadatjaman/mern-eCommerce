import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableBody } from "./Styles";

import TRow from "./TableRow";
import { getOrders } from "../../../../feature/reducer/order";
import { useSort } from "../../../../hooks/useSort";

const Body = () => {
  const { orders } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const sorted = useSort(orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  if (!orders) {
    return "Order not found!";
  }

  return (
    <TableBody>
      {sorted?.map((order, index) => (
        <TRow order={order} key={index} />
      ))}
    </TableBody>
  );
};

export default Body;
