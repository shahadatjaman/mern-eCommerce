import { Carousel, Col, Container, Row } from "react-bootstrap";

import Categories from "./Categories";
import SliderDemo from "./Demo";
import RigthColumn from "./RightColumn";

import { CarouselWrapper, SliderWrapper, CarouselCaption } from "./Styles";

import { useWindowWidth } from "../../hooks/userWindowWidth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../feature/reducer/categories";
import { Button } from "@mui/material";

const Slider = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getCategories({ pathOne: "v1", pathTwo: "getcategories", method: "get" })
    );
  }, [dispatch]);

  return (
    <SliderWrapper>
      <Container fluid={isFluid}>
        <Row>
          <Col className="col-xl-3 dispaly-none">
            <Categories />
          </Col>
          <Col className="col-xl-6 col-md-8 col-sm-12 col-12">
            <CarouselWrapper>
              {[
                {
                  img_url:
                    "https://s.alicdn.com/@img/imgextra/i4/O1CN01d1QrTp1fDDxpQhBTA_!!6000000003972-0-tps-990-400.jpg",
                },
              ].map((item, i) => (
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
