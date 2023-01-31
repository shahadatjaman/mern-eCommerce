import Layout from "../Layout";
import Slider from "../../Components/Slider";
import TimerPart from "../../Components/Timer";
import Banner from "../../Components/Home/Banner";
import SpeOffer from "../../Components/Home/SpecialOffer";

import VerifiedCompany from "../../Components/Home/Verified";

import TopBrand from "../../Components/Home/Top_Brand";

const Home = () => {
  return (
    <Layout footer={true}>
      <Slider />
      <TimerPart />
      <Banner />
      <SpeOffer />
      <TopBrand />
      {/* <Categories /> */}
      <VerifiedCompany />
      {/* <Support />*/}
      {/* <Products /> */}
    </Layout>
  );
};

export default Home;
