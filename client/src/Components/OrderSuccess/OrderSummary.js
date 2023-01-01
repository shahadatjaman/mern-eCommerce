import { Box, Grid } from "@mui/material";
import React from "react";
import { H5, Property, summaryStyles, Value, Values } from "./Styles";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import Invoice from "../../Pages/Checkout/Invoice";

const OrderSummary = () => {
  const { newOrder } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.auth);

  const printInvoice = () => {
    window.print();
  };

  return (
    newOrder && (
      <Box my={8} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} mb={2}>
            <H5>Order Summary</H5>
          </Grid>
          <Grid item xs={7} sx={{ ...summaryStyles }}>
            <Values>
              <Property>Customer name :</Property>
              {user && <Value>{user?.firstName + " " + user?.lastName}</Value>}
            </Values>
            <Values>
              <Property>Currency :</Property>
              <Value> {newOrder.currency} </Value>
            </Values>
            <Values>
              <Property>Total :</Property>
              <Value>$ {newOrder.total.$numberDecimal}</Value>
            </Values>
            <Button
              sx={{ height: 40 }}
              variant="contained"
              fullWidth
              onClick={printInvoice}
            >
              Print Invoice
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Values>
              <Property>Order ID :</Property>
              <Value># {newOrder._id}</Value>
            </Values>
            <Values>
              <Property>Payment Method :</Property>
              <Value>Cash on delivery</Value>
            </Values>
            <Values>
              <Property>Shipping :</Property>
              <Value> Free</Value>
            </Values>
            <Values>
              <Property>Date :</Property>
              <Value> 01/01/22, 01:00 AM</Value>
            </Values>
          </Grid>
        </Grid>
      </Box>
    )
  );
};

export default OrderSummary;
