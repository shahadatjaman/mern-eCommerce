import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableBody } from "./Styles";

import TRow from "./TableRow";
import { getOrders } from "../../../../feature/reducer/order";

const Body = () => {
  const { orders } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  if (!orders) {
    return "Order not found!";
  }

  return (
    <TableBody>
      {orders?.map((order, index) => (
        <TRow order={order} key={index} />
      ))}
    </TableBody>
  );
};

export default Body;
