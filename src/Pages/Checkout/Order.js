import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formStyles, H3, Li, OrderBottom, OrderTotal, Ul } from "./Styles";
import { getTotalPrice, useColor } from "../../utils";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControlLabel, FormGroup, Grid, Switch } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useCheckbox } from "../../hooks/useCheckbox";
import { createUserAddress } from "../../feature/reducer/user";

import { createOrder } from "../../feature/reducer/order/";
import PaymnetMethod from "./paymnetMethod";

const Order = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [delivery, setDelivery] = useState(false);

  const { primary } = useColor();

  const { carts } = useSelector((state) => state.cart);
  const { isLoading } = useSelector((state) => state.order);
  const { isValidAddress, userAddress } = useSelector((state) => state.user);

  const { isChecked, handleChange } = useCheckbox();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderHandler = () => {
    dispatch(createUserAddress({ values: userAddress }));

    if (carts) {
      const values = {
        products: carts,
        total: totalPrice,
        paid: false,
        currency: "USD",
      };

      dispatch(createOrder({ values, navigate }));
    }
  };

  useEffect(() => {
    if (carts) {
      const prices = getTotalPrice({ carts });
      setTotalPrice(prices);
    }
  }, [carts]);

  return (
    <Box sx={{ flexGrow: 1, borderRadius: 2, ...formStyles }}>
      <Grid container spacing={2}>
        <Grid item xl={12}>
          <H3>Your order</H3>

          <OrderBottom>
            <Ul fontWeight="500">
              <Li>Shipping</Li>
              <Li>Free shipping</Li>
            </Ul>
          </OrderBottom>
          <OrderTotal>
            <Ul fontWeight="600" fontSize="20">
              <Li>Total</Li>
              <Li color={primary}>$ {totalPrice}</Li>
            </Ul>
          </OrderTotal>
        </Grid>
        <Grid item lg={12} md={12}>
          <PaymnetMethod setDelivery={setDelivery} />
        </Grid>
        <Grid item lg={12} md={12}>
          <FormGroup>
            <FormControlLabel
              sx={{ "& .MuiFormControlLabel-label": { fontSize: "14px" } }}
              control={<Checkbox onChange={handleChange} value={isChecked} />}
              label="I have read and agree to the website terms and conditions"
            />
          </FormGroup>
        </Grid>
        <Grid item lg={12} md={12}>
          {isValidAddress && isChecked && delivery ? (
            <Button
              sx={{ height: 50 }}
              variant="contained"
              onClick={orderHandler}
              fullWidth
            >
              Place Order
            </Button>
          ) : (
            <Button
              sx={{ height: 50 }}
              variant="contained"
              fullWidth
              onClick={orderHandler}
              disabled
            >
              Place Order
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Order;
