import { Carousel, Col, Container, Row } from "react-bootstrap";

import Categories from "./Categories";
import SliderDemo from "./Demo";
import RigthColumn from "./RightColumn";

import { CarouselWrapper, SliderWrapper, CarouselCaption } from "./Styles";

import { useWindowWidth } from "../../hooks/userWindowWidth";

import { Button } from "@mui/material";
import { sliders } from "./data";

const Slider = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <SliderWrapper>
      <Container fluid={isFluid}>
        <Row>
          <Col className="col-xl-3 dispaly-none">
            <Categories />
          </Col>
          <Col className="col-xl-6 col-md-8 col-sm-12 col-12">
            <CarouselWrapper>
              {sliders.map((item, i) => (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={item.img_url}
                    alt="First slide"
                  />
                  <CarouselCaption>
                    <Button variant="contained">View more</Button>
                  </CarouselCaption>
                </Carousel.Item>
              ))}
            </CarouselWrapper>
            <SliderDemo />
          </Col>
          <Col className="col-xl-3 col-md-4 col-sm-12 display-flex justify-between mt-3">
            <RigthColumn />
          </Col>
        </Row>
      </Container>
    </SliderWrapper>
  );
};

export default Slider;
