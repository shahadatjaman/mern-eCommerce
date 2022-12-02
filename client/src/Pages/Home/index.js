// Components
// import Slider from "../../Components/Home/Slider";
import Support from "../../Components/Home/Support";

import Layout from "../Layout";
import Slider from "../../Components/Slider";
import TimerPart from "../../Components/Timer";
import Banner from "../../Components/Home/Banner";
import Categories from "../../Components/Home/Categories/";
import SpeOffer from "../../Components/Home/SpecialOffer";

import VerifiedCompany from "../../Components/Home/Verified";
const Home = () => {
  return (
    <Layout>
      <Slider />
      <TimerPart />
      <Banner />
      <SpeOffer />
      {/* <Categories /> */}
      <VerifiedCompany />
      {/* <Support />*/}
      {/* <Products /> */}
    </Layout>
  );
};

export default Home;
