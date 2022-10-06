import { BannerWrap, ImgWrap, Img } from "./styles";

const Banner = ({ url }) => {
  return (
    <BannerWrap>
      <ImgWrap>
        <Img src={url} alt="banner" />
      </ImgWrap>
    </BannerWrap>
  );
};

export default Banner;
