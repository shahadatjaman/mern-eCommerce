import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "../../../Styles/Gride";
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
