import { useSelector } from "react-redux";
import { Table, TableContent, TBody, Th, Thead, Title, Tr } from "./Styles";
import { Row, Col } from "../../Styles/Gride";
import Tdata from "./Tdata";

const CartTable = () => {
  const { lists } = useSelector((state) => state.wishList);

  return (
    <Row>
      <Col lg_width="100">
        <Title>Your wishlist items</Title>
        <TableContent>
          <Table>
            <Thead>
              <Tr bg="#f9f9f9">
                <Th>IMAGE</Th>
                <Th>PRODUCT NAME</Th>
                <Th>UNIT PRICE</Th>
                <Th>ADD TO CART </Th>
                <Th>ACTION</Th>
              </Tr>
            </Thead>
            <TBody>
              {lists?.map((cart, index) => (
                <Tr key={index}>
                  <Tdata cart={cart} />
                </Tr>
              ))}
            </TBody>
          </Table>
        </TableContent>
      </Col>
    </Row>
  );
};

export default CartTable;
