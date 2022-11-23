import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

import Categories from "./Categories";
import SliderDemo from "./Demo";
import RigthColumn from "./RightColumn";

import { CarouselWrapper, SliderWrapper, CarouselCaption } from "./Styles";

import { useWindowWidth } from "../../hooks/userWindowWidth";

const img =
  "https://res.cloudinary.com/dza2t1htw/image/upload/v1668861112/slide.167f21d5380d53b3c4d1_zp1qmq.jpg";

const Slider = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <SliderWrapper>
      <Container fluid={isFluid}>
        <Row>
          <Col className="col-xl-3 dispaly-none">
            <Categories />
          </Col>
          <Col className="col-xl-6 col-md-12 col-12">
            <CarouselWrapper>
              {[
                {
                  img_url:
                    "https://s.alicdn.com/@img/imgextra/i4/O1CN01d1QrTp1fDDxpQhBTA_!!6000000003972-0-tps-990-400.jpg",
                },
              ].map((item, i) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.img_url}
                    alt="First slide"
                  />
                  <CarouselCaption>
                    <Button>View more</Button>
                  </CarouselCaption>
                </Carousel.Item>
              ))}
            </CarouselWrapper>
            <SliderDemo />
          </Col>
          <Col className="col-xl-3 col-md-12 display-flex justify-between m-top-4">
            <RigthColumn />
          </Col>
        </Row>
      </Container>
    </SliderWrapper>
  );
};

export default Slider;
