import { SingleSlideWrapper, Image, Img } from "./styles";

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
