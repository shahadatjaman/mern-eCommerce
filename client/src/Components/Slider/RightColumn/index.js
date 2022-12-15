import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { featuresData } from "../data";

import {
  Button,
  Caption,
  FeaturesItems,
  H5,
  Img,
  ImgWrapper,
  Items,
  Span,
  Title,
  Wrapper,
} from "./Styles";

const img =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1668862481/phone.8d4a983e1514efd5e070_qpdbgs.png";

const RigthColumn = () => {
  return (
    <>
      {featuresData.map((item, index) => (
        <FeaturesItems key={index}>
          <Container fluid className="p-0">
            <Row>
              <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <ImgWrapper>
                  <Img src={item.img_url} alt="phone" />
                </ImgWrapper>
              </Col>
              <Col className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <Caption>
                  <Title>
                    <H5>{item.text}</H5>
                  </Title>
                  <Button>
                    <span>Shop Now</span>
                    <FaAngleRight />
                  </Button>
                </Caption>
              </Col>
            </Row>
          </Container>
        </FeaturesItems>
      ))}
    </>
  );
};

export default RigthColumn;
