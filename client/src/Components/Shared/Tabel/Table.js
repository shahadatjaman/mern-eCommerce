import { useSelector } from "react-redux";
import { Table, TableContent, TBody, Th, Thead, Title, Tr } from "./Styles";
import { Row, Col } from "react-bootstrap";
import Tdata from "./Tdata";

const CartTable = ({ data }) => {
  return (
    <Row>
      <Col md="12">
        <Title>Your {data.name}</Title>
        <TableContent>
          <Table>
            <Thead>
              <Tr bg="#f9f9f9">
                {data.head?.map((head, index) => (
                  <Th key={index}>{head}</Th>
                ))}
              </Tr>
            </Thead>
            <TBody>
              {data.items?.map((cart, index) => (
                <Tr key={index}>
                  <Tdata TabelName={data.name} cart={cart} />
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
