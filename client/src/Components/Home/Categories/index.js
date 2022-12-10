import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import { Img, Item, Wrapper } from "./Styles";

import { useWindowWidth } from "../../../hooks/userWindowWidth";
import { cartegories } from "./data";

const Categories = () => {
  const [show, setShow] = useState(5);

  const isFluid = useWindowWidth({ width: 1040 });

  useEffect(() => {
    if (isFluid) {
      setShow(3);
    } else {
      setShow(5);
    }
  }, [isFluid]);

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
            <Slider {...settings}>
              {cartegories.map((cate, index) => (
                <Item>
                  <Img src={cate.img_url} alt={cate.name} />
                  <span>{cate.name}</span>
                </Item>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Categories;
