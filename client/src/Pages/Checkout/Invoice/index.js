import { Box, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Body from "./Body";
import Header from "./Header";
import { Bottom, Footer, Text, TableWrapper, Wrapper, H4 } from "./Styles";
import BasicTable from "./Table";
import { getUserAddress } from "../../../feature/reducer/user/";
import { useParams } from "react-router-dom";
import { getOrder } from "../../../feature/reducer/order";

const Invoice = () => {
  const { userAddress } = useSelector((state) => state.user);
  const { newOrder } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const { order_id } = useParams();

  useEffect(() => {
    dispatch(
      getUserAddress({
        pathOne: "auth",
        pathTwo: "getuseraddress",
        method: "get",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrder({ order_id }));
  }, [dispatch, order_id]);

  return (
    userAddress &&
    newOrder && (
      <Wrapper>
        <Header address={userAddress} />

        <Body address={userAddress} order={newOrder} />

        <TableWrapper>
          <BasicTable order={newOrder} />
        </TableWrapper>
        <Bottom></Bottom>
        <Footer>
          <H4>Powered By Xpart</H4>
          <Text font={12} fontWeight={400} color={"#000"}>
            See the documentation below for a complete reference to all of the
            props and classes available to the components mentioned here.
          </Text>
        </Footer>
      </Wrapper>
    )
  );
};

export default Invoice;
