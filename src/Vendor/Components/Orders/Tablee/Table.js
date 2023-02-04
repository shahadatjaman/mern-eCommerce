import React from "react";
import { Box } from "@mui/material";
import { Table, TR, Thead, Th, TBody, Td, HeadRow } from "./Styles";
import { OrderTable as data } from "./data";
import AvatarChip from "./Chip";

const OrderTable = () => {
  return (
    <Box>
      <Table>
        <Thead>
          <HeadRow>
            {data.tableHead?.map((val, index) => (
              <Th align={val.align} key={index}>
                {val.name}
              </Th>
            ))}
          </HeadRow>
        </Thead>
        <TBody>
          {data.tableBody?.map((val, index) => (
            <TR key={index}>
              <Td height={"3rem"} align={"left"}>
                {val.customerID}
              </Td>
              <Td align={"left"}>
                <AvatarChip name={val.customerName} avatar={val.avatar} />
              </Td>
              <Td align={"left"}>{val.order}</Td>
              <Td align={"center"}>{val.date}</Td>
              <Td align={"center"}>{val.price}</Td>
              <Td align={"center"}>{val.status}</Td>
              <Td align={"center"}>{val.payment}</Td>
            </TR>
          ))}
        </TBody>
      </Table>
    </Box>
  );
};

export default OrderTable;
