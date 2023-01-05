import React from "react";
import { Billing, Circle, Order, TabLink, TabWrapper } from "../Styles";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
const Tab = () => {
  const { pathname } = useLocation();

  return (
    <TabWrapper>
      <Billing>
        <TabLink to={"/billing"}>
          {pathname !== "/billing" ? (
            <Circle>1</Circle>
          ) : (
            <BsFillCheckCircleFill />
          )}
          Delivery Address
        </TabLink>
      </Billing>
      <Order>
        <TabLink to={"/order"}>
          {pathname !== "/order" ? (
            <Circle>2</Circle>
          ) : (
            <BsFillCheckCircleFill />
          )}
          Order & payment
        </TabLink>
      </Order>
    </TabWrapper>
  );
};

export default Tab;
