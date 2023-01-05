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
import { useDispatch, useSelector } from "react-redux";
import { mostViewed } from "../../../feature/reducer/product";
import Product from "./product";

const VerifiedCompany = () => {
  const [show, setShow] = useState(3);

  const dispatch = useDispatch();

  const { mostViewed: products } = useSelector((state) => state.product);

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

  useEffect(() => {
    dispatch(
      mostViewed({
        pathOne: "v1",
        pathTwo: "most_viewed_products",
        method: "get",
      })
    );
  }, [dispatch]);

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
                {products?.map((item, index) => (
                  <Product product={item} key={index} />
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
