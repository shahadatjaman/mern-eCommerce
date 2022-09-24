import { Col, Container, Row } from "../../../Styles/Gride";
import Filter from "./Filter";
import { Wrapper, Title, H3 } from "../../Shared/Styles/styles";

import Product from "../../Shared/Components/Product/Product";
import { ProductWrap } from "./styles";

const Products = () => {
  const products = [
    {
      title: "Lorem ipsum fashion jacket",
      imageOne:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg",
      imageTwo:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg",
      ratting: 0,
      price: 24.54,
      old: 20.57,
    },
    {
      title: "Lorem ipsum fashion jacket",
      imageOne:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg",
      imageTwo:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg",
      ratting: 0,
      price: 24.54,
      old: 20.57,
    },
    {
      title: "Lorem ipsum fashion jacket",
      imageOne:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg",
      imageTwo:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg",
      ratting: 0,
      price: 24.54,
      old: 20.57,
    },
    {
      title: "Lorem ipsum fashion jacket",
      imageOne:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg",
      imageTwo:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg",
      ratting: 0,
      price: 24.54,
      old: 20.57,
    },
  ];

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
