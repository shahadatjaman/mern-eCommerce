import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import OrderContent from "../../Components/OrderSuccess";
import order, { getOrder } from "../../feature/reducer/order";
import Layout from "../Layout";
import { Box } from "@mui/material";
import Invoice from "../Checkout/Invoice";

const OrderSuccess = () => {
  const { order_id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder({ order_id }));
  }, [dispatch, order_id]);

  return (
    <Layout>
      <OrderContent />
      <Box>
        <Invoice />
      </Box>
    </Layout>
  );
};

export default OrderSuccess;
