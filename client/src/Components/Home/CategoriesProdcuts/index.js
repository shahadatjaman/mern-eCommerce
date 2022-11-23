import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Filter from "./Filter";
import { Wrapper, Title, H3 } from "../../Shared/Styles/styles";

import Product from "../../Shared/Product/Product";

import { fetchProducts } from "../../../feature/reducer/product/";
import { useEffect } from "react";

const Products = () => {
  const { products } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md="100">
            <Title>
              <H3>DAILY DEALS!</H3>
              <Filter />
            </Title>
          </Col>
        </Row>
        <Row>
          {products?.map((product, index) => (
            <Col key={index} md="3">
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Products;
