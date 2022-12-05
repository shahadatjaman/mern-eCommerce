import React from "react";

import { useNavigate } from "react-router-dom";
import {
  ActionBar,
  Amount,
  HeaderSearch,
  HeaderWrapper,
  Icon,
  Menu,
  PageHeaderContainer,
  Plus,
  ProducrWrapper,
  Text,
} from "./Styles";
import Button from "@mui/material/Button";
// import Query from "./Query";
import Table from "./Table";
import { useSelector } from "react-redux";

const Header = () => {
  const { orders } = useSelector((state) => state.order);
  console.log(orders);
  return (
    <HeaderWrapper>
      <Menu>
        <Icon>
          <i className="fa-solid fa-bars"></i>
        </Icon>
        <Text>All Orders</Text>
        {orders ? <Amount> {orders.length} </Amount> : <Amount>0</Amount>}
      </Menu>
      <ProducrWrapper>
        <PageHeaderContainer>
          <HeaderSearch>{/* <Query /> */}</HeaderSearch>
          {/* <ActionBar>
            <Button variant="contained">
              <Plus>+</Plus>
              New Product
            </Button>
          </ActionBar> */}
        </PageHeaderContainer>
        <Table />
      </ProducrWrapper>
    </HeaderWrapper>
  );
};

export default Header;
