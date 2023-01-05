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
            <Products
              id="63ab3df4ba6e5a0fde1ec5f7"
              title={"Personal Protective Equipment"}
            />
          </Col>
          <Col className="col-xxl-4 col-md-12 col-sm-12  col-12">
            {/* <Products id="638d718dc57c08cdc0b59ca0" title={"Top Ranking"} /> */}
            <Products id="63ab3d7fba6e5a0fde1ec5eb" title={"New arrivals"} />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default TimerPart;
