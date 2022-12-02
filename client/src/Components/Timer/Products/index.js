import { Col, Container, Row } from "react-bootstrap";
import { FcBarChart } from "react-icons/fc";
import { products } from "../data";
import {
  Body,
  Caption,
  H4,
  H5,
  Img,
  ImgWrapper,
  Item,
  P,
  Title,
} from "../Styles";
import { Wrapper } from "./Styles";

const Products = () => {
  return (
    <Wrapper>
      <Container fluid className="p-0 msmt-2">
        <Row>
          <Col className="px-2">
            <Item>
              <Title>
                <FcBarChart />
                <H4>Online personalization center</H4>
              </Title>
              <Body>
                <Row>
                  {products.map((item, index) => (
                    <Col className="col-4">
                      <ImgWrapper>
                        <Img src={item.img_url} alt="mobile" />
                      </ImgWrapper>
                      <Caption>
                        <H5>Lorem ipsum</H5>
                        <P>
                          sit amet, consecteture adipisciing wlit. gravida
                          vivera
                        </P>
                      </Caption>
                    </Col>
                  ))}
                </Row>
              </Body>
            </Item>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Products;
