import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Wrapper } from "./Styles";

import Product from "../../Shared/Product/Product";

const Products = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col className="col-3">
            <Product />
          </Col>
          <Col className="col-9"></Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Products;
