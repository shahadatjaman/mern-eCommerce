import { useState } from "react";

import { Buttons, Next, Previus, RightSlide, Wrapper } from "./styles";

import SingleSlide from "./SingleSlide";

import { Container, Row, Col } from "../../Styles/Gride";

import Departments from "../Header/deparrtmaent/Departments";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  const [changer, setChanger] = useState(0);

  let sliders = [
    {
      name: "Slider 1",
      url: "https://smartslider3.com/wp-content/uploads/2019/05/sliderimages-780x410.png",
    },
    {
      name: "Slider 2",
      url: "https://smartslider3.com/wp-content/uploads/2017/07/heroslider-780x410.png",
    },
  ];

  const prev = () => {
    setChanger((s) => s + 1);
  };
  const next = () => {
    setChanger((s) => s - 1);
  };

  console.log(changer);
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg_width="20">
            <Departments />
          </Col>
          <Col lg_width="80">
            <RightSlide>
              <SingleSlide sliderData={sliders[changer]} />
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
            </RightSlide>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Slider;
