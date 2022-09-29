import { Col, Container, Row } from "react-bootstrap";
import { H3, Title, Wrapper } from "../../../Components/Shared/Styles/styles";

import { ProductsWrappper } from "../styles";

import { products } from "../../../Components/Home/Products/data";

import Product from "../../../Components/Shared/Components/Product/Product";

const ReletedProduct = () => {
  return (
    <Wrapper>
      <Title>
        <H3>Related Products</H3>
      </Title>
      <ProductsWrappper>
        <Container>
          <Row>
            {products?.map((product, index) => (
              <Col key={index} className="col-lg-3">
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </ProductsWrappper>
    </Wrapper>
  );
};

export default ReletedProduct;
