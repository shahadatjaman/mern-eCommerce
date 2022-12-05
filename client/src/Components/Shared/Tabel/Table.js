import { Box } from "@mui/material";
import { Table, TBody, Th, Thead, Tr } from "./Styles";
import Tdata from "./Tdata";

const CartTable = () => {
  return (
    <Box sx={{ background: "#fff", borderRadius: 4 }}>
      <Table>
        <Thead>
          <Tr bg="#f9f9f9">
            <Th>Product</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Subtotal</Th>
          </Tr>
        </Thead>
        <TBody>
          <Tr>
            <Tdata />
          </Tr>
          <Tr>
            <Tdata />
          </Tr>
          <Tr>
            <Tdata />
          </Tr>
        </TBody>
      </Table>
    </Box>
  );
};

export default CartTable;
