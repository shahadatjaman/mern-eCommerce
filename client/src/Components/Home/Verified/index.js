import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Caption,
  H5,
  Img,
  ImgWrapper,
  Item,
  Items,
  Title,
  Verified,
  Wrapper,
} from "./Styles";
import Slider from "react-slick";

import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { useState } from "react";
import { useEffect } from "react";

const VerifiedCompany = () => {
  const [show, setShow] = useState(3);
  const isValid = useWindowWidth({ width: 990 });
  useEffect(() => {
    if (isValid) {
      setShow(1);
    } else {
      setShow(3);
    }
  }, [isValid]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Title>
              <H5>Most Viewed</H5>
            </Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Verified>
              <Slider {...settings}>
                {[1, 2, 3].map((item, index) => (
                  <div key={index}>
                    <Items>
                      <Item>
                        <ImgWrapper>
                          <Img
                            src={
                              "https://res.cloudinary.com/dza2t1htw/image/upload/v1669021400/car.ca772f8bc1dee1f11691_qhyhmb.png"
                            }
                            alt="car"
                          />
                        </ImgWrapper>
                        <Caption>
                          <h5>Vetements Bien Finis Avec Des Design À La</h5>
                          <p>
                            High Quality A AMI LEVEL 3 blue green Disposable
                            sterile 60 gms
                          </p>
                        </Caption>
                      </Item>
                    </Items>
                  </div>
                ))}
              </Slider>
            </Verified>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default VerifiedCompany;
