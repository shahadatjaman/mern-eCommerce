import { Wrapper } from "./styles";
import Banner from "./Banner";

const Sidebar = () => {
  return (
    <Wrapper>
      <Banner url="https://cdn.shopify.com/s/files/1/1613/0177/files/shop13_home_banner1.jpg" />
      <Banner url="https://cdn.shopify.com/s/files/1/1613/0177/files/shop13_home_banner2.jpg" />
      <Banner url="https://cdn.shopify.com/s/files/1/1613/0177/files/shop13_home_banner1.jpg" />
      <Banner url="https://cdn.shopify.com/s/files/1/1613/0177/files/shop13_home_banner3.jpg" />
    </Wrapper>
  );
};

export default Sidebar;
