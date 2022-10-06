import { useState } from "react";

import { Buttons, Next, Previus, RightSlide, Wrapper } from "./styles";

import SingleSlide from "./SingleSlide";

import { Container, Row, Col } from "react-bootstrap";

import Sidebar from "./Sidebar/Sidebar";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  const [changer, setChanger] = useState(0);

  let sliders = [
    {
      name: "Slider 1",
      url: "https://cdn.shopify.com/s/files/1/1613/0177/files/shop13_home_slider1.jpg?v=1614324723",
    },
    {
      name: "Slider 2",
      url: "https://cdn.shopify.com/s/files/1/1613/0177/files/shop13_home_slider2.jpg?v=1614324723",
    },
  ];

  const prev = () => {
    setChanger((s) => s + 1);
  };
  const next = () => {
    setChanger((s) => s - 1);
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col md="10">
            <RightSlide>
              <SingleSlide sliderData={sliders[changer]} />
            </RightSlide>
            <Buttons>
              {changer === sliders.length - 1 ? (
                <Previus style={{ cursor: "auto" }} disabled onClick={prev}>
                  <FaAngleLeft />
                </Previus>
              ) : (
                <Previus onClick={prev}>
                  <FaAngleLeft />
                </Previus>
              )}

              {changer <= 0 ? (
                <Next style={{ cursor: "auto" }} disabled onClick={next}>
                  <FaAngleRight />
                </Next>
              ) : (
                <Next onClick={next}>
                  <FaAngleRight />
                </Next>
              )}
            </Buttons>
          </Col>
          <Col md="2">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Slider;
