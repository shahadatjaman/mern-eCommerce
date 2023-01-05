import { Col, Container, Row } from "react-bootstrap";
import { demoData } from "../data";

import { DemoImg, H5, Img, Items, Title, Wrapper } from "./Styles";

const SliderDemo = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col className="col-12 col-md-12 d-flex justify-content-between">
            <Row className="width-100">
              {demoData.map((item, index) => (
                <Col key={index} className="col-3 col-lg-3 col-sm-3 col-6">
                  <Items>
                    <DemoImg>
                      <Img src={item.img_url} alt="mobile" />
                    </DemoImg>
                    <Title>
                      <H5>Mobile Phone & Accessories</H5>
                    </Title>
                  </Items>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default SliderDemo;
