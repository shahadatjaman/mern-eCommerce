import { Col, Row } from "react-bootstrap";
import {
  Button,
  Caption,
  Containerr,
  Dash,
  Img,
  ImgWrapper,
  Nineteen,
  SubTitle,
  Wrapper,
} from "./Styles";

import { useWindowWidth } from "../../../hooks/userWindowWidth";

const Banner = () => {
  const isFluid = useWindowWidth({ width: 1400 });

  return (
    <Wrapper>
      <Containerr fluid={isFluid}>
        <Row>
          <Col className="col-4">
            <Caption>
              <span>Shop and</span>
              <h3>SAVE BIG</h3>

              <Dash>on hottest tablets</Dash>
            </Caption>
          </Col>
          <Col className="col-4">
            <Button>
              <SubTitle>Starting at</SubTitle>
              <span>
                $79
                <Nineteen>99</Nineteen>
              </span>
            </Button>
          </Col>
          <Col className="col-4">
            <ImgWrapper>
              <Img
                src={
                  "https://res.cloudinary.com/dza2t1htw/image/upload/v1668885554/girl.8ae80697731f43a80a5c_ws6tue.png"
                }
                alt="girl"
              />
            </ImgWrapper>
          </Col>
        </Row>
      </Containerr>
    </Wrapper>
  );
};

export default Banner;
