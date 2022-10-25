import React, { useState } from "react";
import {
  H3,
  Logo,
  Method,
  Methods,
  PaymentGateway,
  PaymentWrap,
  Text,
} from "./Styles";

const PaymentMethod = () => {
  const [activemethod, setActivemethod] = useState(false);

  const activeHandler = () => {
    setActivemethod(true);
  };

  return (
    <PaymentWrap>
      <H3>Payment Gateway</H3>
      <PaymentGateway>
        <Methods>
          <Text>Cash On Delivery</Text>
          <Method activemethod={activemethod} active onClick={activeHandler}>
            <Logo src="https://res.cloudinary.com/dza2t1htw/image/upload/v1665931290/Pngtree_cash_on_delivery_png_6271116_ycz9gx.png" />
          </Method>
        </Methods>
      </PaymentGateway>
    </PaymentWrap>
  );
};

export default PaymentMethod;
