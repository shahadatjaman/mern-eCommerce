import { SingleSlideWrapper, H4, Image, Img } from "./styles";

const SingleSlide = ({ sliderData }) => {
  console.log(sliderData);
  return (
    <SingleSlideWrapper>
      <Image>
        <Img src={sliderData.url} alt="pci" />
      </Image>
    </SingleSlideWrapper>
  );
};

export default SingleSlide;
