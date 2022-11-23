import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useWindowWidth } from "../../hooks/userWindowWidth";

import Products from "./Products";
import { Wrapper } from "./Styles";
import Timer from "./Timer";

const TimerPart = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <Wrapper>
      <Container fluid={isFluid}>
        <Row>
          <Col className="col-xxl-4 col-md-6 col-sm-12">
            <Timer />
          </Col>
          <Col className="col-xxl-4 col-md-6 col-sm-12 col-12">
            <Products />
          </Col>
          <Col className="col-xxl-4 col-md-12 col-sm-12  col-12">
            <Products />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default TimerPart;
