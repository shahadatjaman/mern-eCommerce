import { SingleSlideWrapper, H4, Image, Img, LeftSlide } from "./styles";

import { Container, Row, Col } from "react-bootstrap";

const SingleSlide = ({ sliderData }) => {
  return (
    <SingleSlideWrapper>
      <Image>
        <Img src={sliderData.url} alt="pci" />
      </Image>
    </SingleSlideWrapper>
  );
};

export default SingleSlide;
