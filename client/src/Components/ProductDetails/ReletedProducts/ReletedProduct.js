import { Col, Container, Row } from "reactstrap";
import { H3, Title, Wrapper } from "../../Shared/Styles/styles";

import { ProductsWrappper } from "./Styles";

const ReletedProduct = () => {
  return (
    <Wrapper>
      <Title>
        <H3>Related Products</H3>
      </Title>
      <ProductsWrappper>
        <Container>
          <Row>
            {/* {products?.map((product, index) => (
              <Col key={index} className="col-lg-3">
                <Product product={product} />
              </Col>
            ))} */}
          </Row>
        </Container>
      </ProductsWrappper>
    </Wrapper>
  );
};

export default ReletedProduct;
