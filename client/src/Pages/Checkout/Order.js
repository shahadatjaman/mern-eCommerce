import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  H3,
  Li,
  OrderBottom,
  OrderMiddle,
  OrderTotal,
  OrderWrape,
  OrderWrapper,
  PlaceOrder,
  Ul,
  YourOrderTop,
} from "./Styles";
import { useColor } from "../../utils";

import Button from "../../Components/Shared/Form/Button";
import PaymentMethod from "./PaymentMethod";

const Order = () => {
  const { primary, gray } = useColor();

  return (
    <OrderWrapper>
      <Container x="3">
        <Col className="offset-md-2" md="8" sm="12">
          <Row>
            <Col md="6">
              <PaymentMethod />
            </Col>
            <Col md="6">
              <H3>Your order</H3>
              <OrderWrape>
                <YourOrderTop>
                  <Ul fontWeight="600">
                    <Li>Product</Li>
                    <Li>Total</Li>
                  </Ul>
                </YourOrderTop>
                <OrderMiddle>
                  <Ul fontWeight="500">
                    <Li>Lorem ipsum jacket X 1</Li>
                    <Li>$10.00</Li>
                  </Ul>
                </OrderMiddle>
                <OrderBottom>
                  <Ul fontWeight="500">
                    <Li>Shipping</Li>
                    <Li>Free shipping</Li>
                  </Ul>
                </OrderBottom>
                <OrderTotal>
                  <Ul fontWeight="600" fontSize="20">
                    <Li>Total</Li>
                    <Li color={primary}>$10.00</Li>
                  </Ul>
                </OrderTotal>
              </OrderWrape>
              <PlaceOrder>
                <Button
                  type="submit"
                  activeColor={gray}
                  hoverColor={primary}
                  text="Order Now"
                  width="100"
                  radius={50}
                />
              </PlaceOrder>
            </Col>
          </Row>
        </Col>
      </Container>
    </OrderWrapper>
  );
};

export default Order;
