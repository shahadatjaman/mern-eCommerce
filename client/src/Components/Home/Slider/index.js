import { useState } from "react";

import { Buttons, Next, Previus, RightSlide, Wrapper } from "./styles";

import SingleSlide from "./SingleSlide";

import { Container, Row, Col } from "../../../Styles/Gride";

import Departments from "../../Header/deparrtmaent/Departments";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Slider = () => {
  const [changer, setChanger] = useState(0);

  let sliders = [
    {
      name: "Slider 1",
      url: "https://res.cloudinary.com/dza2t1htw/image/upload/v1663907155/png-transparent-kawasaki-ninja-300-kawasaki-motorcycles-sport-bike-digital-electronic-products-exhaust-system-car-mode-of-transport_pxj8si.png",
    },
    {
      name: "Slider 2",
      url: "https://res.cloudinary.com/dza2t1htw/image/upload/v1663906914/iphone_12_PNG35_nvbwx2.png",
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
          <Col lg_width="20">
            <Departments />
          </Col>
          <Col lg_width="80">
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
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Slider;
