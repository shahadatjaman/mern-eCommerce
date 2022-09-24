import { SingleSlideWrapper, H4, Image, Img, LeftSlide } from "./styles";

import { Container, Row, Col } from "../../../Styles/Gride";

const SingleSlide = ({ sliderData }) => {
  return (
    <SingleSlideWrapper>
      <Container>
        <Row>
          <Col lg_width="40">
            <LeftSlide>
              <H4>{sliderData.name}</H4>
            </LeftSlide>
          </Col>
          <Col lg_width="60">
            <Image>
              <Img src={sliderData.url} alt="pci" />
            </Image>
          </Col>
        </Row>
      </Container>
    </SingleSlideWrapper>
  );
};

export default SingleSlide;
