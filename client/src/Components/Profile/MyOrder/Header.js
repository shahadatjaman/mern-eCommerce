import React from "react";

import {
  Amount,
  EmptyOrder,
  HeaderWrapper,
  Menu,
  ProducrWrapper,
  Text,
} from "./Styles";

// import Query from "./Query";
import Table from "./Table";
import { useSelector } from "react-redux";

const Header = () => {
  const { orders } = useSelector((state) => state.order);

  return (
    <HeaderWrapper>
      <Menu>
        <Text> Orders</Text>
        {orders ? <Amount> {orders.length} </Amount> : <Amount>0</Amount>}
      </Menu>
      <ProducrWrapper>
        {orders?.length > 0 ? (
          <Table />
        ) : (
          <EmptyOrder>Your order is empty!</EmptyOrder>
        )}
      </ProducrWrapper>
    </HeaderWrapper>
  );
};

export default Header;
