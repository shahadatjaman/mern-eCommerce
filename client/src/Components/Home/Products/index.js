import { Col, Container, Row } from "../../../Styles/Gride";
import Filter from "./Filter";
import { Wrapper, Title, H3 } from "../../Shared/Styles/styles";

import Product from "../../Shared/Components/Product/Product";
import { products } from "./data";

const Products = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg_width="100">
            <Title>
              <H3>DAILY DEALS!</H3>
              <Filter />
            </Title>
          </Col>
        </Row>
        <Row>
          {products?.map((product, index) => (
            <Col key={index} lg_width="25">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Products;
